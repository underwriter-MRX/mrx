#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '164';
process.env.MRX_ARTICLE_SLUG =
  'culberson-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_ARTICLE_TITLE =
  'Culberson CAD 2025-2026 Reappraisal Plan Adoption Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'Culberson CAD 2025-2026 reappraisal plan';
process.env.MRX_HERO_FILENAME =
  'culberson-cad-2025-2026-reappraisal-plan-adoption-source-record';
process.env.MRX_INLINE_FILENAME = 'culberson-cad-2025-2026-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Culberson CAD',
  '2025-2026',
  'Reappraisal Plan',
  'Adoption Source',
  'Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Culberson CAD 2025-2026',
  'reappraisal plan',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique closed cobalt bound-plan folio with a closed brass date clasp, exactly two blank adoption tabs, and a subtle abstract page-locator pin on the right of uninterrupted navy title space. No person, real document, readable text, number, signature, name, seal, logo, property, money, claim, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source path with exactly two widely separated blank page tiles, one closed blank brass date token, two abstract locator pins, and a dotted cobalt path above an uninterrupted lower navy keyword band. No folio, cabinet, person, hand, real document, readable text, number, signature, name, seal, logo, property, money, claim, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
