#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '189';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0792';
process.env.MRX_SELECTION_RANK = '261';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD 2025 Certified Mineral Dataset ZIP: One-Member Integrity Record';
process.env.MRX_PRIMARY_KEYWORD = 'Howard CAD 2025 certified mineral dataset';
process.env.MRX_INLINE_KEYWORD = 'Howard CAD 2025 certified mineral dataset';
process.env.MRX_HERO_ALT =
  'A navy archive capsule and one blank file sleeve appear beside the exact Howard CAD ZIP integrity-record title.';
process.env.MRX_INLINE_ALT =
  'An overhead one-container, one-member evidence board appears above the Howard CAD 2025 certified mineral dataset phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://howardcad.org/downloads/',
    [
      'The official Howard CAD downloads page supplies the visible 2025 Certified Mineral Roll label, exact destination relationship, and separate 2026 and 2025 file lanes.',
      'It does not establish workbook contents, a person or property match, ownership, title, acreage, appraisal, tax, mineral-rights sale value, offer quality, or legal effect.',
    ],
  ],
  [
    'https://howardcad.org/wp-content/uploads/2025/08/HOWARD_2025Certified_Mineral_AppraisalRoll_Dataset-1.zip',
    [
      'The exact official ZIP supplies the complete-file HTTP, MIME, byte, Last-Modified, ETag, SHA-256, central-directory, member-metadata, CRC, and bounded integrity-test evidence.',
      'The XLSX member was not opened or read, and the file evidence does not establish fields, rows, owners, properties, accuracy, completeness, currency, privacy status, title, appraisal, tax, value, offer, transaction, or legal effect.',
    ],
  ],
  [
    'https://howardcad.org/',
    [
      'The official homepage supplies the Howard Central Appraisal District publisher identity and public-site context.',
      'It is not evidence for the exact ZIP bytes, workbook contents, a property, owner, account, title, appraisal, tax, value, offer, or transaction.',
    ],
  ],
  [
    'https://esearch.howardcad.org/?valid=false',
    [
      'The official property-search surface supplies a separate research-purpose and verification disclaimer context.',
      'No query was performed and no result row, person, property, account, legal description, acreage, value, tax, title, ownership, or private data was retrieved.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the colliding Howard County valuation and family-decision identity and owns one distinct deliverable: a complete-file and one-member integrity record for one exact official 2025 ZIP.',
  'The current information-gain and answer-citation contract is applied through a concise direct answer, one canonical file-control job, four official sources with separate roles, exact publisher/route/file/date/hash/member provenance, claim-adjacent citations, supported FAQs, semantic internal links, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The low three-quarter capsule scene and strict-overhead evidence board are materially distinct and make no government-affiliation, property, owner, appraisal, tax, title, value, offer, legal, or outcome claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official publisher page, exact 2025 ZIP, Howard CAD homepage, no-query search disclaimer, complete-file response controls, and central-directory metadata.',
  'The recorded ZIP controls include HTTP 200, application/zip, 25,248,834 bytes, Last-Modified Fri 08 Aug 2025 19:46:00 GMT, ETag 689653f8-1814442, SHA-256 6689f36042fae4befed0175ffa240cbb997081cdbd445e7654f3a4d5f42ca141, one unencrypted deflated XLSX member, its two stored sizes, UTC timestamp, CRC 35f6a274, no archive comment, and passing unzip test.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article expressly rejects workbook extraction or reading, row or cell reproduction, person or property queries, field or count inference, private-data capture, ownership or title findings, acreage or royalty conclusions, appraisal or tax advice, market valuation, buyer or offer analysis, transaction advice, legal interpretation, and promised outcomes.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, property fact, account data, appraisal result, tax direction, ownership, title, value, offer, recommendation, or promised result.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'official_zip_complete_file_sha256_and_byte_control_pass',
  'one_member_central_directory_inventory_and_unzip_integrity_pass',
  'xlsx_member_not_opened_extracted_parsed_queried_or_read_pass',
  'claim_to_source_scope_present',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_summary_and_claim_adjacent_official_citation_integrity_pass',
  'exact_entity_publisher_label_route_file_date_hash_member_author_reviewer_and_url_parity_pass',
  'semantic_hub_support_sibling_and_next_step_internal_link_roles_pass',
  '2025_zip_2026_zip_real_property_pdf_and_property_search_lanes_separated_pass',
  'search_atlas_observations_not_used_as_factual_article_evidence_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'official_file_record_no_xlsx_content_owner_property_account_appraisal_tax_title_value_offer_sale_or_legal_claim_pass',
  'crc_sha256_unzip_test_scope_boundary_pass',
  'member_filename_and_metadata_not_treated_as_content_or_legal_proof_pass',
  'no_query_no_person_no_property_no_private_data_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_government_mark_agency_logo_seal_person_hand_map_money_offer_property_record_personal_data_official_page_spreadsheet_data_appraisal_tax_result_value_signature_result_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
