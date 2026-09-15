// Read-only public serving-layer inventory. No Search Atlas/Cloudflare mutations.
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PILLAR_HTML_HEADERS, pillarSchemaNodes } from './lib/pillar-html-release.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expectedRoot =
  '/Users/darylhill/Documents/MineralRightsXchange.com/.codex-isolated/mrx-measurement-ai-technical-20260909';
const git = (...args) => execFileSync('/usr/bin/git', args, { cwd: root, encoding: 'utf8' }).trim();
if (
  root !== expectedRoot ||
  execFileSync('/bin/pwd', ['-P'], { encoding: 'utf8' }).trim() !== root ||
  git('rev-parse', '--show-toplevel') !== root ||
  git('branch', '--show-current') !== 'release/mrx-measurement-ai-technical-20260909'
)
  throw new Error('Unverified process/worktree/branch');
const preflight = {
  cwd: root,
  branch: git('branch', '--show-current'),
  head: git('rev-parse', 'HEAD'),
  status: git('status', '--short'),
};
const origin = 'https://mineralrightsxchange.com';
const targets = (
  process.env.MRX_OVERLAY_PARITY_TARGETS ?? `${origin},https://mrx-web.vercel.app`
).split(',');
if (
  targets.some(
    (target) =>
      ![origin, 'https://www.mineralrightsxchange.com', 'https://mrx-web.vercel.app'].includes(
        target,
      ),
  )
)
  throw new Error('Target not a confirmed public production alias');
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const attr = (tag, name) =>
  decode(tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i'))?.[2] ?? '');
const text = (s) =>
  decode(
    s
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
const stable = (v) =>
  Array.isArray(v)
    ? v.map(stable)
    : v && typeof v === 'object'
      ? Object.fromEntries(
          Object.keys(v)
            .sort()
            .map((k) => [k, stable(v[k])]),
        )
      : v;
const sorted = (v) => v.map((item) => JSON.stringify(stable(item))).sort();
function identity(html) {
  const meta = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = attr(tag, 'name') || attr(tag, 'property');
    if (/^(description|robots|keywords|og:.*|twitter:.*|article:.*)$/.test(key))
      (meta[key] ??= []).push(attr(tag, 'content'));
  }
  const canonicals = (html.match(/<link\b[^>]*>/gi) ?? [])
    .filter((tag) => attr(tag, 'rel') === 'canonical')
    .map((tag) => attr(tag, 'href'));
  const headings = (html.match(/<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>/gi) ?? []).map((tag) => ({
    level: tag.match(/^<h(\d)/i)[1],
    text: text(tag),
  }));
  const images = (html.match(/<img\b[^>]*>/gi) ?? []).map((tag) =>
    Object.fromEntries(['src', 'alt', 'width', 'height'].map((key) => [key, attr(tag, key)])),
  );
  const links = (html.match(/<a\b[^>]*>/gi) ?? []).map((tag) => attr(tag, 'href'));
  const bodyText = text(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '');
  return {
    title: text(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    meta,
    canonicals,
    headings,
    images,
    links,
    bodyText,
    schema: sorted(pillarSchemaNodes(html)),
  };
}
const xml = await readFile(path.join(root, 'dist/client/sitemap_index.xml'), 'utf8');
const sitemapPaths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]));
const urls = new Set();
for (const sitemap of sitemapPaths) {
  if (sitemap.origin !== origin || !/^\/sitemap-[a-z0-9-]+\.xml$/.test(sitemap.pathname))
    throw new Error('Unexpected sitemap path');
  const content = await readFile(path.join(root, 'dist/client', sitemap.pathname), 'utf8');
  for (const match of content.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(match[1]);
    if (
      url.origin !== origin ||
      /\/(account|owner-intake|staff|staged|thank-you)(\/|$)/.test(url.pathname)
    )
      throw new Error('Non-public sitemap URL');
    urls.add(url.pathname);
  }
}
const rows = [];
const jobs = [...urls].flatMap((pathname) => targets.map((target) => ({ pathname, target })));
const transportRetries = [];
const concurrency = Number(process.env.MRX_OVERLAY_PARITY_CONCURRENCY ?? 3);
const delayMs = Number(process.env.MRX_OVERLAY_PARITY_DELAY_MS ?? 0);
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 10)
  throw new Error('MRX_OVERLAY_PARITY_CONCURRENCY must be an integer from 1 to 10');
