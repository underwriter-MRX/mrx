#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '183';
process.env.MRX_ARTICLE_SLUG = 'glasscock-cad-2025-certified-mineral-roll-zip-link-locator';
process.env.MRX_ARTICLE_TITLE = 'Glasscock CAD 2025 Certified Mineral Roll ZIP Link Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Glasscock CAD 2025 certified mineral roll';
process.env.MRX_HERO_FILENAME = 'glasscock-cad-2025-certified-mineral-roll-zip-link-locator';
process.env.MRX_INLINE_FILENAME = 'glasscock-cad-2025-certified-mineral-roll';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Glasscock CAD 2025',
  'Certified Mineral Roll',
  'ZIP Link Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Glasscock CAD 2025',
  'certified mineral roll',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free cinematic three-quarter source-route scene with an uninterrupted deep-navy left title field and, on the right, one brass route marker connected to a closed walnut archive case and one blank cream ZIP cartridge. No readable base text, government mark, person, hand, map, property record, personal data, money, tax, value, offer, result, UI, chart, logo, seal, signature, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead page-to-link recovery map with one blank source-page card, one abstract link token, a dashed route that separates a neutral paused sealed-ZIP endpoint from a return-to-source-page path, and an uninterrupted lower navy keyword band. No perspective archive case, route pin, readable base text, government mark, person, hand, map, property record, personal data, money, tax, value, offer, result, UI, chart, logo, seal, signature, checkmark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
