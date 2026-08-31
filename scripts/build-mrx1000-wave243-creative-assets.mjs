#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '243';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-appraisal-january-1-snapshot-later-information';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Appraisal: January 1 Snapshot and Later Information';
process.env.MRX_ARTICLE_KEYWORD = 'Winkler CAD mineral appraisal January 1 snapshot';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-appraisal-january-1-snapshot-and-later-information';
process.env.MRX_INLINE_FILENAME = 'winkler-cad-mineral-appraisal-january-1-snapshot';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Winkler CAD 2025-2026',
  'Mineral Appraisal:',
  'January 1 Snapshot and',
  'Later Information',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Winkler CAD mineral appraisal',
  'January 1 snapshot',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned dark low three-quarter appraisal evidence desk with a blank date-anchor tile, archival mineral-interest folder, report folio, brass divider, two blank document stages, and uninterrupted deep navy title field on the left. No people, hands, readable base text, letters, digits, dates, filenames, property details, maps, wells, rigs, money, graphs, values, logos, seals, signatures, government emblems, conclusions, approval marks, clocks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down evidence-timing matrix with a blank central date-anchor tile inside a brass boundary ring, unlabeled later-record cards outside the ring, a magnifying loupe, an archival source slip, and a clean upper navy typography band. No oblique desk, people, hands, readable base text, letters, digits, dates, filenames, property details, maps, wells, rigs, money, clocks, graphs, values, logos, seals, signatures, government emblems, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
