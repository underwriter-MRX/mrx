#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '249';
process.env.MRX_ARTICLE_SLUG =
  'how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0454';
process.env.MRX_SELECTION_RANK = '321';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'How to Locate a Texas Mineral Interest From an Inherited Royalty Statement';
process.env.MRX_PRIMARY_KEYWORD =
  'locate inherited Texas mineral interest from a royalty statement';
process.env.MRX_INLINE_KEYWORD = process.env.MRX_PRIMARY_KEYWORD;
process.env.MRX_HERO_ALT = 'Inherited royalty statement and envelope beside a Texas map.';
process.env.MRX_INLINE_ALT =
  'Blank royalty statement, research cards, and county-record folder on a desk.';
process.env.MRX_REVIEW_NEXT_STEP = '/learning-center/title-lease-ownership/';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.rrc.texas.gov/about-us/faqs/royalties-faq/',
    [
      'The RRC royalties FAQ distinguishes a payor stub identifier from an RRC identifier and describes qualified requests for lease, property, or well identifiers.',
      'It does not prove a particular heir owns an interest, that an old payor reference maps perfectly to a current RRC record, or that every statement has the same fields.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/about-us/faqs/oil-gas-faq/production-data-query-system-faqs/',
    [
      'The RRC PDQ FAQ describes lease, field, operator, district and county search routes, reporting lag and revision, and possible multi-county scope.',
      'Operator-reported production is contextual, not an owner payment ledger, private title record, or proof of a payor-to-property match.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/research-queries/',
    [
      'The official RRC Research Queries directory provides the manual access route and its automated-use warning.',
      'The article does not automate or encourage bulk retrieval from restricted RRC queries.',
    ],
  ],
  [
    'https://www.tsl.texas.gov/ref/propertyresearch',
    [
      'Texas State Library land/property guidance places conveyance research in the county where the land lies.',
      'A county deed search result does not establish a complete chain of title or heirship.',
    ],
  ],
  [
    'https://www.tsl.texas.gov/arc/local/index',
    [
      'Texas State Library county-record guidance distinguishes deed, probate, and will record classes and historical coverage.',
      'Availability varies; a probate index or one recorded instrument does not resolve a person-specific title question.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article answers one distinct task: use an old inherited Texas royalty statement when the county and tract are unknown. It ends at a source-and-unknowns location register, before ownership or payment conclusions.',
  'The direct answer, private clue table, verified-payor crosswalk request, RRC context, county deed/probate separation, fictional unresolved example, and stop conditions add specific information beyond the adjacent inherited-check and known-county guides.',
  'The exact-title hero and exact-keyword inline assets passed deterministic OCR and visual review; the low three-quarter statement/map scene and strict overhead record-location scene are materially distinct.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five current official Texas RRC and Texas State Library pages support the bounded claim-to-source map. The RRC stub identifier, PDQ scope and lag, automated-access boundary, and county deed/probate research roles are not extended into ownership conclusions.',
  'No actual owner, statement, payor, county, tract, decimal, legal description, price, or value was provided; the worked example is fictional and explicitly unresolved.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The named mrx_compliance source-level review passed the body and five FAQs after corrections; this hash-locked repository artifact records editorial/compliance review, not a candidate-specific counsel opinion.',
  'The article keeps account numbers and estate papers out of public search or AI-chat examples, uses a verified payor channel, discloses potential MRX buyer interest, and preserves directional-not-appraisal and no individualized legal, tax, title, accounting, engineering, investment or financial advice boundaries.',
  'The voluntary research next step does not force an heir who is still locating the property into booking, account creation, or document upload.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_official_https_sources_with_bounded_roles',
  'rrc_payor_stub_id_versus_regulator_id_scope_pass',
  'rrc_pdq_search_lag_revision_multi_county_scope_pass',
  'rrc_automated_access_boundary_pass',
  'county_deed_and_probate_source_class_separation_pass',
  'no_private_owner_or_property_match_invention_pass',
  'claim_adjacent_citations_and_qualified_unknowns_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_and_filename_identity_pass',
  'five_reviewed_faqs_and_visible_schema_parity_pending_render_check',
  'privacy_and_verified_payor_contact_boundary_pass',
  'no_title_heirship_decimal_payment_value_or_sale_conclusion_pass',
  'mrx_editorial_team_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_pass',
  'research_only_next_step_preserves_owner_agency',
  'no_ranking_indexing_retrieval_citation_traffic_lead_or_revenue_guarantee',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
