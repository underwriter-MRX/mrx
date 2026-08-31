#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '230';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-field-rule-tables-special-standard-fallbacks-rescission-dates';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0850';
process.env.MRX_SELECTION_RANK = '302';
process.env.MRX_EXPECTED_SOURCE_COUNT = '7';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC Field Rule Tables: Special Rules, Standard Fallbacks, and Rescission Dates';
process.env.MRX_PRIMARY_KEYWORD = 'Texas RRC field rule tables';
process.env.MRX_INLINE_KEYWORD = 'Texas RRC field rule tables';
process.env.MRX_HERO_ALT =
  'A frontal copper rule-routing switchboard appears beside the exact Article 302 title.';
process.env.MRX_INLINE_ALT =
  'A low side-angle glass row display appears above the exact Texas RRC field rule tables keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://rrc.texas.gov/media/01wfdxlx/oilgasfieldrules.pdf',
    [
      'The historical RRC manual defines og_field_rule, og_std_field_rule, rule_type_code, derived_rule_type_code, effective_dt, rescind_dt, and its dated fallback procedure.',
      'The article labels the August 10, 2005 Oracle export as historical and never presents it as a current legal determination.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/',
    [
      'The current RRC catalog lists Oil and Gas Field Rules as a separate monthly product.',
      'The article uses the catalog only for current product identity and cadence, not as row-level or legal-applicability evidence.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/field-data/',
    [
      'The current field-data page identifies the Field Information Query and Proration Schedule by Field as separate routes.',
      'The article does not claim execution or results from either route.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/resource-center/research/research-queries/',
    [
      'The current query catalog lists Field Rules Query as nightly and supplies an informational/non-authoritative disclaimer.',
      'The article converts that limitation into current-source verification and stop states.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/obtaining-commission-records/oil-and-gas-well-records/',
    [
      'The current records page identifies field-rule hearing files and possible final or special order contents.',
      'The article uses the page only to route order-history verification, not to interpret any specific order.',
    ],
  ],
  [
    'https://rrc.texas.gov/media/qqmhxxex/dpmanual.pdf',
    [
      'The W-1 guide distinguishes statewide, county-regular, and special-field-rule contexts and shows a final-order history link for fields with special rules.',
      'The article stops before a permit, spacing, density, notification, or exception decision.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/general-counsel/rules/current-rules/',
    [
      'The current rules page identifies the Texas Administrative Code as the official rules source and labels printable chapter PDFs informational snapshots.',
      'The article routes current rule questions to that official path and qualified review.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original valuation-factor identity is rejected. The replacement answers one distinct historical-schema question with a current-verification workflow and explicit non-applicability boundary.',
  'Information gain is concrete: the article separates three tables, four code fields, two date events, the historical fallback sequence, order-history routing, and six deterministic reconciliation states.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the frontal mechanical switchboard and low side-angle glass-row display are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Seven controlled first-party RRC source objects total 3,708,417 bytes with individual SHA-256 identities in the selection decision.',
  'The historical manual supports the table, code, fallback, effective-date, and gas-rule rescission claims; current pages support only routes, cadence, disclaimers, and order/current-rule verification boundaries.',
  'The article preserves rule_type_code, derived_rule_type_code, std_field_rule_code, and std_field_rule_id as separate fields.',
  'Current applicability is never inferred from the historical export, a missing row, a found row, a query page, or a current catalog entry.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article does not decide current rule applicability, a spacing or density exception, permit eligibility, drilling approval, compliance, property scope, ownership, production, reserves, value, offer, or transaction outcome.',
  'The owner-agency boundary and possible MRX buyer-interest disclosure are visible at the top and bottom.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'seven_distinct_official_https_sources_with_historical_and_current_roles',
  'og_field_rule_and_og_std_field_rule_separation_pass',
  'historical_fallback_sequence_source_scope_pass',
  'rule_type_derived_rule_type_and_standard_code_non_equivalence_pass',
  'effective_dt_and_rescind_dt_non_equivalence_pass',
  'current_field_rules_query_catalog_and_order_route_pass',
  'current_tac_official_route_boundary_pass',
  'controlled_source_bytes_and_sha256_identity_pass',
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
  'historical_manual_not_presented_as_current_legal_authority_pass',
  'field_specific_row_presence_or_absence_not_presented_as_current_applicability_pass',
  'effective_and_rescission_dates_not_collapsed_pass',
  'no_rule_permit_spacing_density_exception_compliance_property_ownership_production_reserve_value_offer_or_transaction_conclusion_pass',
  'adjacent_article_and_query_worksheet_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_letters_numbers_charts_maps_diagrams_logos_seals_government_marks_official_forms_real_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
