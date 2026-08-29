#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '202';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-mineral-file-layout-pdf-eight-page-position-and-eof-map';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0817';
process.env.MRX_SELECTION_RANK = '274';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Mineral File Layout PDF: Eight-Page Position and EOF Map';
process.env.MRX_PRIMARY_KEYWORD = 'Loving CAD 2026 mineral file layout PDF';
process.env.MRX_INLINE_KEYWORD = 'Loving CAD 2026 mineral file layout PDF';
process.env.MRX_HERO_ALT =
  'A navy archive binder and staggered blank sheets appear beside the exact Loving CAD 2026 mineral file-layout PDF title.';
process.env.MRX_INLINE_ALT =
  'Blank horizontal page bands and offset endpoint markers sit above the exact Loving CAD 2026 mineral file layout PDF phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://lovingcad.org/home/DataRecords', ['The official publisher page supplies the visible 2026 Certified Mineral Appraisal Roll Zip label and exact download relationship.','It does not establish member contents, layout validity, export conformance, or a property conclusion.']],
  ['https://www.lovingcad.org/Forms/ZipFileDownload?subPath=Data%20Records&fileName=1785193258_LOVING+CAD+2026+CERTIFIED+MINERAL+OPEN+RECORDS.zip', ['The exact ZIP supplies the observed layout member bytes, complete-file controls, and physical PDF artifact.','It does not prove field meaning, TXT or CSV conformance, record completeness, appraisal, tax, value, offer, transaction, or legal effect.']],
  ['https://lovingcad.org/', ['The official homepage supplies current Loving CAD public-site identity and publisher-stated appraisal context.','It does not validate the layout PDF, data export, owner, property record, appraisal result, or legal conclusion.']],
  ['https://comptroller.texas.gov/taxes/property-tax/contact.php', ['The Texas Comptroller contact page supplies routing guidance for local appraisal and tax questions.','It does not inspect or interpret the layout report or support a property-specific conclusion.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Loving County risk-checklist identity and owns one distinct eight-page position and EOF locator job.',
  'The 2026-08-29 factory directive is applied through a direct answer, stable claim IDs, evidence labels, exact retrieval controls, physical-page and render hashes, source mismatch preservation, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the oblique binder-and-sheet hero and top-down page-band inline image are materially distinct compositions and contain no source data.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the Loving CAD publisher page, exact 2026 ZIP, exact file-layout PDF member, eight manually reviewed physical-page renders, Loving CAD homepage context, and Texas Comptroller local-contact routing.',
  'The file-layout member is 46,370 bytes, SHA-256 f0b34cc4b7a96e6cd5480f350f28554b3af72fc9cfd45959763f76d0aef1b020, eight letter-size pages, unencrypted, with rotation 0.',
  'Physical page 2 summarizes SITUS information at 2202-2260 and end of file at 2261; physical page 8 visibly starts the SITUS street-number row at 2201 and displays EOF at 2260. The mismatch remains unresolved.',
  'The article withholds the source monetary threshold and publishes no record-level or personal data.',
  'PDF extraction and OCR remain supporting or non-validating evidence only; manual render review controls visible wording and layout.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article prohibits treating a displayed label, position range, source note, extraction result, or file hash as validation of field meaning, data-export conformance, record completeness, appraisal, tax, value, or owner-specific conclusions.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, property identity, appraisal, tax, monetary, offer, outcome, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['four_distinct_https_sources','current_primary_source_http_review_pass','publisher_label_and_exact_zip_target_relationship_pass','file_layout_pdf_size_sha256_pages_size_encryption_and_rotation_pass','physical_pages_1_through_8_manual_render_hash_and_page_role_map_pass','page_3_table_header_and_position_start_pass','pages_3_through_8_position_span_map_pass','page_2_vs_page_8_situs_and_eof_unresolved_conflict_preserved_pass','pdf_extraction_and_ocr_supporting_only_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_validity_and_no_silent_normalization_boundary_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','no_monetary_threshold_record_level_personal_owner_property_appraisal_code_statutory_tax_value_offer_transaction_or_legal_claim_pass','pdf_text_extraction_and_ocr_explicitly_non_validating_with_manual_render_review_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_names_identifiers_labels_official_forms_seals_logos_owner_or_property_data_people_hands_money_maps_rigs_courthouses_legal_symbols_decorative_pseudo_writing_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
