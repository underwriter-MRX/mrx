import { describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (relative: string) => readFileSync(path.join(root, relative));
const canonicalBytes = read('config/mrx-1000-canonical-content-ledger.json');
const canonical = JSON.parse(canonicalBytes.toString('utf8'));
const addendum = JSON.parse(
  read('config/mrx1000-incremental-production-verification.json').toString('utf8'),
);
const batch = JSON.parse(read('config/mrx1000-release-10-batch.json').toString('utf8'));

describe('MRX1000 post-release verification overlay', () => {
  it('preserves the hash-locked historical ledger and advances only the evidence-backed current count', () => {
    const sha = createHash('sha256').update(canonicalBytes).digest('hex');
    expect(addendum.historical_canonical_ledger_sha256).toBe(sha);
    expect(canonical.verification.release_10_post_publication_verified_count).toBe(320);
    expect(addendum.baseline_release_10_verified_count).toBe(320);
    expect(addendum.incremental_final_recrawl_verified_count).toBe(addendum.articles.length);
    expect(addendum.current_final_recrawl_verified_count).toBe(321);
    expect(addendum.current_final_recrawl_verified_count).toBe(
      addendum.baseline_release_10_verified_count + addendum.articles.length,
    );
  });

  it('binds Article 321 to its published source, program row, and completed audit inventory', () => {
    expect(addendum.articles).toHaveLength(1);
    const evidence = addendum.articles[0];
    const row = canonical.articles.find(
      (candidate: { canonical_slug: string }) => candidate.canonical_slug === evidence.slug,
    );
    expect(row).toBeTruthy();
    expect(row.program_row_id).toBe(evidence.program_row_id);
    expect(row.canonical_url).toBe(evidence.canonical_url);
    expect(row.canonical_title).toBe(evidence.page_h1);
    expect(row.source_system).toBe('astro_repo');
    expect(batch.articles.some((article: { slug: string }) => article.slug === evidence.slug)).toBe(true);
    const source = read(`src/content/posts/${evidence.slug}.mdx`).toString('utf8');
    expect(source).toContain(`title: '${evidence.page_h1}'`);
    expect(source).toContain('publication_status: published');
    expect(evidence.production_result).toBe('PASS');
    expect(evidence.deployment_id).toBe('dpl_FZKTtPhgkiLMKU2imS6inxEcp9fD');
    expect(evidence.audit_id).toBe(138239);
    expect(evidence.crawl_state).toBe('completed');
    expect(evidence.postprocessing_status).toBe('completed');
    expect(evidence.is_terminal).toBe(true);
    expect(evidence.should_repoll).toBe(false);
    expect(Date.parse(evidence.audit_completed_at)).toBeGreaterThan(Date.parse(evidence.audit_started_at));
    expect(addendum.verified_at_utc).toBe(evidence.audit_completed_at);
    expect(evidence.page_explorer_row_id).toBe(105967813);
    expect(evidence.page_http_status).toBe(200);
    expect(evidence.page_indexable).toBe(true);
    expect(evidence.page_in_xml_sitemap).toBe(true);
    expect(evidence.page_linked).toBe(true);
  });
});
