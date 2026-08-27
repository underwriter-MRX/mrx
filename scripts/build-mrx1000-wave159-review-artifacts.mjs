#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '159';
process.env.MRX_ARTICLE_SLUG =
  'form-50-171-separate-taxation-request-field-inventory-crane-mineral-interests';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0758';
process.env.MRX_SELECTION_RANK = '231';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Form 50-171 Separate-Taxation Request Field Inventory for Crane Mineral Interests';
process.env.MRX_PRIMARY_KEYWORD = 'Form 50-171 Crane mineral interest';
process.env.MRX_INLINE_KEYWORD = 'Form 50-171 Crane mineral interest';
process.env.MRX_HERO_ALT =
  'A five-divider archival source station appears beside the exact Form 50-171 field-inventory title.';
process.env.MRX_INLINE_ALT =
  'An overhead five-part blank field inventory appears above the exact Form 50-171 Crane mineral interest keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/forms/50-171.pdf',
    [
      'The current official two-page blank PDF supplies the displayed title, form number, 04-17/3 revision line, General Instructions, Filing Instructions, five printed step headings, blank field and attachment categories, statutory reference, and printed limitation language.',
      'It supports a literal blank-source field inventory only. The article does not reproduce a completed form, enter owner or property values, review a recorded instrument, decide applicability or qualification, select a form or destination, personalize timing, complete or sign the request, interpret law, submit anything, or claim receipt, acceptance, qualification, or a tax result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/forms/',
    [
      'The Texas Comptroller property-tax forms index supplies current statewide form-source context.',
      'It supports current-source and revision rechecking only. It does not supply owner-specific applicability, form selection, timing, completion, proof, filing, acceptance, or legal-effect conclusions.',
    ],
  ],
  [
    'https://www.cranecad.org/Forms',
    [
      'The current official Crane CAD forms surface supplies local forms-publisher context and links to statewide property-tax form resources.',
      'It supports local source context only. It does not establish that Form 50-171 applies to a particular Crane mineral interest, identify an owner, choose a form or recipient, or authorize contact or submission.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/crane.php',
    [
      'The Texas Comptroller county directory identifies the official Crane County appraisal-district website and local property-tax offices.',
      'It supports source identity and jurisdictional separation only. The article does not choose an office, official, recipient, channel, or filing destination.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official provenance for Section 25.11 and the statutory subject referenced by the form.',
      'It supports governing-source provenance only. The article does not interpret the statute, decide applicability or qualification, determine ownership or proportion, calculate timing, choose a tax treatment, or replace qualified legal or tax review.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic valuation-factor identity and owns one distinct deliverable: a source-controlled inventory of the blank Form 50-171 identity, five displayed step headings, blank field and attachment categories, official-source relationships, retrieval provenance, and limitations.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique filing-drawer hero and strict-overhead five-leaf inventory are materially distinct and contain no person, real form, owner data, property fact, government mark, instruction, filing result, legal conclusion, tax conclusion, recommendation, deadline, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official Form 50-171 displayed identity, 04-17/3 revision line, two-page structure, General and Filing Instructions headings, five displayed steps, blank field and attachment categories, Texas Comptroller source context, Crane local-source context, county-directory context, and Texas Tax Code Section 25.11 provenance.',
  'The article invents no owner, agent, address, phone, property description, interest proportion, recorded instrument, signature, date, taxable value, applicability decision, qualification, deadline, filing, receipt, acceptance, tax result, valuation, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public inventory contains only blank field-category and source-provenance records, keeps any owner-specific working record in an authorized controlled system, and stops before private-data entry, proof or instrument review, applicability or qualification decisions, form choice, completion, signature, contact, upload, submission, timing calculation, legal interpretation, tax guidance, appraisal judgment, valuation, representation, or strategy.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real form, owner data, filing claim, professional endorsement, legal position, tax conclusion, deadline, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_texas_comptroller_crane_cad_county_directory_and_texas_statute_source_priority_pass',
  'form_field_categories_not_converted_into_applicability_proof_timing_completion_submission_qualification_tax_or_legal_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'field_inventory_only_no_private_data_proof_review_applicability_form_choice_destination_deadline_completion_signature_contact_submission_legal_tax_valuation_advice_qualification_acceptance_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_form_owner_data_property_fact_government_mark_recommendation_legal_tax_filing_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
