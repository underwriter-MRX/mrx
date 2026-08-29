#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '207';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-2025-26-reappraisal-plan-mineral-work-separate-p-and-a-plan';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD 2025-26 Reappraisal Plan: Mineral Work and the Separate P&A Plan';
process.env.MRX_ARTICLE_KEYWORD = 'Martin CAD separate mineral reappraisal plan';
process.env.MRX_HERO_FILENAME =
  'martin-cad-2025-26-reappraisal-plan-mineral-work-and-the-separate-p-and-a-plan';
process.env.MRX_INLINE_FILENAME = 'martin-cad-separate-mineral-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Martin CAD 2025-26',
  'Reappraisal Plan:',
  'Mineral Work and the',
  'Separate P&amp;A Plan',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Martin CAD separate mineral',
  'reappraisal plan',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique dark editorial source-routing scene with one broad blank cream plan volume, a separate closed navy contractor-plan portfolio, a raised brass route between them, a translucent boundary pane, a limestone specimen, and an uninterrupted left title field. No readable text, letters, numbers, pseudo-writing, dates, forms, signatures, seals, logos, maps, property data, people, hands, money, charts, offers, prices, government symbols, conclusions, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down light source-map scene with one blank square source card, a separate cobalt circular plan token, a thin brass routing line, three blank evidence tabs, a clear loupe, a slim stone marker, pale limestone, and an uninterrupted lower navy keyword band. No low-oblique portfolios, open books, readable text, letters, numbers, pseudo-writing, dates, forms, signatures, seals, logos, maps, property data, people, hands, money, charts, offers, prices, government symbols, conclusions, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
