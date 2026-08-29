#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '195';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2025-2026-reappraisal-plan-pages-22-23-activity-schedule-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0798';
process.env.MRX_SELECTION_RANK = '267';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2025-2026 Reappraisal Plan: Pages 22-23 Activity Schedule Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Karnes CAD 2025-2026 reappraisal schedule';
process.env.MRX_INLINE_KEYWORD = 'Karnes CAD 2025-2026 reappraisal schedule';
process.env.MRX_HERO_ALT =
  'An upright blank reappraisal-plan folio appears beside the exact Karnes CAD activity-schedule crosswalk title.';
process.env.MRX_INLINE_ALT =
  'Six overhead blank schedule cards appear above the Karnes CAD 2025-2026 reappraisal schedule phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://karnescad.org/home/DataRecords', ['The official page supplies the Karnes CAD publisher route, Reappraisal Plans section, and visible 2025 - 2026 Reappraisal Plan link.','It does not supply the exact PDF hash, prove a pages-22-23 statement, identify an Area Three property, or establish a personal deadline, appraisal, tax, title, value, offer, or legal effect.']],
  ['https://karnescad.org/Forms/GetDocument?fileName=1715867857_2025-2026+Reappraisal+Plan+with+Resolution.pdf&subPath=Data+Records', ['The exact 24-page PDF supplies physical pages 22-23, the visible time-band labels, scheduled activity descriptions, year-round protest note, 2026 same-timetable statement, and Area Three wording.','The district plan does not establish an individual notice, protest, hearing, certification, inspection, payment, or legal deadline; identify a property in Area Three; or prove appraisal change, tax amount, ownership, acreage, title, production, royalty, offer, sale value, or outcome.']],
  ['https://karnescad.org/', ['The official homepage supplies Karnes CAD public-site identity and its statement about appraisal responsibility for Mineral, Utility, and Industrial accounts.','It does not prove the exact reappraisal-plan bytes, pages 22-23, an individual schedule, property status, tax result, sale value, offer, or legal conclusion.']],
  ['https://comptroller.texas.gov/taxes/property-tax/docs/98-1202.pdf', ['The official Texas Comptroller one-pager supplies statewide context for appraisal-district reappraisal plans and the statutory three-year and biennial-plan framework.','It does not replace the Karnes plan, set the local pages-22-23 activity bands, identify a property, or establish an individual deadline, appraisal result, tax result, title, sale value, or legal conclusion.']],
  ['https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm#25.18', ['The official Texas statute supplies the current Section 25.18 periodic-reappraisal framework.','It does not transcribe the Karnes schedule, identify Area Three property, establish a personal calendar, or determine a property, appraisal, tax, title, offer, transaction, or legal result.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the broad Karnes valuation-guide identity and owns one distinct physical-pages-22-23 activity-schedule crosswalk.',
  'The current information-gain contract is applied through an answer-first locator, exact source controls, claim-adjacent primary citations, concise schedule table, separate-source roles, five supported FAQs, semantic links, and no ranking/citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the upright plan folio and overhead six-band schedule workspace are materially different compositions and contain no factual schedule claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the current Data and Records page, exact 24-page 2025-2026 Reappraisal Plan PDF, Karnes CAD homepage, Texas Comptroller reappraisal-plan one-pager, and Texas Tax Code Section 25.18.',
  'The exact Karnes PDF controls are HTTP 200, application/pdf, 1,850,946 bytes, 24 pages, and SHA-256 ee36224b930395b38514873b6dd4363d1d84e081ad2fec6a495ed3eda4781e2f.',
  'Physical page 22 visibly labels six 2025 activity bands; physical page 23 adds the year-round protest note and says the same timetable and duties apply in 2026, with an Area Three physical-inspection statement.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article rejects any conversion of a district planning band into a personal notice, protest, hearing, certification, inspection, payment, legal, or tax deadline and makes no property-specific promise or outcome claim.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, date, deadline, property fact, appraisal, tax, value, offer, result, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['five_distinct_https_sources','current_primary_source_http_review_pass','official_pdf_complete_file_sha256_size_and_page_count_pass','rendered_physical_pages_22_23_visual_review_pass','schedule_time_band_and_activity_transcription_pass','year_round_and_2026_same_timetable_statement_pass','area_three_non_identification_boundary_pass','claim_to_source_scope_present','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','schedule_crosswalk_no_personal_deadline_property_status_inspection_promise_appraisal_change_tax_amount_owner_account_tract_lease_well_acreage_production_royalty_title_sale_value_offer_transaction_or_legal_claim_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_dates_deadlines_official_form_seal_logo_map_property_person_hand_money_chart_graph_arrow_government_mark_or_watermark_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
