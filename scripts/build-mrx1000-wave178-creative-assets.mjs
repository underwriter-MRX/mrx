#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '178';
process.env.MRX_ARTICLE_SLUG =
  'ector-cad-2026-mass-appraisal-report-mineral-section-page-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Ector CAD 2026 Mass Appraisal Report Mineral Section Page Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Ector CAD 2026 mineral section';
process.env.MRX_HERO_FILENAME =
  'ector-cad-2026-mass-appraisal-report-mineral-section-page-crosswalk';
process.env.MRX_INLINE_FILENAME = 'ector-cad-2026-mineral-section';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ector CAD 2026',
  'Mass Appraisal Report',
  'Mineral Section',
  'Page Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Ector CAD 2026', 'mineral section']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free eye-level museum-archive scene with one closed cream report folio on a walnut cradle, four staggered transparent page dividers, blank navy and gold tabs, a brass reading lamp, and uninterrupted deep-navy left title space. No readable base text, letter, number, logo, seal, signature, person, hand, map, property record, value, price, rate, formula, tax result, appraisal result, offer, money, UI, chart, official page, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead warm-stone crosswalk flat lay with exactly four blank cream page cards in a descending diagonal sequence, one thin navy and gold connector path, four abstract nodes, one dark report sleeve, a brass page-corner gauge, a transparent locator frame, and an uninterrupted lower navy keyword band. No eye-level folio, glass-divider hero composition, readable base text, letter, number, logo, seal, signature, person, hand, map, property record, value, price, rate, formula, tax result, appraisal result, offer, money, UI, chart, official page, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
