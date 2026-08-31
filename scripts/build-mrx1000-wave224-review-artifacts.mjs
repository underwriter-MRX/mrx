#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '224';
process.env.MRX_ARTICLE_SLUG = 'why-reeves-cad-has-no-2025-ratio-study-worksheet';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0844';
process.env.MRX_SELECTION_RANK = '296';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'Why Reeves CAD Has No 2025 Ratio-Study Worksheet';
process.env.MRX_PRIMARY_KEYWORD = 'Reeves CAD 2025 ratio-study worksheet';
process.env.MRX_INLINE_KEYWORD = 'Reeves CAD 2025 ratio-study worksheet';
process.env.MRX_HERO_ALT =
  'A dark public-record routing desk appears beside the exact Article 296 title.';
process.env.MRX_INLINE_ALT =
  'A bright overhead source-routing workspace appears above the exact Reeves CAD 2025 ratio-study worksheet keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/data/property-tax/ratio-study/2025/',
    [
      'The official 2025 findings page supplies the 2025 tax-year identity, January 30, 2026 publication date, Tax Code Section 5.10 context, and complete studied-district link list.',
      'The article uses the page only to establish that the published studied-district list has no 195 Reeves route; it does not infer missing local data, submission failure, property coverage, appraisal, tax, protest, value, offer, or transaction results.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2025/',
    [
      'The official 2025 MAP results page says the listed reviews were completed in 2025 and includes Reeves.',
      'The Reeves list entry is used only as program-cycle context; the article does not reproduce or reinterpret the review report findings or recommendations.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/basics.php',
    [
      'The official basics page supplies the approximately-half-each-year MAP cadence and the relationship to SDPVS and ADRS coverage in counties not receiving a MAP review that year.',
      'The cadence supports record routing only and does not establish local performance, a future publication date, property coverage, or any owner-level conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reports/',
    [
      'The official reports page supplies the at-least-once-every-two-years ADRS requirement and says published results cover each district studied that year.',
      'The article does not turn the statewide cadence into a guarantee, predict the next Reeves study, or infer appraisal, tax, protest, value, offer, or transaction outcomes.',
    ],
  ],
  [
    'https://comptroller.texas.gov/data/property-tax/ratio-study/2024/',
    [
      'The official 2024 findings page supplies the prior tax-year identity and the 195 Reeves district route.',
      'The article uses the page only to identify the controlled Reeves ADRS route and does not reproduce the aggregate Category G row owned by Article 295.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Reeves value-timeline identity is rejected. The replacement answers one missing-record retrieval question with exact year, program, issuer, district number, negative-route check, cycle context, and prior-year route.',
  'Information gain is concrete: it prevents users and answer systems from fabricating a 2025 Reeves worksheet, confusing MAP with ADRS, or silently relabeling the official 2024 Reeves route as 2025.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark straight-on records desk and bright overhead source-routing workspace are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 651,810 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The official 2025 ADRS page identifies the tax year, January 30, 2026 publication date, and studied-district list; the controlled page has no 195 Reeves entry.',
  'The official 2025 MAP list includes Reeves, while the official basics and reports pages provide the alternating review-study and at-least-once-every-two-years cadence.',
  'The official 2024 ADRS findings page includes the 195 Reeves district route.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official Comptroller source, exact program, year, district-list role, and explicit negative-inference limit.',
  'The article does not treat absence from the 2025 study list as missing property data, submission failure, appraisal correctness, a tax or protest result, private value, offer, sale, buyer behavior, or transaction advice.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, year result, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  '2025_tax_year_and_publication_date_pass',
  '2025_studied_district_list_no_195_reeves_pass',
  '2025_map_results_reeves_entry_pass',
  'map_sdpvs_adrs_cycle_context_pass',
  'adrs_at_least_once_every_two_years_pass',
  '2024_findings_195_reeves_route_pass',
  'controlled_source_bytes_and_sha256_identity_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
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
  'negative_route_check_not_misrepresented_as_missing_local_data_pass',
  'map_listing_not_misrepresented_as_ratio_study_or_performance_result_pass',
  'cadence_not_misrepresented_as_future_publication_guarantee_pass',
  'no_owner_title_account_appraisal_tax_protest_private_value_offer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_property_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
