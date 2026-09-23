import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import {
  hasAppendOnlyAdmissionAuthority,
  validateAppendOnlyIdentityAddendum,
} from '../../scripts/lib/mrx1000-append-only-identity-addendum.mjs';
import {
  appendOnlyReviewPath,
  inspectAppendOnlyAdmission,
} from '../../scripts/check-mrx1000-append-only-admission-readiness.mjs';

const root = resolve(import.meta.dirname, '../..');
const bytes = (relative: string) => readFileSync(resolve(root, relative));
const sha256 = (value: Buffer) => createHash('sha256').update(value).digest('hex');
const historicalJson = bytes('config/mrx-1000-canonical-content-ledger.json');
const historicalCsv = bytes('config/mrx-1000-canonical-content-ledger.csv');
const historical = JSON.parse(historicalJson.toString('utf8'));
const addendum = JSON.parse(
  bytes('config/mrx1000-append-only-identity-addendum.json').toString('utf8'),
);
const check = (value: typeof addendum) =>
  validateAppendOnlyIdentityAddendum(
    historical,
    value,
    sha256(historicalJson),
    sha256(historicalCsv),
  );

describe('MRX1000 append-only identity addendum', () => {
  it('isolates new review artifacts from the immutable release-10 batch', () => {
    const slug = 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes';
    for (const capability of ['editorial', 'factual_citation', 'compliance']) {
      const path = appendOnlyReviewPath(slug, capability);
      expect(path).toBe(`artifacts/mrx1000-append-only/reviews/${slug}/${capability}.json`);
      expect(path).not.toContain('mrx1000-release-10');
    }
    expect(() => appendOnlyReviewPath('../escape', 'editorial')).toThrow('Invalid article slug.');
    expect(() => appendOnlyReviewPath(slug, '../escape')).toThrow('Invalid review capability.');
  });
  it('includes the hash-bound append-only inputs in both Vercel source upload routes', () => {
    const ignore = bytes('.vercelignore').toString('utf8');
    const stage = bytes('scripts/prepare-vercel-deploy-stage.sh').toString('utf8');
    expect(ignore).toContain('!docs/governance/mrx1000-wave250-selection-decision-2026-09-23.md');
    expect(ignore).toContain('!artifacts/mrx1000-wave250-creative-qa/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/creative-manifest.json');
    expect(ignore).toContain('!artifacts/mrx1000-append-only/reviews/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/*.json.sha256');
    expect(stage).toContain('docs/governance/mrx1000-wave250-selection-decision-2026-09-23.md');
    expect(stage).toContain('artifacts/mrx1000-wave250-creative-qa/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/creative-manifest.json');
    expect(stage).toContain('artifacts/mrx1000-append-only/reviews/');
  });
  it('binds the immutable historical JSON/CSV and admits only the new identity', () => {
    const result = check(addendum);
    expect(result.findings).toEqual([]);
    expect(result.admittedRows).toMatchObject([
      {
        program_row_id: 'MRX1000-1116',
        canonical_slug: 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes',
      },
    ]);
    expect(historical.articles).toHaveLength(1000);
    expect(
      historical.articles.find(
        (row: { program_row_id: string }) => row.program_row_id === 'MRX1000-0440',
      )?.canonical_slug,
    ).toBe('royalty-management-for-inherited-mineral-rights');
    expect(addendum.entries[0].program_row_id).toBe('MRX1000-1116');
  });

  it('would expose an admitted row without changing or replacing the historical pilot identity', () => {
    const promoted = structuredClone(addendum);
    promoted.entries[0].identity_state = 'admitted_quality_gated';
    const result = check(promoted);
    expect(result.findings).toEqual([]);
    expect(result.admittedRows).toMatchObject([
      {
        program_row_id: 'MRX1000-1116',
        canonical_slug: 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes',
        publication_status: 'draft',
        draft: true,
        frontmatter_noindex: true,
      },
    ]);
    expect(
      historical.articles.find(
        (row: { program_row_id: string }) => row.program_row_id === 'MRX1000-0440',
      )?.canonical_slug,
    ).toBe('royalty-management-for-inherited-mineral-rights');
  });

  it('fails on changed historical bytes or a duplicated historical identity', () => {
    const wrongBase = structuredClone(addendum);
    wrongBase.historical_ledger_sha256 = '0'.repeat(64);
    expect(check(wrongBase).findings).toContain(
      'Identity addendum historical JSON SHA-256 mismatch.',
    );

    const reusedId = structuredClone(addendum);
    reusedId.entries[0].program_row_id = 'MRX1000-0440';
    expect(check(reusedId).findings).toContain(
      'Identity addendum entry 1 duplicates a program row ID.',
    );

    const reusedSlug = structuredClone(addendum);
    reusedSlug.entries[0].canonical_slug = 'royalty-management-for-inherited-mineral-rights';
    expect(check(reusedSlug).findings).toContain(
      'Identity addendum entry 1 has a missing or duplicate canonical slug.',
    );
  });

  it('fails when the claimed retired row or candidate state is false', () => {
    const wrongRelation = structuredClone(addendum);
    wrongRelation.entries[0].redefines_historical_slug = 'wrong-old-slug';
    expect(check(wrongRelation).findings).toContain(
      'Identity addendum entry 1 historical redefinition identity does not match the immutable ledger.',
    );

    const unsupportedState = structuredClone(addendum);
    unsupportedState.entries[0].identity_state = 'published_verified';
    expect(check(unsupportedState).findings).toContain(
      'Identity addendum entry 1 has an unsupported identity state.',
    );
  });

  it('requires an explicit publication disposition and executive verdict for an admitted identity', () => {
    const admittedDecision = bytes(addendum.entries[0].selection_decision_path).toString('utf8');
    expect(hasAppendOnlyAdmissionAuthority(admittedDecision)).toBe(true);
    expect(
      hasAppendOnlyAdmissionAuthority(
        '# Decision\n- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`\n',
      ),
    ).toBe(false);
    expect(
      hasAppendOnlyAdmissionAuthority(
        '# Decision\nMRX_CEO_DECISION: APPROVE_REDEFINED\n- Disposition: `APPROVED_FOR_DETAILED_REVIEW_ONLY`\n',
      ),
    ).toBe(false);
    expect(
      hasAppendOnlyAdmissionAuthority(
        '# Decision\nMRX_CEO_DECISION: APPROVE_REDEFINED\n- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`\n',
      ),
    ).toBe(true);
  });

  it('refuses to run the legacy ledger-rewriting admission helper for wave 250', () => {
    const beforeJson = sha256(bytes('config/mrx-1000-canonical-content-ledger.json'));
    const beforeCsv = sha256(bytes('config/mrx-1000-canonical-content-ledger.csv'));
    const run = spawnSync(process.execPath, ['scripts/admit-mrx1000-wave82.mjs'], {
      cwd: root,
      env: { ...process.env, MRX_WAVE_NUMBER: '250' },
      encoding: 'utf8',
    });
    expect(run.status).not.toBe(0);
    expect(run.stderr).toContain('requires append-only admission');
    expect(sha256(bytes('config/mrx-1000-canonical-content-ledger.json'))).toBe(beforeJson);
    expect(sha256(bytes('config/mrx-1000-canonical-content-ledger.csv'))).toBe(beforeCsv);
  });

  it('verifies exact-current-byte admission without writing historical ledger bytes', () => {
    const beforeJson = sha256(bytes('config/mrx-1000-canonical-content-ledger.json'));
    const beforeCsv = sha256(bytes('config/mrx-1000-canonical-content-ledger.csv'));
    const result = inspectAppendOnlyAdmission({
      slug: 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes',
      creativeManifestPath:
        'artifacts/mrx1000-wave250-creative-qa/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/creative-manifest.json',
    });
    expect(result.ready_for_identity_and_review_admission).toBe(true);
    expect(result.blockers).toEqual([]);
    expect(result.article_sha256).toBe(
      sha256(bytes('src/content/posts/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes.mdx')),
    );
    expect(result.creative_manifest_sha256).toBe(
      sha256(bytes('artifacts/mrx1000-wave250-creative-qa/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/creative-manifest.json')),
    );
    expect(sha256(bytes('config/mrx-1000-canonical-content-ledger.json'))).toBe(beforeJson);
    expect(sha256(bytes('config/mrx-1000-canonical-content-ledger.csv'))).toBe(beforeCsv);
  });

  it('rejects an unsafe creative-manifest path without leaving the repository', () => {
    const result = inspectAppendOnlyAdmission({
      slug: 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes',
      creativeManifestPath: '../outside-repo.json',
    });
    expect(result.ready_for_identity_and_review_admission).toBe(false);
    expect(result.blockers).toContain('Creative manifest path is unsafe or missing.');
  });

  it('rejects a different in-repository creative manifest from the admitted identity', () => {
    const result = inspectAppendOnlyAdmission({
      slug: 'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes',
      creativeManifestPath: 'config/mrx1000-release-10-batch.json',
    });
    expect(result.ready_for_identity_and_review_admission).toBe(false);
    expect(result.blockers).toContain(
      'Creative manifest path does not match the append-only identity addendum.',
    );
  });
});
