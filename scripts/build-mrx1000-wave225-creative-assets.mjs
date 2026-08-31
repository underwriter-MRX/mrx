#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '225';
process.env.MRX_ARTICLE_SLUG = 'tax-year-production-month-and-download-date-texas-mineral-records';
process.env.MRX_ARTICLE_TITLE =
  'Tax Year, Production Month, and Download Date in Texas Mineral Records';
process.env.MRX_ARTICLE_KEYWORD = 'Texas mineral record dates';
process.env.MRX_HERO_FILENAME =
  'tax-year-production-month-and-download-date-in-texas-mineral-records';
process.env.MRX_INLINE_FILENAME = 'texas-mineral-record-dates';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Tax Year, Production Month,',
  'and Download Date in',
  'Texas Mineral Records',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Texas mineral', 'record dates']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-three-quarter dark archival records room with three separate blank document trays, an unnumbered clock, archive box, Texas-shaped paperweight, and uninterrupted navy title field on the left. No people, hands, readable base text, letters, numbers, dates, logos, seals, official forms, signatures, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead bright flat-lay workspace with three separate pale blue, rust, and sage evidence zones, blank index cards, an unlabeled monthly grid, oil-well token, download-arrow token, Texas-shaped paperweight, and clean lower typography band. No dark side-view archive composition, people, hands, readable base text, letters, numbers, dates, logos, seals, official forms, signatures, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
