#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '248';
process.env.MRX_ARTICLE_SLUG = 'mineral-rights-offer-vs-letter-of-intent-vs-purchase-agreement';
process.env.MRX_ARTICLE_TITLE = 'Mineral Rights Offer vs. Letter of Intent vs. Purchase Agreement';
process.env.MRX_ARTICLE_KEYWORD = 'mineral rights offer documents';
process.env.MRX_HERO_FILENAME = 'mineral-rights-offer-vs-letter-of-intent-vs-purchase-agreement';
process.env.MRX_INLINE_FILENAME = 'mineral-rights-offer-documents';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Mineral Rights Offer vs.',
  'Letter of Intent vs.',
  'Purchase Agreement',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['mineral rights offer documents']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned premium wide editorial photograph with three separate blank document folders on the right in a neutral progression, a blank terms card, pen, subtle tract-map sheet, one realistic partial hand at the far right, and an uninterrupted dark navy title field across the entire left. No readable base text, letters, digits, signatures, names, prices, logos, watermarks, UI screens, seals, gavels, handshakes, cash, dollar signs, rigs, binding-status claims, or celebratory sales imagery.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead bright evidence-board composition with three blank document-outline zones, neutral arrows, an unlabeled checklist grid, empty date and signature-status boxes, magnifying glass, evidence card, tract geometry, and an uninterrupted navy keyword band across the top. No people, hands, readable base text, letters, digits, signatures, names, prices, logos, watermarks, UI screens, seals, gavels, handshakes, cash, dollar signs, rigs, legal conclusions, or guaranteed progression.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
