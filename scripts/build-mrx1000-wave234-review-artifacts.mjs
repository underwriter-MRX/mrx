#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '234';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2025-2026-mineral-appraisal-review-chain-sources-calibration-pvs';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0854';
process.env.MRX_SELECTION_RANK = '306';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2025-2026 Mineral Appraisal Review Chain: Sources, Calibration, and PVS';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD mineral appraisal review chain';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD mineral appraisal review chain';
process.env.MRX_HERO_ALT =
  'A four-stage records workspace appears beside the exact Article 306 title.';
process.env.MRX_INLINE_ALT =
  'A top-down four-card review chain appears above the exact Upton CAD mineral appraisal review chain keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://uptoncad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1750881192_REAPPRRAISAL%20PLAN%2025%20%26%2026.pdf',
    [
      'The official scanned Upton CAD plan supplies the document-section statements for source categories, calibration, individual review, and the stated performance test on physical pages 21 through 24.',
      'The article treats section order as a source-reading map, not an account audit, chronological proof, validation of a source, valuation recommendation, protest strategy, or property-specific result.',
    ],
  ],
  [
    'https://uptoncad.org/home/DataRecords',
    [
      'The Upton CAD Data and Records page supplies the official publisher route and visible 2025-and-2026 reappraisal-plan link.',
      'The route establishes provenance only and does not prove current application, account treatment, ownership, appraisal correctness, tax, title, private value, or a transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/about.php',
    [
      'The current Texas Comptroller page distinguishes the School District Property Value Study from the Appraisal District Ratio Study and states their different purposes.',
      'The page does not validate the Upton plan, prove a current Upton result, audit an account, or determine appraisal, tax, title, private value, an offer, or a transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reports/',
    [
      'The current Texas Comptroller reports page describes ADRS purpose and published measures, including median level and coefficient of dispersion.',
      'The article uses that page only to prevent PVS, SDPVS, and ADRS from being collapsed into one label and does not infer a current Upton study finding.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Upton County value-risk identity is rejected. The replacement answers one distinct source-reading job through a four-section Upton plan map and current terminology boundary.',
  'Information gain is concrete: dual page locators, source roles, section-sequence labels, stable claim IDs, a discrepancy register, source-age controls, and explicit evidence-versus-inference stops.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique landscape workspace and light strict-overhead four-card scene are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The controlled Upton plan is 7,275,413 bytes, SHA-256 216ea3d58ddc8117385a8c8338250460d39bcc91020f2306affeaf59cd071daf, and 94 visually reviewed physical pages; the relevant claim set is limited to physical pages 21 through 24.',
  'The article preserves the plan statements about source categories, annual discounted-cash-flow calibration tests, multiple individual reviews, taxpayer and protest review opportunities, and the stated Comptroller performance test as source attribution.',
  'The current Comptroller layer separates SDPVS from ADRS and prevents the plan PVS label from being expanded into a current Upton finding.',
  'No source category is claimed to have been used for a particular account, and section order is not presented as proof of chronological account execution.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No personal or account data is copied, no property search is executed, and no source-use, title, ownership, appraisal, tax, legal, private-value, offer, protest, or transaction conclusion appears.',
  'The plan methodology statements remain attributed descriptions rather than recommendations, guarantees, validation claims, or private mineral-rights valuation rules.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, numerical result, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_official_https_sources_with_exact_source_roles',
  'controlled_source_bytes_page_count_and_sha256_identity_pass',
  'physical_and_printed_page_locator_pass',
  'source_calibration_individual_review_and_performance_test_section_map_pass',
  'section_order_not_account_chronology_boundary_pass',
  'plan_pvs_and_current_sdpvs_adrs_terminology_separation_pass',
  'no_current_upton_result_or_account_specific_source_use_inference_pass',
  'stable_claim_ids_discrepancy_register_and_source_roles_pass',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_claim_adjacent_citation_and_current_source_boundary_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_person_account_or_property_data_copy_or_search_pass',
  'no_title_ownership_appraisal_tax_legal_private_value_offer_protest_or_transaction_conclusion_pass',
  'no_plan_methodology_as_recommendation_guarantee_or_private_sale_rule_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_official_forms_personal_data_account_identifiers_tax_amounts_property_values_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
