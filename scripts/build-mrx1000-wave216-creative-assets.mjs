#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '216';
process.env.MRX_ARTICLE_SLUG = 'pecos-cad-oil-and-gas-property-discovery-rrcid-permit-january-1';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD Oil and Gas Property Discovery: RRCID, Permit, and January 1';
process.env.MRX_ARTICLE_KEYWORD = 'Pecos CAD oil and gas property discovery';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-oil-and-gas-property-discovery-rrcid-permit-and-january-1';
process.env.MRX_INLINE_FILENAME = 'pecos-cad-oil-and-gas-property-discovery';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Pecos CAD Oil and Gas',
  'Property Discovery:',
  'RRCID, Permit, and',
  'January 1',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Pecos CAD oil and gas', 'property discovery']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free dark low-oblique Pecos evidence-routing board with separate official-record index card, drilling-permit folder, January 1 calendar marker, restrained tract-map texture, and uninterrupted left title field. No logos, seals, agency marks, owner or account records, money, values, tax amounts, rankings, results, completion claims, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict-overhead three-column evidence workspace with separate RRCID, drilling-permit, January 1, completion-report, plat, situs-map, and DOI-statement artifacts above an uninterrupted lower keyword band. No people beyond one gloved fingertip, perspective hero scene, logos, seals, agency marks, owner or account records, money, values, tax amounts, rankings, results, completion claims, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
