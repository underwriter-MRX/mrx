#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '221';
process.env.MRX_ARTICLE_SLUG =
  'reeves-cad-2025-map-review-four-passes-and-two-recommendations';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0841';
process.env.MRX_SELECTION_RANK = '293';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Reeves CAD 2025 MAP Review: Four Passes and Two Recommendations';
process.env.MRX_PRIMARY_KEYWORD = 'Reeves CAD 2025 MAP review';
process.env.MRX_INLINE_KEYWORD = 'Reeves CAD 2025 MAP review';
process.env.MRX_HERO_ALT =
  'An oblique audit binder with four tabs and two action slips appears beside the exact Article 293 title.';
process.env.MRX_INLINE_ALT =
  'A top-down four-area evidence board appears above the exact Reeves CAD 2025 MAP review keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/index.php',
    [
      'The official MAP overview supplies the biennial review purpose, four review areas, PTAD role, and tier context.',
      'The overview does not establish a Reeves property fact, mineral-account result, ownership, appraisal correctness, tax, protest, private value, offer, or transaction result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2025/',
    [
      'The official 2025 results inventory identifies Reeves as a completed 2025 MAP review and states the January 2027 recommendation-completion boundary.',
      'The inventory is routing and deadline context only; it does not establish that a particular recommendation is complete or apply a report finding to any property.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/2025/reeves-2025.pdf',
    [
      'The official 15-page Reeves final report supplies the four mandatory PASS results, the four review-area scores, and recommendation text at questions 29 and 74.',
      'The report reviews district operations and does not identify or determine a mineral account, title, ownership, classification, property appraisal, ratio outcome, tax bill, protest result, private value, offer, or transaction.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/map/review-documents.php',
    [
      'The official review-documents page supplies the role and limits of the 2024-25 MAP guidelines used to help reviewers answer instrument questions.',
      'The guidelines are not property-specific instructions and do not convert a review question into an owner-specific conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/98-1061.pdf',
    [
      'The official MAP program flyer supplies the two-year cycle, mandatory and yes-or-no question structure, tier framework, and general recommendation follow-up context.',
      'The flyer does not prove current completion of either Reeves recommendation or establish any property-specific result.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original generic Reeves valuation guide is rejected. The replacement owns one answer-first official MAP report-reading job and does not duplicate the existing Reeves records log or Category G worksheet guide.',
  'Information gain is concrete: the four mandatory results, four area scores, two exact recommendation rows, report-versus-property boundary, five-object retrieval record, stable claim ledger, and stop conditions.',
  'Exact-title hero and share OCR and exact-keyword inline OCR passed; the oblique audit-binder hero and strict-overhead four-area evidence board are materially distinct and contain no incidental readable text.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 2,772,293 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The MAP overview describes an at-least-biennial review of governance, taxpayer assistance, operating procedures, and appraisal standards, procedures and methodology.',
  'The 2025 results inventory lists Reeves and states that 2025-reviewed districts have until January 2027 to complete recommendations.',
  'The Reeves report records PASS on all four mandatory requirements and review-area scores of 100, 92, 100, and 96.',
  'The two No answers and recommendations are question 29 on the Tax Code 11.43(q) cancellation procedure for certain over-65 residence homestead exemptions and question 74 on rendition-penalty notice delivery.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attributed to one of five official Comptroller source objects with the document, report section, question, and bounded role preserved.',
  'No MAP pass, score, question, or recommendation is converted into proof about title, ownership, a mineral account, classification, appraisal correctness, ratio results, a tax bill, protest rights, private value, an offer, or a transaction.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, property identifier, numerical score, recommendation text, grade, conclusion, or approval claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  'map_biennial_four_area_scope_pass',
  '2025_results_reeves_inventory_and_january_2027_boundary_pass',
  'reeves_four_mandatory_pass_results_pass',
  'reeves_review_area_scores_100_92_100_96_pass',
  'question_29_over_65_homestead_cancellation_process_recommendation_pass',
  'question_74_rendition_penalty_notice_recommendation_pass',
  'controlled_source_bytes_and_sha256_identity_pass',
  'no_mineral_account_or_property_specific_result_inference_pass',
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
  'map_report_not_misrepresented_as_property_specific_audit_or_valuation_pass',
  'recommendations_not_misrepresented_as_mineral_account_findings_pass',
  'january_2027_deadline_not_misrepresented_as_completion_evidence_pass',
  'no_title_ownership_classification_appraisal_ratio_tax_protest_private_value_offer_or_transaction_conclusion_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_government_marks_screenshots_property_records_identifiers_money_values_labeled_charts_grades_recommendation_text_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
