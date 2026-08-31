#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '233';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2024-category-g-table-g1-g1c-g-item-value-reconciliation';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0853';
process.env.MRX_SELECTION_RANK = '305';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2024 Category G Table: G1, G1C, and G* Item and Value Reconciliation';
process.env.MRX_PRIMARY_KEYWORD = 'Upton CAD 2024 Category G table';
process.env.MRX_INLINE_KEYWORD = 'Upton CAD 2024 Category G table';
process.env.MRX_HERO_ALT =
  'A navy report binder and adding machine appear beside the exact Article 305 title.';
process.env.MRX_INLINE_ALT =
  'A top-down three-row reconciliation worksheet appears above the exact Upton CAD 2024 Category G table keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://uptoncad.org/Forms/GetDocument?subPath=Data%20Records&fileName=1731513258_2024%20Annual%20Report.pdf',
    [
      'The official Upton CAD 2024 annual report supplies the G1, G1C, and G* rows on physical page 7 and the separate Total Mineral Market Value recap on physical page 5.',
      'The article transcribes and reconciles only the visible report columns and exact row arithmetic. It does not turn an aggregate into a property-specific, current-market, legal, tax, appraisal, offer, or transaction conclusion.',
    ],
  ],
  [
    'https://uptoncad.org/home/DataRecords',
    [
      'The Upton CAD Data and Records page supplies the official publisher route from which the annual report was retrieved.',
      'The page is used for provenance only and does not establish completeness, ownership, appraisal correctness, tax, title, private value, or a transaction result.',
    ],
  ],
  [
    'https://www.uptoncad.org/Home/Search',
    [
      'The Upton CAD Property Search page supplies an adjacent current interface route.',
      'The article does not execute a person or property search or claim a result, owner, account, parcel, appraisal, tax, title, or value conclusion.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf',
    [
      'The Texas Comptroller Property Classification Guide supplies the statewide G1 reporting-category definition and its official classification context.',
      'The statewide guide does not define the local Upton G1C suffix, validate the Upton arithmetic, or turn a CAD reporting category into ownership, tax, appraisal, or mineral-rights sale value.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original broad Upton market-value identity is rejected. The final article answers one distinct official-table reconciliation job and separates the G* subtotal from the report total.',
  'Information gain is concrete: dual physical and printed page locators, literal row-and-column transcription, three exact addition checks, a separate-total boundary, source roles, and stable claim IDs.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the three-quarter binder and adding-machine scene and strict top-down reconciliation worksheet are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The controlled Upton annual-report PDF is 1,208,999 bytes with SHA-256 aeae887f78b740cee6545292c59382abf7b2ba0626a805e6aeaa89203b90a496 and 11 visually reviewed physical pages.',
  'G1 plus G1C exactly reconciles to G* for Items, Mineral, Total Market Taxable, and Total Net Taxable as transcribed from physical page 7.',
  'The separate 258,233-item and 16,516,807,470 Total Mineral Market Value recap is preserved as a distinct report figure rather than merged with G*.',
  'The article does not define G1C, infer units beyond visible headings, use derived ratios, or equate items with accounts, people, interests, wells, leases, parcels, or tax bills.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No personal names are republished and no person, owner, account, property, parcel, tract, lease, well, or deed search is performed.',
  'No title, acreage, ownership, production, reserve, appraisal, tax, sale-value, fair-value, offer-quality, legal-effect, or transaction-advice conclusion appears; 2024 aggregates are not presented as current 2026 market evidence.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, identifier, numerical result, finding, conclusion, or approval statement.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_official_https_sources_with_exact_source_roles',
  'controlled_source_bytes_and_sha256_identity_pass',
  'physical_and_printed_page_locator_pass',
  'g1_g1c_gstar_literal_row_transcription_pass',
  'items_mineral_market_taxable_and_net_taxable_arithmetic_pass',
  'gstar_and_total_mineral_market_value_separation_pass',
  'no_derived_ratio_or_interchangeable_count_claim_pass',
  'stable_claim_ids_and_source_roles_pass',
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
  'no_person_owner_account_property_parcel_tract_lease_well_or_deed_search_pass',
  'no_title_acreage_ownership_production_reserve_appraisal_tax_sale_value_fair_value_offer_legal_effect_or_transaction_advice_pass',
  'no_2024_aggregate_as_current_market_or_property_specific_value_pass',
  'adjacent_article_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_readable_base_text_numbers_names_logos_seals_official_forms_property_identifiers_prices_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
