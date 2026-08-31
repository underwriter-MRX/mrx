#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '243';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-january-1-snapshot-later-information';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: January 1 Snapshot and Later Information';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral appraisal January 1 snapshot';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral appraisal January 1 snapshot';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-appraisal-january-1-snapshot-and-later-information';
process.env.MRX_HERO_ALT = 'An appraisal evidence desk sits beside the exact Article 315 title.';
process.env.MRX_INLINE_ALT =
  'A top-down evidence-timing matrix appears below the exact Winkler CAD keyword.';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0868';
process.env.MRX_SELECTION_RANK = '315';
process.env.MRX_DECISION_ID = 'MRX1000-W243-SELECT-2026-08-31';
process.env.MRX_DECISION_PATH = 'docs/governance/mrx1000-wave243-selection-decision-2026-08-31.md';
process.env.MRX_REVIEWED_BY = 'mrx_compliance-continuous-wave243';
process.env.MRX_PRIOR_TITLE =
  'Winkler County, Texas Mineral Rights Value: Market Update For Mineral Owners';
process.env.MRX_PRIOR_SLUG =
  'winkler-county-texas-mineral-rights-value-market-update-for-mineral-owners';
process.env.MRX_PRIOR_SOURCE_HANDLE = 'factory-queue:MRX-AEO-06751';
process.env.MRX_SECONDARY_KEYWORDS_JSON = JSON.stringify([
  'Winkler CAD mineral appraisal effective date',
  'Winkler CAD later appraisal information',
  'Winkler CAD 2025-2026 mineral plan date',
]);
process.env.MRX_NEAREST_SAME_CLUSTER_SLUG =
  'midland-cad-2025-2026-mineral-work-calendar-january-1-snapshot-july-certification';
process.env.MRX_CANNIBALIZATION_SCORE = '0.3889';
process.env.MRX_INLINE_VISUAL_VARIANT =
  'wave243-distinct-generated-dark-low-three-quarter-appraisal-evidence-desk-hero-and-bright-strict-top-down-evidence-timing-matrix-inline';
process.env.MRX_PILLAR = 'texas-mineral-rights';
process.env.MRX_PILLAR_URL = '/mineral-rights/texas/';
process.env.MRX_CLUSTER = 'texas-county-basin-local-intent';
process.env.MRX_FUNNEL_STAGE = 'consideration';
process.env.MRX_SEARCH_INTENT = 'informational';
process.env.MRX_ACTION_REASON =
  'The exact Article 315 release is prepared locally, but publication remains controlled by signed receipts, matching evidence, production deployment, and independent verification.';
process.env.MRX_RISK_REMEDIATION_JSON = JSON.stringify([
  'The generic Winkler County market-update identity is rejected because it collides with the admitted valuation and county-market corpus and is unsupported by the controlled official plan.',
  'The replacement owns only the January 1 effective-date, later appraisal and report date, and later-information confirmation boundary on whole-PDF page 20, printed page 18, of the July 2024 Winkler contractor plan for the 2025-2026 plan period.',
  'The article does not provide a valuation, market update, account-specific date decision, title determination, deadline, protest strategy, legal or tax interpretation, professional-standard opinion, or owner-specific result.',
  'Answer-first structure, stable claim IDs, source age, complete-file identity, claim-adjacent official citations, semantic links, exact visible and schema entities, exact-title hero/share identity, distinct exact-keyword inline image, accessibility, build gates, and no ranking or citation guarantee apply.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language remain mandatory.',
]);

await import('./admit-mrx1000-wave82.mjs');
