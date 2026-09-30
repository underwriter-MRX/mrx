import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  append: vi.fn(),
  saveMessage: vi.fn(),
  getSupabaseServer: vi.fn(),
  session: {
    conversationId: '22222222-2222-4222-8222-222222222222',
    profileId: '11111111-1111-4111-8111-111111111111',
  },
}));

vi.mock('../../src/lib/platform/ghl', () => ({ appendGhlConversationText: mocks.append }));
vi.mock('../../src/lib/platform/identity', () => ({
  resolveOwnerSession: vi.fn(async () => mocks.session),
}));
vi.mock('../../src/lib/platform/supabase', () => ({
  getSupabaseServer: mocks.getSupabaseServer,
  saveMessage: mocks.saveMessage,
}));

type DbOptions = {
  appointment?: Record<string, unknown> | null;
  conversationUpdateError?: unknown;
  statusUpdateError?: unknown;
};

function database(options: DbOptions = {}) {
  const calls = { upserts: [] as any[], updates: [] as any[] };
  const api = {
    from: vi.fn((table: string) => {
      let operation = 'select';
      let result: any = { data: null, error: null };
      const builder: any = {
        select: vi.fn(() => {
          operation = 'select';
          if (table === 'appointments') {
            result = {
              data:
                options.appointment === undefined
                  ? {
                      id: '33333333-3333-4333-8333-333333333333',
                      profile_id: mocks.session.profileId,
                      conversation_id: mocks.session.conversationId,
                      ghl_appointment_id: 'ghl-appointment-1',
                      ghl_contact_id: 'ghl-contact-1',
                      status: 'confirmed',
                    }
                  : options.appointment,
              error: null,
            };
          } else if (table === 'appointment_preparations' && operation !== 'update') {
            result = { data: { id: '44444444-4444-4444-8444-444444444444' }, error: null };
          } else if (table === 'case_assignments') {
            result = {
              data: [
                {
                  assigned_staff: {
                    display_name: 'Verified Underwriter',
                    role: 'underwriter',
                    active: true,
                  },
                },
              ],
              error: null,
            };
          }
          return builder;
        }),
        upsert: vi.fn((value: unknown) => {
          operation = 'upsert';
          calls.upserts.push({ table, value });
          result = { data: { id: '44444444-4444-4444-8444-444444444444' }, error: null };
          return builder;
        }),
        update: vi.fn((value: unknown) => {
          operation = 'update';
          calls.updates.push({ table, value });
          result = {
            data: null,
            error:
              table === 'conversations'
                ? (options.conversationUpdateError ?? null)
                : table === 'appointment_preparations'
                  ? (options.statusUpdateError ?? null)
                  : null,
          };
          return builder;
        }),
        eq: vi.fn(() => builder),
        maybeSingle: vi.fn(async () => result),
        single: vi.fn(async () => result),
        then: (resolve: (value: unknown) => unknown) => Promise.resolve(resolve(result)),
      };
      return builder;
    }),
  } as any;
  return { api, calls };
}

function request(answers: Array<{ question: string; answer: string }>) {
  const url = 'https://mineralrightsxchange.com/api/appointments/preparation';
  return {
    request: new Request(url, {
      method: 'POST',
      headers: {
        origin: 'https://mineralrightsxchange.com',
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.77',
      },
      body: JSON.stringify({
        appointmentId: 'ghl-appointment-1',
        inquiryType: 'investor',
        consent: true,
        sourceUrl: 'https://mineralrightsxchange.com/team/graham/',
        answers,
      }),
    }),
    url: new URL(url),
  } as any;
}

