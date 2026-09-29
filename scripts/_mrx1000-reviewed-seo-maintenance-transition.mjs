import { extractFrontmatterBytes, sha256Bytes } from './_mrx1000-controlled-publication-transition.mjs';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const HEX64 = /^[a-f0-9]{64}$/i;
const MAINTENANCE_REVIEW_RELATIVE_PATHS = [
  join('config', 'maintenance-reviews', '2026-09-29-h2-heading-maintenance.json'),
  join('config', 'maintenance-reviews', '2026-09-29-otto-source-remediation.json'),
];

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

function maintenanceReviewMetadataIsValid(maintenanceReview) {
  return Boolean(
    maintenanceReview?.artifact_type === 'mrx_reviewed_seo_maintenance_transition' &&
      maintenanceReview?.version === 1 &&
      maintenanceReview?.reviewer_id &&
      /^\d{4}-\d{2}-\d{2}T/.test(maintenanceReview?.reviewed_at ?? '') &&
      Array.isArray(maintenanceReview?.entries) &&
      Array.isArray(maintenanceReview?.failures) &&
      maintenanceReview.failures.length === 0,
  );
}

function maintenanceReviewSummary(maintenanceReview, repoPath, reviewEntry) {
  return {
    reviewer_id: maintenanceReview.reviewer_id,
    reviewed_at: maintenanceReview.reviewed_at,
    baseline_commit: maintenanceReview.baseline_commit ?? null,
    repo_path: repoPath,
    previous_body_sha256: reviewEntry.previous_sha256,
    reviewed_current_body_sha256: reviewEntry.current_sha256,
    reverse_edit_count: reviewEntry.reverse_edits.length,
    scope: reviewEntry.scope ?? null,
  };
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
    !maintenanceReviewMetadataIsValid(maintenanceReview) ||
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
  const maintenanceReviewReport = maintenanceReviewSummary(
    maintenanceReview,
    repoPath,
    matches[0],
  );
  return {
    ...historical,
    authorized: true,
    state: 'reviewed_seo_maintenance_transition',
    reason: null,
    current_body_sha256: sha256Bytes(currentBytes),
    current_frontmatter_sha256: currentFrontmatter ? sha256Bytes(currentFrontmatter) : null,
    maintenance_review: maintenanceReviewReport,
    maintenance_chain: [maintenanceReviewReport, ...(historical.maintenance_chain ?? [])],
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

export function loadReviewedSeoMaintenanceReviews(repoRoot) {
  return MAINTENANCE_REVIEW_RELATIVE_PATHS.map((relativePath) => {
    const path = join(repoRoot, relativePath);
    if (!existsSync(path)) return null;
    return JSON.parse(readFileSync(path, 'utf8'));
  }).filter(Boolean);
}

// Compatibility for consumers that explicitly need the original immutable
// OTTO artifact rather than the ordered maintenance chain.
export function loadReviewedSeoMaintenanceReview(repoRoot) {
  return loadReviewedSeoMaintenanceReviews(repoRoot).at(-1) ?? null;
}

export function reconstructReviewedSourceChain(source, repoPath, maintenanceReviews) {
  const currentBytes = Buffer.isBuffer(source) ? Buffer.from(source) : Buffer.from(source);
  let reconstructed = currentBytes;
  const maintenanceChain = [];

  for (const maintenanceReview of maintenanceReviews ?? []) {
    if (!maintenanceReviewMetadataIsValid(maintenanceReview)) {
      return failure(currentBytes, 'maintenance_review_metadata_invalid');
    }
    const matches = maintenanceReview.entries.filter((row) => row.repo_path === repoPath);
    if (matches.length > 1) {
      return failure(currentBytes, 'maintenance_review_path_not_unique');
    }
    if (matches.length === 0) continue;

    const reconstruction = reconstructReviewedSource(reconstructed, matches[0]);
    if (!reconstruction.authorized) return reconstruction;
    reconstructed = reconstruction.reconstructed_bytes;
    maintenanceChain.push(maintenanceReviewSummary(maintenanceReview, repoPath, matches[0]));
  }

  if (maintenanceChain.length === 0) {
    return failure(currentBytes, 'maintenance_review_path_not_unique');
  }
  return {
    authorized: true,
    state: 'maintenance_chain_bytes_reconstructed',
    reason: null,
    current_body_sha256: sha256Bytes(currentBytes),
    maintenance_previous_sha256: sha256Bytes(reconstructed),
    reconstructed_bytes: reconstructed,
    maintenance_chain: maintenanceChain,
  };
}

export function analyzeCurrentSourceTransition({
  source,
  entry,
  repoPath,
  repoRoot,
  analyzeHistoricalTransition,
  maintenanceReview = undefined,
  maintenanceReviews =
    maintenanceReview == null
      ? loadReviewedSeoMaintenanceReviews(repoRoot)
      : [maintenanceReview],
}) {
  function analyzeChain(currentSource, remainingReviews) {
    const historical = analyzeHistoricalTransition(currentSource, entry);
    if (historical.authorized) return historical;

    for (let index = 0; index < remainingReviews.length; index += 1) {
      const review = remainingReviews[index];
      if (!maintenanceReviewMetadataIsValid(review)) {
        return failure(currentSource, 'maintenance_review_metadata_invalid');
      }
      const matches = review.entries.filter((row) => row.repo_path === repoPath);
      if (matches.length > 1) {
        return failure(currentSource, 'maintenance_review_path_not_unique');
      }
      if (matches.length === 0) continue;

      return analyzeReviewedSeoMaintenanceTransition({
        source: currentSource,
        entry,
        repoPath,
        maintenanceReview: review,
        analyzeHistoricalTransition: (reconstructedSource) =>
          analyzeChain(reconstructedSource, remainingReviews.slice(index + 1)),
      });
    }
    return historical;
  }

  return analyzeChain(source, maintenanceReviews ?? []);
}

export function transitionIsPublished(transition) {
  return (
    transition?.state === 'controlled_publication_transition' ||
    (transition?.state === 'reviewed_seo_maintenance_transition' &&
      transitionIsPublished(transition?.historical_transition))
  );
}
