#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '238';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2026-mineral-zip-date-register-march-26-july-16-july-23';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0858';
process.env.MRX_SELECTION_RANK = '310';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2026 Mineral ZIP Date Register: March 26, July 16, and July 23';
process.env.MRX_PRIMARY_KEYWORD = 'Ward CAD 2026 mineral ZIP member dates';
process.env.MRX_INLINE_KEYWORD = 'Ward CAD 2026 mineral ZIP member dates';
process.env.MRX_HERO_ALT =
  'Seven blank file sleeves and three brass date markers appear beside the exact Article 310 title.';
process.env.MRX_INLINE_ALT =
  'A top-down seven-file timestamp evidence board appears above the exact Ward CAD keyword.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  [
    'https://www.wardcad.org/home/DataRecords',
    [
      'The Ward CAD Data and Records page supplies the publisher route and visible 2026 Certified Mineral Appraisal Roll (Zip) relationship.',
      'It does not establish any member timestamp, publication chronology, owner record, appraisal result, private value, title, tax, legal effect, or transaction conclusion.',
    ],
  ],
  [
    'https://www.wardcad.org/Forms/ZipFileDownload?subPath=Data%20Records&fileName=1785190692_WARD+CAD+2026+CERTIFIED+MINERAL+OPEN+RECORDS.zip',
    [
      'The exact Ward archive supplies the outer-container identity, seven central-directory rows, conventional DOS date/time fields, 0x5455 extended-timestamp fields, member labels, byte counts, and archive integrity context.',
      'The article uses central-directory metadata only. It does not treat any field as publication, certification, creation, update, effective, filing, delivery, upload, approval, or data-as-of chronology and does not inspect or reproduce member payload content.',
    ],
  ],
  [
    'https://support.pkware.com/pkzip/appnote',
    [
      'The PKWARE APPNOTE publisher page supplies first-party context for the maintained ZIP format specification. The hash-locked APPNOTE 6.3.10 text defines the conventional MS-DOS date/time fields and maps 0x5455 to the extended timestamp field.',
      'The specification describes storage fields. It does not interpret the Ward archive, identify its creator, certify member dates, or assign business chronology to the entries.',
    ],
  ],
  [
    'https://comptroller.texas.gov/taxes/property-tax/contact.php',
    [
      'The Texas Comptroller contact page supplies routing context for local appraisal and tax questions.',
      'It does not validate the Ward archive, interpret a ZIP timestamp, decide title or ownership, establish private value, or provide legal or tax advice.',
    ],
  ],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The original Ward County market update is rejected. The final article answers one distinct source-control question about the calendar dates and dual timestamp representations in the Ward ZIP central directory.',
  'Information gain is concrete: seven exact entry rows, three calendar-date groups, file-number-versus-date ordering, conventional DOS and 0x5455 extended-timestamp representations, a tool-and-environment disclosure, stable claim IDs, and explicit chronology stops.',
  'Exact-title hero/share OCR and exact-keyword inline OCR passed; the dark low-oblique sealed-archive timeline and bright strict-overhead seven-file timestamp board are materially distinct and contain no incidental readable assertions.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'The Ward outer ZIP is 35,266,126 bytes with SHA-256 7993b427ee51193ce86d5490102054e2e30e26f5811cacfd3791819803d07752 and seven central-directory entries.',
  'Every entry contains a conventional DOS date/time plus a five-byte 0x5455 extended timestamp field. APPNOTE 4.4.6 describes the MS-DOS representation and its two-second precision; APPNOTE 4.6.1 maps 0x5455 to extended timestamp.',
  'ZipInfo 3.00 in America/Los_Angeles reports member 2 on March 26; members 1, 3, 5, 6, and 7 on July 16; and member 4 on July 23 across the displayed representations. Member 1 is DOS 18:52:44, UT local 16:52:44, and UT UTC 23:52:44.',
  'The article does not infer publication, certification, creation, update, effective, filing, delivery, upload, approval, or data-as-of chronology, interpret member contents, or repeat the Ward recap aggregate or cross-publisher layout-byte comparison.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'No member payload is extracted to disk, displayed, parsed for content, searched, sampled, summarized, or reproduced. No owner, account, address, email, property, title, acreage, production, appraisal, tax, private-value, offer, or legal conclusion appears.',
  'Any quoted time identifies ZipInfo 3.00, the America/Los_Angeles environment, and the DOS, UT-local, or UT-UTC representation. Calendar dates are presented as archive-entry metadata only.',
  'The organizational author is the MRX Editorial Team; directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, and disclosed-buyer language are present without implying LocalBusiness or Google Business Profile eligibility.',
  'Image text is limited to the exact canonical title and exact primary keyword and adds no official affiliation, government mark, date finding, identifier, record content, value conclusion, approval statement, or watermark.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify([
  'four_official_https_sources_with_exact_source_roles',
  'ward_publisher_page_and_exact_outer_zip_identity_pass',
  'seven_central_directory_entry_names_dates_and_byte_counts_pass',
  'dos_and_0x5455_extended_timestamp_representation_pass',
  'zipinfo_3_00_environment_and_representation_disclosure_pass',
  'three_calendar_date_grouping_and_file_number_order_distinction_pass',
  'no_business_chronology_inference_pass',
  'no_member_payload_content_use_or_personal_data_reproduction_pass',
  'adjacent_article_nonduplication_and_information_gain_pass',
  'answer_first_claim_adjacent_citation_and_source_boundary_pass',
  'semantic_internal_link_roles_pass',
  'unsupported_high_risk_claim_scan_pass',
]);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify([
  'hero_share_sha256_identity',
  'inline_image_distinct_sha256',
  'exact_text_ocr_pass',
  'filename_text_identity_pass',
  'website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass',
  'no_member_payload_extraction_display_content_parse_search_sample_summary_or_reproduction_pass',
  'no_publication_certification_creation_update_effective_filing_delivery_upload_approval_or_data_as_of_inference_pass',
  'no_owner_account_address_email_property_title_acreage_production_appraisal_tax_private_value_offer_legal_or_transaction_conclusion_pass',
  'mrx_editorial_team_author_directional_assessment_not_certified_appraisal_full_advice_disclaimer_disclosed_buyer_and_no_localbusiness_gbp_implication_pass',
  'article308_article309_karnes_howard_ownership_boundaries_pass',
  'owner_agency_and_possible_buyer_interest_disclosure_preserved',
  'no_people_hands_readable_base_text_letters_numbers_dates_maps_county_outlines_logos_seals_official_forms_personal_data_property_identifiers_values_findings_conclusions_approval_marks_or_watermarks_visual_claim',
]);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
