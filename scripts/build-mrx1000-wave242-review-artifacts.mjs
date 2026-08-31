#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '242';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-reports-recipients-vs-intended-users';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0867';
process.env.MRX_SELECTION_RANK = '314';
process.env.MRX_EXPECTED_SOURCE_COUNT = '2';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Reports: Recipients vs. Intended Users';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral report intended users';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral report intended users';
process.env.MRX_HERO_ALT =
  'A dark mineral-report folio and recipient cards sit beside the exact Article 314 title.';
process.env.MRX_INLINE_ALT =
  'A top-down report-routing matrix appears below the exact Winkler CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.winklercad.org/Forms/GetDocument?fileName=1764618216_Biennial-Reappraisal-Plan.PA_.MIUP_.2025-2026.pdf&subPath=Data+Records',
    [
      'The official 30-page Winkler CAD contractor plan supplies the July 2024 print date, 2025-2026 plan period, recipient-versus-intended-user wording, potential-other-user categories, and Pritchard-and-Abbott service-scope exception used by this article.',
      'It does not identify intended users for a particular assignment, interpret professional appraisal standards, validate a report or disclosure, determine who appraised a property, or establish title, taxability, private value, report validity, protest outcome, or legal consequences.',
    ],
  ],
  [
    'https://www.winklercad.org/home/DataRecords',
    [
      'The Winkler CAD Data and Records page supplies the current official publisher/index route and lists the 2025-2026 Biennial Reappraisal Plan.',
      'It does not prove that every plan statement remains current, identify assignment-specific users, or establish a property-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Winkler County value guide is rejected. The final article answers one narrow public-record question about how one official plan distinguishes receiving a report from assignment-specific intended-user identification.',
  'Information gain is concrete: exact whole-PDF and printed-page provenance, complete-file hash and size, direct-contract-client language, taxpayer and agent receipt, disclosure receipt, potential-other-user categories, open-records recipients, service-scope exception, source-age register, stable claim IDs, and explicit inference stops.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-angle report-folio and recipient-card scene and bright strict-overhead routing matrix are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official PDF is 378,650 bytes with SHA-256 91df8414af2aee0c7609545f4a31385f54f46f06e980a87e89d9a99a8f85dff6 and contains 30 PDF pages; its footer says printed July 2024 and its heading identifies tax years 2025 and 2026.',
  'Whole-PDF page 19, printed page 17, says intended users are typically clients for which Pritchard & Abbott is under direct contract.',
  'The same page says taxpayers or their agents may receive reports by law or courtesy without automatically becoming intended users, and disclosure receipt does not create that status unless the appraiser specifically identifies the party.',
  'The page names valuation-dispute participants, governmental reviewers, and private open-records recipients as potential other users and separately excludes property appraised outside Pritchard & Abbott services from the section.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article attributes each report-user statement to the plan and does not make an assignment-specific determination, legal conclusion, professional-standard interpretation, report-validity finding, or property-specific appraisal claim.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, report result, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, intended-user determination, report approval, legal conclusion, property detail, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'two_official_https_sources_with_exact_source_roles',
  'winkler_contractor_plan_complete_file_hash_page_count_and_visual_page_map_pass',
  'plan_period_and_july_2024_print_date_kept_distinct_pass',
  'direct_contract_client_typical_intended_user_attribution_pass',
  'taxpayer_agent_receipt_not_automatic_boundary_pass',
  'disclosure_recipient_specific_identification_boundary_pass',
  'potential_other_user_categories_and_open_records_boundary_pass',
  'pritchard_abbott_service_scope_exception_pass',
  'no_assignment_specific_user_professional_standard_report_validity_legal_or_property_inference_pass',
  'adjacent_article_nonduplication_and_information_gain_pass',
  'answer_first_claim_adjacent_citation_source_age_and_inference_boundary_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_factory_body_or_generic_county_value_guide_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_title_report_result_or_transaction_data_pass',
  'no_assignment_specific_intended_user_professional_standard_compliance_report_validity_disclosure_sufficiency_or_legal_consequence_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article313_source_chain_and_formal_valuation_guide_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_filenames_property_details_wells_rigs_money_logos_seals_signatures_government_emblems_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
