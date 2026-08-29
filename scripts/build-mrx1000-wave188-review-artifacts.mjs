#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '188';
process.env.MRX_ARTICLE_SLUG =
  'texas-comptroller-category-g1-g2-g3-mineral-classification-boundary-table';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0791';
process.env.MRX_SELECTION_RANK = '260';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Texas Comptroller Category G1, G2, and G3 Mineral Classification Boundary Table';
process.env.MRX_PRIMARY_KEYWORD = 'Texas Comptroller mineral categories G1 G2 G3';
process.env.MRX_INLINE_KEYWORD = 'Texas Comptroller mineral categories G1 G2 G3';
process.env.MRX_HERO_ALT =
  'Three symbolic category cards appear beside the exact Texas Comptroller mineral-classification boundary-table title.';
process.env.MRX_INLINE_ALT =
  'An overhead three-lane worksheet appears above the Texas Comptroller mineral categories G1 G2 G3 phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/',
    [
      'The official Texas Comptroller publications page supplies the current publisher relationship for the Property Classification Guide and related PVS materials.',
      'It does not establish a property classification, appraisal, ownership interest, tax result, mineral-rights sale value, offer, or legal conclusion for any owner or account.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf',
    [
      'The official 36-page guide supplies the Category G1, G2, and G3 definitions, surface-land boundary, producing and nonproducing mineral note, and classification examples on printed page 20/PDF page 23.',
      'The article does not apply the guide to a person, account, parcel, lease, appraisal, tax, ownership, title, mineral-rights sale value, offer, transaction, or legal position.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/pvs/',
    [
      'The official School District Property Value Study page supplies the program context and links to the classification guide and oil-and-gas appraisal resources.',
      'It is not a property-specific appraisal, tax determination, ownership record, sale estimate, offer analysis, or legal instruction.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/newsletter/',
    [
      'The official July 2026 Property Tax Today page supplies dated evidence that PTAD identified the updated 2026 classification guide for appraisal-roll reporting.',
      'The newsletter does not replace the guide text or decide how a specific property, owner, account, tax, appraisal, sale value, or transaction should be treated.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the colliding statewide valuation explainer and owns one distinct deliverable: a current official-source G1/G2/G3 classification boundary table with printed page 20/PDF page 23 reconciliation.',
  'The current information-gain and answer-citation contract is applied through a concise direct answer, one canonical classification job, four official sources with separate roles, exact document/page/version provenance, claim-adjacent citations, supported FAQs, semantic internal links, and no ranking or citation guarantee.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The three-card three-quarter scene and strict-overhead three-lane worksheet are materially distinct and make no government-affiliation, property, appraisal, tax, ownership, value, offer, legal, or outcome claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the official publications surface, current 36-page guide, printed page 20/PDF page 23, the PVS context page, and the dated July 2026 update notice.',
  'The recorded guide controls include the exact publisher URL, HTTP 200, application/pdf, 1,170,975 bytes, 36 pages, creation 2026-03-30, modification 2026-04-01, and SHA-256 81d36ed8286ae58a17a464ab2a7772a04dfebce6ad9a9a4556fc6e3abf3cf218.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The public article expressly rejects owner or property lookup, classification application, appraisal replication, title or ownership findings, tax advice, market valuation, mineral-rights sale-value equivalence, buyer or offer analysis, sale advice, legal interpretation, and promised outcomes.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, property fact, appraisal result, tax direction, ownership, title, value, offer, recommendation, or promised result.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'official_pdf_36_page_file_and_sha256_control_pass',
  'printed_page_20_pdf_page_23_locator_reconciliation_pass',
  'claim_to_source_scope_present',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_summary_and_claim_adjacent_official_citation_integrity_pass',
  'exact_entity_document_page_route_date_author_reviewer_and_url_parity_pass',
  'semantic_hub_support_sibling_and_next_step_internal_link_roles_pass',
  'classification_not_valuation_or_property_application_boundary_pass',
  'adjacent_dewitt_culberson_glasscock_jobs_preserved_pass',
  'search_atlas_observations_not_used_as_factual_article_evidence_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_relationship_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'official_source_classification_table_no_owner_property_appraisal_tax_title_ownership_value_offer_sale_or_legal_claim_pass',
  'printed_page_and_pdf_page_boundary_pass',
  'property_classification_not_equated_to_mineral_rights_sale_value_pass',
  'adjacent_local_sources_not_combined_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_official_document_copy_government_mark_agency_logo_seal_person_hand_property_record_personal_data_appraisal_value_tax_amount_offer_result_signature_or_watermark_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
