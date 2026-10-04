import { runtimeEnv } from './runtime-env';
import { getSupabaseServer } from './supabase';

const PROVIDER = 'mrx-form-analytics';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Count one provider-accepted lead request per form/tab receipt, not a booking,
 * delivered email or completed review. Only the API calls this after acceptance.
 * Claim before send provides at-most-once delivery attempts across server instances.
 * A failed/uncertain send remains claimed: undercount is preferable to retries that
 * inflate conversions. No contact ID, email, name, phone, notes or UTMs leave here.
 */
export async function recordAcceptedFormEvent(args: {
  source: 'book' | 'free-guide';
  submissionId: string;
  contactId: string;
}) {
  if (
    !args.contactId ||
    args.contactId.startsWith('pending-') ||
    runtimeEnv('MRX_DISABLE_GHL_PROVIDER_WRITES') === '1'
  ) {
    return { sent: false, reason: 'unverified_or_test_acceptance' };
  }
  if (!UUID.test(args.submissionId)) return { sent: false, reason: 'missing_receipt' };
  const measurementId = runtimeEnv('GA4_MEASUREMENT_ID');
  const apiSecret = runtimeEnv('GA4_API_SECRET');
  const supabase = getSupabaseServer();
  if (!measurementId || !apiSecret || !supabase) {
    console.warn('[mrx.analytics] accepted_form_measurement_not_configured');
    return { sent: false, reason: 'not_configured' };
  }
  const receiptId = `${args.source}:${args.submissionId.toLowerCase()}`;
  const { error } = await supabase.from('crm_sync_events').insert({
    provider: PROVIDER,
    external_event_id: receiptId,
    event_type: 'form_request_accepted',
    payload: { form: args.source, status: 'claimed' },
  });
  if (error?.code === '23505') return { sent: false, reason: 'duplicate' };
  if (error) {
    console.warn('[mrx.analytics] accepted_form_receipt_unavailable');
    return { sent: false, reason: 'receipt_unavailable' };
  }
  let accepted = false;
  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(apiSecret)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(3000),
        body: JSON.stringify({
          // This receipt is intentionally not joined to a CRM identity or browser
          // traffic session. Source attribution remains unavailable, not inferred.
          client_id: `form.${args.submissionId.toLowerCase()}`,
          events: [
            {
              name: 'generate_lead',
              params: {
                lead_type: args.source === 'book' ? 'book_review_request' : 'free_guide_request',
                form_action: `/api/${args.source}`,
                event_id: args.submissionId.toLowerCase(),
                engagement_time_msec: 1,
              },
            },
          ],
        }),
      },
    );
    accepted = response.ok;
  } catch {
    // No response body, URL, secret or owner data is written into diagnostics.
  }
  const { error: updateError } = await supabase
    .from('crm_sync_events')
    .update({
      processed_at: new Date().toISOString(),
      error_code: accepted ? null : 'analytics_delivery_unconfirmed',
      payload: {
        form: args.source,
        status: accepted ? 'transport_accepted' : 'delivery_unconfirmed',
      },
    })
    .eq('provider', PROVIDER)
    .eq('external_event_id', receiptId);
  if (updateError) console.warn('[mrx.analytics] accepted_form_receipt_update_failed');
  if (!accepted) console.warn('[mrx.analytics] accepted_form_delivery_unconfirmed');
  // HTTP acceptance does not establish GA4 ingestion or an account key event.
  return { sent: accepted, reason: accepted ? 'transport_accepted' : 'delivery_unconfirmed' };
}
