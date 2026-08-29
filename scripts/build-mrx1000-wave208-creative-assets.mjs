#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '208';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-property-search-lease-fields-not-ownership-proof';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD Property Search: Lease Fields Are Search Inputs, Not Ownership Proof';
process.env.MRX_ARTICLE_KEYWORD = 'Martin CAD mineral lease search fields';
process.env.MRX_HERO_FILENAME =
  'martin-cad-property-search-lease-fields-are-search-inputs-not-ownership-proof';
process.env.MRX_INLINE_FILENAME = 'martin-cad-mineral-lease-search-fields';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Martin CAD Property Search:',
  'Lease Fields Are Search',
  'Inputs, Not Ownership',
  'Proof',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Martin CAD mineral lease',
  'search fields',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique dark editorial evidence-boundary scene with six blank raised search tiles, a blank filter tray, a brass route, a translucent boundary pane, a sealed navy title-evidence folder, subtle limestone, restrained metal accents, and an uninterrupted left title field. No readable text, letters, numbers, pseudo-writing, names, addresses, parcel identifiers, maps, deeds, forms, seals, logos, money, charts, values, search results, people, hands, signatures, courthouse symbols, conclusions, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down bright evidence-ladder scene with a blank cobalt search-field tile cluster, separate translucent search-hit card, closed cream official-record folder, navy verification token, brass line, red stop markers, clear loupe, stone specimens, and an uninterrupted lower navy keyword band. No dark low-oblique glass interface, readable text, letters, numbers, pseudo-writing, names, addresses, parcel identifiers, maps, deeds, forms, seals, logos, money, charts, values, search results, people, hands, signatures, courthouse symbols, conclusions, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
