#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '173';
process.env.MRX_ARTICLE_SLUG =
  'dimmit-cad-2024-25-map-review-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0772';
process.env.MRX_SELECTION_RANK = '245';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Dimmit CAD 2024-25 MAP Review Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'Dimmit CAD 2024-25 MAP review';
process.env.MRX_INLINE_KEYWORD = 'Dimmit CAD 2024-25 MAP review';
process.env.MRX_HERO_ALT =
  'A navy review folio and four blank tiles appear beside the exact Dimmit CAD 2024-25 MAP review source-record title.';
process.env.MRX_INLINE_ALT =
  'Four overhead evidence cards form a provenance path above the exact Dimmit CAD 2024-25 MAP review keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/index.php',
    [
      'The official MAP overview supplies the program identity, Section 5.102 cadence, reviewed activity-area context, and approximate annual review coverage.',
      'It does not supply the Dimmit result or any property, appraisal, tax, protest, mineral-value, offer, sale, or transaction conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2024/',
    [
      'The official 2024 results page supplies the publisher-to-report relationship, 2024 completion-year statement, Dimmit link, and dated January 2026 recommendation-completion language.',
      'The article does not treat the dated language as a current deadline or infer that Dimmit had a recommendation to complete.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2024/dimmit-2024.pdf',
    [
      'The exact official 15-page Dimmit report supplies its document identity, district, page-2 authority statement, five PASS results, four Meets All ratings, displayed counts and scores, detailed questions 1 through 88, and Yes or N/A response labels with no recommendation displayed.',
      'The article preserves literal report observations and file identity without an independent audit, recalculation, current-status claim, property inference, appraisal judgment, tax or protest advice, valuation, offer analysis, or transaction use.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/review-documents.php',
    [
      'The official MAP Review Documents page supplies current review-cycle materials and process context only.',
      'It does not expand the meaning of a Dimmit report label, validate a property, or create a mineral appraisal, value, tax, protest, offer, or sale conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.5.htm',
    [
      'Texas Tax Code Chapter 5 supplies current official statutory text for the program authority cited by the report.',
      'The article does not interpret the statute, decide compliance, or apply it to a district, property, owner, appraisal, tax, protest, value, offer, or transaction.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Dimmit County valuation-guide identity and owns one distinct deliverable: official-source retrieval and bounded interpretation of the Dimmit CAD 2024-25 final MAP review.',
  'The current AI Atom Brain and Search Atlas SEO/AEO factory prompt is applied through an immediate bounded answer, five visible official citations with explicit evidence roles, page-level material-claim adjacency, exact issuer/document/district entity consistency, five citation-oriented FAQs, author/reviewer/date parity, semantic hub/support/next-step links, native schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The straight-on five-tab review-folio hero and strict-overhead four-card provenance pathway are materially distinct and contain no person, hand, readable base text, number, logo, seal, government mark, authentic report screenshot, map, chart, money, property record, value, grade, recommendation, result, or watermark.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official MAP overview, 2024 results-page relationship, exact 15-page Dimmit report, page-2 authority and summary fields, pages 3 through 15 question range and displayed responses, official review-material context, statutory provenance, complete-file hash, and retrieval date.',
  'The article does not invent a current district status, recommendation obligation, owner, account, property, title, source relationship, appraisal result, tax result, protest result, mineral valuation, market price, offer, sale price, comparison, grade, certification, endorsement, or owner-specific conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article keeps literal MAP labels and displayed scores attached to their official page and section while expressly rejecting a property appraisal, mineral valuation, tax conclusion, protest position, title or ownership finding, offer recommendation, sale advice, or independent MRX grade.',
  'The Dimmit ratio-study and DeWitt MAP source records remain separate source objects and are not combined, compared, benchmarked, ranked, or used as property evidence.',
  'Image text is limited to the exact title and keyword and adds no affiliation, government identity, report result, property fact, district grade, appraisal claim, tax or protest direction, legal position, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'exact_issuer_document_period_district_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_texas_comptroller_and_texas_legislature_source_priority_pass',
  'page_level_pass_rating_score_and_question_range_adjacency_pass',
  'dated_source_language_not_converted_into_current_status_deadline_or_recommendation_obligation_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'map_review_no_current_status_inference_property_appraisal_tax_protest_title_ownership_valuation_offer_sale_or_owner_action_pass',
  'adjacent_source_records_not_combined_compared_benchmarked_ranked_or_used_as_property_evidence_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_hand_readable_base_text_number_logo_seal_government_mark_authentic_document_screenshot_map_chart_money_property_value_grade_recommendation_result_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
