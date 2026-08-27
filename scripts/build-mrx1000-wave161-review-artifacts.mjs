#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '161';
process.env.MRX_ARTICLE_SLUG = 'crane-cad-oil-gas-reappraisal-plan-source-locator';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0760';
process.env.MRX_SELECTION_RANK = '233';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'Crane CAD Oil and Gas Reappraisal Plan Source Locator';
process.env.MRX_PRIMARY_KEYWORD = 'Crane CAD oil and gas reappraisal plan';
process.env.MRX_INLINE_KEYWORD = 'Crane CAD oil and gas reappraisal plan';
process.env.MRX_HERO_ALT =
  'A navy plan folio appears beside the exact Crane CAD oil and gas reappraisal plan source-locator title.';
process.env.MRX_INLINE_ALT =
  'An overhead section path appears above the exact Crane CAD oil and gas reappraisal plan keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.cranecad.org/home/DataRecords',
    [
      'The current official Crane CAD Data and Records page supplies the Reappraisal Plans publisher context and the current 2025-2026 plan link.',
      'It supports the records-page relationship and current-link recheck only. It does not establish owner-specific applicability, property classification, appraisal treatment, notice correctness, protest position, tax treatment, value, or another result.',
    ],
  ],
  [
    'https://www.cranecad.org/Forms/GetDocument?fileName=1729083604_2025+-+2026+Reappraisal+Plan.pdf&subPath=Data+Records',
    [
      'The current linked 56-page PDF supplies the displayed periodic-reappraisal-plan identity, broad plan contents, oil-and-gas-reserves section identity, displayed August 7, 2024 date and Thomas Y. Pickett & Company attribution, broad section locators, and broad displayed source categories.',
      'It supports source identity and a non-operational locator only. The article does not reproduce or apply formulas, assumptions, amounts, schedules, deadlines, model inputs, price or expense data, discount rates, owner facts, property facts, methods, appraisal conclusions, protest positions, tax positions, values, or outcomes.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/crane.php',
    [
      'The Texas Comptroller county directory identifies the official Crane County appraisal-district website and directory context.',
      'It supports publisher identity and jurisdictional context only. The article does not choose an official, office, recipient, channel, contact action, filing destination, or owner-specific next step.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.23.htm',
    [
      'Texas Tax Code Chapter 23 supplies current official statutory provenance for a chapter referenced by the plan.',
      'It supports governing-source provenance only. The article does not interpret Chapter 23, select a method or input, apply a provision, calculate value, or make an appraisal, protest, tax, legal, or transaction conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official statutory provenance for appraisal-record and reappraisal subjects referenced by the plan.',
      'It supports governing-source provenance only. The article does not interpret Chapter 25, decide applicability, compare a notice or record, calculate timing, direct a protest or filing, or make an owner-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Crane County valuation-timeline identity and owns one distinct deliverable: a source-controlled locator for the current official Crane CAD 2025-2026 reappraisal-plan PDF and its oil-and-gas-reserves section, with displayed identity, broad locators, provenance, hash, and document-control states.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique upright-folio hero and strict-overhead blank-token locator path are materially distinct and contain no person, real plan, owner data, property fact, formula, amount, deadline, government mark, appraisal conclusion, protest direction, legal or tax conclusion, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official records-page link, the linked PDF identity, 56-page count, broad plan contents, displayed oil-and-gas section identity, broad section locators, displayed contractor and date context, Crane directory context, and Texas Tax Code Chapters 23 and 25 provenance.',
  'The article invents no owner, account, property, lease, Railroad Commission identifier, division-of-interest record, production fact, price, expense, discount rate, formula, model input, notice, deadline, applicability conclusion, classification, appraisal treatment, protest position, tax position, value, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public locator contains only source identity, broad section names, broad displayed source categories, page locators, provenance, hash, limitations, and document-control states. It stops before private-data access, evidence review, individualized interpretation, calculations, appraisal judgment, protest strategy, legal interpretation, tax guidance, valuation, representation, contact, submission, payment, or sale advice.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real plan, owner or property data, formula, amount, deadline, appraisal conclusion, protest direction, legal position, tax conclusion, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_crane_cad_texas_comptroller_and_texas_statute_source_priority_pass',
  'plan_identity_and_section_locator_facts_not_converted_into_formula_method_input_applicability_appraisal_protest_tax_value_sale_or_outcome_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'source_locator_only_no_private_data_evidence_review_formula_amount_schedule_deadline_method_input_applicability_classification_appraisal_judgment_protest_strategy_tax_guidance_valuation_contact_submission_payment_sale_advice_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_plan_owner_data_property_fact_formula_amount_deadline_government_mark_appraisal_conclusion_protest_direction_legal_tax_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
