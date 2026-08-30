#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '209';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-mineral-property-three-approaches-sufficient-data-condition';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0829';
process.env.MRX_SELECTION_RANK = '281';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD Mineral Property Page: Three Approaches and the Sufficient-Data Condition';
process.env.MRX_PRIMARY_KEYWORD = 'Midland CAD mineral property appraisal approaches';
process.env.MRX_INLINE_KEYWORD = 'Midland CAD mineral property appraisal approaches';
process.env.MRX_HERO_ALT =
  'Three evidence stations meet a translucent data gate beside the exact Midland CAD mineral-property title.';
process.env.MRX_INLINE_ALT =
  'Three top-down evidence plates flow through a data sieve above the exact Midland CAD appraisal-approaches keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://midcad.org/mineral-property/', ['The current official Midland CAD page supplies the contractor statement, stated mineral-property scope, three named approach labels, and sufficient-data condition.','The page does not identify an account-specific method, data-sufficiency result, input, reconciliation, appraisal accuracy, ownership, title, tax, protest, sale value, offer, production, royalty, transaction, or legal conclusion.']],
  ['https://midcad.org/publications-2/', ['The current official Publications page separately lists annual reports, mass appraisal reports, reappraisal plans, and other documents.','A listing does not import a report into the Mineral Property page or validate an account, appraisal, title, tax, sale value, or transaction result.']],
  ['https://midcad.org/open-records/', ['The current official Open Records page separately lists certified and preliminary rolls, notices, and mineral files.','A listed file does not prove ownership, title, account-level method, appraisal validity, tax liability, private sale value, or another property-specific conclusion.']],
  ['https://comptroller.texas.gov/taxes/property-tax/county-directory/midland.php', ['The Texas Comptroller directory supplies current issuer-routing evidence for Midland Central Appraisal District and midcad.org.','Directory provenance does not endorse every district statement or validate a contract, account, appraisal, tax, title, or transaction result.']],
  ['https://comptroller.texas.gov/taxes/property-tax/valuing-property.php', ['The Texas Comptroller page supplies current statewide context for common appraisal approaches, appraisal districts, and mass appraisal.','Statewide context does not determine the approach, data sufficiency, input, result, or private transaction value for a Midland mineral account.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Midland County valuation and family-decision identity and owns one distinct current-source conditionality job.',
  'The 2026-08-29 factory directive is applied through a direct answer, stable claim IDs, evidence labels, provenance-versus-validity separation, controlled source hashes, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the dark low-oblique three-station gate hero and bright strict top-down three-plate data-sieve image are materially distinct and contain no official record, property data, result, or conclusion.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to five official sources: the current Midland CAD Mineral Property, Publications, and Open Records pages plus the Texas Comptroller Midland directory and Valuing Property page.',
  'The controlled Mineral Property API response is 669 bytes with SHA-256 dbab9120e18eb86b81130445a5aa12aa959ca5a0af162ba2847248bee58ce1d5, page ID 5533, modified timestamp 2025-04-10T16:32:11, and canonical URL https://midcad.org/mineral-property/.',
  'The controlled Publications and Open Records API responses are 10,236 and 9,988 bytes with SHA-256 values ecfab3416d57144355170bdea0d5dbfcc087ee932bdae62c0da46545d7d987de and 9a5465430a510a716ab162a0ad2287ea83da12d677bd17456ef525272d4af482.',
  'The Texas Comptroller Midland directory and Valuing Property responses are 121,531 and 134,841 bytes with SHA-256 values 236fb5f5686a90b91c02047d50361f8639c498facad7ecb4cc3d973f6e28d813 and f8a36293f7b7d40a74d1116ff2dfe9e96a3d2e02a944f7955a43ab741f6f604d.',
  'No owner, property, account, or mineral-file search was performed and no record was reviewed or reproduced.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article separates a current district-wide method statement from account-level application, data sufficiency, contractor performance, appraisal accuracy, ownership, title, taxes, protest, private sale value, offers, production, royalties, and legal conclusions while preserving MRX buyer-interest disclosure.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, account, owner, property, method result, appraisal, value, tax, ownership, outcome, or ranking or citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['five_distinct_https_sources','current_primary_source_http_review_pass','controlled_wp_api_identity_bytes_sha256_and_modified_timestamp_pass','publications_and_open_records_source_lane_separation_pass','comptroller_official_domain_routing_pass','no_owner_property_account_or_mineral_file_search_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_validity_boundary_pass','sufficient_data_condition_not_silently_normalized_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','property_tax_appraisal_not_converted_to_private_transaction_value_pass','no_account_specific_method_data_sufficiency_contractor_performance_appraisal_accuracy_ownership_title_tax_protest_sale_value_offer_production_royalty_or_legal_conclusion_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_maps_property_records_money_formulas_charts_values_results_government_symbols_conclusions_decorative_pseudo_writing_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
