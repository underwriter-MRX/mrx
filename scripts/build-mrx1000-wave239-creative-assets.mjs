#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '239';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2026-2029-mineral-contract-listed-interests-non-fuel-mineral-exclusions';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2026-2029 Mineral Contract: Listed Interests and Non-Fuel Mineral Exclusions';
process.env.MRX_ARTICLE_KEYWORD = 'Ward CAD mineral property contract definition';
process.env.MRX_HERO_FILENAME =
  'ward-cad-2026-2029-mineral-contract-listed-interests-and-non-fuel-mineral-exclusions';
process.env.MRX_INLINE_FILENAME = 'ward-cad-mineral-property-contract-definition';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ward CAD 2026-2029',
  'Mineral Contract:',
  'Listed Interests and',
  'Non-Fuel Mineral Exclusions',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ward CAD mineral property',
  'contract definition',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide dark oblique contract-scope scene with one unbranded archival binder, four abstract interest markers, a separate tray of sand, gravel, and caliche, and an uninterrupted navy title field on the left. No readable base text, letters, numbers, maps, wells, rigs, money, logos, seals, signatures, official forms, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down high-key contract-definition evidence table with four abstract interest tokens, three separate material sample dishes, a blank calendar tab, and a clean upper navy typography band. No oblique scene, binder stack, readable base text, letters, numbers, maps, wells, rigs, money, logos, seals, signatures, official forms, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
