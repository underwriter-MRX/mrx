#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '186';
process.env.MRX_ARTICLE_SLUG =
  'glasscock-cad-property-search-result-field-inventory-for-mineral-research';
process.env.MRX_ARTICLE_TITLE =
  'Glasscock CAD Property Search Result Field Inventory for Mineral Research';
process.env.MRX_ARTICLE_KEYWORD = 'Glasscock CAD property search result fields';
process.env.MRX_HERO_FILENAME =
  'glasscock-cad-property-search-result-field-inventory-for-mineral-research';
process.env.MRX_INLINE_FILENAME = 'glasscock-cad-property-search-result-fields';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Glasscock CAD Property',
  'Search Result Field',
  'Inventory for',
  'Mineral Research',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Glasscock CAD property search',
  'result fields',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free side-lit three-quarter research desk with a navy card-catalog tray, eighteen blank cream divider cards, a closed loupe, brass marker, limestone, walnut, and an uninterrupted navy left title field. No readable base text, official document, government mark, agency logo, seal, person, hand, property record, personal data, map, money, tax, appraisal, value, offer, outcome, UI, signature, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead inventory board with exactly eighteen blank cream tiles in a six-by-three grid, three unlabeled groups separated by brass rules, a blank navy reference card, blueprint-gray paper, limestone, and an uninterrupted lower navy keyword band. No card-catalog tray, perspective, readable base text, official document, government mark, agency logo, seal, person, hand, property record, personal data, map, money, tax, appraisal, value, offer, outcome, UI, signature, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
