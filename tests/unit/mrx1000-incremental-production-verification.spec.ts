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
const appendOnlyIdentities = JSON.parse(
  read('config/mrx1000-append-only-identity-addendum.json').toString('utf8'),
);
const batch = JSON.parse(read('config/mrx1000-release-10-batch.json').toString('utf8'));

describe('MRX1000 post-release verification overlay', () => {
  it('preserves the hash-locked historical ledger and advances only the evidence-backed current count', () => {
    const sha = createHash('sha256').update(canonicalBytes).digest('hex');
    expect(addendum.historical_canonical_ledger_sha256).toBe(sha);
    expect(canonical.verification.release_10_post_publication_verified_count).toBe(320);
    expect(addendum.baseline_release_10_verified_count).toBe(320);
    expect(addendum.articles.length).toBeGreaterThanOrEqual(1);
    expect(addendum.incremental_final_recrawl_verified_count).toBe(addendum.articles.length);
    expect(addendum.current_final_recrawl_verified_count).toBe(
      addendum.baseline_release_10_verified_count + addendum.articles.length,
    );
    expect(new Set(addendum.articles.map((article: { slug: string }) => article.slug)).size).toBe(
      addendum.articles.length,
    );
    expect(
      new Set(
        addendum.articles.map((article: { program_row_id: string }) => article.program_row_id),
      ).size,
    ).toBe(addendum.articles.length);
    expect(
      new Set(addendum.articles.map((article: { canonical_url: string }) => article.canonical_url))
        .size,
    ).toBe(addendum.articles.length);
  });

  it('binds each incremental article to one admitted identity, published source, and completed audit inventory', () => {
    for (const evidence of addendum.articles) {
      const row = canonical.articles.find(
        (candidate: { canonical_slug: string }) => candidate.canonical_slug === evidence.slug,
      );
      const appendOnly = appendOnlyIdentities.entries.find(
        (candidate: { canonical_slug: string }) => candidate.canonical_slug === evidence.slug,
      );
      expect(Boolean(row) !== Boolean(appendOnly)).toBe(true);
      const identity = row ?? appendOnly;
      expect(identity.program_row_id).toBe(evidence.program_row_id);
      expect(identity.canonical_url).toBe(evidence.canonical_url);
      expect(identity.canonical_title).toBe(evidence.page_h1);
      if (row) {
        expect(row.source_system).toBe('astro_repo');
        expect(
          batch.articles.some((article: { slug: string }) => article.slug === evidence.slug),
        ).toBe(true);
      } else {
        expect(appendOnly.identity_state).toBe('admitted_quality_gated');
        expect(
          batch.articles.some((article: { slug: string }) => article.slug === evidence.slug),
        ).toBe(false);
      }
      const source = read(`src/content/posts/${evidence.slug}.mdx`).toString('utf8');
      expect(source).toContain(`title: '${evidence.page_h1}'`);
      expect(source).toContain('publication_status: published');
      expect(evidence.production_result).toBe('PASS');
      expect(evidence.deployment_id).toMatch(/^dpl_[A-Za-z0-9]+$/);
      expect(evidence.audit_id).toBe(138239);
      expect(evidence.crawl_state).toBe('completed');
      expect(evidence.postprocessing_status).toBe('completed');
      expect(evidence.is_terminal).toBe(true);
      expect(evidence.should_repoll).toBe(false);
      expect(Date.parse(evidence.audit_completed_at)).toBeGreaterThan(
        Date.parse(evidence.audit_started_at),
      );
      expect(Date.parse(addendum.verified_at_utc)).toBeGreaterThanOrEqual(
        Date.parse(evidence.audit_completed_at),
      );
      expect(evidence.page_explorer_row_id).toBeGreaterThan(0);
      expect(evidence.page_http_status).toBe(200);
      expect(evidence.page_indexable).toBe(true);
      expect(evidence.page_in_xml_sitemap).toBe(true);
      expect(evidence.page_linked).toBe(true);
    }
  });

  it('retains the exact Article 321 recovered-audit evidence when later rows are added', () => {
    const evidence = addendum.articles.find(
      (article: { program_row_id: string }) => article.program_row_id === 'MRX1000-0454',
    );
    expect(evidence).toBeTruthy();
    expect(evidence.slug).toBe(
      'how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement',
    );
    expect(evidence.deployment_id).toBe('dpl_FZKTtPhgkiLMKU2imS6inxEcp9fD');
    expect(evidence.audit_completed_at).toBe('2026-09-22T06:07:37.440115Z');
    expect(evidence.page_explorer_row_id).toBe(105967813);
  });
});
