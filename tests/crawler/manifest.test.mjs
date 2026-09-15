import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  buildCrawlerManifest,
  contentHash,
  publicUrl,
  indexableHtml,
  SITE,
} from '../../scripts/build-crawler-manifest.mjs';

test('URL and indexability privacy gates', () => {
  for (const value of [
    `${SITE}/account/`,
    `${SITE}/blog/drafts/a/`,
    `${SITE}/staged/a/`,
    `${SITE}/a?secret=x`,
    'https://evil.test/',
    `${SITE}/foo/../staff/`,
    `${SITE}/%61ccount/`,
  ])
    assert.throws(() => publicUrl(value));
  assert.equal(
    indexableHtml(
      `<link rel="canonical" href="${SITE}/"><meta name="robots" content="noindex">`,
      `${SITE}/`,
    ),
    false,
  );
  assert.equal(indexableHtml(`<link href="${SITE}/" rel="canonical">`, `${SITE}/`), true);
});

test('manifest is deterministic and changes only when public HTML changes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'mrx-manifest-'));
  try {
    await mkdir(join(root, 'dist/client/blog/example'), { recursive: true });
    await mkdir(join(root, 'public'));
    await writeFile(join(root, 'public/indexnow-key.txt'), 'abcdefgh12345678');
    await writeFile(
      join(root, 'dist/client/sitemap_index.xml'),
      `<sitemapindex><sitemap><loc>${SITE}/sitemap-articles.xml</loc></sitemap></sitemapindex>`,
    );
    await writeFile(
      join(root, 'dist/client/sitemap-articles.xml'),
      `<urlset><url><loc>${SITE}/blog/example/</loc></url></urlset>`,
    );
    const page = join(root, 'dist/client/blog/example/index.html');
    await writeFile(page, `<link rel="canonical" href="${SITE}/blog/example/"><h1>Example</h1>`);
    const first = await buildCrawlerManifest(root);
    assert.equal(first.pages.length, 1);
    assert.deepEqual(await buildCrawlerManifest(root), first);
    await writeFile(
      page,
      `<link rel="canonical" href="${SITE}/blog/example/"><h1>Updated example</h1>`,
    );
    assert.notEqual((await buildCrawlerManifest(root)).content_revision, first.content_revision);
    await writeFile(
      page,
      `<link rel="canonical" href="${SITE}/blog/example/"><meta name="robots" content="noindex">`,
    );
    await assert.rejects(buildCrawlerManifest(root), /not indexable/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('hash ignores only exact Cloudflare email protection comments', () => {
  assert.equal(contentHash('a<!--email_off-->b<!--/email_off-->c'), contentHash('abc'));
  assert.notEqual(contentHash('abc<p class="otto-nlp-module">hidden</p>'), contentHash('abc'));
  assert.notEqual(contentHash('abc<!--other-->'), contentHash('abc'));
});
