#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '223';
process.env.MRX_ARTICLE_SLUG = 'reeves-cad-2024-ratio-study-66-category-g-ratios';
process.env.MRX_ARTICLE_TITLE = 'Reeves CAD 2024 Ratio Study: 66 Category G Ratios';
process.env.MRX_ARTICLE_KEYWORD = 'Reeves CAD 2024 Category G ratio study';
process.env.MRX_HERO_FILENAME = 'reeves-cad-2024-ratio-study-66-category-g-ratios';
process.env.MRX_INLINE_FILENAME = 'reeves-cad-2024-category-g-ratio-study';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Reeves CAD 2024',
  'Ratio Study:',
  '66 Category G',
  'Ratios',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Reeves CAD 2024',
  'Category G ratio study',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on dark archival ratio-study scene with an illuminated unlabeled distribution board on the right, brass category tab, field notebook, and uninterrupted navy title field on the left. No people, hands, logos, seals, readable base text, numbers, official forms, fabricated labels, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead bright evidence-grid scene with a blank seven-column sheet, neutral counters, ruler, magnifier, red boundary card, separate closed private-property folder, and clean lower typography band. No dark archival board, people, hands, logos, seals, readable base text, numbers, official forms, fabricated labels, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
