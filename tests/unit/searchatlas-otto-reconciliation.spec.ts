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

function observation(records: PendingRecord[] = [exactRecord]) {
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
      pending: records.length,
      schema_pending: records.filter((record) => record.type === 'Organization').length,
    },
    pending_records: records,
  };
}

describe('Search Atlas OTTO reconciliation', () => {
  it('classifies only the exact unchanged suggestion as vendor-locked', () => {
    const result = reconcileSearchAtlasOtto(observation(), contract);
    expect(result.pass).toBe(true);
    expect(result.actionable_pending).toBe(0);
    expect(result.vendor_locked_undeployed).toBe(1);
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
    input.dashboard.pending = 2;
    const result = reconcileSearchAtlasOtto(input, contract);
    expect(result.pass).toBe(false);
    expect(result.failures.map((failure) => failure.code)).toContain(
      'pending_inventory_count_mismatch',
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
