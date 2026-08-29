#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '196';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2024-mass-appraisal-report-page-20-county-name-source-check';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0799';
process.env.MRX_SELECTION_RANK = '268';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2024 Mass Appraisal Report: Page 20 County-Name Source Check';
process.env.MRX_PRIMARY_KEYWORD = 'Karnes CAD 2024 mass appraisal report page 20';
process.env.MRX_INLINE_KEYWORD = 'Karnes CAD 2024 mass appraisal report page 20';
process.env.MRX_HERO_ALT =
  'An upright blank report folio and source tabs appear beside the exact Karnes CAD page 20 source-check title.';
process.env.MRX_INLINE_ALT =
  'Two overhead blank evidence cards appear above the Karnes CAD 2024 mass appraisal report page 20 phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://karnescad.org/home/DataRecords', ['The official page supplies the Karnes CAD publisher route and visible 2024 Mass Appraisal Report link.','It does not establish the PDF wording, validate the page-20 sentence, resolve the county-name conflict, or prove a property, appraisal, tax, value, offer, or legal result.']],
  ['https://karnescad.org/Forms/GetDocument?fileName=1740434312_2024+Mass+Appraisal+Report.pdf&subPath=Data+Records', ['The exact 31-page PDF supplies the Karnes cover identity and the physical/PDF page-20 Cost Schedules phrase specifically for Bee County.','The file does not explain the mismatch, prove either label is substantively correct, establish local applicability, or support a property-specific methodology, appraisal, tax, title, value, offer, or legal conclusion.']],
  ['https://karnescad.org/', ['The official homepage supplies the current Karnes CAD public-site identity.','It does not validate or correct the report wording, resolve the page-20 conflict, or prove property-specific facts or outcomes.']],
  ['https://comptroller.texas.gov/taxes/property-tax/map/index.php', ['The official Texas Comptroller MAP page supplies statewide review-category context.','It does not validate, correct, or apply the Karnes PDF sentence and is not evidence of a property-specific method or result.']],
  ['https://comptroller.texas.gov/taxes/property-tax/contact.php', ['The official Texas Comptroller contact page supplies routing guidance for local appraisal and tax questions.','It does not resolve the report wording or provide the local records, intended county label, property facts, appraisal result, tax result, value, offer, or legal conclusion.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Karnes valuation market-update identity and owns one distinct physical/PDF-page-20 source-integrity question.',
  'The current information-gain and answer-citation contract is applied through a direct answer, stable claim IDs, evidence labels, exact file and render controls, claim-adjacent official citations, an observation table, explicit source roles, supported FAQs, semantic links, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the upright report-integrity folio and strict-overhead split evidence workspace are materially distinct compositions and make no factual county claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the Karnes CAD publisher route, exact 31-page 2024 Mass Appraisal Report PDF, Karnes CAD homepage, Texas Comptroller MAP context page, and Texas Comptroller local-contact routing page.',
  'The exact PDF controls are HTTP 200, application/pdf, 2,425,778 bytes, 31 pages, and SHA-256 b025d256d68a89664ae1ea6a027ed648c6efd1bdbf890a7e36ddec7c0373b4bb.',
  'The cover visibly identifies Karnes County Appraisal District; rendered physical/PDF page 20 under Cost Schedules visibly says specifically for Bee County; the conflict remains unresolved.',
  'The image-only scan was verified from physical/PDF page 20 with render SHA-256 69befa498a32ba5d0a48d4ef2c529ef6d60f7ef06b57bbaae9d0ba2b790684e2 and manual visual transcription, not an unreviewed text layer.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article prohibits silent correction, causation inference, local-applicability claims, and use of the sentence as property-specific appraisal-methodology, appraisal, tax, valuation, transaction, or legal evidence.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, county conclusion, correction, property fact, appraisal, tax, value, offer, outcome, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['five_distinct_https_sources','current_primary_source_http_review_pass','official_pdf_complete_file_sha256_size_and_page_count_pass','image_only_physical_pdf_page_20_render_hash_and_manual_transcription_pass','cover_karnes_and_page_20_bee_observation_pass','unresolved_conflict_no_silent_correction_pass','provenance_vs_validity_boundary_pass','claim_level_evidence_ids_labels_and_source_roles_pass','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','source_conflict_no_correction_causation_local_applicability_property_method_appraisal_tax_owner_account_title_acreage_production_royalty_value_offer_transaction_or_legal_claim_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_county_names_official_form_seal_logo_map_property_person_hand_money_chart_graph_arrow_government_mark_or_watermark_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
