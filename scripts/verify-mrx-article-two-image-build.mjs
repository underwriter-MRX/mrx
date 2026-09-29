#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

import { pageBuilderAssetEvidence, resolvePageBuilderImage } from '../src/lib/page-builder-sop.mjs';

const root = resolve(import.meta.dirname, '..');
const manifestPath = join(root, 'config/mrx-article-two-image-retrofit.json');
const renderedRoot = existsSync(join(root, 'dist/client'))
  ? join(root, 'dist/client')
  : join(root, 'dist');
const canonicalOrigin = 'https://mineralrightsxchange.com';
const publicRoot = join(root, 'public');

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const failures = [];
const appendOnlyAddendum = JSON.parse(
  readFileSync(join(root, 'config/mrx1000-append-only-identity-addendum.json'), 'utf8'),
);
const appendOnlyRows = [];
for (const entry of appendOnlyAddendum.entries ?? []) {
  if (entry.identity_state !== 'admitted_quality_gated') continue;
  const creativeRelative = entry.creative_manifest_path;
  if (
    typeof creativeRelative !== 'string' ||
    !/^artifacts\/mrx1000-wave\d+-creative-qa\/[a-z0-9-]+\/creative-manifest\.json$/.test(
      creativeRelative,
    ) ||
    !creativeRelative.includes(`/${entry.canonical_slug}/`)
  ) {
    failures.push(`${entry.canonical_slug}: append-only creative manifest path is invalid`);
    continue;
  }
  const creativePath = join(root, creativeRelative);
  if (!existsSync(creativePath)) {
    failures.push(`${entry.canonical_slug}: append-only creative manifest missing`);
    continue;
  }
  const creative = JSON.parse(readFileSync(creativePath, 'utf8'));
  if (
    creative.article?.title !== entry.canonical_title ||
    creative.article?.hero?.rendered_text !== entry.canonical_title ||
    creative.article?.hero?.ocr?.pass !== true ||
    creative.article?.inline?.ocr?.pass !== true ||
    creative.verification?.distinct_output_binaries !== true
  ) {
    failures.push(`${entry.canonical_slug}: append-only creative identity or OCR mismatch`);
    continue;
  }
  appendOnlyRows.push({
    slug: entry.canonical_slug,
    hero: creative.article.hero,
    inline: creative.article.inline,
  });
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function formatForMime(mimeType) {
  return {
    'image/webp': 'webp',
    'image/avif': 'heif',
    'image/jpeg': 'jpeg',
    'image/png': 'png',
  }[mimeType];
}

async function expectedRenderedAsset(slug, kind, asset) {
  const originalPath = join(publicRoot, asset.public_path.slice(1));
  if (!existsSync(originalPath)) {
    failures.push(`${slug}: ${kind} reviewed original binary missing`);
    return null;
  }
  const originalMetadata = await sharp(originalPath).metadata();
  const originalSha = sha256(originalPath);
  const expectedFormat = formatForMime(asset.mime_type);
  if (originalSha !== asset.sha256) {
    failures.push(`${slug}: ${kind} reviewed original SHA-256 mismatch`);
  }
  if (
    originalMetadata.width !== asset.width ||
    originalMetadata.height !== asset.height ||
    (expectedFormat && originalMetadata.format !== expectedFormat)
  ) {
    failures.push(`${slug}: ${kind} reviewed original dimensions or MIME mismatch`);
  }

  const resolved = resolvePageBuilderImage({ src: asset.public_path, alt: asset.alt ?? '' });
  const evidence = pageBuilderAssetEvidence(asset.public_path);
  if (!evidence) {
    return {
      ...asset,
      public_path: resolved.src,
      alt: resolved.alt,
      expected_sha256: asset.sha256,
      expected_bytes: statSync(originalPath).size,
      expected_format: expectedFormat,
    };
  }

  if (evidence.original_sha256 !== asset.sha256 || evidence.original_sha256 !== originalSha) {
    failures.push(`${slug}: ${kind} Page Builder original hash binding mismatch`);
  }
  if (evidence.original_sha256 === evidence.optimized_sha256) {
    failures.push(`${slug}: ${kind} optimized binary must differ from its reviewed original`);
  }
  const replacementPath = join(publicRoot, evidence.replacement.slice(1));
  if (!existsSync(replacementPath)) {
    failures.push(`${slug}: ${kind} Page Builder replacement binary missing`);
    return null;
  }
  const replacementMetadata = await sharp(replacementPath).metadata();
  if (
    sha256(replacementPath) !== evidence.optimized_sha256 ||
    statSync(replacementPath).size !== evidence.optimized_bytes ||
    replacementMetadata.width !== evidence.width ||
    replacementMetadata.height !== evidence.height ||
    replacementMetadata.width !== asset.width ||
    replacementMetadata.height !== asset.height ||
    (expectedFormat && replacementMetadata.format !== expectedFormat)
  ) {
    failures.push(`${slug}: ${kind} Page Builder replacement evidence mismatch`);
  }
  return {
    ...asset,
    public_path: resolved.src,
    alt: resolved.alt,
    expected_sha256: evidence.optimized_sha256,
    expected_bytes: evidence.optimized_bytes,
    expected_format: expectedFormat,
  };
}

function decodeHtml(value) {
  return String(value ?? '')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function attribute(html, selectorPattern, attributeName) {
  const tag = html.match(selectorPattern)?.[0] ?? '';
  return decodeHtml(tag.match(new RegExp(`\\b${attributeName}="([^"]*)"`, 'i'))?.[1] ?? '');
}

function imageUseCount(html, publicPath) {
  return [...html.matchAll(/<img\b[^>]*>/gi)].filter(
    ([tag]) => attribute(tag, /<img\b[^>]*>/i, 'src') === publicPath,
  ).length;
}

function jsonLdObjects(html) {
  const objects = [];
  const pattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    try {
      objects.push(JSON.parse(decodeHtml(match[1])));
    } catch (error) {
      failures.push(`invalid rendered JSON-LD: ${error.message}`);
    }
  }
  return objects;
}

function findArticleSchema(objects) {
  const candidates = objects.flatMap((value) => {
    if (Array.isArray(value?.['@graph'])) return value['@graph'];
    return [value];
  });
  return candidates.find((value) => {
    const type = value?.['@type'];
    return type === 'Article' || (Array.isArray(type) && type.includes('Article'));
  });
}

if (
  !Array.isArray(manifest.rows) ||
  manifest.summary?.article_count !== manifest.rows.length ||
  manifest.summary?.asset_count !== manifest.rows.length * 2
) {
  failures.push('manifest summary must match the complete current public article corpus');
}

for (const row of [...(manifest.rows ?? []), ...appendOnlyRows]) {
  const htmlPath = join(renderedRoot, 'blog', row.slug, 'index.html');
  if (!existsSync(htmlPath)) {
    failures.push(`${row.slug}: rendered HTML missing`);
    continue;
  }
  const html = readFileSync(htmlPath, 'utf8');
  const expectedHero = await expectedRenderedAsset(row.slug, 'hero', row.hero);
  const expectedInline = await expectedRenderedAsset(row.slug, 'inline', row.inline);
  if (!expectedHero || !expectedInline) continue;
  const absoluteHero = `${canonicalOrigin}${expectedHero.public_path}`;
  const heroTagPattern = /<figure class="article-hero-image"[^>]*>[\s\S]*?<img\b[^>]*>/i;
  const inlineTagPattern =
    /<figure class="article-inline-image"[^>]*data-article-inline-image[^>]*>[\s\S]*?<img\b[^>]*>/i;
  const ogTagPattern = /<meta property="og:image"[^>]*>/i;
  const twitterTagPattern = /<meta name="twitter:image"[^>]*>/i;

  const heroSrc = attribute(html, heroTagPattern, 'src');
  const heroAlt = attribute(html, heroTagPattern, 'alt');
  const heroWidth = attribute(html, heroTagPattern, 'width');
  const heroHeight = attribute(html, heroTagPattern, 'height');
  const ogImage = attribute(html, ogTagPattern, 'content');
  const twitterImage = attribute(html, twitterTagPattern, 'content');
  const inlineSrc = attribute(html, inlineTagPattern, 'src');
  const inlineAlt = attribute(html, inlineTagPattern, 'alt');
  const inlineWidth = attribute(html, inlineTagPattern, 'width');
  const inlineHeight = attribute(html, inlineTagPattern, 'height');
  const inlineFigure = html.match(/<figure class="article-inline-image"[^>]*>/i)?.[0] ?? '';
  const inlineRenderedText = attribute(inlineFigure, /<figure\b[^>]*>/i, 'data-rendered-text');
  const articleSchema = findArticleSchema(jsonLdObjects(html));
  const schemaImages = Array.isArray(articleSchema?.image)
    ? articleSchema.image
    : articleSchema?.image
      ? [articleSchema.image]
      : [];

  const checks = [
    [heroSrc === expectedHero.public_path, 'rendered hero src mismatch'],
    [
      expectedHero.alt ? heroAlt === expectedHero.alt : heroAlt.trim().length > 0,
      'rendered hero alt mismatch',
    ],
    [heroWidth === String(expectedHero.width), 'rendered hero width mismatch'],
    [heroHeight === String(expectedHero.height), 'rendered hero height mismatch'],
    [ogImage === absoluteHero, 'og:image is not the canonical hero'],
    [twitterImage === absoluteHero, 'twitter:image is not the canonical hero'],
    [
      schemaImages.length === 1 && schemaImages[0] === absoluteHero,
      'Article schema image mismatch',
    ],
    [inlineSrc === expectedInline.public_path, 'rendered in-body src mismatch'],
    [
      expectedInline.alt ? inlineAlt === expectedInline.alt : inlineAlt.trim().length > 0,
      'rendered in-body alt mismatch',
    ],
    [inlineWidth === String(expectedInline.width), 'rendered in-body width mismatch'],
    [inlineHeight === String(expectedInline.height), 'rendered in-body height mismatch'],
    [
      inlineRenderedText === expectedInline.rendered_text,
      'rendered in-body text identity mismatch',
    ],
    [heroSrc !== inlineSrc, 'hero and in-body paths are not distinct'],
    [imageUseCount(html, expectedHero.public_path) === 1, 'hero image must render exactly once'],
    [
      imageUseCount(html, expectedInline.public_path) === 1,
      'in-body image must render exactly once',
    ],
  ];
  for (const [pass, message] of checks) {
    if (!pass) failures.push(`${row.slug}: ${message}`);
  }

  for (const [kind, asset] of [
    ['hero', expectedHero],
    ['inline', expectedInline],
  ]) {
    const renderedAssetPath = join(renderedRoot, asset.public_path.slice(1));
    if (!existsSync(renderedAssetPath)) {
      failures.push(`${row.slug}: ${kind} binary missing from rendered output`);
    } else {
      const renderedMetadata = await sharp(renderedAssetPath).metadata();
      if (
        sha256(renderedAssetPath) !== asset.expected_sha256 ||
        statSync(renderedAssetPath).size !== asset.expected_bytes ||
        renderedMetadata.width !== asset.width ||
        renderedMetadata.height !== asset.height ||
        (asset.expected_format && renderedMetadata.format !== asset.expected_format)
      ) {
        failures.push(`${row.slug}: ${kind} rendered binary SHA/dimension/MIME mismatch`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`MRX rendered two-image verification failed (${failures.length} findings):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `MRX rendered two-image verification passed: ${manifest.rows.length} historical + ${appendOnlyRows.length} append-only articles, ${(manifest.rows.length + appendOnlyRows.length) * 2} binaries.`,
);
