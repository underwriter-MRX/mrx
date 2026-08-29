#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '174';
process.env.MRX_ARTICLE_SLUG = 'dimmit-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_ARTICLE_TITLE = 'Dimmit CAD 2025-2026 Reappraisal Plan Adoption Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'Dimmit CAD 2025-2026 reappraisal plan';
process.env.MRX_HERO_FILENAME = 'dimmit-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_INLINE_FILENAME = 'dimmit-cad-2025-2026-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Dimmit CAD',
  '2025-2026',
  'Reappraisal Plan',
  'Adoption Source',
  'Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Dimmit CAD 2025-2026', 'reappraisal plan']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter administrative source-register scene with one navy archival plan binder, a low document tray, one separate blank resolution tab, one unmarked adoption marker, muted copper page dividers, realistic paper and linen textures, and uninterrupted dark left title space. No person, hand, readable text, letter, number, fake official page, seal, signature, logo, map, property record, chart, money, value, badge, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead evidence page-locator pathway with five unbranded blank paper cards, plain navy rules, muted copper page-edge markers, geometric blank fields, a connector path, paperclip, magnifying glass, and an uninterrupted lower navy keyword band. No binder, three-quarter view, person, hand, readable text, letter, number, icon, emblem, building, government imagery, official page, seal, signature, logo, map, money, property record, value, chart, badge, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
