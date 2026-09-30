import { describe, expect, it } from 'vitest';
import {
  GRAHAM_INVESTOR_QUESTIONS,
  GRAHAM_PROJECT_DOCUMENT_REQUEST,
  GRAHAM_PROJECT_PROVIDER_QUESTIONS,
  GRAHAM_SPECIFIC_PROJECT_QUESTIONS,
  applyGrahamCorrection,
  grahamKnownAnswers,
  grahamPreparationQuestions,
  grahamPreparationSummary,
  normalizeGrahamAnswer,
} from '../../src/lib/platform/graham';

describe('Graham appointment preparation contract', () => {
  it('preserves the exact seven project-provider questions and document request', () => {
    expect(GRAHAM_PROJECT_PROVIDER_QUESTIONS).toEqual([
      'Who is the operator?',
      'What formation is being drilled?',
      'What county and state is it in?',
      'How many wells are included or planned?',
      'What is the net revenue interest (NRI) being offered?',
      'Is the interest a leasehold assignment or wellbore-only?',
      'What is the planned frac size in pounds per foot?',
    ]);
    expect(GRAHAM_PROJECT_DOCUMENT_REQUEST).toBe(
      'If you have a project summary or supporting documents, please send those over too.',
    );
  });

  it('keeps each audience on its approved progressive question set', () => {
    expect(grahamPreparationQuestions('project-provider')).toEqual(
      GRAHAM_PROJECT_PROVIDER_QUESTIONS,
    );
    expect(grahamPreparationQuestions('investor')).toEqual(GRAHAM_INVESTOR_QUESTIONS);
    expect(grahamPreparationQuestions('specific-project')).toEqual(
      GRAHAM_SPECIFIC_PROJECT_QUESTIONS,
    );
  });

  it.each(['skip', 'unknown', 'not available yet', 'not applicable', 'N/A'])(
    'accepts “%s” without inventing an answer',
    (answer) => expect(normalizeGrahamAnswer(answer)).toBe(answer.toLowerCase()),
  );

  it('recognizes already supplied provider facts so they are not asked again', () => {
    const known = grahamKnownAnswers('project-provider', [
      'The operator is Acme Operating. The formation is Wolfcamp A.',
      'It is in Midland County, Texas. There are 4 wells planned.',
      'The NRI is 75%. This is a wellbore-only interest. Frac size is 2,500 pounds per foot.',
    ]);
    expect(known.map((entry) => entry.question)).toEqual(GRAHAM_PROJECT_PROVIDER_QUESTIONS);
  });

  it('labels every supplied answer as unverified human-review material', () => {
    const summary = grahamPreparationSummary('investor', [
      { question: GRAHAM_INVESTOR_QUESTIONS[0], answer: 'Producing wells' },
    ]);
    expect(summary).toContain('Visitor-supplied, unverified');
    expect(summary).not.toMatch(/eligible|accredited|approved|suitable/i);
  });

  it('preserves corrections to two different fields without exceeding seven provider answers', () => {
    const original = GRAHAM_PROJECT_PROVIDER_QUESTIONS.map((question, index) => ({
      question,
      answer: `original ${index + 1}`,
    }));
    const operatorCorrected = applyGrahamCorrection(
      original,
      'Correction: the operator is Beta Operating.',
    );
    const bothCorrected = applyGrahamCorrection(
      operatorCorrected,
      'Correction: the county and state are Reeves County, Texas.',
    );
    expect(bothCorrected).toHaveLength(7);
    expect(bothCorrected[0].answer).toContain('Beta Operating');
    expect(bothCorrected[2].answer).toContain('Reeves County, Texas');
  });
});
