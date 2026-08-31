#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '215';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0835';
process.env.MRX_SELECTION_RANK = '287';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD 2025-2026 Reappraisal Plan: Category G Parcel Counts by ISD';
process.env.MRX_PRIMARY_KEYWORD = 'Pecos CAD Category G parcel counts';
process.env.MRX_INLINE_KEYWORD = 'Pecos CAD Category G parcel counts';
process.env.MRX_HERO_ALT =
  'A dark Pecos survey diorama appears beside the exact Article 287 title.';
process.env.MRX_INLINE_ALT =
  'Two bright overhead evidence trays appear above the exact Pecos CAD Category G parcel counts keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.pecoscad.org/home/DataRecords',
    [
      'The current official Data and Records page supplies the visible 2025-2026 Reappraisal Plan route.',
      'The page is routing evidence only and does not prove the plan was completed, the estimates became certified counts, or any owner, account, property, notice, appraisal, title, tax, value, offer, or transaction result.',
    ],
  ],
  [
    'https://pecoscad.org/Forms/GetDocument?fileName=1725366925_2025-2026+reappraisal+plan.pdf&subPath=Data+Records',
    [
      'The controlled PDF supplies exact bytes, SHA-256 identity, page count, cover approval statement, year-to-ISD schedule, physical page 37 estimated parcel-count table, and the start of the separate oil-and-gas-reserves appendix.',
      'The plan does not prove implementation, completion, certification, current status, or any owner, well, lease, tract, interest, notice, tax bill, value, offer, or transaction result. The two Category G figures remain separate year-and-ISD estimates and are not summed.',
    ],
  ],
  [
    'https://pecoscad.org/',
    [
      'The current official homepage identifies Pecos County Appraisal District and states that mineral, utility, and industrial accounts are appraised for the district by Thos. Y. Pickett and Company.',
      'The homepage does not define the physical page 37 parcel unit, validate the plan estimates, establish completion, or determine an owner-specific account, title, appraisal, tax, value, offer, or transaction result.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies statutory context for periodic reappraisal plans and appraisal-roll administration.',
      'The statute is context only. The article does not interpret a legal duty, calculate an appraisal, apply law to an owner or account, or prove that a Pecos CAD plan item was completed or certified.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Pecos County family-decision identity is rejected. The replacement owns one answer-first official-plan Category G estimate crosswalk by year and ISD.',
  'Information gain is concrete: exact PDF identity, physical page 1 approval locator, physical page 2 year-to-ISD schedule, physical page 37 Category G row and separate all-category totals, and physical page 40 appendix-boundary control.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique Pecos survey diorama and bright strict-overhead two-tray evidence workspace are materially distinct.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The official plan PDF was retrieved at 971,223 bytes with SHA-256 c95d84641a0d024c04b9d8ba491e5972085b29a05a9aba4038128d78e8e12d01; it is unencrypted, has no JavaScript, contains 75 physical pages, and records creation on 2024-08-08 and modification on 2024-09-02.',
  'Physical page 1 prints board approval on August 19, 2024. Physical page 2 schedules Buena Vista ISD real property for 2025, Fort Stockton ISD for 2026, Iraan/Sheffield ISD for 2027, and points to Exhibit A.',
  'Physical page 37 labels the table Estimated Parcel Counts by ISD, pairs 2025 with Buena Vista ISD and 2026 with Fort Stockton ISD, and prints Category G Real: Oil, Gas and Other Minerals estimates of 20,005 and 78,200 with separate all-category totals of 28,038 and 101,979.',
  'Physical page 40 begins a separate oil-and-gas-reserves appendix. It is recorded only to prevent its producing-lease language from redefining physical page 37 units.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every number remains attached to its plan label, estimate status, year, ISD, category, table, and physical-page locator.',
  'The article does not sum the Category G estimates, explain their difference, or convert them into owners, wells, leases, tracts, mineral interests, notices, certified-roll entries, tax bills, values, offers, transactions, completed work, or current results.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, numerical estimate, ranking, owner, account, property, appraisal, certification, value, or result claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_https_sources',
  'current_official_data_records_route_pass',
  'reappraisal_plan_http_bytes_sha256_encryption_javascript_metadata_and_page_count_pass',
  'physical_page_1_board_approval_statement_pass',
  'physical_page_2_year_to_isd_schedule_pass',
  'physical_page_37_category_g_row_estimate_year_isd_and_total_separation_pass',
  'physical_page_40_separate_appendix_boundary_pass',
  'tax_code_chapter_25_context_only_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
  'estimated_counts_not_converted_to_completion_certification_or_owner_level_result_pass',
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
  'estimated_parcel_count_table_not_converted_to_owner_well_lease_tract_interest_notice_certified_roll_tax_bill_value_offer_transaction_completed_work_or_current_result_pass',
  'year_isd_category_table_and_physical_page_qualifiers_preserved_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_account_records_owner_data_property_records_money_charts_values_results_government_symbols_completion_claims_conclusions_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
