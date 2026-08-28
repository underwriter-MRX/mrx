import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(import.meta.dirname, '..', '..');
const postsDir = join(root, 'src', 'content', 'posts');
const releaseBatch = JSON.parse(
  readFileSync(join(root, 'config', 'mrx1000-release-10-batch.json'), 'utf8'),
) as {
  articles: Array<{ slug: string; canonical_url: string }>;
};

function frontmatter(source: string): string {
  return source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
}

function scalar(block: string, key: string): string {
  return (
    block
      .match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]
      ?.trim()
      .replace(/^(['"])(.*)\1$/, '$2') ?? ''
  );
}

function nestedScalar(block: string, parent: string, key: string): string {
  const nested =
    block.match(new RegExp(`^${parent}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '';
  return scalar(nested.replace(/^[ \t]+/gm, ''), key);
}

describe('MRX1000 source-first SEO/AEO article factory gate', () => {
  it('keeps every admitted article answer-ready, attributable, and connected to three internal-link roles', () => {
    for (const article of releaseBatch.articles) {
      const source = readFileSync(join(postsDir, `${article.slug}.mdx`), 'utf8');
      const fm = frontmatter(source);
      const answerSummaryWords =
        scalar(fm, 'answer_summary').match(/\b[\p{L}\p{N}][\p{L}\p{N}’'-]*\b/gu)?.length ?? 0;

      expect(scalar(fm, 'seo_title').length, article.slug).toBeGreaterThanOrEqual(20);
      expect(scalar(fm, 'description').length, article.slug).toBeGreaterThanOrEqual(120);
      expect(answerSummaryWords, article.slug).toBeGreaterThanOrEqual(25);
      expect(answerSummaryWords, article.slug).toBeLessThanOrEqual(100);
      expect(scalar(fm, 'author').length, article.slug).toBeGreaterThan(0);
      expect(scalar(fm, 'reviewed_at').length, article.slug).toBeGreaterThan(0);
      expect(scalar(fm, 'reviewed_by').length, article.slug).toBeGreaterThan(0);
      expect(nestedScalar(fm, 'internal_links', 'hub'), article.slug).toMatch(/^\/.+\/$/);
      expect(nestedScalar(fm, 'internal_links', 'sibling'), article.slug).toMatch(/^\/.+\/$/);
      expect(nestedScalar(fm, 'internal_links', 'conversion'), article.slug).toBe('/book/');
      expect(article.canonical_url, article.slug).toBe(
        `https://mineralrightsxchange.com/blog/${article.slug}/`,
      );
    }
  });

  it('makes the source-first answer, citation, entity, and link checks part of every new common review build', () => {
    const builder = readFileSync(
      join(root, 'scripts', 'build-mrx1000-wave82-review-artifacts.mjs'),
      'utf8',
    );

    expect(builder).toContain('sourceFirstSeoAeoPass');
    expect(builder).toContain('answer_engine_controls');
    expect(builder).toContain('visible_body_citation_count');
    expect(builder).toContain('source_first_seo_aeo_entity_citation_and_internal_link_gate');
    expect(builder).toContain("evidence_boundary: 'source-backed; no transcript-derived Summit tactics asserted'");
    expect(builder).toContain('no_ranking_or_citation_guarantee: true');
  });

  it('keeps Article 237 answer-first and visibly cited without expanding its header-only boundary', () => {
    const slug = 'culberson-cad-2026-certified-roll-format-boundary-source-index';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [
      ...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm),
    ].map((match) => match[1]);

    expect(scalar(fm, 'answer_summary')).toContain(
      'preserve the four separately displayed 2026 certified-roll link relationships',
    );
    expect(sourceUrls).toHaveLength(5);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('does not download, open, preview, extract, sample, search');
    expect(body).toContain('They do not establish what the files contain or whether their records match.');
  });
});
