/**
 * Hybrid POST route: /api/free-guide
 * Validates form data with zod, submits to GHL, and redirects to
 * /free-guide/thank-you with a one-time download link.
 *
 * Per Architecture Plan §2.4: this is the second of the two hybrid server routes.
 */
import type { APIRoute } from 'astro';
import { recordAcceptedFormEvent } from '../../lib/platform/form-analytics';
import { FreeGuideLeadFormSchema } from '../../lib/form';
import { submitToGHL } from '../../lib/ghl';
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
  const parsed = FreeGuideLeadFormSchema.safeParse(raw);

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

  const result = await submitToGHL(ctx, parsed.data, 'free-guide');
  if (!result.ok) {
    return new Response(JSON.stringify({ ok: false, error: result.error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // A provider acceptance is a lead request, never a confirmed appointment.
  // Analytics failures must not turn an accepted request into a user-facing failure.
  await recordAcceptedFormEvent({
    source: 'free-guide',
    submissionId: typeof raw.submission_id === 'string' ? raw.submission_id : '',
    contactId: result.contactId,
  }).catch(() => console.warn('[mrx.analytics] accepted_form_measurement_failed'));

  // The destination offers the guide; loading it does not emit a success event.
  return ctx.redirect('/free-guide/thank-you', 303);
};
