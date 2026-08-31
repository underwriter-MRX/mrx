#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '231';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2026-mineral-data-files-2260-byte-txt-records-nested-csv-header';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0851';
process.env.MRX_SELECTION_RANK = '303';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2026 Mineral Data Files: 2,260-Byte TXT Records and a Nested CSV Header';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD 2026 mineral data files';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD 2026 mineral data files';
process.env.MRX_HERO_ALT =
  'A navy archive case and blank data ribbon appear beside the exact Article 303 title.';
process.env.MRX_INLINE_ALT =
  'A side-angle data ribbon inspection gate appears above the exact Upton CAD 2026 mineral data files keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://uptoncad.org/home/DataRecords',
    [
      'The Upton CAD page visibly labels a 2026 Certified Mineral Appraisal Roll ZIP.',
      'The article uses the page only for publisher route, visible label, and access date.',
    ],
  ],
  [
    'https://uptoncad.org/Forms/ZipFileDownload?fileName=1784839292_UPTON+CAD+2026+CERTIFIED+MINERAL+OPEN+RECORDS.zip&subPath=Data+Records',
    [
      'The retained official ZIP supports archive bytes, SHA-256, seven-member central-directory identity, and exact TXT and CSV member identities.',
      'Bounded byte-level inspection supports only the first two TXT record lengths, one physical CSV header, one nested-header parse, and one data-record field count.',
    ],
  ],
  [
    'https://www.uptoncad.org/Home/Search',
    [
      'The visible property-search interface includes property type, lease number, and lease name fields.',
      'The article does not claim execution, a result, ownership, correctness, completeness, or legal sufficiency.',
    ],
  ],
  [
    'https://uptoncad.org/Forms/GetDocument?fileName=1749827956_open+records+request.pdf&subPath=Data+Records',
    [
      'The current district form supplies an official route for a record or source clarification.',
      'The article does not claim that a request was submitted or answered.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/upton.php',
    [
      'The Comptroller directory separates Upton appraisal-district and tax-office contacts.',
      'The article uses that directory only for role routing, not a property, tax, title, or valuation conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original valuation identity is rejected, and the first layout identity is superseded by an exact source collision. The final article answers one distinct Upton TXT/CSV format-inspection question.',
  'Information gain is concrete: exact member hashes, two bounded TXT length observations, one nested CSV-header anomaly, one 244-field data-record reconciliation, reproducible parser settings, and explicit stop states.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the high-angle archive case and low side-angle measurement-gate compositions are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Six controlled first-party objects total 87,515,855 bytes with individual SHA-256 identities; five support article claims and the reappraisal plan remains controlled background only.',
  'The retained ZIP is 79,434,297 bytes, lists seven members totaling 946,089,069 uncompressed bytes, and binds exact TXT and CSV member hashes.',
  'The first two TXT records measured 2,260 bytes after CRLF removal; the first CSV physical line measured 5,233 bytes including CRLF and parsed first to one outer field, then to 244 nested labels in a bounded second pass.',
  'The first inspected CSV data record measured 2,993 bytes including CRLF and parsed to 244 fields; this is explicitly not full-file parity, encoding, schema, or semantic proof.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No owner-level row is printed, copied, published, uploaded, or used for a person, account, lease, property, ownership, appraisal, tax, production, value, offer, or transaction conclusion.',
  'The district, tax-office, title, qualified-review, and possible MRX buyer-interest boundaries are visible.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, property data, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_official_https_sources_with_exact_source_roles',
  'controlled_source_bytes_and_sha256_identity_pass',
  'seven_member_archive_total_and_txt_csv_member_hashes_pass',
  'first_two_txt_record_raw_byte_and_crlf_scope_pass',
  'nested_csv_header_two_pass_parser_scope_pass',
  'one_data_record_244_field_reconciliation_scope_pass',
  'no_full_file_parity_encoding_schema_or_semantic_claim_pass',
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
  'source_collision_with_article274_superseded_and_excluded_pass',
  'no_row_content_print_copy_publish_upload_or_model_prompt_pass',
  'no_person_account_lease_property_ownership_appraisal_tax_production_value_offer_or_transaction_conclusion_pass',
  'no_full_file_parity_encoding_validity_schema_validity_or_field_semantic_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_charts_maps_diagrams_logos_seals_government_marks_official_forms_real_identifiers_property_data_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
