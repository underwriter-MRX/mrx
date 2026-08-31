#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '234';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2025-2026-mineral-appraisal-review-chain-sources-calibration-pvs';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2025-2026 Mineral Appraisal Review Chain: Sources, Calibration, and PVS';
process.env.MRX_ARTICLE_KEYWORD = 'Upton CAD mineral appraisal review chain';
process.env.MRX_HERO_FILENAME =
  'upton-cad-2025-2026-mineral-appraisal-review-chain-sources-calibration-and-pvs';
process.env.MRX_INLINE_FILENAME = 'upton-cad-mineral-appraisal-review-chain';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Upton CAD 2025-2026',
  'Mineral Appraisal',
  'Review Chain: Sources,',
  'Calibration, and PVS',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Upton CAD mineral',
  'appraisal review chain',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide low-oblique West Texas evidence workspace with an abstract tract map, separate source binder, calibration card, review checklist, and state-study card concentrated to the right of an uninterrupted navy title field. No readable base text, letters, numbers, people, hands, logos, seals, official forms, personal data, account identifiers, tax amounts, property values, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down light-sandstone review-chain scene with four square source, calibration, individual-review, and state-study cards around a neutral hub, plus an archival folder and geological core sample above a navy typography band. No low-oblique desk, wall map, window, standing binder, readable base text, letters, numbers, people, hands, logos, seals, official forms, personal data, account identifiers, tax amounts, property values, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
