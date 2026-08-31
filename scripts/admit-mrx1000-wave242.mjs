#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '242';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-reports-recipients-vs-intended-users';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Reports: Recipients vs. Intended Users';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral report intended users';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral report intended users';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-reports-recipients-vs-intended-users';
process.env.MRX_HERO_ALT =
  'A dark mineral-report folio and recipient cards sit beside the exact Article 314 title.';
process.env.MRX_INLINE_ALT =
  'A top-down report-routing matrix appears below the exact Winkler CAD keyword.';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0867';
process.env.MRX_SELECTION_RANK = '314';
process.env.MRX_DECISION_ID = 'MRX1000-W242-SELECT-2026-08-31';
process.env.MRX_DECISION_PATH = 'docs/governance/mrx1000-wave242-selection-decision-2026-08-31.md';
process.env.MRX_REVIEWED_BY = 'mrx_compliance-continuous-wave242';
process.env.MRX_PRIOR_TITLE =
  'Winkler County, Texas Mineral Rights Value: Guide For Mineral Owners';
process.env.MRX_PRIOR_SLUG =
  'winkler-county-texas-mineral-rights-value-guide-for-mineral-owners';
process.env.MRX_PRIOR_SOURCE_HANDLE = 'factory-queue:MRX-AEO-06741';
process.env.MRX_SECONDARY_KEYWORDS_JSON = JSON.stringify([
  'Winkler CAD mineral report recipients',
  'Winkler CAD open records report users',
  'Winkler CAD Pritchard Abbott report scope',
]);
process.env.MRX_NEAREST_SAME_CLUSTER_SLUG =
  'winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-taxpayer-records';
process.env.MRX_CANNIBALIZATION_SCORE = '0.2632';
process.env.MRX_INLINE_VISUAL_VARIANT =
  'wave242-distinct-generated-dark-low-three-quarter-report-folio-recipient-cards-hero-and-bright-strict-top-down-recipient-boundary-routing-matrix-inline';
process.env.MRX_PILLAR = 'texas-mineral-rights';
process.env.MRX_PILLAR_URL = '/mineral-rights/texas/';
process.env.MRX_CLUSTER = 'texas-county-basin-local-intent';
process.env.MRX_FUNNEL_STAGE = 'consideration';
process.env.MRX_SEARCH_INTENT = 'informational';
process.env.MRX_ACTION_REASON =
  'The exact Article 314 release is prepared locally, but publication remains controlled by signed receipts, matching evidence, production deployment, and independent verification.';
process.env.MRX_RISK_REMEDIATION_JSON = JSON.stringify([
  'The generic Winkler County mineral-rights-value guide identity is rejected because it materially collides with the admitted valuation, county-guide, local-buyer, and planned Winkler corpus.',
  'The replacement owns only the recipient-versus-intended-user distinction, potential-other-user categories, and Pritchard-and-Abbott service-scope exception stated on whole-PDF page 19, printed page 17, of the July 2024 Winkler contractor plan for the 2025-2026 plan period.',
  'The article does not make an assignment-specific intended-user determination, interpret professional appraisal standards, validate a report or disclosure, decide who appraised a property, or infer title, taxability, private value, report validity, a protest outcome, or legal consequences.',
  'Answer-first structure, stable claim IDs, source age, complete-file identity, claim-adjacent official citations, semantic links, exact visible and schema entities, exact-title hero/share identity, distinct exact-keyword inline image, accessibility, build gates, and no ranking or citation guarantee apply.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language remain mandatory.',
]);

await import('./admit-mrx1000-wave82.mjs');
