import { beforeEach, describe, expect, it, vi } from 'vitest';
const mocks = vi.hoisted(() => ({ submit: vi.fn(), record: vi.fn() }));
vi.mock('../../src/lib/ghl', () => ({
  submitToGHL: mocks.submit,
  buildCalendarRedirect: () => '/book/thank-you',
}));
vi.mock('../../src/lib/platform/form-analytics', () => ({ recordAcceptedFormEvent: mocks.record }));
import { POST as book } from '../../src/pages/api/book';
import { POST as guide } from '../../src/pages/api/free-guide';
function context(path: string, valid = true) {
  const data = new URLSearchParams({
    firstName: 'Synthetic',
    lastName: 'Test',
    email: 'test@example.invalid',
    submission_id: 'd722e803-c462-4167-a6e3-e0a7cd2467ad',
  });
  if (valid) data.set('consent', 'on');
  return {
    locals: {},
    request: new Request(`https://mineralrightsxchange.com/api/${path}`, {
      method: 'POST',
      body: data,
    }),
    redirect: (url: string, status: number) =>
      new Response(null, { status, headers: { Location: url } }),
  } as any;
}
beforeEach(() => {
  vi.clearAllMocks();
  mocks.submit.mockResolvedValue({ ok: true, contactId: 'real-provider-receipt' });
  mocks.record.mockResolvedValue({ sent: true });
});
for (const [name, route] of [
  ['book', book],
  ['free-guide', guide],
] as const) {
  describe(`${name} acceptance boundary`, () => {
    it('does not measure rejected validation', async () => {
      expect((await route(context(name, false))).status).toBe(400);
      expect(mocks.submit).not.toHaveBeenCalled();
      expect(mocks.record).not.toHaveBeenCalled();
    });
    it('does not measure rejected provider delivery', async () => {
      mocks.submit.mockResolvedValue({ ok: false, error: 'provider_failed' });
      expect((await route(context(name))).status).toBe(500);
      expect(mocks.record).not.toHaveBeenCalled();
    });
    it('records only after provider success and preserves the redirect', async () => {
      const result = await route(context(name));
      expect(result.status).toBe(303);
      expect(mocks.record).toHaveBeenCalledWith({
        source: name,
        submissionId: 'd722e803-c462-4167-a6e3-e0a7cd2467ad',
        contactId: 'real-provider-receipt',
      });
      expect(mocks.submit.mock.invocationCallOrder[0]).toBeLessThan(
        mocks.record.mock.invocationCallOrder[0],
      );
      expect(result.headers.get('Location')).toBe(`/${name}/thank-you`);
    });
    it('preserves accepted delivery when analytics throws', async () => {
      mocks.record.mockRejectedValue(new Error('analytics unavailable'));
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect((await route(context(name))).status).toBe(303);
      expect(warn).toHaveBeenCalledWith('[mrx.analytics] accepted_form_measurement_failed');
      warn.mockRestore();
    });
  });
}
