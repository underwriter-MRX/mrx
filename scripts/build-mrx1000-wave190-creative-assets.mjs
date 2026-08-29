#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '190';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-2024-annual-report-category-g-oil-and-gas-property-totals-page-locator';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD 2024 Annual Report: Category G Oil and Gas Property Totals Page Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Howard CAD 2024 Category G oil and gas property totals';
process.env.MRX_HERO_FILENAME =
  'howard-cad-2024-annual-report-category-g-oil-and-gas-property-totals-page-locator';
process.env.MRX_INLINE_FILENAME = 'howard-cad-2024-category-g-oil-and-gas-property-totals';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Howard CAD 2024',
  'Annual Report: Category G',
  'Oil and Gas Property Totals',
  'Page Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Howard CAD 2024 Category G',
  'oil and gas property totals',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter annual-report scene with one open cream binder, one brass page marker, one acrylic page token, one closed navy archival sleeve, pale Texas limestone, soft side light, and an uninterrupted navy left title field. No readable base text, letters, numbers, table, chart, government mark, agency logo, seal, official page, person, hand, map, money, oilfield scene, value, signature, UI, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-and-row evidence board with one navy source tile, one cream page-locator card, one blank four-cell row strip, one brass pointer, one separate closed sale-value boundary folder, pale limestone, blueprint gray, and an uninterrupted lower navy keyword band. No perspective binder, readable base text, letters, numbers, official page, government mark, agency logo, seal, person, hand, map, money, oilfield scene, value, signature, UI, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
