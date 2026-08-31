#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '240';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2025-2026-reappraisal-plan-two-mineral-sections-page-ranges';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2025-2026 Reappraisal Plan: Two Mineral Sections and Their Page Ranges';
process.env.MRX_ARTICLE_KEYWORD = 'Ward CAD reappraisal plan mineral sections';
process.env.MRX_HERO_FILENAME =
  'ward-cad-2025-2026-reappraisal-plan-two-mineral-sections-and-their-page-ranges';
process.env.MRX_INLINE_FILENAME = 'ward-cad-reappraisal-plan-mineral-sections';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ward CAD 2025-2026',
  'Reappraisal Plan:',
  'Two Mineral Sections and',
  'Their Page Ranges',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ward CAD reappraisal plan',
  'mineral sections',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide dark oblique source-navigation scene with one substantial appraisal-plan binder opened to two separated tabbed section groups, a restrained visual handoff path, and an uninterrupted navy title field on the left. No readable base text, letters, numbers, page numbers, logos, seals, signatures, official marks, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down source crosswalk with two spatially separate document-section stacks, a copper handoff path, pale blue evidence geometry, and a clean upper navy typography band. No oblique binder, rings, dark desk, people, hands, readable base text, letters, numbers, page numbers, logos, seals, signatures, official marks, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
