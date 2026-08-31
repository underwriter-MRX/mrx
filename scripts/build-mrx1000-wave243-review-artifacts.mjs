#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '243';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-january-1-snapshot-later-information';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0868';
process.env.MRX_SELECTION_RANK = '315';
process.env.MRX_EXPECTED_SOURCE_COUNT = '2';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: January 1 Snapshot and Later Information';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral appraisal January 1 snapshot';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral appraisal January 1 snapshot';
process.env.MRX_HERO_ALT = 'An appraisal evidence desk sits beside the exact Article 315 title.';
process.env.MRX_INLINE_ALT =
  'A top-down evidence-timing matrix appears below the exact Winkler CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.winklercad.org/Forms/GetDocument?fileName=1764618216_Biennial-Reappraisal-Plan.PA_.MIUP_.2025-2026.pdf&subPath=Data+Records',
    [
      'The official 30-page Winkler CAD contractor plan supplies the July 2024 print date, 2025-2026 plan period, January 1 effective-date statement, later appraisal and report date statement, limited retrospective-circumstances boundary, later-information confirmation test, and annual mineral-interest reappraisal statement used by this article.',
      'It does not provide a current private valuation or market update, classify a particular later record, calculate a deadline, determine title or taxability, interpret law or professional appraisal standards, review a protest, or establish an owner-specific result.',
    ],
  ],
  [
    'https://www.winklercad.org/home/DataRecords',
    [
      'The Winkler CAD Data and Records page supplies the official publisher/index route used to locate the 2025-2026 Biennial Reappraisal Plan.',
      'It does not prove that every plan statement remains current, identify a property effective date, or establish an account-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Winkler County market-update identity is rejected. The final article answers one narrow public-record question about the difference between the January 1 appraisal snapshot and later appraisal or report dates.',
  'Information gain is concrete: exact whole-PDF and printed-page provenance, complete-file hash and size, separate date roles, the two-part later-information boundary, annual-reappraisal context, a four-field worksheet, source-age register, stable claim IDs, and explicit inference stops.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-angle appraisal-evidence desk and bright strict-overhead evidence-timing matrix are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official PDF is 378,650 bytes with SHA-256 91df8414af2aee0c7609545f4a31385f54f46f06e980a87e89d9a99a8f85dff6 and contains 30 PDF pages; its footer says printed July 2024 and its heading identifies tax years 2025 and 2026.',
  'Whole-PDF page 20, printed page 18, describes January 1 as the Texas lien date and effective date for ad-valorem purposes.',
  'The same passage says appraisals and reports are typically dated several months after the effective date and describes a retrospective approach as possible only in limited and prescribed circumstances.',
  'The passage says later information applies only when it confirms a trend or appraisal condition that existed and was generally known as of the effective date; it separately says all mineral interests are reappraised annually.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article attributes each date statement to the plan and does not independently interpret the Texas Property Tax Code, professional appraisal standards, a later record, a deadline, a protest, or an account-specific result.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, report result, deadline, protest record, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, effective-date decision, property detail, legal conclusion, appraisal result, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'two_official_https_sources_with_exact_source_roles',
  'winkler_contractor_plan_complete_file_hash_page_count_and_visual_page_map_pass',
  'plan_period_july_2024_print_date_january_1_effective_date_report_date_and_retrieval_date_kept_distinct_pass',
  'january_1_lien_and_effective_date_plan_attribution_pass',
  'later_appraisal_and_report_preparation_date_boundary_pass',
  'limited_retrospective_circumstances_attribution_pass',
  'later_information_confirms_existing_generally_known_condition_boundary_pass',
  'annual_reappraisal_context_without_minerals_in_place_expansion_pass',
  'no_current_private_value_market_update_deadline_protest_title_tax_legal_standard_or_owner_specific_inference_pass',
  'adjacent_winkler_midland_upton_article_nonduplication_and_information_gain_pass',
  'answer_first_claim_adjacent_citation_source_age_and_known_unknowns_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_factory_body_or_generic_county_market_update_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_title_report_result_deadline_protest_or_transaction_data_pass',
  'no_account_specific_effective_date_later_record_classification_legal_tax_appraisal_standard_or_protest_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article313_source_chain_article314_report_user_and_midland_upton_date_record_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_digits_dates_filenames_property_details_maps_wells_rigs_money_clocks_graphs_values_logos_seals_signatures_government_emblems_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
