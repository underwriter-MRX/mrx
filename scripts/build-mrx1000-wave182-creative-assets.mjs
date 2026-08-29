#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '182';
process.env.MRX_ARTICLE_SLUG =
  'glasscock-cad-mineral-account-appraisal-responsibility-source-locator';
process.env.MRX_ARTICLE_TITLE =
  'Glasscock CAD Mineral Account Appraisal Responsibility Source Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Glasscock CAD mineral account appraiser';
process.env.MRX_HERO_FILENAME =
  'glasscock-cad-mineral-account-appraisal-responsibility-source-locator';
process.env.MRX_INLINE_FILENAME = 'glasscock-cad-mineral-account-appraiser';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Glasscock CAD',
  'Mineral Account',
  'Appraisal Responsibility',
  'Source Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Glasscock CAD mineral', 'account appraiser']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free side-lit three-quarter official-source-locator scene with one upright translucent blank page marker in a brass locator ring, one navy-and-walnut tray holding three separate abstract mineral, utility, and industrial tokens, one physically separate cream-and-walnut tray holding two abstract real-estate and personal-property tokens, limestone accents, and uninterrupted deep-navy left title space. No overhead composition, branching path, government page, contract, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, tax amount, price, value, offer, money, chart, UI, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-locator evidence scene with one blank cream publisher-page plate, one central clear-glass locator disc, one brass branching path, a left zone of three separate abstract mineral, utility, and industrial tokens, a right zone of two separate abstract real-estate and personal-property tokens, limestone surface, navy and walnut accents, and an uninterrupted lower navy keyword band. No three-quarter perspective, upright marker, trays, government page, contract, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, tax amount, price, value, offer, money, chart axes, UI, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
