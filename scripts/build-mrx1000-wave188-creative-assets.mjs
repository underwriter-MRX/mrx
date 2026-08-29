#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '188';
process.env.MRX_ARTICLE_SLUG =
  'texas-comptroller-category-g1-g2-g3-mineral-classification-boundary-table';
process.env.MRX_ARTICLE_TITLE =
  'Texas Comptroller Category G1, G2, and G3 Mineral Classification Boundary Table';
process.env.MRX_ARTICLE_KEYWORD = 'Texas Comptroller mineral categories G1 G2 G3';
process.env.MRX_HERO_FILENAME =
  'texas-comptroller-category-g1-g2-and-g3-mineral-classification-boundary-table';
process.env.MRX_INLINE_FILENAME = 'texas-comptroller-mineral-categories-g1-g2-g3';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas Comptroller',
  'Category G1, G2, and G3',
  'Mineral Classification',
  'Boundary Table',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas Comptroller mineral',
  'categories G1 G2 G3',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter archival desk with three separate blank symbolic category cards, a navy reference binder, cream paper, brass dividers, walnut, and an uninterrupted navy left title field. No readable base text, letters, numbers, government mark, agency logo, seal, map, official document, person, hand, personal data, property record, appraisal value, tax amount, offer, graph, conclusion, signature, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead three-lane classification worksheet with separate nonverbal droplet, mineral, and layered-earth objects, a brass boundary ruler, blank version card, cream field, and an uninterrupted lower navy keyword band. No perspective binder, readable base text, letters, numbers, government mark, agency logo, seal, map, official document, person, hand, personal data, property record, appraisal value, tax amount, offer, graph, conclusion, signature, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
