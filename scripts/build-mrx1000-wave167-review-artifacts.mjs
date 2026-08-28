#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '167';
process.env.MRX_ARTICLE_SLUG =
  'dewitt-cad-2025-g1-oil-gas-and-mineral-reserve-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0766';
process.env.MRX_SELECTION_RANK = '239';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'DeWitt CAD 2025 G1 Oil, Gas and Mineral Reserve Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'DeWitt CAD 2025 mineral reserve category';
process.env.MRX_INLINE_KEYWORD = 'DeWitt CAD 2025 mineral reserve category';
process.env.MRX_HERO_ALT =
  'A navy annual-report folio with four blank cells appears beside the exact DeWitt CAD G1 source-record title.';
process.env.MRX_INLINE_ALT =
  'Four blank cells, a source locator, and a divider appear above the exact DeWitt CAD 2025 mineral reserve category keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.dewittcad.org/home/DataRecords',
    [
      'The current official DeWitt County Appraisal District Data Records page supplies the publisher-page relationship and linked 2025 Annual Report label.',
      'It supports publisher and current-link provenance only. It does not supply a property, account, appraisal notice, tax bill, protest result, mineral valuation, market value for sale, offer, sale price, district grade, or owner action.',
    ],
  ],
  [
    'https://www.dewittcad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1771449182_25%20annual%20report.pdf',
    [
      'The official nine-page scanned DeWitt CAD 2025 Annual Report supplies the cover identity, presentation label, page-4 outsourcing statement, certified-value section, literal G1 row, displayed fields, and complete-file identity.',
      'It supports complete visual-review transcription and source-control limitations only. No field is recalculated, aggregated, divided, normalized, benchmarked, ranked, trended, compared, matched, or applied to a property, owner, appraisal, tax, protest, valuation, offer, or sale.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/',
    [
      'The official Texas Comptroller Property Tax Publications page supplies the current publisher relationship for the Property Classification Guide.',
      'It supports publication provenance only. It does not establish a local DeWitt row, a property classification, a property value, an owner result, or a recommended action.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf',
    [
      'The current official Texas Property Tax Assistance Property Classification Guide supplies statewide Category G and G1 context and the surface-land exclusion note.',
      'It supports statewide classification-guide context only. The article does not declare local and statewide labels identical, map the source systems, classify a property, interpret law, calculate value, or make an owner-specific conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/dewitt.php',
    [
      'The Texas Comptroller DeWitt County directory supplies current county-code, appraisal-district, and website provenance.',
      'It supports district-directory provenance only. It does not validate a local report field, identify a property, select a contact, or direct an owner action.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic DeWitt County valuation and family-decision identity and owns one distinct deliverable: a source-controlled record for the current official Data Records page, exact 2025 Annual Report, and literal page-4 G1 row, ending at accurate transcription, visible limitations, and controlled stops.',
  'The source-first website SEO/AEO gate is applied through a concise answer summary, five visible official citations, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, native matching schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique single-folio hero and strict-overhead four-cell source boundary are materially distinct and contain no person, logo, seal, government mark, real table, readable source text, number, signature, property record, address, money, value, score, chart, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current DeWitt CAD publisher relationship, exact linked nine-page scanned report, complete-file hash, cover identity, presentation label, page-4 outsourcing statement, certified-value section, literal G1 row and headings, current statewide guide context, and district/publication provenance.',
  'The article does not invent an owner, account, property, source relationship, row member, calculation, aggregate, division, normalization, benchmark, rank, trend, comparison, label equivalence, compliance result, appraisal result, tax result, protest result, mineral valuation, market price for sale, offer, sale price, or owner-specific conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article binds the scanned-report claims to complete visual review and exact page locators and does not convert any displayed field into a property, account, appraisal, tax, protest, valuation, offer, sale, fairness, compliance, ranking, or owner-action conclusion.',
  'Parcel count is not converted into people, owners, acres, wells, leases, tracts, accounts, or unique mineral interests; local and statewide label wording remains source-separated.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, data value, property fact, district grade, appraisal claim, tax or protest direction, legal position, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_dewitt_cad_and_texas_comptroller_source_priority_pass',
  'scanned_nine_page_complete_visual_review_and_exact_page_locator_pass',
  'literal_source_row_not_converted_into_calculation_comparison_property_appraisal_tax_protest_valuation_offer_sale_or_owner_outcome_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'annual_report_no_calculation_aggregation_division_normalization_benchmark_ranking_trend_comparison_property_inference_or_district_judgment_pass',
  'parcel_count_not_reclassified_as_people_owners_acres_wells_leases_tracts_accounts_or_unique_interests_pass',
  'local_and_statewide_category_labels_preserved_as_separate_source_contexts_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_logo_seal_government_mark_real_table_readable_source_text_number_property_record_value_score_chart_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
