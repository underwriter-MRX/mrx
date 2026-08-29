#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '196';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2024-mass-appraisal-report-page-20-county-name-source-check';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2024 Mass Appraisal Report: Page 20 County-Name Source Check';
process.env.MRX_ARTICLE_KEYWORD = 'Karnes CAD 2024 mass appraisal report page 20';
process.env.MRX_HERO_FILENAME =
  'karnes-cad-2024-mass-appraisal-report-page-20-county-name-source-check';
process.env.MRX_INLINE_FILENAME = 'karnes-cad-2024-mass-appraisal-report-page-20';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Karnes CAD 2024',
  'Mass Appraisal Report:',
  'Page 20 County-Name',
  'Source Check',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Karnes CAD 2024 mass',
  'appraisal report page 20',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter report-integrity desk scene with an upright blank cream report folio, one blank offset page, two neutral brass source-verification tabs, a magnifying glass, pale Texas limestone, warm window light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead split source-check workspace with two separate blank cream evidence cards, a thin brass divider, a magnifier, two neutral source-control markers, a pencil, pale limestone, and an uninterrupted lower navy keyword band. No upright folio, front-facing perspective, readable base text, letters, numbers, dates, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
