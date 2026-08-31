#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '246';
process.env.MRX_ARTICLE_SLUG =
  'texas-recorded-mineral-documents-instrument-number-volume-page-certified-copy-status';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0891';
process.env.MRX_SELECTION_RANK = '318';
process.env.MRX_EXPECTED_SOURCE_COUNT = '3';
process.env.MRX_ARTICLE_TITLE =
  'Texas Recorded Mineral Documents: Instrument Number, Volume/Page, and Certified-Copy Status';
process.env.MRX_PRIMARY_KEYWORD = 'Texas recorded mineral document locator fields';
process.env.MRX_INLINE_KEYWORD = 'Texas recorded mineral document locator fields';
process.env.MRX_HERO_ALT =
  'A county-records desk and two copy treatments appear beside the exact Article 318 title.';
process.env.MRX_INLINE_ALT =
  'A top-down five-field record-control matrix appears below the exact Texas locator-field keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://tcss.legis.texas.gov/resources/PR/htm/PR.11.htm',
    [
      'Texas Property Code Chapter 11 supplies the statewide recording-county rule in Section 11.001, the recognized volume/page, film-code, and county-clerk-file-number locator forms in Section 11.007, the mineral-lease example in Section 11.008(a), and the online-database completeness warning in Section 11.008(k).',
      'It does not identify a particular owner, determine current title, certify a retrieved copy, select a legally sufficient document, or resolve an owner-specific transaction.',
    ],
  ],
  [
    'https://www.txcourts.gov/media/1457469/county-clerk-manual-2023-edition.pdf',
    [
      'The official 2023 County Clerk Manual supplies the recording-location distinction on PDF page 27, printed page II-5, and the clerk-certified-copy description on PDF page 45, printed page II-23.',
      'The manual does not prove that an online image is complete, that a particular copy is certified, that a person currently owns an interest, or that an instrument is sufficient for an individualized legal, title, tax, or transaction purpose.',
    ],
  ],
  [
    'https://www.tsl.texas.gov/ref/propertyresearch',
    [
      'The Texas State Library and Archives Commission page supplies the statewide research direction that real-property records are maintained by the county where the property is located and that researchers should contact the County Clerk for locating help.',
      'It does not provide the record itself, certify a copy, determine title, or replace the applicable county custodian or qualified adviser.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original cash-for-mineral-rights document identity is rejected. The final article answers one narrow question: which locator and copy-status fields should be transcribed separately from an already-found Texas recorded mineral document?',
  'Information gain is concrete: a five-field control model, statewide statutory locator forms, separate online/plain/certified copy states, exact source-object hashes and page locators, stable claim IDs, a source-to-conclusion stop table, and explicit adjacent-article ownership boundaries.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique hand-and-archive-drawer hero and bright people-free strict-overhead five-column matrix are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The captured Texas Property Code Chapter 11 HTML is 22,639 bytes with SHA-256 274fa3cfda2b15d503c12bf5ea439fbaab1a262ab7acc3623db757855f1fe5f3.',
  'Section 11.001 ties effective recording to the county containing part of the property; Section 11.007 recognizes volume/page, film code, or county-clerk file number references to county real-property records.',
  'Section 11.008(a) includes a mineral lease within that section’s recorded real-property instrument definition, while Section 11.008(k) warns that an online database is not the official repository and may not reflect complete or unaltered official-record contents.',
  'The captured Texas County Clerk Manual is 2,809,948 bytes, 279 PDF pages, and SHA-256 3a9d4200c52a10651949c6a9009020f177153159867e24f9eab0c28c01a2396f; PDF pages 27 and 45 were rendered and visually inspected.',
  'PDF page 27, printed II-5, distinguishes book volume/page location from the unique instrument number that may identify an electronically recorded and stored instrument; PDF page 45, printed II-23, describes a clerk-certified or attested copy and notes scanned-instrument certifications generally reference an instrument number.',
  'The captured TSLAC research page is 48,344 bytes with SHA-256 4caebc2be12f3b85f8f88b269b69df398e67365f06fbf5b39d5baa2e9564aa24 and was last modified February 18, 2025.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article reports locator and copy-status distinctions only and does not tell an owner what instrument transfers an interest, whether the record chain is complete, whether a copy is admissible or sufficient, or who currently owns the interest.',
  'The factory body is not evidence. No owner, parcel, legal description, instrument identifier, volume, page, film code, signature, seal, certification, value, tax result, title conclusion, production figure, offer, or transaction record appears.',
  'The organizational author is the MRX Editorial Team; fictional guides are not authors; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no government affiliation, seal, certification, title conclusion, ownership conclusion, recommendation, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'three_official_https_sources_with_exact_source_roles',
  'texas_property_code_complete_html_hash_and_section_locator_pass',
  'texas_county_clerk_manual_complete_file_hash_page_count_and_visual_page_map_pass',
  'tslac_page_hash_last_modified_and_county_custodian_scope_pass',
  'recording_county_rule_attribution_without_owner_specific_legal_conclusion_pass',
  'volume_page_film_code_and_county_clerk_file_number_locator_forms_pass',
  'online_database_not_official_repository_and_may_be_incomplete_boundary_pass',
  'certified_copy_attests_replica_not_current_ownership_boundary_pass',
  'already_found_instrument_no_retrieval_walkthrough_boundary_pass',
  'adjacent_document_package_redaction_sale_checklist_and_cpa_handoff_nonduplication_pass',
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
  'no_owner_parcel_legal_description_instrument_id_volume_page_film_code_signature_seal_certification_value_tax_title_production_offer_or_transaction_data_pass',
  'no_retrieval_walkthrough_ownership_proof_title_opinion_legal_sufficiency_or_certification_proves_current_ownership_claim_pass',
  'mrx_editorial_team_author_fictional_guide_not_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article0145_package_index_article0007_redaction_article0882_sale_documents_article0652_retrieval_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_pseudo_text_letters_digits_dates_coordinates_signatures_addresses_logos_watermarks_seals_flags_courthouse_emblems_badges_cash_coins_dollar_signs_handshakes_gavels_oil_rigs_or_ownership_conclusions_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
