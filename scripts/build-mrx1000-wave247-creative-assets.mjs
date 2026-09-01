#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '247';
process.env.MRX_ARTICLE_SLUG =
  'texas-real-property-record-grantor-grantee-index-name-role-locator-search-log';
process.env.MRX_ARTICLE_TITLE =
  'Texas Real-Property Record Grantor-Grantee Index: Name, Role, and Locator Search Log';
process.env.MRX_ARTICLE_KEYWORD = 'Texas grantor grantee index search log';
process.env.MRX_HERO_FILENAME =
  'texas-real-property-record-grantor-grantee-index-name-role-and-locator-search-log';
process.env.MRX_INLINE_FILENAME = 'texas-grantor-grantee-index-search-log';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas Real-Property',
  'Record Grantor-Grantee',
  'Index: Name, Role, and',
  'Locator Search Log',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas grantor grantee',
  'index search log',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'top';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned low side-angle private records workspace with a shallow archival index drawer on the right, neutral blank index cards and dividers, one realistic partial hand at the far right, a closed record volume, subtle parcel-grid texture, and an uninterrupted dark navy title field across the left. No readable base text, letters, digits, dates, signatures, addresses, official seals, flags, courthouse emblems, logos, watermarks, UI screens, cash, coins, dollar signs, handshakes, gavels, oil rigs, or ownership claims.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict overhead bright search-log worksheet with unlabeled zones for county and route, exact name variant, role, date range, displayed locator, bounded result, evidence reference, and next step; two abstract opposing role arrows; a blank calendar block; magnifying glass; evidence card; parcel-grid geometry; and an uninterrupted navy keyword band across the top. No hands, readable base text, letters, digits, dates, signatures, addresses, official seals, flags, courthouse emblems, logos, watermarks, UI screens, cash, coins, dollar signs, handshakes, gavels, oil rigs, or ownership claims.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
