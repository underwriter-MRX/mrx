#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '160';
process.env.MRX_ARTICLE_SLUG =
  'form-50-150-confidentiality-boundary-map-crane-oil-gas-property';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0759';
process.env.MRX_SELECTION_RANK = '232';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Form 50-150 Confidentiality Boundary Map for Crane Oil and Gas Property';
process.env.MRX_PRIMARY_KEYWORD = 'Form 50-150 Crane oil and gas property';
process.env.MRX_INLINE_KEYWORD = 'Form 50-150 Crane oil and gas property';
process.env.MRX_HERO_ALT =
  'A lockable archival case appears beside the exact Form 50-150 confidentiality-boundary title.';
process.env.MRX_INLINE_ALT =
  'A public-versus-controlled boundary appears above the exact Form 50-150 Crane oil and gas property keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/forms/50-150.pdf',
    [
      'The current official three-page blank PDF supplies the displayed title, form number, 10-25/12 revision line, CONFIDENTIAL display, Sections 1 through 4, broad blank field and attachment categories, and Important Information subjects.',
      'It supports a literal blank-source identity and boundary map only. The article does not reproduce a completed rendition, enter owner or property values, decide applicability or authority, determine an interest type or value, personalize timing, complete or sign the source, submit anything, or claim confidentiality, acceptance, appraisal treatment, tax treatment, or another result.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/forms/',
    [
      'The Texas Comptroller property-tax forms index supplies current statewide form-source context.',
      'It supports current-source and revision rechecking only. It does not supply owner-specific applicability, form selection, timing, completion, proof, filing, acceptance, confidentiality, or legal-effect conclusions.',
    ],
  ],
  [
    'https://www.cranecad.org/Forms',
    [
      'The current official Crane CAD forms surface supplies local forms-publisher context and links to statewide property-tax form resources.',
      'It supports local source context only. It does not establish that Form 50-150 applies to a particular Crane oil and gas property, identify a filer, choose a form or recipient, or authorize contact or submission.',
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
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.22.htm',
    [
      'Texas Tax Code Chapter 22 supplies current official governing-source provenance for the rendition subject represented by the form.',
      'It supports governing-source provenance only. The article does not interpret the statute, decide applicability or authority, determine ownership, interest type, value, timing, confidentiality, disclosure, penalty, tax treatment, or another owner-specific result.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic valuation-risk identity and owns one distinct deliverable: a source-controlled map of the blank Form 50-150 identity, displayed CONFIDENTIAL treatment, four-section structure, broad field and attachment categories, Important Information subjects, official-source relationships, retrieval provenance, and public-versus-controlled record boundary.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique lockable-case hero and strict-overhead two-zone boundary are materially distinct and contain no person, real form, owner data, property fact, government mark, filing result, legal conclusion, tax conclusion, recommendation, deadline, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official Form 50-150 displayed identity, 10-25/12 revision line, three-page structure, CONFIDENTIAL display, Sections 1 through 4, broad blank field and attachment categories, Important Information subjects, Texas Comptroller source context, Crane local-source context, county-directory context, and Texas Tax Code Chapter 22 provenance.',
  'The article invents no owner, party, address, phone, account, jurisdiction, property description, Railroad Commission identifier, interest type, value, supporting record, signature, date, notary fact, applicability decision, authority, deadline, filing, receipt, acceptance, confidentiality result, disclosure result, penalty, tax result, valuation, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public boundary map contains only blank field-category and source-provenance records, places every owner-specific value and supporting record outside the public artifact, and stops before private-data entry, evidence review, applicability or authority decisions, form choice, completion, signature, notarization, contact, upload, submission, timing calculation, confidentiality or disclosure interpretation, legal interpretation, tax guidance, appraisal judgment, valuation, representation, or strategy.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real form, owner data, filing claim, professional endorsement, confidentiality promise, legal position, tax conclusion, deadline, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_texas_comptroller_crane_cad_county_directory_and_texas_statute_source_priority_pass',
  'form_structure_and_confidential_display_not_converted_into_applicability_authority_value_timing_completion_submission_confidentiality_disclosure_penalty_tax_or_legal_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'boundary_map_only_no_private_data_evidence_review_applicability_authority_form_choice_destination_deadline_completion_signature_notarization_contact_submission_confidentiality_disclosure_legal_tax_valuation_advice_acceptance_penalty_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_form_owner_data_property_fact_government_mark_recommendation_legal_tax_filing_confidentiality_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
