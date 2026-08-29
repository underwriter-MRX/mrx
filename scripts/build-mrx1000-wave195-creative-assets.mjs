#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '195';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2025-2026-reappraisal-plan-pages-22-23-activity-schedule-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2025-2026 Reappraisal Plan: Pages 22-23 Activity Schedule Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Karnes CAD 2025-2026 reappraisal schedule';
process.env.MRX_HERO_FILENAME =
  'karnes-cad-2025-2026-reappraisal-plan-pages-22-23-activity-schedule-crosswalk';
process.env.MRX_INLINE_FILENAME = 'karnes-cad-2025-2026-reappraisal-schedule';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Karnes CAD 2025-2026',
  'Reappraisal Plan:',
  'Pages 22-23 Activity',
  'Schedule Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Karnes CAD 2025-2026',
  'reappraisal schedule',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter evidence scene with an upright cream reappraisal-plan folio, two completely blank schedule pages, six brass time-band tabs, two navy page markers, pale Texas limestone, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, deadlines, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead schedule workspace with six separate blank cream time-band cards in two rows, restrained brass dividers, two navy page markers, a magnifying glass, a brass pencil, pale limestone, and an uninterrupted lower navy keyword band. No upright book, front-facing perspective, readable base text, letters, numbers, dates, deadlines, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
