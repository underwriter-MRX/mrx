#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '171';
process.env.MRX_ARTICLE_SLUG = 'dewitt-cad-2025-certified-mineral-appraisal-roll-download-locator';
process.env.MRX_ARTICLE_TITLE = 'DeWitt CAD 2025 Certified Mineral Appraisal Roll Download Locator';
process.env.MRX_ARTICLE_KEYWORD = 'DeWitt CAD 2025 certified mineral appraisal roll';
process.env.MRX_HERO_FILENAME = 'dewitt-cad-2025-certified-mineral-appraisal-roll-download-locator';
process.env.MRX_INLINE_FILENAME = 'dewitt-cad-2025-certified-mineral-appraisal-roll';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2025',
  'Certified Mineral',
  'Appraisal Roll',
  'Download Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'DeWitt CAD 2025 certified',
  'mineral appraisal roll',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on navy archive-locker wall with one open empty compartment, a sealed translucent zipper archive pouch, a blank cream locator tab, subtle limestone surface, and uninterrupted left navy title space. No oblique folio, resolution card, tile chain, person, hand, readable base text, letter, number, date, name, address, account data, property data, map, chart, browser UI, screenshot, seal, government mark, logo, badge, money, gavel, flag, conclusion, outcome, fake document text, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead pale limestone source-routing flat lay with one blank navy publisher tile, one brass link tab, one sealed empty translucent zipper sleeve, one separate blank retrieval-log card, and muted teal ribbon above an uninterrupted lower keyword band. No wall locker, door, open compartment, oblique perspective, person, hand, readable base text, letter, number, date, name, address, account data, property data, map, chart, browser UI, screenshot, seal, government mark, logo, badge, money, gavel, flag, conclusion, outcome, fake document text, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
