import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  OWNER_STARTER_SLUGS,
  PILLAR_OWNER_STARTER_SLUGS,
  ownerResourcePriority,
  ownerResourcePriorityForPillar,
} from '../../src/lib/owner-resource-priority';

describe('owner resource curation', () => {
  it('orders owner decisions before specialist records without removing either', () => {
    const slugs = ['technical-worksheet', OWNER_STARTER_SLUGS[1], OWNER_STARTER_SLUGS[0]];
    const sorted = [...slugs].sort((a, b) => ownerResourcePriority(a) - ownerResourcePriority(b));
    expect(sorted).toEqual([OWNER_STARTER_SLUGS[0], OWNER_STARTER_SLUGS[1], 'technical-worksheet']);
    expect(ownerResourcePriority(OWNER_STARTER_SLUGS[0] + '.mdx')).toBe(0);
    expect(new Set(OWNER_STARTER_SLUGS).size).toBe(OWNER_STARTER_SLUGS.length);
  });

  it('uses the five published valuation guides as a pillar-only decision journey', () => {
    const valuation = PILLAR_OWNER_STARTER_SLUGS['mineral-rights-value']!;
    expect(valuation).toEqual([
      'how-are-mineral-rights-valued',
      'converting-monthly-royalty-history-into-a-valuation-baseline',
      'comparable-mineral-sales-what-makes-a-transaction-relevant',
      'what-is-a-net-royalty-acre',
      'how-texas-mineral-rights-are-valued-producing-vs-non-producing-interests',
    ]);
    expect(new Set(valuation).size).toBe(valuation.length);

    const input = [
      'technical-worksheet',
      valuation[4],
      valuation[2],
      valuation[0],
      valuation[3],
      valuation[1],
    ];
    const sorted = [...input].sort(
      (a, b) =>
        ownerResourcePriorityForPillar('mineral-rights-value', a) -
        ownerResourcePriorityForPillar('mineral-rights-value', b),
    );
    expect(sorted).toEqual([...valuation, 'technical-worksheet']);
    expect(sorted).toHaveLength(input.length);
    expect(new Set(sorted).size).toBe(input.length);
    expect(ownerResourcePriorityForPillar('mineral-rights-value', `${valuation[0]}.mdx`)).toBe(0);
  });

  it('preserves the unchanged global starter behavior for every other pillar', () => {
    for (const slug of OWNER_STARTER_SLUGS) {
      expect(ownerResourcePriorityForPillar('offer-review', slug)).toBe(
        ownerResourcePriority(slug),
      );
    }
  });

  it('pins the bounded citation and contextual-link additions', () => {
    const valueHub = readFileSync(
      join(process.cwd(), 'src/pages/mineral-rights-value.astro'),
      'utf8',
    );
    expect(valueHub).toContain(
      'https://www.naro-us.org/learn/top-10-mineral-owner-questions/mineral-rights-valuation-guide',
    );
    expect(valueHub).toContain('not an independent appraisal');

    const royaltyHistory = readFileSync(
      join(
        process.cwd(),
        'src/content/posts/converting-monthly-royalty-history-into-a-valuation-baseline.mdx',
      ),
      'utf8',
    );
    expect(royaltyHistory).toContain('[mineral rights value hub](/mineral-rights-value/)');
    expect(royaltyHistory).toContain(
      '[mineral-rights offer comparison worksheet](/mineral-rights-offer-comparison/)',
    );

    const netRoyaltyAcre = readFileSync(
      join(process.cwd(), 'src/content/posts/what-is-a-net-royalty-acre.mdx'),
      'utf8',
    );
    expect(netRoyaltyAcre).toContain(
      '[mineral-rights offer comparison worksheet](/mineral-rights-offer-comparison/)',
    );
  });
});
