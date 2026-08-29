#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '199';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0814';
process.env.MRX_SELECTION_RANK = '271';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Mass Appraisal Report: Mineral-Assistance Roster Page Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Loving CAD 2026 mineral appraisal assistance roster';
process.env.MRX_INLINE_KEYWORD = 'Loving CAD 2026 mineral appraisal assistance roster';
process.env.MRX_HERO_ALT =
  'A blank report binder and four roster cards appear beside the exact Loving CAD 2026 roster-crosswalk title.';
process.env.MRX_INLINE_ALT =
  'Four blank roster tabs sit on two offset pages above the exact Loving CAD 2026 mineral appraisal assistance roster phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://lovingcad.org/home/DataRecords', ['The official publisher page supplies the visible 2026 Mass Appraisal Report label and exact target relationship.','It does not establish report contents, roster currency, current professional status, or a property-specific fact.']],
  ['https://www.lovingcad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1784136171_2026+Mass+Appraisal+Report.pdf', ['The exact 55-page report supplies document identity, complete-file controls, physical-page and printed-page locators, certification context, and the four-row significant-assistance roster.','It does not prove current employment, contact, role, registration or license status, assignment to a property, appraisal accuracy, value, tax, offer, transaction, or legal effect.']],
  ['https://lovingcad.org/', ['The official homepage supplies current Loving CAD public-site identity and publisher-stated contractor context.','It does not identify the roster page, verify a named person, or prove a property-specific assignment or result.']],
  ['https://comptroller.texas.gov/taxes/property-tax/contact.php', ['The Texas Comptroller contact page supplies routing guidance for local appraisal and tax questions.','It does not inspect or interpret the Loving report, verify a roster entry, or support a property-specific conclusion.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the broad Loving County valuation family-guide identity and owns one distinct official-document roster page-crosswalk question.',
  'The current evidence contract is applied through a direct answer, stable claim IDs, evidence labels, exact retrieval controls, physical-versus-printed page alignment, render hashes, a source-role table, exact four-row transcription, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the three-quarter report-and-four-card hero and top-down two-page four-tab inline image are materially distinct compositions and make no official-record claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the Loving CAD publisher page, exact 2026 Mass Appraisal Report, Loving CAD homepage context, and Texas Comptroller local-contact routing page.',
  'The exact report controls are HTTP 200, application/pdf, 19,898,366 bytes, 55 unencrypted pages, and SHA-256 9b1e52c1fbbc8c87a405eeed72736a064995138438655a556c397e6e634e1932.',
  'Physical/PDF page 1 and physical/PDF page 11 were rendered and manually reviewed; physical page 11 carries printed footer 10 and controls the four-row transcription.',
  'No current employment, contact, role, registration, license, property assignment, appraisal accuracy, tax, value, offer, transaction, or legal-status conclusion is made.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article prohibits treating report-era names, titles, TDLR numbers, or assistance labels as current-status verification or property-specific evidence.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, person identity, property identity, professional-status claim, appraisal, tax, value, offer, outcome, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['four_distinct_https_sources','current_primary_source_http_review_pass','publisher_label_and_exact_2026_report_target_relationship_pass','pdf_http_size_page_count_encryption_and_sha256_pass','physical_page_one_document_identity_render_pass','physical_page_ten_certification_context_pass','physical_page_eleven_printed_page_ten_roster_render_and_manual_transcription_pass','stable_claim_ids_evidence_labels_and_source_roles_pass','provenance_vs_current_status_and_property_assignment_boundary_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','no_current_employment_contact_role_registration_license_property_assignment_ownership_title_acreage_production_royalty_appraisal_accuracy_tax_protest_value_offer_transaction_or_legal_claim_pass','pdf_text_extraction_explicitly_non_validating_and_manual_render_review_controlling_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_names_roles_identifiers_labels_official_forms_seals_logos_property_data_people_hands_money_rigs_maps_legal_symbols_or_watermarks_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
