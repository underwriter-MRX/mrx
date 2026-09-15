#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '248';
process.env.MRX_ARTICLE_SLUG = 'mineral-rights-offer-vs-letter-of-intent-vs-purchase-agreement';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0415';
process.env.MRX_SELECTION_RANK = '320';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE = 'Mineral Rights Offer vs. Letter of Intent vs. Purchase Agreement';
process.env.MRX_PRIMARY_KEYWORD = 'mineral rights offer documents';
process.env.MRX_INLINE_KEYWORD = 'mineral rights offer documents';
process.env.MRX_HERO_ALT =
  'Three blank transaction folders and a tract map appear beside the exact Article 320 title.';
process.env.MRX_INLINE_ALT =
  'A people-free overhead three-stage document evidence board appears below the exact offer-documents keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://statutes.capitol.texas.gov/Docs/BC/htm/BC.26.htm#26.01',
    [
      'Texas Business and Commerce Code Section 26.01 supplies the Texas writing-and-signature requirement for specified agreements, including a contract for the sale of real estate.',
      "It does not classify a reader's offer or LOI, decide enforceability, or provide individualized legal advice.",
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/PR/htm/PR.5.htm#5.021',
    [
      'Texas Property Code Section 5.021 supplies the separate written, subscribed, and delivered instrument rule for a Texas estate conveyance.',
      'It does not prove that an agreement is the closing conveyance or determine title, validity, or legal effect.',
    ],
  ],
  [
    'https://www.txcourts.gov/media/1445666/170862.pdf',
    [
      'Energy Transfer Partners v. Enterprise Products Partners supplies a concrete Texas example of nonbinding term-sheet language, separately stated obligations, and a definitive-agreement condition.',
      "It is an example of why exact language and stated conditions must be preserved, not a template or a decision about a reader's document.",
    ],
  ],
  [
    'https://www.txcourts.gov/media/1445957/180352.pdf',
    [
      'Chalker Energy Partners III v. Le Norman Operating supplies a Texas example involving a definitive-agreement and execution condition in an asset-sale negotiation.',
      'It does not establish that every offer, LOI, email, or purchase agreement is binding or nonbinding.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The generic planning identity is rejected. The final article answers one bounded owner job: compare the common workflow roles and field changes among an offer, LOI, and purchase agreement.',
  'Information gain is concrete: section-state mapping, a cross-document field matrix, agreement-versus-conveyance separation, source-backed stop conditions, and a safe professional-review handoff package.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the side-angle three-folder hero and bright people-free overhead evidence board are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Texas Business and Commerce Code Section 26.01 and Texas Property Code Section 5.021 are cited only for bounded Texas writing, signature, and conveyance-instrument propositions.',
  'Energy Transfer Partners and Chalker Energy are used only as concrete examples showing why exact document language, separate obligations, definitive-agreement conditions, and execution conditions matter.',
  "No source supports assigning an automatic legal status to a document label, deciding enforceability, interpreting a reader's document, determining title, or predicting a transaction result.",
  'The article keeps the purchase agreement separate from the deed or other closing conveyance and preserves jurisdiction-specific professional-review boundaries.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  "The article is educational and does not interpret a reader's document, determine whether any document is binding, or advise whether to sign, reject, negotiate, convey, or close.",
  'The organizational author is the MRX Editorial Team; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language are present.',
  'No real owner, parcel, legal description, instrument identifier, signature, price, tax result, title conclusion, offer, or transaction record appears.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no government affiliation, legal conclusion, recommendation, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_official_https_sources_with_exact_source_roles',
  'texas_business_and_commerce_code_section_26_01_scope_pass',
  'texas_property_code_section_5_021_scope_pass',
  'energy_transfer_exact_language_and_definitive_agreement_example_scope_pass',
  'chalker_energy_execution_condition_example_scope_pass',
  'document_label_is_not_automatic_legal_status_boundary_pass',
  'agreement_and_closing_conveyance_separation_pass',
  'cross_document_field_change_matrix_pass',
  'claim_adjacent_citation_and_known_unknowns_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_factory_body_or_generic_offer_guide_reuse_pass',
  'no_real_owner_parcel_legal_description_instrument_id_signature_price_tax_title_offer_or_transaction_data_pass',
  'no_binding_enforceability_validity_title_legal_effect_or_transaction_outcome_determination_pass',
  'mrx_editorial_team_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'offer_fairness_offer_analysis_offer_comparison_version_control_and_purchase_agreement_primer_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_signatures_addresses_official_seals_logos_watermarks_cash_dollar_signs_handshakes_gavels_or_legal_status_claims_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
