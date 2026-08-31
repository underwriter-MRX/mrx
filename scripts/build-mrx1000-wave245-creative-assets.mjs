#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '245';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-why-cost-is-not-used-market-is-rare';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: Why Cost Is Not Used and Market Is Rare';
process.env.MRX_ARTICLE_KEYWORD =
  'Winkler CAD mineral appraisal cost and market approaches';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-appraisal-why-cost-is-not-used-and-market-is-rare';
process.env.MRX_INLINE_FILENAME =
  'winkler-cad-mineral-appraisal-cost-and-market-approaches';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Winkler CAD 2025-2026',
  'Mineral Appraisal:',
  'Why Cost Is Not Used and',
  'Market Is Rare',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Winkler CAD mineral appraisal',
  'cost and market approaches',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned dark low three-quarter method-selection desk with three abstract map pathways: a cost lane stopped by a closed boundary, a market-evidence lane narrowed through a small gate, an open predominant income lane, and an uninterrupted deep navy title field on the left. No people, hands, readable base text, letters, digits, formulas, percentages, currency, values, charts, graphs, logos, seals, signatures, government emblems, conclusions, approval marks, oil-derrick silhouettes, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down evidence board with three separated abstract method columns, a cost boundary tile, a narrow market-evidence aperture, a broad predominant income route, a blank calculator-like object, a Texas tract-map fragment, and a clean upper navy typography band. No oblique desk, people, hands, readable base text, letters, digits, formulas, percentages, currency, values, charts, graphs, logos, seals, signatures, government emblems, conclusions, approval marks, oil-derrick silhouettes, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
