#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '160';
process.env.MRX_ARTICLE_SLUG =
  'form-50-150-confidentiality-boundary-map-crane-oil-gas-property';
process.env.MRX_ARTICLE_TITLE =
  'Form 50-150 Confidentiality Boundary Map for Crane Oil and Gas Property';
process.env.MRX_ARTICLE_KEYWORD = 'Form 50-150 Crane oil and gas property';
process.env.MRX_HERO_FILENAME =
  'form-50-150-confidentiality-boundary-map-for-crane-oil-and-gas-property';
process.env.MRX_INLINE_FILENAME = 'form-50-150-crane-oil-and-gas-property';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Form 50-150',
  'Confidentiality',
  'Boundary Map',
  'for Crane Oil and Gas Property',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Form 50-150',
  'Crane oil and gas property',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter archival scene with a deep-navy portable lockable case opened slightly on a pale limestone plinth, warm brass hardware, four blank frosted dividers behind a translucent privacy shield, a closed unmarked cobalt evidence sleeve, and one mineral core confined to the right of uninterrupted deep-navy title space. No drawer, cabinet, person, hand, real form, text, letter, number, label, checkbox, signature, date, value, QR code, logo, seal, government emblem, map, screen, deadline, legal conclusion, tax guidance, recommendation, filing claim, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pale-limestone public-versus-controlled evidence boundary divided by a thin brass rail: one blank white public-source index tile and mineral sample at left, one closed opaque deep-navy privacy sleeve beneath a frosted shield and four blank cobalt section tokens at right, above an uninterrupted lower navy keyword band. No portable case, drawer, cabinet, latch, person, hand, real form, text, letter, number, label, checkbox, signature, date, value, QR code, logo, seal, government emblem, map, screen, deadline, legal conclusion, tax guidance, recommendation, filing claim, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
