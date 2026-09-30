export type GrahamInquiryType = 'investor' | 'project-provider' | 'specific-project';

export const GRAHAM_PROJECT_PROVIDER_QUESTIONS = [
  'Who is the operator?',
  'What formation is being drilled?',
  'What county and state is it in?',
  'How many wells are included or planned?',
  'What is the net revenue interest (NRI) being offered?',
  'Is the interest a leasehold assignment or wellbore-only?',
  'What is the planned frac size in pounds per foot?',
] as const;

export const GRAHAM_PROJECT_DOCUMENT_REQUEST =
  'If you have a project summary or supporting documents, please send those over too.';

export const GRAHAM_INVESTOR_QUESTIONS = [
  'Which opportunity or investment interests would you like to discuss?',
  'What are the main questions you want the underwriter to address?',
  'What prior oil and gas investment experience, if any, would you like the underwriter to know about?',
  'What objectives would you like to discuss?',
  'What timing are you considering?',
  'Optionally, is there a broad investment range you want the underwriter to understand? You can skip this.',
] as const;

export const GRAHAM_SPECIFIC_PROJECT_QUESTIONS = [
  'What is the project name or reference?',
  'What would you like to understand about that project?',
] as const;

export const GRAHAM_PREPARATION_DISCLOSURE =
  'These optional answers help an MRX underwriter prepare. They are not a suitability, accreditation, eligibility, approval, valuation, or funding decision.';

export const GRAHAM_ALLOWED_UNKNOWN =
  /^(?:skip|unknown|not available(?: yet)?|not applicable|n\/?a|pass|rather not say)$/i;

export function grahamPreparationQuestions(inquiryType: GrahamInquiryType) {
  if (inquiryType === 'project-provider') return [...GRAHAM_PROJECT_PROVIDER_QUESTIONS];
  if (inquiryType === 'specific-project') return [...GRAHAM_SPECIFIC_PROJECT_QUESTIONS];
  return [...GRAHAM_INVESTOR_QUESTIONS];
}

const providerAnswerSignals = [
  /\boperator\s*(?:is|:|=)/i,
  /\bformation\s*(?:is|:|=)|\b(?:target|drilling)\s+formation\b/i,
  /\bcounty\b[^.!?]{0,80}\b(?:state|texas|oklahoma|new mexico|north dakota|colorado|wyoming|louisiana)\b/i,
  /\b(?:wells?|well count)\s*(?:included|planned|:|=|is|are)/i,
  /\b(?:net revenue interest|nri)\s*(?:is|:|=|of)?/i,
  /\b(?:leasehold assignment|wellbore-only|wellbore only)\b/i,
  /\b(?:frac size|pounds per foot|lb\/ft)\b/i,
] as const;

export function grahamKnownAnswers(inquiryType: GrahamInquiryType, history: string[]) {
  if (inquiryType !== 'project-provider') return [] as Array<{ question: string; answer: string }>;
  const sentences = history
    .flatMap((text) => text.split(/(?<=[.!?])\s+|\n+/))
    .map((text) => normalizeGrahamAnswer(text))
    .filter(Boolean);
  return GRAHAM_PROJECT_PROVIDER_QUESTIONS.flatMap((question, index) => {
    const answer = [...sentences]
      .reverse()
      .find((sentence) => providerAnswerSignals[index].test(sentence));
    return answer ? [{ question, answer }] : [];
  });
}

export function normalizeGrahamAnswer(value: string) {
  const clean = value
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (GRAHAM_ALLOWED_UNKNOWN.test(clean)) return clean.toLowerCase();
  return clean.slice(0, 1_000);
}

const correctionTargets: Array<[RegExp, string]> = [
  [/\boperator\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[0]],
  [/\bformation\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[1]],
  [/\bcounty|\bstate\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[2]],
  [/\bwells?|well count\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[3]],
  [/\bnet revenue interest|\bnri\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[4]],
  [/\bleasehold|wellbore\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[5]],
  [/\bfrac|pounds per foot|lb\/ft\b/i, GRAHAM_PROJECT_PROVIDER_QUESTIONS[6]],
  [/\bopportunity|interests?\b/i, GRAHAM_INVESTOR_QUESTIONS[0]],
  [/\bmain questions?|address\b/i, GRAHAM_INVESTOR_QUESTIONS[1]],
  [/\bexperience\b/i, GRAHAM_INVESTOR_QUESTIONS[2]],
  [/\bobjectives?\b/i, GRAHAM_INVESTOR_QUESTIONS[3]],
  [/\btiming|timeline\b/i, GRAHAM_INVESTOR_QUESTIONS[4]],
  [/\brange|budget\b/i, GRAHAM_INVESTOR_QUESTIONS[5]],
  [/\bproject name|reference\b/i, GRAHAM_SPECIFIC_PROJECT_QUESTIONS[0]],
  [/\bunderstand|question\b/i, GRAHAM_SPECIFIC_PROJECT_QUESTIONS[1]],
];

export function applyGrahamCorrection(
  answers: Array<{ question: string; answer: string }>,
  correction: string,
) {
  const normalized = normalizeGrahamAnswer(correction);
  const target = correctionTargets.find(
    ([pattern, question]) =>
      pattern.test(normalized) && answers.some((answer) => answer.question === question),
  )?.[1];
  if (target)
    return answers.map((answer) =>
      answer.question === target ? { ...answer, answer: normalized } : answer,
    );
  return [
    ...answers.filter((answer) => answer.question !== 'Visitor correction to preparation summary:'),
    { question: 'Visitor correction to preparation summary:', answer: normalized },
  ];
}

export function grahamPreparationSummary(
  inquiryType: GrahamInquiryType,
  answers: Array<{ question: string; answer: string }>,
) {
  const label =
    inquiryType === 'project-provider'
      ? 'Project provider'
      : inquiryType === 'specific-project'
        ? 'Specific project inquiry'
        : 'Prospective investor';
  return [
    `Inquiry type: ${label}`,
    'Status: Visitor-supplied, unverified preparation information for human review.',
    ...answers.map(({ question, answer }) => `${question} ${answer || 'unknown'}`),
  ].join('\n');
}
