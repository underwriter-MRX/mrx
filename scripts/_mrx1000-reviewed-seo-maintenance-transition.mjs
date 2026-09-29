import { extractFrontmatterBytes, sha256Bytes } from './_mrx1000-controlled-publication-transition.mjs';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const HEX64 = /^[a-f0-9]{64}$/i;
const MAINTENANCE_REVIEW_RELATIVE_PATH = join(
  'config',
  'maintenance-reviews',
  '2026-09-29-otto-source-remediation.json',
);

function failure(source, reason, details = {}) {
  const currentBytes = Buffer.isBuffer(source) ? source : Buffer.from(source);
  const frontmatter = extractFrontmatterBytes(currentBytes);
  return {
    authorized: false,
    state: 'invalid',
    reason,
    current_body_sha256: sha256Bytes(currentBytes),
    current_frontmatter_sha256: frontmatter ? sha256Bytes(frontmatter) : null,
    ...details,
  };
}

function decodeBase64(value) {
  if (typeof value !== 'string') return null;
  const decoded = Buffer.from(value, 'base64');
  return decoded.toString('base64') === value ? decoded : null;
}

export function reconstructReviewedSource(source, reviewEntry) {
  const currentBytes = Buffer.isBuffer(source) ? Buffer.from(source) : Buffer.from(source);
  const currentSha256 = sha256Bytes(currentBytes);
  if (!reviewEntry || reviewEntry.review_disposition !== 'PASS') {
    return failure(currentBytes, 'maintenance_review_entry_not_pass');
  }
  if (!HEX64.test(reviewEntry.current_sha256 ?? '')) {
    return failure(currentBytes, 'maintenance_current_hash_invalid');
  }
  if (currentSha256 !== reviewEntry.current_sha256.toLowerCase()) {
    return failure(currentBytes, 'maintenance_current_hash_mismatch', {
      maintenance_current_sha256: reviewEntry.current_sha256.toLowerCase(),
    });
  }
  if (!HEX64.test(reviewEntry.previous_sha256 ?? '')) {
    return failure(currentBytes, 'maintenance_previous_hash_invalid');
  }
  if (!Array.isArray(reviewEntry.reverse_edits) || reviewEntry.reverse_edits.length === 0) {
    return failure(currentBytes, 'maintenance_reverse_edits_missing');
  }

  const edits = reviewEntry.reverse_edits
    .map((edit) => ({
      ...edit,
      current: decodeBase64(edit.current_base64),
      previous: decodeBase64(edit.previous_base64),
    }))
    .sort((left, right) => right.start_byte - left.start_byte);

  let previousStart = currentBytes.length;
  let reconstructed = Buffer.from(currentBytes);
  for (const edit of edits) {
    if (
      !Number.isInteger(edit.start_byte) ||
      !Number.isInteger(edit.end_byte) ||
      edit.start_byte < 0 ||
      edit.end_byte < edit.start_byte ||
      edit.end_byte > currentBytes.length ||
      edit.end_byte > previousStart ||
      edit.current == null ||
      edit.previous == null
    ) {
      return failure(currentBytes, 'maintenance_reverse_edit_invalid');
    }
    const actual = currentBytes.subarray(edit.start_byte, edit.end_byte);
    if (!actual.equals(edit.current)) {
      return failure(currentBytes, 'maintenance_reverse_edit_bytes_mismatch');
    }
    reconstructed = Buffer.concat([
      reconstructed.subarray(0, edit.start_byte),
      edit.previous,
      reconstructed.subarray(edit.end_byte),
    ]);
    previousStart = edit.start_byte;
  }

  const reconstructedSha256 = sha256Bytes(reconstructed);
  if (reconstructedSha256 !== reviewEntry.previous_sha256.toLowerCase()) {
    return failure(currentBytes, 'maintenance_reconstructed_hash_mismatch', {
      maintenance_previous_sha256: reviewEntry.previous_sha256.toLowerCase(),
      reconstructed_body_sha256: reconstructedSha256,
    });
  }

  return {
    authorized: true,
    state: 'maintenance_bytes_reconstructed',
    reason: null,
    current_body_sha256: currentSha256,
    maintenance_previous_sha256: reconstructedSha256,
    reconstructed_bytes: reconstructed,
  };
}

