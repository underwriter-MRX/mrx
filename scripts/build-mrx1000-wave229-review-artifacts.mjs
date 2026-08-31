#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '229';
process.env.MRX_ARTICLE_SLUG = 'texas-rrc-field-classification-codes-associated-field-numbers';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0849';
process.env.MRX_SELECTION_RANK = '301';
process.env.MRX_EXPECTED_SOURCE_COUNT = '6';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC Field Classification Codes: G, O, B, and Associated Field Numbers';
process.env.MRX_PRIMARY_KEYWORD = 'Texas RRC field classification codes';
process.env.MRX_INLINE_KEYWORD = 'Texas RRC field classification codes';
process.env.MRX_HERO_ALT =
  'Three unlabeled archival classification trays appear beside the exact Article 301 title.';
process.env.MRX_INLINE_ALT =
  'An overhead row-and-pointer audit mat appears above the exact Texas RRC field classification codes keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://rrc.texas.gov/media/01wfdxlx/oilgasfieldrules.pdf',
    [
      'The official RRC Oil and Gas Field Information data dictionary defines og_field, field_class_code, og_field_info, oil_or_gas_code, field_id, field number, and the associated-field pointer.',
      'The article preserves the manual endpoint, document age, exact table and field labels, and source-scoped g, o, and b semantics without treating them as a property relationship.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/media/sn4f1nyy/field_information_oga090.pdf',
    [
      'The official legacy Field Information tape-layout manual corroborates G, O, and B class values and separate associated-gas-field pointer records.',
      'The article labels this source legacy and never represents its tape layout as proof of current Oracle schema parity.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/',
    [
      'The current official RRC catalog presents Oil and Gas Field Name and Numbers and Oil and Gas Field Rules as separate monthly products.',
      'The article uses the catalog only for current product identity, cadence, and separation, not for row-level field claims.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/field-data/',
    [
      'The current official RRC field-data page identifies the Field Information Query and Proration Schedule by Field as separate field-level entry points.',
      'The article uses the page to distinguish entry points, not to claim a query result or property match.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/research-queries/',
    [
      'The current official query catalog lists Field Rules Query as a nightly system and separates it from wellbore, production, and proration queries.',
      'The article uses the page only to preserve query-system boundaries and does not report query execution or results.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/research-queries/about-oil-gas-data-queries/',
    [
      'The current official RRC explanation states that each query is one slice of the larger Oil and Gas System and distinguishes wellbore, completion, API, lease or well ID, district, field, and operator contexts.',
      'The article uses that separation to stop false joins and never promotes a field code or pointer into evidence about a well, lease, tract, ownership, production, or value.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original statewide valuation-timeline identity is rejected. The replacement answers one distinct field-table parsing question with exact labels, one-row versus two-row handling, pointer resolution, and explicit stop conditions.',
  'Information gain is concrete: the article distinguishes field_class_code from oil_or_gas_code, preserves og_field and og_field_info cardinality, records the manual label inconsistency, and provides unresolved, ambiguous, and version-drift failure states.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the angled sunlit three-tray archive and strict-overhead graphite row-and-pointer mat are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Six controlled official RRC source objects total 1,727,228 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The current-catalog manual endpoint defines og_field and og_field_info columns, G/O/B semantics, row cardinality, and the related-field-number pointer while retaining 2008 document metadata.',
  'The 2019 tape-layout manual is used only as legacy corroboration, and the current catalog and query pages establish product and system separation rather than row-level facts.',
  'The article preserves the associated_field_id table label and associate_field_id narrative label instead of silently normalizing the source inconsistency.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official source, exact table or field context, current-versus-legacy role, or explicit stop condition.',
  'The article does not make G/O/B a property classification, treat an associated-field pointer as a universal join, or infer a field boundary, county, district, well, lease, tract, API, title, ownership, production, reserves, value, offer, buyer, or transaction conclusion.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, real identifier, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'six_distinct_official_https_sources_with_current_and_legacy_roles',
  'og_field_field_class_code_g_o_b_semantics_pass',
  'og_field_info_one_row_or_two_row_cardinality_pass',
  'oil_or_gas_code_context_pass',
  'associated_field_id_and_associate_field_id_label_preservation_pass',
  'related_field_number_pointer_scope_pass',
  'raw_code_table_field_field_id_field_number_row_role_source_version_pointer_status_exception_pass',
  'controlled_source_bytes_and_sha256_identity_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_claim_adjacent_citation_and_current_source_boundary_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'field_class_not_presented_as_property_classification_pass',
  'associated_field_pointer_not_presented_as_universal_join_pass',
  'current_catalog_endpoint_and_2008_document_age_distinguished_pass',
  'legacy_tape_layout_not_presented_as_current_schema_parity_pass',
  'no_field_boundary_county_district_well_lease_tract_api_title_ownership_production_reserves_value_offer_buyer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_real_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
