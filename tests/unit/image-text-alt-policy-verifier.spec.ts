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
  '/assets/articles/hero/brazos-county-texas-mineral-rights-property-tax-protest-evidence-packet.webp',
  '/assets/articles/hero/can-you-sell-part-of-your-mineral-rights-partial-interest-sales-explained.webp',
  '/assets/articles/hero/dimmit-cad-2025-mass-appraisal-report-mineral-responsibility-source-map.webp',
  '/assets/articles/hero/ector-cad-2026-certified-mineral-appraisal-roll-zip-source-control-record.webp',
  '/assets/articles/hero/form-50-150-confidentiality-boundary-map-for-crane-oil-and-gas-property.webp',
  '/assets/articles/hero/karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk.webp',
  '/assets/articles/hero/karnes-cad-2026-certified-mineral-roll-zip-seven-member-container-index.webp',
  '/assets/articles/hero/loving-cad-2026-certified-mineral-roll-zip-pdf-txt-and-csv-member-map.webp',
  '/assets/articles/hero/martin-cad-2025-category-g-row-oil-and-gas-parcel-count-and-market-value-boundary.webp',
  '/assets/articles/hero/midland-cad-2026-certified-mineral-roll-zip-file-order-formats-and-privacy-limits.webp',
  '/assets/articles/hero/midland-cad-open-records-page-mineral-files-rolls-and-notices-as-separate-source-routes.webp',
  '/assets/articles/hero/why-mineral-rights-are-separate-from-surface-rights-in-texas-a-landowners-guide.webp',
  '/assets/articles/hero/winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-and-taxpayer-records.webp',
  '/assets/articles/hero/glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator.webp',
  '/assets/articles/hero/how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement.webp',
  '/assets/articles/hero/midland-cad-2025-report-419-660-mineral-interest-accounts-on-pdf-page-25.webp',
  '/assets/articles/hero/risks-of-selling-your-mineral-rights-to-a-direct-buyer-what-to-know-before-you-sign.webp',
  '/assets/articles/hero/texas-comptroller-county-tax-assessor-collector-directory-retrieval-provenance-worksheet.webp',
  '/assets/articles/hero/types-of-mineral-rights-in-texas-royalty-interests-working-interests-and-overriding-royalties-explained.webp',
  '/assets/articles/hero/what-is-a-mineral-rights-purchase-agreement-and-what-should-it-include.webp',
  '/assets/articles/hero/what-to-do-when-you-have-competing-offers-on-your-mineral-rights-a-guide.webp',
  '/assets/articles/hero/form-50-171-separate-taxation-request-field-inventory-for-crane-mineral-interests.webp',
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
  '/assets/articles/hero/form-50-843-electronic-delivery-request-field-inventory-for-crane-mineral-properties.webp',
  '/assets/articles/hero/how-to-check-a-texas-mineral-ownership-report-before-comparing-a-buyer-offer.webp',
  '/assets/articles/hero/howard-cad-2025-2026-reappraisal-plan-mineral-property-valuation-section-locator.webp',
  '/assets/articles/hero/howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record.webp',
  '/assets/articles/hero/howard-cad-2026-certified-mineral-roll-zip-16-member-pacs-export-container-index.webp',
  '/assets/articles/hero/loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk.webp',
  '/assets/articles/hero/navigating-competing-offers-what-to-do-before-your-mineral-rights-assessment-call.webp',
  '/assets/articles/hero/sop-20260928/cad-account-number-rrc-lease-id-and-operator-number-in-texas-mineral-records.webp',
  '/assets/articles/hero/sop-20260928/gonzales-cad-2025-mass-appraisal-report-mineral-responsibility-page-locator.webp',
  '/assets/articles/hero/sop-20260928/midland-cad-mineral-property-page-three-approaches-and-the-sufficient-data-condition.webp',
  '/assets/articles/hero/sop-20260928/the-comprehensive-guide-to-factors-impacting-your-mineral-rights-valuation.webp',
].sort();

