import { describe, expect, it } from 'vitest';
import { readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const articlePath =
  'src/content/posts/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice.mdx';
const articleSource = readFileSync(articlePath, 'utf8');

function scalar(source: string, key: string): string {
  const raw = source.match(new RegExp(`^${key}:\\s*'([^']+)'`, 'm'))?.[1];
  if (!raw) throw new Error(`Missing scalar ${key}`);
  return raw;
}

function nestedScalar(source: string, parent: string, key: string): string {
  const block = source.match(new RegExp(`^${parent}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '';
  const raw = block.match(new RegExp(`^[ \\t]+${key}:\\s*'([^']+)'`, 'm'))?.[1];
  if (!raw) throw new Error(`Missing ${parent}.${key}`);
  return raw;
}

describe('Oklahoma pooling order Search Atlas audit remediation', () => {
  it('uses a narrow social-title override without changing the canonical article title', () => {
    expect(scalar(articleSource, 'title')).toBe(
      'How Do I Find an Oklahoma Pooling Order After Getting a Notice?',
    );
    expect(scalar(articleSource, 'seo_title')).toBe(
      'Find an Oklahoma Pooling Order After a Notice',
    );
    expect(scalar(articleSource, 'social_title')).toBe(
      'Find an Oklahoma Pooling Order After a Notice',
    );
    expect(scalar(articleSource, 'social_title')).toHaveLength(45);
    expect(articleSource).toContain('## Oklahoma pooling order common questions');
    expect(articleSource).not.toContain('## Common questions\n');
  });

  it('serves a versioned compressed in-body image under 100000 bytes with unchanged identity text', async () => {
    const src = nestedScalar(articleSource, 'inline_image', 'src');
    expect(src).toBe(
      '/assets/articles/inline/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/v2/oklahoma-pooling-order-search.webp',
    );
    expect(nestedScalar(articleSource, 'inline_image', 'rendered_text')).toBe(
      'Oklahoma pooling order search',
    );
    const filePath = `public${src}`;
    const bytes = readFileSync(filePath);
    const metadata = await sharp(bytes).metadata();
    expect(statSync(filePath).size).toBeLessThan(100000);
    expect(metadata.width).toBe(1200);
    expect(metadata.height).toBe(675);
    expect(metadata.format).toBe('webp');
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(
      nestedScalar(articleSource, 'inline_image', 'sha256'),
    );
  });

  it('keeps the titled hero bytes and uses visual alt text instead of generic production-note wording', () => {
    expect(nestedScalar(articleSource, 'hero_image', 'sha256')).toBe(
      '72d99e2ea57b11d8b08ec81270440692c5ac0347e66e4e52c534e68c0b0779d0',
    );
    const alts = [
      nestedScalar(articleSource, 'hero_image', 'alt'),
      nestedScalar(articleSource, 'hero_image', 'social_alt'),
      nestedScalar(articleSource, 'inline_image', 'alt'),
      'Two colored paper search paths lead from mineral layers to a folder beside the Oklahoma escrow title.',
      'Ohio records desk with county book and farmland window beside title text about mineral deeds and leases.',
      'Texas research desk with map, magnifying glass, and hill-country window beside title text about RI.',
      'Large title text about division orders beside an abstract payment-card illustration.',
    ];
    for (const alt of alts) {
      expect(alt.length).toBeGreaterThanOrEqual(20);
      expect(alt.length).toBeLessThanOrEqual(125);
      expect(alt).not.toMatch(/exact article title|MRX article cover|unlabeled|blank/i);
    }
    expect(articleSource).toContain('related_article_image_alts:');
  });

  it('uses page-scoped related card headings and a compressed RI-card derivative without replacing the RI article hero', async () => {
    expect(scalar(articleSource, 'article_guide_heading')).toBe('Ask Connor about records');
    expect(scalar(articleSource, 'related_articles_heading')).toBe(
      'Related mineral rights articles',
    );
    expect(articleSource).not.toContain("article_guide_heading: 'Ask Connor'");

    const derivative =
      'public/assets/articles/related/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp';
    const original =
      'public/assets/articles/hero/what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp';
    const derivativeBytes = readFileSync(derivative);
    const originalBytes = readFileSync(original);
    const derivativeMetadata = await sharp(derivativeBytes).metadata();
    const originalMetadata = await sharp(originalBytes).metadata();

    expect(articleSource).toContain(
      "what-does-ri-mean-on-a-texas-mineral-appraisal-record: '/assets/articles/related/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp'",
    );
    expect(statSync(derivative).size).toBeLessThan(100000);
    expect(createHash('sha256').update(derivativeBytes).digest('hex')).toBe(
      '914eff269f96235576861bde9f44ed9997c9f78fd1358ea233ef428fe6c12f9b',
    );
    expect(createHash('sha256').update(originalBytes).digest('hex')).toBe(
      '928a76ad6d2936723be68625c73ded7d90e061d48404d71cc4780df762856cb3',
    );
    expect(derivativeMetadata.width).toBe(1200);
    expect(derivativeMetadata.height).toBe(630);
    expect(derivativeMetadata.format).toBe('webp');
    expect(originalMetadata.width).toBe(1200);
    expect(originalMetadata.height).toBe(630);
  });
});
