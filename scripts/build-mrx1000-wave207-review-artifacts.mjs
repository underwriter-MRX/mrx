#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '207';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-2025-26-reappraisal-plan-mineral-work-separate-p-and-a-plan';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0822';
process.env.MRX_SELECTION_RANK = '279';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD 2025-26 Reappraisal Plan: Mineral Work and the Separate P&A Plan';
process.env.MRX_PRIMARY_KEYWORD = 'Martin CAD separate mineral reappraisal plan';
process.env.MRX_INLINE_KEYWORD = 'Martin CAD separate mineral reappraisal plan';
process.env.MRX_HERO_ALT =
  'Two separate plan volumes are joined by a brass route beside the exact Martin CAD reappraisal-plan title.';
process.env.MRX_INLINE_ALT =
  'A top-down source card and separate plan token sit above the exact Martin CAD separate mineral reappraisal plan keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://martincad.org/home/DataRecords', ['The official publisher page supplies the visible Reappraisal Plans section and separately displayed 2025-2026 general-plan and MIUP-plan links.','The adjacent links do not prove that the public MIUP PDF is the exact Pritchard & Abbott plan described as on file in the general plan, or validate either plan.']],
  ['https://martincad.org/Forms/GetDocument?fileName=1726094026_2025-2026+Reappraisal+Plan.pdf&subPath=Data+Records', ['The exact scanned general plan supplies complete-file controls and manually verified physical/printed pages 1, 4, 15, 16, and 17.','It does not validate current law, contractor performance, plan completeness or currentness beyond the observation date, or any property, ownership, appraisal, tax, transaction, production, royalty, or legal conclusion.']],
  ['https://www.martincad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1734123448_Biennial+Reappraisal+Plan.P%26A.MIUP.2025-26.pdf', ['The separately linked MIUP PDF supplies an adjacent publisher-controlled plan identity for comparison and routing context.','This article does not equate that public file with the general plan’s unspecified on-file Pritchard & Abbott plan without an explicit issuer statement.']],
  ['https://comptroller.texas.gov/taxes/property-tax/valuing-property.php', ['The Texas Comptroller page supplies current statewide context for appraisal-district and mass-appraisal roles.','It does not validate either Martin plan, identify which document controls an account, or support a property appraisal, tax, ownership, transaction, or legal result.']],
  ['https://comptroller.texas.gov/taxes/property-tax/county-directory/', ['The Texas Comptroller county directory supplies current routing guidance for local appraisal and property-tax questions.','It does not identify or interpret the on-file contractor plan, decide title or ownership, or support a mineral-rights transaction result.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Martin County valuation-risk identity and owns one distinct cross-document source-routing job.',
  'The 2026-08-29 factory directive is applied through a direct answer, stable claim IDs, evidence labels, provenance-versus-validity separation, exact retrieval and render controls, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the dark low-oblique two-volume routing hero and light strict top-down source-map scene are materially distinct and contain no official source data.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the Martin CAD publisher page, exact 2025-2026 scanned general reappraisal plan, separately linked MIUP plan, five manually reviewed general-plan pages, and current Texas Comptroller context and routing pages.',
  'The exact general-plan PDF is 1,014,454 bytes with SHA-256 344e62cc7374b4b0b83071e94f53a5ce190055c7217d899e17dfd940d31e813d; metadata reports 18 physical pages, 610.2 by 788.4 points, no encryption, and PDF 1.3.',
  'Programmatic extraction returned zero characters on every page, so manual renders control visible wording and pagination.',
  'Physical/printed page 1 render SHA-256 5f9dd7030418351808a96fa7c0f7ee857282883240d9ccc2c0bb55665bd85548 controls the plan identity, tax years, and adoption date.',
  'Physical/printed page 4 render SHA-256 75fefeb12654a7244912ceef746e1fc8bc8af5276a5352ddcdaadabaa9f115b6 controls the general-plan property-scope heading and three-year-cycle statement.',
  'Physical/printed page 15 render SHA-256 49dcab6af4c231b9ca4e9ae134d65dc25e420c9510a1f53511df14076b157f14 controls the source-attributed contractor and separate-plan-on-file handoff.',
  'Physical/printed pages 16 and 17 render SHA-256 values 0a378b6525a31c6638f70e49a209d7d790e21adef6e42ed611c4c0c12c52b4ef and d9e4fb621f8f3f246e783fc8e150cc49c5c77c15b03490e229da5bb2f3f9304e control the visible adoption-resolution context.',
  'The public MIUP link and the general plan’s on-file Pritchard & Abbott reference remain separate observations and are not silently normalized into an asserted exact-file identity.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article separates source routing from current-law interpretation, contractor performance, plan validation, ownership, title, property appraisal, tax, transaction, production, royalty, and legal outcomes and preserves MRX buyer-interest disclosure.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, contractor endorsement, property identity, record data, monetary figure, appraisal, tax, offer, ownership, outcome, or ranking or citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['five_distinct_https_sources','current_primary_source_http_review_pass','publisher_two-plan-link_relationship_pass','exact_general_pdf_size_sha256_page_count_geometry_encryption_and_version_pass','zero_character_text_extraction_manual_render_control_pass','physical_page_1_manual_render_hash_plan_identity_pass','physical_page_4_manual_render_hash_general_scope_pass','physical_page_15_manual_render_hash_contractor_plan_handoff_pass','physical_pages_16_17_manual_render_hash_adoption_context_pass','public_miup_link_not_equated_to_unspecified_on_file_plan_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_validity_boundary_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','no_current_law_contractor_performance_plan_validation_title_ownership_property_appraisal_tax_sale_value_offer_production_royalty_or_legal_advice_claim_pass','separate_plan_identity_not_silently_normalized_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_maps_property_records_money_charts_offers_prices_government_symbols_conclusions_decorative_pseudo_writing_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
