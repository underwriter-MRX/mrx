#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '225';
process.env.MRX_ARTICLE_SLUG = 'tax-year-production-month-and-download-date-texas-mineral-records';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0845';
process.env.MRX_SELECTION_RANK = '297';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Tax Year, Production Month, and Download Date in Texas Mineral Records';
process.env.MRX_PRIMARY_KEYWORD = 'Texas mineral record dates';
process.env.MRX_INLINE_KEYWORD = 'Texas mineral record dates';
process.env.MRX_HERO_ALT =
  'A dark archival desk appears beside the exact Article 297 title.';
process.env.MRX_INLINE_ALT =
  'A bright overhead three-zone workspace appears above the exact Texas mineral record dates keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/taxes/property-tax/valuing-property.php',
    [
      'The official Comptroller page supplies the general January 1 taxable-property appraisal context under Tax Code Section 23.01.',
      'The article does not convert an ad valorem appraisal date or market-value definition into an owner-specific account conclusion, private mineral-interest price, offer, or transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reports/',
    [
      'The official reports page says report data and values are submitted by appraisal districts and describes year-specific report scope.',
      'The article uses that page only to keep tax year, report scope, publication identity, and retrieval date separate and does not reproduce ratio-study findings.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/production-data/',
    [
      'The official RRC page supplies the operator-reported production context and routes to monthly production products and queries.',
      'The article does not use reported production to establish ownership, royalty entitlement, a decimal, private value, or future production.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/about-us/faqs/oil-gas-faq/production-data-query-system-faqs/',
    [
      'The official RRC FAQ supplies the post-production-month filing cadence, online lag, snapshot limitation, and possibility of revised, corrected, or delinquent reports.',
      'The article does not claim a snapshot is final or that a retrieval proves no later correction exists.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/',
    [
      'The official RRC download page supplies dataset-specific update schedules, including monthly and last-Saturday-of-month products.',
      'The article does not generalize one schedule to every RRC source and labels the download-date distinction as a recordkeeping inference.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original broad Texas-value family-decision identity is rejected. The replacement answers one distinct recordkeeping question with a three-date crosswalk, source labels, a reusable packet row, and explicit stop conditions.',
  'Information gain is concrete: it prevents tax years, production months, processed-data snapshots, publication identities, and retrieval dates from being silently merged into one misleading as-of field.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-three-quarter archive scene and bright strict-overhead three-zone workspace are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 485,324 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The Comptroller Valuing Property page supplies the general January 1 appraisal-date context, while its reports page supplies appraisal-district-submitted-data and report-scope context.',
  'The RRC Production Data page identifies operator-reported production, and the PDQ FAQ supplies lag, snapshot, and revision limits.',
  'The RRC download page supplies product-specific update schedules; retrieval-date meaning is presented only as a bounded provenance inference.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official source, exact date role, source period, processing status, or explicit recordkeeping inference.',
  'The article does not use a date label to establish title, authority, account correctness, appraisal result, tax amount, protest deadline, private value, offer quality, buyer status, future production, or transaction outcome.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, reporting period, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  'january_1_appraisal_date_context_pass',
  'appraisal_district_submitted_data_and_report_scope_pass',
  'rrc_operator_reported_production_context_pass',
  'production_month_lag_snapshot_and_revision_limits_pass',
  'dataset_specific_update_schedules_pass',
  'retrieval_date_bounded_recordkeeping_inference_pass',
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
  'retrieval_date_not_misrepresented_as_source_period_pass',
  'production_snapshot_not_misrepresented_as_final_pass',
  'dataset_schedule_not_generalized_to_every_source_pass',
  'no_title_account_appraisal_tax_protest_private_value_offer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_property_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
