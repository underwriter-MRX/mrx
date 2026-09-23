import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { ARTICLE_PILLARS, CONTENT_CLUSTER_TO_PILLAR } from '../../src/lib/content-graph';

const postsDirectory = join(process.cwd(), 'src/content/posts');

function frontmatter(file: string): string {
  const source = readFileSync(join(postsDirectory, file), 'utf8');
  return source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
}

function scalar(source: string, key: string): string {
  const value = source.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
  return value.replace(/^['"]|['"]$/g, '');
}

function hub(source: string): string {
  const value = source.match(/^internal_links:\s*\n[ \t]+hub:\s*(.+)$/m)?.[1]?.trim() ?? '';
  return value.replace(/^['"]|['"]$/g, '');
}

// Earlier waves retain immutable, release-reviewed route aliases. Enforce the
// current canonical pillar contract prospectively, starting with wave 252.
const currentWavePosts = readdirSync(postsDirectory)
  .filter((file) => file.endsWith('.mdx'))
  .map((file) => ({ file, source: frontmatter(file) }))
  .filter(
    ({ source }) =>
      scalar(source, 'content_program') === 'mrx1000' &&
      /^wave\d+$/.test(scalar(source, 'content_batch')) &&
      Number(scalar(source, 'content_batch').slice(4)) >= 252,
  );

describe('current-wave MRX1000 pillar support', () => {
  it('keeps the cluster, pillar, parent page, and crawlable hub aligned', () => {
    expect(currentWavePosts.length).toBeGreaterThan(0);

    for (const { file, source } of currentWavePosts) {
      const cluster = scalar(source, 'content_cluster');
      const expectedPillar =
        CONTENT_CLUSTER_TO_PILLAR[cluster as keyof typeof CONTENT_CLUSTER_TO_PILLAR];
      expect(expectedPillar, `${file}: unmapped cluster`).toBeDefined();
      expect(scalar(source, 'pillar'), `${file}: pillar`).toBe(expectedPillar);

      const path = ARTICLE_PILLARS[expectedPillar].path;
      expect(scalar(source, 'parent_page'), `${file}: parent_page`).toBe(path);
      expect(hub(source), `${file}: internal_links.hub`).toBe(path);
    }
  });
});
