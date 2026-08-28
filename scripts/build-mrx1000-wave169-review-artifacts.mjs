#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '169';
process.env.MRX_ARTICLE_SLUG =
  'dewitt-cad-2024-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0768';
process.env.MRX_SELECTION_RANK = '241';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'DeWitt CAD 2024 Oil, Gas, Minerals Ratio Study Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'DeWitt CAD 2024 mineral ratio study';
process.env.MRX_INLINE_KEYWORD = 'DeWitt CAD 2024 mineral ratio study';
process.env.MRX_HERO_ALT =
  'An open navy ledger case with seven blank dividers appears beside the exact DeWitt CAD ratio-study source-record title.';
process.env.MRX_INLINE_ALT =
  'Seven overhead abstract measurement frames appear above the exact DeWitt CAD 2024 mineral ratio study keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/data/property-tax/ratio-study/2024/',
    [
      'The official 2024 findings page supplies the study-year identity, August 15, 2025 publication date, and exact 062-Dewitt district-summary link.',
      'It supports study-set and publisher-link provenance only. It does not supply a property result, appraisal conclusion, tax or protest result, mineral valuation, offer, sale, or owner action.',
    ],
  ],
  [
    'https://comptroller.texas.gov/auto-data/PT2/ratio-study/2024/0620000001A.php',
    [
      'The official district page supplies the 2024 study identity, summary-worksheet label, 062-Dewitt label, August 31, 2025 displayed update date, literal G.OIL, GAS, MINERALS row, seven displayed measures, and small-sample warning.',
      'It supports exact source transcription only. No field is recalculated, normalized, benchmarked, ranked, graded, compared, or applied to an owner, property, appraisal, tax, protest, valuation, offer, sale, or outcome.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reports/',
    [
      'The official reports page supplies limited program-purpose context for appraisal-district ratio studies and named statistical report components.',
      'It does not define an owner-specific use, validate the DeWitt row, select a benchmark, establish reliability, or authorize a property, appraisal, tax, protest, valuation, offer, or sale conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.5.htm',
    [
      'The official Texas Legislature page supplies Section 5.10 provenance.',
      'The article does not interpret law, decide compliance, or apply the statute to a district, owner, property, notice, protest, tax, valuation, offer, sale, or transaction.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/dewitt.php',
    [
      'The official county directory supplies DeWitt appraisal-district directory context only.',
      'It does not validate a ratio-study value, identify a sample, establish a property result, or direct an owner action.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic DeWitt County valuation market-update identity and owns one distinct deliverable: a source-controlled record for the official 2024 ratio-study findings relationship and 062-Dewitt district summary.',
  'The source-first website SEO/AEO gate is applied through a concise answer summary, five visible official citations, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, native matching schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique archival ledger-case hero and strict-overhead seven-frame measurement boundary are materially distinct and contain no person, logo, seal, government mark, map, real table, readable source text, number, property record, address, money, value, chart, result, claim, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official 2024 findings page, current linked 062-Dewitt district summary, displayed source dates, literal row and measures, adjacent warning, limited official program context, retrieval provenance, and document-control state.',
  'The article does not invent a source relationship, owner, account, property, calculation, aggregate, normalization, benchmark, rank, grade, trend, comparison, label equivalence, appraisal result, tax or protest result, mineral valuation, offer, sale price, or owner-specific conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article attributes every field to the Texas Comptroller source and does not independently certify, grade, validate, or generalize district quality, compliance, accuracy, fairness, appraisal quality, current property status, or future performance.',
  'The ratio-study row remains separate from the DeWitt annual-report G1 row and MAP review and is not converted into a person, owner, parcel, mineral interest, property classification, appraisal, tax, protest, valuation, offer, sale, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, table value, district grade, property fact, appraisal claim, tax or protest direction, legal position, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'primary_html_response_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_texas_comptroller_source_priority_pass',
  'literal_row_values_source_dates_and_small_sample_warning_pass',
  'district_statistics_not_converted_into_property_appraisal_tax_protest_valuation_offer_sale_or_owner_outcome_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'primary_html_response_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'ratio_study_no_recalculation_normalization_benchmark_ranking_grade_trend_comparison_cross_source_combination_or_independent_certification_pass',
  'district_statistics_not_applied_to_person_property_mineral_interest_appraisal_tax_protest_valuation_offer_sale_or_transaction_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_logo_seal_government_mark_map_texas_outline_real_table_readable_source_text_number_property_record_address_money_value_chart_result_claim_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
