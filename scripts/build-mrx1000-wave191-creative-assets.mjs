#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '191';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-2025-2026-reappraisal-plan-mineral-property-valuation-section-locator';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD 2025-2026 Reappraisal Plan: Mineral Property Valuation Section Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Howard CAD 2025-2026 mineral property valuation';
process.env.MRX_HERO_FILENAME =
  'howard-cad-2025-2026-reappraisal-plan-mineral-property-valuation-section-locator';
process.env.MRX_INLINE_FILENAME = 'howard-cad-2025-2026-mineral-property-valuation';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Howard CAD 2025-2026',
  'Reappraisal Plan:',
  'Mineral Property Valuation',
  'Section Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Howard CAD 2025-2026',
  'mineral property valuation',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-angle archival-document scene with one partly open navy archive drawer, one cream legacy-document cartridge, translucent blank reflow sheets, one brass locator bracket, pale limestone, and an uninterrupted navy left title field. No readable base text, letters, numbers, logo, seal, government mark, Microsoft or Word branding, official page, person, hand, map, money, oilfield scene, chart, value, signature, UI, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-versus-render comparison board with one compact cream source stack in a navy sleeve, one separate taller loose-sheet rendering stack, one brass bridge, one blank section tab, one neutral metadata capsule, pale limestone, and an uninterrupted lower navy keyword band. No perspective drawer, readable base text, letters, numbers, logo, seal, government mark, Microsoft or Word branding, official page, person, hand, map, money, oilfield scene, chart, value, signature, UI, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
