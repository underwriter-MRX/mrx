import { beforeEach, describe, expect, it, vi } from 'vitest';
const mocks = vi.hoisted(() => ({ getSupabaseServer: vi.fn(), deliverMemberAccessLink: vi.fn() }));
vi.mock('../../src/lib/platform/supabase', () => ({ getSupabaseServer: mocks.getSupabaseServer }));
vi.mock('../../src/lib/platform/identity', () => ({
  normalizeEmail: (value: string) => value.trim().toLowerCase(),
  deliverMemberAccessLink: mocks.deliverMemberAccessLink,
}));
vi.mock('../../src/lib/platform/security', () => ({
  assertSameOrigin: vi.fn(),
  assertRateLimit: vi.fn(),
  clientKey: () => 'test',
  json: (body: unknown, init?: ResponseInit) => Response.json(body, init),
  safeError: () => Response.json({ ok: false }, { status: 500 }),
}));
import { POST } from '../../src/pages/api/account/auth-link';
function db(profile: unknown) {
  const chain: any = {
    select: vi.fn(() => chain),
    eq: vi.fn(() => chain),
    order: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    maybeSingle: vi.fn(async () => ({ data: profile, error: null })),
  };
  return { from: vi.fn(() => chain) };
}
function request(email = 'returning@example.invalid') {
  return {
    request: new Request('https://mineralrightsxchange.com/api/account/auth-link', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email }),
    }),
  } as any;
}
beforeEach(() => {
  vi.clearAllMocks();
  mocks.deliverMemberAccessLink.mockResolvedValue({});
});
describe('returning-owner sign-in API privacy contract', () => {
  it('has identical public responses for matching and unknown email addresses', async () => {
    mocks.getSupabaseServer.mockReturnValue(db({ id: 'profile-1', first_name: 'Riley' }));
    const known = await POST(request());
    expect(mocks.deliverMemberAccessLink).toHaveBeenCalledTimes(1);
    expect(mocks.deliverMemberAccessLink).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'returning@example.invalid',
        redirectTo: 'https://mineralrightsxchange.com/account/',
      }),
    );
    mocks.getSupabaseServer.mockReturnValue(db(null));
    const unknown = await POST(request('unknown@example.invalid'));
    expect(mocks.deliverMemberAccessLink).toHaveBeenCalledTimes(1);
    expect(known.status).toBe(200);
    expect(unknown.status).toBe(200);
    expect(await known.json()).toEqual(await unknown.json());
  });
  it('does not expose matching profiles through delivery failures', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    mocks.getSupabaseServer.mockReturnValue(db({ id: 'profile-1' }));
    mocks.deliverMemberAccessLink.mockRejectedValue(new Error('delivery_failed'));
    const response = await POST(request());
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    vi.restoreAllMocks();
  });
  it('rejects malformed email without attempting delivery', async () => {
    const response = await POST(request('invalid'));
    expect(response.status).toBe(400);
    expect(mocks.deliverMemberAccessLink).not.toHaveBeenCalled();
  });
});
