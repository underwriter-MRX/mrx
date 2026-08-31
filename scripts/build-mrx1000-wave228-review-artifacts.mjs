#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '228';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-district-code-conversion-file-values-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0848';
process.env.MRX_SELECTION_RANK = '300';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC District Code Conversion: Why File Values 07-14 Need a Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Texas RRC district code conversion';
process.env.MRX_INLINE_KEYWORD = 'Texas RRC district code conversion';
process.env.MRX_HERO_ALT =
  'A dark data-quality studio appears beside the exact Article 300 title.';
process.env.MRX_INLINE_ALT =
  'An overhead dual-rail audit board appears above the exact Texas RRC district code conversion keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://rrc.texas.gov/media/01wfdxlx/oilgasfieldrules.pdf',
    [
      'The official RRC Oil and Gas Field Information data dictionary supplies a field-table-value to district-value conversion for 01 through 14 and marks 8B reserved for future use.',
      'The article treats the mapping as source-specific and does not apply it to another file, screen, form, query, or regulatory workflow without its own dictionary.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/media/503hufzj/gasleaseswithinhighcostgas.pdf',
    [
      'The official Tight Sands Gas Leases data dictionary independently supplies the same district-column conversion and reserved 8B status.',
      'The article uses this source as corroboration for that dataset context, not as a universal district-code replacement rule.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/media/tnrfu143/t-1_edi_user_guide.pdf',
    [
      'The official T-1 EDI User Guide distinguishes normal alphanumeric district designations from a special numeric district field.',
      'The article confines the guide statement that East Texas oil field production in district 06 may use 06 or 6E to the T-1 reporting context.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/media/iupjnrjn/w10_g10-edi-specifications.pdf',
    [
      'The official W-10/G-10 EDI specification defines District Code as Varchar (2) and lists accepted alphanumeric values.',
      'The accepted list omits reserved 8B, so the article does not describe 8B as a currently accepted filing value.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/about-us/locations/oil-gas-counties-districts/',
    [
      'The current official RRC page visibly uses alphanumeric public district labels including 7B, 7C, and 8A.',
      'The article uses the page only to confirm current label form and does not infer county, field, asset, ownership, production, or value relationships.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original broad valuation-risk identity is rejected. The replacement answers one distinct file-import question with a source-scoped conversion table and a reproducible validation pattern.',
  'Information gain is concrete: the article identifies eight non-identity rows, the reserved 8B row, raw-versus-translated storage, text typing, conversion status, exception handling, and a checksum workflow.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark eye-level translation-gate studio and strict-overhead pale-stone dual-rail audit board are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 1,481,362 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'Two RRC data dictionaries independently supply the 01-through-14 conversion and mark 8B reserved for future use.',
  'The T-1 guide supplies the limited 6E/06 reporting exception, while the W-10/G-10 specification supports two-character text storage and omits reserved 8B from its accepted list.',
  'The current RRC county-and-district page confirms current alphanumeric labels without supplying a universal conversion rule.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official source, a dataset-specific mapping, or an explicit stop condition.',
  'The article does not globalize the conversion, treat 8B as accepted, expand the T-1 6E/06 exception, or infer county, field, well, lease, tract, title, ownership, production, reserves, value, offer, buyer, or transaction conclusions.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, real identifier, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  'field_table_values_01_through_14_to_district_label_mapping_pass',
  'non_identity_rows_07_through_14_pass',
  'reserved_8b_future_use_and_not_currently_accepted_pass',
  't1_6e_06_exception_confined_to_guide_context_pass',
  'w10_g10_varchar_two_and_accepted_code_list_pass',
  'raw_translated_dictionary_version_status_exception_and_text_type_pass',
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
  'dataset_specific_conversion_not_universal_rewrite_pass',
  'reserved_8b_not_presented_as_currently_accepted_pass',
  't1_6e_06_rule_not_generalized_pass',
  'no_county_field_boundary_well_lease_tract_title_ownership_production_reserves_value_offer_buyer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_real_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
