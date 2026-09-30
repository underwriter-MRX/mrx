import type { BeforeYouSellGuideRequest } from './before-you-sell-guide';
import { BEFORE_YOU_SELL_GUIDE_PATH, BEFORE_YOU_SELL_GUIDE_TITLE } from './before-you-sell-guide';
import { runtimeEnv } from './platform/runtime-env';

const API_BASE = 'https://services.leadconnectorhq.com';
const API_VERSION = '2021-07-28';
const MESSAGE_VERSION = '2021-04-15';

export type GuideDeliveryResult = {
  configured: boolean;
  contactId: string | null;
  accepted: Array<'email' | 'sms'>;
  failed: Array<'email' | 'sms'>;
  unknown: Array<'email' | 'sms'>;
  suppressed: Array<'email' | 'sms'>;
  externalIds: Partial<Record<'email' | 'sms', string>>;
  providerSuppression: { email: boolean | null; sms: boolean | null; call: boolean | null };
};

function providerWritesDisabled() {
  return ['1', 'true', 'yes'].includes(
    String(runtimeEnv('MRX_DISABLE_GHL_PROVIDER_WRITES') || '')
      .trim()
      .toLowerCase(),
  );
}

function headers(token: string, version = API_VERSION) {
  return {
    Authorization: `Bearer ${token}`,
    Version: version,
    'Content-Type': 'application/json',
  };
}

function publicGuideUrl() {
  return new URL(BEFORE_YOU_SELL_GUIDE_PATH, 'https://mineralrightsxchange.com').toString();
}

function contactSmsDndActive(contact: Record<string, unknown> | undefined) {
  if (!contact) return false;
  const settings = contact.dndSettings as Record<string, { status?: string }> | undefined;
  return contact.dnd === true || settings?.SMS?.status === 'active';
}

function contactChannelDndActive(
  contact: Record<string, unknown> | undefined,
  channel: 'Email' | 'SMS' | 'Call',
) {
  if (!contact) return false;
  const settings = contact.dndSettings as Record<string, { status?: string }> | undefined;
  return contact.dnd === true || settings?.[channel]?.status === 'active';
}

function normalizedEmail(value: unknown) {
  return String(value || '')
    .trim()
    .toLowerCase();
}

function normalizedPhoneDigits(value: unknown) {
  return String(value || '')
    .replace(/\D/g, '')
    .slice(-10);
}

async function lookupDuplicateContact(
  token: string,
  locationId: string,
  query: { email?: string; number?: string },
) {
  const url = new URL(`${API_BASE}/contacts/search/duplicate`);
  url.searchParams.set('locationId', locationId);
  if (query.email) url.searchParams.set('email', query.email);
  if (query.number) url.searchParams.set('number', query.number);
  try {
    const response = await fetch(url, { headers: headers(token) });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`duplicate_contact_lookup_failed:${response.status}`);
    const payload = (await response.json()) as { contact?: Record<string, unknown> };
    return payload.contact || null;
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('duplicate_contact_lookup_failed:'))
      throw error;
    throw new Error('duplicate_contact_lookup_unknown');
  }
}

