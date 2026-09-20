import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITE = 'https://mineralrightsxchange.com';
const PRIVATE =
  /\/(?:api|account|staff|admin|owner-intake|knowledge|staged|drafts)(?:\/|$)|\/thank-you(?:\/|$)/i;
const hash = (value) => createHash('sha256').update(value).digest('hex');
export const contentHash = (html) =>
  hash(html.replaceAll('<!--email_off-->', '').replaceAll('<!--/email_off-->', '').replace(
    /<script type="module" src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js\/[^>]+><\/script>\n/g,
    (fragment) => hash(fragment) === 'a7d7b1207343bf240dc3bf89442b597d9a3609888ede71e183e4ff7c9b18f290' ? '' : fragment,
  ).replace(
    /<script>\(function\(\)\{function c\(\).*?<\/script>/g,
    (fragment) => hash(fragment.replace(/r:'[a-f0-9]{16}',t:'[A-Za-z0-9+/=]+'/g, "r:'RAY',t:'TIME'")) ===
      '016660f3823e7f69cbe84c7b6e6e3219103232ab0ac3cf4094bb7a48cfffef36' ? '' : fragment,
  ).replace(
    /<meta name="otto" content="uuid=e4bab8bb-717e-480c-8dea-1de1b8596eb7; type=cloudflare; enabled=(?:true|false);">/g,
    '',
  ));
const attrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [m[1].toLowerCase(), m[2]]),
  );

export function publicUrl(value) {
  const url = new URL(value);
  if (
    url.href !== value ||
    url.origin !== SITE ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    /[%\\]/.test(url.pathname) ||
    PRIVATE.test(url.pathname) ||
    !url.pathname.endsWith('/')
  ) {
    throw new Error(`Noncanonical or private crawler URL: ${value}`);
  }
  return url;
}

export function indexableHtml(html, url) {
  const tags = html.match(/<(?:meta|link)\b[^>]*>/gi) ?? [];
  const parsed = tags.map(attrs);
  const canonicals = parsed.filter((a) => a.rel?.toLowerCase() === 'canonical');
  const robots = parsed.filter((a) => /^(?:robots|googlebot|bingbot)$/i.test(a.name ?? ''));
  return (
    canonicals.length === 1 &&
    canonicals[0].href === url &&
    !robots.some((a) => /(?:^|[\s,])(?:noindex|none)(?:$|[\s,])/i.test(a.content ?? '')) &&
    !parsed.some((a) => a['http-equiv']?.toLowerCase() === 'refresh')
  );
}

export async function buildCrawlerManifest(root = process.cwd()) {
  const output = [join(root, 'dist/client'), join(root, 'dist')].find((p) =>
    existsSync(join(p, 'sitemap_index.xml')),
  );
  if (!output) throw new Error('Crawler manifest requires a completed sitemap build.');
  const index = await readFile(join(output, 'sitemap_index.xml'), 'utf8');
  const sitemapNames = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const u = new URL(m[1]);
    if (
      u.origin !== SITE ||
      !/^\/sitemap-[a-z]+\.xml$/.test(u.pathname) ||
      u.pathname.includes('staged')
    ) {
      throw new Error('Unexpected public sitemap segment.');
    }
    return u.pathname.slice(1);
  });
  if (!sitemapNames.length) throw new Error('Public sitemap index is empty.');
  const urls = new Set();
  for (const name of sitemapNames) {
    const xml = await readFile(join(output, name), 'utf8');
    for (const match of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)) urls.add(match[1]);
  }
  const pages = [];
  for (const value of [...urls].sort()) {
    const url = publicUrl(value);
    const file = join(output, url.pathname, 'index.html');
    if (!existsSync(file)) throw new Error(`Public sitemap URL has no rendered HTML: ${value}`);
    const html = await readFile(file, 'utf8');
    if (!indexableHtml(html, value))
      throw new Error(`Sitemap URL is not indexable/canonical: ${value}`);
    pages.push({ url: value, sha256: contentHash(html) });
  }
  if (!pages.length) throw new Error('Refusing an empty crawler manifest.');
  const key = (await readFile(join(root, 'public/indexnow-key.txt'), 'utf8')).trim();
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow ownership key.');
  const manifest = {
    version: 2,
    hash_policy: 'sha256-html-approved-cloudflare-transport-v1',
    origin: SITE,
    pages,
    discovery: {
      sitemap: `${SITE}/sitemap_index.xml`,
      llms: `${SITE}/llms.txt`,
      llms_full: `${SITE}/llms-full.txt`,
    },
    indexnow: { key, key_location: `${SITE}/indexnow-key.txt` },
    content_revision: hash(JSON.stringify(pages)),
    limitation:
      'Discovery and URL notification do not guarantee crawling, indexing, citations, or model updates.',
  };
  const encoded = `${JSON.stringify(manifest, null, 2)}\n`;
  await writeFile(join(output, 'crawler-manifest.json'), encoded);
  // Some adapters copy assets before the final Astro integration hook.
  const vercelStatic = join(root, '.vercel/output/static');
  if (existsSync(vercelStatic))
    await writeFile(join(vercelStatic, 'crawler-manifest.json'), encoded);
  return manifest;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await buildCrawlerManifest();
  console.log(
    `Crawler manifest: ${result.pages.length} public URLs (${result.content_revision.slice(0, 12)})`,
  );
}
