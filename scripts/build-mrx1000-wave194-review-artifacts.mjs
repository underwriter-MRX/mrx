#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '194';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk';
process.env.MRX_PROGRAM_ROW_ID = 'MRX1000-0797';
process.env.MRX_SELECTION_RANK = '266';
process.env.MRX_EXPECTED_SOURCE_COUNT = '4';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2024 Annual Report: Category G Parcel and Ratio-Study Table Crosswalk';
process.env.MRX_PRIMARY_KEYWORD = 'Karnes CAD 2024 annual report Category G';
process.env.MRX_INLINE_KEYWORD = 'Karnes CAD 2024 annual report Category G';
process.env.MRX_HERO_ALT =
  'An upright report folio with two blank table windows appears beside the exact Karnes CAD Category G crosswalk title.';
process.env.MRX_INLINE_ALT =
  'Two overhead blank evidence tables appear above the Karnes CAD 2024 annual report Category G phrase.';
process.env.MRX_SOURCE_SCOPES_JSON = JSON.stringify([
  ['https://karnescad.org/home/DataRecords', ['The official page supplies the Karnes CAD publisher route, Annual Reports section, and visible 2024 Annual Report link.','It does not supply the exact PDF hash, prove a page-3 row, identify a person or property, or establish appraisal, tax, title, value, offer, or legal effect.']],
  ['https://karnescad.org/Forms/GetDocument?fileName=1740603796_2024+Annual+Report.pdf&subPath=Data+Records', ['The exact eight-page PDF supplies physical page 3, the two section names, visible headers, and literal Category G rows.','The aggregate report rows do not identify an owner, tract, lease, well, royalty, title, tax due, current value, sale value, offer, transaction, or legal effect.']],
  ['https://karnescad.org/', ['The official homepage supplies Karnes CAD public-site identity and its statement about appraisal responsibility for Mineral, Utility, and Industrial accounts.','It does not prove the exact annual-report bytes, either page-3 row, a property fact, tax result, sale value, offer, or legal conclusion.']],
  ['https://comptroller.texas.gov/taxes/property-tax/docs/96-313.pdf', ['The official state guide supplies separate statewide appraisal-roll classification context.','It does not rewrite the Karnes report wording, reconcile the two local totals, or establish a person, property, tax, title, value, offer, or legal result.']],
]);
process.env.MRX_EDITORIAL_FINDINGS_JSON = JSON.stringify([
  'The article rejects the broad Karnes valuation/family-guide identity and owns one distinct physical-page-3 two-table crosswalk.',
  'The current information-gain contract is applied through an answer-first distinction, exact table headers, claim-adjacent primary citations, separate-source roles, five supported FAQs, semantic links, and no ranking/citation promise.',
  'Exact-title hero/share OCR passed; exact-keyword inline OCR passed; the upright report folio and overhead two-table crosswalk are materially different compositions and contain no factual data claim.',
]);
process.env.MRX_FACTUAL_FINDINGS_JSON = JSON.stringify([
  'Claims are bounded to the current Data and Records page, exact eight-page 2024 Annual Report PDF, Karnes CAD homepage, and Texas Comptroller classification guide.',
  'The exact PDF controls are HTTP 200, application/pdf, 254,728 bytes, eight pages, and SHA-256 9668e955ec3c733575b08e164a14603c950eba9c5d24cdde50c5e60bf93df6a7.',
  'Physical page 3 visibly separates Property Types Appraised G Oil/Gas/Minerals with 146,099 parcel count and 9,060,120,750 market value from Ratio Study Analysis G. Oil, Gas, Minerals with 193 ratios, 9,059,846,390 appraised value, and five displayed statistical measures.',
]);
process.env.MRX_COMPLIANCE_FINDINGS_JSON = JSON.stringify([
  'The article rejects any silent reconciliation, owner/tract/lease/well inference, production/reserve/royalty conclusion, appraisal-accuracy claim, taxable-value or tax-due claim, current sale-value or offer claim, transaction recommendation, or legal conclusion.',
  'Image text is limited to the exact title and keyword and adds no official affiliation, report data, dollar figure, property fact, value, tax, offer, result, or ranking/citation claim.',
]);
process.env.MRX_FACTUAL_CHECKS_JSON = JSON.stringify(['four_distinct_https_sources','current_primary_source_http_review_pass','official_pdf_complete_file_sha256_and_page_count_pass','rendered_physical_page_3_visual_review_pass','property_types_appraised_row_header_and_value_transcription_pass','ratio_study_row_header_and_value_transcription_pass','two_table_non_reconciliation_boundary_pass','claim_to_source_scope_present','information_gain_distinct_job_and_canonical_owner_pass','answer_first_and_claim_adjacent_citation_integrity_pass','semantic_internal_link_roles_pass','unsupported_high_risk_claim_scan_pass']);
process.env.MRX_COMPLIANCE_CHECKS_JSON = JSON.stringify(['hero_share_sha256_identity','inline_image_distinct_sha256','exact_text_ocr_pass','filename_text_identity_pass','website_seo_aeo_gate_no_keyword_stuffing_unsupported_faq_duplicate_schema_bad_geography_fabricated_entity_or_ranking_indexing_retrieval_citation_traffic_lead_revenue_guarantee_pass','two_table_crosswalk_no_owner_property_account_tract_lease_well_acreage_reserve_production_royalty_title_appraisal_accuracy_tax_current_value_sale_value_offer_transaction_or_legal_claim_pass','owner_agency_and_possible_buyer_interest_disclosure_preserved','no_readable_base_text_letters_numbers_data_dollar_figure_official_form_seal_logo_map_well_rig_person_hand_money_chart_graph_arrow_screen_government_mark_or_watermark_visual_claim']);

await import('./build-mrx1000-wave82-review-artifacts.mjs');
