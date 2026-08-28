#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '167';
process.env.MRX_ARTICLE_SLUG =
  'dewitt-cad-2025-g1-oil-gas-and-mineral-reserve-source-record';
process.env.MRX_ARTICLE_TITLE =
  'DeWitt CAD 2025 G1 Oil, Gas and Mineral Reserve Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'DeWitt CAD 2025 mineral reserve category';
process.env.MRX_HERO_FILENAME =
  'dewitt-cad-2025-g1-oil-gas-and-mineral-reserve-source-record';
process.env.MRX_INLINE_FILENAME = 'dewitt-cad-2025-mineral-reserve-category';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2025 G1',
  'Oil, Gas and Mineral',
  'Reserve Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2025',
  'mineral reserve category',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique single navy annual-report folio with one blank copper G1 tab and one abstract four-cell row on a pale limestone desk beside uninterrupted navy title space. No person, hand, logo, seal, government mark, real table, readable text, number, signature, property record, address, money, value, claim, score, chart, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source boundary with a blank page locator, four separate unlabeled navy geometric cells, a copper surface-mineral divider, a detached blank caution marker, and uninterrupted lower navy keyword space. No folio, folder, oblique perspective, person, hand, logo, seal, real table, readable text, number, signature, property record, address, money, value, claim, score, chart, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
