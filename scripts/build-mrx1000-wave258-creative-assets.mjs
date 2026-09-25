#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '258';
process.env.MRX_ARTICLE_SLUG =
  'can-pennsylvania-dep-production-data-verify-my-royalty-check';
process.env.MRX_ARTICLE_TITLE =
  'Can Pennsylvania DEP Production Data Verify My Royalty Check?';
process.env.MRX_ARTICLE_KEYWORD = 'Pennsylvania DEP production report';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'pennsylvania-dep-production-report';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave258-creative-sources/pennsylvania-dep-royalty-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave258-creative-sources/pennsylvania-dep-royalty-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Can Pennsylvania DEP',
  'Production Data Verify',
  'My Royalty Check?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Pennsylvania DEP',
  'production report',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '39';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free photographic Pennsylvania foothill research desk: blank tabular well-production export and separate closed envelope at left, distant gas-well pad beyond the window, dark right-side negative space. No readable data, numbers, logos, seals, ownership or payment conclusion.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free overhead source-comparison still life: separate blank spreadsheet-style export and private statement stack with magnifying glass between them, pale slate desk, empty lower caption zone. No readable data, numbers, logos, seals, ownership or payment conclusion.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
