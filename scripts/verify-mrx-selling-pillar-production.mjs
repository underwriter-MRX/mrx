#!/usr/bin/env node
// Read-only production requests; writes only the local release evidence report.
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PILLAR_HTML_HEADERS,
  pillarSchemaNodes,
  pillarSchemaParity,
} from './lib/pillar-html-release.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const canonical = 'https://mineralrightsxchange.com';
const targets = [
  ...new Set((process.env.MRX_PILLAR_VERIFY_TARGETS ?? '').split(',').filter(Boolean)),
];
if (!targets.length) throw new Error('Explicit release-time production targets are required.');
for (const target of targets) {
  const url = new URL(target);
  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error('Verification targets must be HTTPS origins without credentials.');
  }
}
const expected = await readFile(
  path.join(root, 'dist/client/sell-mineral-rights/index.html'),
  'utf8',
);
const batch = JSON.parse(
  await readFile(path.join(root, 'config/mrx1000-release-10-batch.json'), 'utf8'),
);
const retained = batch.articles.find((article) => article.program_row_id === 'MRX1000-0757');
if (!retained) throw new Error('Required reconciled article identity missing.');
const packet = JSON.parse(await readFile(path.join(root, retained.evidence_packet_path), 'utf8'));
const clean = (value) =>
  value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1] ?? null;
const meta = (html, name) =>
  attr(
    (html.match(/<meta\b[^>]*>/gi) ?? []).find(
      (tag) => attr(tag, 'name') === name || attr(tag, 'property') === name,
    ) ?? '',
    'content',
  );
const canonicalUrl = (html) =>
  attr(
    (html.match(/<link\b[^>]*>/gi) ?? []).find((tag) => attr(tag, 'rel') === 'canonical') ?? '',
    'href',
  );
const h1 = (html) => clean(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '');
const schemaTypes = (html) => pillarSchemaNodes(html).flatMap((node) => [node['@type']].flat());
const request = (url, userAgent = 'MRX-Pillar-Release-Verifier/1.0', accept = 'text/html') =>
  fetch(url, {
    headers: { ...PILLAR_HTML_HEADERS, accept, 'user-agent': userAgent },
    signal: AbortSignal.timeout(20000),
  });
const metadata = [
  'description',
  'og:title',
  'og:description',
  'og:url',
  'og:image',
  'twitter:title',
  'twitter:description',
  'twitter:image',
];
const guideSlugs = [
  'selling-mineral-rights-selling-process-for-mineral-owners',
  'selling-mineral-rights-timeline-in-2026',
  'how-to-talk-to-your-family-before-you-decide-to-sell-mineral-rights',
  'how-to-build-a-mineral-rights-sale-document-package-index',
  'mineral-rights-offer-correspondence-index',
  'identifying-red-flags-in-mineral-rights-transactions',
];
const results = await Promise.all(
  targets.map(async (target) => {
    try {
      const response = await request(`${target}/sell-mineral-rights/`);
      const html = await response.text();
      const originResponse = await request(`${target}/sell-mineral-rights/`, undefined, '*/*');
      const originHtml = await originResponse.text();
      const types = schemaTypes(html);
      const assertions = {
        http_200: response.status === 200,
        title_exact:
          clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '') ===
          clean(expected.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
        h1_exact: h1(html) === h1(expected),
        canonical_exact: canonicalUrl(html) === `${canonical}/sell-mineral-rights/`,
        metadata_parity: metadata.every((name) => meta(html, name) === meta(expected, name)),
        native_schema_and_reviewed_image_parity: pillarSchemaParity(html, expected, {
          allowSourceImageObjects: true,
        }),
        origin_variant_identity_parity:
          originResponse.status === 200 &&
          clean(originHtml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '') ===
            clean(expected.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '') &&
          metadata.every((name) => meta(originHtml, name) === meta(expected, name)) &&
          pillarSchemaParity(originHtml, expected),
        unsupported_keyword_overlay_absent: !meta(html, 'keywords'),
        page_schema_not_article:
          types.includes('WebPage') && !types.includes('BlogPosting') && !types.includes('Article'),
        reviewed_pillar_present:
          html.includes('selling-guide-contents') &&
          html.includes('selling-process-guides-heading') &&
          html.includes('seller-readiness-guides-heading') &&
          html.includes('related-offer-review-guides-heading'),
        all_curated_links_present: guideSlugs.every((slug) => html.includes(`/blog/${slug}/`)),
        organizational_review_date:
          /September\s*13, 2026/.test(html) && html.includes('MRX Editorial Team'),
        exclusions_preserved:
          clean(html).includes(
            'Not a certified appraisal, formal valuation report, or fairness opinion',
          ) &&
          clean(html).includes(
            'Legal, tax, title, accounting, engineering, reserve, or investment advice',
          ),
        indexable:
          !/noindex/i.test(meta(html, 'robots') ?? '') &&
          !/noindex/i.test(response.headers.get('x-robots-tag') ?? ''),
        security_headers:
          response.headers.get('x-content-type-options') === 'nosniff' &&
          /frame-ancestors\s+'none'/.test(response.headers.get('content-security-policy') ?? ''),
      };
      for (const slug of guideSlugs)
        assertions[`guide_${slug}_http_200`] =
          (await request(`${target}/blog/${slug}/`)).status === 200;
      for (const agent of ['OAI-SearchBot', 'PerplexityBot'])
        assertions[`crawler_${agent}_http_200`] =
          (await request(`${target}/sell-mineral-rights/`, agent)).status === 200;
      const existing = await request(`${target}/blog/${retained.slug}/`);
      assertions.reconciled_article_http_200 = existing.status === 200;
      assertions.reconciled_article_exact_title = h1(await existing.text()) === retained.title;
      for (const kind of ['hero', 'inline']) {
        const image = packet.asset_manifest.assets.find((asset) => asset.kind === kind);
        if (!image) throw new Error(`${kind} packet image identity missing`);
        const imageResponse = await request(
          `${target}${image.public_path}`,
          undefined,
          'image/webp',
        );
        const bytes = Buffer.from(await imageResponse.arrayBuffer());
        assertions[`${kind}_exact_live_bytes`] =
          imageResponse.status === 200 &&
          /^image\/webp/.test(imageResponse.headers.get('content-type') ?? '') &&
          createHash('sha256').update(bytes).digest('hex') === image.sha256;
      }
      return {
        target,
        final_url: response.url,
        http_status: response.status,
        html_accept: PILLAR_HTML_HEADERS.accept,
        assertions,
        disposition: Object.values(assertions).every(Boolean) ? 'PASS' : 'FAIL',
      };
    } catch (error) {
      return { target, disposition: 'FAIL', error: error.message };
    }
  }),
);
const report = {
  generated_at_utc: new Date().toISOString(),
  canonical_origin: canonical,
  targets,
  results,
  disposition: results.every((result) => result.disposition === 'PASS') ? 'PASS' : 'FAIL',
};
const reportPath = path.resolve(
  root,
  process.env.MRX_PILLAR_VERIFY_REPORT_PATH ??
    'reports/mrx-selling-pillar-production-verification.json',
);
if (!reportPath.startsWith(`${root}/`))
  throw new Error('Evidence output must remain inside the verified worktree.');
await mkdir(path.dirname(reportPath), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (report.disposition !== 'PASS') process.exitCode = 1;
