#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '213';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-2026-appraisal-services-rfp-mineral-scope-date-control-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0833';
process.env.MRX_SELECTION_RANK = '285';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2026 Appraisal Services RFP: Mineral Scope and Date-Control Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Midland CAD mineral appraisal RFP 2026';
process.env.MRX_INLINE_KEYWORD = 'Midland CAD mineral appraisal RFP 2026';
process.env.MRX_HERO_ALT =
  'A sealed proposal folio, blank calendar cards, and mineral core tray appear beside the exact Article 285 title.';
process.env.MRX_INLINE_ALT =
  'A top-down date-control crosswalk and mineral token appear above the exact Midland CAD RFP keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://midcad.org/publications-2/',
    [
      'The current official Publications page supplies the visible 2026 appraisal-services RFP route.',
      'The page is routing evidence only and does not establish which proposal date controls, whether a proposal was accepted, whether a contract was awarded or executed, which vendor was selected, or any owner, account, property, appraisal, tax, title, protest, value, or transaction outcome.',
    ],
  ],
  [
    'https://midcad.org/wp-content/uploads/2026/03/MCAD-Appraisal-RFP-2026-FINAL.pdf',
    [
      'The controlled PDF supplies exact bytes, SHA-256 identity, physical-versus-printed page counts, mineral procurement scope, approximate Category G account statement, and conflicting proposal-date representations.',
      'The RFP is a solicitation record, not proof of an operative deadline, accepted proposal, selected vendor, award, executed contract, current contract status, owner-level fact, account appraisal, title, tax, protest result, private value, or transaction result.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Section 25.01 supplies statutory context for contracting with a private appraisal firm and the contingent-compensation prohibition.',
      'The statute is context only. The article does not interpret legal duties, apply the law to a contract, decide validity, or provide legal advice.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf',
    [
      'The Texas Comptroller classification guide supplies the official Category G label and its G1, G2, and G3 subcategory context.',
      'The guide decodes the classification label only; it does not validate or recalculate the RFP account count, prove coverage, or establish an owner, account, property, appraisal, tax, title, value, or transaction fact.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Midland County value-timeline identity is rejected. The replacement owns one answer-first RFP procurement-scope and unresolved-date-control job.',
  'Information gain is concrete: exact PDF identity, 22-physical-versus-21-printed-page boundary, four page locators, approximately 424,996 Category G statement, three conflicting date representations, weekday mismatch, and a verification checklist that refuses to invent a controlling deadline.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique procurement desk and bright strict top-down evidence crosswalk are materially distinct.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official RFP was retrieved at 313,142 bytes with SHA-256 1ab899f61ff1bb7c7d7ed26140fd8440b970f25df57a4b4898a5e7d86bc7cdb1; it is unencrypted, has no JavaScript, and contains 22 physical PDF pages while printed footers run through Page 21 of 21.',
  'Physical page 4 prints March 30, 2026 at 2:00 p.m. CST; physical page 8 prints Thursday, May 4, 2026 at 2:00 p.m. CST; physical page 22 / printed Page 21 of 21 prints May 4, 2026. A calendar check identifies May 4, 2026 as Monday, so the article preserves the conflict and supplies no corrected deadline.',
  'Physical page 10 prints Category G (Mineral): Approximately 424,996 accounts and lists procurement scope; the article does not reconcile that statement with Article 282 or apply it to an owner or account.',
  'Texas Tax Code 25.01 and the Comptroller Category G guide are used only for bounded statutory and classification context.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article directs readers to Midland CAD for current instructions and does not claim a proposal was accepted, a vendor selected, a contract awarded or executed, or any printed deadline remains operative.',
  'The article supplies no owner, account, property, appraisal, title, tax, protest, value, legal, vendor-ranking, procurement-result, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, contract status, award, vendor, date, account, property, value, or result claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_https_sources',
  'current_official_publications_route_pass',
  'rfp_http_bytes_sha256_encryption_javascript_and_page_count_pass',
  'physical_page_1_scope_and_anticipated_award_statement_pass',
  'physical_page_4_march_30_statement_pass',
  'physical_page_8_thursday_may_4_statement_and_calendar_mismatch_pass',
  'physical_page_10_category_g_approximate_count_and_scope_pass',
  'physical_page_22_printed_page_21_schedule_8_statement_pass',
  'statute_25_01_context_only_pass',
  'comptroller_category_g_classification_context_only_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
  'unresolved_conflict_no_silent_correction_pass',
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
  'rfp_procurement_scope_not_converted_to_operational_deadline_vendor_award_contract_status_owner_account_property_appraisal_title_tax_protest_value_or_transaction_result_pass',
  'conflicting_date_strings_and_weekday_mismatch_preserved_without_correction_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_vendor_marks_account_records_owner_data_property_records_money_charts_values_results_government_symbols_award_claims_conclusions_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
