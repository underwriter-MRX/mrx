#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '211';
process.env.MRX_ARTICLE_SLUG = 'midland-cad-open-records-mineral-files-rolls-notices-source-routes';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0831';
process.env.MRX_SELECTION_RANK = '283';
process.env.MRX_EXPECTED_SOURCE_COUNT = '6';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD Open Records Page: Mineral Files, Rolls, and Notices as Separate Source Routes';
process.env.MRX_PRIMARY_KEYWORD = 'Midland CAD mineral files, rolls, and notices';
process.env.MRX_INLINE_KEYWORD = 'Midland CAD mineral files, rolls, and notices';
process.env.MRX_HERO_ALT =
  'A blank origin card and three separate archive lanes appear beside the exact Midland CAD Open Records article title.';
process.env.MRX_INLINE_ALT =
  'A bright top-down route map branches to roll, stack, and notice motifs above the exact Midland CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://midcad.org/open-records/',
    [
      'The current visible Open Records page supplies the exact section headings, displayed link labels, and human-facing route relationships.',
      'The page does not establish archive contents, current completeness, property applicability, owner or account identity, ownership, title, appraisal accuracy, tax results, mineral value, production, royalties, or legal effect.',
    ],
  ],
  [
    'https://midcad.org/wp-json/wp/v2/pages?slug=open-records&_fields=id,modified_gmt,link,slug,title,content',
    [
      'The controlled WordPress REST record supplies page ID 5797, slug open-records, title Open Records, modified_gmt metadata, exact link targets, and a hashable machine-readable response.',
      'WordPress modification metadata is not a visible publication date or an effective date for every linked file; route metadata does not validate target contents.',
    ],
  ],
  [
    'https://midcad.org/wp-content/uploads/2025/05/ORR-Form-request.pdf',
    [
      'The one-page Request for Information PDF supplies the visible title, inspection-or-copies choices, specific-information instruction, and blank requester fields.',
      'A blank form does not prove responsive records, cost, timing, completeness, delivery, applicability, or outcome and supplies no property-specific conclusion.',
    ],
  ],
  [
    'https://midcad.org/wp-json/wp/v2/pages?slug=contact-us&_fields=id,modified_gmt,link,slug,title,content',
    [
      'The controlled Department Emails record separately labels Minerals and Open Records Request contact routes and supplies page identity metadata.',
      'Contact labels do not establish which office owns a specific question, that a message was received, that a record exists, or what conclusion an office will reach.',
    ],
  ],
  [
    'https://midcad.org/wp-json/wp/v2/pages?slug=publications-2&_fields=id,modified_gmt,link,slug,title,content',
    [
      'The controlled Publications record supplies a separate official document-discovery route for annual reports, mass appraisal reports, reappraisal plans, and other publications.',
      'The Publications route does not update, replace, or validate the Open Records page, a linked archive, or a property-specific question.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/midland.php',
    [
      'The Texas Comptroller directory supplies current issuer and domain-routing evidence for Midland Central Appraisal District and midcad.org.',
      'Directory provenance does not endorse every district page or file and validates no record, account, appraisal, tax, title, value, production, royalty, or transaction result.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the unsupported generic Midland County market-update identity and owns one current official-source routing taxonomy and non-validation job.',
  'The refreshed factory directive is applied through an answer-first route table, stable claim IDs, allowed evidence labels, current source metadata and bytes, an unresolved displayed-label versus PDF-title mismatch, claim-adjacent citations, supported FAQs, semantic links, idempotent row ownership, and no ranking or citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the dark low-oblique blank-card and three-lane hero and bright strict top-down three-branch route map are materially distinct and reproduce no official record or personal data.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to six official sources: the current Open Records page, its REST record, the linked request-form PDF, Department Emails and Publications REST records, and the Texas Comptroller Midland directory.',
  'The controlled Open Records, Publications, and Department Emails responses are 9,992, 10,240, and 3,557 bytes with SHA-256 values 5ffbcf5487d2de4c88e65eb507ce5edb4df427fba4cc06e099944963079cbce7, e00996ca7cc38f9a0a59366da35d572602692a21352ca4a760edffd70bd971e9, and 60c67082f0e81a5cfcc86a0a8dc46c5b2ed0f47d6508595e7839e3371e8250a1.',
  'The one-page request-form PDF is 263,637 bytes with SHA-256 c96a51aeb3984b0c551861727f8cd5465d21b939bac8789afc97d7a91c1b2ee0; physical page 1 was rendered and visually inspected, and the rendering SHA-256 is 6f301e8c13b8f6169d04f5941d565530e99d661734b5eb22aab692ebea393c4a.',
  'The page hierarchy is preserved exactly: Preliminary Mineral Roll under Preliminary Rolls; Certified Mineral Roll and Mineral Notices under Mineral Files; the request-link label and PDF title mismatch remains explicit.',
  'No roll, notice, or mineral-file archive was downloaded, opened, extracted, sampled, searched, or reproduced, and no owner or property search was performed.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article treats headings, labels, target suffixes, timestamps, contacts, and hashes as bounded routing or byte-identity evidence and prohibits archive-content, completeness, property-applicability, ownership, title, appraisal, tax, value, production, royalty, legal-effect, or transaction inferences.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, source validation, record, account, property, result, ranking, or citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'six_distinct_https_sources',
  'current_open_records_visible_page_pass',
  'open_records_rest_identity_modified_metadata_bytes_and_sha_pass',
  'request_form_pdf_file_identity_physical_page_render_and_visual_review_pass',
  'department_emails_route_separation_pass',
  'publications_source_lane_separation_pass',
  'comptroller_official_domain_routing_pass',
  'preliminary_certified_and_notice_heading_placement_preserved_pass',
  'displayed_request_link_and_pdf_title_mismatch_preserved_pass',
  'no_archive_download_open_extract_sample_search_or_reproduction_pass',
  'stable_claim_ids_allowed_evidence_labels_and_source_roles_pass',
  'provenance_vs_validity_boundary_pass',
  'no_silent_normalization_pass',
  'information_gain_distinct_job_and_canonical_owner_pass',
  'answer_first_and_claim_adjacent_citation_integrity_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'route_metadata_not_converted_to_archive_content_completeness_currency_applicability_ownership_title_appraisal_tax_value_production_royalty_legal_effect_or_transaction_result_pass',
  'preliminary_certified_and_mineral_files_labels_not_silently_reconciled_pass',
  'request_link_label_and_pdf_title_conflict_not_silently_corrected_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_readable_base_text_letters_numbers_dates_forms_signatures_seals_logos_maps_property_records_money_formulas_charts_values_results_government_symbols_conclusions_decorative_pseudo_writing_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
