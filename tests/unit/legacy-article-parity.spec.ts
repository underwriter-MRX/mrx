import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { imagePolicyViolations, parsePostFrontmatter } from './helpers/post-frontmatter';

const repoRoot = join(import.meta.dirname, '..', '..');
const postsDir = join(repoRoot, 'src', 'content', 'posts');
const publicDir = join(repoRoot, 'public');
const reviewId = 'mrx_compliance-legacy-summit-parity-20260915';
const reviewDate = '2026-09-15T12:13:28Z';

const legacyTitles = {
  'how-title-defects-change-mineral-rights-offer':
    'How Title Review Findings Can Change a Mineral Rights Offer',
  'how-to-compare-mineral-rights-buyers-in-texas': 'How to Compare Mineral Rights Buyers in Texas',
  'how-to-sell-mineral-rights-in-texas': 'How to Sell Mineral Rights in Texas',
  'texas-severance-tax-what-mineral-rights-owners-need-to-know':
    'Texas Severance Tax: What Owners Need to Know',
  'what-documents-do-you-need-to-sell-mineral-rights-in-texas':
    'Documents Needed to Sell Texas Mineral Rights',
  'what-is-a-clawback-clause-in-a-mineral-rights-sale':
    'What Is a Clawback Clause in a Mineral Rights Sale',
  'what-is-a-net-royalty-acre': 'What Is a Net Royalty Acre? NRI and Mineral Rights Value',
  'why-did-my-royalty-check-go-down': 'Why Did My Mineral Royalty Check Go Down?',
} as const;

const legacySlugs = Object.keys(legacyTitles).sort();

function frontmatter(source: string): string {
  return source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
}

function unquote(value: string): string {
  return value.trim().replace(/^(['"])(.*)\1$/, '$2');
}

function scalar(block: string, key: string): string {
  return unquote(block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1] ?? '');
}

function nestedBlock(block: string, key: string): string {
  return block.match(new RegExp(`^${key}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '';
}

function nestedScalar(block: string, parent: string, key: string): string {
  return unquote(
    nestedBlock(block, parent).match(new RegExp(`^[ \\t]+${key}:\\s*(.+)$`, 'm'))?.[1] ?? '',
  );
}

function topLevelListCount(block: string, key: string, itemPattern = /^  - /gm): number {
  return [...nestedBlock(block, key).matchAll(itemPattern)].length;
}

function hammingDistance(left: string, right: string): number {
  expect(left).toHaveLength(right.length);
  return [...left].filter((value, index) => value !== right[index]).length;
}

describe('legacy article Summit parity', () => {
  const allPosts = readdirSync(postsDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const source = readFileSync(join(postsDir, file), 'utf8');
      return { slug, source, parsed: parsePostFrontmatter(source, slug) };
    });
  const publicLegacy = allPosts
    .filter(
      ({ parsed }) =>
        parsed.publicationStatus === 'published' &&
        !parsed.draft &&
        !parsed.noindex &&
        parsed.contentProgram !== 'mrx1000',
    )
    .sort((left, right) => left.slug.localeCompare(right.slug));

  it('identifies exactly eight public articles outside MRX1000 without changing program count', () => {
    expect(publicLegacy.map(({ slug }) => slug)).toEqual(legacySlugs);
    expect(publicLegacy).toHaveLength(8);
  });

  it.each(publicLegacy)(
    '$slug has complete answer, source, review, graph, and conversion metadata',
    ({ slug, source, parsed }) => {
      const fm = frontmatter(source);
      expect(parsed.title).toBe(legacyTitles[slug as keyof typeof legacyTitles]);
      expect(scalar(fm, 'seo_title'), slug).not.toBe('');
      expect(scalar(fm, 'draft'), slug).toBe('false');
      expect(scalar(fm, 'publication_status'), slug).toBe('published');
      expect(scalar(fm, 'noindex'), slug).toBe('false');
      expect(scalar(fm, 'content_program'), slug).toBe('');
      expect(scalar(fm, 'content_cluster'), slug).not.toBe('');
      expect(scalar(fm, 'content_intent'), slug).not.toBe('');
      expect(scalar(fm, 'content_guide'), slug).not.toBe('');
      expect(scalar(fm, 'pillar'), slug).not.toBe('');
      expect(scalar(fm, 'cluster'), slug).not.toBe('');
      expect(scalar(fm, 'parent_page'), slug).toMatch(/^\/.+\/$/);
      expect(nestedScalar(fm, 'internal_links', 'hub'), slug).toMatch(/^\/.+\/$/);
      expect(nestedScalar(fm, 'internal_links', 'sibling'), slug).toMatch(/^\/.+\/$/);
      expect(nestedScalar(fm, 'internal_links', 'conversion'), slug).toBe('/book/');
      expect(scalar(fm, 'has_footer_disclaimer'), slug).toBe('true');
      expect(scalar(fm, 'reviewed_at'), slug).toBe(reviewDate);
      expect(scalar(fm, 'reviewed_by'), slug).toBe(reviewId);
      expect(scalar(fm, 'reviewers'), slug).toContain('MRX Editorial Team');
      expect(scalar(fm, 'reviewers'), slug).toContain('MRX Compliance');
      expect(scalar(fm, 'answer_summary').length, slug).toBeGreaterThanOrEqual(40);
      expect(topLevelListCount(fm, 'key_takeaways'), slug).toBeGreaterThanOrEqual(3);
      expect(topLevelListCount(fm, 'questions_answered'), slug).toBeGreaterThanOrEqual(3);
      expect(topLevelListCount(fm, 'faq', /^  - question:/gm), slug).toBe(5);
      expect(topLevelListCount(fm, 'sources'), slug).toBeGreaterThanOrEqual(2);
      expect(scalar(fm, 'legal_tax_sensitive'), slug).toMatch(/^(true|false)$/);
      expect(nestedScalar(fm, 'conversion_cta', 'label'), slug).not.toBe('');
      expect(nestedScalar(fm, 'conversion_cta', 'href'), slug).toBe('/book/');
      expect(nestedScalar(fm, 'conversion_cta', 'prompt').length, slug).toBeGreaterThanOrEqual(10);
      expect(source, slug).toMatch(
        /MRX may be (?:a|the) buyer|MRX may become the buyer|MRX buyer relationship/i,
      );
    },
  );

  it.each(publicLegacy)(
    '$slug preserves exact-title hero/share identity and a distinct evidence image',
    ({ slug, parsed, source }) => {
      const fm = frontmatter(source);
      expect(
        imagePolicyViolations(parsed, {
          requireDistinctSocial: false,
          requireCanonicalSocial: true,
          requireInline: true,
          requireTextMatchedFilenames: true,
        }),
        slug,
      ).toEqual([]);
      expect(parsed.hero.socialSrc, slug).toBe(parsed.hero.src);
      expect(parsed.inline.src, slug).not.toBe(parsed.hero.src);
      expect(existsSync(join(publicDir, parsed.hero.src.slice(1))), slug).toBe(true);
      expect(existsSync(join(publicDir, parsed.inline.src.slice(1))), slug).toBe(true);
      expect(nestedScalar(fm, 'inline_image', 'source'), slug).toContain(
        'AI-generated distinct evidence composition',
      );
      expect(
        hammingDistance(
          nestedScalar(fm, 'hero_image', 'perceptual_hash'),
          nestedScalar(fm, 'inline_image', 'perceptual_hash'),
        ),
        slug,
      ).toBeGreaterThan(64);
    },
  );
});
