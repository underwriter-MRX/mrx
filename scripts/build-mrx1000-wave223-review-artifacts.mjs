#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '223';
process.env.MRX_ARTICLE_SLUG = 'reeves-cad-2024-ratio-study-66-category-g-ratios';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0843';
process.env.MRX_SELECTION_RANK = '295';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE = 'Reeves CAD 2024 Ratio Study: 66 Category G Ratios';
process.env.MRX_PRIMARY_KEYWORD = 'Reeves CAD 2024 Category G ratio study';
process.env.MRX_INLINE_KEYWORD = 'Reeves CAD 2024 Category G ratio study';
process.env.MRX_HERO_ALT =
  'A dark ratio-study board appears beside the exact Article 295 title.';
process.env.MRX_INLINE_ALT =
  'A bright overhead evidence grid appears above the exact Reeves CAD 2024 Category G ratio study keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/data/property-tax/ratio-study/2024/',
    [
      'The official findings page supplies the 2024 tax-year identity, August 15, 2025 publication date, Tax Code Section 5.10 context, and 195 Reeves route.',
      'The findings index is a routing record and does not state a property, owner, private value, tax bill, offer, or transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/auto-data/PT2/ratio-study/2024/1950000001A.php',
    [
      'The official Reeves summary supplies the last-updated date and the exact seven displayed fields in the aggregate G.OIL, GAS, MINERALS row.',
      'The aggregate district row does not identify a parcel, mineral account, owner, title, acreage, private market value, offer, or transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/ratio-study/index.php',
    [
      'The official overview supplies the ratio-study purpose, cadence, PVS-data relationship, and general measure types.',
      'The overview does not validate a property-specific appraisal or explain any private mineral-interest value.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/reeves.php',
    [
      'The current official county directory identifies Reeves Appraisal District and its current public contact route.',
      'Directory identity does not validate the historical row, any property record, title, appraisal result, tax, private value, or transaction conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Reeves risk-checklist identity is rejected. The replacement owns one answer-first aggregate ratio-study row and does not duplicate the Reeves records log, two 2024 PVS worksheet structures, 2025 MAP review, or two 2025 preliminary district totals.',
  'Information gain is concrete: authoritative year and route, seven labeled Category G fields, measure-role explanations, a citation-ready capture record, stable claim IDs, and explicit stop conditions.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark straight-on archival board and bright overhead evidence grid are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Four controlled official source objects total 495,256 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The official findings page identifies the 2024 tax year, August 15, 2025 publication date, Tax Code Section 5.10 context, and 195 Reeves route.',
  'The Reeves summary says updated August 31, 2025 and displays 66 ratios, CAD reported appraisal value 26,799,785,533, median level 1.00, coefficient of dispersion 0.94, two 100.00 within-median fields, and price-related differential 1.00.',
  'The official overview describes major-category uniformity and median-level measurement using statistical analysis of PVS data.',
  'The current county directory identifies Reeves Appraisal District and carries a May 7, 2026 update date.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official Comptroller source, exact study year, district identifier, row label, column label, and aggregate-record limitation.',
  'The article does not treat 66 as a parcel count or convert CAD reported appraisal value or any ratio statistic into owner-level value, title, acreage, appraisal correctness, tax, protest, offer, or transaction guidance.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, row value, ratio result, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_current_official_https_sources',
  '2024_tax_year_and_publication_date_pass',
  '195_reeves_route_and_update_date_pass',
  'category_g_number_of_ratios_66_pass',
  'category_g_cad_reported_appraisal_value_26799785533_pass',
  'category_g_median_level_1_00_pass',
  'category_g_coefficient_of_dispersion_0_94_pass',
  'category_g_within_10_and_25_percent_100_00_pass',
  'category_g_price_related_differential_1_00_pass',
  'ratio_count_not_parcel_count_and_cad_value_not_private_value_pass',
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
  'ratio_study_not_misrepresented_as_private_market_update_pass',
  'ratio_count_not_misrepresented_as_parcel_count_pass',
  'cad_reported_appraisal_value_not_misrepresented_as_owner_value_pass',
  'statistics_not_misrepresented_as_property_specific_approval_or_trend_pass',
  'no_title_ownership_account_appraisal_tax_protest_private_value_offer_or_transaction_conclusion_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_numbers_logos_seals_government_marks_official_forms_property_identifiers_row_values_ratio_results_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
