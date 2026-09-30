import { describe, expect, it } from 'vitest';
import {
  BEFORE_YOU_SELL_CONSENT_VERSION,
  BEFORE_YOU_SELL_GUIDE_ID,
  BeforeYouSellGuideRequestSchema,
  guideConsentChoices,
  guideOfferRelevant,
} from '../../src/lib/before-you-sell-guide';

const valid = {
  firstName: 'Ada',
  lastName: 'Owner',
  email: 'ada@example.com',
  phone: '',
  transactional_email_consent: 'on',
  guide_id: BEFORE_YOU_SELL_GUIDE_ID,
  consent_version: BEFORE_YOU_SELL_CONSENT_VERSION,
  idempotency_key: '62cf4994-6f88-4305-ac0c-7edbc2f71566',
  source_url: 'https://mineralrightsxchange.com/before-you-sell-mineral-rights/',
  source_surface: 'landing',
};

describe('BeforeYouSellGuideRequestSchema', () => {
  it('requires name, email, and transactional email consent', () => {
    expect(BeforeYouSellGuideRequestSchema.safeParse(valid).success).toBe(true);
    expect(BeforeYouSellGuideRequestSchema.safeParse({ ...valid, firstName: '' }).success).toBe(
      false,
    );
    expect(
      BeforeYouSellGuideRequestSchema.safeParse({
        ...valid,
        transactional_email_consent: undefined,
      }).success,
    ).toBe(false);
  });

  it('keeps every optional permission unchecked by default', () => {
    const result = BeforeYouSellGuideRequestSchema.parse(valid);
    expect(result.sms_delivery_consent).toBeUndefined();
    expect(result.marketing_email_consent).toBeUndefined();
    expect(result.human_call_consent).toBeUndefined();
    expect(guideConsentChoices(result).map(({ granted }) => granted)).toEqual([
      true,
      false,
      false,
      false,
    ]);
  });

  it('requires phone only for transactional SMS or a human call', () => {
    expect(
      BeforeYouSellGuideRequestSchema.safeParse({ ...valid, sms_delivery_consent: 'on' }).success,
    ).toBe(false);
    expect(
      BeforeYouSellGuideRequestSchema.safeParse({ ...valid, human_call_consent: 'on' }).success,
    ).toBe(false);
    expect(
      BeforeYouSellGuideRequestSchema.safeParse({
        ...valid,
        phone: '+1 512 555 0100',
        sms_delivery_consent: 'on',
      }).success,
    ).toBe(true);
  });

  it('never exposes an AI outbound-call permission', () => {
    const choices = guideConsentChoices(BeforeYouSellGuideRequestSchema.parse(valid));
    expect(choices.map(({ channel }) => channel)).not.toContain('ai_voice');
    expect(choices.find(({ channel }) => channel === 'human_call')?.disclosureText).toContain(
      'No AI-generated, artificial, or prerecorded outbound call is authorized.',
    );
  });
});

describe('chat guide relevance', () => {
  it('offers the guide for offer and selling questions', () => {
    expect(guideOfferRelevant('I received a purchase agreement from a buyer')).toBe(true);
    expect(guideOfferRelevant('Should I sell before closing?')).toBe(true);
  });

  it('does not offer the guide for unrelated royalty questions', () => {
    expect(guideOfferRelevant('How do I read the deductions on my royalty statement?')).toBe(false);
  });
});