async function addContactTags(token: string, contactId: string, tags: string[]) {
  if (!tags.length) return true;
  try {
    const response = await fetch(`${API_BASE}/contacts/${encodeURIComponent(contactId)}/tags`, {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify({ tags }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function sendMessage(
  token: string,
  body: Record<string, unknown>,
): Promise<{ status: 'accepted' | 'failed' | 'unknown'; externalId: string | null }> {
  try {
    const response = await fetch(`${API_BASE}/conversations/messages`, {
      method: 'POST',
      headers: headers(token, MESSAGE_VERSION),
      body: JSON.stringify({ ...body, status: 'pending' }),
    });
    if (!response.ok)
      return {
        status: response.status === 408 || response.status >= 500 ? 'unknown' : 'failed',
        externalId: null,
      };
    let payload: Record<string, unknown>;
    try {
      payload = (await response.json()) as Record<string, unknown>;
    } catch {
      return { status: 'unknown', externalId: null };
    }
    return {
      status: 'accepted',
      externalId: String(payload.messageId || payload.id || '') || null,
    };
  } catch {
    return { status: 'unknown', externalId: null };
  }
}

export async function deliverBeforeYouSellGuide(
  request: BeforeYouSellGuideRequest,
  options: {
    emailSuppressed: boolean;
    smsSuppressed: boolean;
    callSuppressed: boolean;
    sendChannels?: Array<'email' | 'sms'>;
  },
): Promise<GuideDeliveryResult> {
  const wantsSms = request.sms_delivery_consent === 'on';
  const sendChannels = options.sendChannels ?? ['email', ...(wantsSms ? (['sms'] as const) : [])];
  if (providerWritesDisabled()) {
    return {
      configured: true,
      contactId: null,
      accepted: [],
      failed: [],
      unknown: [],
      suppressed: sendChannels,
      externalIds: {},
      providerSuppression: { email: null, sms: null, call: null },
    };
  }

  const token =
    runtimeEnv('GHL_PRIVATE_INTEGRATION_TOKEN') ||
    runtimeEnv('MRX_GHL_API_KEY') ||
    runtimeEnv('GHL_API_TOKEN');
  const locationId = runtimeEnv('GHL_LOCATION_ID') || runtimeEnv('MRX_GHL_LOCATION_ID');
  const emailFrom = runtimeEnv('GHL_EMAIL_FROM');
  if (!token || !locationId) {
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

  const [emailDuplicate, phoneDuplicate] = await Promise.all([
    lookupDuplicateContact(token, locationId, { email: request.email }),
    request.phone
      ? lookupDuplicateContact(token, locationId, { number: request.phone })
      : Promise.resolve(null),
  ]);
  const emailDuplicateId = String(emailDuplicate?.id || '');
  const phoneDuplicateId = String(phoneDuplicate?.id || '');
  const duplicateConflict =
    Boolean(emailDuplicateId && phoneDuplicateId && emailDuplicateId !== phoneDuplicateId) ||
    Boolean(
      emailDuplicate && normalizedEmail(emailDuplicate.email) !== normalizedEmail(request.email),
    ) ||
    Boolean(
      phoneDuplicate && normalizedEmail(phoneDuplicate.email) !== normalizedEmail(request.email),
    );
  if (duplicateConflict) {
    return {
      configured: true,
      contactId: null,
      accepted: [],
      failed: sendChannels,
      unknown: [],
      suppressed: [],
      externalIds: {},
      providerSuppression: { email: null, sms: null, call: null },
    };
  }

  const upsert = await fetch(`${API_BASE}/contacts/upsert`, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify({
      locationId,
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      ...(request.phone ? { phone: request.phone } : {}),
      source: 'MRX Website - Before You Sell Guide',
      tags: ['mrx-website-lead', 'mrx-guide-before-you-sell-mineral-rights'],
      customFields: [
        { key: 'contact.mrx_requested_guide', fieldValue: request.guide_id },
        { key: 'contact.mrx_requested_guide_title', fieldValue: BEFORE_YOU_SELL_GUIDE_TITLE },
        { key: 'contact.mrx_requested_guide_url', fieldValue: publicGuideUrl() },
        { key: 'contact.mrx_guide_email_permission', fieldValue: 'true' },
        { key: 'contact.mrx_consent_version', fieldValue: request.consent_version },
        { key: 'contact.mrx_source_url', fieldValue: request.source_url },
      ],
    }),
  });
  if (!upsert.ok) {
    return {
      configured: true,
      contactId: null,
      accepted: [],
      failed: sendChannels,
      unknown: [],
      suppressed: [],
      externalIds: {},
      providerSuppression: { email: null, sms: null, call: null },
    };
  }

  const payload = (await upsert.json()) as {
    contact?: Record<string, unknown> & { id?: string };
    id?: string;
  };
  const contactId = payload.contact?.id || payload.id || null;
  const returnedEmail = normalizedEmail(payload.contact?.email);
  const returnedPhone = normalizedPhoneDigits(payload.contact?.phone);
  const requestedPhone = normalizedPhoneDigits(request.phone);
  const identityMismatch =
    !returnedEmail ||
    returnedEmail !== normalizedEmail(request.email) ||
    (requestedPhone && returnedPhone && returnedPhone !== requestedPhone);
  if (!contactId || identityMismatch) {
    return {
      configured: true,
      contactId: null,
      accepted: [],
      failed: sendChannels,
      unknown: [],
      suppressed: [],
      externalIds: {},
      providerSuppression: { email: null, sms: null, call: null },
    };
  }

  const accepted: Array<'email' | 'sms'> = [];
  const failed: Array<'email' | 'sms'> = [];
  const unknown: Array<'email' | 'sms'> = [];
  const suppressed: Array<'email' | 'sms'> = [];
  const externalIds: Partial<Record<'email' | 'sms', string>> = {};
  const link = publicGuideUrl();
  const safeFollowupTags = [
    ...(request.marketing_email_consent === 'on' &&
    !contactChannelDndActive(payload.contact, 'Email')
      ? ['mrx-guide-marketing-email-consent']
      : []),
    ...(request.human_call_consent === 'on' &&
    !options.callSuppressed &&
    !contactChannelDndActive(payload.contact, 'Call')
      ? ['mrx-guide-human-call-requested']
      : []),
  ];
  await addContactTags(token, contactId, safeFollowupTags);
  if (!sendChannels.includes('email')) {
    // A prior attempt already has definitive provider acceptance for email.
  } else if (options.emailSuppressed || contactChannelDndActive(payload.contact, 'Email')) {
    suppressed.push('email');
  } else {
    const email = await sendMessage(token, {
      contactId,
      type: 'Email',
      emailTo: request.email,
      ...(emailFrom ? { emailFrom } : {}),
      subject: `Your MRX guide: ${BEFORE_YOU_SELL_GUIDE_TITLE}`,
      message: `Hi ${request.firstName},\n\nYour requested guide is ready: ${link}\n\nThis guide provides general educational questions and is not legal, tax, financial, title, or valuation advice.\n\nMineral Rights Xchange`,
      html: `<p>Hi ${request.firstName.replace(/[&<>"']/g, '')},</p><p>Your requested guide is ready:</p><p><a href="${link}">Open ${BEFORE_YOU_SELL_GUIDE_TITLE}</a></p><p>This guide provides general educational questions and is not legal, tax, financial, title, or valuation advice.</p><p>Mineral Rights Xchange</p>`,
    });
    (email.status === 'accepted' ? accepted : email.status === 'failed' ? failed : unknown).push(
      'email',
    );
    if (email.externalId) externalIds.email = email.externalId;
  }

  if (wantsSms && sendChannels.includes('sms')) {
    const smsSuppressed = options.smsSuppressed || contactSmsDndActive(payload.contact);
    if (smsSuppressed) {
      suppressed.push('sms');
    } else {
      const sms = await sendMessage(token, {
        contactId,
        type: 'SMS',
        toNumber: request.phone,
        message: `Hi ${request.firstName}, your requested MRX guide is ready: ${link} Reply STOP to opt out or HELP for help.`,
      });
      (sms.status === 'accepted' ? accepted : sms.status === 'failed' ? failed : unknown).push(
        'sms',
      );
      if (sms.externalId) externalIds.sms = sms.externalId;
    }
  }

  return {
    configured: true,
    contactId,
    accepted,
    failed,
    unknown,
    suppressed,
    externalIds,
    providerSuppression: {
      email: contactChannelDndActive(payload.contact, 'Email'),
      sms: contactChannelDndActive(payload.contact, 'SMS'),
      call: contactChannelDndActive(payload.contact, 'Call'),
    },
  };
}
