#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '218';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-industrial-appraisal-limits-title-inspection-and-sketches';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD Industrial Appraisal Limits: Title, Inspection, and Sketches';
process.env.MRX_ARTICLE_KEYWORD = 'Pecos CAD industrial appraisal assumptions';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-industrial-appraisal-limits-title-inspection-and-sketches';
process.env.MRX_INLINE_FILENAME = 'pecos-cad-industrial-appraisal-assumptions';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Pecos CAD Industrial',
  'Appraisal Limits: Title,',
  'Inspection, and Sketches',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Pecos CAD industrial',
  'appraisal assumptions',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique West Texas industrial-property evidence scene with a processing facility outside a fence, blank clipboard, abstract unlabeled sketch, calipers, and uninterrupted left title field. No camera, people, hands, logos, seals, agency marks, readable words, letters, numbers, owner or account records, money, values, tax amounts, title conclusion, inspection conclusion, survey or engineering conclusion, hidden-condition conclusion, approval mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead archival evidence workspace with an unmarked title folder, blank inspection-photo sleeve, abstract folded property sketch, sealed soil-core container, structural sample, boundary stencil, magnifying loupe, and uninterrupted lower keyword band. No horizon, facility view, perspective hero scene, camera, calipers, people, hands, logos, seals, agency marks, readable words, letters, numbers, owner or account records, money, values, tax amounts, legal conclusion, approval mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
