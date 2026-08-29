#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '173';
process.env.MRX_ARTICLE_SLUG =
  'dimmit-cad-2024-25-map-review-source-record';
process.env.MRX_ARTICLE_TITLE =
  'Dimmit CAD 2024-25 MAP Review Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'Dimmit CAD 2024-25 MAP review';
process.env.MRX_HERO_FILENAME =
  'dimmit-cad-2024-25-map-review-source-record';
process.env.MRX_INLINE_FILENAME = 'dimmit-cad-2024-25-map-review';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2024-25',
  'MAP Review',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2024-25',
  'MAP review',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on South Texas records-review workstation with one upright deep-navy archival report folio on the right, five blank brass-edged index tabs, four separate muted-teal review tiles, pale limestone surface, warm studio shadows, and uninterrupted left navy title space. No overhead provenance pathway, person, hand, text, letter, number, logo, seal, government mark, authentic document screenshot, map, chart, dollar sign, money, gavel, value, grade, recommendation, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead pale-limestone evidence-provenance pathway using four separate blank cream source cards linked by a thin teal cord, one blank navy source tab, one brass clip, one separate copper boundary marker, and an uninterrupted lower navy keyword band. No standing binder, upright folio, archive drawer, perspective view, person, hand, text, letter, number, logo, seal, government mark, authentic document screenshot, map, chart, dollar sign, money, gavel, value, grade, recommendation, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
