#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '228';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-district-code-conversion-file-values-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC District Code Conversion: Why File Values 07-14 Need a Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Texas RRC district code conversion';
process.env.MRX_HERO_FILENAME =
  'texas-rrc-district-code-conversion-why-file-values-07-14-need-a-crosswalk';
process.env.MRX_INLINE_FILENAME = 'texas-rrc-district-code-conversion';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas RRC District',
  'Code Conversion:',
  'Why File Values 07-14',
  'Need a Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas RRC district',
  'code conversion',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free eye-level dark data-quality studio with a transparent brass-and-teal alignment gate, separate blank raw and translated token rails, an abstract Texas silhouette, and uninterrupted navy title field on the left. No people, hands, readable base text, letters, numbers, arrows, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead warm pale-stone audit board with two long parallel blank token rails, vertical provenance dividers, a transparent checksum window, a blank archive envelope, an unmarked precision square, and a clean lower navy typography band. No studio perspective, translation machine, people, hands, readable base text, letters, numbers, arrows, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
