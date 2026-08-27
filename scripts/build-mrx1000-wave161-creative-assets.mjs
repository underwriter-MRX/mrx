#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '161';
process.env.MRX_ARTICLE_SLUG = 'crane-cad-oil-gas-reappraisal-plan-source-locator';
process.env.MRX_ARTICLE_TITLE = 'Crane CAD Oil and Gas Reappraisal Plan Source Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Crane CAD oil and gas reappraisal plan';
process.env.MRX_HERO_FILENAME = 'crane-cad-oil-and-gas-reappraisal-plan-source-locator';
process.env.MRX_INLINE_FILENAME = 'crane-cad-oil-and-gas-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Crane CAD',
  'Oil and Gas',
  'Reappraisal Plan',
  'Source Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Crane CAD oil and gas',
  'reappraisal plan',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter archival scene with an upright closed deep-navy plan folio, blank cobalt section tabs, subtle brass spine hardware, a brass locator frame over a blank translucent index sheet, and one mineral core on pale limestone, all confined to the right of uninterrupted deep-navy title space. No binder content, person, hand, real document, text, letter, number, label, map, chart, formula, value, date, deadline, seal, logo, screen, QR code, government mark, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pale-limestone section-locator scene with seven separate blank cobalt and ivory tokens forming a path to a blank translucent index card held by four brass corner locators, one mineral sample, and one round brass locator pin above an uninterrupted lower navy keyword band. No folio, binder, book, case, cabinet, folder, latch, standing object, person, hand, real document, text, letter, number, label, map, chart, formula, value, date, deadline, seal, logo, screen, QR code, government mark, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
