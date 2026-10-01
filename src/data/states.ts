export interface StateGuide {
  slug: string;
  name: string;
  abbreviation: string;
  overview: string;
  regulator: { name: string; url: string };
  commonQuestions: string[];
  featuredResources?: Array<{ label: string; href: string }>;
}

const featuredResourcesByState: Partial<Record<string, Array<{ label: string; href: string }>>> = {
  oklahoma: [
    {
      label: 'How Do I Find an Oklahoma Pooling Order After Getting a Notice?',
      href: '/blog/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/',
    },
  ],
  'north-dakota': [
    {
      label: 'North Dakota Inherited Royalty Questions: Records and Ombudsman',
      href: '/blog/north-dakota-inherited-royalty-questions-records-and-ombudsman/',
    },
  ],
  pennsylvania: [
    {
      label: 'Can Pennsylvania DEP Production Data Verify My Royalty Check?',
      href: '/blog/can-pennsylvania-dep-production-data-verify-my-royalty-check/',
    },
  ],
  'west-virginia': [
    {
      label: 'How to Compare a West Virginia Oil and Gas Tax Account With a Mineral Buyer Letter',
      href: '/blog/how-to-compare-a-west-virginia-oil-and-gas-tax-account-with-a-mineral-buyer-letter/',
    },
  ],
  ohio: [
    {
      label: 'Where Can I Find Ohio Mineral Deeds and Leases Before a Title Review?',
      href: '/blog/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review/',
    },
  ],
};

export const stateGuides: StateGuide[] = [
  [
    'texas',
    'Texas',
    'TX',
    'Texas mineral interests span mature fields, active shale development, and wide variation in county records and lease history.',
    'Railroad Commission of Texas',
    'https://www.rrc.texas.gov/',
  ],
  [
    'new-mexico',
    'New Mexico',
    'NM',
    'New Mexico owners often need to connect county records with activity in the Permian and San Juan basins.',
    'New Mexico Oil Conservation Division',
    'https://www.emnrd.nm.gov/ocd/',
  ],
  [
    'oklahoma',
    'Oklahoma',
    'OK',
    'Oklahoma mineral questions frequently involve changing operators, pooling orders, and long ownership histories.',
    'Oklahoma Corporation Commission',
    'https://oklahoma.gov/occ.html',
  ],
  [
    'north-dakota',
    'North Dakota',
    'ND',
    'North Dakota owners often compare Bakken production history, spacing, royalty statements, and current development timing.',
    'North Dakota Department of Mineral Resources',
    'https://www.dmr.nd.gov/',
  ],
  [
    'colorado',
    'Colorado',
    'CO',
    'Colorado mineral questions can involve local development rules, ownership records, and changing operator activity.',
    'Colorado Energy and Carbon Management Commission',
    'https://ecmc.state.co.us/',
  ],
  [
    'wyoming',
    'Wyoming',
    'WY',
    'Wyoming ownership and production questions may span conventional fields, federal acreage, and newer development programs.',
    'Wyoming Oil and Gas Conservation Commission',
    'https://wogcc.wyo.gov/',
  ],
  [
    'pennsylvania',
    'Pennsylvania',
    'PA',
    'Pennsylvania owners commonly ask about Marcellus and Utica royalty statements, deductions, leases, and inherited interests.',
    'Pennsylvania Department of Environmental Protection',
    'https://www.pa.gov/agencies/dep.html',
  ],
  [
    'west-virginia',
    'West Virginia',
    'WV',
    'West Virginia mineral interests often have long title histories and complex relationships between surface and subsurface ownership.',
    'West Virginia Office of Oil and Gas',
    'https://dep.wv.gov/oil-and-gas/',
  ],
  [
    'ohio',
    'Ohio',
    'OH',
    'Ohio owners often evaluate Utica activity, division orders, lease terms, and royalty-statement changes.',
    'Ohio Department of Natural Resources',
    'https://ohiodnr.gov/',
  ],
  [
    'louisiana',
    'Louisiana',
    'LA',
    'Louisiana owners may need to connect parish records, unit information, and production activity before comparing an offer.',
    'Louisiana Department of Energy and Natural Resources',
    'https://www.dnr.louisiana.gov/',
  ],
].map(([slug, name, abbreviation, overview, regulatorName, regulatorUrl]) => ({
  slug,
  name,
  abbreviation,
  overview,
  regulator: { name: regulatorName, url: regulatorUrl },
  featuredResources: featuredResourcesByState[slug],
  commonQuestions: [
    `What information helps explain a ${name} mineral-rights offer?`,
    `Where can an owner verify wells and production in ${name}?`,
    `Which documents matter when ${name} mineral rights were inherited?`,
  ],
}));

export function getStateGuide(slug: string) {
  return stateGuides.find((state) => state.slug === slug);
}
