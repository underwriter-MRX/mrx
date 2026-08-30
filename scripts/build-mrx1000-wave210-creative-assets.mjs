#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '210';
process.env.MRX_ARTICLE_SLUG = 'midland-cad-2025-report-419660-mineral-interest-accounts-page-25';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2025 Report: 419,660 Mineral Interest Accounts on PDF Page 25';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD 419,660 mineral interest accounts';
process.env.MRX_HERO_FILENAME =
  'midland-cad-2025-report-419-660-mineral-interest-accounts-on-pdf-page-25';
process.env.MRX_INLINE_FILENAME = 'midland-cad-419-660-mineral-interest-accounts';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD 2025 Report:',
  '419,660 Mineral Interest',
  'Accounts on PDF Page 25',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Midland CAD 419,660',
  'mineral interest accounts',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free dark low-oblique archive-table scene with a blank navy annual-report folio, one physical-page locator frame, many neutral account tokens, limestone accents, restrained teal routing, and an uninterrupted left title field. No readable text, letters, numbers, pseudo-writing, people, hands, owner or property records, account data, maps, deeds, notices, seals, logos, values, money, formulas, charts, calculated results, promises, conclusions, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down bright limestone evidence-routing scene with one blank report-page tile, a halo of neutral account markers, three visibly separate receiving trays blocked by solid stop-bars, and an uninterrupted lower navy keyword band. No dark low-oblique archive scene, folio stack, hovering frame, readable text, letters, numbers, pseudo-writing, people, owner or property records, account data, maps, deeds, notices, seals, logos, values, money, formulas, charts, calculated results, promises, conclusions, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
