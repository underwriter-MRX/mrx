#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

import policy from '../config/mrx-image-text-alt-policy.json' with { type: 'json' };
import pageBuilderAssets from '../config/page-builder-sop-assets.json' with { type: 'json' };
import { validateAltOccurrence } from '../src/lib/image-text-alt-policy-verifier.mjs';

const root = resolve(import.meta.dirname, '..');
const renderedRoot = existsSync(join(root, 'dist/client'))
  ? join(root, 'dist/client')
  : join(root, 'dist');
const publicRoot = join(root, 'public');
const failures = [];
const usedPaths = new Set();
const verifiedFiles = new Map();
let imageOccurrenceCount = 0;
let socialOccurrenceCount = 0;

function decodeHtml(value) {
  return String(value ?? '')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    );
}

function attribute(tag, name) {
  return decodeHtml(tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] ?? '');
}

function policyPath(value) {
  try {
    return new URL(value, 'https://mineralrightsxchange.com').pathname;
  } catch {
    return String(value ?? '').split(/[?#]/)[0];
  }
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function verifyFile(path, evidence) {
  if (verifiedFiles.has(path)) return verifiedFiles.get(path);
  const file = join(publicRoot, path.slice(1));
  if (!existsSync(file)) {
    failures.push(`${path}: policy asset is missing from public/`);
    verifiedFiles.set(path, null);
    return null;
  }
  const identity = { actualSha256: sha256(file), actualBytes: statSync(file).size };
  verifiedFiles.set(path, identity);
  if (evidence.original_path) {
    const mapping = pageBuilderAssets.assets[evidence.original_path];
    const original = join(publicRoot, evidence.original_path.slice(1));
    if (
      !mapping ||
      mapping.replacement !== path ||
      mapping.optimized_sha256 !== evidence.sha256 ||
      !existsSync(original) ||
      sha256(original) !== mapping.original_sha256
    ) {
      failures.push(`${path}: original-to-replacement evidence binding mismatch`);
    }
  }
  return identity;
}

function verifyAlt(route, surface, src, alt) {
  const path = policyPath(src);
  const evidence = policy.assets[path];
  usedPaths.add(path);
  if (!evidence) {
    failures.push(`${route}: ${surface} path is absent from exact-text policy: ${path}`);
    return;
  }
  const identity = verifyFile(path, evidence);
  if (!identity) return;
  for (const failure of validateAltOccurrence({
    assets: policy.assets,
    path,
    alt,
    ...identity,
  })) {
    failures.push(`${route}: ${surface} ${failure} for ${path}`);
  }
}

const publicUrls = [];
for (const segment of ['core', 'articles', 'authors', 'team', 'states']) {
  const sitemap = readFileSync(join(renderedRoot, `sitemap-${segment}.xml`), 'utf8');
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) publicUrls.push(match[1]);
}

for (const url of [...new Set(publicUrls)].sort()) {
  const route = new URL(url).pathname;
  const htmlPath =
    route === '/'
      ? join(renderedRoot, 'index.html')
      : join(renderedRoot, route.slice(1), 'index.html');
  if (!existsSync(htmlPath)) {
    failures.push(`${route}: canonical public HTML missing`);
    continue;
  }
  const html = readFileSync(htmlPath, 'utf8');
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    imageOccurrenceCount += 1;
    verifyAlt(route, 'img', attribute(match[0], 'src'), attribute(match[0], 'alt'));
  }
  for (const [surface, pattern, altPattern] of [
    ['og:image', /<meta\s+property="og:image"[^>]*>/i, /<meta\s+property="og:image:alt"[^>]*>/i],
    [
      'twitter:image',
      /<meta\s+name="twitter:image"[^>]*>/i,
      /<meta\s+name="twitter:image:alt"[^>]*>/i,
    ],
  ]) {
    const imageTag = html.match(pattern)?.[0] ?? '';
    const altTag = html.match(altPattern)?.[0] ?? '';
    if (!imageTag || !altTag) {
      failures.push(`${route}: ${surface} or its alt metadata is missing`);
      continue;
    }
    socialOccurrenceCount += 1;
    verifyAlt(route, surface, attribute(imageTag, 'content'), attribute(altTag, 'content'));
  }
}

const policyPaths = Object.keys(policy.assets).sort();
const unused = policyPaths.filter((path) => !usedPaths.has(path));
if (unused.length > 0)
  failures.push(`policy contains ${unused.length} unused public asset(s): ${unused.join(', ')}`);
if (policy.summary?.distinct_public_asset_count !== policyPaths.length) {
  failures.push('policy summary distinct asset count does not match assets map');
}
if (policy.summary?.unresolved_asset_count !== 0) {
  failures.push('policy summary contains unresolved assets');
}

if (failures.length > 0) {
  console.error(`MRX reviewed image-text alt verification failed (${failures.length} findings):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `MRX reviewed image-text alt verification passed: ${policyPaths.length} assets, ${imageOccurrenceCount} img occurrences, ${socialOccurrenceCount} social occurrences across ${new Set(publicUrls).size} public URLs.`,
);
