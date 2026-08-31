#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '230';
process.env.MRX_ARTICLE_SLUG =
  'texas-rrc-field-rule-tables-special-standard-fallbacks-rescission-dates';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC Field Rule Tables: Special Rules, Standard Fallbacks, and Rescission Dates';
process.env.MRX_ARTICLE_KEYWORD = 'Texas RRC field rule tables';
process.env.MRX_HERO_FILENAME =
  'texas-rrc-field-rule-tables-special-rules-standard-fallbacks-and-rescission-dates';
process.env.MRX_INLINE_FILENAME = 'texas-rrc-field-rule-tables';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas RRC Field Rule Tables:',
  'Special Rules,',
  'Standard Fallbacks, and',
  'Rescission Dates',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Texas RRC field', 'rule tables']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide frontal architectural cutaway of a mechanical decision switchboard with three luminous copper pathways, distinct gates, one date-reset dial, and an uninterrupted deep-navy title field on the left. No people, hands, readable base text, letters, numbers, charts, maps, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free low side-angle museum display with three blank transparent glass data strata, one isolated blank copper rule card, two empty fallback slots, a small reversible date marker, and a clean lower navy typography band. No frontal switchboard, pipes, gates, people, hands, readable base text, letters, numbers, charts, maps, diagrams, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
