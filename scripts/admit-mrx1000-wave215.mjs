#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '215';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD 2025-2026 Reappraisal Plan: Category G Parcel Counts by ISD';
process.env.MRX_PRIMARY_KEYWORD = 'Pecos CAD Category G parcel counts';
process.env.MRX_INLINE_KEYWORD = 'Pecos CAD Category G parcel counts';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
process.env.MRX_HERO_ALT =
  'A dark Pecos survey diorama appears beside the exact Article 287 title.';
process.env.MRX_INLINE_ALT =
  'Two bright overhead evidence trays appear above the exact Pecos CAD Category G parcel counts keyword.';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0835';
process.env.MRX_SELECTION_RANK = '287';
process.env.MRX_DECISION_ID = 'MRX1000-W215-SELECT-2026-08-31';
process.env.MRX_DECISION_PATH = 'docs/governance/mrx1000-wave215-selection-decision-2026-08-31.md';
process.env.MRX_REVIEWED_BY = 'mrx_compliance-continuous-wave215';
process.env.MRX_PRIOR_TITLE =
  'Pecos County, Texas Mineral Rights Value: Family Decision Guide Step By Step';
process.env.MRX_PRIOR_SLUG =
  'pecos-county-texas-mineral-rights-value-family-decision-guide-step-by-step';
process.env.MRX_PRIOR_SOURCE_HANDLE = 'factory-queue:MRX-AEO-06455';
process.env.MRX_SECONDARY_KEYWORDS_JSON = JSON.stringify([
  'Pecos CAD 2025-2026 Reappraisal Plan',
  'Pecos CAD Category G oil gas other minerals',
  'Pecos CAD estimated parcel counts by ISD',
]);
process.env.MRX_NEAREST_SAME_CLUSTER_SLUG =
  'culberson-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_CANNIBALIZATION_SCORE = '0.3125';
process.env.MRX_INLINE_VISUAL_VARIANT =
  'wave215-distinct-generated-low-oblique-pecos-survey-hero-and-bright-top-down-two-tray-evidence-workspace';
process.env.MRX_PILLAR = 'texas-mineral-rights';
process.env.MRX_PILLAR_URL = '/mineral-rights/texas/';
process.env.MRX_CLUSTER = 'texas-county-basin-local-intent';
process.env.MRX_FUNNEL_STAGE = 'consideration';
process.env.MRX_SEARCH_INTENT = 'local-informational';
process.env.MRX_ACTION_REASON =
  'The source is prepared for the exact release-10 build, but publication remains controlled by the signed batch, matching evidence, production deployment, and independent verification.';
process.env.MRX_RISK_REMEDIATION_JSON = JSON.stringify([
  'The original Pecos County family-decision identity is rejected because it has 0.7143 token-Jaccard similarity to the existing Crane County analogue and materially overlaps the repetitive county valuation corpus.',
  'The replacement owns only the official Pecos CAD 2025-2026 reappraisal-plan locator and physical page 37 Category G estimated parcel-count crosswalk by year and ISD.',
  'The 20,005 and 78,200 figures remain separate plan estimates for 2025 Buena Vista ISD and 2026 Fort Stockton ISD. They are not summed as a county total and are not converted into counts of owners, wells, leases, tracts, mineral interests, notices, certified-roll entries, tax bills, values, offers, transactions, completed work, or current results.',
  'The separate oil-and-gas-reserves appendix beginning on physical page 40 is not used to redefine physical page 37 units or scope.',
  'No owner, account, property, title, appraisal, notice, protest, certification, tax, value, legal, offer, buyer-ranking, or transaction conclusion is made.',
  'Answer-first structure, stable claim IDs, evidence labels, information gain, idempotent row ownership, claim-adjacent official citations, supported FAQs, semantic links, exact visible/schema entities, exact-title hero/share identity, distinct exact-keyword inline image, accessibility, build gates, and no ranking or citation guarantee apply under MRX1000-FACTORY-SEO-AEO-2026-08-29.',
]);

await import('./admit-mrx1000-wave82.mjs');
