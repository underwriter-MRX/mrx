#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '266';
process.env.MRX_ARTICLE_SLUG =
  'does-a-texas-rrc-p-4-purchaser-have-to-be-my-royalty-payor';
process.env.MRX_ARTICLE_TITLE =
  'Does a Texas RRC P-4 Purchaser Have to Be My Royalty Payor?';
process.env.MRX_ARTICLE_KEYWORD = 'Texas P-4 purchaser vs royalty payor';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'texas-p-4-purchaser-vs-royalty-payor';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave266-creative-qa/does-a-texas-rrc-p-4-purchaser-have-to-be-my-royalty-payor/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave266-creative-qa/does-a-texas-rrc-p-4-purchaser-have-to-be-my-royalty-payor/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Does a Texas RRC',
  'P-4 Purchaser Have',
  'to Be My Royalty',
  'Payor?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas P-4 purchaser',
  'vs royalty payor',
]);
process.env.MRX_HERO_BAND_POSITION = 'left';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '42';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free wide oblique Texas oilfield research desk, distant pumpjack through right window, separate unmarked folder and plain payment envelope on right, dark navy left negative space; no real records, text, figures, logos, seals or legal/payment claims.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Text-free strict overhead two-lane still life: blank blue archival sleeve with abstract pumpjack symbol on left, separate plain payment envelope and blank-screen calculator on right, magnifier at divider, dark navy bottom negative space; no real forms, text, figures, logos, seals or payment claim.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
