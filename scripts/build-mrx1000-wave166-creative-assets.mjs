#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '166';
process.env.MRX_ARTICLE_SLUG =
  'culberson-cad-2025-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_ARTICLE_TITLE =
  'Culberson CAD 2025 Oil, Gas, Minerals Ratio Study Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'Culberson CAD 2025 mineral ratio study';
process.env.MRX_HERO_FILENAME =
  'culberson-cad-2025-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_INLINE_FILENAME = 'culberson-cad-2025-mineral-ratio-study';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Culberson CAD 2025',
  'Oil, Gas, Minerals',
  'Ratio Study',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Culberson CAD 2025',
  'mineral ratio study',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique single navy source-record card with one blank copper year tab and one abstract seven-cell measurement line on a pale limestone desk beside uninterrupted navy title space. No person, hand, logo, seal, government mark, real table, readable text, number, signature, property record, address, money, value, claim, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead seven-cell measurement boundary with a detached blank copper caution marker and dotted navy source path above an uninterrupted lower navy keyword band. No source-record card, folio, folder, person, hand, logo, seal, real table, readable text, number, signature, property record, address, money, value, claim, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