if (!Number.isInteger(delayMs) || delayMs < 0 || delayMs > 5000)
  throw new Error('MRX_OVERLAY_PARITY_DELAY_MS must be an integer from 0 to 5000');
let done = 0;
await Promise.all(
  Array.from({ length: concurrency }, async () => {
    while (jobs.length) {
      const { pathname, target } = jobs.shift();
      if (delayMs) await new Promise((resolve) => setTimeout(resolve, delayMs));
      try {
        const built = await readFile(
          path.join(root, 'dist/client', pathname, 'index.html'),
          'utf8',
        );
        const source = identity(built);
        let response;
        let html;
        // Retry transport failures only. HTTP/security/content failures remain
        // release findings; do not retry them into a success or drop a URL.
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            response = await fetch(`${target}${pathname}`, {
              headers: { ...PILLAR_HTML_HEADERS, 'user-agent': 'MRX-source-parity-verifier/1.0' },
              signal: AbortSignal.timeout(25000),
            });
            if (
              response.status === 200 &&
              (response.headers.get('content-type') ?? '').includes('text/html')
            )
              html = await response.text();
            break;
          } catch (error) {
            transportRetries.push({ pathname, target, attempt, error: error.message });
            if (attempt === 3) throw error;
          }
        }
        if (
          response.status !== 200 ||
          !(response.headers.get('content-type') ?? '').includes('text/html')
        )
          throw new Error(`HTTP ${response.status} / non-HTML`);
        const live = identity(html);
        const differences = Object.keys(source).filter(
          (key) => JSON.stringify(stable(source[key])) !== JSON.stringify(stable(live[key])),
        );
        rows.push({
          pathname,
          target,
          http_status: response.status,
          differences,
          ...(differences.length
            ? {
                source: Object.fromEntries(differences.map((key) => [key, source[key]])),
                live: Object.fromEntries(differences.map((key) => [key, live[key]])),
              }
            : {}),
        });
      } catch (error) {
        rows.push({ pathname, target, error: error.message });
      }
      if (++done % 100 === 0)
        console.log(`Public source-parity inventory ${done}/${urls.size * targets.length}`);
    }
  }),
);
rows.sort((a, b) => `${a.target}${a.pathname}`.localeCompare(`${b.target}${b.pathname}`));
const summaries = targets.map((target) => {
  const items = rows.filter((row) => row.target === target);
  const counts = {};
  for (const row of items)
    for (const key of row.differences ?? []) counts[key] = (counts[key] ?? 0) + 1;
  return {
    target,
    urls: items.length,
    identical: items.filter((row) => !row.error && !row.differences.length).length,
    errors: items.filter((row) => row.error).length,
    difference_counts: counts,
  };
});
// Keep body provenance without committing two entire copies of the public site.
const compactRows = rows.map((row) => {
  if (!row.source?.bodyText) return row;
  const source = row.source.bodyText;
  const live = row.live.bodyText;
  let offset = 0;
  while (offset < Math.min(source.length, live.length) && source[offset] === live[offset]) offset++;
  const digest = (value) => createHash('sha256').update(value).digest('hex');
  const withoutBody = ({ bodyText, ...rest }) => rest;
  return {
    ...row,
    source: withoutBody(row.source),
    live: withoutBody(row.live),
    body_difference: {
      first_difference_offset: offset,
      source_sha256: digest(source),
      live_sha256: digest(live),
      source_length: source.length,
      live_length: live.length,
      source_excerpt: source.slice(Math.max(0, offset - 50), offset + 160),
      live_excerpt: live.slice(Math.max(0, offset - 50), offset + 160),
    },
  };
});
const report = {
  generated_at_utc: new Date().toISOString(),
  preflight,
  sitemap_url_count: urls.size,
  mode: 'READ_ONLY_PUBLIC_SOURCE_PARITY',
  summaries,
  transport_retries: transportRetries,
  rows: compactRows,
};
const output = path.join(root, 'reports/mrx-overlay-source-parity-current.json');
await writeFile(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ summaries, report_path: output }, null, 2));
if (summaries.some((summary) => summary.errors)) process.exitCode = 1;
if (
  process.env.MRX_OVERLAY_REQUIRE_PARITY === '1' &&
  summaries.some((summary) => summary.identical !== summary.urls)
)
  process.exitCode = 1;
