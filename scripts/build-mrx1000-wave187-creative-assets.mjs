#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '187';
process.env.MRX_ARTICLE_SLUG =
  'gonzales-cad-2025-mass-appraisal-report-mineral-responsibility-page-locator';
process.env.MRX_ARTICLE_TITLE =
  'Gonzales CAD 2025 Mass Appraisal Report Mineral Responsibility Page Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Gonzales CAD mineral appraisal responsibility';
process.env.MRX_HERO_FILENAME =
  'gonzales-cad-2025-mass-appraisal-report-mineral-responsibility-page-locator';
process.env.MRX_INLINE_FILENAME = 'gonzales-cad-mineral-appraisal-responsibility';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Gonzales CAD 2025',
  'Mass Appraisal Report',
  'Mineral Responsibility',
  'Page Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Gonzales CAD mineral',
  'appraisal responsibility',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter official-report research desk with an open blank binder, brass page marker, blank county-outline sheet, magnifier, walnut, ivory paper, and an uninterrupted navy left title field. No readable base text, official document copy, government mark, agency logo, seal, person, hand, personal data, property record, appraisal value, tax amount, offer, result, signature, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead two-page locator workspace with separate blank printed-page and PDF-page cards, a thin gold connector, blank source-control card, archive folder, county-outline tile, ivory field, and an uninterrupted lower navy keyword band. No perspective binder, magnifier, stacked books, readable base text, official document copy, government mark, agency logo, seal, person, hand, personal data, property record, appraisal value, tax amount, offer, result, signature, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
