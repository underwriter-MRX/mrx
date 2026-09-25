#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '262';
process.env.MRX_ARTICLE_SLUG =
  'does-surface-mineral-owner-same-on-a-colorado-well-card-prove-title';
process.env.MRX_ARTICLE_TITLE =
  'Does “Surface Mineral Owner Same” on a Colorado Well Card Prove Title?';
process.env.MRX_ARTICLE_KEYWORD = 'Colorado COGIS owner-same field';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'colorado-cogis-owner-same-field';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave262-creative-qa/does-surface-mineral-owner-same-on-a-colorado-well-card-prove-title/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave262-creative-qa/does-surface-mineral-owner-same-on-a-colorado-well-card-prove-title/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Does “Surface',
  'Mineral Owner Same”',
  'on a Colorado Well',
  'Card Prove Title?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Colorado COGIS',
  'owner-same field',
]);
process.env.MRX_HERO_BAND_POSITION = 'left';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '39';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free editorial Colorado mineral-record research desk with blank papers, a magnifying glass, mountain view, and left-side negative space. No readable data, names, numbers, logos, seals, or real instrument.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free overhead record-comparison scene with three blank index cards, a magnifying glass, and a dark lower caption field. No agency UI, values, words, numbers, logos, seals, or real instrument.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
