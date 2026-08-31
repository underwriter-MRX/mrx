import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(import.meta.dirname, '..', '..');
const postsDir = join(root, 'src', 'content', 'posts');
const currentFactoryDirective = readFileSync(
  join(
    root,
    'docs',
    'governance',
    'mrx1000-current-seo-aeo-article-factory-directive-2026-08-29.md',
  ),
  'utf8',
);
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
  const nested = block.match(new RegExp(`^${parent}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '';
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

      const inlineImageSrc = nestedScalar(fm, 'inline_image', 'src');
      expect(inlineImageSrc, article.slug).toMatch(/^\/assets\/articles\/inline\/.+\.webp$/);
      expect(source.split(inlineImageSrc).length - 1, article.slug).toBe(1);
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
    expect(builder).toContain(
      "evidence_boundary: 'source-backed; no transcript-derived Summit tactics asserted'",
    );
    expect(builder).toContain('no_ranking_or_citation_guarantee: true');
  });

  it('keeps the current AI Atom Brain and Search Atlas release controls in the durable factory prompt', () => {
    expect(currentFactoryDirective).toContain('MRX1000-FACTORY-SEO-AEO-2026-08-29');
    expect(currentFactoryDirective).toContain(
      'resolve the next MRX1000 row into one unique, evidence-backed owner job',
    );
    expect(currentFactoryDirective).toContain('`VERIFIED-OBSERVATION`');
    expect(currentFactoryDirective).toContain('`UNRESOLVED-CONFLICT`');
    expect(currentFactoryDirective).toContain('publisher provenance and observed wording');
    expect(currentFactoryDirective).toContain('Never silently normalize, reconcile, substitute');
    expect(currentFactoryDirective).toContain('physical page locator');
    expect(currentFactoryDirective).toContain('render SHA-256');
    expect(currentFactoryDirective).toContain('claim-adjacent primary citations');
    expect(currentFactoryDirective).toContain('exact visible/schema entity parity');
    expect(currentFactoryDirective).toContain('every active production hostname and target');
    expect(currentFactoryDirective).toContain('image bytes/MIME/dimensions/SHA parity');
    expect(currentFactoryDirective).toContain('responsive extension-backed Chrome rendering');
    expect(currentFactoryDirective).toContain('Render the canonical in-body image exactly once');
    expect(currentFactoryDirective).toContain('lazy-load gaps');
    expect(currentFactoryDirective).toContain('completed and post-processed Search Atlas recrawl');
    expect(currentFactoryDirective).toContain('zero pending recommendations');
    expect(currentFactoryDirective).toContain('raw technical-audit observations separately');
    expect(currentFactoryDirective).toContain('exact prompt, product and model, mode');
    expect(currentFactoryDirective).toContain(
      'creation, review, admission, commit, deployment, live verification, indexing, ranking, citation, and conversion as separate states',
    );
    expect(currentFactoryDirective).toContain(
      'does not promise ranking, indexing, retrieval, competitor displacement, or citation',
    );
    expect(currentFactoryDirective).toContain(
      'The July 2026 pilot archive is not transcript-grade tactical evidence',
    );
    expect(currentFactoryDirective).toContain(
      '3e8b3de1e7208d4d9e4638878804f125e09c1ede53510d4a463c5f8cf8d3cefd',
    );
    expect(currentFactoryDirective).toContain('information gain outranks page volume');
    expect(currentFactoryDirective).toContain('a retry cannot create a duplicate route');
    expect(currentFactoryDirective).toContain(
      'prompt-universe additions or removals as denominator breaks',
    );
  });

  it('keeps long citation identifiers from creating mobile horizontal overflow', () => {
    const proseCss = readFileSync(join(root, 'src', 'styles', 'prose.css'), 'utf8');
    const articleLayout = readFileSync(join(root, 'src', 'layouts', 'ArticleLayout.astro'), 'utf8');

    expect(proseCss).toMatch(
      /\.prose code \{[\s\S]*?overflow-wrap: anywhere;[\s\S]*?word-break: break-word;[\s\S]*?white-space: normal;/,
    );
    expect(proseCss).toMatch(
      /\.prose pre code \{[\s\S]*?overflow-wrap: normal;[\s\S]*?word-break: normal;[\s\S]*?white-space: inherit;/,
    );
    expect(articleLayout).toMatch(/\.article-takeaways li \{[\s\S]*?overflow-wrap: anywhere;/);
  });

  it('keeps Article 237 answer-first and visibly cited without expanding its header-only boundary', () => {
    const slug = 'culberson-cad-2026-certified-roll-format-boundary-source-index';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'answer_summary')).toContain(
      'preserve the four separately displayed 2026 certified-roll link relationships',
    );
    expect(sourceUrls).toHaveLength(5);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('does not download, open, preview, extract, sample, search');
    expect(body).toContain(
      'They do not establish what the files contain or whether their records match.',
    );
  });

  it('keeps Article 284 on its exact mixed-format archive-control and privacy boundary', () => {
    const slug = 'midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Midland CAD certified mineral roll file layout',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(3);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('open **`2. MINERAL FILE LAYOUT.pdf` first**');
    expect(body).toContain('2,400,158,157 uncompressed bytes');
    expect(body).toContain(
      'No row from any of these three members was opened, extracted, sampled, searched, copied, or reproduced',
    );
    expect(body).toContain('C284-09');
    expect(body).toContain('UNRESOLVED-CONFLICT');
    expect(body).not.toContain(
      'Midland County, Texas Mineral Rights Value: Risk Checklist In 2026',
    );
  });

  it('keeps Article 285 on its exact RFP mineral-scope and unresolved date-control boundary', () => {
    const slug = 'midland-cad-2026-appraisal-services-rfp-mineral-scope-date-control-crosswalk';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Midland CAD 2026 Appraisal Services RFP: Mineral Scope and Date-Control Crosswalk',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Midland CAD mineral appraisal RFP 2026',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('do not rely on one proposal date from this PDF without verification');
    expect(body).toContain('`Category G(Mineral): Approximately 424,996 accounts`');
    expect(body).toContain('May 4, 2026 was Monday');
    expect(body).toContain('C285-07');
    expect(body).toContain('UNRESOLVED-CONFLICT');
    expect(body).not.toContain('Midland County, Texas Mineral Rights Value: Timeline In 2026');
  });

  it('keeps Article 286 on its exact official-plan calendar-to-snapshot boundary', () => {
    const slug =
      'midland-cad-2025-2026-mineral-work-calendar-january-1-snapshot-july-certification';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Midland CAD 2025-2026 Mineral Work Calendar: January 1 Snapshot to July Certification',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Midland CAD mineral work calendar',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('the plan separates the valuation date from the work calendar');
    expect(body).toContain('Mineral Property Valuation: January-May');
    expect(body).toContain('certification of accounts before July 25');
    expect(body).toContain('C286-10');
    expect(body).toContain('SOURCE-STATEMENT');
    expect(body).not.toContain(
      'Midland County, Texas Mineral Rights Value: Valuation Factors Without Obligation',
    );
  });

  it('keeps Article 287 on its exact Pecos Category G ISD estimate boundary', () => {
    const slug = 'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Pecos CAD 2025-2026 Reappraisal Plan: Category G Parcel Counts by ISD',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Pecos CAD Category G parcel counts',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('physical page 37 prints two separate Category G estimates');
    expect(body).toContain('Estimated Parcel Counts by ISD');
    expect(body).toContain('20,005');
    expect(body).toContain('78,200');
    expect(body).toContain('Do not add the figures');
    expect(body).toContain('C287-10');
    expect(body).toContain('SOURCE-BOUNDARY');
    expect(body).not.toContain(
      'Pecos County, Texas Mineral Rights Value: Family Decision Guide Step By Step',
    );
  });

  it('keeps Article 288 on its exact Pecos RRCID, permit, and January 1 process boundary', () => {
    const slug = 'pecos-cad-oil-and-gas-property-discovery-rrcid-permit-january-1';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Pecos CAD Oil and Gas Property Discovery: RRCID, Permit, and January 1',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Pecos CAD oil and gas property discovery',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('the Pecos plan describes a sequence, not a current-property result');
    expect(body).toContain('The three January 1 conditions are separate');
    expect(body).toContain('Do not silently replace RRCID');
    expect(body).toContain('going back up to five years');
    expect(body).toContain('C288-10');
    expect(body).toContain('UNRESOLVED-CONFLICT');
    expect(body).not.toContain(
      'Pecos County, Texas Mineral Rights Value: Guide For Mineral Owners',
    );
  });

  it('keeps Article 289 on its exact Pecos review-and-testing evidence boundary', () => {
    const slug = 'pecos-cad-oil-and-gas-review-infrequent-sales-and-multi-site-limits';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Pecos CAD Oil and Gas Review: Infrequent Sales and Multi-Site Limits',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Pecos CAD oil and gas appraisal review',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(6);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('the Pecos plan describes several review signals');
    expect(body).toContain('sales are **very infrequent**');
    expect(body).toContain('A bundled transaction is not a one-property price');
    expect(body).toContain('“Subject to review” is not converted into “reviewed and approved.”');
    expect(body).toContain('C289-10');
    expect(body).toContain('SOURCE-LIMITATION');
    expect(body).not.toContain(
      'Pecos County, Texas Mineral Rights Value: Market Update For Mineral Owners',
    );
  });

  it('keeps Article 290 on its exact Pecos industrial-appraisal limitations boundary', () => {
    const slug = 'pecos-cad-industrial-appraisal-limits-title-inspection-and-sketches';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Pecos CAD Industrial Appraisal Limits: Title, Inspection, and Sketches',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Pecos CAD industrial appraisal assumptions',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(nestedScalar(fm, 'hero_image', 'src'));
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('not to treat the appraisal record as proof of title');
    expect(body).toContain('“Title is assumed” is not a title finding');
    expect(body).toContain('A sketch can orient a reader without establishing a boundary');
    expect(body).toContain('Hidden conditions remain outside ordinary observation');
    expect(body).toContain('C290-10');
    expect(body).toContain('SOURCE-ASSUMPTION');
    expect(body).not.toContain('Pecos County, Texas Mineral Rights Value: Risk Checklist In 2026');
  });

  it('keeps Article 291 on its exact Pecos pipeline-model evidence boundary', () => {
    const slug = 'pecos-cad-pipeline-appraisal-models-rcnld-unit-value-and-land';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Pecos CAD Pipeline Appraisal Models: RCNLD, Unit Value, and Land',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Pecos CAD pipeline appraisal models',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(
      nestedScalar(fm, 'hero_image', 'src'),
    );
    expect(sourceUrls).toHaveLength(4);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('every pipeline receives a replacement-cost-new-less-depreciation');
    expect(body).toContain('Unit value is conditional and system-wide');
    expect(body).toContain('Reconciliation comes before component allocation');
    expect(body).toContain('Land is separated under stated plan rules');
    expect(body).toContain('C291-10');
    expect(body).toContain('CONDITIONAL-METHOD');
    expect(body).not.toContain('Pecos County, Texas Mineral Rights Value: Timeline In 2026');
  });

  it('keeps Article 292 on its exact Reeves Category G worksheet evidence boundary', () => {
    const slug = 'reeves-county-2024-category-g-worksheets-two-isds-strata-and-ratios';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Reeves County 2024 Category G Worksheets: Two ISDs, Strata, and Ratios',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Reeves County Category G worksheets',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(
      nestedScalar(fm, 'hero_image', 'src'),
    );
    expect(sourceUrls).toHaveLength(6);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('two separate Category G worksheets');
    expect(body).toContain('Resolve the 2025-versus-2024 date question first');
    expect(body).toContain('Both pages display the same three structural layers');
    expect(body).toContain('A ratio label is not a private value conclusion');
    expect(body).toContain('C292-10');
    expect(body).toContain('LINK-INVENTORY');
    expect(body).not.toContain(
      'Reeves County, Texas Mineral Rights Value: Family Decision Guide Step By Step',
    );
  });

  it('keeps Article 293 on its exact Reeves MAP review evidence boundary', () => {
    const slug = 'reeves-cad-2025-map-review-four-passes-and-two-recommendations';
    const source = readFileSync(join(postsDir, `${slug}.mdx`), 'utf8');
    const fm = frontmatter(source);
    const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const sourceUrls = [...fm.matchAll(/^\s+href:\s*['"](https:\/\/[^'"]+)['"]$/gm)].map(
      (match) => match[1],
    );

    expect(scalar(fm, 'title')).toBe(
      'Reeves CAD 2025 MAP Review: Four Passes and Two Recommendations',
    );
    expect(nestedScalar(fm, 'hero_image', 'src')).toBe(
      nestedScalar(fm, 'hero_image', 'social_src'),
    );
    expect(nestedScalar(fm, 'hero_image', 'rendered_text')).toBe(scalar(fm, 'title'));
    expect(nestedScalar(fm, 'inline_image', 'rendered_text')).toBe(
      'Reeves CAD 2025 MAP review',
    );
    expect(nestedScalar(fm, 'inline_image', 'src')).not.toBe(
      nestedScalar(fm, 'hero_image', 'src'),
    );
    expect(sourceUrls).toHaveLength(5);
    expect(sourceUrls.every((url) => body.includes(url))).toBe(true);
    expect(body).toContain('PASS on all four mandatory requirements');
    expect(body).toContain('Keep the four area scores attached to their labels');
    expect(body).toContain('Read question 29 without widening it');
    expect(body).toContain('Read question 74 without turning it into a property conclusion');
    expect(body).toContain('C293-10');
    expect(body).toContain('DOCUMENT-CONTENT');
    expect(body).not.toContain(
      'Reeves County, Texas Mineral Rights Value: Guide For Mineral Owners',
    );
  });
});
