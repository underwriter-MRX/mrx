#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '206';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-2025-26-miup-plan-mineral-interests-not-minerals-in-place';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD 2025-26 MIUP Plan: Mineral Interests, Not Minerals in Place';
process.env.MRX_ARTICLE_KEYWORD = 'Martin CAD mineral interests not minerals in place';
process.env.MRX_HERO_FILENAME =
  'martin-cad-2025-26-miup-plan-mineral-interests-not-minerals-in-place';
process.env.MRX_INLINE_FILENAME = 'martin-cad-mineral-interests-not-minerals-in-place';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Martin CAD 2025-26',
  'MIUP Plan:',
  'Mineral Interests, Not',
  'Minerals in Place',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Martin CAD mineral interests',
  'not minerals in place',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique editorial studio scene with a translucent interest frame, thin brass boundary, layered stone block, deep-navy backdrop, and uninterrupted left title field. No readable source text, letters, numbers, pseudo-writing, dates, forms, signatures, seals, logos, maps, property records, people, money, rigs, legal symbols, conclusions, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down evidence scene with one clear lens over a blank navy card, a small layered stone slice, three unlabeled brass evidence tabs, one gloved fingertip, warm ivory background, and a lower keyword band. No low-oblique floating frame over a large rock block, readable source text, letters, numbers, pseudo-writing, dates, forms, signatures, seals, logos, maps, property records, money, rigs, legal symbols, conclusions, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
