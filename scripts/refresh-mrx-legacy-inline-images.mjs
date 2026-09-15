#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const postsDir = join(repoRoot, 'src', 'content', 'posts');
const publicDir = join(repoRoot, 'public');
const manifestPath = join(repoRoot, 'config', 'mrx-article-two-image-retrofit.json');
const write = process.argv.includes('--write');
const generatedAt = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const sources = new Map(
  process.argv
    .filter((value) => value.startsWith('--source='))
    .map((value) => {
      const entry = value.slice('--source='.length);
      const splitAt = entry.indexOf('=');
      if (splitAt < 1) throw new Error(`Invalid --source entry: ${entry}`);
      return [entry.slice(0, splitAt), entry.slice(splitAt + 1)];
    }),
);

if (!write) throw new Error('Refusing to write without --write');
if (sources.size === 0) throw new Error('Provide at least one --source=slug=/absolute/path.png');

const WIDTH = 1200;
const HEIGHT = 675;

function frontmatter(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`Missing frontmatter: ${filePath}`);
  return match[1];
}

function unquote(value) {
  return value
    .trim()
    .replace(/^(['"])(.*)\1$/, '$2')
    .replace(/''/g, "'");
}

function scalar(block, key) {
  return unquote(block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1] ?? '');
}

function nestedBlock(block, key) {
  return block.match(new RegExp(`^${key}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '';
}

function nestedScalar(block, parent, key) {
  return unquote(
    nestedBlock(block, parent).match(new RegExp(`^[ \\t]+${key}:\\s*(.+)$`, 'm'))?.[1] ?? '',
  );
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function normalizeText(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function estimatedTextWidth(value, fontSize) {
  let units = 0;
  for (const character of value) {
    if (/\s/.test(character)) units += 0.29;
    else if (/[mwMW@%&]/.test(character)) units += 0.84;
    else if (/[A-Z0-9]/.test(character)) units += 0.64;
    else if (/[ilI1.,:;!'’|]/.test(character)) units += 0.28;
    else units += 0.53;
  }
  return units * fontSize;
}

function wrapText(value, fontSize, maxWidth) {
  const lines = [];
  let current = '';
  for (const word of value.trim().split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (!current || estimatedTextWidth(candidate, fontSize) <= maxWidth) current = candidate;
    else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function fitText(value) {
  for (let fontSize = 60; fontSize >= 30; fontSize -= 1) {
    const lines = wrapText(value, fontSize, 490);
    if (lines.length * fontSize * 1.09 <= 470) return { fontSize, lines };
  }
  return { fontSize: 30, lines: wrapText(value, 30, 490) };
}

function overlaySvg(phrase) {
  const fit = fitText(phrase);
  const lineHeight = fit.fontSize * 1.09;
  const textHeight = fit.lines.length * lineHeight;
  const firstBaseline = (HEIGHT - textHeight) / 2 + fit.fontSize * 0.86;
  const tspans = fit.lines
    .map(
      (line, index) =>
        `<tspan x="58" y="${Math.round(firstBaseline + index * lineHeight)}">${escapeXml(line)}</tspan>`,
    )
    .join('');
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="panel" x1="0" x2="1">
          <stop offset="0" stop-color="#071e34" stop-opacity="0.98"/>
          <stop offset="0.82" stop-color="#071e34" stop-opacity="0.94"/>
          <stop offset="1" stop-color="#071e34" stop-opacity="0.78"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.38"/>
        </filter>
      </defs>
      <path d="M0 0H610C650 116 594 238 632 356C665 458 638 570 594 675H0Z" fill="url(#panel)"/>
      <rect x="58" y="${Math.max(52, Math.round(firstBaseline - fit.fontSize - 30))}" width="82" height="8" rx="4" fill="#d09a42"/>
      <text fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${fit.fontSize}" font-weight="700" letter-spacing="-0.8" filter="url(#shadow)">${tspans}</text>
    </svg>
  `);
}

async function perceptualHash(filePath) {
  const { data } = await sharp(filePath)
    .resize(16, 16, { fit: 'fill' })
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const average = data.reduce((sum, value) => sum + value, 0) / data.length;
  return Array.from(data, (value) => (value >= average ? '1' : '0')).join('');
}

function sha256(filePath) {
  return createHash('sha256').update(readFileSync(filePath)).digest('hex');
}

function replaceInlineScalar(frontmatterText, key, value) {
  const block = nestedBlock(frontmatterText, 'inline_image');
  if (!block) throw new Error('Missing inline_image block');
  const pattern = new RegExp(`^([ \\t]+${key}:)\\s*.*$`, 'm');
  if (!pattern.test(block)) throw new Error(`Missing inline_image.${key}`);
  const nextBlock = block.replace(pattern, `$1 '${value.replaceAll("'", "''")}'`);
  return frontmatterText.replace(block, nextBlock);
}

const ocrTempDir = mkdtempSync(join(tmpdir(), 'mrx-legacy-inline-ocr-'));
const ocrBinary = join(ocrTempDir, 'ocr-image-text');
execFileSync('swiftc', [join(repoRoot, 'scripts', 'ocr-image-text.swift'), '-o', ocrBinary], {
  stdio: ['ignore', 'pipe', 'pipe'],
});

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const results = [];

try {
  for (const [slug, sourcePath] of sources) {
    const postPath = join(postsDir, `${slug}.mdx`);
    const postSource = readFileSync(postPath, 'utf8');
    const fm = frontmatter(postSource, postPath);
    const phrase = scalar(fm, 'primary_keyword');
    const targetPublicPath = nestedScalar(fm, 'inline_image', 'src');
    const targetPath = join(publicDir, targetPublicPath.slice(1));
    const row = manifest.rows.find((candidate) => candidate.slug === slug);
    if (!row) throw new Error(`Missing two-image manifest row: ${slug}`);

    const base = await sharp(sourcePath)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
      .modulate({ brightness: 0.9, saturation: 0.84 })
      .toBuffer();
    await sharp(base)
      .composite([{ input: overlaySvg(phrase), left: 0, top: 0 }])
      .webp({ quality: 90, effort: 6 })
      .toFile(targetPath);

    const actualOcr = execFileSync(ocrBinary, [targetPath], { encoding: 'utf8' }).trim();
    const expectedNormalized = normalizeText(phrase);
    const actualNormalized = normalizeText(actualOcr);
    if (actualNormalized !== expectedNormalized) {
      throw new Error(
        `${slug}: OCR mismatch expected=${expectedNormalized} actual=${actualNormalized}`,
      );
    }

    const hash = sha256(targetPath);
    const pHash = await perceptualHash(targetPath);
    let nextFm = replaceInlineScalar(
      fm,
      'prompt',
      `Distinct MRX-owned in-body evidence composition with deterministic exact-keyword text: ${phrase}`,
    );
    nextFm = replaceInlineScalar(
      nextFm,
      'source',
      'MRX-owned AI-generated distinct evidence composition via built-in image generation on 2026-09-15',
    );
    nextFm = replaceInlineScalar(nextFm, 'perceptual_hash', pHash);
    writeFileSync(postPath, postSource.replace(fm, nextFm));

    row.generated_at_utc = generatedAt;
    row.inline = {
      ...row.inline,
      visual_variant: 'distinct-evidence-base-left-panel-v1',
      width: WIDTH,
      height: HEIGHT,
      mime_type: 'image/webp',
      sha256: hash,
      perceptual_hash: pHash,
      neutralized_art_text_region_count: 0,
      ocr: {
        expected: phrase,
        actual: actualOcr,
        normalized_expected: expectedNormalized,
        normalized_actual: actualNormalized,
        uppercase_i_confusable_accepted: false,
        pass: true,
      },
    };
    results.push({
      slug,
      source: basename(sourcePath),
      target: targetPublicPath,
      sha256: hash,
      ocr: true,
    });
  }

  manifest.generated_at_utc = generatedAt;
  manifest.summary = {
    ...manifest.summary,
    unique_hero_sha256_count: new Set(manifest.rows.map((row) => row.hero.sha256)).size,
    unique_inline_sha256_count: new Set(manifest.rows.map((row) => row.inline.sha256)).size,
    distinct_article_pair_count: manifest.rows.filter(
      (row) => row.hero.sha256 !== row.inline.sha256,
    ).length,
    hero_ocr_pass_count: manifest.rows.filter((row) => row.hero.ocr.pass).length,
    inline_ocr_pass_count: manifest.rows.filter((row) => row.inline.ocr.pass).length,
  };
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(JSON.stringify({ generated_at_utc: generatedAt, results }, null, 2));
} finally {
  rmSync(ocrTempDir, { recursive: true, force: true });
}
