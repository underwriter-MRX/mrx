#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '244';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-lease-level-full-value-owner-proration';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: Lease-Level Full Value and Owner Proration';
process.env.MRX_ARTICLE_KEYWORD = 'Winkler CAD mineral appraisal owner proration';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-appraisal-lease-level-full-value-and-owner-proration';
process.env.MRX_INLINE_FILENAME = 'winkler-cad-mineral-appraisal-owner-proration';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Winkler CAD 2025-2026',
  'Mineral Appraisal:',
  'Lease-Level Full Value and',
  'Owner Proration',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Winkler CAD mineral appraisal',
  'owner proration',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned dark low three-quarter evidence desk with one blank producing-lease folio branching into two blank interest-type folders and then multiple blank fractional-owner slips, brass connector lines, and an uninterrupted deep navy title field on the left. No people, hands, readable base text, letters, digits, formulas, percentages, currency, values, logos, seals, signatures, government emblems, maps, wells, rigs, graphs, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down proration flow with one blank lease card, two blank interest-type trays, several blank fractional-owner cards, brass arrows, a blank proportional-segment ruler, and a clean upper navy typography band. No oblique desk, people, hands, readable base text, letters, digits, formulas, percentages, currency, values, maps, wells, rigs, graphs, logos, seals, signatures, government emblems, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
