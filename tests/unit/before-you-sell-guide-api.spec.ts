import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  BEFORE_YOU_SELL_CONSENT_VERSION,
  BEFORE_YOU_SELL_GUIDE_ID,
} from '../../src/lib/before-you-sell-guide';

const mocks = vi.hoisted(() => ({
  rpc: vi.fn(),
  from: vi.fn(),
  deliver: vi.fn(),
}));

vi.mock('../../src/lib/platform/supabase', () => ({
  getSupabaseServer: () => ({ rpc: mocks.rpc, from: mocks.from }),
}));
vi.mock('../../src/lib/platform/identity', () => ({
  normalizePhone: (value: string) =>
    value.replace(/\D/g, '').length >= 10 ? '+15125550100' : null,
  resolveOwnerSession: async () => ({
    profileId: '11111111-1111-4111-a111-111111111111',
    conversationId: '22222222-2222-4222-a222-222222222222',
    deviceHash: 'device',
    userId: null,
    email: null,
    emailVerified: false,
    persisted: true,
  }),
  sha256: async (value: string) => `hash:${value}`,
}));
vi.mock('../../src/lib/guide-delivery', () => ({
  deliverBeforeYouSellGuide: mocks.deliver,
}));

import { POST } from '../../src/pages/api/guides/before-you-sell-mineral-rights';

function chain(result: { data?: unknown; error?: unknown }) {
  const value: Record<string, unknown> = {};
  for (const method of ['select', 'eq', 'order', 'update']) value[method] = vi.fn(() => value);
  value.then = (resolve: (result: unknown) => unknown) => Promise.resolve(resolve(result));
  return value;
}

function configureFrom(options: { failSharedOnce?: boolean } = {}) {
  let sharedFailures = options.failSharedOnce ? 1 : 0;
  mocks.from.mockImplementation((table: string) => {
    if (table === 'consent_receipts') {
      const query = chain({ data: [], error: null });
      query.insert = vi.fn(() => {
        if (sharedFailures-- > 0)
          return Promise.resolve({ error: { code: 'injected_shared_failure' } });
        return Promise.resolve({ error: null });
      });
      return query;
    }
    const query = chain({ error: null });
    query.insert = vi.fn(() => Promise.resolve({ error: null }));
    return query;
  });
}

function request(
  options: {
    idempotency?: string;
    sourceUrl?: string;
    retry?: boolean;
    sms?: boolean;
  } = {},
) {
  const data = new FormData();
  data.set('firstName', 'Ada');
  data.set('lastName', 'Owner');
  data.set('email', 'ada@example.com');
  data.set('transactional_email_consent', 'on');
  data.set('guide_id', BEFORE_YOU_SELL_GUIDE_ID);
  data.set('consent_version', BEFORE_YOU_SELL_CONSENT_VERSION);
  data.set('idempotency_key', options.idempotency || '62cf4994-6f88-4305-ac0c-7edbc2f71566');
  data.set(
    'source_url',
    options.sourceUrl || 'https://mineralrightsxchange.com/before-you-sell-mineral-rights/',
  );
  data.set('source_surface', 'landing');
  if (options.sms) {
    data.set('phone', '+1 512 555 0100');
    data.set('sms_delivery_consent', 'on');
  }
  return {
    request: new Request(
      'https://mineralrightsxchange.com/api/guides/before-you-sell-mineral-rights',
      {
        method: 'POST',
        headers: {
          origin: 'https://mineralrightsxchange.com',
          ...(options.retry ? { 'x-mrx-retry-failed': '1' } : {}),
        },
        body: data,
      },
    ),
    locals: {},
  } as never;
}

const acceptedDelivery = {
  configured: true,
  contactId: 'contact-1',
  accepted: ['email'],
  failed: [],
  unknown: [],
  suppressed: [],
  externalIds: { email: 'message-1' },
  providerSuppression: { email: false, sms: false, call: false },
};

