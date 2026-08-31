#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '232';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-open-records-policy-request-response-clarification-charge-states';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0852';
process.env.MRX_SELECTION_RANK = '304';
process.env.MRX_EXPECTED_SOURCE_COUNT = '6';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD Open Records Policy: Request, Response, Clarification, and Charge States';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD open records policy';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD open records policy';
process.env.MRX_HERO_ALT =
  'Four blank records-process gates appear beside the exact Article 304 title.';
process.env.MRX_INLINE_ALT =
  'A top-down navy and ivory discrepancy register appears above the exact Upton CAD open records policy keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://uptoncad.org/Forms/GetDocument?fileName=1749827956_open+records+request.pdf&subPath=Data+Records',
    [
      'The reviewed Upton CAD scan supports only its local statements about written requests, five initial-response paths, clarification, local timing language, charge figures, estimate notice, and completed-request filing.',
      'The scan has no visible adoption, effective, or revision date. The article does not treat it as current statewide law, choose a controlling rule, calculate a fee, set a live deadline, or reproduce personal contact information.',
    ],
  ],
  [
    'https://uptoncad.org/home/DataRecords',
    [
      'The Upton CAD page supplies a current official publisher route for data and records that a requester can check before asking for a duplicate.',
      'The article does not claim that posted files are complete, legally sufficient, or connected to a particular person or property.',
    ],
  ],
  [
    'https://www.uptoncad.org/Home/Search',
    [
      'The visible property-search interface supplies a current district search route.',
      'The article does not execute a person or property search or claim a result, ownership, correctness, completeness, appraisal, tax, title, or value conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/upton.php',
    [
      'The Comptroller directory separates Upton appraisal-district and tax-office contacts.',
      'The article uses that directory only for role routing, not a property, tax, title, or valuation conclusion.',
    ],
  ],
  [
    'https://www.texasattorneygeneral.gov/open-government/members-public/how-request-public-information',
    [
      'The current OAG page supplies a public-facing Texas public-information request layer and route to official guidance.',
      'The article does not submit a request, decide an exception, determine compliance, or give legal advice.',
    ],
  ],
  [
    'https://www.texasattorneygeneral.gov/sites/default/files/files/divisions/open-government/PIA-Handbook-2026.pdf',
    [
      'The dated 2026 OAG handbook supports bounded statements about requests for existing information, approved delivery methods, current itemized-estimate language above $40, and context-dependent response periods.',
      'The article keeps those statements separate from the undated Upton scan and does not choose a live threshold, calculate a fee, or set a deadline.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original valuation identity is rejected. The final article answers one distinct Upton policy-reading job through a two-layer, four-state model and a discrepancy register.',
  'Information gain is concrete: source-age labeling, request/response/clarification/charge states, local-versus-current discrepancy rows, stable claim IDs, and explicit live-request stop states.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the four-state front-angle paper-process scene and strict top-down two-stack discrepancy register are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Six controlled official objects total 10,161,637 bytes with individual SHA-256 identities and bounded claim roles.',
  'The reviewed Upton scan has no visible adoption, effective, or revision date and supports only local-source observations about the four state categories and its displayed dollar and timing language.',
  'The dated 2026 OAG layer supports the existing-information, approved-delivery, itemized-estimate, and context-dependent timing boundaries without resolving a live request.',
  'Local and statewide statements are displayed separately; the article does not silently reconcile, supersede, calculate, or select among them.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No request is submitted, no live fee or deadline is calculated, no confidentiality or compliance decision is made, and no owner, account, lease, property, title, appraisal, tax, production, value, offer, or transaction conclusion appears.',
  'No names, addresses, email addresses, telephone numbers, or other personal contact fields from the policy scan are republished.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, property data, legal rule, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'six_distinct_official_https_sources_with_exact_source_roles',
  'controlled_source_bytes_and_sha256_identity_pass',
  'undated_local_scan_source_age_label_pass',
  'request_response_clarification_charge_state_separation_pass',
  'local_and_2026_oag_layer_separation_pass',
  'twenty_dollar_fifty_cent_twenty_five_dollar_and_forty_dollar_claim_scope_pass',
  'no_live_deadline_fee_calculation_or_controlling_rule_selection_pass',
  'stable_claim_ids_discrepancy_register_and_source_roles_pass',
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
  'no_request_submission_live_fee_deadline_confidentiality_compliance_or_legal_advice_pass',
  'no_person_contact_owner_account_lease_property_title_appraisal_tax_production_value_offer_or_transaction_conclusion_pass',
  'local_scan_and_current_oag_discrepancy_boundary_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_charts_maps_diagrams_logos_seals_government_marks_official_forms_real_identifiers_property_data_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
