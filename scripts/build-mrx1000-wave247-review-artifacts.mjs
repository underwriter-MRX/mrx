#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '247';
process.env.MRX_ARTICLE_SLUG =
  'texas-real-property-record-grantor-grantee-index-name-role-locator-search-log';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0892';
process.env.MRX_SELECTION_RANK = '319';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Texas Real-Property Record Grantor-Grantee Index: Name, Role, and Locator Search Log';
process.env.MRX_PRIMARY_KEYWORD = 'Texas grantor grantee index search log';
process.env.MRX_INLINE_KEYWORD = 'Texas grantor grantee index search log';
process.env.MRX_HERO_ALT =
  'An archival index drawer and a selected blank card appear beside the exact Article 319 title.';
process.env.MRX_INLINE_ALT =
  'A people-free overhead county-index search-log worksheet appears below the exact Texas grantor-grantee keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://statutes.capitol.texas.gov/Docs/SDocs/LOCALGOVERNMENTCODE.pdf',
    [
      'Texas Local Government Code Section 193.003 supplies the statewide requirement for an alphabetical real-property-record index, a specific recording-location reference, and grantor/grantee cross-indexing.',
      'It does not prove that a displayed person is the intended person, that a search is exhaustive, that an instrument affects a mineral interest, or that any person currently owns an interest.',
    ],
  ],
  [
    'https://www.txcourts.gov/media/1457469/county-clerk-manual-2023-edition.pdf',
    [
      'The official 2023 County Clerk Manual explains party-name indexing, specific record location, and separate grantor and grantee indexes on PDF page 28, printed page II-6.',
      'The manual does not make an online interface complete, resolve a name ambiguity, certify a copy, determine title, or supply individualized legal advice.',
    ],
  ],
  [
    'https://www.tsl.texas.gov/arc/local/aboutrecords.html',
    [
      'The Texas State Library and Archives Commission About County Records page explains direct grantor and reverse grantee indexing and cautions that older county indexes may not be in perfect alphabetical sequence.',
      'It does not establish the coverage of a current county portal, prove that a name variant was indexed, or decide ownership or legal effect.',
    ],
  ],
  [
    'https://www.tsl.texas.gov/ref/propertyresearch',
    [
      'The Texas State Library and Archives Commission property-research page explains that real-property records are maintained by the county where the property is located and that online availability and older-record practices vary by county.',
      'It does not provide the instrument, prove absence after a failed search, or replace the county custodian or qualified title and legal review.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The planning cash-for-mineral-rights document identity is rejected. The final article answers one narrow question: how should one Texas county grantor/grantee index attempt be recorded so another authorized reviewer can reproduce it?',
  'Information gain is concrete: a ten-field attempt row, separate name-variant and role controls, four bounded result states, source age and complete-file identity, stable claim IDs, a source-to-conclusion stop table, and explicit adjacent-article ownership boundaries.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the low side-angle archival-drawer hero and bright people-free strict-overhead search-log worksheet are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The captured official statutes response is 250,874 bytes with SHA-256 dbfba8a96dc3cd584157ca66aaafdf67e0ed15dd5a0c8a58f3d4bd0f109fc646; Local Government Code Section 193.003 requires an alphabetical real-property index, specific recording location, and grantor/grantee cross-index.',
  'The captured County Clerk Manual is 2,809,948 bytes, 279 PDF pages, and SHA-256 3a9d4200c52a10651949c6a9009020f177153159867e24f9eab0c28c01a2396f; PDF page 28, printed page II-6, was rendered and visually inspected.',
  'The captured TSLAC About County Records page is 51,720 bytes with SHA-256 ce8efdbd335ecfb9581468e8cb159e4aa7174743349413e03db04981a69fa05b and supplies the direct-grantor, reverse-grantee, and imperfect historical-alphabetization boundaries.',
  'The captured TSLAC property-research page is 48,344 bytes with SHA-256 4caebc2be12f3b85f8f88b269b69df398e67365f06fbf5b39d5baa2e9564aa24 and supplies county-custodian, online-availability, and older-record variability context.',
  'No source supports treating an index hit as proof of identity, current ownership, chain of title, instrument completeness, legal effect, or a transaction result; no displayed result is bounded to that exact attempt.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article records one index attempt only and does not tell an owner what document transfers an interest, whether the chain is complete, whether a copy is certified or sufficient, who currently owns the interest, or what action is legally required.',
  'The factory body is not evidence. No owner, parcel, legal description, real name, instrument identifier, signature, value, tax result, title conclusion, production figure, offer, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no government affiliation, seal, identity conclusion, ownership conclusion, recommendation, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_official_https_sources_with_exact_source_roles',
  'texas_local_government_code_section_193_003_index_and_cross_index_scope_pass',
  'texas_county_clerk_manual_complete_file_hash_page_count_and_visual_page_map_pass',
  'tslac_about_county_records_hash_direct_reverse_and_historical_index_boundary_pass',
  'tslac_property_research_hash_county_custodian_and_interface_variability_scope_pass',
  'exact_name_variant_role_date_range_and_route_reproducibility_controls_pass',
  'no_result_displayed_does_not_prove_absence_boundary_pass',
  'index_hit_is_locator_lead_not_identity_ownership_title_or_legal_effect_boundary_pass',
  'adjacent_package_record_control_copy_retrieval_and_multi_source_log_nonduplication_pass',
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
  'no_factory_body_or_generic_cash_for_mineral_rights_document_checklist_reuse_pass',
  'no_real_name_owner_parcel_legal_description_instrument_id_signature_value_tax_title_production_offer_or_transaction_data_pass',
  'no_ownership_determination_chain_of_title_copy_certification_legal_effect_or_no_record_exists_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article0145_package_index_article0318_record_control_article0652_retrieval_and_county_multi_source_log_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_letters_digits_dates_signatures_addresses_official_seals_flags_courthouse_emblems_logos_watermarks_ui_screens_cash_coins_dollar_signs_handshakes_gavels_oil_rigs_or_ownership_claims_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
