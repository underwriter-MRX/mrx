#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '231';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2026-mineral-data-files-2260-byte-txt-records-nested-csv-header';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2026 Mineral Data Files: 2,260-Byte TXT Records and a Nested CSV Header';
process.env.MRX_ARTICLE_KEYWORD = 'Upton CAD 2026 mineral data files';
process.env.MRX_HERO_FILENAME =
  'upton-cad-2026-mineral-data-files-2-260-byte-txt-records-and-a-nested-csv-header';
process.env.MRX_INLINE_FILENAME = 'upton-cad-2026-mineral-data-files';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Upton CAD 2026',
  'Mineral Data Files:',
  '2,260-Byte TXT Records and',
  'a Nested CSV Header',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Upton CAD 2026',
  'mineral data files',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free high-angle studio view of a dark navy archival ZIP case with exactly seven blank file tabs and a long ivory fixed-width record ribbon, plus an uninterrupted deep-navy title field on the left. The scene represents archive and format identity only. No readable base text, letters, numbers, people, maps, charts, logos, seals, official forms, property data, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free low side-angle macro view of one translucent data ribbon passing through a copper measurement gate with separated physical bands, a blank amber exception tile, an abrupt terminal edge, and a clean lower navy typography band. The scene represents parser-stop inspection only. No archive case, folders, seven tabs, readable base text, letters, numbers, people, maps, charts, logos, seals, official forms, property data, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
