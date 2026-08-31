#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '241';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-taxpayer-records';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0866';
process.env.MRX_SELECTION_RANK = '313';
process.env.MRX_EXPECTED_SOURCE_COUNT = '2';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Data Chain: RRC Files, Operator Inputs, and Taxpayer Records';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral data sources';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral data sources';
process.env.MRX_HERO_ALT =
  'Three abstract source stacks feed one records tray beside the exact Article 313 title.';
process.env.MRX_INLINE_ALT =
  'A top-down privacy-bounded source flow appears below the exact Winkler CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.winklercad.org/Forms/GetDocument?fileName=1764618216_Biennial-Reappraisal-Plan.PA_.MIUP_.2025-2026.pdf&subPath=Data+Records',
    [
      'The official 30-page Winkler CAD contractor plan supplies the July 2024 print date, 2025-2026 plan period, mineral-data source categories, monthly RRC/operator update cadence, ownership-input categories, collection roles, and review boundary used by this article.',
      'It does not establish a specific owner, title, tax result, private-sale value, production, reserves, model validity, appraisal outcome, protest result, offer, or transaction recommendation.',
    ],
  ],
  [
    'https://www.winklercad.org/home/DataRecords',
    [
      'The Winkler CAD Data and Records page supplies the current official publisher/index route and lists the 2025-2026 contractor plan.',
      'It does not prove that every plan statement remains current, provide confidential inputs, or establish a property-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Winkler County value family-decision guide is rejected. The final article answers one narrow public-record question about which mineral-data source categories and collection roles the official Winkler contractor plan describes.',
  'Information gain is concrete: the July 2024 print date versus 2025-2026 plan period, exact PDF/printed-page provenance, monthly RRC/operator file cadence, supplemental source categories, confidential ownership-input boundary, statewide download versus individual record enrichment, source-age register, stable claim IDs, and explicit inference stops.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark oblique three-stack-to-records-tray scene and bright strict-overhead privacy-and-cadence source matrix are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official PDF is 378,650 bytes with SHA-256 91df8414af2aee0c7609545f4a31385f54f46f06e980a87e89d9a99a8f85dff6 and contains 30 PDF pages; its footer says printed July 2024 and its cover identifies the 2025-2026 plan period.',
  'Whole-PDF page 23, printed page 21, says the main property-data source is Railroad Commission of Texas data as reported by operators and received monthly as updated and new well and production files.',
  'The same page identifies appraiser fieldwork, operator financial data, chief appraisers, tax assessors, trade publications, local newspapers, public tips, specified confidential ownership-input sources, taxpayer-filed deeds, and taxpayer correspondence.',
  'The page distinguishes statewide production-and-price downloads from specific information added by appraisers to appraisal-file records; whole-PDF page 24, printed page 22, only completes the review/protest sentence and begins performance-test context.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article attributes every workflow statement to the plan and does not imply that MRX independently verified current operations or possesses, reviewed, can retrieve, or can disclose any confidential data.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, confidential-data access claim, owner identity, tax conclusion, appraisal finding, approval statement, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'two_official_https_sources_with_exact_source_roles',
  'winkler_contractor_plan_complete_file_hash_page_count_and_visual_page_map_pass',
  'plan_period_and_july_2024_print_date_kept_distinct_pass',
  'rrc_operator_monthly_file_cadence_attribution_pass',
  'supplemental_data_source_categories_pass',
  'ownership_input_categories_and_confidentiality_boundary_pass',
  'statewide_download_and_property_specific_record_enrichment_distinction_pass',
  'page_24_review_and_performance_context_narrowly_bounded_pass',
  'no_owner_title_tax_value_production_reserves_model_or_outcome_inference_pass',
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
  'no_factory_body_or_generic_county_value_family_decision_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_title_or_transaction_data_pass',
  'no_confidential_data_access_taxability_ownership_private_value_production_reserve_model_validity_appraisal_or_protest_outcome_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'ward_upton_public_data_file_and_rrc_retrieval_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_filenames_property_details_maps_wells_rigs_money_logos_seals_signatures_government_emblems_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
