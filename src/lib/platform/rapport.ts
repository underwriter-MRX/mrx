export type OpeningPersona = 'clay' | 'travis' | 'elena';

export type OwnerGoal =
  | 'compare-offer'
  | 'understand-value'
  | 'sell-hold'
  | 'ownership-records'
  | 'royalty-production'
  | 'document-terms'
  | 'human-call'
  | 'other';

const bookingIntent =
  /\b(?:book|schedule|appointment|call me|talk (?:to|with) (?:a |an )?(?:human|underwriter|someone)|speak (?:to|with) (?:a |an )?(?:human|underwriter|someone))\b/i;
const valueIntent = /\b(?:offer|value|worth|price|sell|selling|hold|buyer)\b/i;
const nameRefusal =
  /^(?:skip|pass|rather not|i(?:'d| would) rather not(?: say)?|i do not want to share my name|i don'?t want to share my name|anonymous|no name|not sharing|prefer not to say|just answer(?: my question)?|no thanks?)\.?$/i;
const discoveryRefusal =
  /\b(?:just answer|stop asking|don'?t ask|do not ask|not comfortable|skip (?:this|the questions)|never mind)\b/i;

export function isBookingIntent(value: string) {
  const text = value.trim();
  if (
    /\b(?:do not|don'?t|not|no longer|never)\s+(?:want to\s+|ready to\s+)?(?:book|schedule|call|have an appointment)\b/i.test(
      text,
    ) ||
    /\bdo not want an appointment\b/i.test(text)
  )
    return false;
  return bookingIntent.test(text);
}

export function isAccountIntent(value: string) {
  if (isAccountRefusal(value)) return false;
  return /\b(?:create|open|start|set up|signup|sign up)\b[^.!?]{0,30}\b(?:free )?(?:owner )?account\b/i.test(
    value,
  );
}

export function isAccountRefusal(value: string) {
  return /\b(?:do not|don'?t|not|no longer|never)\s+(?:want to\s+|ready to\s+)?(?:create|open|start|set up|signup|sign up)(?:\s+(?:a|an|the))?\s+(?:free )?(?:owner )?account\b/i.test(
    value,
  );
}

export function openingPersonaFor(prompt = '', booking = false): OpeningPersona {
  if (booking || isBookingIntent(prompt)) return 'elena';
  if (valueIntent.test(prompt)) return 'clay';
  return 'travis';
}

export function openingGreeting(persona: Exclude<OpeningPersona, 'elena'>) {
  const name = persona === 'clay' ? 'Clay' : 'Travis';
  return `Hi, I’m ${name}, a fictional MRX AI guide. What’s your first name?`;
}

export function isNameRefusal(value: string) {
  return nameRefusal.test(value.trim());
}

export function isSubstantiveNameReply(value: string) {
  const text = value.trim();
  if (!text || isNameRefusal(text)) return false;
  return (
    /\?/.test(text) ||
    /\b(?:mineral|rights?|offer|value|worth|royalt\w*|lease|deed|division order|inherit\w*|sell\w*|buyer|well|production|tax|contract|county|acre|title)\b/i.test(
      text,
    )
  );
}

export function firstNameFromReply(value: string) {
  const text = value.trim();
  const direct =
    text.match(/^(?:hi,?\s*)?([a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'’-]{0,79})[.!]?$/i)?.[1] ??
    text.match(
      /^(?:my name is|i am|i'm|call me)\s+([a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ'’-]{0,79})(?=\s*(?:[,.!]|\band\b|$))/i,
    )?.[1];
  if (!direct) return '';
  return direct.charAt(0).toUpperCase() + direct.slice(1).toLowerCase();
}

export function goalFromMessage(value: string): OwnerGoal | null {
  const text = value.toLowerCase();
  if (isBookingIntent(text)) return 'human-call';
  if (/\boffer|buyer|bid\b/.test(text)) return 'compare-offer';
  if (/\bvalue|worth|valuation|price\b/.test(text)) return 'understand-value';
  if (/\bsell|selling|hold\b/.test(text)) return 'sell-hold';
  if (/\bdeed|probate|inherit|ownership|county record|division order|title\b/.test(text))
    return 'ownership-records';
  if (/\broyalt|production|well|operator\b/.test(text)) return 'royalty-production';
  if (/\bcontract|clause|agreement|lease|document|terms\b/.test(text)) return 'document-terms';
  return null;
}

export function discoveryWasDeclined(value: string) {
  return discoveryRefusal.test(value);
}

export function accountInvitationReady(args: {
  goal: OwnerGoal | null;
  meaningfulExchanges: number;
  authenticated: boolean;
  dismissed: boolean;
}) {
  return Boolean(
    args.goal && args.meaningfulExchanges >= 2 && !args.authenticated && !args.dismissed,
  );
}

export function countMeaningfulExchanges(
  messages: Array<{ role: 'user' | 'assistant'; content: string }>,
) {
  let pendingUser = false;
  let count = 0;
  for (const message of messages) {
    if (message.role === 'user') {
      const text = message.content.trim();
      pendingUser = isMeaningfulUserTurn(text);
    } else if (pendingUser && message.content.trim()) {
      count += 1;
      pendingUser = false;
    }
  }
  return count;
}

export function isMeaningfulUserTurn(value: string) {
  const text = value.trim();
  return Boolean(
    text &&
    !isNameRefusal(text) &&
    !firstNameFromReply(text) &&
    !/^\S+@\S+\.\S+$/.test(text) &&
    text.replace(/\D/g, '').length < 7 &&
    !/^(?:yes|no|skip|pass|email it|text it|email and text|never mind|eastern|central|mountain|pacific|alaska|hawaii|arizona)\b/i.test(
      text,
    ) &&
    !/^.+(?:time|appointment details|updates)\.?$/i.test(text),
  );
}

export function questionCount(value: string) {
  return value.match(/\?/g)?.length ?? 0;
}

export function withoutFollowupQuestion(value: string) {
  const direct = value
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !sentence.includes('?'))
    .join(' ')
    .trim();
  return direct || 'I’ll keep this direct and won’t continue the discovery questions.';
}
