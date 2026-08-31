#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '240';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2025-2026-reappraisal-plan-two-mineral-sections-page-ranges';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0860';
process.env.MRX_SELECTION_RANK = '312';
process.env.MRX_EXPECTED_SOURCE_COUNT = '2';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2025-2026 Reappraisal Plan: Two Mineral Sections and Their Page Ranges';
process.env.MRX_PRIMARY_KEYWORD = 'Ward CAD reappraisal plan mineral sections';
process.env.MRX_INLINE_KEYWORD = 'Ward CAD reappraisal plan mineral sections';
process.env.MRX_HERO_ALT =
  'An open appraisal-plan binder shows two section groups beside the exact Article 312 title.';
process.env.MRX_INLINE_ALT =
  'A top-down source crosswalk links two document-section stacks below the exact Ward CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.wardcad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1723654611_2025+%26+2026+Ward+County+Biennial+Reappraisal+Plan.pdf',
    [
      'The official 75-page Ward CAD 2025-2026 Biennial Reappraisal Plan supplies the adoption/effective date and the two separate mineral-treatment sections, their whole-PDF positions, their printed page numbers, the Appendix B handoff, and the bounded process descriptions used by this article.',
      'It does not establish a specific owner, title, tax result, private-sale value, production, reserves, appraisal conclusion, offer, or transaction recommendation.',
    ],
  ],
  [
    'https://www.wardcad.org/home/DataRecords',
    [
      'The Ward CAD Data and Records page supplies a current official publisher and index route for the source family.',
      'It does not replace the hash-locked PDF, change its page-number systems, or establish a property-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Ward County value timeline is rejected. The final article answers one narrow public-record navigation question: where the district mineral section and contractor Appendix B mineral section appear in the same official PDF and how their page numbers differ.',
  'Information gain is concrete: exact whole-PDF and printed page ranges, the Appendix B numbering restart, the district-to-contractor handoff, a source-age register, stable claim IDs, and explicit stops against value, title, tax, production, reserves, or appraisal conclusions.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark oblique tabbed-binder scene and bright strict-overhead two-stack source crosswalk are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official scanned PDF is 6,186,036 bytes with SHA-256 271bc4bd3712ed158e25aef6a0977602348e50854dbaac8da1916b191053bd36 and contains 75 PDF pages.',
  'PDF page 26, district-plan printed page 24, begins the district mineral valuation-process section; it continues through PDF page 28, printed page 26, and PDF page 29 begins the next property topic.',
  'PDF page 45 identifies Appendix B, PDF page 48 supplies its table of contents, and PDF pages 64-69 correspond to Appendix B printed pages 17-22 for the contractor mineral-interests section.',
  'The district section summarizes responsibility, data/resources, model inputs, and review; the contractor section separately addresses scope and assumptions, data collection, calibration, individual review, and performance testing. The article reports locations and boundaries only.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article distinguishes whole-PDF page positions from two printed numbering systems and does not imply that a process description proves title, taxability, private value, production, reserves, or a property-specific appraisal result.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, owner identity, tax conclusion, appraisal finding, approval statement, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'two_official_https_sources_with_exact_source_roles',
  'ward_reappraisal_plan_complete_file_hash_page_count_and_visual_page_map_pass',
  'district_section_pdf_pages_26_28_printed_pages_24_26_pass',
  'appendix_identity_toc_and_numbering_restart_pass',
  'contractor_section_pdf_pages_64_69_appendix_pages_17_22_pass',
  'pdf_page_29_next_topic_boundary_pass',
  'district_and_contractor_process_descriptions_kept_separate_pass',
  'no_owner_title_tax_value_production_reserves_or_appraisal_inference_pass',
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
  'no_factory_body_or_generic_county_value_timeline_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_title_or_transaction_data_pass',
  'no_taxability_ownership_private_value_production_reserve_or_appraisal_conclusion_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article308_article309_article310_article311_and_other_district_locator_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_page_numbers_logos_seals_signatures_official_marks_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
