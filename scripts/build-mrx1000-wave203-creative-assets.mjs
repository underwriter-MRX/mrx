#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '203';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-year-by-year-appraisals-pdf-selection-page-file-boundary';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Year-by-Year Appraisals PDF: Selection Page and File Boundary';
process.env.MRX_ARTICLE_KEYWORD = 'Loving CAD 2026 year-by-year appraisals PDF';
process.env.MRX_HERO_FILENAME =
  'loving-cad-2026-year-by-year-appraisals-pdf-selection-page-and-file-boundary';
process.env.MRX_INLINE_FILENAME = 'loving-cad-2026-year-by-year-appraisals-pdf';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Loving CAD 2026',
  'Year-by-Year Appraisals PDF:',
  'Selection Page and',
  'File Boundary',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Loving CAD 2026 year-by-year',
  'appraisals PDF',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique dark navy archival report volume with a thick blank cream page block, one separate blank selection-control card with large empty geometric boxes, an amber file tab, charcoal stone, studio light, and an uninterrupted navy left title field. No readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down privacy-boundary scene with one blank cream selection sheet and three large empty boxes on the left, one deep-navy vertical divider with an amber edge in the center, a staggered blank report-page stack under a dark cover on the right, pale stone, and an uninterrupted lower navy keyword band. No oblique book, readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
