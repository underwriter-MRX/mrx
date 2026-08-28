#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '168';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-2024-25-map-review-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0767';
process.env.MRX_SELECTION_RANK = '240';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD 2024-25 MAP Review Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'DeWitt CAD 2025 MAP review';
process.env.MRX_INLINE_KEYWORD = 'DeWitt CAD 2025 MAP review';
process.env.MRX_HERO_ALT =
  'A navy review folio with four blank sections appears beside the exact DeWitt CAD MAP review source-record title.';
process.env.MRX_INLINE_ALT =
  'Four abstract review lanes and a cycle boundary appear above the exact DeWitt CAD 2025 MAP review keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/index.php',
    [
      'The official Texas Comptroller MAP overview supplies the statutory program scope, biennial cadence, approximate annual review split, and three-tier question context.',
      'It supports program-purpose and cadence context only. It does not supply a DeWitt result, property result, appraisal conclusion, tax result, protest position, mineral valuation, offer, sale, or owner action.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2025/',
    [
      'The official 2025 MAP Review Results page supplies the current publisher relationship and exact link to the DeWitt report.',
      'It supports publisher and current-link provenance only. It does not independently reproduce, certify, expand, compare, or apply the report findings.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2025/dewitt-2025.pdf',
    [
      'The official 15-page DeWitt final MAP review supplies the cover identity, page-2 summary, Tier 3 label, pages 3-15 detailed questions, literal answers and recommendation labels, and complete-file identity.',
      'It supports complete visual-review transcription and source-control limitations only. No finding is recalculated, aggregated, normalized, benchmarked, ranked, trended, compared, combined with another source, or applied to a person, property, appraisal, tax, protest, mineral valuation, offer, or sale.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-1818.pdf',
    [
      'The official Comptroller guide supplies limited current context for reviewer inputs, question types, the review cycle, and final-report publication.',
      'It supports process context only. It does not change the DeWitt report, certify a district or property, interpret law for an owner, or direct an appraisal, tax, protest, valuation, offer, or transaction action.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic DeWitt County valuation and owner-guide identity and owns one distinct deliverable: a source-controlled record for the official 2024-25 final DeWitt MAP review, ending at accurate transcription, visible limitations, and controlled stops.',
  'The source-first website SEO/AEO gate is applied through a concise answer summary, four visible official citations, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, native matching schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique review-folio hero and strict-overhead four-lane review boundary are materially distinct and contain no person, logo, seal, government mark, Texas outline, real report page, real table, readable source text, number, signature, property record, address, money, score, checkmark, chart, result, claim, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official MAP overview, current 2025 results-page relationship, exact 15-page DeWitt final-review PDF, complete-file hash, page-2 summary, pages 3-15 Tier 3 detail, literal review labels, limited guide context, and retrieval provenance.',
  'The article does not invent a source relationship, report result, owner, account, property, calculation, aggregate, normalization, benchmark, rank, trend, comparison, label equivalence, compliance conclusion, appraisal result, tax result, protest result, mineral valuation, offer, sale price, or owner-specific conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article attributes every result to the Texas Comptroller report and does not independently certify or generalize district quality, compliance, accuracy, fairness, appraisal quality, current property status, or future performance.',
  'The MAP review remains separate from the DeWitt annual-report G1 row and is not converted into a person, owner, parcel, mineral interest, property classification, appraisal, tax, protest, reserve, valuation, offer, sale, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, report value, district grade, property fact, appraisal claim, tax or protest direction, legal position, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'four_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_texas_comptroller_source_priority_pass',
  'fifteen_page_complete_visual_review_and_exact_page_locator_pass',
  'literal_report_labels_not_converted_into_independent_certification_comparison_property_appraisal_tax_protest_valuation_offer_sale_or_owner_outcome_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'map_review_no_recalculation_aggregation_normalization_benchmark_ranking_trend_comparison_cross_source_combination_or_independent_certification_pass',
  'district_review_not_applied_to_person_property_mineral_interest_appraisal_tax_protest_valuation_offer_sale_or_transaction_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_logo_seal_government_mark_texas_outline_real_report_page_real_table_readable_source_text_number_property_record_score_checkmark_chart_result_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
