#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '165';
process.env.MRX_ARTICLE_SLUG =
  'culberson-cad-2026-certified-roll-format-boundary-source-index';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0764';
process.env.MRX_SELECTION_RANK = '237';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'Culberson CAD 2026 Certified Roll Format Boundary Source Index';
process.env.MRX_PRIMARY_KEYWORD = 'Culberson CAD 2026 certified roll formats';
process.env.MRX_INLINE_KEYWORD = 'Culberson CAD 2026 certified roll formats';
process.env.MRX_HERO_ALT =
  'A four-tab source folio appears beside the exact Culberson CAD certified-roll format-boundary title.';
process.env.MRX_INLINE_ALT =
  'Four blank format objects appear above the exact Culberson CAD 2026 certified roll formats keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.culbersoncad.org/home/DataRecords',
    [
      'The current official Culberson CAD Data and Records page supplies the publisher surface, displayed 2026 certified-roll section, four sibling-link labels, and exact endpoint href relationships.',
      'It supports publisher identity, displayed link labels, exact endpoints, endpoint families, retrieval provenance, and source-drift rechecking only. It does not establish file-body validity, content equivalence, completeness, accuracy, currentness, legal certification, applicability, property treatment, appraisal, tax, protest, value, or another result.',
    ],
  ],
  [
    'https://www.culbersoncad.org/',
    [
      'The official Culberson County Appraisal District home page supplies district-site context for the publisher surface.',
      'It supports district-site provenance only. It does not validate an endpoint, file body, record, row, classification, property fact, legal status, appraisal result, tax result, protest position, value, offer, or transaction.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/culberson.php',
    [
      'The Texas Comptroller Culberson County directory supplies official county-directory context and the appraisal-district website relationship.',
      'It supports publisher-context provenance only. The article does not select a contact or filing path, authenticate a file, assess record content, direct a protest, interpret law, calculate tax, estimate value, or recommend an owner action.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official statutory provenance for appraisal-record and appraisal-roll subject matter.',
      'It supports governing-source provenance only. The article does not interpret Chapter 25, decide certification or applicability, access a record, compare formats, review a property or account, or make an appraisal, protest, tax, legal, valuation, or owner-specific conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.26.htm',
    [
      'Texas Tax Code Chapter 26 supplies current official statutory provenance for assessment and tax-rate subject matter.',
      'It supports governing-source provenance only. The article does not interpret Chapter 26, decide which jurisdiction or rate applies, calculate tax, assess a file or row, or make a protest, legal, valuation, offer, sale, or owner-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Culberson County valuation-risk-checklist identity and owns one distinct deliverable: a source index for the current official publisher page and four displayed 2026 certified-roll sibling-link relationships, ending at safely observable response headers.',
  'The website SEO/AEO factory gate is applied without changing the approved title or imagery: a concise answer summary leads the information architecture, visible copy cites all five declared official sources, author/reviewer/date attribution is present, and crawlable hub, adjacent-support, and next-step links are explicitly configured.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique closed four-tab folio hero and strict-overhead four-object format boundary are materially distinct and contain no person, real record, readable content, name, account, address, property fact, value, government mark, equivalence claim, certification claim, appraisal claim, tax or protest direction, legal conclusion, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current publisher-page relationship, four displayed labels and exact href values, three endpoint families, retrieval date, safely observable HTTP status, response content type, content length, and separate official publisher, Comptroller, Chapter 25, and Chapter 26 provenance roles.',
  'The article invents and exposes no file-body result, header, row, field, cell, page, archive member, name, account, address, identifier, legal description, property fact, owner fact, value, classification, equivalence, completeness, accuracy, currentness, legal certification, applicability, appraisal, tax, protest, legal, valuation, offer, sale, or outcome conclusion.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public source index contains only publisher and endpoint identity, exact URLs, endpoint families, retrieval provenance, safely observable response headers, limitations, and document-control states. It stops before file-body access, data matching, private-data review, property or account search, schema comparison, equivalence testing, appraisal judgment, protest strategy, tax guidance, legal interpretation, valuation, representation, contact, submission, payment, offer analysis, or sale advice.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real record, personal data, property fact, format-equivalence claim, certification conclusion, appraisal claim, protest direction, legal position, tax conclusion, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'answer_first_summary_and_visible_authoritative_citation_integrity_pass',
  'canonical_entity_author_reviewer_date_and_url_parity_pass',
  'semantic_hub_support_and_next_step_internal_link_roles_pass',
  'current_culberson_cad_texas_comptroller_and_texas_legislature_source_priority_pass',
  'publisher_link_and_response_header_observations_not_converted_into_file_body_equivalence_completeness_accuracy_currentness_legal_certification_applicability_appraisal_tax_protest_legal_valuation_offer_sale_or_outcome_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_citation_guarantee_pass',
  'publisher_link_and_header_only_no_file_body_personal_data_record_content_matching_schema_comparison_appraisal_protest_tax_legal_valuation_contact_submission_payment_offer_sale_advice_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_record_personal_data_property_fact_government_mark_equivalence_certification_appraisal_legal_tax_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
