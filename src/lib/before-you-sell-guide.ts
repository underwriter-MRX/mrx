import { z } from 'zod';

export const BEFORE_YOU_SELL_GUIDE_ID = 'before-you-sell-mineral-rights';
export const BEFORE_YOU_SELL_GUIDE_TITLE = 'Before You Sell Your Mineral Rights';
export const BEFORE_YOU_SELL_GUIDE_SUBTITLE =
  '7 questions to ask before accepting an offer \u2014 plus an offer-comparison worksheet.';
export const BEFORE_YOU_SELL_GUIDE_PATH = `/guides/${BEFORE_YOU_SELL_GUIDE_ID}.pdf`;
export const BEFORE_YOU_SELL_CONSENT_VERSION = '2026-09-30-before-you-sell-v1';
export const BEFORE_YOU_SELL_DEDUPE_WINDOW_MS = 24 * 60 * 60 * 1_000;

export const GUIDE_TRANSACTIONAL_EMAIL_TEXT = `I agree that Mineral Rights Xchange may email me the requested guide, “${BEFORE_YOU_SELL_GUIDE_TITLE}.” This one-time transactional email is required to deliver the guide.`;
export const GUIDE_TRANSACTIONAL_SMS_TEXT = `Optional: Text me a one-time link to “${BEFORE_YOU_SELL_GUIDE_TITLE}.” Message and data rates may apply. Reply STOP to opt out or HELP for help. This is not required to receive the guide by email.`;
export const GUIDE_MARKETING_EMAIL_TEXT =
  'Optional: Email me educational and marketing updates from Mineral Rights Xchange. I can unsubscribe at any time. This is not required to receive the guide.';
export const GUIDE_HUMAN_CALL_TEXT =
  'Optional: A human member of the Mineral Rights Xchange team may call me at the number I provide about my mineral-rights questions. No AI-generated, artificial, or prerecorded outbound call is authorized. I may revoke this permission at any time.';

const optionalCheckbox = z.literal('on').optional();
const optionalText = (max: number) => z.string().max(max).optional().or(z.literal(''));

export const BeforeYouSellGuideRequestSchema = z
  .object({
    firstName: z.string().trim().min(1).max(60),
    lastName: z.string().trim().min(1).max(60),
    email: z.string().trim().email().max(120),
    phone: z
      .string()
      .trim()
      .max(30)
      .regex(/^[\d\s()+\-.]*$/, 'Phone may contain digits, spaces, parentheses, +, -, .')
      .optional()
      .or(z.literal('')),
    transactional_email_consent: z.literal('on', {
      errorMap: () => ({ message: 'Email delivery consent is required.' }),
    }),
    sms_delivery_consent: optionalCheckbox,
    marketing_email_consent: optionalCheckbox,
    human_call_consent: optionalCheckbox,
    guide_id: z.literal(BEFORE_YOU_SELL_GUIDE_ID),
    consent_version: z.literal(BEFORE_YOU_SELL_CONSENT_VERSION),
    idempotency_key: z.string().uuid(),
    source_url: z.string().url().max(500),
    source_surface: z.enum(['landing', 'homepage', 'chat', 'site']).default('landing'),
    consent_client_timestamp: optionalText(80),
    consent_timezone_offset: optionalText(20),
    utm_source: optionalText(80),
    utm_medium: optionalText(80),
    utm_campaign: optionalText(80),
    utm_term: optionalText(80),
    utm_content: optionalText(80),
  })
  .superRefine((value, context) => {
    if (
      (value.sms_delivery_consent === 'on' || value.human_call_consent === 'on') &&
      (value.phone || '').replace(/\D/g, '').length < 10
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['phone'],
        message: 'Phone is required when text delivery or a human call is requested.',
      });
    }
  });

export type BeforeYouSellGuideRequest = z.infer<typeof BeforeYouSellGuideRequestSchema>;

export function normalizeGuideEmail(value: string) {
  return value.trim().toLowerCase();
}

export function normalizeGuideName(firstName: string, lastName: string) {
  return `${firstName.trim()} ${lastName.trim()}`.replace(/\s+/g, ' ').toLowerCase();
}

export function guideOfferRelevant(value: string) {
  return /\b(offer|sell|selling|buyer|purchase agreement|letter of intent|loi|closing|accept|price|term sheet)\b/i.test(
    value,
  );
}

export const guideConsentChoices = (request: BeforeYouSellGuideRequest) =>
  [
    {
      channel: 'email_transactional',
      granted: true,
      disclosureText: GUIDE_TRANSACTIONAL_EMAIL_TEXT,
    },
    {
      channel: 'sms_transactional',
      granted: request.sms_delivery_consent === 'on',
      disclosureText: GUIDE_TRANSACTIONAL_SMS_TEXT,
    },
    {
      channel: 'email_marketing',
      granted: request.marketing_email_consent === 'on',
      disclosureText: GUIDE_MARKETING_EMAIL_TEXT,
    },
    {
      channel: 'human_call',
      granted: request.human_call_consent === 'on',
      disclosureText: GUIDE_HUMAN_CALL_TEXT,
    },
  ] as const;
