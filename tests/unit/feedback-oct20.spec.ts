import { readFileSync } from 'node:fs';
import { describe, expect, it, vi } from 'vitest';
import { parseUSLocationInput, resolveUSGeography } from '../../src/lib/platform/geography';
import { compareOffer } from '../../src/lib/offer-comparison';
import { communicationInstructions } from '../../src/lib/platform/communication';
describe('October 20 feedback synthetic regression', () => {
  it.each([
    'Dawson County tx',
    'Dawson County TX',
    'Dawson County, Texas',
    'My minerals are in Dawson County tx',
  ])('explicit state overrides prior Nebraska: %s', (text) => {
    expect(parseUSLocationInput(text, 'NE')).toMatchObject({
      county: 'Dawson',
      state: { code: 'TX' },
    });
  });
  it('keeps a stated property state separate from residence in the same message', () => {
    expect(parseUSLocationInput('I live in Nebraska; Dawson County tx')).toMatchObject({
      county: 'Dawson',
      state: { code: 'TX' },
    });
  });
  it('handles corrections and unknown state without guessing', () => {
    expect(parseUSLocationInput('Dawson County ne', 'TX').state?.code).toBe('NE');
    expect(parseUSLocationInput('County: Dawson', 'TX').state?.code).toBe('TX');
    expect(parseUSLocationInput('County: Dawson').state).toBeUndefined();
  });
  const offer = {
    interestType: 'mineral' as const,
    total: '12000',
    acres: '6',
    property: 'Yes',
    adjustments: 'none stated',
    diligence: 'unknown',
    closing: 'unknown',
    effective: 'unknown',
    notes: 'none stated',
  };
  it('reviews one offer without requiring NRI/NRA', () => {
    expect(compareOffer(offer).perAcre).toBe(2000);
    expect(compareOffer(offer).questions.join(' ')).not.toMatch(/NRI|NRA|second offer/);
  });
  it('keeps acreage and NRI separate', () => {
    expect(
      compareOffer({ ...offer, nri: '0.125', nriUnit: 'decimal', nra: '12', nraBasis: '1/8 basis' })
        .perAcre,
    ).toBe(2000);
    expect(compareOffer({ ...offer, acres: '', nra: '12' }).perAcre).toBeNull();
    expect(
      compareOffer({ ...offer, nri: '12.5', nriUnit: 'decimal' }).questions.join(' '),
    ).toContain('Check NRI');
    expect(
      compareOffer({ ...offer, nri: '12.5', nriUnit: 'percent' }).questions.join(' '),
    ).not.toContain('Check NRI');
    expect(compareOffer({ ...offer, nra: '12' }).questions.join(' ')).toContain('convention');
  });
  it.each(['travis', 'connor', 'clay', 'owen', 'laurel', 'elena', 'graham'] as const)(
    'loads continuity/confidentiality instructions for %s',
    (persona) => {
      const instructions = communicationInstructions(persona);
      for (const text of [
        'Reuse known answers',
        'one-question maximum',
        'do not upload or share documents subject to confidentiality restrictions',
        'Do not require contact details',
        'rather than sending the visitor between personas',
        'does not buy mineral rights',
      ])
        expect(instructions).toContain(text);
    },
  );
});

it('scopes the Dawson provider query to Texas FIPS despite prior Nebraska', async () => {
  const urls: string[] = [];
  const fetcher = vi.fn(async (url: unknown) => {
    urls.push(decodeURIComponent(String(url)));
    return new Response(
      JSON.stringify({
        features: [
          {
            attributes: {
              GEOID: '48115',
              STATE: '48',
              BASENAME: 'Dawson',
              INTPTLAT: '32.74',
              INTPTLON: '-101.95',
            },
          },
        ],
      }),
      { status: 200 },
    );
  });
  const result = await resolveUSGeography('Dawson County tx', {
    priorState: 'NE',
    fetcher: fetcher as typeof fetch,
  });
  expect(urls[0]).toContain("STATE='48'");
  expect(result?.stateCode).toBe('TX');
});

it('shows confidentiality caution at customer upload entry points', () => {
  for (const component of ['AccountHub', 'AskTravis']) {
    const source = readFileSync(
      new URL(`../../src/components/react/${component}.tsx`, import.meta.url),
      'utf8',
    );
    expect(source).toContain(
      'Do not upload or share documents subject to confidentiality restrictions.',
    );
  }
});
