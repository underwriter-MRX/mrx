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

const reviewedBatchPaths = [
  '/assets/articles/hero/are-there-any-fees-for-a-free-underwriter-review-of-your-mineral-rights.webp',
  '/assets/articles/hero/can-you-sell-part-of-your-mineral-rights-partial-interest-sales-explained.webp',
  '/assets/articles/hero/loving-cad-2026-certified-mineral-roll-zip-pdf-txt-and-csv-member-map.webp',
  '/assets/articles/hero/texas-comptroller-county-appraisal-district-directory-retrieval-provenance-worksheet.webp',
  '/assets/articles/hero/title-curative-for-mineral-rights-what-it-is-and-why-it-matters-before-you-sell.webp',
  '/assets/articles/hero/why-doesnt-my-texas-mineral-tax-value-match-a-sale-estimate.webp',
  '/assets/articles/hero/mineral-rights-inheritance-in-texas-what-heirs-need-to-know-before-selling.webp',
  '/assets/articles/hero/texas-rrc-edms-injection-disposal-permit-document-retrieval-provenance-worksheet.webp',
  '/assets/articles/hero/what-to-bring-to-your-underwriter-review-call-essential-documents-and-preparation-guide.webp',
  '/assets/articles/hero/1031-exchange-for-mineral-rights-does-it-qualify-and-how-does-it-work.webp',
  '/assets/articles/hero/mineral-rights-retained-evidence-source-scope-worksheet.webp',
  '/assets/articles/hero/net-mineral-acres-vs-royalty-acres-what-texas-mineral-rights-owners-need-to-know.webp',
  '/assets/articles/hero/understanding-the-key-factors-influencing-your-mineral-rights-offer-range.webp',
  targetPath,
  '/assets/articles/hero/capital-gains-tax-on-mineral-rights-sales-in-texas-what-sellers-need-to-know.webp',
  '/assets/articles/hero/how-texas-mineral-rights-ownership-works-deeds-conveyances-and-title.webp',
  '/assets/articles/hero/how-to-find-out-if-you-own-mineral-rights-in-texas.webp',
  '/assets/articles/hero/how-to-identify-lowball-mineral-rights-offers.webp',
  '/assets/articles/hero/howard-cad-2024-annual-report-category-g-oil-and-gas-property-totals-page-locator.webp',
  '/assets/articles/hero/key-factors-that-determine-your-mineral-rights-assessment-pricing-range.webp',
  '/assets/articles/hero/texas-comptroller-category-g1-g2-and-g3-mineral-classification-boundary-table.webp',
  '/assets/articles/hero/understanding-royalty-checks-after-inheriting-mineral-rights.webp',
  '/assets/articles/hero/what-determines-the-value-of-your-mineral-rights.webp',
  '/assets/articles/hero/what-is-an-oil-and-gas-lease-and-how-does-it-affect-your-mineral-rights.webp',
  '/assets/articles/hero/what-to-expect-during-the-underwriter-review-process-for-your-mineral-rights.webp',
].sort();

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
  it('accepts only the explicit reviewed asset-specific concise-alt batch inventory', () => {
    const conciseOverrides = Object.entries(textPolicy.assets).filter(
      ([, evidence]) => 'concise_alt' in evidence && evidence.concise_alt !== undefined,
    );
    expect(conciseOverrides.map(([path]) => path).sort()).toEqual(reviewedBatchPaths);
    for (const [, evidence] of conciseOverrides) {
      const reviewed = evidence as { concise_alt: string; visual_review: string };
      expect(reviewed.concise_alt.trim()).toBe(reviewed.concise_alt);
      expect(reviewed.concise_alt.length).toBeGreaterThan(0);
      expect(reviewed.visual_review).toMatch(/^2026-10-01:\s+\S/);
    }
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
    expect(validate({ evidence: printedEvidence({ visual_review: '2026-09-30:   ' }) })).toContain(
      'concise_alt requires completed visual review evidence',
    );
    expect(
      validate({ evidence: printedEvidence({ visual_review: '2026-02-30: reviewed image' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
    expect(
      validate({ evidence: printedEvidence({ visual_review: '09/30/2026: reviewed image' }) }),
    ).toContain('concise_alt requires completed visual review evidence');
  });

  it('rejects punctuation-only dated visual review detail', () => {
    expect(validate({ evidence: printedEvidence({ visual_review: '2026-09-30: ---' }) })).toContain(
      'concise_alt requires completed visual review evidence',
    );
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
