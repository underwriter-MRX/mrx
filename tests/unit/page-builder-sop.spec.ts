import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';

import manifest from '../../config/page-builder-sop-assets.json';
import { normalizePublicImageAlt, resolvePageBuilderImage } from '../../src/lib/page-builder-sop';

const repoRoot = process.cwd();

describe('Page Builder SEO/AEO shared render prevention', () => {
  it('removes production-note alt phrasing without changing visible title text', () => {
    expect(
      normalizePublicImageAlt(
        'MRX article cover with the title “How to Sell Mineral Rights in Texas”.',
      ),
    ).toBe('Mineral-rights guide titled “How to Sell Mineral Rights in Texas”.');
    expect(
      normalizePublicImageAlt(
        'A Texas wellbore-query research counter appears beside the exact article title.',
      ),
    ).toBe('A Texas wellbore-query research counter.');
    expect(
      normalizePublicImageAlt('Distinct lease-rate sensitivity board labeled “lease rates”.'),
    ).toBe('lease-rate sensitivity board labeled “lease rates”.');
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

  it('applies independently reviewed per-asset alternatives before path replacement', () => {
    const cases = [
      [
        '/assets/articles/hero/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review.webp',
        'Ohio deed book beside a farmland window',
      ],
      [
        '/assets/articles/inline/existing-wells-vs-future-locations-in-a-dcf-model/existing-wells-future-locations-dcf.webp',
        'Pumpjack and decline curves beside future well slots',
      ],
      [
        '/assets/articles/inline/five-key-indicators-that-show-your-mineral-rights-are-ready-for-evaluation/how-do-i-know-if-my-mineral-rights-qualify-for-evaluation.webp',
        'Mineral records, map, and rig on an evaluation board',
      ],
      [
        '/assets/articles/inline/get-a-free-mineral-rights-valuation-review-today/free-mineral-rights-valuation-review.webp',
        'Review workbook linked to maps and charts',
      ],
    ] as const;
    for (const [src, alt] of cases) {
      const resolved = resolvePageBuilderImage({
        src,
        alt: 'production-note placeholder',
        social_src: src,
        social_alt: 'production-note placeholder',
      });
      expect(resolved.alt).toBe(alt);
      expect(resolved.social_alt).toBe(alt);
    }
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
