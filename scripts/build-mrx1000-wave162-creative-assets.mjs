#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '162';
process.env.MRX_ARTICLE_SLUG = 'culberson-cad-certified-mineral-roll-zip-source-control-record';
process.env.MRX_ARTICLE_TITLE = 'Culberson CAD Certified Mineral Roll ZIP Source-Control Record';
process.env.MRX_ARTICLE_KEYWORD = 'Culberson CAD certified mineral roll ZIP';
process.env.MRX_HERO_FILENAME = 'culberson-cad-certified-mineral-roll-zip-source-control-record';
process.env.MRX_INLINE_FILENAME = 'culberson-cad-certified-mineral-roll-zip';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Culberson CAD',
  'Certified Mineral Roll',
  'ZIP Source-Control',
  'Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Culberson CAD certified',
  'mineral roll ZIP',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter source-control scene with a sealed cobalt archive capsule, seven blank cream member tabs, an abstract checksum token, and a restrained Texas tract-map texture on the right of uninterrupted navy title space. No member content, row data, person, hand, real record, text, letter, number, label, spreadsheet, owner fact, property fact, seal, logo, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-control scene with one closed square navy archive tile surrounded by seven separate blank file tokens, an abstract custody path, checksum chip, and blank county-map corner above an uninterrupted lower navy keyword band. No archive capsule, person, hand, real record, text, letter, number, label, row data, spreadsheet, owner fact, property fact, seal, logo, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
