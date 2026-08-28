#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '170';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-resolution-2024-01-reappraisal-plan-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0769';
process.env.MRX_SELECTION_RANK = '242';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD Resolution 2024-01 Reappraisal Plan Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'DeWitt CAD Resolution 2024-01';
process.env.MRX_INLINE_KEYWORD = 'DeWitt CAD Resolution 2024-01';
process.env.MRX_HERO_ALT =
  'A closed navy plan folio and blank resolution card appear beside the exact DeWitt CAD Resolution 2024-01 source-record title.';
process.env.MRX_INLINE_ALT =
  'Four overhead blank source tiles appear above the exact DeWitt CAD Resolution 2024-01 keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.dewittcad.org/home/DataRecords',
    [
      'The official publisher page supplies the current Reappraisal Plans section and displayed 2025-2026 Reappraisal Plan link.',
      'It supports publisher-link provenance only. It does not supply resolution content, authenticate a file, establish legal effect, identify a property, or direct an owner action.',
    ],
  ],
  [
    'https://www.dewittcad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1724879248_25-26%20Reappraisal%20Plan.pdf',
    [
      'The exact plan file supplies the 57-page container identity, cover labels, page-2 Resolution 2024-01 heading, adoption heading, displayed adopted date, byte count, complete-file hash, and page locators.',
      'It supports bounded source transcription only. The article does not reproduce names or signatures, authenticate a document or signer, interpret the plan body, or infer authority, compliance, legal effect, property treatment, appraisal, tax, protest, value, offer, sale, or outcome.',
    ],
  ],
  [
    'https://www.dewittcad.org/Forms/GetDocument?fileName=1722268435_Public%20Hearing%20Notice%20on%20Reappraisal%20Plan.pdf&subPath=Latest%20News',
    [
      'The separate official one-page notice supplies its identity, displayed scheduled hearing date, time, place, distribution statement, byte count, and complete-file hash.',
      'It supports notice-source provenance only. The article does not state that the hearing occurred, notice was delivered, a quorum existed, a deadline was met, or a legal requirement was satisfied.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.6.htm',
    [
      'The official Texas Legislature page supplies current Chapter 6 and Section 6.05(i) provenance.',
      'The article does not interpret law, compare a local record to a legal requirement, calculate a deadline, or decide compliance, timeliness, authority, validity, or legal effect.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/98-1202.pdf',
    [
      'The official Texas Comptroller publication supplies limited statewide reappraisal-plan context.',
      'It does not validate the DeWitt plan, resolution, notice, meeting, delivery, adoption process, property treatment, appraisal, tax, protest, mineral value, offer, sale, or transaction conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic DeWitt County valuation risk-checklist identity and owns one distinct deliverable: the page-located Resolution 2024-01 relationship among the current publisher page, exact plan file, and separate hearing notice.',
  'The current AI Atom Brain and Search Atlas SEO/AEO factory prompt is applied through a concise direct answer, five visible official citations, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, matching native schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique plan-folio hero and strict-overhead four-stage source-chain image are materially distinct and contain no person, seal, logo, government mark, signature, readable base text, number, date, property record, money, legal conclusion, result, or watermark.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official publisher-page link, exact plan-file identity, visually confirmed cover and page-2 resolution locators, separate notice identity, displayed scheduled date/time/place, complete-file hashes, limited official context, retrieval provenance, and document-control state.',
  'The article does not invent a meeting, notice delivery, quorum, authority, authenticity, compliance result, legal effect, plan-body interpretation, property, owner, account, appraisal method, tax result, protest result, mineral value, offer, sale, or transaction conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article excludes displayed names and signatures, describes the hearing notice only as a notice of a scheduled event, and does not authenticate or decide the legal or compliance status of any source.',
  'The resolution remains separate from the DeWitt annual-report, MAP-review, and ratio-study records and is not converted into a property, appraisal, tax, protest, mineral-value, offer, sale, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no affiliation, signature, seal, government mark, date, legal position, compliance claim, property fact, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'complete_plan_and_notice_file_sha256_match',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_official_source_priority_pass',
  'visual_page_1_page_2_and_notice_review_pass',
  'notice_not_converted_to_hearing_occurrence_delivery_quorum_timeliness_compliance_or_legal_effect_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'no_names_signatures_authentication_authority_quorum_notice_delivery_hearing_occurrence_compliance_timeliness_or_legal_effect_claim_pass',
  'no_plan_body_interpretation_summary_operationalization_comparison_scoring_or_property_application_pass',
  'resolution_not_applied_to_person_property_appraisal_tax_protest_mineral_value_offer_sale_or_transaction_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_hand_seal_logo_government_mark_signature_handwriting_readable_base_text_number_date_chart_map_form_ui_money_gavel_flag_legal_conclusion_result_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
