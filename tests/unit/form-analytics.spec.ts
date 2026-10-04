import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
const state = vi.hoisted(() => ({ store: null as any }));
vi.mock('../../src/lib/platform/supabase', () => ({ getSupabaseServer: () => state.store }));
import { recordAcceptedFormEvent } from '../../src/lib/platform/form-analytics';
const id = 'd722e803-c462-4167-a6e3-e0a7cd2467ad';
const args = { source: 'free-guide' as const, submissionId: id, contactId: 'private-contact' };
let claims: Set<string>;
let send: ReturnType<typeof vi.fn>;
beforeEach(() => {
  vi.stubEnv('GA4_MEASUREMENT_ID', 'G-TEST');
  vi.stubEnv('GA4_API_SECRET', 'test-only');
  vi.stubEnv('MRX_DISABLE_GHL_PROVIDER_WRITES', '');
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  claims = new Set();
  state.store = {
    from: vi.fn(() => ({
      insert: vi.fn(async (row: any) => {
        const key = row.provider + ':' + row.external_event_id;
        if (claims.has(key)) return { error: { code: '23505' } };
        claims.add(key);
        return { error: null };
      }),
      update: vi.fn(() => ({ eq: () => ({ eq: async () => ({ error: null }) }) })),
    })),
  };
  send = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
  vi.stubGlobal('fetch', send);
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
describe('accepted form measurement', () => {
  it('counts a real accepted request once and excludes CRM identity from the payload', async () => {
    expect((await recordAcceptedFormEvent(args)).sent).toBe(true);
    expect((await recordAcceptedFormEvent(args)).reason).toBe('duplicate');
    expect(send).toHaveBeenCalledTimes(1);
    const body = JSON.parse(send.mock.calls[0][1].body);
    expect(body.events).toHaveLength(1);
    expect(body.events[0].name).toBe('generate_lead');
    expect(body.events[0].params.lead_type).toBe('free_guide_request');
    expect(JSON.stringify(body)).not.toMatch(/private-contact|email|phone|notes|user_id/);
  });
  it('wins only one durable claim for concurrent retries', async () => {
    const results = await Promise.all([
      recordAcceptedFormEvent(args),
      recordAcceptedFormEvent(args),
    ]);
    expect(results.filter((x) => x.sent)).toHaveLength(1);
    expect(send).toHaveBeenCalledTimes(1);
  });
  it.each(['', 'pending-stage08', 'pending-e2e-provider-disabled'])(
    'rejects unverified provider ID %s',
    async (contactId) => {
      expect((await recordAcceptedFormEvent({ ...args, contactId })).sent).toBe(false);
      expect(send).not.toHaveBeenCalled();
      expect(claims.size).toBe(0);
    },
  );
  it.each(['', 'invalid', 'alice@example.com'])(
    'ignores malformed receipt %s',
    async (submissionId) => {
      expect((await recordAcceptedFormEvent({ ...args, submissionId })).reason).toBe(
        'missing_receipt',
      );
      expect(send).not.toHaveBeenCalled();
    },
  );
  it('normalizes UUID case to avoid duplicate identities', async () => {
    await recordAcceptedFormEvent(args);
    expect(
      (await recordAcceptedFormEvent({ ...args, submissionId: id.toUpperCase() })).reason,
    ).toBe('duplicate');
    expect(send).toHaveBeenCalledTimes(1);
  });
  it('does not send without analytics or durable storage configuration', async () => {
    state.store = null;
    expect((await recordAcceptedFormEvent(args)).reason).toBe('not_configured');
    expect(send).not.toHaveBeenCalled();
  });
  it('does not claim when GA4 is not configured', async () => {
    vi.stubEnv('GA4_API_SECRET', '');
    expect((await recordAcceptedFormEvent(args)).reason).toBe('not_configured');
    expect(claims.size).toBe(0);
    expect(send).not.toHaveBeenCalled();
  });
  it('does not send when the durable receipt insert fails', async () => {
    state.store = { from: () => ({ insert: async () => ({ error: { code: 'DB_FAILURE' } }) }) };
    expect((await recordAcceptedFormEvent(args)).reason).toBe('receipt_unavailable');
    expect(send).not.toHaveBeenCalled();
  });
  it('suppresses all events under the provider-write test switch', async () => {
    vi.stubEnv('MRX_DISABLE_GHL_PROVIDER_WRITES', '1');
    expect((await recordAcceptedFormEvent(args)).sent).toBe(false);
    expect(send).not.toHaveBeenCalled();
  });
  it.each(['network', 'http'])(
    'keeps a failed %s send claimed to prevent uncertain duplicate delivery',
    async (mode) => {
      if (mode === 'network') send.mockRejectedValue(new Error('network failure'));
      else send.mockResolvedValue(new Response(null, { status: 503 }));
      expect((await recordAcceptedFormEvent(args)).reason).toBe('delivery_unconfirmed');
      expect((await recordAcceptedFormEvent(args)).reason).toBe('duplicate');
      expect(send).toHaveBeenCalledTimes(1);
    },
  );
  it('keeps review requests distinct from actual appointments', async () => {
    await recordAcceptedFormEvent({ ...args, source: 'book' });
    const body = JSON.parse(send.mock.calls[0][1].body);
    expect(body.events[0].params.lead_type).toBe('book_review_request');
    expect(JSON.stringify(body)).not.toContain('calendar_booked');
  });
});
describe('page-load and attempt regression guards', () => {
  it.each(['book', 'free-guide'])('%s thank-you does not emit successful outcomes', (page) => {
    const source = readFileSync(
      new URL(`../../src/pages/${page}/thank-you.astro`, import.meta.url),
      'utf8',
    );
    expect(source).not.toMatch(
      /event:\s*['"](?:generate_lead|calendar_booked|form_submit|mrx_.*_submit)['"]/,
    );
    expect(source).toContain('noindex={true}');
  });
  it('browser submit measures attempt only', () => {
    const source = readFileSync(
      new URL('../../src/components/organisms/FormSection.astro', import.meta.url),
      'utf8',
    );
    expect(source).toContain("event: 'form_submit_attempt'");
    expect(source).not.toMatch(/event:\s*['"](?:generate_lead|form_submit)['"]/);
  });
});
