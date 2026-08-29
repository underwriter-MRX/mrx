#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '185';
process.env.MRX_ARTICLE_SLUG =
  'glasscock-cad-2025-2026-reappraisal-plan-oil-and-gas-reserves-page-locator';
process.env.MRX_ARTICLE_TITLE =
  'Glasscock CAD 2025-2026 Reappraisal Plan Oil and Gas Reserves Page Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Glasscock CAD oil and gas reserves reappraisal plan';
process.env.MRX_HERO_FILENAME =
  'glasscock-cad-2025-2026-reappraisal-plan-oil-and-gas-reserves-page-locator';
process.env.MRX_INLINE_FILENAME = 'glasscock-cad-oil-and-gas-reserves-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Glasscock CAD 2025-2026',
  'Reappraisal Plan',
  'Oil and Gas Reserves',
  'Page Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Glasscock CAD oil and gas reserves',
  'reappraisal plan',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter archival attachment scene with one navy binder, exactly eight blank page tabs, brass details, walnut and limestone, and an uninterrupted navy left title field. No readable base text, government mark, agency logo, seal, person, hand, property record, personal data, map, money, tax, appraisal, value, offer, outcome, signature, UI, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead page-boundary scene with a horizontal blank eight-segment tab strip, separate locator card, brass boundary markers, blueprint-gray paper, limestone, and an uninterrupted lower navy keyword band. No binder, report stack, perspective, readable base text, government mark, agency logo, seal, person, hand, property record, personal data, map, money, tax, appraisal, value, offer, outcome, signature, UI, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
