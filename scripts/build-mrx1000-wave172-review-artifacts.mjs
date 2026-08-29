#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '172';
process.env.MRX_ARTICLE_SLUG =
  'dimmit-cad-2025-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0771';
process.env.MRX_SELECTION_RANK = '244';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Dimmit CAD 2025 Oil, Gas, Minerals Ratio Study Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'Dimmit CAD 2025 mineral ratio study';
process.env.MRX_INLINE_KEYWORD = 'Dimmit CAD 2025 mineral ratio study';
process.env.MRX_HERO_ALT =
  'An open navy source drawer appears beside the exact Dimmit CAD 2025 ratio-study source-record title.';
process.env.MRX_INLINE_ALT =
  'Seven overhead measurement cells appear above the exact Dimmit CAD 2025 mineral ratio study keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/data/property-tax/ratio-study/2025/',
    [
      'The official 2025 Texas Comptroller findings page supplies the study-year identity, displayed publication date, Section 5.10 provenance statement, and exact 064 Dimmit link relationship.',
      'It does not supply a property, account, owner, sample-member, appraisal, tax, protest, mineral-value, offer, sale, or transaction conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/auto-data/PT2/ratio-study/2025/0640000001A.php',
    [
      'The official 064-Dimmit summary supplies the displayed update label, literal table headings, literal G.OIL, GAS, MINERALS row, displayed values, and small-sample warning.',
      'The article transcribes these fields without recalculation, normalization, comparison, grading, property inference, valuation, tax or protest advice, or transaction use.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reports/',
    [
      'The official Property Tax Data Reports and Surveys page supplies the stated ratio-study purpose and classes of published statistical measures.',
      'It does not turn a district-level source row into evidence about a property, owner, mineral interest, market value, offer, sale, or recommended action.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.5.htm',
    [
      'Texas Tax Code Chapter 5 supplies current official Section 5.10 statutory provenance for the appraisal-district ratio study.',
      'The article does not interpret the statute, decide compliance, or apply it to a district, property, owner, appraisal, tax, protest, value, offer, or transaction.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/dimmitt.php',
    [
      'The official Dimmit County directory supplies district-number and appraisal-district directory context only.',
      'It does not validate a ratio-study measure, identify a sample, establish a property result, select a contact, or direct an owner action.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Dimmit County valuation family-guide identity and owns one distinct deliverable: an official-source record for the 2025 ratio-study findings relationship and 064-Dimmit summary.',
  'The current AI Atom Brain and Search Atlas SEO/AEO factory prompt is applied through an immediate bounded answer, five visible official citations with explicit source roles, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, matching native schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The straight-on source-drawer hero and strict-overhead seven-cell worksheet are materially distinct and contain no person, hand, readable base text, number, logo, seal, government mark, map, browser UI, screenshot, money, property record, value, grade, comparison, recommendation, result, or watermark.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official 2025 findings relationship, 064-Dimmit summary URL, displayed study/publication/update labels, literal Category G row and headings, displayed values, official program-purpose context, small-sample warning, and directory/statutory provenance.',
  'The article does not invent an owner, account, property, source relationship, sample member, recalculation, normalization, benchmark, grade, rank, trend, comparison, compliance result, appraisal result, tax result, protest result, mineral valuation, market price, offer, sale price, or owner-specific conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article keeps the source-stated small-sample warning immediately adjacent to the literal row and does not convert any displayed field into a property, account, appraisal, tax, protest, valuation, offer, sale, fairness, compliance, ranking, or owner-action conclusion.',
  'The Culberson and DeWitt ratio-study records remain separate source objects and are not compared, combined, benchmarked, or used as evidence for Dimmit.',
  'Image text is limited to the exact title and keyword and adds no affiliation, data value, statistical conclusion, property fact, district grade, appraisal claim, tax or protest direction, legal position, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_texas_comptroller_texas_legislature_and_dimmit_directory_source_priority_pass',
  'literal_source_row_and_adjacent_small_sample_warning_pass',
  'displayed_measures_not_converted_into_recalculation_comparison_property_appraisal_tax_protest_valuation_offer_sale_or_owner_outcome_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'ratio_study_no_recalculation_normalization_benchmark_ranking_grading_trend_comparison_property_inference_or_district_judgment_pass',
  'adjacent_county_source_records_not_combined_or_compared_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_hand_readable_base_text_number_logo_seal_government_mark_map_browser_ui_screenshot_money_property_value_grade_comparison_recommendation_result_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
