#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '169';
process.env.MRX_ARTICLE_SLUG =
  'dewitt-cad-2024-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_ARTICLE_TITLE =
  'DeWitt CAD 2024 Oil, Gas, Minerals Ratio Study Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'DeWitt CAD 2024 mineral ratio study';
process.env.MRX_HERO_FILENAME =
  'dewitt-cad-2024-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_INLINE_FILENAME = 'dewitt-cad-2024-mineral-ratio-study';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2024',
  'Oil, Gas, Minerals',
  'Ratio Study',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2024',
  'mineral ratio study',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique open navy archival ratio-study ledger case with seven blank measurement dividers and one detached blank copper date tab on a pale limestone desk beside uninterrupted navy title space. No person, hand, logo, seal, government mark, map, Texas outline, real table, readable text, number, signature, property record, address, money, value, chart, claim, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead seven circular measurement frames arranged around one blank navy source tile with a detached copper caution ring and dotted provenance path above an uninterrupted lower navy keyword band. No folder, folio, ledger case, person, hand, logo, seal, government mark, map, Texas outline, real table, readable text, number, signature, property record, address, money, value, chart, claim, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
