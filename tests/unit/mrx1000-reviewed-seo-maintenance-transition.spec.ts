import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

import {
  analyzeControlledPublicationTransition,
  sha256Bytes,
} from '../../scripts/_mrx1000-controlled-publication-transition.mjs';
import {
  analyzeReviewedSeoMaintenanceTransition,
  reconstructReviewedSource,
  transitionIsPublished,
} from '../../scripts/_mrx1000-reviewed-seo-maintenance-transition.mjs';

const reviewedDraft = Buffer.from(
  [
    '---',
    'title: Exact Reviewed Article',
    "hero:",
    "  alt: 'Exact Reviewed Article printed over a mineral records desk'",
    'draft: false',
    'publication_status: draft',
    'noindex: true',
    '---',
    '',
    '# Exact Reviewed Article',
    '',
    'Reviewed prose.',
    '',
    '## Sources',
    '',
    '',
  ].join('\n'),
  'utf8',
);
const previousPublished = Buffer.from(
  reviewedDraft
    .toString('utf8')
    .replace('publication_status: draft', 'publication_status: published')
    .replace('noindex: true', 'noindex: false'),
  'utf8',
);
const oldHeading = Buffer.from('## Sources\n\n', 'utf8');
const newHeading = Buffer.from(
  '<h2 id="sources">Sources reviewed for this article</h2>\n',
  'utf8',
);
const headingStart = previousPublished.indexOf(oldHeading);
const maintained = Buffer.concat([
  previousPublished.subarray(0, headingStart),
  newHeading,
  previousPublished.subarray(headingStart + oldHeading.length),
]);
const repoPath = 'src/content/posts/exact-reviewed-article.mdx';
const entry = {
  article_sha256: sha256Bytes(reviewedDraft),
  repo_sha256: sha256Bytes(reviewedDraft),
  admission_status: 'admitted_exact',
  finalization_state: 'draft_noindex_admitted',
};
const reviewEntry = {
  repo_path: repoPath,
  previous_sha256: sha256Bytes(previousPublished),
  current_sha256: sha256Bytes(maintained),
  reverse_edits: [
    {
      start_byte: headingStart,
      end_byte: headingStart + newHeading.length,
      current_base64: newHeading.toString('base64'),
      previous_base64: oldHeading.toString('base64'),
    },
  ],
  review_disposition: 'PASS',
  scope: 'Reviewed H2 maintenance only.',
};
const maintenanceReview = {
  artifact_type: 'mrx_reviewed_seo_maintenance_transition',
  version: 1,
  reviewer_id: 'codex-independent-maintenance-review',
  reviewed_at: '2026-09-29T12:22:34.764002+00:00',
  baseline_commit: '22a575faf5ba097cde2d8a840aeda9977e049e88',
  entries: [reviewEntry],
  failures: [],
};

function analyze(source: Buffer, review: any = maintenanceReview, path = repoPath) {
  return analyzeReviewedSeoMaintenanceTransition({
    source,
    entry,
    repoPath: path,
    maintenanceReview: review,
    analyzeHistoricalTransition: analyzeControlledPublicationTransition,
  });
}

