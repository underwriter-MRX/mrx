#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '209';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-mineral-property-three-approaches-sufficient-data-condition';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD Mineral Property Page: Three Approaches and the Sufficient-Data Condition';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD mineral property appraisal approaches';
process.env.MRX_HERO_FILENAME =
  'midland-cad-mineral-property-page-three-approaches-and-the-sufficient-data-condition';
process.env.MRX_INLINE_FILENAME = 'midland-cad-mineral-property-appraisal-approaches';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD Mineral',
  'Property Page: Three',
  'Approaches and the',
  'Sufficient-Data Condition',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Midland CAD mineral property',
  'appraisal approaches',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique dark editorial evidence scene with three materially different blank appraisal stations, a translucent sufficient-data gate, a closed navy source folder, polished stone and metal evidence objects, restrained teal and brass routes, and an uninterrupted left title field. No readable text, letters, numbers, pseudo-writing, people, hands, owner or property records, maps, deeds, notices, seals, logos, values, money, formulas, charts, calculated results, promises, conclusions, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down bright evidence-routing scene with three separate circular evidence plates, a central translucent sieve representing a sufficient-data condition, a blank account card, teal connectors, limestone texture, and an uninterrupted lower navy keyword band. No dark low-oblique office scene, readable text, letters, numbers, pseudo-writing, people, owner or property records, maps, deeds, notices, seals, logos, values, money, formulas, charts, calculated results, promises, conclusions, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
