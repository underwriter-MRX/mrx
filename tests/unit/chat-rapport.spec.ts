import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  accountInvitationReady,
  countMeaningfulExchanges,
  discoveryWasDeclined,
  firstNameFromReply,
  isAccountIntent,
  isAccountRefusal,
  isBookingIntent,
  isMeaningfulUserTurn,
  isNameRefusal,
  isSubstantiveNameReply,
  openingGreeting,
  openingPersonaFor,
  questionCount,
  withoutFollowupQuestion,
} from '../../src/lib/platform/rapport';

const source = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

describe('rapport-first chat helpers', () => {
  it('selects a deterministic opening persona without changing global specialist routing', () => {
    expect(openingPersonaFor('What might my mineral rights be worth?')).toBe('clay');
    expect(openingPersonaFor('Help me research my ownership records')).toBe('travis');
    expect(openingPersonaFor('I want to schedule a human underwriter call')).toBe('elena');
    expect(openingGreeting('clay')).toBe(
      'Hi, I’m Clay, a fictional MRX AI guide. What’s your first name?',
    );
  });

  it('keeps booking requests distinct from booking and discovery refusals', () => {
    expect(isBookingIntent('Please book a call with an underwriter')).toBe(true);
    expect(isBookingIntent('Skip the questions')).toBe(false);
    expect(isBookingIntent('I do not want to book')).toBe(false);
    expect(isBookingIntent('I am not ready to book')).toBe(false);
    expect(isBookingIntent('I do not want an appointment')).toBe(false);
  });

  it('keeps explicit account requests distinct from account refusals', () => {
    expect(isAccountIntent('Please help me create a free owner account')).toBe(true);
    expect(isAccountIntent('I do not want to create an account')).toBe(false);
    expect(isAccountIntent('I am not ready to set up an account')).toBe(false);
    expect(isAccountRefusal('I do not want to create an account')).toBe(true);
  });

  it('accepts clear names, refusals, and combined substantive replies without inventing a name', () => {
    expect(firstNameFromReply('Billy')).toBe('Billy');
    expect(firstNameFromReply("I'm Billy and I inherited these rights from Dad")).toBe('Billy');
    expect(firstNameFromReply('I inherited these from Dad')).toBe('');
    expect(firstNameFromReply('I do not want to share my name')).toBe('');
    expect(isNameRefusal('I do not want to share my name')).toBe(true);
    expect(isSubstantiveNameReply("I'm Billy and I inherited these rights from Dad")).toBe(true);
    expect(isSubstantiveNameReply('I receive royalties in Texas')).toBe(true);
  });

  it('counts only substantive completed exchanges and restores the same account gate', () => {
    const history = [
      { role: 'assistant' as const, content: openingGreeting('travis') },
      { role: 'user' as const, content: 'My name is Billy' },
      {
        role: 'assistant' as const,
        content: 'Nice to meet you, Billy. What brought you here today?',
      },
      { role: 'user' as const, content: 'I received a mineral offer.' },
      { role: 'assistant' as const, content: 'The complete terms matter. What county is it in?' },
    ];
    expect(isMeaningfulUserTurn('My name is Billy')).toBe(false);
    expect(isMeaningfulUserTurn('billy@example.com')).toBe(false);
    expect(countMeaningfulExchanges(history)).toBe(1);
    expect(
      accountInvitationReady({
        goal: 'compare-offer',
        meaningfulExchanges: 1,
        authenticated: false,
        dismissed: false,
      }),
    ).toBe(false);
    expect(
      accountInvitationReady({
        goal: 'compare-offer',
        meaningfulExchanges: 2,
        authenticated: false,
        dismissed: false,
      }),
    ).toBe(true);
  });

  it('recognizes discovery refusal and counts questions without rewriting the answer', () => {
    expect(discoveryWasDeclined('Just answer. Stop asking questions.')).toBe(true);
    expect(questionCount('One question? A second question?')).toBe(2);
    expect(withoutFollowupQuestion('Here is the direct answer. What county is it in?')).toBe(
      'Here is the direct answer.',
    );
  });
});

describe('rapport source contract', () => {
  const askTravis = source('src/components/react/AskTravis.tsx');
  const openai = source('src/lib/platform/openai.ts');
  const messageApi = source('src/pages/api/chat/message.ts');

  it('keeps account and discovery refusal state sticky for the browser session', () => {
    expect(askTravis).toContain("sessionStorage.setItem('mrx_account_prompt_closed', '1')");
    expect(askTravis).toContain("sessionStorage.getItem('mrx_discovery_declined') === '1'");
    expect(askTravis).toContain('discoveryDeclined: discoveryDeclined || declinedDiscovery');
  });

  it('enforces the owner-safe discovery, human review, and valuation prompt contract', () => {
    expect(openai).toContain('ask at most one useful short follow-up question');
    expect(openai).toContain('Never ask what the problem has cost the visitor');
    expect(openai).toContain('Never invent or calculate a personalized mineral value');
    expect(openai).toContain(
      'You may accurately repeat and discuss an amount the visitor or a record already supplied',
    );
    expect(openai).toContain('human MRX underwriter reviews');
    expect(openai).toContain('Never joke about bereavement');
  });

  it('repairs a multi-question model response with a useful one-question fallback', () => {
    expect(messageApi).toContain('if (questionCount(fullText) > 1)');
    expect(messageApi).toContain('fullText = fallbackAnswer(');
    expect(messageApi).toContain("type: 'message.replace'");
  });

  it('uses truthful conversational account and booking states', () => {
    expect(askTravis).toContain('No verification link was sent');
    expect(askTravis).toContain('result.suppressed');
    expect(askTravis).toContain("typeof result.appointmentId !== 'string'");
    expect(askTravis).toContain('Schedule a human underwriter call');
    expect(askTravis).not.toContain('Talk to a live underwriter');
  });

  it('preserves Clay for the first deferred value response without disabling later routing', () => {
    expect(askTravis).toContain('preserveCurrentPersona: preserveOpeningPersona || undefined');
    expect(messageApi).toContain("body.context?.preserveCurrentPersona ? '' : effectiveQuestion");
    expect(askTravis).toContain('setPreserveOpeningPersona(false)');
  });

  it('consumes a stale CTA intent when the name reply supplies a different substantive topic', () => {
    expect(
      askTravis.match(
        /setPendingPrompt\(''\);\n\s+setStep\('open'\);\n\s+return sendMessage\(text\);/g,
      ),
    ).toHaveLength(2);
  });
});
