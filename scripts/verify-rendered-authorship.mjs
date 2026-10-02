import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const buildCandidates = [join(ROOT, 'dist', 'client'), join(ROOT, 'dist')];
const buildRoot = buildCandidates.find((candidate) => existsSync(join(candidate, 'blog')));

if (!buildRoot) {
  throw new Error(
    `No rendered article directory found in ${buildCandidates.map((candidate) => join(candidate, 'blog')).join(', ')}`,
  );
}

async function files(root) {
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) result.push(...(await files(path)));
    else if (entry.name.endsWith('.html')) result.push(path);
  }
  return result;
}
function nodes(value) {
  if (Array.isArray(value)) return value.flatMap(nodes);
  if (!value || typeof value !== 'object') return [];
  return [value, ...nodes(value['@graph'])];
}
let count = 0;
for (const path of await files(join(buildRoot, 'blog'))) {
  const html = await readFile(path, 'utf8');
  const schema = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ].flatMap((match) => nodes(JSON.parse(match[1])));
  const articles = schema.filter((node) => node['@type'] === 'Article');
  if (!articles.length) continue;
  count += 1;
  const byline = html.match(/<span[^>]*class="byline__author"[^>]*>([\s\S]*?)<\/span>/)?.[1];
  if (
    !byline ||
    !/<a[^>]*href="\/authors\/mrx-editorial-team\/"[^>]*>MRX Editorial Team<\/a>/.test(byline)
  ) {
    throw new Error(`${path}: visible organizational byline missing`);
  }
  for (const article of articles) {
    if (
      article.author?.['@type'] !== 'Organization' ||
      article.author?.name !== 'MRX Editorial Team'
    ) {
      throw new Error(`${path}: visible and schema author disagree`);
    }
  }
  if (/MRX Guide Author|educational author identity/.test(html)) {
    throw new Error(`${path}: guide presented as author`);
  }
}
if (!count) throw new Error('No rendered articles verified');
console.log(
  `Rendered authorship passed: ${count} articles have consistent organizational bylines and schema.`,
);

// Named layout slots must survive rendering; archive identity and noindex are contractual.
let authorCount = 0;
for (const path of await files(join(buildRoot, 'authors'))) {
  const html = await readFile(path, 'utf8');
  const schema = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ].flatMap((match) => nodes(JSON.parse(match[1])));
  const ids = schema.map((node) => node['@id']).filter(Boolean);
  const authors = schema.filter((node) => String(node['@id'] ?? '').endsWith('#author'));
  const editorial = path.includes('/authors/mrx-editorial-team/');
  const robots = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/)?.[1] ?? '';
  if (
    authors.length !== 1 ||
    authors[0]['@type'] !== (editorial ? 'Organization' : 'CreativeWork') ||
    schema.filter((node) => node['@id'] === 'https://mineralrightsxchange.com/#org').length !== 1 ||
    new Set(ids).size !== ids.length ||
    schema.some((node) => node['@type'] === 'Person') ||
    /noindex/.test(robots) === editorial
  ) {
    throw new Error(`${path}: author schema identity, uniqueness or indexability regression`);
  }
  authorCount++;
}
if (!authorCount) throw new Error('No rendered author archives verified');

const stateResources = [
  [
    'colorado',
    'does-surface-mineral-owner-same-on-a-colorado-well-card-prove-title',
    'Does “Surface Mineral Owner Same” on a Colorado Well Card Prove Title?',
  ],
  [
    'wyoming',
    'how-to-check-federal-mineral-reservations-in-wyoming',
    'How to Check Federal Mineral Reservations in Wyoming',
  ],
  [
    'louisiana',
    'can-louisiana-omr-records-prove-my-private-mineral-lease',
    'Can Louisiana OMR Records Prove My Private Mineral Lease?',
  ],
];
const plainText = (value) =>
  value
    .replace(/<[^>]*>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
for (const [state, slug, title] of stateResources) {
  const html = await readFile(join(buildRoot, 'mineral-rights', state, 'index.html'), 'utf8');
  const articleHtml = await readFile(join(buildRoot, 'blog', slug, 'index.html'), 'utf8');
  const matches = [
    ...html.matchAll(new RegExp(`<a\\b[^>]*href="/blog/${slug}/"[^>]*>([\\s\\S]*?)</a>`, 'g')),
  ];
  const h1 = articleHtml.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '';
  if (
    matches.length !== 1 ||
    plainText(matches[0][1]) !== title ||
    plainText(h1) !== title ||
    (html.match(/State-specific next step/g) ?? []).length !== 1 ||
    /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(articleHtml)
  ) {
    throw new Error(`${state}: published state resource, exact title or indexability regression`);
  }
}
console.log(
  `Rendered archive/state checks passed: ${authorCount} author routes, three exact-title state resources.`,
);
