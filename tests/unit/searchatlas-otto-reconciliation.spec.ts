import { describe, expect, it } from 'vitest';
import { reconcileSearchAtlasOtto } from '../../scripts/lib/searchatlas-otto-reconciliation.mjs';

const contract = {
  project: {
    id: 99913,
    uuid: 'e4bab8bb-717e-480c-8dea-1de1b8596eb7',
    audit_id: 138239,
  },
  exceptions: [
    {
      record_id: 182837670,
      type: 'Organization',
      status: 'SUGGESTED',
      is_sitewide: true,
      is_deployed: false,
      is_valid: true,
      page_id: null,
      page_url: null,
      classification: 'vendor_locked_undeployed_suggestion',
      evidence: ['support'],
    },
  ],
  category_exceptions: [
    {
      type: 'dynamic_indexing',
      status: 'SUGGESTED',
      is_deployed: false,
      reason: 'No Impressions',
      urls: [
        'https://mineralrightsxchange.com/contact/',
        'https://mineralrightsxchange.com/about/',
      ],
      classification: 'reviewed_undeployed_source_conflict',
      evidence: ['review'],
    },
  ],
};

type PendingRecord = {
  record_id: number;
  type: string;
  status: string;
  is_sitewide: boolean;
  is_deployed: boolean;
  is_valid: boolean;
  page_id: number | null;
  page_url: string | null;
};

const exactRecord: PendingRecord = {
  record_id: 182837670,
  type: 'Organization',
  status: 'SUGGESTED',
  is_sitewide: true,
  is_deployed: false,
  is_valid: true,
  page_id: null,
  page_url: null,
};

const exactCategory = {
  type: 'dynamic_indexing',
  status: 'SUGGESTED',
  is_deployed: false,
  reason: 'No Impressions',
  urls: ['https://mineralrightsxchange.com/contact/', 'https://mineralrightsxchange.com/about/'],
};

function observation(
  records: PendingRecord[] = [exactRecord],
  categories: Array<typeof exactCategory> = [exactCategory],
) {
  const categoryCount = categories.reduce((total, category) => total + category.urls.length, 0);
  const generatedCount = records.length + categoryCount;
  return {
    observed_at_utc: '2026-09-15T01:31:00.000Z',
    project: contract.project,
    audit: {
      status: 'completed',
      crawl_state: 'completed',
      postprocessing_status: 'completed',
      is_terminal: true,
    },
    dashboard: {
      total: generatedCount,
      approved_deployed: 0,
      pending: generatedCount,
      schema_pending: records.filter((record) => record.type === 'Organization').length,
    },
    preview: {
      prerequisites_met: true,
      pixel_status: 'cloudflare_worker',
      is_engaged: true,
      is_frozen: false,
      total_pending_with_recommendation: generatedCount,
      total_pending_without_recommendation: 0,
      breakdown: [
        {
          issue_type: 'domain_level_schema',
          pending_with_recommendation: records.filter((record) => record.type === 'Organization')
            .length,
          pending_without_recommendation: 0,
        },
        {
          issue_type: 'page_level_schema',
          pending_with_recommendation: 0,
          pending_without_recommendation: 0,
        },
        ...categories.map((category) => ({
          issue_type: category.type,
          pending_with_recommendation: category.urls.length,
          pending_without_recommendation: 0,
        })),
      ],
    },
    pending_records: records,
    pending_category_records: categories,
  };
}

describe('Search Atlas OTTO reconciliation', () => {
  it('classifies only the exact unchanged suggestion as vendor-locked', () => {
    const result = reconcileSearchAtlasOtto(observation(), contract);
    expect(result.pass).toBe(true);
    expect(result.actionable_pending).toBe(0);
    expect(result.vendor_locked_undeployed).toBe(1);
    expect(result.reviewed_undeployed_categories).toBe(1);
  });

  it('passes when the vendor eventually removes the locked suggestion', () => {
    const result = reconcileSearchAtlasOtto(observation([]), contract);
    expect(result.pass).toBe(true);
    expect(result.vendor_locked_undeployed).toBe(0);
  });

  it.each<[string, Partial<PendingRecord>]>([
    ['deployment', { is_deployed: true }],
    ['page assignment', { page_id: 42 }],
    ['status', { status: 'DEPLOYED' }],
    ['validity', { is_valid: false }],
  ])('fails closed on changed %s', (_name, change) => {
    const result = reconcileSearchAtlasOtto(observation([{ ...exactRecord, ...change }]), contract);
    expect(result.pass).toBe(false);
    expect(result.actionable_pending).toBe(1);
    expect(result.failures.map((failure) => failure.code)).toContain('actionable_pending_records');
  });

  it('fails on any additional pending recommendation', () => {
    const additional = {
      ...exactRecord,
      record_id: 99,
      type: 'MetaTitle',
      is_sitewide: false,
    };
    const result = reconcileSearchAtlasOtto(observation([exactRecord, additional]), contract);
    expect(result.pass).toBe(false);
    expect(result.actionable_pending).toBe(1);
  });

  it('fails when dashboard and record inventory counts disagree', () => {
    const input = observation();
    input.dashboard.pending += 1;
    const result = reconcileSearchAtlasOtto(input, contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain(
      'dashboard_arithmetic_mismatch',
    );
  });

  it.each([
    ['changed URL', { urls: ['https://mineralrightsxchange.com/unreviewed/'] }],
    ['deployment', { is_deployed: true }],
    ['status', { status: 'DEPLOYED' }],
  ])('fails closed on Dynamic Indexing %s', (_name, change) => {
    const category = { ...exactCategory, ...change } as typeof exactCategory;
    const result = reconcileSearchAtlasOtto(observation([exactRecord], [category]), contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain(
      'actionable_pending_categories',
    );
  });

  it('fails when the Dynamic Indexing preview count changes', () => {
    const input = observation();
    input.preview.breakdown.find(
      (row) => row.issue_type === 'dynamic_indexing',
    )!.pending_with_recommendation = 1;
    const result = reconcileSearchAtlasOtto(input, contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain(
      'category_preview_count_mismatch',
    );
  });

  it('fails on an extra pending category', () => {
    const extra = {
      ...exactCategory,
      type: 'unknown_indexing',
      urls: ['https://mineralrightsxchange.com/contact/'],
    };
    const result = reconcileSearchAtlasOtto(
      observation([exactRecord], [exactCategory, extra]),
      contract,
    );
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain(
      'actionable_pending_categories',
    );
  });

  it('fails when preview is frozen or its breakdown does not reconcile', () => {
    const input = observation();
    input.preview.is_frozen = true;
    input.preview.total_pending_with_recommendation += 1;
    const result = reconcileSearchAtlasOtto(input, contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toEqual(
      expect.arrayContaining([
        'preview_prerequisites_mismatch',
        'preview_generated_inventory_count_mismatch',
      ]),
    );
  });

  it('fails when the project or audit identity changes', () => {
    const input = observation();
    input.project = { ...input.project, audit_id: 1 };
    const result = reconcileSearchAtlasOtto(input, contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain('project_audit_id_mismatch');
  });
});