describe('/api/appointments/preparation', () => {
  beforeEach(() => {
    mocks.saveMessage.mockResolvedValue('message-1');
    mocks.append.mockResolvedValue(['ghl-message-1']);
  });

  afterEach(() => vi.clearAllMocks());

  it('records staff visibility and a preparation-specific GHL receipt before claiming success', async () => {
    const { api, calls } = database();
    mocks.getSupabaseServer.mockReturnValue(api);
    const { POST } = await import('../../src/pages/api/appointments/preparation');
    const response = await POST(
      request([
        { question: 'What should the underwriter cover?', answer: 'Operator participation' },
      ]),
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toMatchObject({
      ok: true,
      appointmentPreserved: true,
      staffPortalSaved: true,
      ghlSyncStatus: 'synced',
      ghlMessageIds: ['ghl-message-1'],
      assignedUnderwriter: 'Verified Underwriter',
    });
    expect(mocks.append).toHaveBeenCalledWith(
      expect.objectContaining({
        contactId: 'ghl-contact-1',
        source: 'consented Graham appointment preparation',
        externalId: 'appointment-preparation:44444444-4444-4444-8444-444444444444',
      }),
    );
    expect(calls.upserts[0].value).toMatchObject({
      consented: true,
      supplied_fact_status: 'visitor_supplied_unverified',
      staff_queue_status: 'ready',
    });
    expect(calls.updates).toContainEqual(
      expect.objectContaining({
        table: 'appointment_preparations',
        value: expect.objectContaining({
          ghl_sync_status: 'synced',
          ghl_message_ids: ['ghl-message-1'],
        }),
      }),
    );
  });

  it('reports a partial save and preserves the appointment when GHL append fails', async () => {
    const { api, calls } = database();
    mocks.getSupabaseServer.mockReturnValue(api);
    mocks.append.mockRejectedValue(new Error('synthetic append failure'));
    const { POST } = await import('../../src/pages/api/appointments/preparation');
    const response = await POST(
      request([{ question: 'What should the underwriter cover?', answer: 'Project timing' }]),
    );
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body).toMatchObject({
      ok: false,
      error: 'preparation_partially_saved',
      appointmentPreserved: true,
      staffPortalSaved: true,
      ghlSyncStatus: 'failed',
    });
    expect(calls.updates).toContainEqual(
      expect.objectContaining({
        table: 'appointment_preparations',
        value: expect.objectContaining({
          staff_queue_status: 'partial',
          ghl_sync_status: 'failed',
        }),
      }),
    );
    expect(calls.updates.some((entry) => entry.table === 'appointments')).toBe(false);
  });

  it('sends the complete preparation when the summary is longer than 5,000 characters', async () => {
    const { api } = database();
    mocks.getSupabaseServer.mockReturnValue(api);
    const answers = Array.from({ length: 8 }, (_, index) => ({
      question: `Preparation question ${index + 1}?`,
      answer: `${index + 1}-${'x'.repeat(900)}`,
    }));
    const { POST } = await import('../../src/pages/api/appointments/preparation');
    const response = await POST(request(answers));

    expect(response.status).toBe(200);
    const appended = mocks.append.mock.calls[0][0].text as string;
    expect(appended.length).toBeGreaterThan(5_000);
    expect(appended).toContain(`8-${'x'.repeat(900)}`);
  });

  it('does not accept preparation for an unverified appointment', async () => {
    const { api } = database({ appointment: null });
    mocks.getSupabaseServer.mockReturnValue(api);
    const { POST } = await import('../../src/pages/api/appointments/preparation');
    const response = await POST(
      request([{ question: 'What should the underwriter cover?', answer: 'Timing' }]),
    );

    expect(response.status).toBe(404);
    expect(mocks.append).not.toHaveBeenCalled();
  });

  it('fails closed when the final receipt status cannot be recorded', async () => {
    const { api } = database({ statusUpdateError: { code: 'synthetic_status_failure' } });
    mocks.getSupabaseServer.mockReturnValue(api);
    const { POST } = await import('../../src/pages/api/appointments/preparation');
    const response = await POST(
      request([{ question: 'What should the underwriter cover?', answer: 'Timing' }]),
    );
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body).toMatchObject({
      ok: false,
      appointmentPreserved: true,
      staffPortalSaved: true,
      ghlSyncStatus: 'pending',
    });
  });
});
