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
