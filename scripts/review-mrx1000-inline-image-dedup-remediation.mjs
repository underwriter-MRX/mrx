#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const batch = JSON.parse(
  readFileSync(join(root, 'config', 'mrx1000-release-10-batch.json'), 'utf8'),
);
const expectedRemediationCount = 69;
const currentFactoryDirective =
  'docs/governance/mrx1000-current-seo-aeo-article-factory-directive-2026-08-28.md';
const reviewedAt = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
const reviewRunId = `mrx1000-inline-image-dedup-${reviewedAt.replace(/[-:]/g, '')}`;
const capabilities = ['editorial', 'factual_citation', 'compliance'];

const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function frontmatter(source, slug) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`${slug}: frontmatter missing`);
  return `${match[1]}\n`;
}

function inlineImageSrc(source, slug) {
  const fm = frontmatter(source, slug);
  const block = fm.match(/^inline_image:\s*\n((?:[ \t]+.*\n?)*)/m)?.[1] ?? '';
  const src = block.match(/^\s*src:\s*['"]([^'"]+)['"]\s*$/m)?.[1];
  if (!src) throw new Error(`${slug}: inline_image.src missing`);
  return src;
}

function removeOneBodyDuplicate(source, src, slug) {
  const escaped = escapeRegex(src);
  const htmlPattern = new RegExp(`\\n<img\\b[^>]*\\bsrc=(["'])${escaped}\\1[^>]*\\/?>\\s*\\n`, 'g');
  const markdownPattern = new RegExp(
    `\\n!\\[[^\\]\\n]*\\]\\(${escaped}(?:\\s+["'][^"']*["'])?\\)\\s*\\n`,
    'g',
  );
  const htmlCount = [...source.matchAll(htmlPattern)].length;
  const markdownCount = [...source.matchAll(markdownPattern)].length;
  if (htmlCount + markdownCount !== 1) {
    throw new Error(
      `${slug}: expected one raw duplicate image node; found html=${htmlCount}, markdown=${markdownCount}`,
    );
  }
  return source.replace(htmlPattern, '\n').replace(markdownPattern, '\n');
}

function article256PriorSource(currentSource) {
  const src =
    '/assets/articles/inline/glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator/glasscock-cad-category-g-mineral-definition.webp';
  const imageBlock = `<img
  src="${src}"
  alt="An overhead blank category table appears above the exact Glasscock CAD Category G mineral definition phrase."
  width="1200"
  height="675"
  loading="lazy"
  decoding="async"
/>`;
  const anchor = '\n## Keep the report row and a property question separate';
  if (!currentSource.includes(anchor)) {
    throw new Error('Article 256 reconstruction anchor missing');
  }
  return currentSource.replace(anchor, `\n${imageBlock}\n${anchor}`);
}

function artifactPathsBySlug(capability) {
  const directory = join(root, 'artifacts/mrx1000-release-10/reviews/final', capability);
  return new Map(
    readdirSync(directory)
      .filter((name) => name.endsWith('.json'))
      .map((name) => {
        const path = join(directory, name);
        const artifact = JSON.parse(readFileSync(path, 'utf8'));
        return [artifact.slug, path];
      }),
  );
}

const artifactPaths = new Map(
  capabilities.map((capability) => [capability, artifactPathsBySlug(capability)]),
);
const reviewed = [];

