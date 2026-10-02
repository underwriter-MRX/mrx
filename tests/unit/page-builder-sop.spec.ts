import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';

import manifest from '../../config/page-builder-sop-assets.json';
import textPolicy from '../../config/mrx-image-text-alt-policy.json';
import { resolveImageTextAlt, resolvePageBuilderImage } from '../../src/lib/page-builder-sop';

const repoRoot = process.cwd();

describe('Page Builder SEO/AEO shared render prevention', () => {
  it('uses exact reviewed printed words and preserves fallback alts for no-text assets', () => {
    expect(
      resolveImageTextAlt(
        '/assets/articles/hero/how-to-sell-mineral-rights-in-texas.webp',
        'old description',
      ),
    ).toBe('How to Sell Mineral Rights in Texas');
    expect(
      resolveImageTextAlt(
        '/assets/team/travis-256.webp',
        'Travis, fictional MRX Offer and Value Guide',
      ),
    ).toBe('Travis, fictional MRX Offer and Value Guide');
    expect(resolveImageTextAlt('/assets/brand/mrx-logo-white.webp', 'old logo alt')).toBe(
      'Mineral Rights Xchange',
    );
  });

  it('keeps the reviewed division-order candidate inside the explicit concise-alt batch', () => {
    const target =
      '/assets/articles/hero/what-is-a-division-order-and-why-does-it-matter-for-mineral-rights-owners.webp';
    const evidence = textPolicy.assets[target];
    const targetFile = join(repoRoot, 'public', target);

    expect(textPolicy.owner_policy).toContain(
      'Keep exact printed text as pixel/title identity evidence',
    );
    expect(textPolicy.owner_policy).toContain('do not require a full transcription in alt text');
    expect(evidence.exact_text).toBe(
      'What Is a Division Order and Why Does It Matter for Mineral Rights Owners?',
    );
    expect(evidence.concise_alt).toBe(
      'Division order article cover with title beside a document card',
    );
    expect(resolveImageTextAlt(target, evidence.exact_text)).toBe(evidence.concise_alt);
    expect(
      Object.values(textPolicy.assets).filter(
        (asset) => 'concise_alt' in asset && asset.concise_alt !== undefined,
      ),
    ).toHaveLength(59);
    expect(createHash('sha256').update(readFileSync(targetFile)).digest('hex')).toBe(
      evidence.sha256,
    );
    expect(resolveImageTextAlt('/assets/brand/mrx-logo-white.webp', 'old logo alt')).toBe(
      'Mineral Rights Xchange',
    );
    expect(resolveImageTextAlt('/assets/decorative/unknown.webp', '')).toBe('');
  });

  it('uses the reviewed partial-sale controlled-pilot wording', () => {
    const target =
      '/assets/articles/hero/can-you-sell-part-of-your-mineral-rights-partial-interest-sales-explained.webp';
    const evidence = textPolicy.assets[target];

    expect(evidence.concise_alt).toBe(
      'Partial mineral sale cover with segmented circle beside title',
    );
    expect(resolveImageTextAlt(target, evidence.exact_text)).toBe(evidence.concise_alt);
  });

  it('uses the next three reviewed asset-specific concise alternatives', () => {
    const expected = {
      '/assets/articles/hero/karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk.webp':
        'Karnes CAD cover with two table windows in an ivory binder',
      '/assets/articles/hero/martin-cad-2025-category-g-row-oil-and-gas-parcel-count-and-market-value-boundary.webp':
        'Martin CAD cover with a tabbed table and brass ruler',
      '/assets/articles/hero/midland-cad-2026-certified-mineral-roll-zip-file-order-formats-and-privacy-limits.webp':
        'Midland CAD cover with reels, storage boxes and folders',
    } as const;

    for (const [path, conciseAlt] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(conciseAlt);
    }
  });

  it('resolves the remaining twelve reviewed asset-specific concise alternatives', () => {
    const expected = {
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

    for (const [path, conciseAlt] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(conciseAlt);
    }
  });

  it('resolves the current three reviewed asset-specific concise alternatives', () => {
    const expected = {
      '/assets/articles/hero/form-50-843-electronic-delivery-request-field-inventory-for-crane-mineral-properties.webp':
        'Form 50-843 cover with tabbed folders in a black file box',
      '/assets/articles/hero/how-to-check-a-texas-mineral-ownership-report-before-comparing-a-buyer-offer.webp':
        'Ownership report cover with a pumpjack photo on clipped papers',
      '/assets/articles/hero/howard-cad-2025-2026-reappraisal-plan-mineral-property-valuation-section-locator.webp':
        'Howard CAD plan cover with folders in an open file drawer',
    } as const;

    for (const [path, conciseAlt] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(conciseAlt);
    }
  });

  it('resolves the dataset-three reviewed asset-specific concise alternatives', () => {
    const expected = {
      '/assets/articles/hero/howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record.webp':
        'Howard dataset cover with a gold bar in a clear-lidded case',
      '/assets/articles/hero/howard-cad-2026-certified-mineral-roll-zip-16-member-pacs-export-container-index.webp':
        'Howard mineral roll cover with two dark round containers',
      '/assets/articles/hero/loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk.webp':
        'Loving report cover with a book, cards and magnifying glass',
    } as const;

    for (const [path, conciseAlt] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(conciseAlt);
    }
  });

  it('resolves the records-three reviewed asset-specific concise alternatives', () => {
    const expected = {
      '/assets/articles/hero/navigating-competing-offers-what-to-do-before-your-mineral-rights-assessment-call.webp':
        'Competing offers cover with a stylized document beside title',
      '/assets/articles/hero/sop-20260928/cad-account-number-rrc-lease-id-and-operator-number-in-texas-mineral-records.webp':
        'Mineral records cover with index cards, tags and a magnifier',
      '/assets/articles/hero/sop-20260928/gonzales-cad-2025-mass-appraisal-report-mineral-responsibility-page-locator.webp':
        'Gonzales report cover with an open map binder and magnifier',
    } as const;

    for (const [path, conciseAlt] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(conciseAlt);
    }
  });

  it('resolves the appraisal-two reviewed alternatives without changing exact-text identity', () => {
    const expected = {
      '/assets/articles/hero/sop-20260928/midland-cad-mineral-property-page-three-approaches-and-the-sufficient-data-condition.webp':
        {
          exactText:
            'Midland CAD Mineral Property Page: Three Approaches and the Sufficient-Data Condition',
          conciseAlt: 'Midland appraisal cover with rock samples and calipers',
        },
      '/assets/articles/hero/sop-20260928/the-comprehensive-guide-to-factors-impacting-your-mineral-rights-valuation.webp':
        {
          exactText: 'The Comprehensive Guide to Factors Impacting Your Mineral Rights Valuation',
          conciseAlt: 'Valuation guide cover with two men reviewing maps and documents',
        },
    } as const;

    for (const [path, reviewed] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect(evidence.exact_text).toBe(reviewed.exactText);
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(reviewed.conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(reviewed.conciseAlt);
    }
  });

  it('resolves the offer-three reviewed alternatives without changing exact-text identity', () => {
    const expected = {
      '/assets/articles/hero/why-owners-start-with-an-mrx-educational-review.webp':
        {
          exactText: 'Why Owners Start With an MRX Educational Review',
          conciseAlt: 'Educational review cover with an open notebook and question cards',
        },
      '/assets/articles/hero/ward-cad-2025-2026-reappraisal-plan-two-mineral-sections-and-their-page-ranges.webp':
        {
          exactText:
            'Ward CAD 2025-2026 Reappraisal Plan: Two Mineral Sections and Their Page Ranges',
          conciseAlt: 'Ward reappraisal cover with an open tabbed map binder',
        },
      '/assets/articles/hero/upton-cad-2026-mineral-data-files-2-260-byte-txt-records-and-a-nested-csv-header.webp':
        {
          exactText:
            'Upton CAD 2026 Mineral Data Files: 2,260-Byte TXT Records and a Nested CSV Header',
          conciseAlt: 'Upton data files cover with folders and perforated paper',
        },
    } as const;

    for (const [path, reviewed] of Object.entries(expected)) {
      const evidence = textPolicy.assets[path as keyof typeof textPolicy.assets];
      expect(evidence.exact_text).toBe(reviewed.exactText);
      expect('concise_alt' in evidence).toBe(true);
      if (!('concise_alt' in evidence)) throw new Error(`Missing concise_alt for ${path}`);
      expect(evidence.concise_alt).toBe(reviewed.conciseAlt);
      expect(resolveImageTextAlt(path, evidence.exact_text)).toBe(reviewed.conciseAlt);
    }
  });

  it('uses only manifest-approved versioned paths and keeps unknown paths unchanged', () => {
    const [source, evidence] = Object.entries(manifest.assets)[0];
    expect(resolvePageBuilderImage({ src: source, alt: 'Lease records on a desk.' }).src).toBe(
      evidence.replacement,
    );
    expect(
      resolvePageBuilderImage({ src: '/assets/brand/unknown.webp', alt: 'MRX shield.' }).src,
    ).toBe('/assets/brand/unknown.webp');
  });

  it('applies SHA-reviewed exact text after optimized path replacement', () => {
    const source =
      '/assets/articles/hero/pecos-cad-oil-and-gas-property-discovery-rrcid-permit-and-january-1.webp';
    const resolved = resolvePageBuilderImage({
      src: source,
      alt: 'old description',
      social_src: source,
      social_alt: 'old social description',
    });
    expect(resolved.src).toContain('/sop-20260928/');
    expect(resolved.alt).toBe(
      'Pecos CAD Oil and Gas Property Discovery: RRCID, Permit, and January 1 JANUARY 1',
    );
    expect(resolved.social_alt).toBe(resolved.alt);
  });

  it('covers the complete public image policy with no unresolved assets', () => {
    expect(Object.keys(textPolicy.assets)).toHaveLength(733);
    expect(textPolicy.summary).toMatchObject({
      printed_text_asset_count: 692,
      no_text_asset_count: 41,
      unresolved_asset_count: 0,
      ocr_corroborated_asset_count: 676,
      independently_visual_reviewed_asset_count: 76,
    });
  });

  it('binds every optimized asset to verified bytes, dimensions, SHA and quality thresholds', async () => {
    expect(Object.keys(manifest.assets)).toHaveLength(177);
    for (const evidence of Object.values(manifest.assets)) {
      const file = join(repoRoot, 'public', evidence.replacement);
      expect(existsSync(file), evidence.replacement).toBe(true);
      expect(statSync(file).size, evidence.replacement).toBe(evidence.optimized_bytes);
      expect(evidence.optimized_bytes, evidence.replacement).toBeLessThan(100000);
      expect(evidence.psnr_db, evidence.replacement).toBeGreaterThanOrEqual(34);
      expect(evidence.quality, evidence.replacement).toBeGreaterThanOrEqual(76);
      const sha = createHash('sha256').update(readFileSync(file)).digest('hex');
      expect(sha, evidence.replacement).toBe(evidence.optimized_sha256);
      const metadata = await sharp(file).metadata();
      expect(metadata.width, evidence.replacement).toBe(evidence.width);
      expect(metadata.height, evidence.replacement).toBe(evidence.height);
    }
    expect(manifest.residuals).toHaveLength(2);
  });
});
