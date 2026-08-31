#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '244';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-lease-level-full-value-owner-proration';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0869';
process.env.MRX_SELECTION_RANK = '316';
process.env.MRX_EXPECTED_SOURCE_COUNT = '2';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: Lease-Level Full Value and Owner Proration';
process.env.MRX_PRIMARY_KEYWORD = 'Winkler CAD mineral appraisal owner proration';
process.env.MRX_INLINE_KEYWORD = 'Winkler CAD mineral appraisal owner proration';
process.env.MRX_HERO_ALT =
  'A lease folio branches into interest-type folders and owner slips beside the exact Article 316 title.';
process.env.MRX_INLINE_ALT =
  'A top-down lease-to-owner proration flow appears below the exact Winkler CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.winklercad.org/Forms/GetDocument?fileName=1764618216_Biennial-Reappraisal-Plan.PA_.MIUP_.2025-2026.pdf&subPath=Data+Records',
    [
      'The official 30-page Winkler CAD contractor plan supplies the July 2024 print date, 2025-2026 plan period, appraisal-responsibility statement, qualified lease-level consolidation-by-type sequence, working-versus-royalty examples, type-level full-value step, and fractional-owner pro-rata distribution statement used by this article.',
      'It does not provide an owner-specific deed or lease interpretation, interest classification, decimal, account calculation, appraisal, tax result, private value, sale price, offer, or current post-plan procedure.',
    ],
  ],
  [
    'https://www.winklercad.org/home/DataRecords',
    [
      'The Winkler CAD Data and Records page supplies the official publisher/index route used to locate the 2025-2026 Biennial Reappraisal Plan.',
      'It does not prove that every plan statement remains current, connect a reader to a producing lease, establish title or a decimal, or support an account-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Winkler County risk-checklist identity is rejected. The final article answers one narrow public-record question about the sequence from a producing lease, to interest-type full value, to fractional-owner proration.',
  'Information gain is concrete: exact whole-PDF and printed-page provenance, complete-file identity, three labeled value levels, the mandatory typically qualifier, an inference-stop table, a six-field boundary worksheet, source-age register, stable claim IDs, and explicit unknowns.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-angle lease-to-owner desk and bright strict-overhead proration flow are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official PDF is 378,650 bytes with SHA-256 91df8414af2aee0c7609545f4a31385f54f46f06e980a87e89d9a99a8f85dff6 and contains 30 PDF pages; its footer says printed July 2024 and its heading identifies tax years 2025 and 2026.',
  'Whole-PDF page 19, printed page 17, describes P&A responsibility for developing values for full or fractional percentage ownership of leasehold interests associated with producing or capable-of-producing leases.',
  'The same paragraph says interests applying to one producing lease are typically consolidated by type and gives working versus royalty as examples.',
  'The paragraph says each type is appraised for full value and the result is distributed pro rata to fractional decimal-interest owners according to type and percentage amount.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article attributes each process statement to the plan, preserves typically, and does not independently determine title, classify an interest, calculate a decimal, perform an appraisal, or reach an account-specific result.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, decimal, title instrument, notice, protest record, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, owner percentage, formula, value, title conclusion, appraisal result, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'two_official_https_sources_with_exact_source_roles',
  'winkler_contractor_plan_complete_file_hash_page_count_and_visual_page_map_pass',
  'plan_period_july_2024_print_date_and_retrieval_date_kept_distinct_pass',
  'appraisal_responsibility_full_or_fractional_leasehold_interest_attribution_pass',
  'legally_or_contractually_created_amount_and_type_boundary_pass',
  'typically_consolidated_by_type_qualifier_preserved_pass',
  'working_and_royalty_examples_without_owner_classification_pass',
  'type_level_full_value_then_owner_proration_sequence_pass',
  'no_owner_decimal_title_appraisal_tax_private_value_sale_price_offer_or_current_practice_inference_pass',
  'adjacent_winkler_article_nonduplication_and_information_gain_pass',
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
  'no_factory_body_or_generic_county_risk_checklist_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_decimal_title_instrument_notice_protest_or_transaction_data_pass',
  'no_owner_interest_type_decimal_title_appraisal_tax_value_sale_price_offer_or_current_post_plan_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article313_source_chain_article314_report_user_and_article315_date_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_digits_formulas_percentages_currency_values_maps_wells_rigs_graphs_logos_seals_signatures_government_emblems_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
