#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '246';
process.env.MRX_ARTICLE_SLUG =
  'texas-recorded-mineral-documents-instrument-number-volume-page-certified-copy-status';
process.env.MRX_ARTICLE_TITLE =
  'Texas Recorded Mineral Documents: Instrument Number, Volume/Page, and Certified-Copy Status';
process.env.MRX_ARTICLE_KEYWORD = 'Texas recorded mineral document locator fields';
process.env.MRX_HERO_FILENAME =
  'texas-recorded-mineral-documents-instrument-number-volume-page-and-certified-copy-status';
process.env.MRX_INLINE_FILENAME = 'texas-recorded-mineral-document-locator-fields';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas Recorded',
  'Mineral Documents:',
  'Instrument Number,',
  'Volume/Page, and',
  'Certified-Copy Status',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas recorded mineral',
  'document locator fields',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned dark low three-quarter county-records desk with one partial hand, a shallow archival drawer, an already-found neutral document packet, separate plain-image and clerk-certified-copy paper treatments, neutral locator tabs, and a clean navy title field on the left. No readable base text, letters, digits, dates, signatures, addresses, logos, watermarks, seals, flags, courthouse emblems, badges, cash, coins, dollar signs, handshakes, gavels, oil rigs, or ownership conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned bright strict top-down five-field record-control matrix with two blank document stacks, five muted color headers, blank rules, abstract unlabeled parcel-grid geometry, a magnifying glass, an archival clip, and a clean upper navy keyword band. No people, hands, readable base text, pseudo-text, letters, digits, dates, coordinates, signatures, addresses, logos, watermarks, seals, flags, courthouse emblems, badges, cash, coins, dollar signs, handshakes, gavels, oil rigs, or ownership conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
