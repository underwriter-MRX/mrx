#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '163';
process.env.MRX_ARTICLE_SLUG = 'culberson-cad-mineral-category-codes-source-locator';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0762';
process.env.MRX_SELECTION_RANK = '235';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'Culberson CAD Mineral Category Codes Source Locator';
process.env.MRX_PRIMARY_KEYWORD = 'Culberson CAD mineral category codes';
process.env.MRX_INLINE_KEYWORD = 'Culberson CAD mineral category codes';
process.env.MRX_HERO_ALT =
  'A closed source index appears beside the exact Culberson CAD mineral category codes locator title.';
process.env.MRX_INLINE_ALT =
  'Three separate source tiles appear above the exact Culberson CAD mineral category codes keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.culbersoncad.org/home/DataRecords',
    [
      'The current official Culberson CAD Data and Records page supplies the publisher surface and current links to the 2025 Mass Appraisal Report and 2025 Annual Report.',
      'It supports publisher identity and current link-relationship rechecking only. It does not establish code equivalence, owner-specific applicability, property classification, appraisal treatment, taxation, protest position, legal effect, value, or another result.',
    ],
  ],
  [
    'https://www.culbersoncad.org/Forms/GetDocument?fileName=1777396622_2025+Mass+Appraisal.pdf&subPath=Data+Records',
    [
      'The current linked 21-page PDF supplies the displayed mass-appraisal-report identity, displayed April 2025 parcel-category-summary context on PDF page 5, and the literal PROPERTY CATEGORY CODES table and mineral-related local labels on PDF page 7.',
      'It supports source identity, broad section location, and literal displayed-label inventory only. The article does not reproduce counts, values, ratios, formulas, methods, assumptions, schedules, deadlines, account facts, owner facts, property facts, or appraisal conclusions.',
    ],
  ],
  [
    'https://www.culbersoncad.org/Forms/GetDocument?fileName=1777396231_2025+Annual+Report.pdf&subPath=Data+Records',
    [
      'The current linked five-page PDF supplies the displayed 2025 annual-report identity and the broad Property Categories section and Category G Mineral row location on PDF page 3.',
      'It supports a separate source-role and page locator only. The article does not reproduce or use the displayed parcel count, market value, notices, appeals, jurisdiction facts, operational statements, or other numerical results.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf',
    [
      'The current 36-page Texas Property Tax Assistance Property Classification Guide supplies statewide Category G, G1, G2, and G3 displayed definitions on printed page 20, which is PDF page 23 in the retrieved file.',
      'It supports current statewide source provenance and literal label comparison only. The article does not silently equate local displayed codes with current statewide categories, classify an owner or property, apply an example, or decide appraisal, tax, protest, legal, value, or transaction consequences.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official statutory provenance for appraisal-record and appraisal-roll subjects.',
      'It supports governing-source provenance only. The article does not interpret Chapter 25, decide applicability, read or compare a row, calculate timing, direct a protest or filing, or make an owner-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Culberson County valuation-guide identity and owns one distinct deliverable: a source locator for the current official 2025 mass-appraisal report, 2025 annual report, current statewide classification guide, and their literal displayed mineral category labels and page locations.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique closed-index-cabinet hero and strict-overhead three-source-role layout are materially distinct and contain no person, real record, code, number, row data, owner data, property fact, government mark, appraisal conclusion, tax or protest direction, legal conclusion, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official publisher-page relationships, 21-page mass-report identity and page 5/page 7 locators, five-page annual-report identity and page 3 locator, current 36-page statewide guide identity and page 20 locator, complete-file hashes and bytes, literal displayed category labels, and Chapter 25 provenance.',
  'The article invents and exposes no code equivalence, parcel count, market value, ratio, formula, method, assumption, schedule, deadline, account, owner, property, legal description, lease, operator, regulatory identifier, production, exemption, protest, notice, contact, classification result, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public locator contains only source identity, exact URLs, retrieval provenance, broad section names, page locators, literal displayed labels, and document-control states. It stops before ZIP work, code-equivalence inference, property search, row-data access, matching, evidence review, individualized classification, appraisal judgment, protest strategy, legal interpretation, tax guidance, valuation, representation, contact, submission, payment, or sale advice.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real record, code, number, row data, owner or property fact, classification claim, appraisal claim, protest direction, legal position, tax conclusion, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_culberson_cad_texas_comptroller_and_texas_statute_source_priority_pass',
  'literal_category_labels_not_converted_into_code_equivalence_row_data_account_classification_appraisal_tax_protest_legal_valuation_sale_or_outcome_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'source_locator_only_no_zip_work_code_equivalence_row_data_matching_private_data_evidence_review_account_classification_appraisal_judgment_protest_strategy_legal_tax_valuation_contact_submission_payment_sale_advice_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_record_code_number_row_data_owner_data_property_fact_government_mark_classification_appraisal_legal_tax_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
