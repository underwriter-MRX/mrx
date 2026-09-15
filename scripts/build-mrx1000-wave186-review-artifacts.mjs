#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '186';
process.env.MRX_ARTICLE_SLUG =
  'glasscock-cad-property-search-result-field-inventory-for-mineral-research';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0785';
process.env.MRX_SELECTION_RANK = '258';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Glasscock CAD Property Search Result Field Inventory for Mineral Research';
process.env.MRX_PRIMARY_KEYWORD = 'Glasscock CAD property search result fields';
process.env.MRX_INLINE_KEYWORD = 'Glasscock CAD property search result fields';
process.env.MRX_HERO_ALT =
  'A navy card-catalog tray with blank dividers appears beside the exact Glasscock CAD field-inventory title.';
process.env.MRX_INLINE_ALT =
  'An overhead eighteen-tile inventory board appears above the exact Glasscock CAD property search result fields phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.glasscockcad.org/Home/Search',
    [
      'The official empty Glasscock CAD Search Results interface supplies the eighteen displayed grid-header labels observed without a query on 2026-08-28.',
      'The page supports a dated no-query field inventory only; it does not prove that a field is populated, current, accurate, complete, legally sufficient, or applicable to a person, account, property, lease, appraisal, tax, title, value, offer, sale, or transaction.',
    ],
  ],
  [
    'https://www.glasscockcad.org/',
    [
      'The official Glasscock CAD home page supplies the publisher surface and public property-search navigation context.',
      'It does not establish a search result, field population, property fact, appraisal accuracy, tax amount, ownership, title, mineral-rights sale value, offer quality, transaction readiness, or legal effect.',
    ],
  ],
  [
    'https://www.glasscockcad.org/home/privacypolicy',
    [
      'The official Glasscock CAD disclaimer page supplies the publishers stated public-interactive, research-use, as-is, possible-inaccuracy, and no-electronic-transfer limitations.',
      'The article preserves those source-stated limitations without interpreting law, granting permission to scrape or transfer data, or deciding accuracy, completeness, reliance, title, ownership, appraisal, tax, value, offer, sale, or legal effect.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/glasscock.php',
    [
      'The Texas Comptroller Glasscock County directory supplies limited current county and appraisal-district directory provenance.',
      'It is not the source for the search-grid labels, a query result, property identity, appraisal, tax, title, value, offer, transaction, or legal conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the colliding Glasscock County mineral-rights value timeline seed and owns one distinct deliverable: a dated inventory of eighteen labels displayed by the empty official Glasscock CAD Search Results grid before any query.',
  'The current information-gain and answer-citation contract is applied through a concise direct answer, one canonical no-query job, four visible official sources with separate roles, exact entity/route/date provenance, claim-adjacent citations, five useful FAQs, semantic hub/support/sibling/next-step links, native nonduplicative schema, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The three-quarter card-catalog scene and strict-overhead eighteen-tile inventory board are materially distinct and make no government-affiliation, person, property, appraisal, tax, value, offer, legal, or outcome claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the empty official Search Results route, its HTTP 200 state on 2026-08-28, and the eighteen exact displayed grid-header labels; no query or result row is used.',
  'Market Value and Base Tax Due are preserved only as interface labels and are expressly not treated as mineral-rights sale valuation, offer, proceeds, transaction, or legal metrics.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article expressly rejects person or property search, identifier entry, result-row retrieval, scraping, bulk transfer, personal-data reproduction, label interpretation, data-availability inference, appraisal judgment, tax calculation, ownership or title findings, market valuation, offer analysis, sale advice, and promised outcomes.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, property fact, appraisal result, tax direction, ownership, title, value, offer, recommendation, or promised result.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'empty_search_results_grid_eighteen_label_inventory_pass',
  'claim_to_source_scope_present',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_summary_and_claim_adjacent_official_citation_integrity_pass',
  'exact_entity_route_date_author_reviewer_and_url_parity_pass',
  'semantic_hub_support_sibling_and_next_step_internal_link_roles_pass',
  'no_query_no_result_row_no_person_or_property_data_boundary_pass',
  'adjacent_glasscock_appraiser_roll_category_and_plan_jobs_preserved_pass',
  'summit_search_atlas_and_answer_engine_observations_not_used_as_factual_article_evidence_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_query_field_inventory_no_person_property_appraisal_tax_title_ownership_value_offer_sale_or_legal_claim_pass',
  'market_value_and_base_tax_due_interface_label_disclaimer_pass',
  'adjacent_glasscock_appraiser_roll_category_and_plan_sources_not_combined_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_official_document_government_mark_agency_logo_seal_person_hand_property_record_personal_data_map_money_tax_amount_appraisal_value_offer_result_signature_ui_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
