#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '184';
process.env.MRX_ARTICLE_SLUG =
  'glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator';
process.env.MRX_ARTICLE_TITLE =
  'Glasscock CAD 2025 Annual Report Category G Mineral Definition Page Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Glasscock CAD Category G mineral definition';
process.env.MRX_HERO_FILENAME =
  'glasscock-cad-2025-annual-report-category-g-mineral-definition-page-locator';
process.env.MRX_INLINE_FILENAME = 'glasscock-cad-category-g-mineral-definition';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Glasscock CAD 2025',
  'Annual Report Category G',
  'Mineral Definition',
  'Page Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Glasscock CAD Category G',
  'mineral definition',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free side-lit three-quarter physical-page locator scene with an eight-sheet blank cream report stack, one brass row frame, one clear page marker, walnut surface, and uninterrupted navy left title field. No readable base text, government mark, person, hand, map, property record, personal data, money, tax, value, offer, result, UI, chart, logo, seal, signature, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead blank three-column report grid with one brass-framed lower row, one clear physical-page marker, pale limestone, and an uninterrupted lower navy keyword band. No report stack, perspective, readable base text, government mark, person, hand, map, property record, personal data, money, tax, value, offer, result, UI, chart, logo, seal, signature, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
