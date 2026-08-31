#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '226';
process.env.MRX_ARTICLE_SLUG =
  'cad-account-number-rrc-lease-id-operator-number-texas-mineral-records';
process.env.MRX_ARTICLE_TITLE =
  'CAD Account Number, RRC Lease ID, and Operator Number in Texas Mineral Records';
process.env.MRX_ARTICLE_KEYWORD = 'Texas mineral record identifiers';
process.env.MRX_HERO_FILENAME =
  'cad-account-number-rrc-lease-id-and-operator-number-in-texas-mineral-records';
process.env.MRX_INLINE_FILENAME = 'texas-mineral-record-identifiers';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'CAD Account Number,',
  'RRC Lease ID, and',
  'Operator Number in',
  'Texas Mineral Records',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas mineral',
  'record identifiers',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-three-quarter bright records lab with five separate blank evidence objects on the right, a pale limestone work surface, a subtle Texas outline, thin non-merging navy and rust lines, and uninterrupted navy title field on the left. No people, hands, readable base text, letters, numbers, logos, seals, official forms, signatures, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead deep slate-blue drafting mat with five separate unlabeled geometric identifier lanes, visible break marks, a blank Texas silhouette, and a clean lower typography band. No low-angle archive scene, people, hands, books, filing cabinets, readable base text, letters, numbers, logos, seals, official forms, signatures, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