export function analyzeReviewedSeoMaintenanceTransition({
  source,
  entry,
  repoPath,
  maintenanceReview,
  analyzeHistoricalTransition,
}) {
  const currentBytes = Buffer.isBuffer(source) ? source : Buffer.from(source);
  if (
    maintenanceReview?.artifact_type !== 'mrx_reviewed_seo_maintenance_transition' ||
    maintenanceReview?.version !== 1 ||
    !maintenanceReview?.reviewer_id ||
    !/^\d{4}-\d{2}-\d{2}T/.test(maintenanceReview?.reviewed_at ?? '') ||
    !Array.isArray(maintenanceReview?.failures) ||
    maintenanceReview.failures.length !== 0 ||
    typeof analyzeHistoricalTransition !== 'function'
  ) {
    return failure(currentBytes, 'maintenance_review_metadata_invalid');
  }

  const matches = (maintenanceReview.entries ?? []).filter((row) => row.repo_path === repoPath);
  if (matches.length !== 1) {
    return failure(currentBytes, 'maintenance_review_path_not_unique');
  }

  const reconstruction = reconstructReviewedSource(currentBytes, matches[0]);
  if (!reconstruction.authorized) return reconstruction;

  const historical = analyzeHistoricalTransition(reconstruction.reconstructed_bytes, entry);
  if (!historical.authorized) {
    return failure(currentBytes, 'maintenance_historical_transition_unauthorized', {
      historical_transition: historical,
    });
  }

  const currentFrontmatter = extractFrontmatterBytes(currentBytes);
  return {
    ...historical,
    authorized: true,
    state: 'reviewed_seo_maintenance_transition',
    reason: null,
    current_body_sha256: sha256Bytes(currentBytes),
    current_frontmatter_sha256: currentFrontmatter ? sha256Bytes(currentFrontmatter) : null,
    maintenance_review: {
      reviewer_id: maintenanceReview.reviewer_id,
      reviewed_at: maintenanceReview.reviewed_at,
      baseline_commit: maintenanceReview.baseline_commit ?? null,
      repo_path: repoPath,
      previous_body_sha256: matches[0].previous_sha256,
      reviewed_current_body_sha256: matches[0].current_sha256,
      reverse_edit_count: matches[0].reverse_edits.length,
      scope: matches[0].scope ?? null,
    },
    historical_transition: historical,
    changes: [
      ...(historical.changes ?? []),
      {
        field: 'reviewed_seo_maintenance',
        from: matches[0].previous_sha256,
        to: matches[0].current_sha256,
      },
    ],
  };
}

export function loadReviewedSeoMaintenanceReview(repoRoot) {
  const path = join(repoRoot, MAINTENANCE_REVIEW_RELATIVE_PATH);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8'));
}

export function analyzeCurrentSourceTransition({
  source,
  entry,
  repoPath,
  repoRoot,
  analyzeHistoricalTransition,
  maintenanceReview = loadReviewedSeoMaintenanceReview(repoRoot),
}) {
  const historical = analyzeHistoricalTransition(source, entry);
  if (historical.authorized) return historical;
  if (!maintenanceReview) return historical;
  return analyzeReviewedSeoMaintenanceTransition({
    source,
    entry,
    repoPath,
    maintenanceReview,
    analyzeHistoricalTransition,
  });
}

export function transitionIsPublished(transition) {
  return (
    transition?.state === 'controlled_publication_transition' ||
    (transition?.state === 'reviewed_seo_maintenance_transition' &&
      transition?.historical_transition?.state === 'controlled_publication_transition')
  );
}
