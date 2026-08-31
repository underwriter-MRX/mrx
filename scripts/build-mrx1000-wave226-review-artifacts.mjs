#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '226';
process.env.MRX_ARTICLE_SLUG =
  'cad-account-number-rrc-lease-id-operator-number-texas-mineral-records';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0846';
process.env.MRX_SELECTION_RANK = '298';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE =
  'CAD Account Number, RRC Lease ID, and Operator Number in Texas Mineral Records';
process.env.MRX_PRIMARY_KEYWORD = 'Texas mineral record identifiers';
process.env.MRX_INLINE_KEYWORD = 'Texas mineral record identifiers';
process.env.MRX_HERO_ALT =
  'A bright records lab appears beside the exact Article 298 title.';
process.env.MRX_INLINE_ALT =
  'An overhead five-lane board appears above the exact Texas mineral record identifiers keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.rrc.texas.gov/resource-center/research/research-queries/about-oil-gas-data-queries/',
    [
      'The official RRC query guide distinguishes an API wellbore number, district plus oil lease number or gas-well ID for a completion, and the unique P-5 operator number.',
      'The article treats those labels as regulatory identifiers and does not use them to establish a private-property connection, title, ownership, royalty entitlement, production, value, or transaction result.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/well-information/oil-leases-and-gas-wells-by-district-and-operator/',
    [
      'The official monthly index supplies the co-displayed operator, lease, field, county, and oil-or-gas labels.',
      'The article does not infer that co-display makes the fields interchangeable or that a similar name proves a join to an owner record.',
    ],
  ],
  [
    'https://www.rrc.texas.gov/about-us/faqs/oil-gas-faq/production-data-query-system-faqs/',
    [
      'The official RRC FAQ supplies the bounded API-to-lease-information lookup sequence and the monthly, revisable production-snapshot limitation.',
      'The article does not reproduce a PDQ query worksheet or claim that a regulatory identifier establishes final data or owner-specific facts.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-1051.pdf',
    [
      'The current Comptroller manual distinguishes the appraisal district long or geographic account number, short account or R-number, and potentially different GIS parcel ID.',
      'The article does not use an appraisal identifier to decide account correctness, legal description, title, tax amount, private value, or an offer.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-1208.pdf',
    [
      'The current Comptroller transaction manual describes the short account or R-number as locally assigned and requires a separate record when a transaction contains multiple accounts.',
      'The article uses that rule only to support separate identifier rows and does not interpret a sale, deed, appraisal, or owner-specific transaction.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original broad statewide valuation identity is rejected. The replacement answers one distinct recordkeeping question with a five-type identifier crosswalk, source-owner labels, copied-as-shown handling, and explicit stop conditions.',
  'Information gain is concrete: it prevents local CAD account identifiers, API wellbore numbers, district-plus-lease or gas-well identifiers, and P-5 operator numbers from being silently merged into one property key.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the bright low-three-quarter records lab and strict-overhead slate five-lane board are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Five controlled official source objects total 9,528,232 bytes and retain individual SHA-256 identities documented in the selection decision and article.',
  'The current Comptroller manuals supply long-account, short-account, R-number, parcel-number, GIS-ID, and separate-record boundaries.',
  'The current RRC query guide supplies API wellbore, district-plus-lease or gas-well, and unique P-5 operator-number roles.',
  'The RRC district-and-operator index and PDQ FAQ supply the co-displayed-field and bounded API-to-lease lookup contexts without establishing private-property identity.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'Every material statement remains attached to an official source, source-owned identifier role, or explicit non-equivalence and stop condition.',
  'The article does not use an identifier to establish title, ownership, authority, legal description, tract or unit inclusion, account correctness, tax result, royalty entitlement, production, private value, offer quality, buyer status, or transaction outcome.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier value, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'five_distinct_current_official_https_sources',
  'cad_long_account_short_account_r_number_and_gis_boundary_pass',
  'rrc_api_wellbore_identifier_role_pass',
  'rrc_district_plus_oil_lease_or_gas_well_identifier_role_pass',
  'rrc_unique_p5_operator_number_role_pass',
  'bounded_api_to_lease_information_sequence_pass',
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
  'cad_rrc_api_lease_gas_id_and_p5_identifiers_not_merged_pass',
  'similar_identifier_not_misrepresented_as_property_connection_pass',
  'no_title_ownership_account_tax_royalty_production_private_value_offer_or_transaction_conclusion_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_logos_seals_government_marks_official_forms_property_identifiers_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