const rawNineExpectedAlts = {
  '/assets/articles/hero/are-there-any-fees-for-a-free-underwriter-review-of-your-mineral-rights.webp':
    'Review fees cover with document card beside title',
  '/assets/articles/hero/key-factors-that-determine-your-mineral-rights-assessment-pricing-range.webp':
    'Pricing range cover with bar chart beside title',
  '/assets/articles/hero/loving-cad-2026-certified-mineral-roll-zip-pdf-txt-and-csv-member-map.webp':
    'Loving CAD cover with open file box beside title',
  '/assets/articles/hero/texas-comptroller-category-g1-g2-and-g3-mineral-classification-boundary-table.webp':
    'Mineral classification cover with three category cards',
  '/assets/articles/hero/texas-comptroller-county-appraisal-district-directory-retrieval-provenance-worksheet.webp':
    'Appraisal directory cover with Texas cutout and card file',
  '/assets/articles/hero/title-curative-for-mineral-rights-what-it-is-and-why-it-matters-before-you-sell.webp':
    'Title curative cover with magnifying glass and checkmark',
  '/assets/articles/hero/understanding-royalty-checks-after-inheriting-mineral-rights.webp':
    'Inherited royalty checks cover with geometric diagram',
  '/assets/articles/hero/what-is-an-oil-and-gas-lease-and-how-does-it-affect-your-mineral-rights.webp':
    'Oil and gas lease cover with document card beside title',
  '/assets/articles/hero/why-doesnt-my-texas-mineral-tax-value-match-a-sale-estimate.webp':
    'Tax value cover with mineral samples, map and folders',
} as const;

const nextFiveExpectedAlts = {
  '/assets/articles/hero/brazos-county-texas-mineral-rights-property-tax-protest-evidence-packet.webp':
    'Brazos tax protest cover with folders and a storage box',
  '/assets/articles/hero/dimmit-cad-2025-mass-appraisal-report-mineral-responsibility-source-map.webp':
    'Dimmit CAD cover with a tabbed book beside the title',
  '/assets/articles/hero/ector-cad-2026-certified-mineral-appraisal-roll-zip-source-control-record.webp':
    'Ector CAD cover with lockbox and tray holding an ivory case',
  '/assets/articles/hero/form-50-150-confidentiality-boundary-map-for-crane-oil-and-gas-property.webp':
    'Form 50-150 cover with open case, envelope and core sample',
  '/assets/articles/hero/karnes-cad-2026-certified-mineral-roll-zip-seven-member-container-index.webp':
    'Karnes CAD cover with folders and a blue case beside the title',
} as const;

const nextThreeExpectedAlts = {
  '/assets/articles/hero/karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk.webp':
    'Karnes CAD cover with two table windows in an ivory binder',
  '/assets/articles/hero/martin-cad-2025-category-g-row-oil-and-gas-parcel-count-and-market-value-boundary.webp':
    'Martin CAD cover with a tabbed table and brass ruler',
  '/assets/articles/hero/midland-cad-2026-certified-mineral-roll-zip-file-order-formats-and-privacy-limits.webp':
    'Midland CAD cover with reels, storage boxes and folders',
} as const;

const remainingTwelveExpectedAlts = {
  '/assets/articles/hero/midland-cad-open-records-page-mineral-files-rolls-and-notices-as-separate-source-routes.webp':
    'Midland CAD cover with three separate card-file drawers',
  '/assets/articles/hero/why-mineral-rights-are-separate-from-surface-rights-in-texas-a-landowners-guide.webp':
    'Mineral and surface rights cover with a mountain-and-sun icon',
  '/assets/articles/hero/winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-and-taxpayer-records.webp':
    'Winkler CAD cover with three paper stacks feeding a file tray',
  '/assets/articles/hero/glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator.webp':
    'Glasscock CAD cover with stacked folders and a brass label',
  '/assets/articles/hero/how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement.webp':
    'Inherited royalty cover with a tabbed statement and Texas map',
  '/assets/articles/hero/midland-cad-2025-report-419-660-mineral-interest-accounts-on-pdf-page-25.webp':
    'Midland CAD report cover with a tabbed book and rock samples',
  '/assets/articles/hero/risks-of-selling-your-mineral-rights-to-a-direct-buyer-what-to-know-before-you-sign.webp':
    'Direct-buyer risks cover with a three-line document icon',
  '/assets/articles/hero/texas-comptroller-county-tax-assessor-collector-directory-retrieval-provenance-worksheet.webp':
    'Tax directory cover with a service window and notice board',
  '/assets/articles/hero/types-of-mineral-rights-in-texas-royalty-interests-working-interests-and-overriding-royalties-explained.webp':
    'Mineral-rights types cover with three binder icons',
  '/assets/articles/hero/what-is-a-mineral-rights-purchase-agreement-and-what-should-it-include.webp':
    'Purchase-agreement cover with a signed-document icon',
  '/assets/articles/hero/what-to-do-when-you-have-competing-offers-on-your-mineral-rights-a-guide.webp':
    'Competing-offers cover with folders stacked on a desk',
  '/assets/articles/hero/form-50-171-separate-taxation-request-field-inventory-for-crane-mineral-interests.webp':
    'Form 50-171 cover with file dividers and a rock sample',
} as const;

