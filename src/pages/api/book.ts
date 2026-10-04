/**
 * Hybrid POST route: /api/book
 * Validates form data with zod (src/lib/form.ts), submits to GHL via
 * src/lib/ghl.ts (stage 08), then redirects to the GHL calendar URL
 * with name + email pre-filled as query params.
 *
 * Per Architecture Plan §2.4 and §5.3: this is the first of the two
 * hybrid server routes.
 */
import type { APIRoute } from 'astro';
import { recordAcceptedFormEvent } from '../../lib/platform/form-analytics';
import { LeadFormSchema } from '../../lib/form';
import { submitToGHL, buildCalendarRedirect } from '../../lib/ghl';
import { serverEnv } from '../../lib/astro/env';
import { assertSameOrigin } from '../../lib/platform/security';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ ok: false, error: 'method_not_allowed' }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
      Allow: 'POST',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });

export const POST: APIRoute = async (ctx) => {
  assertSameOrigin(ctx.request);
  const formData = await ctx.request.formData();
  const raw = Object.fromEntries(formData.entries());
  const parsed = LeadFormSchema.safeParse(raw);

  if (!parsed.success) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'validation_failed',
        issues: parsed.error.flatten().fieldErrors,
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const result = await submitToGHL(ctx, parsed.data, 'book');

  if (!result.ok) {
    return new Response(JSON.stringify({ ok: false, error: result.error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // A provider acceptance is a lead request, never a confirmed appointment.
  // Analytics failures must not turn an accepted request into a user-facing failure.
  await recordAcceptedFormEvent({
    source: 'book',
    submissionId: typeof raw.submission_id === 'string' ? raw.submission_id : '',
    contactId: result.contactId,
  }).catch(() => console.warn('[mrx.analytics] accepted_form_measurement_failed'));

  // Build calendar redirect URL with name + email pre-filled; fall
  // back to the in-app thank-you page when MRX_GHL_CALENDAR_URL is
  // not configured (staging, pre-deploy).
  const env = serverEnv(ctx.locals);
  const target = buildCalendarRedirect(env.MRX_GHL_CALENDAR_URL, parsed.data);
  return ctx.redirect(target, 303);
};
