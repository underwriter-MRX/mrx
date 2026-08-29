#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '171';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-2025-certified-mineral-appraisal-roll-download-locator';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0770';
process.env.MRX_SELECTION_RANK = '243';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD 2025 Certified Mineral Appraisal Roll Download Locator';
process.env.MRX_PRIMARY_KEYWORD = 'DeWitt CAD 2025 certified mineral appraisal roll';
process.env.MRX_INLINE_KEYWORD = 'DeWitt CAD 2025 certified mineral appraisal roll';
process.env.MRX_HERO_ALT =
  'A sealed archive pouch sits in an open navy locker beside the exact DeWitt CAD 2025 mineral-roll locator title.';
process.env.MRX_INLINE_ALT =
  'An overhead publisher tile and sealed pouch appear above the exact DeWitt CAD 2025 certified mineral appraisal roll keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.dewittcad.org/home/DataRecords',
    [
      'The official publisher page supplies the current Data and Records surface, displayed 2025 Certified Mineral Appraisal Roll (Zip) label, and direct routing target observed on the retrieval date.',
      'It supports publisher-link provenance only. It does not prove a complete archive retrieval or inspection, archive contents, record accuracy, ownership, title, appraisal correctness, tax, protest rights, mineral value, offer quality, sale terms, or an owner action.',
    ],
  ],
  [
    'https://www.dewittcad.org/Forms/GetDocument?fileName=1674682027_Public%20Relations%20Policy%20updated%202020.pdf&subPath=Data%20Records',
    [
      'The separate district policy supplies district-level public-record and request-routing context.',
      'It does not authorize archive inspection, classify a specific record, guarantee access, calculate a deadline, establish compliance, or supply a property, appraisal, tax, protest, value, offer, sale, or legal conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/',
    [
      'The official Texas Comptroller page supplies a current statewide property-tax publication index.',
      'It does not validate the DeWitt publisher page, route, archive, record, appraisal, tax result, ownership, title, value, offer, sale, or owner action.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'The official Texas Legislature page supplies current Chapter 25 provenance.',
      'The article does not interpret law, compare the route to a legal requirement, calculate a deadline, or decide record status, appraisal correctness, compliance, tax, protest rights, value, ownership, title, or legal effect.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.26.htm',
    [
      'The official Texas Legislature page supplies current Chapter 26 provenance.',
      'The article does not interpret law, calculate tax, determine procedure, direct a protest, or decide applicability, compliance, value, ownership, title, offer quality, sale terms, or legal effect.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic DeWitt County valuation-timeline identity and owns one distinct task: locating the official publisher page and its displayed 2025 Certified Mineral Appraisal Roll ZIP route.',
  'The current AI Atom Brain and Search Atlas SEO/AEO factory prompt is applied through an immediate bounded answer, five visible official citations with explicit source roles, author/reviewer/date attribution, semantic hub/support/next-step links, exact canonical identity, matching native schema, sitemap and LLM-discovery eligibility, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The straight-on archive-locker hero and strict-overhead publisher-to-route image are materially distinct and contain no person, hand, readable base text, date, name, address, account data, property data, map, chart, browser UI, screenshot, seal, government mark, logo, money, legal conclusion, result, or watermark.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official publisher page, displayed 2025 mineral-roll label, direct routing target, retrieval date, separate district policy, limited official statewide context, and controlled source state.',
  'The article explicitly records that complete archive retrieval and inspection were not established and does not invent a byte count, hash, member, row, field, format, name, address, account, property identifier, value, acreage, ownership, title, appraisal, tax, protest, mineral value, offer, sale, or transaction conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article treats the direct ZIP address only as a publisher-displayed routing target and stops before archive inspection, record-level data, private information, property matching, or legal interpretation.',
  'The district policy, Comptroller publication index, statutes, DeWitt source records, and Culberson archive record retain separate roles and are not converted into a property, appraisal, tax, protest, mineral-value, offer, sale, or transaction conclusion.',
  'Image text is limited to the exact title and keyword and adds no affiliation, seal, government mark, personal data, property fact, legal position, appraisal claim, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'displayed_publisher_label_and_direct_route_observation_pass',
  'complete_archive_retrieval_and_inspection_not_claimed_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_official_source_priority_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'no_archive_byte_hash_member_row_field_format_or_content_claim_pass',
  'no_name_address_account_property_identifier_value_acreage_ownership_title_or_personal_data_reproduction_or_inference_pass',
  'no_authentication_appraisal_tax_protest_valuation_offer_sale_transaction_or_legal_conclusion_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_hand_readable_base_text_date_name_address_account_property_data_map_chart_browser_ui_screenshot_seal_government_mark_logo_money_legal_conclusion_result_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
