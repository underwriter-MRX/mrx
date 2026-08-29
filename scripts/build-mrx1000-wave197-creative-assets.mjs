#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '197';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2025-certified-mineral-roll-corrected-zip-identity-check';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2025 Certified Mineral Roll: Corrected ZIP Identity Check';
process.env.MRX_ARTICLE_KEYWORD = 'Karnes CAD 2025 corrected mineral roll ZIP';
process.env.MRX_HERO_FILENAME =
  'karnes-cad-2025-certified-mineral-roll-corrected-zip-identity-check';
process.env.MRX_INLINE_FILENAME = 'karnes-cad-2025-corrected-mineral-roll-zip';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Karnes CAD 2025',
  'Certified Mineral Roll:',
  'Corrected ZIP',
  'Identity Check',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Karnes CAD 2025 corrected',
  'mineral roll ZIP',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter source-control scene with one closed navy archive case, seven blank brass-edged tabs, a copper tamper seal, pale Texas limestone, warm side light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead seven-member inventory workspace with seven separate blank cream evidence tiles around one closed copper clasp, a magnifier, a neutral hash token, pale limestone, and an uninterrupted lower navy keyword band. No case, upright box, front-facing perspective, readable base text, letters, numbers, dates, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
