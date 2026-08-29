#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '189';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD 2025 Certified Mineral Dataset ZIP: One-Member Integrity Record';
process.env.MRX_ARTICLE_KEYWORD = 'Howard CAD 2025 certified mineral dataset';
process.env.MRX_HERO_FILENAME =
  'howard-cad-2025-certified-mineral-dataset-zip-one-member-integrity-record';
process.env.MRX_INLINE_FILENAME = 'howard-cad-2025-certified-mineral-dataset';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Howard CAD 2025',
  'Certified Mineral',
  'Dataset ZIP:',
  'One-Member Integrity Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Howard CAD 2025 certified',
  'mineral dataset',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter archive scene with one navy archival capsule, one separate blank cream member sleeve, clear acrylic, one brass integrity ring, small abstract evidence tokens, limestone, walnut, and an uninterrupted navy left title field. No readable base text, letters, numbers, government mark, agency logo, seal, person, hand, map, money, offer, property record, personal data, official page, spreadsheet data, appraisal, tax result, value, signature, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead evidence board with one navy archive tile, one separate cream spreadsheet-like member tile, one brass connector, four abstract metadata tokens, one integrity ring, pale limestone, blueprint gray, and an uninterrupted lower navy keyword band. No perspective capsule, readable base text, letters, numbers, government mark, agency logo, seal, person, hand, map, money, offer, property record, personal data, official page, spreadsheet data, appraisal, tax result, value, signature, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