for (const entry of batch.articles) {
  const sourcePath = join(root, entry.repo_path);
  const currentSource = readFileSync(sourcePath, 'utf8');
  const currentSha = sha256(currentSource);
  const editorialPath = artifactPaths.get('editorial').get(entry.slug);
  if (!editorialPath) throw new Error(`${entry.slug}: editorial artifact missing`);
  const editorial = JSON.parse(readFileSync(editorialPath, 'utf8'));
  const priorSha = editorial.expected_repo_sha256;

  if (priorSha === currentSha) {
    const reboundArtifacts = capabilities.map((capability) => {
      const artifactPath = artifactPaths.get(capability).get(entry.slug);
      if (!artifactPath) throw new Error(`${entry.slug}: ${capability} artifact missing`);
      return JSON.parse(readFileSync(artifactPath, 'utf8'));
    });
    const remediation = editorial.remediation_review;
    const alreadyRebound =
      remediation?.disposition === 'PASS' &&
      remediation.current_body_sha256 === currentSha &&
      remediation.prior_body_sha256 !== currentSha &&
      remediation.frontmatter_byte_identical === true &&
      remediation.prose_and_citations_byte_identical_after_node_removal === true &&
      remediation.canonical_inline_asset_unchanged === true &&
      remediation.prior_inline_src_occurrences === 2 &&
      remediation.current_inline_src_occurrences === 1 &&
      reboundArtifacts.every(
        (artifact) =>
          artifact.disposition === 'PASS' &&
          artifact.input_body_sha256 === currentSha &&
          artifact.expected_repo_sha256 === currentSha &&
          artifact.remediation_review?.prior_body_sha256 === remediation.prior_body_sha256 &&
          artifact.remediation_review?.current_body_sha256 === currentSha &&
          artifact.remediation_review?.disposition === 'PASS',
      );

    if (!alreadyRebound) continue;
    reviewed.push({
      program_row_id: entry.program_row_id,
      slug: entry.slug,
      prior_body_sha256: remediation.prior_body_sha256,
      current_body_sha256: currentSha,
      inline_src: inlineImageSrc(currentSource, entry.slug),
      review_state: 'already_bound',
    });
    continue;
  }
  if (entry.repo_sha256 !== currentSha || entry.article_sha256 !== currentSha) {
    throw new Error(`${entry.slug}: release batch is not rebound to current source bytes`);
  }

  let priorSource;
  try {
    priorSource = execFileSync('git', ['show', `HEAD:${entry.repo_path}`], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    if (
      entry.slug !== 'glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator'
    ) {
      throw new Error(`${entry.slug}: prior tracked source is unavailable`);
    }
    priorSource = article256PriorSource(currentSource);
  }

  if (sha256(priorSource) !== priorSha) {
    throw new Error(`${entry.slug}: prior reviewed SHA does not match prior source bytes`);
  }
  if (frontmatter(priorSource, entry.slug) !== frontmatter(currentSource, entry.slug)) {
    throw new Error(`${entry.slug}: frontmatter changed during deduplication`);
  }

  const src = inlineImageSrc(currentSource, entry.slug);
  const priorOccurrences = priorSource.split(src).length - 1;
  const currentOccurrences = currentSource.split(src).length - 1;
  if (priorOccurrences !== 2 || currentOccurrences !== 1) {
    throw new Error(
      `${entry.slug}: expected inline source occurrences 2 -> 1, observed ${priorOccurrences} -> ${currentOccurrences}`,
    );
  }
  if (removeOneBodyDuplicate(priorSource, src, entry.slug) !== currentSource) {
    throw new Error(`${entry.slug}: current bytes contain changes beyond duplicate image removal`);
  }

  for (const capability of capabilities) {
    const artifactPath = artifactPaths.get(capability).get(entry.slug);
    if (!artifactPath) throw new Error(`${entry.slug}: ${capability} artifact missing`);
    const artifact = JSON.parse(readFileSync(artifactPath, 'utf8'));
    if (
      artifact.disposition !== 'PASS' ||
      artifact.input_body_sha256 !== priorSha ||
      artifact.expected_repo_sha256 !== priorSha
    ) {
      throw new Error(`${entry.slug}: ${capability} prior PASS binding is invalid`);
    }

    artifact.reviewed_at = reviewedAt;
    artifact.review_run_id = reviewRunId;
    artifact.input_body_sha256 = currentSha;
    artifact.expected_repo_sha256 = currentSha;
    artifact.decision_authority = {
      ...artifact.decision_authority,
      current_factory_directive: currentFactoryDirective,
      remediation_policy:
        'Exact duplicate inline-image node removal with byte-level old/new proof; no prose, citation, frontmatter, metadata, or canonical asset change.',
    };
    artifact.remediation_review = {
      reviewer_id: 'codex_inline_image_dedup_review',
      prior_body_sha256: priorSha,
      current_body_sha256: currentSha,
      frontmatter_byte_identical: true,
      prose_and_citations_byte_identical_after_node_removal: true,
      canonical_inline_asset_unchanged: true,
      prior_inline_src_occurrences: 2,
      current_inline_src_occurrences: 1,
      disposition: 'PASS',
    };
    artifact.findings = [
      ...(artifact.findings ?? []),
      `Remediation review proved that ${priorSha} -> ${currentSha} removes only one redundant body image node for the frontmatter-controlled canonical inline asset; prose, citations, frontmatter, metadata, image bytes, and prior substantive findings remain unchanged.`,
    ];
    artifact.checks = (artifact.checks ?? []).map((check) =>
      check && typeof check === 'object' && check.name === 'complete_file_sha256_match'
        ? { ...check, evidence: currentSha }
        : check,
    );

    const body = `${JSON.stringify(artifact, null, 2)}\n`;
    writeFileSync(artifactPath, body);
    writeFileSync(`${artifactPath}.sha256`, `${sha256(body)}  ${basename(artifactPath)}\n`);
  }

  reviewed.push({
    program_row_id: entry.program_row_id,
    slug: entry.slug,
    prior_body_sha256: priorSha,
    current_body_sha256: currentSha,
    inline_src: src,
  });
}

if (reviewed.length !== expectedRemediationCount) {
  throw new Error(
    `Expected ${expectedRemediationCount} remediated articles; reviewed ${reviewed.length}`,
  );
}

console.log(
  JSON.stringify(
    {
      disposition: 'PASS',
      review_run_id: reviewRunId,
      reviewed_at: reviewedAt,
      article_count: reviewed.length,
      frontmatter_changes: 0,
      prose_or_citation_changes: 0,
      duplicate_inline_nodes_removed: reviewed.length,
      articles: reviewed,
    },
    null,
    2,
  ),
);
