import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { deliverBeforeYouSellGuide } from '../../src/lib/guide-delivery';
import {
  BEFORE_YOU_SELL_CONSENT_VERSION,
  BEFORE_YOU_SELL_GUIDE_ID,
  type BeforeYouSellGuideRequest,
} from '../../src/lib/before-you-sell-guide';

const request: BeforeYouSellGuideRequest = {
  firstName: 'Ada',
  lastName: 'Owner',
  email: 'ada@example.com',
  phone: '+15125550100',
  transactional_email_consent: 'on',
  sms_delivery_consent: 'on',
  guide_id: BEFORE_YOU_SELL_GUIDE_ID,
  consent_version: BEFORE_YOU_SELL_CONSENT_VERSION,
  idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
  source_url: 'https://mineralrightsxchange.com/before-you-sell-mineral-rights/',
  source_surface: 'landing',
};

function response(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const noDuplicate = () => response({ contact: null });

describe('dedicated guide delivery', () => {
  beforeEach(() => {
    process.env.GHL_PRIVATE_INTEGRATION_TOKEN = 'test-token';
    process.env.GHL_LOCATION_ID = 'test-location';
    process.env.GHL_EMAIL_FROM = 'verified-sender@example.com';
    delete process.env.MRX_DISABLE_GHL_PROVIDER_WRITES;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    for (const name of [
      'GHL_PRIVATE_INTEGRATION_TOKEN',
      'GHL_LOCATION_ID',
      'GHL_EMAIL_FROM',
      'MRX_DISABLE_GHL_PROVIDER_WRITES',
    ])
      delete process.env[name];
  });

  it('honors provider Email DND and still evaluates requested SMS separately', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: request.email,
            phone: request.phone,
            dndSettings: { Email: { status: 'active' }, SMS: { status: 'inactive' } },
          },
        }),
      )
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: request.email,
            phone: request.phone,
            dndSettings: { Email: { status: 'active' }, SMS: { status: 'inactive' } },
          },
        }),
      )
      .mockResolvedValueOnce(response({ messageId: 'sms-accepted' }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(request, {
      emailSuppressed: false,
      smsSuppressed: false,
      callSuppressed: false,
    });

    expect(result.suppressed).toEqual(['email']);
    expect(result.accepted).toEqual(['sms']);
    expect(result.providerSuppression.email).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(5);
  });

  it('preserves accepted email evidence and marks a later SMS timeout unknown', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(response({ messageId: 'email-accepted' }))
      .mockRejectedValueOnce(new Error('sms network failure'));
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(request, {
      emailSuppressed: false,
      smsSuppressed: false,
      callSuppressed: false,
    });

    expect(result.accepted).toEqual(['email']);
    expect(result.externalIds.email).toBe('email-accepted');
    expect(result.failed).toEqual([]);
    expect(result.unknown).toEqual(['sms']);
  });

  it('treats a provider HTTP 500 after send attempt as unknown, not retryable failure', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(new Response('gateway failure', { status: 500 }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(
      { ...request, sms_delivery_consent: undefined, phone: '' },
      { emailSuppressed: false, smsSuppressed: false, callSuppressed: false },
    );

    expect(result.failed).toEqual([]);
    expect(result.unknown).toEqual(['email']);
  });

  it('does not write false optional-consent mirrors or generic ownership-guide tags', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(response({ messageId: 'email-accepted' }));
    vi.stubGlobal('fetch', fetchMock);

    await deliverBeforeYouSellGuide(
      {
        ...request,
        sms_delivery_consent: undefined,
        phone: '',
        marketing_email_consent: undefined,
        human_call_consent: undefined,
      },
      { emailSuppressed: false, smsSuppressed: false, callSuppressed: false },
    );

    const upsert = JSON.parse((fetchMock.mock.calls[1][1] as RequestInit).body as string);
    expect(upsert.tags).not.toContain('mrx-guide-requested');
    expect(upsert.tags).toContain('mrx-guide-before-you-sell-mineral-rights');
    expect(upsert.customFields).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: 'contact.mrx_free_guide_sms_consent' }),
        expect.objectContaining({ key: 'contact.mrx_ai_voice_permission' }),
        expect.objectContaining({ key: 'contact.mrx_call_permission' }),
      ]),
    );
    const email = JSON.parse((fetchMock.mock.calls[3][1] as RequestInit).body as string);
    expect(email.emailFrom).toBe('verified-sender@example.com');
  });

  it('fails before upsert when duplicate lookup finds an email conflict', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        response({
          contact: { id: 'wrong-contact', email: 'other@example.com', phone: request.phone },
        }),
      )
      .mockResolvedValueOnce(noDuplicate());
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(request, {
      emailSuppressed: false,
      smsSuppressed: false,
      callSuppressed: false,
    });

    expect(result.accepted).toEqual([]);
    expect(result.failed).toEqual(['email', 'sms']);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith('/contacts/upsert'))).toBe(
      false,
    );
  });

  it('does not add a human-call trigger tag when provider Call DND is active', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: request.email,
            phone: request.phone,
            dndSettings: { Call: { status: 'active' } },
          },
        }),
      )
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: request.email,
            phone: request.phone,
            dndSettings: { Call: { status: 'active' } },
          },
        }),
      )
      .mockResolvedValueOnce(response({ messageId: 'email-accepted' }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(
      { ...request, sms_delivery_consent: undefined, human_call_consent: 'on' },
      { emailSuppressed: false, smsSuppressed: false, callSuppressed: false },
    );

    const upsert = JSON.parse((fetchMock.mock.calls[2][1] as RequestInit).body as string);
    expect(upsert.tags).not.toContain('mrx-guide-human-call-requested');
    expect(upsert.customFields).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ key: 'contact.mrx_call_permission' })]),
    );
    expect(result.providerSuppression.call).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(5);
  });

  it('uses the authoritative contact read when upsert omits channel DND settings', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: request.email, phone: request.phone } }),
      )
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: request.email,
            phone: request.phone,
            dndSettings: {
              Email: { status: 'active' },
              SMS: { status: 'active' },
              Call: { status: 'active' },
            },
          },
        }),
      );
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(
      { ...request, marketing_email_consent: 'on', human_call_consent: 'on' },
      { emailSuppressed: false, smsSuppressed: false, callSuppressed: false },
    );

    expect(result.suppressed).toEqual(['email', 'sms']);
    expect(result.accepted).toEqual([]);
    expect(result.failed).toEqual([]);
    expect(result.providerSuppression).toEqual({ email: true, sms: true, call: true });
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(String(fetchMock.mock.calls[3][0])).toMatch(/\/contacts\/contact-1$/);
    expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith('/tags'))).toBe(false);
    expect(
      fetchMock.mock.calls.some(([url]) => String(url).endsWith('/conversations/messages')),
    ).toBe(false);
  });

  it('honors global DND from the authoritative contact read when upsert omits it', async () => {
    const globallySuppressedRequest = {
      ...request,
      marketing_email_consent: 'on' as const,
      human_call_consent: 'on' as const,
    };
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(noDuplicate())
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: globallySuppressedRequest.email,
            phone: globallySuppressedRequest.phone,
          },
        }),
      )
      .mockResolvedValueOnce(
        response({
          contact: {
            id: 'contact-1',
            email: globallySuppressedRequest.email,
            phone: globallySuppressedRequest.phone,
            dnd: true,
          },
        }),
      );
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(globallySuppressedRequest, {
      emailSuppressed: false,
      smsSuppressed: false,
      callSuppressed: false,
    });

    expect(result.suppressed).toEqual(['email', 'sms']);
    expect(result.providerSuppression).toEqual({ email: true, sms: true, call: true });
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith('/tags'))).toBe(false);
    expect(
      fetchMock.mock.calls.some(([url]) => String(url).endsWith('/conversations/messages')),
    ).toBe(false);
  });

  it('fails safely without sends or follow-up tags when authoritative DND read fails', async () => {
    const emailOnlyRequest = {
      ...request,
      sms_delivery_consent: undefined,
      phone: '',
      marketing_email_consent: 'on' as const,
      human_call_consent: 'on' as const,
    };
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: emailOnlyRequest.email } }),
      )
      .mockResolvedValueOnce(
        response({ contact: { id: 'contact-1', email: emailOnlyRequest.email } }),
      )
      .mockResolvedValueOnce(new Response('provider unavailable', { status: 503 }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await deliverBeforeYouSellGuide(emailOnlyRequest, {
      emailSuppressed: false,
      smsSuppressed: false,
      callSuppressed: false,
    });

    expect(result.contactId).toBe('contact-1');
    expect(result.failed).toEqual(['email']);
    expect(result.accepted).toEqual([]);
    expect(result.unknown).toEqual([]);
    expect(result.providerSuppression).toEqual({ email: null, sms: null, call: null });
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith('/tags'))).toBe(false);
    expect(
      fetchMock.mock.calls.some(([url]) => String(url).endsWith('/conversations/messages')),
    ).toBe(false);
  });
});
