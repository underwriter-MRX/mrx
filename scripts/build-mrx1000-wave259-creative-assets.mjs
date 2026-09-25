#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '259';
process.env.MRX_ARTICLE_SLUG =
  'how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice';
process.env.MRX_ARTICLE_TITLE =
  'How Do I Find an Oklahoma Pooling Order After Getting a Notice?';
process.env.MRX_ARTICLE_KEYWORD = 'Oklahoma pooling order search';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'oklahoma-pooling-order-search';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave259-creative-sources/oklahoma-pooling-order-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave259-creative-sources/oklahoma-pooling-order-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'How Do I Find an',
  'Oklahoma Pooling',
  'Order After Getting',
  'a Notice?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Oklahoma pooling',
  'order search',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '39';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free Oklahoma public-records research scene: open steel filing drawer and plain unlabeled case folder on the left, red-earth prairie with a small distant oil-well silhouette through a window, dark right-side negative space. No readable data, numbers, logos, seals, or real case document.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free overhead comparison of older and newer record-location routes: unmarked archival microfilm reel and closed binder on the left, blank-screen tablet and blank paper sleeve on the right, slate tabletop, dark lower caption band. No readable data, dates, UI labels, logos, seals, or title/payment conclusion.';

await import('./build-mrx1000-wave82-creative-assets.mjs');
