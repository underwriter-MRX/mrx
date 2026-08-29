#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '203';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-year-by-year-appraisals-pdf-selection-page-file-boundary';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0818';
process.env.MRX_SELECTION_RANK = '275';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Year-by-Year Appraisals PDF: Selection Page and File Boundary';
process.env.MRX_PRIMARY_KEYWORD = 'Loving CAD 2026 year-by-year appraisals PDF';
process.env.MRX_INLINE_KEYWORD = 'Loving CAD 2026 year-by-year appraisals PDF';
process.env.MRX_HERO_ALT =
  'A dark report volume and blank selection card sit beside the exact Loving CAD year-by-year PDF title.';
process.env.MRX_INLINE_ALT =
  'A blank selection sheet and privacy divider sit above the exact Loving CAD year-by-year appraisals PDF phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://lovingcad.org/home/DataRecords', ['The official publisher page supplies the visible 2026 Certified Mineral Appraisal Roll Zip label and exact download relationship.','It does not establish member contents, report validity, filter behavior, or a property conclusion.']],
  ['https://www.lovingcad.org/Forms/ZipFileDownload?subPath=Data%20Records&fileName=1785193258_LOVING+CAD+2026+CERTIFIED+MINERAL+OPEN+RECORDS.zip', ['The exact ZIP supplies the observed year-by-year PDF bytes, complete-file controls, and physical page-1 artifact.','It does not prove report completeness, record meaning, appraisal accuracy, tax, value, offer, transaction, or legal effect.']],
  ['https://lovingcad.org/', ['The official homepage supplies current Loving CAD public-site identity and publisher-stated appraisal context.','It does not validate the year-by-year PDF, a filter state, or a property record.']],
  ['https://comptroller.texas.gov/taxes/property-tax/contact.php', ['The Texas Comptroller contact page supplies routing guidance for local appraisal and tax questions.','It does not inspect or interpret the report or support a property-specific conclusion.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Loving County value-timeline identity and owns one distinct page-1 selection-map and file-boundary job.',
  'The 2026-08-29 factory directive is applied through a direct answer, stable claim IDs, evidence labels, exact retrieval controls, one controlling manual render, explicit record-page exclusion, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the low-oblique bound-volume hero and top-down selection-sheet privacy-boundary inline image are materially distinct and contain no source data.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the Loving CAD publisher page, exact 2026 ZIP, exact year-by-year PDF member, complete-file controls, manually reviewed physical page 1, Loving CAD homepage context, and Texas Comptroller local-contact routing.',
  'The member is 12,541,791 bytes, SHA-256 7bf2c237a7a3404b34932c77e598676b559d5664c1b64be299a417ae1643bf08, 4,264 letter-size pages, unencrypted, with rotation 0.',
  'Physical page 1 render SHA-256 ff8f008a0b8c4e12aa8cd44fb24f1a8bfe88a757715ef974fdab273141113cbf controls visible report identity, run date, district job identity, and selection-control labels.',
  'Physical page 2 was reviewed only to establish the exclusion boundary; pages 2 through 4,264 supply no public content claims and no source record values are reproduced.',
  'PDF extraction and OCR remain supporting or non-validating evidence only; manual render review controls visible wording.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article prohibits treating a selection label, configured state, page count, file hash, extraction result, or report identity as validation of filter behavior, completeness, a record, appraisal, tax, value, offer, transaction, or legal conclusion.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, property identity, record data, appraisal, tax, monetary, offer, outcome, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['four_distinct_https_sources','current_primary_source_http_review_pass','publisher_label_and_exact_zip_target_relationship_pass','year_by_year_pdf_size_sha256_page_count_geometry_encryption_and_rotation_pass','physical_page_1_manual_render_hash_and_selection_page_role_pass','visible_page_1_header_run_date_job_identity_and_control_label_map_pass','physical_page_2_record_specific_content_exclusion_boundary_pass','pages_2_through_4264_no_public_content_claim_pass','pdf_extraction_and_ocr_supporting_only_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_validity_boundary_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','no_record_names_identifiers_account_lease_monetary_production_ownership_acreage_royalty_appraisal_tax_value_offer_transaction_or_legal_claim_pass','pdf_text_extraction_and_ocr_explicitly_non_validating_with_page_1_manual_render_review_pass','pages_2_through_4264_excluded_from_public_claims_and_images_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_names_identifiers_labels_official_forms_seals_logos_owner_or_property_data_people_hands_money_maps_rigs_courthouses_legal_symbols_decorative_pseudo_writing_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
