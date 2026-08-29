#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '208';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-property-search-lease-fields-not-ownership-proof';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0823';
process.env.MRX_SELECTION_RANK = '280';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD Property Search: Lease Fields Are Search Inputs, Not Ownership Proof';
process.env.MRX_PRIMARY_KEYWORD = 'Martin CAD mineral lease search fields';
process.env.MRX_INLINE_KEYWORD = 'Martin CAD mineral lease search fields';
process.env.MRX_HERO_ALT =
  'Blank search tiles stop at a sealed evidence folder beside the exact Martin CAD property-search title.';
process.env.MRX_INLINE_ALT =
  'A top-down evidence ladder appears above the exact Martin CAD mineral lease search fields keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://www.martincad.org/', ['The current public advanced property-search form supplies exact search-input labels and the Mineral property-type option.','Field presence does not validate an entered term, result, ownership, title, agency, lease, value, tax, production, royalty, transaction, or legal conclusion.']],
  ['https://www.martincad.org/Home/Search', ['The no-query Search Results page supplies the Mineral Property filter, visible-column labels, empty table headers, and the Owner Address versus Address label boundary.','No query was submitted, no result was returned, and no record or underlying data was validated.']],
  ['https://martincad.org/home/DataRecords', ['The official Data and Records page separately routes readers to reports, plans, and certified mineral-roll downloads.','A dataset link does not validate a search hit, ownership, title, lease status, appraisal, tax, sale value, or transaction result.']],
  ['https://comptroller.texas.gov/taxes/property-tax/valuing-property.php', ['The Texas Comptroller page supplies current general appraisal-district and mass-appraisal context.','Statewide context does not establish mineral title, lease validity, a Martin search result, or a sale value.']],
  ['https://comptroller.texas.gov/taxes/property-tax/county-directory/', ['The Texas Comptroller county directory routes current local appraisal and property-tax questions to the applicable office.','The directory does not verify a record, ownership, agency, title, value, tax liability, or transaction result.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Martin County valuation-timeline identity and owns one distinct interface-provenance job.',
  'The 2026-08-29 factory directive is applied through a direct answer, stable claim IDs, evidence labels, provenance-versus-validity separation, exact response and ordered-field controls, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the dark low-oblique search-boundary hero and bright strict top-down evidence ladder are materially distinct and contain no official record or personal data.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to five official sources: current Martin CAD home search, a no-query Search Results response, Data and Records routing, and two current Texas Comptroller context and routing pages.',
  'The exact home response is 286,695 bytes with SHA-256 40762c8f711aae3d69b28f9cefaedfd9baba424b89671f2b09abb2c2ec84bb9a.',
  'The exact no-query Search Results response is 113,445 bytes with SHA-256 61b5cccd322f6fbcb7e39fed14fd7f6187cc2baee557b3d271de4a1a88dda2e4.',
  'The exact Data and Records response is 85,639 bytes with SHA-256 10b1c8c4e00610e91abaef690f59728fdc5668d87da8b909c603e7bdf654a3fb.',
  'The Texas Comptroller valuing and county-directory responses are 134,841 and 138,875 bytes with SHA-256 values f8a36293f7b7d40a74d1116ff2dfe9e96a3d2e02a944f7955a43ab741f6f604d and b302ecd7f4728adcbeb4d2440645d16906f74fd30cceac84f3e653c69655dd86.',
  'The stable ordered field manifest has SHA-256 73edc6bb38fd5d2aa0baef265052162954e712742c0e993a4613c1cc837e4b7c and preserves Owner Address and Address as separate labels.',
  'No query was submitted, the table body was empty, no Agent option values were reproduced, and no owner, agent, address, property, account, or lease record was reviewed or reproduced.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article separates interface retrieval provenance from ownership, title, agency, authority, lease validity, decimal interest, appraisal, tax, sale value, offer, production, royalty, transaction, and legal conclusions and preserves MRX buyer-interest disclosure.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, personal data, property identity, result, value, tax, ownership, outcome, or ranking or citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['five_distinct_https_sources','current_primary_source_http_review_pass','no_query_interface_field_inventory_pass','exact_response_size_and_sha256_controls_pass','ordered_field_manifest_sha256_pass','owner_address_vs_address_not_silently_normalized_pass','no_agent_option_or_personal_record_reproduction_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_validity_boundary_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','no_owner_property_account_agent_or_lease_search_and_no_personal_record_reproduction_pass','no_ownership_title_agency_authority_lease_validity_decimal_appraisal_tax_sale_value_offer_production_royalty_transaction_or_legal_advice_claim_pass','owner_address_and_address_labels_not_normalized_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_maps_property_records_money_charts_offers_prices_government_symbols_conclusions_decorative_pseudo_writing_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
