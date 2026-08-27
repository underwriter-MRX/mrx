#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '163';
process.env.MRX_ARTICLE_SLUG = 'culberson-cad-mineral-category-codes-source-locator';
process.env.MRX_ARTICLE_TITLE = 'Culberson CAD Mineral Category Codes Source Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Culberson CAD mineral category codes';
process.env.MRX_HERO_FILENAME = 'culberson-cad-mineral-category-codes-source-locator';
process.env.MRX_INLINE_FILENAME = 'culberson-cad-mineral-category-codes';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Culberson CAD',
  'Mineral Category',
  'Codes',
  'Source Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Culberson CAD mineral',
  'category codes',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter source-locator scene with a compact closed cobalt three-drawer source-index cabinet, several blank cream category-tab dividers, and an abstract brass locator pin on the right of uninterrupted navy title space. No ZIP capsule, folio, binder, real record, text, code, number, row data, owner fact, property fact, seal, logo, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-role scene with exactly three clearly separated blank document tiles, small round brass locator pins, and a neutral dotted path above an uninterrupted lower navy keyword band. No cabinet, ZIP capsule, person, hand, real record, text, code, number, row data, owner fact, property fact, equivalence arrow, seal, logo, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
