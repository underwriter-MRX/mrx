#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '239';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2026-2029-mineral-contract-listed-interests-non-fuel-mineral-exclusions';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0859';
process.env.MRX_SELECTION_RANK = '311';
process.env.MRX_EXPECTED_SOURCE_COUNT = '3';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2026-2029 Mineral Contract: Listed Interests and Non-Fuel Mineral Exclusions';
process.env.MRX_PRIMARY_KEYWORD = 'Ward CAD mineral property contract definition';
process.env.MRX_INLINE_KEYWORD = 'Ward CAD mineral property contract definition';
process.env.MRX_HERO_ALT =
  'A contract binder, four interest markers, and three material samples appear beside the exact Article 311 title.';
process.env.MRX_INLINE_ALT =
  'A top-down evidence table separates four interest markers from three material samples below the exact Ward CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.wardcad.org/Forms/GetDocument?fileName=1748537643_Agenda+for+Monday+May+12%2C+2025+BOD+Meeting.pdf&subPath=Latest+News',
    [
      'The official May 12, 2025 Ward CAD board packet supplies the contract title, tax-year term, defined Mineral Property and Personal Property classes, listed interests, non-fuel exclusions, January 1 information date, and stated Section 23.01 and USPAP context on packet pages 25 and 26.',
      'It does not establish any owners title, current tax result, private-sale value, production, reserves, enforceability, or facts outside the contract language.',
    ],
  ],
  [
    'https://www.wardcad.org/home/DataRecords',
    [
      'The Ward CAD Data and Records page supplies a current official publisher route and confirms the separate 2026 USPAP report listing.',
      'It does not expand or replace the contract definitions in the May 12, 2025 board packet and does not establish a property-specific conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/?artSec=23.01&chapter=TX.23&code=TX&tab=1',
    [
      'The Texas Legislature statutes site supplies the current Section 23.01 text for the January 1 appraisal date, generally accepted methods, and the USPAP mass-appraisal requirement.',
      'It does not interpret the Ward contract, determine whether a particular interest is taxable, resolve title, establish private value, or provide individualized legal or tax advice.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Ward County risk checklist is rejected. The final article answers one narrow public-record question about how the Ward contract defines Mineral Property, what it expressly excludes, and how that class differs from Personal Property.',
  'Information gain is concrete: exact packet-page provenance, a definition-and-limit matrix, the non-exhaustive listed-interest boundary, the separate property class, the 2026-2029 term, the January 1 date, stable claim IDs, and explicit stops against ownership, tax, value, production, reserves, and enforceability conclusions.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark oblique binder-and-sample scene and bright strict-overhead definition board are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official board packet is 1,663,784 bytes with SHA-256 f41283bcb1b349dac1d088160864a7785a0864a89941b8f984308518d818864f and contains 32 PDF pages.',
  'Packet page 25 titles a professional appraisal services contract for mineral, industrial, utility, and personal property for tax years 2026, 2027, 2028, and 2029.',
  'Packet page 26 lists working interests, oil payments, overriding royalties, royalty interests, and other related interests within Mineral Property, while expressly excluding sand, gravel, caliche, and other non-fuel minerals; it separately defines Personal Property used in exploration and production.',
  'The same page states the four tax years, a January 1 information date for each year, and a Section 23.01 and USPAP ad valorem appraisal context. The statute source independently supports only the statutory statements attributed to it.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article paraphrases the contract and does not imply that a listed category proves ownership, taxability, production, value, reserves, title, enforceability, or a private transaction conclusion.',
  'The factory body is not evidence. No owner, account, address, personal data, parcel, value, tax bill, legal description, production figure, reserve estimate, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, owner identity, tax conclusion, appraisal finding, approval statement, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'three_official_https_sources_with_exact_source_roles',
  'ward_board_packet_complete_file_hash_page_count_and_page_map_pass',
  'mineral_property_listed_interests_and_non_exhaustive_boundary_pass',
  'sand_gravel_caliche_and_other_non_fuel_exclusions_pass',
  'separate_personal_property_definition_pass',
  'tax_years_2026_2029_and_january_1_information_date_pass',
  'section_23_01_uspap_attribution_and_statute_source_pass',
  'no_owner_title_tax_value_production_reserves_or_enforceability_inference_pass',
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
  'no_factory_body_or_generic_county_value_risk_checklist_reuse_pass',
  'no_owner_account_address_personal_data_parcel_value_tax_bill_legal_description_production_reserve_title_or_transaction_data_pass',
  'no_taxability_ownership_private_value_production_reserve_enforceability_or_appraisal_conclusion_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article308_article309_article310_and_midland_rfp_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_maps_wells_rigs_money_logos_seals_signatures_official_forms_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
