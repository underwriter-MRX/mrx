#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '170';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-resolution-2024-01-reappraisal-plan-source-record';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD Resolution 2024-01 Reappraisal Plan Source Record';
process.env.MRX_ARTICLE_KEYWORD = 'DeWitt CAD Resolution 2024-01';
process.env.MRX_HERO_FILENAME = 'dewitt-cad-resolution-2024-01-reappraisal-plan-source-record';
process.env.MRX_INLINE_FILENAME = 'dewitt-cad-resolution-2024-01';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'DeWitt CAD',
  'Resolution 2024-01',
  'Reappraisal Plan',
  'Source Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['DeWitt CAD', 'Resolution 2024-01']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique archival source-control station with one closed blank navy reappraisal-plan booklet in an acrylic cradle, one detached blank cream resolution card, one slim neutral divider, and one brass locator on the right of uninterrupted navy title space. No person, hand, seal, logo, government mark, signature, handwriting, readable base text, number, date, chart, map, form, UI, money, gavel, flag, legal conclusion, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead four-stage source chain with four separate blank geometric publisher, plan-container, resolution-locator, and notice tiles linked by teal cord to an empty transparent archival sleeve above an uninterrupted lower navy keyword band. No oblique perspective, room, display stand, person, hand, seal, logo, government mark, signature, handwriting, readable base text, number, date, chart, map, form, UI, money, gavel, flag, legal conclusion, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
