#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '235';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2025-2026-plan-date-control-register-july-2024-print-january-1-snapshot-2020-2022-appendix';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0855';
process.env.MRX_SELECTION_RANK = '307';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2025-2026 Plan Date-Control Register: July 2024 Print, January 1 Snapshot, and a 2020-2022 Appendix';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD plan date-control register';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD plan date-control register';
process.env.MRX_HERO_ALT = 'A layered plan binder appears beside the exact Article 307 title.';
process.env.MRX_INLINE_ALT =
  'A top-down four-card register appears above the exact Upton CAD plan date-control register keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://uptoncad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1750881192_REAPPRRAISAL%20PLAN%2025%20%26%2026.pdf',
    [
      'The official scanned Upton CAD plan supplies the 2025-2026 label, July 2024 print label, embedded 2020-2022 appendix frame, and January 1 snapshot statements with physical and embedded page locators.',
      'The article does not treat one date layer as another or infer current account status, title, ownership, appraisal correctness, tax, private value, a deadline, an offer, or a transaction result.',
    ],
  ],
  [
    'https://uptoncad.org/home/DataRecords',
    [
      'The Upton CAD Data and Records page supplies the official publisher route and visible 2025-and-2026 reappraisal-plan link.',
      'The publisher route establishes provenance only and does not make the older embedded appendix current or prove account treatment.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/?artSec=23.01&chapter=TX.23&code=TX&tab=1',
    [
      'The official Texas statutes route supplies the current Section 23.01 reference for market value as of January 1.',
      'The statute route is not used to determine a reader-specific tax, legal position, exemption, deadline, title, value, or transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/valuing-property.php',
    [
      'The current Texas Comptroller page explains that appraisal districts generally appraise taxable property at market value as of January 1.',
      'The page verifies the current general date rule only; it does not validate the older embedded Upton report or a particular account result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/basics.php',
    [
      'The current Texas Comptroller basics page states that appraisal districts appraise property value as of January 1 each year and distinguishes local appraisal functions.',
      'The article does not extend that statement into a private mineral-sale valuation, owner-specific taxable-status finding, notice date, protest deadline, or forecast.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Upton County value-timeline identity is rejected. The replacement answers one distinct document-control job through four explicit date layers and a no-inference register.',
  'Information gain is concrete: dual page locators, source roles, source-age labels, stable claim IDs, a discrepancy register, retained-byte identity, and source-versus-current-verification-versus-inference separation.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique binder scene and bright strict-overhead four-card register are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The controlled Upton plan is 7,275,413 bytes, SHA-256 216ea3d58ddc8117385a8c8338250460d39bcc91020f2306affeaf59cd071daf, and 94 visually reviewed physical pages with no extractable text layer.',
  'The article separates the outer 2025-2026 plan label and July 2024 print label from the embedded report beginning at physical page 31 and its stated 2020-2022 frame.',
  'Physical page 56 / embedded printed page 26 and physical page 57 / embedded printed page 27 supply the older report’s January 1 effective-date and snapshot statements.',
  'Current official Texas sources independently verify the general January 1 appraisal-date rule without validating the embedded report as current or proving any account result.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No personal or account data is copied, no property search is executed, and no title, ownership, taxable-status, appraisal, tax, legal, private-value, offer, deadline, protest, or transaction conclusion appears.',
  'The date layers remain source-control labels rather than a tax calendar, private-value timeline, forecast, legal interpretation, or recommendation.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, numerical result, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_official_https_sources_with_exact_source_roles',
  'controlled_source_bytes_page_count_and_sha256_identity_pass',
  'physical_and_embedded_page_locator_pass',
  'outer_plan_print_snapshot_and_appendix_date_layer_separation_pass',
  'current_january_1_official_verification_pass',
  'embedded_2020_2022_appendix_not_current_2025_2026_evidence_pass',
  'no_account_history_deadline_forecast_or_private_value_inference_pass',
  'stable_claim_ids_discrepancy_register_source_age_and_roles_pass',
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
  'no_title_ownership_taxable_status_appraisal_tax_legal_private_value_offer_deadline_protest_or_transaction_conclusion_pass',
  'no_date_layer_as_tax_calendar_private_value_timeline_forecast_or_recommendation_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_official_forms_personal_data_account_identifiers_tax_amounts_property_values_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
