#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '233';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2024-category-g-table-g1-g1c-g-item-value-reconciliation';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2024 Category G Table: G1, G1C, and G* Item and Value Reconciliation';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD 2024 Category G table';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD 2024 Category G table';
process.env.MRX_HERO_FILENAME =
  'upton-cad-2024-category-g-table-g1-g1c-and-g-item-and-value-reconciliation';
process.env.MRX_HERO_ALT =
  'A navy report binder and adding machine appear beside the exact Article 305 title.';
process.env.MRX_INLINE_ALT =
  'A top-down three-row reconciliation worksheet appears above the exact Upton CAD 2024 Category G table keyword.';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0853';
process.env.MRX_SELECTION_RANK = '305';
process.env.MRX_DECISION_ID = 'MRX1000-W233-SELECT-2026-08-31';
process.env.MRX_DECISION_PATH = 'docs/governance/mrx1000-wave233-selection-decision-2026-08-31.md';
process.env.MRX_REVIEWED_BY = 'mrx_compliance-continuous-wave233';
process.env.MRX_PRIOR_TITLE =
  'Upton County, Texas Mineral Rights Value: Market Update For Mineral Owners';
process.env.MRX_PRIOR_SLUG =
  'upton-county-texas-mineral-rights-value-market-update-for-mineral-owners';
process.env.MRX_PRIOR_SOURCE_HANDLE = 'factory-queue:MRX-AEO-06851';
process.env.MRX_SECONDARY_KEYWORDS_JSON = JSON.stringify([
  'Upton CAD G1 G1C G subtotal',
  'Upton CAD 2024 annual report mineral table',
  'Upton CAD Total Mineral Market Value',
]);
process.env.MRX_NEAREST_SAME_CLUSTER_SLUG =
  'karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk';
process.env.MRX_CANNIBALIZATION_SCORE = '0.3158';
process.env.MRX_INLINE_VISUAL_VARIANT =
  'wave233-distinct-generated-three-quarter-report-binder-hero-and-top-down-three-row-reconciliation-inline';
process.env.MRX_PILLAR = 'texas-mineral-rights';
process.env.MRX_PILLAR_URL = '/mineral-rights/texas/';
process.env.MRX_CLUSTER = 'texas-county-basin-local-intent';
process.env.MRX_FUNNEL_STAGE = 'consideration';
process.env.MRX_SEARCH_INTENT = 'informational';
process.env.MRX_ACTION_REASON =
  'The source is prepared for the exact release-10 build, but publication remains controlled by signed receipts, matching evidence, production deployment, and independent verification.';
process.env.MRX_RISK_REMEDIATION_JSON = JSON.stringify([
  'The original Upton County market-value identity is rejected because it collides with the admitted valuation corpus and implies current market evidence that the 2024 annual report cannot support.',
  'The replacement owns only the exact G1 plus G1C arithmetic against the G* subtotal on physical page 7 and the boundary between that subtotal and the separate Total Mineral Market Value on physical page 5.',
  'The statewide Comptroller article retains G1, G2, and G3 definitions; the Howard article retains its single ambiguous row; the Karnes article retains parcel and ratio-study crosswalks.',
  'Items are transcribed only under the report visible Items heading and are never equated with accounts, owners, interests, wells, leases, parcels, tax bills, or property-specific values.',
  'No person or property search is executed; no personal name is republished; no title, acreage, ownership, production, reserve, appraisal, tax, sale-value, fair-value, offer, legal-effect, or transaction conclusion is made.',
  'Answer-first structure, stable claim IDs, exact arithmetic, claim-adjacent official citations, source-role separation, semantic links, exact visible and schema entities, exact-title hero/share identity, distinct exact-keyword inline image, accessibility, build gates, and no ranking or citation guarantee apply.',
]);

await import('./admit-mrx1000-wave82.mjs');
