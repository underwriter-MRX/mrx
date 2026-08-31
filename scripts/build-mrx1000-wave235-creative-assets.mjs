#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '235';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2025-2026-plan-date-control-register-july-2024-print-january-1-snapshot-2020-2022-appendix';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2025-2026 Plan Date-Control Register: July 2024 Print, January 1 Snapshot, and a 2020-2022 Appendix';
process.env.MRX_ARTICLE_KEYWORD = 'Upton CAD plan date-control register';
process.env.MRX_HERO_FILENAME =
  'upton-cad-2025-2026-plan-date-control-register-july-2024-print-january-1-snapshot-and-a-2020-2022-appendix';
process.env.MRX_INLINE_FILENAME = 'upton-cad-plan-date-control-register';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Upton CAD 2025-2026',
  'Plan Date-Control',
  'Register: July 2024 Print,',
  'January 1 Snapshot, and a',
  '2020-2022 Appendix',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Upton CAD plan', 'date-control register']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide low-oblique dark archival research table with a navy plan binder, multiple blank paper layers, a translucent older-appendix sleeve, four blank evidence tabs, brass compass, geological core sample, and distant West Texas light. Objects remain on the right beside an uninterrupted navy title field. No readable base text, letters, numbers, dates, people, hands, logos, seals, official forms, property identifiers, findings, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down high-key limestone evidence register with four separate blank ivory, blue, sage, and rust cards around a brass hub, thin unlabelled connectors, an archival envelope, and a geological core sample above a navy typography band. No low-oblique desk, window, open binder, readable base text, letters, numbers, dates, people, hands, logos, seals, official forms, property identifiers, findings, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
