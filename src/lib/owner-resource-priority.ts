import type { ArticlePillar } from './astro/content';

/** Editorial navigation order only. Publication, article identity and URLs stay authoritative. */
export const OWNER_STARTER_SLUGS = [
  'how-to-know-if-your-mineral-rights-offer-is-fair',
  'how-are-mineral-rights-valued',
  'how-the-step-by-step-process-of-selling-texas-mineral-rights-works',
  'what-to-do-when-you-have-competing-offers-on-your-mineral-rights-a-guide',
  'what-documents-do-you-need-to-sell-mineral-rights-in-texas',
  'understand-the-value-of-your-inherited-mineral-rights',
] as const;

/** Pillar-only decision journeys. Do not add these slugs to the global starter list. */
export const PILLAR_OWNER_STARTER_SLUGS: Partial<Record<ArticlePillar, readonly string[]>> = {
  'texas-mineral-rights': [
    'what-are-mineral-rights-a-complete-guide-for-texas-landowners',
    'how-to-determine-the-value-of-texas-mineral-rights',
    'texas-railroad-commission-how-to-use-public-records-to-understand-your-mineral-rights',
  ],
  'mineral-rights-value': [
    'how-are-mineral-rights-valued',
    'converting-monthly-royalty-history-into-a-valuation-baseline',
    'comparable-mineral-sales-what-makes-a-transaction-relevant',
    'what-is-a-net-royalty-acre',
    'how-texas-mineral-rights-are-valued-producing-vs-non-producing-interests',
  ],
};

function normalizedSlug(slug: string): string {
  return slug.replace(/\.mdx?$/, '');
}

export function ownerResourcePriority(slug: string): number {
  const index = (OWNER_STARTER_SLUGS as readonly string[]).indexOf(normalizedSlug(slug));
  return index < 0 ? OWNER_STARTER_SLUGS.length : index;
}

export function ownerResourcePriorityForPillar(pillarId: ArticlePillar, slug: string): number {
  const pillarStarters = PILLAR_OWNER_STARTER_SLUGS[pillarId];
  if (!pillarStarters) return ownerResourcePriority(slug);

  const pillarIndex = pillarStarters.indexOf(normalizedSlug(slug));
  if (pillarIndex >= 0) return pillarIndex;

  // Keep the unchanged global starter order as the fallback after this
  // pillar's decision journey; all non-starters remain tied for later sorts.
  return pillarStarters.length + ownerResourcePriority(slug);
}