describe('before-you-sell guide API runtime failure boundaries', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    configureFrom();
    mocks.deliver.mockResolvedValue(acceptedDelivery);
  });

  it('resumes the original not-attempted request after a shared-consent insert failure', async () => {
    configureFrom({ failSharedOnce: true });
    mocks.rpc.mockResolvedValueOnce({
      data: {
        created: true,
        id: 'request-1',
        status: 'accepted',
        provider_status: { state: 'not_attempted' },
        idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
        shared_consents_recorded: false,
      },
      error: null,
    });
    const first = await POST(request());
    expect(first.status).toBe(500);
    expect(mocks.deliver).not.toHaveBeenCalled();

    configureFrom();
    mocks.rpc
      .mockResolvedValueOnce({
        data: {
          created: false,
          id: 'request-1',
          status: 'accepted',
          provider_status: { state: 'not_attempted' },
          idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
          shared_consents_recorded: false,
        },
        error: null,
      })
      .mockResolvedValueOnce({
        data: {
          claimed: true,
          claimed_channels: ['email'],
          provider_status: { state: 'in_flight', unknownChannels: ['email'] },
        },
        error: null,
      })
      .mockResolvedValueOnce({ data: true, error: null });
    const second = await POST(request());
    expect(second.status).toBe(200);
    expect(mocks.deliver).toHaveBeenCalledTimes(1);
    expect(mocks.deliver.mock.calls[0][1].sendChannels).toEqual(['email']);
  });

  it('allows only one claimed retry and recomputes channels from the authoritative claim', async () => {
    const duplicate = {
      created: false,
      id: 'request-1',
      status: 'provider_partial',
      provider_status: {
        state: 'provider_partial',
        acceptedChannels: ['email'],
        failedChannels: ['sms'],
      },
      idempotency_key: 'original-token',
      shared_consents_recorded: true,
    };
    mocks.rpc
      .mockResolvedValueOnce({ data: duplicate, error: null })
      .mockResolvedValueOnce({
        data: {
          claimed: true,
          claimed_channels: ['sms'],
          provider_status: {
            state: 'provider_partial',
            acceptedChannels: ['email'],
            failedChannels: [],
            unknownChannels: ['sms'],
          },
        },
        error: null,
      })
      .mockResolvedValueOnce({ data: true, error: null })
      .mockResolvedValueOnce({ data: duplicate, error: null })
      .mockResolvedValueOnce({ data: { claimed: false }, error: null });
    mocks.deliver.mockResolvedValue({
      ...acceptedDelivery,
      accepted: ['sms'],
      externalIds: { sms: 'message-2' },
    });

    const first = await POST(
      request({
        idempotency: '72cf4994-6f88-4305-ac0c-7edbc2f71566',
        retry: true,
        sms: true,
      }),
    );
    const second = await POST(
      request({
        idempotency: '82cf4994-6f88-4305-ac0c-7edbc2f71566',
        retry: true,
        sms: true,
      }),
    );
    expect(first.status).toBe(200);
    expect(second.status).toBe(200);
    expect(mocks.deliver).toHaveBeenCalledTimes(1);
    expect(mocks.deliver.mock.calls[0][1].sendChannels).toEqual(['sms']);
  });

  it('does not send from a duplicate initial request when another caller owns the claim', async () => {
    mocks.rpc
      .mockResolvedValueOnce({
        data: {
          created: false,
          id: 'request-1',
          status: 'accepted',
          provider_status: { state: 'not_attempted' },
          idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
          shared_consents_recorded: true,
        },
        error: null,
      })
      .mockResolvedValueOnce({
        data: {
          claimed: false,
          provider_status: { state: 'in_flight', unknownChannels: ['email'] },
        },
        error: null,
      });

    const response = await POST(request());
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.deliveryInProgressOrReconciliationRequired).toBe(true);
    expect(mocks.deliver).not.toHaveBeenCalled();
  });

  it('preserves an allowed page source and rejects an off-site attribution URL', async () => {
    let capturedRows: Array<Record<string, unknown>> = [];
    mocks.rpc.mockImplementation(async (name: string, args: Record<string, unknown>) => {
      if (name === 'create_guide_request_with_receipts') {
        capturedRows = args.receipt_rows as Array<Record<string, unknown>>;
        return {
          data: {
            created: true,
            id: 'request-1',
            status: 'accepted',
            provider_status: { state: 'not_attempted' },
            idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
            shared_consents_recorded: false,
          },
          error: null,
        };
      }
      if (name === 'claim_guide_delivery_attempt')
        return {
          data: {
            claimed: true,
            claimed_channels: ['email'],
            provider_status: { state: 'in_flight', unknownChannels: ['email'] },
          },
          error: null,
        };
      return { data: true, error: null };
    });
    await POST(request());
    expect(capturedRows[0].source_url).toBe(
      'https://mineralrightsxchange.com/before-you-sell-mineral-rights/',
    );

    await POST(
      request({
        idempotency: '92cf4994-6f88-4305-ac0c-7edbc2f71566',
        sourceUrl: 'https://attacker.example/collect?email=secret',
      }),
    );
    expect(capturedRows[0].source_url).toBe(
      'https://mineralrightsxchange.com/api/guides/before-you-sell-mineral-rights',
    );
  });
});
