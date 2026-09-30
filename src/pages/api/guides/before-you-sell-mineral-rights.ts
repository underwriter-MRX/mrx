import type { APIRoute } from 'astro';
import {
  BEFORE_YOU_SELL_CONSENT_VERSION,
  BEFORE_YOU_SELL_GUIDE_ID,
  BEFORE_YOU_SELL_GUIDE_PATH,
  BeforeYouSellGuideRequestSchema,
  guideConsentChoices,
  normalizeGuideEmail,
  normalizeGuideName,
} from '../../../lib/before-you-sell-guide';
import { deliverBeforeYouSellGuide, type GuideDeliveryResult } from '../../../lib/guide-delivery';
import { normalizePhone, resolveOwnerSession, sha256 } from '../../../lib/platform/identity';
import { getSupabaseServer } from '../../../lib/platform/supabase';
import {
  assertRateLimit,
  assertSameOrigin,
  clientKey,
  json,
  safeError,
} from '../../../lib/platform/security';

export const GET: APIRoute = async () =>
  json(
    { ok: false, error: 'method_not_allowed' },
    {
      status: 405,
      headers: { Allow: 'POST', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
    },
  );

type PriorReceipt = { channel: string; purpose: string; granted: boolean };
type RequestRpcResult = {
  created: boolean;
  id: string;
  status: string;
  provider_status: Record<string, unknown> | null;
  idempotency_key: string;
  shared_consents_recorded: boolean;
};

function latestPermission(receipts: PriorReceipt[], channel: string, purposes: string[]) {
  return receipts.find(
    (receipt) => receipt.channel === channel && purposes.includes(receipt.purpose),
  )?.granted;
}

function canonicalSourceUrl(candidate: string, requestUrl: string) {
  const request = new URL(requestUrl);
  const allowedHosts = new Set([
    request.host,
    'mineralrightsxchange.com',
    'www.mineralrightsxchange.com',
  ]);
  try {
    const source = new URL(candidate);
    if (source.protocol !== request.protocol || !allowedHosts.has(source.host)) throw new Error();
    source.search = '';
    source.hash = '';
    return source.toString();
  } catch {
    request.search = '';
    request.hash = '';
    return request.toString();
  }
}

function previousChannels(providerStatus: Record<string, unknown> | null, key: string) {
  const value = providerStatus?.[key];
  return Array.isArray(value)
    ? value.filter(
        (channel): channel is 'email' | 'sms' => channel === 'email' || channel === 'sms',
      )
    : [];
}

function emptyDelivery(): GuideDeliveryResult {
  return {
    configured: false,
    contactId: null,
    accepted: [],
    failed: [],
    unknown: [],
    suppressed: [],
    externalIds: {},
    providerSuppression: { email: null, sms: null, call: null },
  };
}

export const POST: APIRoute = async (context) => {
  try {
    assertSameOrigin(context.request);
    assertRateLimit(`before-you-sell-guide:${clientKey(context)}`, 8, 10 * 60_000);
    const body = Object.fromEntries((await context.request.formData()).entries());
    const parsed = BeforeYouSellGuideRequestSchema.safeParse(body);
    if (!parsed.success) {
      return json(
        { ok: false, error: 'validation_failed', issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const supabase = getSupabaseServer();
    if (!supabase)
      return json({ ok: false, error: 'durable_request_persistence_unavailable' }, { status: 503 });
    const session = await resolveOwnerSession(context);
    if (!session.persisted)
      return json({ ok: false, error: 'durable_request_persistence_unavailable' }, { status: 503 });

    const email = normalizeGuideEmail(parsed.data.email);
    const phone = parsed.data.phone ? normalizePhone(parsed.data.phone) : null;
    if (
      (parsed.data.sms_delivery_consent === 'on' || parsed.data.human_call_consent === 'on') &&
      !phone
    )
      return json({ ok: false, error: 'invalid_phone' }, { status: 400 });
    const request = {
      ...parsed.data,
      email,
      phone: phone || '',
      source_url: canonicalSourceUrl(parsed.data.source_url, context.request.url),
    };
    const identityKey = await sha256(
      `${normalizeGuideName(request.firstName, request.lastName)}|${email}`,
    );
    const phoneKey = phone ? await sha256(phone) : null;
    const today = new Date().toISOString().slice(0, 10);
    const now = new Date().toISOString();

    const { data: priorReceipts, error: priorConsentError } = await supabase
      .from('consent_receipts')
      .select('channel,purpose,granted,created_at')
      .eq('profile_id', session.profileId)
      .order('created_at', { ascending: false });
    if (priorConsentError) throw priorConsentError;
    const prior = (priorReceipts || []) as PriorReceipt[];
    const emailSuppressed = latestPermission(prior, 'email', ['guide_delivery']) === false;
    const smsSuppressed =
      latestPermission(prior, 'sms', ['guide_delivery', 'requested_updates', 'marketing']) ===
      false;
    const marketingSuppressed = latestPermission(prior, 'email', ['marketing']) === false;
    const callSuppressed =
      latestPermission(prior, 'call', ['human_call', 'requested_updates']) === false;
    const suppressionState = {
      transactionalEmail: emailSuppressed ? 'suppressed_by_existing_preference' : 'eligible',
      sms: smsSuppressed ? 'suppressed_by_existing_preference' : 'eligible_if_requested',
      marketingEmail: marketingSuppressed
        ? 'suppressed_by_existing_preference'
        : 'eligible_if_requested',
      humanCall: callSuppressed ? 'suppressed_by_existing_preference' : 'eligible_if_requested',
      providerDnd: 'observed_after_durable_acceptance',
      aiOutboundCall: 'disabled',
      sourceSurface: request.source_surface,
    };
    const receiptRows = await Promise.all(
      guideConsentChoices(request).map(async (choice) => ({
        profile_id: session.profileId,
        guide_id: BEFORE_YOU_SELL_GUIDE_ID,
        channel: choice.channel,
        granted: choice.granted,
        disclosure_version: BEFORE_YOU_SELL_CONSENT_VERSION,
        disclosure_text: choice.disclosureText,
        disclosure_sha256: await sha256(choice.disclosureText),
        source_url: request.source_url,
        client_timestamp: request.consent_client_timestamp || '',
        server_timestamp: now,
        suppression_state: suppressionState,
        observation_stage: 'submission',
      })),
    );
    const requestedChannels = [
      'email',
      ...(request.sms_delivery_consent === 'on' ? ['sms'] : []),
      ...(request.marketing_email_consent === 'on' ? ['marketing_email'] : []),
      ...(request.human_call_consent === 'on' ? ['human_call'] : []),
    ];
    const { data: rpcData, error: rpcError } = await supabase.rpc(
      'create_guide_request_with_receipts',
      {
        request_row: {
          profile_id: session.profileId,
          guide_id: BEFORE_YOU_SELL_GUIDE_ID,
          identity_key: identityKey,
          phone_key: phoneKey || '',
          dedupe_day: today,
          idempotency_key: request.idempotency_key,
          requested_channels: requestedChannels,
          first_name: request.firstName,
          last_name: request.lastName,
          email: request.email,
          normalized_email: email,
          phone: request.phone,
          normalized_phone: phone || '',
        },
        receipt_rows: receiptRows,
      },
    );
    if (rpcError) throw rpcError;
    const durableRequest = rpcData as RequestRpcResult;

    const sameSubmission = durableRequest.idempotency_key === request.idempotency_key;
    const sharedConsentRows = [
      ...((durableRequest.created ||
        latestPermission(prior, 'email', ['guide_delivery']) !== true) &&
      !emailSuppressed
        ? [
            {
              profile_id: session.profileId,
              channel: 'email',
              purpose: 'guide_delivery',
              granted: true,
              disclosure_version: BEFORE_YOU_SELL_CONSENT_VERSION,
              disclosure_text: receiptRows[0].disclosure_text,
              submitted_value: 'true',
              destination: email,
              source_url: request.source_url,
            },
          ]
        : []),
      ...(request.sms_delivery_consent === 'on' &&
      !smsSuppressed &&
      latestPermission(prior, 'sms', ['guide_delivery']) !== true
        ? [
            {
              profile_id: session.profileId,
              channel: 'sms',
              purpose: 'guide_delivery',
              granted: true,
              disclosure_version: BEFORE_YOU_SELL_CONSENT_VERSION,
              disclosure_text: receiptRows[1].disclosure_text,
              submitted_value: 'true',
              destination: phone,
              source_url: request.source_url,
            },
          ]
        : []),
      ...(request.marketing_email_consent === 'on' &&
      !marketingSuppressed &&
      latestPermission(prior, 'email', ['marketing']) !== true
        ? [
            {
              profile_id: session.profileId,
              channel: 'email',
              purpose: 'marketing',
              granted: true,
              disclosure_version: BEFORE_YOU_SELL_CONSENT_VERSION,
              disclosure_text: receiptRows[2].disclosure_text,
              submitted_value: 'true',
              destination: email,
              source_url: request.source_url,
            },
          ]
        : []),
      ...(request.human_call_consent === 'on' &&
      !callSuppressed &&
      latestPermission(prior, 'call', ['human_call']) !== true
        ? [
            {
              profile_id: session.profileId,
              channel: 'call',
              purpose: 'human_call',
              granted: true,
              disclosure_version: BEFORE_YOU_SELL_CONSENT_VERSION,
              disclosure_text: receiptRows[3].disclosure_text,
              submitted_value: 'true',
              destination: phone,
              source_url: request.source_url,
            },
          ]
        : []),
    ];
    if (sharedConsentRows.length) {
      const { error: sharedConsentError } = await supabase
        .from('consent_receipts')
        .insert(sharedConsentRows);
      if (sharedConsentError) throw sharedConsentError;
    }
    if (!durableRequest.shared_consents_recorded) {
      const { error: sharedFlagError } = await supabase
        .from('guide_requests')
        .update({ shared_consents_recorded: true })
        .eq('id', durableRequest.id);
      if (sharedFlagError) throw sharedFlagError;
    }

    const explicitRetry = context.request.headers.get('x-mrx-retry-failed') === '1';
    const priorProviderState = String(durableRequest.provider_status?.state || 'not_attempted');
    const resumableInitialAttempt = sameSubmission && priorProviderState === 'not_attempted';
    if (!durableRequest.created && !resumableInitialAttempt && (!explicitRetry || sameSubmission)) {
      return json({
        ok: true,
        accepted: true,
        duplicate: true,
        preferenceRevisionRecorded: !sameSubmission,
        requestId: durableRequest.id,
        requestStatus: durableRequest.status,
        delivery: durableRequest.provider_status,
        downloadUrl: BEFORE_YOU_SELL_GUIDE_PATH,
      });
    }

    const desiredDelivery = [
      'email' as const,
      ...(request.sms_delivery_consent === 'on' ? (['sms'] as const) : []),
    ];
    const retryClaimToken = crypto.randomUUID();
    const { data: claimResult, error: claimError } = await supabase.rpc(
      'claim_guide_delivery_attempt',
      {
        target_request_id: durableRequest.id,
        claim_token: retryClaimToken,
        desired_channels: desiredDelivery,
      },
    );
    if (claimError) throw claimError;
    if (!claimResult?.claimed) {
      return json({
        ok: true,
        accepted: true,
        duplicate: !durableRequest.created,
        deliveryInProgressOrReconciliationRequired: true,
        requestId: durableRequest.id,
        requestStatus: durableRequest.status,
        delivery: claimResult?.provider_status || durableRequest.provider_status,
        downloadUrl: BEFORE_YOU_SELL_GUIDE_PATH,
      });
    }
    const providerSnapshot = claimResult.provider_status as Record<string, unknown>;
    const previousAccepted = previousChannels(providerSnapshot, 'acceptedChannels');
    const previousUnknown = previousChannels(providerSnapshot, 'unknownChannels');
    const sendChannels: Array<'email' | 'sms'> = Array.isArray(claimResult.claimed_channels)
      ? claimResult.claimed_channels.filter(
          (channel: unknown): channel is 'email' | 'sms' =>
            (channel === 'email' || channel === 'sms') &&
            desiredDelivery.includes(channel) &&
            !previousAccepted.includes(channel),
        )
      : [];
    let delivery = emptyDelivery();
    if (sendChannels.length) {
      try {
        delivery = await deliverBeforeYouSellGuide(request, {
          emailSuppressed,
          smsSuppressed,
          callSuppressed,
          sendChannels,
        });
      } catch (error) {
        delivery = {
          ...emptyDelivery(),
          configured: true,
          failed: sendChannels,
        };
        console.error(
          '[before-you-sell guide delivery]',
          error instanceof Error ? error.message : 'failed',
        );
      }
    }

    const acceptedChannels = [...new Set([...previousAccepted, ...delivery.accepted])];
    const failedChannels = [
      ...new Set(delivery.failed.filter((channel) => !acceptedChannels.includes(channel))),
    ];
    const unknownChannels = [
      ...new Set(
        [...previousUnknown, ...delivery.unknown].filter(
          (channel) =>
            !acceptedChannels.includes(channel) &&
            !delivery.failed.includes(channel) &&
            !delivery.suppressed.includes(channel),
        ),
      ),
    ];
    const suppressedChannels = [...new Set(delivery.suppressed)];
    const status =
      acceptedChannels.length === desiredDelivery.length
        ? 'provider_accepted'
        : acceptedChannels.length
          ? 'provider_partial'
          : unknownChannels.length
            ? 'provider_partial'
            : suppressedChannels.length
              ? 'suppressed'
              : 'provider_failed';
    const providerStatus = {
      state: delivery.configured ? status : 'provider_not_configured',
      acceptedChannels,
      failedChannels,
      unknownChannels,
      suppressedChannels,
      externalIds: {
        ...((providerSnapshot?.externalIds as Record<string, string> | undefined) || {}),
        ...delivery.externalIds,
      },
      providerSuppression: delivery.providerSuppression,
      contactAccepted: Boolean(delivery.contactId),
      retryPolicy:
        'Only definitively failed channels may be retried with an explicit server-side retry header.',
      note: 'Provider acceptance is not proof of recipient delivery.',
    };
    const { error: updateError } = await supabase
      .from('guide_requests')
      .update({ status, provider_status: providerStatus })
      .eq('id', durableRequest.id);
    if (updateError) throw updateError;

    const observationRows = receiptRows.map((row) => ({
      ...row,
      observation_stage: 'provider_observation',
      suppression_state: {
        ...suppressionState,
        providerDnd: delivery.providerSuppression,
        providerAcceptedChannels: delivery.accepted,
        providerSuppressedChannels: delivery.suppressed,
        providerUnknownChannels: delivery.unknown,
      },
    }));
    const { error: observationError } = await supabase
      .from('guide_consent_receipts')
      .insert(observationRows.map((row) => ({ ...row, request_id: durableRequest.id })));
    if (observationError && observationError.code !== '23505') throw observationError;

    const dispatchRows = sendChannels.map((channel) => ({
      profile_id: session.profileId,
      channel,
      purpose: 'guide_delivery',
      provider: 'gohighlevel',
      destination_hash: channel === 'email' ? identityKey : phoneKey,
      status: delivery.accepted.includes(channel)
        ? 'queued'
        : delivery.suppressed.includes(channel)
          ? 'suppressed'
          : delivery.unknown.includes(channel)
            ? 'unknown'
            : 'failed',
      error_code: delivery.failed.includes(channel)
        ? 'provider_acceptance_failed'
        : delivery.unknown.includes(channel)
          ? 'provider_outcome_unknown'
          : null,
      requested_by: 'owner',
      attempted_at: delivery.suppressed.includes(channel) ? null : now,
      completed_at:
        delivery.accepted.includes(channel) || delivery.unknown.includes(channel) ? null : now,
      metadata: {
        guideId: BEFORE_YOU_SELL_GUIDE_ID,
        guideRequestId: durableRequest.id,
        providerStatus: delivery.accepted.includes(channel)
          ? 'accepted'
          : delivery.unknown.includes(channel)
            ? 'unknown_needs_reconciliation'
            : 'not_accepted',
        externalId: delivery.externalIds[channel] || null,
      },
    }));
    if (dispatchRows.length) {
      const { error: dispatchError } = await supabase
        .from('communication_dispatches')
        .insert(dispatchRows);
      if (dispatchError) throw dispatchError;
    }

    const { error: releaseError } = await supabase.rpc('release_guide_failed_retry', {
      target_request_id: durableRequest.id,
      claim_token: retryClaimToken,
    });
    if (releaseError) throw releaseError;

    return json({
      ok: true,
      accepted: true,
      duplicate: false,
      requestId: durableRequest.id,
      requestStatus: status,
      delivery: providerStatus,
      downloadUrl: BEFORE_YOU_SELL_GUIDE_PATH,
    });
  } catch (error) {
    return safeError(error);
  }
};
