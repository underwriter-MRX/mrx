#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '212';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0832';
process.env.MRX_SELECTION_RANK = '284';
process.env.MRX_EXPECTED_SOURCE_COUNT = '3';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits';
process.env.MRX_PRIMARY_KEYWORD = 'Midland CAD certified mineral roll file layout';
process.env.MRX_INLINE_KEYWORD = 'Midland CAD certified mineral roll file layout';
process.env.MRX_HERO_ALT =
  'A sealed archive case, seven blank member objects, and privacy barriers appear beside the exact Article 284 title.';
process.env.MRX_INLINE_ALT =
  'A top-down control-file workflow stops before sealed data files above the exact Midland CAD file-layout keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://midcad.org/open-records/',
    [
      'The current official Open Records page supplies the visible 2026 Midland Certified Mineral Roll link under Mineral Files.',
      'The link is routing evidence only and does not validate archive contents, completeness, owner identity, property applicability, ownership, title, appraisal, tax, value, production, royalties, or legal effect.',
    ],
  ],
  [
    'https://midcad.org/wp-content/uploads/2026/07/MIDLAND-CAD-2026-CERTIFIED-MINERAL-OPEN-RECORDS.zip',
    [
      'The controlled ZIP supplies exact response metadata, archive bytes, SHA-256 identity, seven member names and sizes, the file-layout control document, the aggregate recap, and the inventory-listing control report.',
      'Archive structure and control-document fields do not prove owner-level data accuracy, completeness, currency, property applicability, title, appraisal correctness, tax treatment, private value, or legal effect; no owner-level row was inspected or reproduced.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/midland.php',
    [
      'The Texas Comptroller directory supplies issuer and official-domain routing evidence for Midland Central Appraisal District and midcad.org.',
      'Issuer provenance does not endorse every district file or validate any record, account, appraisal, tax, title, value, production, royalty, or transaction result.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Midland County value-risk identity is rejected. The replacement owns one answer-first privacy-safe file-opening sequence inside the exact certified-mineral archive.',
  'Information gain is concrete: exact response metadata, archive hash, seven-member inventory, uncompressed size, control-file order, field-category boundaries, aggregate recap role, and an explicit stop before record-level inspection.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the low-oblique sealed archive scene and bright strict top-down control-file workflow are materially distinct.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The archive was retrieved from the official Midland CAD route at 140,096,354 bytes with SHA-256 61ac40ece8e0f52224c9c95e9d4a22491c040057caa72859a3918de222e7eaa4; its seven members total 2,400,158,157 uncompressed bytes.',
  'The eight-page 46,370-byte file-layout PDF has SHA-256 f0b34cc4b7a96e6cd5480f350f28554b3af72fc9cfd45959763f76d0aef1b020 and describes a 2,260-position record with owner/contact, account, acreage, interest, jurisdiction, and value fields.',
  'The three-page 4,699-byte recap has SHA-256 8ac7f7b8231ffbb31ce2c31db46a4a54546d62605b3d9519cec9c58ced2ab589 and reports 442,395 total records on tape; the article keeps this separate from Article 282 and any owner-level conclusion.',
  'No row in the appraisal-roll PDF, TXT, or CSV was opened, extracted, sampled, searched, copied, or republished.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article discloses that the layout names personal contact and account fields, limits the guide to archive control, prohibits owner-row republication, and directs official interpretation to Midland CAD.',
  'The article supplies no valuation, ownership, title, appraisal, tax, privacy-law, legal-effect, property, production, royalty, offer, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, data validation, property fact, owner identity, result, ranking, or citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'three_distinct_https_sources',
  'current_official_open_records_route_pass',
  'archive_http_metadata_bytes_and_sha256_pass',
  'seven_member_central_directory_names_sizes_and_total_pass',
  'file_layout_eight_physical_pages_metadata_bytes_sha_and_field_categories_pass',
  'recap_three_physical_pages_bytes_sha_aggregate_count_pass',
  'master_inventory_control_report_scope_pass',
  'no_owner_level_row_open_extract_sample_search_copy_or_republication_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
  'archive_identity_vs_record_validity_boundary_pass',
  'no_silent_normalization_pass',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_and_claim_adjacent_citation_integrity_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'archive_and_layout_metadata_not_converted_to_owner_property_ownership_title_appraisal_tax_value_production_royalty_legal_effect_privacy_law_or_transaction_result_pass',
  'personal_contact_and_account_field_categories_disclosed_without_values_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_maps_property_records_owner_rows_money_formulas_charts_values_results_government_symbols_conclusions_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
