#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '241';
process.env.MRX_ARTICLE_SLUG =
  'winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-taxpayer-records';
process.env.MRX_ARTICLE_TITLE =
  'Winkler CAD 2025-2026 Mineral Data Chain: RRC Files, Operator Inputs, and Taxpayer Records';
process.env.MRX_ARTICLE_KEYWORD = 'Winkler CAD mineral data sources';
process.env.MRX_HERO_FILENAME =
  'winkler-cad-2025-2026-mineral-data-chain-rrc-files-operator-inputs-and-taxpayer-records';
process.env.MRX_INLINE_FILENAME = 'winkler-cad-mineral-data-sources';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Winkler CAD 2025-2026',
  'Mineral Data Chain:',
  'RRC Files, Operator Inputs,',
  'and Taxpayer Records',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Winkler CAD mineral',
  'data sources',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide dark oblique source-chain scene with three abstract input stacks feeding one appraisal-file tray, restrained connector lines, and an uninterrupted navy title field on the left. No readable base text, letters, numbers, filenames, property details, maps, wells, rigs, money, logos, seals, signatures, government emblems, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down source-and-cadence matrix with three abstract source cards, a nonverbal cycle motif, a privacy boundary, one receiving record card, and a clean upper navy typography band. No oblique folio, dark desk, readable base text, letters, numbers, filenames, property details, maps, wells, rigs, money, logos, seals, signatures, government emblems, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
