#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '213';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-2026-appraisal-services-rfp-mineral-scope-date-control-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2026 Appraisal Services RFP: Mineral Scope and Date-Control Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD mineral appraisal RFP 2026';
process.env.MRX_HERO_FILENAME =
  'midland-cad-2026-appraisal-services-rfp-mineral-scope-and-date-control-crosswalk';
process.env.MRX_INLINE_FILENAME = 'midland-cad-mineral-appraisal-rfp-2026';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD 2026',
  'Appraisal Services RFP:',
  'Mineral Scope and',
  'Date-Control Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Midland CAD mineral appraisal', 'RFP 2026']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-three-quarter appraisal-procurement control desk with one sealed navy proposal folio, one blank tabbed contract binder, three blank calendar cards, a mineral core tray, a subtle abstract basin contour texture, and an uninterrupted left navy title field. No readable text, letters, numbers, dates, pseudo-writing, logos, government seals, watermarks, vendor marks, signatures, bids, prices, account records, owner data, property records, charts, values, money, checkmarks, people, hands, flags, conclusions, award claims, or official affiliation.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict overhead pale-limestone date-control crosswalk with four separate blank evidence sheets, three blank date cards connected by amber lines, one mineral-category token, a bound packet with one visibly offset blank page, one neutral warning marker, and an uninterrupted lower navy keyword band. No low-oblique desk, sealed folio, core tray, readable text, letters, numbers, dates, pseudo-writing, logos, government seals, watermarks, vendor marks, signatures, bids, prices, account records, owner data, property records, charts, values, money, checkmarks, people, hands, flags, conclusions, award claims, or official affiliation.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
