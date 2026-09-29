import { existsSync } from 'node:fs';
import { readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distRoot = path.join(root, 'dist');
const publicRoot = path.join(root, 'public');
const outputArg = process.argv.find((arg) => arg.startsWith('--output='));
const outputPath = outputArg ? path.resolve(outputArg.slice('--output='.length)) : null;
const sitemapNames = ['core', 'articles', 'authors', 'team', 'states'];

function decode(value = '') {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function text(value = '') {
  return decode(
    value
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, 'i'));
  return decode(match?.[1] ?? match?.[2] ?? '');
}

function meta(html, key, value) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) => attr(candidate, key).toLowerCase() === value.toLowerCase());
  return tag ? attr(tag, 'content') : '';
}

function link(html, rel) {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  const tag = tags.find((candidate) => attr(candidate, 'rel').toLowerCase() === rel.toLowerCase());
  return tag ? attr(tag, 'href') : '';
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, 'gi'))].map(
    (match) => text(match[1]),
  );
}

function htmlPathFor(url) {
  const pathname = new URL(url).pathname;
  if (pathname === '/') return path.join(distRoot, 'index.html');
  return path.join(distRoot, pathname.replace(/^\//, ''), 'index.html');
}

async function publicAssetSize(src) {
  if (!src.startsWith('/')) return null;
  const clean = src.split(/[?#]/)[0];
  const candidate = path.join(publicRoot, clean);
  if (!existsSync(candidate)) return null;
  return (await stat(candidate)).size;
}

const urls = [];
for (const name of sitemapNames) {
  const xml = await readFile(path.join(distRoot, `sitemap-${name}.xml`), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(decode(match[1]));
}

const rows = [];
const assetUsage = new Map();
for (const url of [...new Set(urls)].sort()) {
  const file = htmlPathFor(url);
  if (!existsSync(file)) throw new Error(`Sitemap route has no built HTML: ${url} -> ${file}`);
  const html = await readFile(file, 'utf8');
  const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];
  const images = [];
  for (const tag of imageTags) {
    const src = attr(tag, 'src');
    const altPresent = /\salt=(?:"[^"]*"|'[^']*')/i.test(tag);
    const alt = attr(tag, 'alt');
    const size = await publicAssetSize(src);
    const suspicious =
      !altPresent ||
      /(?:^|\b)(?:image|photo|graphic|placeholder|filename|exact article title|article cover|hero image|title treatment)(?:\b|$)/i.test(
        alt,
      );
    images.push({ src, alt, alt_present: altPresent, suspicious_alt: suspicious, bytes: size });
    if (src) {
      const usage = assetUsage.get(src) ?? { src, bytes: size, routes: [] };
      usage.routes.push(url);
      assetUsage.set(src, usage);
    }
  }
  const title = tags(html, 'title')[0] ?? '';
  const h1 = tags(html, 'h1');
  const h2 = tags(html, 'h2');
  const canonical = link(html, 'canonical');
  const description = meta(html, 'name', 'description');
  const keywords = meta(html, 'name', 'keywords');
  const ogTitle = meta(html, 'property', 'og:title');
  const twitterTitle = meta(html, 'name', 'twitter:title');
  const jsonLdBlocks = [
    ...html.matchAll(
      /<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  const schema = [];
  const schemaErrors = [];
  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      schema.push(parsed);
    } catch (error) {
      schemaErrors.push(String(error));
    }
  }
  const trackingTags =
    html.match(
      /<script\b[^>]*src=(?:"|')https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=GT-WFMD2MXW(?:"|')[^>]*>/gi,
    ) ?? [];
  rows.push({
    url,
    file: path.relative(root, file),
    title,
    description,
    canonical,
    keywords,
    og_title: ogTitle,
    twitter_title: twitterTitle,
    h1,
    h2,
    images,
    schema_blocks: schema.length,
    schema_errors: schemaErrors,
    tracking_loader_count: trackingTags.length,
    tracking_async: trackingTags.length === 1 && /\sasync(?:\s|=|>)/i.test(trackingTags[0]),
  });
}

function duplicateGroups(field) {
  const groups = new Map();
  for (const row of rows) {
    const value = row[field];
    if (!value) continue;
    const list = groups.get(value) ?? [];
    list.push(row.url);
    groups.set(value, list);
  }
  return [...groups.entries()]
    .filter(([, grouped]) => grouped.length > 1)
    .map(([value, grouped]) => ({ value, urls: grouped }));
}

const assets = [...assetUsage.values()].sort((a, b) => (b.bytes ?? 0) - (a.bytes ?? 0));
const issueLedger = {
  missing_or_empty_title: rows.filter((row) => !row.title).map((row) => row.url),
  missing_or_empty_description: rows.filter((row) => !row.description).map((row) => row.url),
  canonical_mismatch: rows
    .filter((row) => row.canonical !== row.url)
    .map((row) => ({ url: row.url, canonical: row.canonical })),
  h1_count_not_one: rows
    .filter((row) => row.h1.length !== 1)
    .map((row) => ({ url: row.url, h1: row.h1 })),
  h1_outside_advisory_length: rows
    .filter((row) => row.h1.some((heading) => heading.length < 20 || heading.length > 70))
    .map((row) => ({ url: row.url, h1: row.h1 })),
  h2_outside_advisory_length: rows
    .filter((row) => row.h2.some((heading) => heading.length < 20 || heading.length > 70))
    .map((row) => ({
      url: row.url,
      h2: row.h2.filter((heading) => heading.length < 20 || heading.length > 70),
    })),
  missing_meta_keywords: rows.filter((row) => !row.keywords).map((row) => row.url),
  og_title_over_60: rows
    .filter((row) => row.og_title.length > 60)
    .map((row) => ({ url: row.url, value: row.og_title })),
  twitter_title_over_55: rows
    .filter((row) => row.twitter_title.length > 55)
    .map((row) => ({ url: row.url, value: row.twitter_title })),
  missing_image_alt: rows.flatMap((row) =>
    row.images
      .filter((image) => !image.alt_present)
      .map((image) => ({ url: row.url, src: image.src })),
  ),
  empty_image_alt: rows.flatMap((row) =>
    row.images
      .filter((image) => image.alt_present && !image.alt)
      .map((image) => ({ url: row.url, src: image.src })),
  ),
  suspicious_image_alt: rows.flatMap((row) =>
    row.images
      .filter((image) => image.suspicious_alt)
      .map((image) => ({ url: row.url, src: image.src, alt: image.alt })),
  ),
  oversized_asset_occurrences: rows.flatMap((row) =>
    row.images
      .filter((image) => image.bytes !== null && image.bytes >= 100000)
      .map((image) => ({ url: row.url, src: image.src, bytes: image.bytes })),
  ),
  oversized_unique_assets: assets.filter((asset) => asset.bytes !== null && asset.bytes >= 100000),
  schema_parse_errors: rows
    .filter((row) => row.schema_errors.length > 0)
    .map((row) => ({ url: row.url, errors: row.schema_errors })),
  missing_schema: rows.filter((row) => row.schema_blocks === 0).map((row) => row.url),
  tracking_identity_mismatch: rows
    .filter((row) => row.tracking_loader_count !== 1 || !row.tracking_async)
    .map((row) => ({ url: row.url, count: row.tracking_loader_count, async: row.tracking_async })),
  duplicate_titles: duplicateGroups('title'),
  duplicate_descriptions: duplicateGroups('description'),
};

const result = {
  generated_at: new Date().toISOString(),
  source_commit: process.env.SOURCE_COMMIT ?? null,
  scope: {
    sitemap_segments: sitemapNames,
    public_urls: rows.length,
    rendered_html_total: Number(process.env.RENDERED_HTML_TOTAL ?? 0) || null,
    excluded_staged_sitemap: 'dist/sitemap-staged.xml',
  },
  summary: Object.fromEntries(
    Object.entries(issueLedger).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.length : value,
    ]),
  ),
  issue_ledger: issueLedger,
  rows,
};

const serialized = `${JSON.stringify(result, null, 2)}\n`;
if (outputPath) await writeFile(outputPath, serialized);
console.log(
  JSON.stringify({ scope: result.scope, summary: result.summary, output: outputPath }, null, 2),
);
