#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '246';
process.env.MRX_ARTICLE_SLUG =
  'texas-recorded-mineral-documents-instrument-number-volume-page-certified-copy-status';
process.env.MRX_ARTICLE_TITLE =
  'Texas Recorded Mineral Documents: Instrument Number, Volume/Page, and Certified-Copy Status';
process.env.MRX_PRIMARY_KEYWORD = 'Texas recorded mineral document locator fields';
process.env.MRX_INLINE_KEYWORD = 'Texas recorded mineral document locator fields';
process.env.MRX_HERO_FILENAME =
  'texas-recorded-mineral-documents-instrument-number-volume-page-and-certified-copy-status';
process.env.MRX_HERO_ALT =
  'A county-records desk and two copy treatments appear beside the exact Article 318 title.';
process.env.MRX_INLINE_ALT =
  'A top-down five-field record-control matrix appears below the exact Texas locator-field keyword.';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0891';
process.env.MRX_SELECTION_RANK = '318';
process.env.MRX_DECISION_ID = 'MRX1000-W246-SELECT-2026-08-31';
process.env.MRX_DECISION_PATH =
  'docs/governance/mrx1000-wave246-selection-decision-2026-08-31.md';
process.env.MRX_REVIEWED_BY = 'mrx_compliance-continuous-wave246';
process.env.MRX_PRIOR_TITLE = 'Cash For Mineral Rights: Documents Before You Sell';
process.env.MRX_PRIOR_SLUG = 'cash-for-mineral-rights-documents-before-you-sell';
process.env.MRX_PRIOR_SOURCE_HANDLE = 'factory-queue:MRX-AEO-00560';
process.env.MRX_SECONDARY_KEYWORDS_JSON = JSON.stringify([
  'Texas county clerk instrument number',
  'Texas volume and page document locator',
  'Texas certified copy status',
]);
process.env.MRX_NEAREST_SAME_CLUSTER_SLUG =
  'what-documents-do-you-need-to-sell-mineral-rights-in-texas';
process.env.MRX_CANNIBALIZATION_SCORE = '0.2143';
process.env.MRX_INLINE_VISUAL_VARIANT =
  'wave246-distinct-generated-dark-low-three-quarter-records-desk-hero-and-bright-strict-top-down-five-field-record-control-matrix-inline';
process.env.MRX_PILLAR = 'title-lease-ownership';
process.env.MRX_PILLAR_URL = '/learning-center/title-lease-ownership/';
process.env.MRX_CLUSTER = 'title-lease-ownership-documents';
process.env.MRX_FUNNEL_STAGE = 'education';
process.env.MRX_SEARCH_INTENT = 'informational';
process.env.MRX_ACTION_REASON =
  'The exact Article 318 release is prepared locally, but publication remains controlled by signed receipts, matching evidence, production deployment, and independent verification.';
process.env.MRX_RISK_REMEDIATION_JSON = JSON.stringify([
  'The factory planning identity is rejected because it materially overlaps the existing documents-needed-to-sell, sale-package-index, redaction, and recorded-copy-retrieval corpus.',
  'The replacement owns only a source-preserving five-field record-control job for an already-found recorded instrument: county, instrument or county-clerk file number, volume/page or film code when present, working-copy status, and county-clerk certification status.',
  'The article does not provide a general sale-document checklist, package index, redaction workflow, retrieval walkthrough, ownership proof, title opinion, legal-sufficiency decision, or claim that certification proves current ownership.',
  'Answer-first structure, stable claim IDs, source age, complete-file identity, exact page and section locators, claim-adjacent official citations, semantic links, exact visible and schema entities, exact-title hero/share identity, distinct exact-keyword inline image, accessibility, build gates, and no ranking or citation guarantee apply.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language remain mandatory.',
]);

await import('./admit-mrx1000-wave82.mjs');