const currentThreeExpectedAlts = {
  '/assets/articles/hero/form-50-843-electronic-delivery-request-field-inventory-for-crane-mineral-properties.webp':
    'Form 50-843 cover with tabbed folders in a black file box',
  '/assets/articles/hero/how-to-check-a-texas-mineral-ownership-report-before-comparing-a-buyer-offer.webp':
    'Ownership report cover with a pumpjack photo on clipped papers',
  '/assets/articles/hero/howard-cad-2025-2026-reappraisal-plan-mineral-property-valuation-section-locator.webp':
    'Howard CAD plan cover with folders in an open file drawer',
} as const;

const datasetThreeExpectedAlts = {
  '/assets/articles/hero/howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record.webp':
    'Howard dataset cover with a gold bar in a clear-lidded case',
  '/assets/articles/hero/howard-cad-2026-certified-mineral-roll-zip-16-member-pacs-export-container-index.webp':
    'Howard mineral roll cover with two dark round containers',
  '/assets/articles/hero/loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk.webp':
    'Loving report cover with a book, cards and magnifying glass',
} as const;

const recordsThreeExpectedAlts = {
  '/assets/articles/hero/navigating-competing-offers-what-to-do-before-your-mineral-rights-assessment-call.webp':
    'Competing offers cover with a stylized document beside title',
  '/assets/articles/hero/sop-20260928/cad-account-number-rrc-lease-id-and-operator-number-in-texas-mineral-records.webp':
    'Mineral records cover with index cards, tags and a magnifier',
  '/assets/articles/hero/sop-20260928/gonzales-cad-2025-mass-appraisal-report-mineral-responsibility-page-locator.webp':
    'Gonzales report cover with an open map binder and magnifier',
} as const;

const appraisalTwoExpectedAlts = {
  '/assets/articles/hero/sop-20260928/midland-cad-mineral-property-page-three-approaches-and-the-sufficient-data-condition.webp':
    'Midland appraisal cover with rock samples and calipers',
  '/assets/articles/hero/sop-20260928/the-comprehensive-guide-to-factors-impacting-your-mineral-rights-valuation.webp':
    'Valuation guide cover with two men reviewing maps and documents',
} as const;

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
      expect(reviewed.visual_review).toMatch(/^2026-10-(?:01|02):\s+\S/);
    }
    expect(validate()).toEqual([]);
    expect(validate({ alt: 'A vaguely relevant document image' })).toContain(
      'alt does not equal the reviewed concise override',
    );
  });

  it('retains the nine owner-approved raw-audit concise alternatives exactly', () => {
    expect(Object.keys(rawNineExpectedAlts)).toHaveLength(9);
    for (const [path, expectedAlt] of Object.entries(rawNineExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-01:\s+\S/);
    }
  });

  it('uses exactly the five current root-reviewed concise alternatives', () => {
    expect(Object.keys(nextFiveExpectedAlts)).toHaveLength(5);
    for (const [path, expectedAlt] of Object.entries(nextFiveExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-01:\s+\S/);
    }
  });

  it('uses exactly the next three root-reviewed concise alternatives', () => {
    expect(Object.keys(nextThreeExpectedAlts)).toHaveLength(3);
    for (const [path, expectedAlt] of Object.entries(nextThreeExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-01:\s+\S/);
    }
  });

  it('uses exactly the remaining twelve root-reviewed concise alternatives', () => {
    expect(Object.keys(remainingTwelveExpectedAlts)).toHaveLength(12);
    for (const [path, expectedAlt] of Object.entries(remainingTwelveExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-02:\s+\S/);
    }
  });

  it('uses exactly the current three root-reviewed concise alternatives', () => {
    expect(Object.keys(currentThreeExpectedAlts)).toHaveLength(3);
    for (const [path, expectedAlt] of Object.entries(currentThreeExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-02:\s+\S/);
    }
  });

  it('uses exactly the dataset-three root-reviewed concise alternatives', () => {
    expect(Object.keys(datasetThreeExpectedAlts)).toHaveLength(3);
    for (const [path, expectedAlt] of Object.entries(datasetThreeExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-02:\s+\S/);
    }
  });

  it('uses exactly the records-three root-reviewed concise alternatives', () => {
    expect(Object.keys(recordsThreeExpectedAlts)).toHaveLength(3);
    for (const [path, expectedAlt] of Object.entries(recordsThreeExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-02:\s+\S/);
    }
  });

  it('uses exactly the appraisal-two root-reviewed concise alternatives', () => {
    expect(Object.keys(appraisalTwoExpectedAlts)).toHaveLength(2);
    for (const [path, expectedAlt] of Object.entries(appraisalTwoExpectedAlts)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(expectedAlt);
      expect(evidence.visual_review).toMatch(/^2026-10-02:\s+\S/);
    }
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
