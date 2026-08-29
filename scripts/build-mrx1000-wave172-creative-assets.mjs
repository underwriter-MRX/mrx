#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '172';
process.env.MRX_ARTICLE_SLUG =
  'dimmit-cad-2025-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_ARTICLE_TITLE =
  'Dimmit CAD 2025 Oil, Gas, Minerals Ratio Study Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'Dimmit CAD 2025 mineral ratio study';
process.env.MRX_HERO_FILENAME =
  'dimmit-cad-2025-oil-gas-minerals-ratio-study-source-record';
process.env.MRX_INLINE_FILENAME = 'dimmit-cad-2025-mineral-ratio-study';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2025',
  'Oil, Gas, Minerals',
  'Ratio Study',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2025 mineral',
  'ratio study',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on deep navy source-record drawer with one blank cream index card, seven empty brass-edged slots, a muted teal tab, pale limestone background, and uninterrupted left navy title space. No overhead worksheet, person, hand, text, letter, number, logo, seal, government mark, map, chart, browser UI, screenshot, money, gavel, value, grade, ranking, comparison, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead pale limestone source-verification flat lay with one blank cream worksheet divided into exactly seven empty navy-outlined measurement cells, a detached copper caution triangle, separate teal source tab, closed navy pencil, brass paper clip, and uninterrupted lower navy keyword band. No drawer, archive box, standing folder, perspective view, person, hand, text, letter, number, logo, seal, government mark, map, browser UI, screenshot, money, gavel, value, grade, ranking, comparison, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
