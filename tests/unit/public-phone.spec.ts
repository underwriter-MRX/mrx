import { afterEach, expect, it, vi } from 'vitest';
import { getPublicPhone } from '../../src/lib/phone';
afterEach(() => vi.unstubAllEnvs());
it('uses the published business phone when configuration is absent or invalid', () => {
  for (const value of ['', '[SENSITIVE]', 'https://example.com']) {
    vi.stubEnv('PUBLIC_MRX_PHONE_TEL', value);
    expect(getPublicPhone().href).toBe('tel:+14324006198');
  }
});
it('normalizes a configured telephone link and labels the same number', () => {
  vi.stubEnv('PUBLIC_MRX_PHONE_TEL', 'tel:+1 (202) 555-0100');
  expect(getPublicPhone()).toMatchObject({
    href: 'tel:+12025550100',
    label: 'Call Mineral Rights Xchange at +12025550100',
  });
});
