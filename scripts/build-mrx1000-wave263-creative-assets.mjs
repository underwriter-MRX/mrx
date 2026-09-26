#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '263';
process.env.MRX_ARTICLE_SLUG =
  'what-does-ri-mean-on-a-texas-mineral-appraisal-record';
process.env.MRX_ARTICLE_TITLE =
  'What Does RI Mean on a Texas Mineral Appraisal Record?';
process.env.MRX_ARTICLE_KEYWORD = 'Texas mineral appraisal RI code';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'texas-mineral-appraisal-ri-code';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave263-creative-qa/what-does-ri-mean-on-a-texas-mineral-appraisal-record/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave263-creative-qa/what-does-ri-mean-on-a-texas-mineral-appraisal-record/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'What Does RI Mean',
  'on a Texas Mineral',
  'Appraisal Record?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas mineral appraisal',
  'RI code',
]);
process.env.MRX_HERO_BAND_POSITION = 'left';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '43';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free Texas mineral-record research desk, blank paper under a magnifying glass, warm land through window, left-side dark negative space. No readable data, words, numbers, logos, seals or real document.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free overhead field-comparison scene, three blank cards separated by copper lines, dark lower caption band. No real record, codes, values, words, numbers, logos or seals.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