describe('reviewed SEO maintenance transition', () => {
  it('reconstructs the exact prior bytes and delegates to immutable historical proof', () => {
    const proof = analyze(maintained);
    expect(proof.authorized).toBe(true);
    expect(proof.state).toBe('reviewed_seo_maintenance_transition');
    expect(proof.reviewed_body_sha256).toBe(entry.article_sha256);
    expect(proof.historical_transition.state).toBe('controlled_publication_transition');
    expect(transitionIsPublished(proof)).toBe(true);
    expect(proof.maintenance_review).toMatchObject({
      reviewer_id: 'codex-independent-maintenance-review',
      repo_path: repoPath,
      previous_body_sha256: sha256Bytes(previousPublished),
      reviewed_current_body_sha256: sha256Bytes(maintained),
      reverse_edit_count: 1,
    });
  });

  it.each([
    ['title', 'Exact Reviewed Article', 'Changed Article Title'],
    ['prose', 'Reviewed prose.', 'Changed prose.'],
    [
      'alt',
      'Exact Reviewed Article printed over a mineral records desk',
      'Changed image alternative',
    ],
    ['private policy', 'noindex: false', 'noindex: true'],
  ])('fails closed on a subsequent %s edit', (_label, from, to) => {
    const tampered = Buffer.from(maintained.toString('utf8').replace(from, to), 'utf8');
    const proof = analyze(tampered);
    expect(proof.authorized).toBe(false);
    expect(proof.reason).toBe('maintenance_current_hash_mismatch');
  });

  it('fails closed when the repository path is not uniquely reviewed', () => {
    const proof = analyze(maintained, maintenanceReview, 'src/content/posts/other.mdx');
    expect(proof.authorized).toBe(false);
    expect(proof.reason).toBe('maintenance_review_path_not_unique');
  });

  it('fails closed when an enumerated byte range does not match current bytes', () => {
    const corrupted = structuredClone(maintenanceReview);
    corrupted.entries[0].reverse_edits[0].current_base64 = Buffer.from(
      'not the reviewed heading',
      'utf8',
    ).toString('base64');
    const proof = analyze(maintained, corrupted);
    expect(proof.authorized).toBe(false);
    expect(proof.reason).toBe('maintenance_reverse_edit_bytes_mismatch');
  });

  it('reconstructs all 242 independently reviewed repository entries', () => {
    const ledger = JSON.parse(
      readFileSync(
        'config/maintenance-reviews/2026-09-29-otto-source-remediation.json',
        'utf8',
      ),
    );
    expect(ledger.entries).toHaveLength(242);
    expect(ledger.failures).toEqual([]);
    for (const row of ledger.entries) {
      const current = readFileSync(row.repo_path);
      const proof = reconstructReviewedSource(current, row);
      expect(proof.authorized, `${row.repo_path}: ${proof.reason}`).toBe(true);
      expect((proof as any).maintenance_previous_sha256).toBe(row.previous_sha256);
    }
  });

  it.each([
    ['insertion', 'abc😀xyz', 'abcNEW😀xyz', 'NEW', ''],
    ['deletion', 'abcOLD😀xyz', 'abc😀xyz', '', 'OLD'],
  ])('supports byte-exact %s patches with an empty snippet', (_label, before, after, now, prior) => {
    const previous = Buffer.from(before, 'utf8');
    const current = Buffer.from(after, 'utf8');
    const start = Buffer.from('abc', 'utf8').length;
    const proof = reconstructReviewedSource(current, {
      repo_path: 'synthetic',
      previous_sha256: sha256Bytes(previous),
      current_sha256: sha256Bytes(current),
      reverse_edits: [
        {
          start_byte: start,
          end_byte: start + Buffer.byteLength(now, 'utf8'),
          current_base64: Buffer.from(now, 'utf8').toString('base64'),
          previous_base64: Buffer.from(prior, 'utf8').toString('base64'),
        },
      ],
      review_disposition: 'PASS',
    });
    expect(proof.authorized).toBe(true);
    expect((proof as any).maintenance_previous_sha256).toBe(sha256Bytes(previous));
  });

  it('rejects character offsets that split a non-ASCII UTF-8 sequence', () => {
    const previous = Buffer.from('éOLD', 'utf8');
    const current = Buffer.from('éNEW', 'utf8');
    const proof = reconstructReviewedSource(current, {
      repo_path: 'synthetic',
      previous_sha256: sha256Bytes(previous),
      current_sha256: sha256Bytes(current),
      reverse_edits: [
        {
          start_byte: 1,
          end_byte: 4,
          current_base64: Buffer.from('NEW', 'utf8').toString('base64'),
          previous_base64: Buffer.from('OLD', 'utf8').toString('base64'),
        },
      ],
      review_disposition: 'PASS',
    });
    expect(proof.authorized).toBe(false);
    expect(proof.reason).toBe('maintenance_reverse_edit_bytes_mismatch');
  });

  it('rejects a maintenance ledger that records any review failure', () => {
    const failedLedger = { ...maintenanceReview, failures: ['prose drift'] };
    const proof = analyze(maintained, failedLedger);
    expect(proof.authorized).toBe(false);
    expect(proof.reason).toBe('maintenance_review_metadata_invalid');
  });

  it('does not publish reviewed draft/noindex bytes through maintenance evidence', () => {
    const draftHeadingStart = reviewedDraft.indexOf(oldHeading);
    const maintainedDraft = Buffer.concat([
      reviewedDraft.subarray(0, draftHeadingStart),
      newHeading,
      reviewedDraft.subarray(draftHeadingStart + oldHeading.length),
    ]);
    const draftReview = {
      ...maintenanceReview,
      entries: [
        {
          ...reviewEntry,
          previous_sha256: sha256Bytes(reviewedDraft),
          current_sha256: sha256Bytes(maintainedDraft),
          reverse_edits: [
            {
              start_byte: draftHeadingStart,
              end_byte: draftHeadingStart + newHeading.length,
              current_base64: newHeading.toString('base64'),
              previous_base64: oldHeading.toString('base64'),
            },
          ],
        },
      ],
    };
    const proof = analyze(maintainedDraft, draftReview);
    expect(proof.authorized).toBe(true);
    expect(proof.historical_transition.state).toBe('reviewed_bytes_current');
    expect(transitionIsPublished(proof)).toBe(false);
  });
});
