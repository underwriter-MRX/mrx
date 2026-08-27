#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '164';
process.env.MRX_ARTICLE_SLUG =
  'culberson-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0763';
process.env.MRX_SELECTION_RANK = '236';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Culberson CAD 2025-2026 Reappraisal Plan Adoption Source Record';
process.env.MRX_PRIMARY_KEYWORD = 'Culberson CAD 2025-2026 reappraisal plan';
process.env.MRX_INLINE_KEYWORD = 'Culberson CAD 2025-2026 reappraisal plan';
process.env.MRX_HERO_ALT =
  'A closed plan folio appears beside the exact Culberson CAD reappraisal plan adoption source-record title.';
process.env.MRX_INLINE_ALT =
  'Two blank page tiles appear above the exact Culberson CAD 2025-2026 reappraisal plan keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.culbersoncad.org/home/DataRecords',
    [
      'The current official Culberson CAD Data and Records page supplies the publisher surface and displayed link to the 2025-2026 CCAD Reappraisal Plan.',
      'It supports publisher identity and current link-relationship rechecking only. It does not establish signature authenticity, signer authority, adoption compliance, plan effectiveness, implementation, appraisal treatment, taxation, protest position, value, or another result.',
    ],
  ],
  [
    'https://www.culbersoncad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1742570926_2025_03_21_10_27_15.pdf',
    [
      'The current linked 22-page PDF supplies the displayed 2025/2026 plan identity, broad contents on PDF pages 2-3, public-meeting field and displayed date on PDF page 21, and resolution label and displayed passed-and-approved date on PDF page 22.',
      'It supports complete-file identity, broad structure, literal page and date locators, and source-control state only. The article does not reproduce names, signatures, handwriting, personal identifiers, plan methods, formulas, standards, schedules, deadlines, duties, inspection details, staffing, contractor details, budget, property facts, appraisal data, tax facts, or conclusions.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official statutory provenance, including Section 25.18 periodic-reappraisal subject matter.',
      'It supports governing-source provenance only. The article does not interpret Chapter 25, decide compliance or applicability, calculate timing, review a property or account, or make an appraisal, tax, protest, legal, valuation, or owner-specific conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.6.htm',
    [
      'Texas Tax Code Chapter 6 supplies current official statutory provenance, including Section 6.05 appraisal-district office and board subject matter.',
      'It supports governing-source provenance only. The article does not interpret Chapter 6, authenticate a signer, establish authority, decide notice or hearing sufficiency, determine timeliness, or make a compliance or legal conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/reappraisals/',
    [
      'The current Texas Comptroller reappraisal-plans page supplies general statewide context and identifies older submitted district plans as examples.',
      'It is not the source for Culberson CAD current-plan identity and does not establish Culberson adoption, legal effect, compliance, implementation, property treatment, appraisal result, or owner action.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Culberson County market-update identity and owns one distinct deliverable: a source-control record for the current official 2025-2026 plan link, complete-file identity, broad structure, and literal public-meeting and adoption-page locators.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique closed-plan-folio hero and strict-overhead two-page locator path are materially distinct and contain no person, real document, name, signature, number, government mark, property fact, appraisal claim, tax or protest direction, legal conclusion, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current publisher-page relationship, exact 22-page PDF identity, 1,408,161-byte complete-file observation, SHA-256, PDF page 1 cover identity, pages 2-3 broad contents, page 21 public-meeting field and displayed date, page 22 resolution label and displayed passed-and-approved date, and separate Chapter 25, Chapter 6, and Comptroller provenance roles.',
  'The article invents and exposes no signature attribution, name, handwriting, personal identifier, authentication, authority, compliance, timeliness, legal effect, implementation result, plan method, formula, schedule, deadline, duty, inspection detail, property fact, account fact, owner fact, appraisal data, tax fact, notice, protest, contact, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public source record contains only source identity, exact URLs, complete-file identity, retrieval provenance, broad structure, page locators, literal date fields, and document-control states. It stops before personal-data extraction, authentication, authority review, compliance review, legal interpretation, timing calculation, private-data access, property or account search, row-data access, appraisal judgment, protest strategy, tax guidance, valuation, representation, contact, submission, payment, or sale advice.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real record, name, signature, number, property fact, adoption-effect claim, appraisal claim, protest direction, legal position, tax conclusion, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_culberson_cad_texas_legislature_and_texas_comptroller_source_priority_pass',
  'literal_document_page_and_date_locators_not_converted_into_authenticity_authority_compliance_legal_effect_implementation_appraisal_tax_protest_valuation_sale_or_outcome_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'source_record_only_no_personal_data_signature_name_extraction_authentication_authority_review_compliance_review_legal_interpretation_timing_calculation_private_data_property_search_row_data_appraisal_protest_tax_valuation_contact_submission_payment_sale_advice_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_document_name_signature_number_property_fact_government_mark_adoption_effect_appraisal_legal_tax_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
