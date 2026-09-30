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
    expect(textPolicy.owner_policy).toContain(
      'do not require a full transcription in alt text',
    );
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
    ).toHaveLength(25);
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
