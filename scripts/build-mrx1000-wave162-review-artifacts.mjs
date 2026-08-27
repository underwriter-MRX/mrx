#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '162';
process.env.MRX_ARTICLE_SLUG = 'culberson-cad-certified-mineral-roll-zip-source-control-record';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0761';
process.env.MRX_SELECTION_RANK = '234';
process.env.MRX_EXPECTED_SOURCE_COUNT = '5';
process.env.MRX_ARTICLE_TITLE = 'Culberson CAD Certified Mineral Roll ZIP Source-Control Record';
process.env.MRX_PRIMARY_KEYWORD = 'Culberson CAD certified mineral roll ZIP';
process.env.MRX_INLINE_KEYWORD = 'Culberson CAD certified mineral roll ZIP';
process.env.MRX_HERO_ALT =
  'A sealed archive appears beside the exact Culberson CAD certified mineral roll ZIP source-control title.';
process.env.MRX_INLINE_ALT =
  'Seven closed file tokens appear above the exact Culberson CAD certified mineral roll ZIP keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.culbersoncad.org/home/DataRecords',
    [
      'The current official Culberson CAD Data and Records page supplies the publisher surface and displays a 2026 Certified Mineral Appraisal Roll ZIP link under 2026 Certified Appraisal Rolls.',
      'It supports current publisher-surface identity, displayed link label, and link-relationship rechecking only. It does not establish row accuracy, completeness, owner-specific applicability, property classification, appraisal treatment, taxation, protest position, legal effect, value, or another result.',
    ],
  ],
  [
    'https://www.culbersoncad.org/Forms/ZipFileDownload?fileName=1784838558_CULBERSON+CAD+2026+CERTIFIED+MINERAL+OPEN+RECORDS.zip&subPath=Data+Records',
    [
      'The exact current official ZIP supplies the complete downloadable archive bytes and generic central-directory metadata: seven non-directory unencrypted members, their generic filenames and extensions, aggregate uncompressed bytes, compressed-file bytes, and complete-file SHA-256.',
      'It supports complete-file source control and a generic central-directory inventory only. The article does not extract, open, read, search, index, transform, copy, display, summarize, match, or interpret any member content or row data.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/county-directory/culberson.php',
    [
      'The Texas Comptroller county directory identifies the official Culberson County appraisal-district website and directory context.',
      'It supports publisher identity and jurisdictional context only. The article does not choose an official, office, recipient, channel, contact action, filing destination, or owner-specific next step.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm',
    [
      'Texas Tax Code Chapter 25 supplies current official statutory provenance for appraisal-record and appraisal-roll subjects.',
      'It supports governing-source provenance only. The article does not interpret Chapter 25, decide applicability, read or compare a row, calculate timing, direct a protest or filing, or make an owner-specific conclusion.',
    ],
  ],
  [
    'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.26.htm',
    [
      'Texas Tax Code Chapter 26 supplies current official statutory provenance for assessment and tax-rate subjects that may be associated with appraisal-roll use.',
      'It supports governing-source provenance only. The article does not interpret Chapter 26, calculate a tax, determine jurisdiction, choose a rate, apply a provision, or make an owner-specific conclusion.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the generic Culberson County valuation-family-guide identity and owns one distinct deliverable: a public source-control record for the exact current Culberson CAD certified mineral-roll ZIP and a generic central-directory inventory without member extraction or row-data access.',
  'Exact-title hero/share OCR and exact-keyword in-body OCR passed. The oblique sealed-archive hero and strict-overhead seven-token inventory are materially distinct and contain no person, real record, member content, row data, owner data, property fact, government mark, appraisal conclusion, protest direction, legal or tax conclusion, recommendation, or outcome.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims remain bounded to the current official Data and Records page relationship, displayed 2026 Certified Mineral Appraisal Roll ZIP label, exact linked ZIP URL, HTTP retrieval result, MIME, compressed bytes, complete-file SHA-256, and generic central-directory metadata for seven non-directory unencrypted members.',
  'The article invents and exposes no owner, address, account, property, legal description, lease, operator, Railroad Commission identifier, interest, jurisdiction, production, appraisal, tax, exemption, protest, notice, contact, row value, matching result, recommendation, or outcome.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The reusable public source-control record contains only source identity, exact URL, retrieval provenance, complete-file hash, and generic central-directory metadata. It stops before member extraction, row-data access, matching, enrichment, evidence review, individualized interpretation, appraisal judgment, protest strategy, legal interpretation, tax guidance, valuation, representation, contact, submission, payment, or sale advice.',
  'Image text is limited to the exact title and keyword and adds no government affiliation, real record, member content, row data, owner or property fact, appraisal claim, protest direction, legal position, tax conclusion, recommendation, or promised outcome.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'five_distinct_https_sources',
  'current_primary_source_http_review_pass',
  'claim_to_source_scope_present',
  'current_culberson_cad_texas_comptroller_and_texas_statute_source_priority_pass',
  'zip_source_identity_and_central_directory_metadata_not_converted_into_member_content_row_data_matching_appraisal_tax_protest_legal_valuation_sale_or_outcome_conclusions_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'complete_file_sha256_match',
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'source_control_only_no_member_extraction_row_data_matching_enrichment_private_data_evidence_review_appraisal_judgment_protest_strategy_legal_tax_valuation_contact_submission_payment_sale_advice_or_outcome_boundary_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_person_real_record_member_content_row_data_owner_data_property_fact_government_mark_appraisal_legal_tax_recommendation_or_outcome_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
