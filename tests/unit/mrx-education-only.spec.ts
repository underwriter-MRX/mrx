import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const repoRoot = join(import.meta.dirname, '..', '..');
const textExtensions = new Set(['.mdx', '.md', '.ts', '.tsx', '.js', '.mjs', '.json', '.astro']);
const activeRoots = [
  join(repoRoot, 'src', 'content', 'posts'),
  join(repoRoot, 'src', 'content', 'pages'),
  join(repoRoot, 'config', 'mrx-searchatlas-draft-prompt-v2-education-only.md'),
  join(repoRoot, 'scripts'),
];

const falseBuyerPatterns = [
  /\bMRX or another buyer\b/i,
  /\bMRX acquisition discussion\b/i,
  /\bMRX buyer conflict\b/i,
  /\bMineralRightsXchange(?:\.com)? may buy\b/i,
  /\bIf MRX or an affiliate could acquire\b/i,
  /\bMRX\s+may\s+(?:be|become|act as|have)\b[^\n.]{0,140}\b(?:buyer|economic interest|acquisition interest)\b/i,
  /\bMRX\s+may\s+benefit economically\b/i,
  /\bMRX\b[^\n.]{0,100}\bcommercial interest in buying\b/i,
  /\bMRX\b[^\n.]{0,100}\bmake or facilitate an acquisition proposal\b/i,
  /\bMRX(?:['’]s)?\b[^\n.]{0,100}\b(?:possible|potential)\s+(?:buyer|economic interest)\b/i,
  /\b(?:possible|potential)\s+MRX\s+buyer(?:-interest)?\b/i,
  /\bdirectional acquisition feedback\b/i,
  /\bIt may have an acquisition interest\b/i,
  /\bdisclos(?:e|es|ed)\b[^\n.]{0,80}\bMRX\b[^\n.]{0,80}\b(?:buyer|economic interest)\b/i,
];

function walk(path: string): string[] {
  const stat = statSync(path);
  if (stat.isFile()) return textExtensions.has(extname(path)) ? [path] : [];
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const child = join(path, entry.name);
    return entry.isDirectory() ? walk(child) : textExtensions.has(extname(child)) ? [child] : [];
  });
}

function directFalseBuyerHits(source: string): string[] {
  return source
    .split(/\r?\n/)
    .map((line, index) => ({ line, number: index + 1 }))
    .filter(({ line }) => falseBuyerPatterns.some((pattern) => pattern.test(line)))
    .map(({ line, number }) => `${number}: ${line.trim()}`);
}

describe('MRX education-only source guard', () => {
  it('rejects active first-person buyer, acquisition-interest, and economic-interest claims', () => {
    const failures = activeRoots.flatMap((root) =>
      walk(root).flatMap((file) =>
        directFalseBuyerHits(readFileSync(file, 'utf8')).map(
          (hit) => `${relative(repoRoot, file)}:${hit}`,
        ),
      ),
    );

    expect(failures).toEqual([]);
  });

  it('keeps third-party buyer education in scope without treating buyer terminology as a defect', () => {
    const source = readFileSync(
      join(repoRoot, 'src', 'content', 'posts', 'how-to-compare-mineral-rights-buyers-in-texas.mdx'),
      'utf8',
    );

    expect(source).toMatch(/third-party buyer|buyers/i);
    expect(source).toMatch(
      /MRX (?:is for educational purposes only|provides educational information and resources only) and (?:is not a buyer|does not buy mineral rights)/i,
    );
    expect(directFalseBuyerHits(source)).toEqual([]);
  });
});
