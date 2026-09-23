#!/usr/bin/env node
/** Read-only, current-byte preflight. This does not admit or publish an article. */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  hasAppendOnlyAdmissionAuthority,
  validateAppendOnlyIdentityAddendum,
} from './lib/mrx1000-append-only-identity-addendum.mjs';

const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const read = (relative) => readFileSync(resolve(repoRoot, relative));
const readJson = (relative) => JSON.parse(read(relative).toString('utf8'));
const isHash = (value) => /^[a-f0-9]{64}$/.test(value ?? '');

function safeRelativePath(value) {
  if (!value || value.startsWith('/') || value.includes('\\')) return false;
  const absolute = resolve(repoRoot, value);
  return absolute.startsWith(`${repoRoot}${sep}`) && !value.split('/').includes('..');
}

export function inspectAppendOnlyAdmission({ slug, creativeManifestPath }) {
  const blockers = [];
  const ledgerJsonPath = 'config/mrx-1000-canonical-content-ledger.json';
  const ledgerCsvPath = 'config/mrx-1000-canonical-content-ledger.csv';
  const addendumPath = 'config/mrx1000-append-only-identity-addendum.json';
  const ledgerJson = read(ledgerJsonPath);
  const ledgerCsv = read(ledgerCsvPath);
  const ledger = JSON.parse(ledgerJson.toString('utf8'));
  const addendum = readJson(addendumPath);
  const identity = validateAppendOnlyIdentityAddendum(
    ledger,
    addendum,
    sha256(ledgerJson),
    sha256(ledgerCsv),
  );
  blockers.push(...identity.findings);
  const entry = (Array.isArray(addendum.entries) ? addendum.entries : []).find(
    (item) => item.canonical_slug === slug,
  );
  if (!entry) {
    blockers.push('Slug is absent from the append-only identity addendum.');
    return { slug, ready_for_identity_and_review_admission: false, blockers };
  }

  let decisionSha256 = null;
  if (!safeRelativePath(entry.selection_decision_path)) {
    blockers.push('Selection-decision path is unsafe or missing.');
  } else if (!existsSync(resolve(repoRoot, entry.selection_decision_path))) {
    blockers.push('Selection decision is missing.');
  } else {
    const decision = read(entry.selection_decision_path);
    decisionSha256 = sha256(decision);
    if (decisionSha256 !== entry.selection_decision_sha256) {
      blockers.push('Selection-decision SHA-256 does not match the addendum.');
    }
    if (!hasAppendOnlyAdmissionAuthority(decision.toString('utf8'))) {
      blockers.push(
        'Selection decision has no explicit publication disposition and executive verdict.',
      );
    }
  }
  if (entry.identity_state !== 'admitted_quality_gated') {
    blockers.push('Identity remains review-only; it is not admitted.');
  }

  const articlePath = `src/content/posts/${slug}.mdx`;
  const articleBytes = existsSync(resolve(repoRoot, articlePath)) ? read(articlePath) : null;
  const articleSha256 = articleBytes ? sha256(articleBytes) : null;
  if (!articleBytes) blockers.push('Final public article source is absent.');

  let creativeSha256 = null;
  let creative = null;
  if (!safeRelativePath(creativeManifestPath)) {
    blockers.push('Creative manifest path is unsafe or missing.');
  } else if (!existsSync(resolve(repoRoot, creativeManifestPath))) {
    blockers.push('Creative manifest is missing.');
  } else {
    const creativeBytes = read(creativeManifestPath);
    creativeSha256 = sha256(creativeBytes);
    creative = JSON.parse(creativeBytes.toString('utf8'));
    const hero = creative.article?.hero;
    const inline = creative.article?.inline;
    if (
      creative.article?.title !== entry.canonical_title ||
      hero?.rendered_text !== entry.canonical_title ||
      inline?.rendered_text !== creative.article?.keyword ||
      hero?.ocr?.pass !== true ||
      inline?.ocr?.pass !== true ||
      hero?.width !== 1200 ||
      hero?.height !== 630 ||
      inline?.width !== 1200 ||
      inline?.height !== 675 ||
      hero?.mime_type !== 'image/webp' ||
      inline?.mime_type !== 'image/webp' ||
      hero?.public_path !== `/assets/articles/hero/${slug}.webp` ||
      !inline?.public_path?.startsWith(`/assets/articles/inline/${slug}/`) ||
      hero?.sha256 === inline?.sha256 ||
      creative.verification?.exact_title_ocr !== true ||
      creative.verification?.exact_keyword_ocr !== true ||
      creative.verification?.distinct_output_binaries !== true
    ) {
      blockers.push('Creative manifest does not prove exact-title hero and distinct inline art.');
    }
    for (const [role, image] of [
      ['hero', hero],
      ['inline', inline],
    ]) {
      const publicPath = image?.public_path;
      const relative = publicPath?.startsWith('/') ? `public${publicPath}` : null;
      if (
        !safeRelativePath(relative) ||
        !isHash(image?.sha256) ||
        !existsSync(resolve(repoRoot, relative))
      ) {
        blockers.push(`${role} image path or digest is missing.`);
      } else if (sha256(read(relative)) !== image.sha256) {
        blockers.push(`${role} image bytes do not match the creative manifest.`);
      }
    }
  }

  const reviews = [
    [
      'editorial',
      `artifacts/mrx1000-release-10/reviews/final/editorial/${entry.program_row_id}-${slug}.json`,
    ],
    [
      'factual_citation',
      `artifacts/mrx1000-release-10/reviews/final/factual_citation/${slug}.review.json`,
    ],
    ['compliance', `artifacts/mrx1000-release-10/reviews/final/compliance/${slug}.json`],
  ];
  for (const [capability, path] of reviews) {
    if (!existsSync(resolve(repoRoot, path)) || !existsSync(resolve(repoRoot, `${path}.sha256`))) {
      blockers.push(`${capability} current-byte PASS review or sidecar is missing.`);
      continue;
    }
    const bytes = read(path);
    const sidecar = read(`${path}.sha256`).toString('utf8').trim().split(/\s+/)[0];
    const review = JSON.parse(bytes.toString('utf8'));
    if (
      sidecar !== sha256(bytes) ||
      review.disposition !== 'PASS' ||
      review.capability !== capability ||
      review.program_row_id !== entry.program_row_id ||
      review.slug !== slug ||
      review.input_body_sha256 !== articleSha256 ||
      review.two_image_manifest_sha256 !== creativeSha256
    ) {
      blockers.push(`${capability} review does not match current article and creative bytes.`);
    }
  }

  return {
    slug,
    program_row_id: entry.program_row_id,
    identity_state: entry.identity_state,
    decision_sha256: decisionSha256,
    article_sha256: articleSha256,
    creative_manifest_sha256: creativeSha256,
    ready_for_identity_and_review_admission: blockers.length === 0,
    blockers,
    note: 'Read-only identity and current-byte review preflight only; full release gates, build, deployment, and post-release verification remain separate.',
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const slug = process.argv[2];
  const creativeManifestPath = process.argv[3];
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '') || !creativeManifestPath) {
    console.error(
      'Usage: node scripts/check-mrx1000-append-only-admission-readiness.mjs <slug> <repo-relative-creative-manifest>',
    );
    process.exitCode = 2;
  } else {
    const result = inspectAppendOnlyAdmission({ slug, creativeManifestPath });
    console.log(JSON.stringify(result, null, 2));
    if (!result.ready_for_identity_and_review_admission) process.exitCode = 1;
  }
}
