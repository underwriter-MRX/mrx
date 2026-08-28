#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '168';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-2024-25-map-review-source-record';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD 2024-25 MAP Review Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'DeWitt CAD 2025 MAP review';
process.env.MRX_HERO_FILENAME = 'dewitt-cad-2024-25-map-review-source-record';
process.env.MRX_INLINE_FILENAME = 'dewitt-cad-2025-map-review';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2024-25',
  'MAP Review',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2025',
  'MAP review',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique navy review-folio still life with one blank four-section index, one blank copper tab, and uninterrupted navy title space. No text, number, person, hand, logo, seal, government mark, Texas outline, real table, signature, property record, address, money, score, checkmark, chart, result, claim, recommendation, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead process-boundary workspace with four separate unlabeled navy lanes, a copper two-year cycle arc, three blank source-locator cards, one detached stop marker, and uninterrupted lower navy keyword space. No folder, folio, oblique perspective, text, number, person, hand, logo, seal, government mark, Texas outline, fake report page, real table, signature, property record, address, money, score, checkmark, chart, result, claim, recommendation, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
