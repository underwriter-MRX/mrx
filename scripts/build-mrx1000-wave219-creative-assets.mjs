#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '219';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-pipeline-appraisal-models-rcnld-unit-value-and-land';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD Pipeline Appraisal Models: RCNLD, Unit Value, and Land';
process.env.MRX_ARTICLE_KEYWORD = 'Pecos CAD pipeline appraisal models';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-pipeline-appraisal-models-rcnld-unit-value-and-land';
process.env.MRX_INLINE_FILENAME = 'pecos-cad-pipeline-appraisal-models';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Pecos CAD Pipeline',
  'Appraisal Models: RCNLD,',
  'Unit Value, and Land',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Pecos CAD pipeline',
  'appraisal models',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free elevated oblique West Texas pipeline operating-property scene with a long pipeline corridor, compressor or pump station, blank three-panel clipboard, caliper, rolled tract map, and uninterrupted left title field. No people, logos, seals, readable words, letters, numbers, owner or account data, tax values, pipeline ownership, easement conclusion, appraisal result, approval mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pipeline-model evidence table with a pipe cross-section, caliper, blank network diagram, unlabeled land-separation overlay, blank balance-sheet grid, depreciation curve without labels, and uninterrupted lower keyword band. No landscape, perspective hero scene, people, logos, seals, readable words, letters, numbers, owner or account data, tax values, model result, legal conclusion, approval mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
