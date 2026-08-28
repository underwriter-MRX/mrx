#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '165';
process.env.MRX_ARTICLE_SLUG =
  'culberson-cad-2026-certified-roll-format-boundary-source-index';
process.env.MRX_ARTICLE_TITLE =
  'Culberson CAD 2026 Certified Roll Format Boundary Source Index';
process.env.MRX_ARTICLE_KEYWORD = 'Culberson CAD 2026 certified roll formats';
process.env.MRX_HERO_FILENAME =
  'culberson-cad-2026-certified-roll-format-boundary-source-index';
process.env.MRX_INLINE_FILENAME = 'culberson-cad-2026-certified-roll-formats';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Culberson CAD 2026',
  'Certified Roll',
  'Format Boundary',
  'Source Index',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Culberson CAD 2026',
  'certified roll formats',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique closed navy source-index folio with exactly four blank colored endpoint tabs and an unlabeled brass document-control clip on a pale limestone desk, with uninterrupted navy title space. No person, hand, real record, readable text, number, name, address, account, seal, logo, property, value, claim, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead four-object format boundary: two separate blank paper sleeves, one pale-green abstract-grid folder, and one blue archive pouch connected by a dotted navy path above an uninterrupted lower navy keyword band. No folio, person, hand, real record, readable text, number, name, address, account, seal, logo, property, value, claim, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
