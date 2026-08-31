#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '227';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-district-county-field-codes-source-label-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC District, County, and Field Codes: A Source-Label Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Texas RRC district county field codes';
process.env.MRX_HERO_FILENAME =
  'texas-rrc-district-county-and-field-codes-a-source-label-crosswalk';
process.env.MRX_INLINE_FILENAME = 'texas-rrc-district-county-field-codes';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas RRC District,',
  'County, and Field Codes:',
  'A Source-Label',
  'Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas RRC district',
  'county field codes',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-three-quarter bright records archive with three separate unlabeled index trays, an abstract Texas-shaped grid, a magnifying glass over an abstract field diagram, and uninterrupted navy title field on the left. No people, hands, readable base text, letters, numbers, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead pale limestone source-label crosswalk with five separate blank geometric code cards, divider channels, a transparent ruler, unmarked brass caliper, layered abstract Texas cutouts, one gloved fingertip, and a clean lower navy typography band. No room perspective, archive trays, readable base text, letters, numbers, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
