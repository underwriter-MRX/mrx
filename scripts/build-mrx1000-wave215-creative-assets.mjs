#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '215';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD 2025-2026 Reappraisal Plan: Category G Parcel Counts by ISD';
process.env.MRX_ARTICLE_KEYWORD = 'Pecos CAD Category G parcel counts';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-2025-2026-reappraisal-plan-category-g-parcel-counts-by-isd';
process.env.MRX_INLINE_FILENAME = 'pecos-cad-category-g-parcel-counts';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Pecos CAD 2025-2026',
  'Reappraisal Plan:',
  'Category G Parcel Counts',
  'by ISD',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Pecos CAD Category G', 'parcel counts']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free cinematic low-three-quarter Pecos desert survey diorama with two separate school-district map slabs, dark navy archival plan folio, mineral core sample, survey pins, subtle geological contours, and uninterrupted left title field. No readable text, letters, numbers, dates, pseudo-writing, logos, seals, watermarks, official affiliation, owner or account records, money, values, charts, totals, rankings, deadlines, completion claims, or results.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free bright strict-overhead evidence workspace with two separate navy-outlined trays of blank mineral-property tiles, a blank vertical divider, compass, school-district boundary ribbons, mineral core slice, source envelope, and uninterrupted lower keyword band. No terrain scene, low-angle composition, readable text, letters, numbers, dates, pseudo-writing, logos, seals, watermarks, official affiliation, owner or account data, money, values, charts, totals, rankings, deadlines, completion claims, or results.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
