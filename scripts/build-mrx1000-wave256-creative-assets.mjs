#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '256';
process.env.MRX_ARTICLE_SLUG =
  'does-a-texas-rrc-drilling-permit-prove-your-lease-covers-a-well';
process.env.MRX_ARTICLE_TITLE =
  'Does a Texas RRC Drilling Permit Prove Your Lease Covers a Well?';
process.env.MRX_ARTICLE_KEYWORD = 'Texas drilling permit versus mineral lease';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'texas-drilling-permit-versus-mineral-lease';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave256-creative-sources/texas-permit-private-lease-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave256-creative-sources/texas-permit-private-lease-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Does a Texas RRC',
  'Drilling Permit Prove',
  'Your Lease Covers',
  'a Well?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas drilling permit',
  'versus mineral lease',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '34';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free dark editorial still life: separate generic drilling-permit and mineral-lease folders, a fictional blank wellbore sketch, objects on the left and navy negative space on the right. No official seals, readable text, numbers, owner details, or title conclusion.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free strict-overhead light editorial scene: generic permit/plat packet and private lease/deed packet separated by a blank comparison worksheet, leaving a clear bottom caption zone. No official seals, readable text, numbers, owner details, or title conclusion.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
