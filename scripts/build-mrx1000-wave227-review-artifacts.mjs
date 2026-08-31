#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '227';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-district-county-field-codes-source-label-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0847';
process.env.MRX_SELECTION_RANK = '299';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC District, County, and Field Codes: A Source-Label Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Texas RRC district county field codes';
process.env.MRX_INLINE_KEYWORD = 'Texas RRC district county field codes';
process.env.MRX_HERO_ALT =
  'A bright records archive appears beside the exact Article 299 title.';
process.env.MRX_INLINE_ALT =
  'An overhead five-card crosswalk appears above the exact Texas RRC district county field codes keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/',
    [
      'The official RRC catalog describes Oil & Gas Field Name & Numbers records with district, field number, county code, and field name as separately named data elements.',
      'The article uses the catalog only to support label separation and does not infer a field boundary, well or lease relationship, ownership, production, reserves, or value.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/about-us/locations/oil-gas-counties-districts/',
    [
      'The official RRC page displays County, District Code, FIPS Code, and District Office in separate columns.',
      'The article preserves the page-specific FIPS label and does not silently rename it as an RRC county code or use it as a private-property key.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/media/sn4f1nyy/field_information_oga090.pdf',
    [
      'The official RRC manual supplies district geography, eight-digit field-number composition, separate field-name definitions, county-code occurrences, and file-key boundaries.',
      'The article does not convert administrative geography or file relationships into field boundaries, title, ownership, production, reserves, value, or a transaction conclusion.',
    ],
  ],
  [
    'https://webapps.rrc.texas.gov/DP/initializeFieldSearchAction.do',
    [
      'The current official Field Search surface establishes that query execution is a separate operational job.',
      'The article does not provide query inputs, execute a search, or record a result state.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/well-information/oil-leases-and-gas-wells-by-district-and-operator/',
    [
      'The official monthly index displays district, operator, lease, field, county, and oil-or-gas labels as separate context fields.',
      'The article does not treat co-display as equivalence or proof that a record belongs to a specific private mineral interest.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original broad statewide valuation identity is rejected. The replacement answers one distinct source-labeling question with a five-lane crosswalk and explicit non-equivalence rules.',
  'Information gain is concrete: it prevents RRC district, county, field-number, field-name, and page-specific FIPS labels from being collapsed into one ambiguous code field.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the bright low-three-quarter archive and strict-overhead pale-stone five-card crosswalk are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 1,647,508 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The current RRC catalog and district page supply the separately named district, county, field-number, field-name, FIPS, and office labels.',
  'The official RRC Field Information manual supplies district geography, eight-digit field-number composition, field-name, county-code, and associated-file-key boundaries.',
  'The current Field Search and district-and-operator pages establish query-job separation and co-displayed context without establishing a private-property relationship.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official source, source-owned label, or explicit non-equivalence and stop condition.',
  'The article does not use a source label to establish a field boundary, well or lease relationship, title, ownership, authority, production, reserves, private value, offer quality, buyer status, or transaction outcome.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, real identifier, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  'district_code_county_code_field_number_field_name_and_page_fips_non_equivalence_pass',
  'rrc_district_administrative_geography_and_multi_district_field_boundary_pass',
  'eight_digit_field_number_composition_pass',
  'field_name_and_associated_field_distinction_pass',
  'multi_county_field_and_repeated_county_code_occurrence_pass',
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
  'rrc_district_county_field_and_fips_labels_not_merged_pass',
  'source_label_not_misrepresented_as_field_boundary_well_lease_or_property_connection_pass',
  'no_title_ownership_production_reserves_private_value_offer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_real_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
