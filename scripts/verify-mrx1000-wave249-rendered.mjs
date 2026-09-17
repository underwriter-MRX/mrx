#!/usr/bin/env node

import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const slug = 'how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement';
const title = 'How to Locate a Texas Mineral Interest From an Inherited Royalty Statement';
const canonical = `https://mineralrightsxchange.com/blog/${slug}/`;
const hero = `/assets/articles/hero/${slug}.webp`;
const inline = `/assets/articles/inline/${slug}/locate-inherited-texas-mineral-interest-from-a-royalty-statement.webp`;
const heroUrl = `https://mineralrightsxchange.com${hero}`;
const html = readFileSync(join(root, 'dist/client/blog', slug, 'index.html'), 'utf8');
const pillarHtml = readFileSync(join(root, 'dist/client/inherited-mineral-rights/index.html'), 'utf8');
const sitemap = readFileSync(join(root, 'dist/client/sitemap-articles.xml'), 'utf8');

function tag(pattern, label) {
  const matches = [...html.matchAll(pattern)];
  assert.equal(matches.length, 1, `Expected one ${label}; found ${matches.length}`);
  return matches[0][0];
}

function attribute(element, name) {
  return element.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] ?? null;
}

function meta(key, value) {
  const elements = [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([element]) => element)
    .filter((element) => attribute(element, key) === value);
  assert.equal(elements.length, 1, `Expected one ${key}=${value}; found ${elements.length}`);
  return attribute(elements[0], 'content');
}

function sha256(relativePath) {
  return createHash('sha256').update(readFileSync(join(root, 'dist/client', relativePath))).digest('hex');
}

assert.equal(tag(/<h1\b[^>]*>[^<]*<\/h1>/g, 'H1').replace(/<[^>]+>/g, ''), title);
assert.equal(meta('property', 'og:title'), title);
assert.equal(meta('name', 'twitter:title'), title);
assert.equal(meta('property', 'og:url'), canonical);
assert.equal(meta('property', 'og:image'), heroUrl);
assert.equal(meta('name', 'twitter:image'), heroUrl);
assert.equal(meta('property', 'og:image:type'), 'image/webp');
assert.equal(meta('name', 'twitter:card'), 'summary_large_image');
assert.ok(!meta('name', 'robots')?.includes('noindex'), 'Candidate must not render noindex');
const canonicalLinks = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)];
assert.equal(canonicalLinks.length, 1);
assert.equal(attribute(canonicalLinks[0][0], 'href'), canonical);
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), 'Candidate is absent from the article sitemap');
assert.ok(pillarHtml.includes(`href="/blog/${slug}/"`), 'Inherited pillar lacks a contextual link');

const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((match) => JSON.parse(match[1]));
const articles = jsonLd.filter((node) => node['@type'] === 'Article');
const faqs = jsonLd.filter((node) => node['@type'] === 'FAQPage');
assert.equal(articles.length, 1, 'Expected exactly one Article schema');
assert.equal(faqs.length, 1, 'Expected exactly one FAQPage schema');
assert.equal(articles[0].headline, title);
assert.deepEqual(articles[0].image, [heroUrl]);
assert.equal(articles[0].author?.name, 'MRX Editorial Team');
assert.equal(articles[0].author?.['@type'], 'Organization');

const visibleFaqs = [...html.matchAll(/<details\b[^>]*>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>\s*<p\b[^>]*>([\s\S]*?)<\/p>\s*<\/details>/g)]
  .map((match) => ({
    question: match[1].replace(/<[^>]+>/g, '').trim(),
    answer: match[2].replace(/<[^>]+>/g, '').trim(),
  }));
assert.equal(visibleFaqs.length, 5, 'Expected five visible FAQs');
assert.deepEqual(
  faqs[0].mainEntity.map((entry) => ({ question: entry.name, answer: entry.acceptedAnswer.text })),
  visibleFaqs,
  'Visible FAQ answers and FAQPage schema differ',
);

assert.ok(html.includes(`src="${hero}"`), 'Hero image is not visible');
assert.ok(html.includes(`src="${inline}"`), 'Inline image is not visible');
assert.equal(sha256(hero), 'd98c621aa43597d251e1f90489e0345a007aa50eafcc765fd1ce58130e31f276');
assert.equal(sha256(inline), 'e1abcb76174328df40cd59f0c6721dbe2f3b89304cfe8de5e5a6ea8986170abc');

console.log(`Wave 249 rendered identity PASS: ${title}; five visible/schema FAQs; one Article; exact hero/inline bytes; inherited-pillar link.`);
