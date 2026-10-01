import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';

import textPolicy from '../../config/mrx-image-text-alt-policy.json';
import { validateAltOccurrence } from '../../src/lib/image-text-alt-policy-verifier.mjs';

const targetPath =
  '/assets/articles/hero/what-is-a-division-order-and-why-does-it-matter-for-mineral-rights-owners.webp';
const exactText = 'What Is a Division Order and Why Does It Matter for Mineral Rights Owners?';
const conciseAlt = 'Division order article cover with title beside a document card';
const assetSha = '456aa0a777cf0288d9bd7f358930ed3a5535cd3e462be91506676b6509d5e12b';
const assetBytes = 32598;

function printedEvidence(overrides = {}) {
  return {
    sha256: assetSha,
    bytes: assetBytes,
    classification: 'printed_text',
    exact_text: exactText,
    concise_alt: conciseAlt,
    visual_review:
      '2026-09-30: navy title panel beside outlined document card; mrx_ceo-approved concise-alt pilot',
    original_path: null,
    ...overrides,
  };
}

function validate({
  path = targetPath,
  evidence = printedEvidence(),
  alt = conciseAlt,
  actualSha256 = assetSha,
  actualBytes = assetBytes,
  assets,
}: any = {}) {
  return validateAltOccurrence({
    assets: assets ?? { [targetPath]: evidence },
    path,
    alt,
    actualSha256,
    actualBytes,
  });
}

describe('image text alt policy verifier', () => {
  it('accepts only the reviewed asset-specific concise override', () => {
    const conciseOverrides = Object.entries(textPolicy.assets).filter(
      ([, evidence]) => 'concise_alt' in evidence && evidence.concise_alt !== undefined,
    );
    expect(conciseOverrides).toHaveLength(1);
    expect(conciseOverrides[0]?.[0]).toBe(targetPath);
    expect(validate()).toEqual([]);
    expect(validate({ alt: 'A vaguely relevant document image' })).toContain(
      'alt does not equal the reviewed concise override',
    );
  });

  it('rejects empty and unreviewed concise overrides', () => {
    expect(validate({ evidence: printedEvidence({ concise_alt: '   ' }), alt: '   ' })).toContain(
      'concise_alt must be a nonempty trimmed string',
    );
    expect(
      validate({
        evidence: printedEvidence({ visual_review: 'not_performed_not_required' }),
      }),
    ).toContain('concise_alt requires completed visual review evidence');
    expect(
      validate({ evidence: printedEvidence({ visual_review: 'pending visual review' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
    expect(validate({ evidence: printedEvidence({ visual_review: '2026-09-30:' }) })).toContain(
      'concise_alt requires completed visual review evidence',
    );
    expect(
      validate({ evidence: printedEvidence({ visual_review: '2026-09-30:   ' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
    expect(
      validate({ evidence: printedEvidence({ visual_review: '2026-02-30: reviewed image' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
    expect(
      validate({ evidence: printedEvidence({ visual_review: '09/30/2026: reviewed image' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
  });

  it('rejects wrong asset path, identity, exact-text evidence, or classification', () => {
    expect(validate({ path: '/assets/articles/hero/wrong.webp' })).toContain(
      'path is absent from image text alt policy',
    );
    expect(
      validate({ actualSha256: createHash('sha256').update('tampered').digest('hex') }),
    ).toContain('policy SHA binding mismatch');
    expect(validate({ actualBytes: assetBytes + 1 })).toContain('policy byte binding mismatch');
    expect(validate({ evidence: printedEvidence({ exact_text: '' }) })).toContain(
      'printed-text evidence requires nonempty exact_text',
    );
    expect(validate({ evidence: printedEvidence({ classification: 'unknown' }) })).toContain(
      'asset has unresolved classification',
    );
  });

  it('retains exact-text enforcement when no concise override is reviewed', () => {
    const evidence = printedEvidence({ concise_alt: undefined });
    expect(validate({ evidence, alt: exactText })).toEqual([]);
    expect(validate({ evidence, alt: conciseAlt })).toContain(
      'alt does not equal exact printed text',
    );
  });

  it('retains approved no-text values including explicit decorative empty alt', () => {
    const path = '/assets/decorative/example.webp';
    const evidence = {
      sha256: 'a'.repeat(64),
      bytes: 123,
      classification: 'no_text',
      exact_text: null,
      allowed_existing_alt_values: ['', 'A truthful description'],
      visual_review: '2026-09-30: verified no intentional printed text',
      original_path: null,
    };
    const common = {
      assets: { [path]: evidence },
      path,
      actualSha256: evidence.sha256,
      actualBytes: evidence.bytes,
    };
    expect(validateAltOccurrence({ ...common, alt: '' })).toEqual([]);
    expect(validateAltOccurrence({ ...common, alt: 'A truthful description' })).toEqual([]);
    expect(validateAltOccurrence({ ...common, alt: 'Invented content' })).toContain(
      'no-text alt is not an approved existing value',
    );
  });
});
