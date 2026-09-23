import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import {
  hasAppendOnlyAdmissionAuthority,
  validateAppendOnlyIdentityAddendum,
} from '../../scripts/lib/mrx1000-append-only-identity-addendum.mjs';

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
  it('binds the immutable historical JSON/CSV and keeps review-only identities out of admission', () => {
    const result = check(addendum);
    expect(result.findings).toEqual([]);
    expect(result.admittedRows).toEqual([]);
    expect(historical.articles).toHaveLength(1000);
    expect(historical.articles.find((row: { program_row_id: string }) =>
      row.program_row_id === 'MRX1000-0440',
    )?.canonical_slug).toBe('royalty-management-for-inherited-mineral-rights');
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
    expect(historical.articles.find((row: { program_row_id: string }) =>
      row.program_row_id === 'MRX1000-0440',
    )?.canonical_slug).toBe('royalty-management-for-inherited-mineral-rights');
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
    const reviewOnly = bytes(addendum.entries[0].selection_decision_path).toString('utf8');
    expect(hasAppendOnlyAdmissionAuthority(reviewOnly)).toBe(false);
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
});
