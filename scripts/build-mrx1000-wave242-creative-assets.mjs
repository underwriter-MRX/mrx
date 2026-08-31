#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '242';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-reports-recipients-vs-intended-users';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Reports: Recipients vs. Intended Users';
process.env.MRX_ARTICLE_KEYWORD = 'Winkler CAD mineral report intended users';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-reports-recipients-vs-intended-users';
process.env.MRX_INLINE_FILENAME = 'winkler-cad-mineral-report-intended-users';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Winkler CAD 2025-2026',
  'Mineral Reports:',
  'Recipients vs.',
  'Intended Users',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Winkler CAD mineral report',
  'intended users',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned wide low three-quarter formal-report folio scene with several neutral recipient cards, one separate brass-edged designation tab, and an uninterrupted deep navy title field on the left. No people, hands, readable base text, letters, numbers, filenames, property details, wells, rigs, money, logos, seals, signatures, government emblems, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down recipient-versus-intended-user routing matrix with a central report card, outer recipient tokens, one separately bounded designation tile, an abstract open-records magnifier, a scope divider, and a clean upper navy typography band. No folio perspective, people, hands, readable base text, letters, numbers, filenames, property details, wells, rigs, money, logos, seals, signatures, government emblems, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
