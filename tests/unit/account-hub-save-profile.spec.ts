import { readFileSync } from 'node:fs';
import { describe, expect, it, vi } from 'vitest';
import { requestProfileSave } from '../../src/components/react/AccountHub';

const accountHub = readFileSync(
  new URL('../../src/components/react/AccountHub.tsx', import.meta.url),
  'utf8',
);

describe('AccountHub profile save recovery', () => {
  it('propagates a rejected request to the save handler recovery path', async () => {
    const fetcher = vi.fn().mockRejectedValue(new TypeError('offline'));

    await expect(requestProfileSave(fetcher, {})).rejects.toThrow('offline');
    expect(fetcher).toHaveBeenCalledOnce();
  });

  it.each([200, 502])('treats malformed JSON at HTTP %s as unavailable', async (status) => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response('not-json', { status, headers: { 'Content-Type': 'text/plain' } }),
    );

    const result = await requestProfileSave(fetcher, {});

    expect(result.response.status).toBe(status);
    expect(result.result).toBeNull();
  });

  it('keeps success and validation response data available to the handler', async () => {
    const valid = await requestProfileSave(
      vi.fn().mockResolvedValue(
        Response.json({ geography: { status: 'resolved', city: 'Midland' } }),
      ),
      {},
    );
    const invalidPhone = await requestProfileSave(
      vi.fn().mockResolvedValue(Response.json({ error: 'invalid_phone' }, { status: 400 })),
      {},
    );

    expect(valid.response.ok).toBe(true);
    expect(valid.result).toEqual({ geography: { status: 'resolved', city: 'Midland' } });
    expect(invalidPhone.response.ok).toBe(false);
    expect(invalidPhone.result).toEqual({ error: 'invalid_phone' });
  });

  it('keeps exact success, validation, ambiguity, and transport feedback', () => {
    expect(accountHub).toContain('Your MRX profile is saved for the next time you return.');
    expect(accountHub).toContain('Please include a valid phone number with area code.');
    expect(accountHub).toContain('crosses ${(residence.counties ?? [])');
    expect(accountHub).toContain(
      'Your profile could not be updated just now. Your entered values are still here. Please try again.',
    );
  });

  it('clears pending state in finally and exposes accessible status', () => {
    expect(accountHub).toMatch(/try\s*\{[\s\S]*requestProfileSave/);
    expect(accountHub).toMatch(/catch\s*\{[\s\S]*finally\s*\{\s*setSavingProfile\(false\);\s*\}/);
    expect(accountHub).toContain('aria-busy={savingProfile}');
    expect(accountHub).toContain('aria-describedby="account-profile-status"');
    expect(accountHub).toContain('id="account-profile-status"');
    expect(accountHub).toContain('role="status"');
    expect(accountHub).toContain('aria-live="polite"');
    expect(accountHub).toContain("defaultValue={accountProfile.first_name || ''}");
  });
});