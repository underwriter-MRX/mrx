import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { orderNavigationCategories, compareCanonicalPaths } from '../../src/lib/navigation-order';

describe('reproducible public navigation', () => {
  const categories = [
    'Valuation',
    'Tax & Legal',
    'Selling Process',
    'Mineral Rights',
    'Competing Offers',
    'Understanding Mineral Rights',
    'Texas Oil & Gas',
  ].map((label) => ({ data: { label, slug: label.toLowerCase().replaceAll(' ', '-') } }));
  it('sorts English labels identically for different loader orders and does not mutate', () => {
    const before = [...categories];
    Object.freeze(categories);
    const sorted = orderNavigationCategories(categories);
    expect(orderNavigationCategories([...categories].reverse())).toEqual(sorted);
    expect(sorted.map((c) => c.data.label)).toEqual([
      'Competing Offers',
      'Mineral Rights',
      'Selling Process',
      'Tax & Legal',
      'Texas Oil & Gas',
      'Understanding Mineral Rights',
      'Valuation',
    ]);
    expect(categories).toEqual(before);
    expect(sorted).not.toBe(categories);
  });
  it('uses canonical slug as a tie breaker', () => {
    const entries = [
      { data: { label: 'Same', slug: 'z' } },
      { data: { label: 'Same', slug: 'a' } },
    ];
    expect(orderNavigationCategories(entries).map((c) => c.data.slug)).toEqual(['a', 'z']);
    expect(compareCanonicalPaths('/blog/a/', '/blog/a/')).toBe(0);
  });
  it('category rendering uses the shared ordering contract', () => {
    expect(readFileSync('src/components/organisms/CategoryNav.astro', 'utf8')).toContain(
      'orderNavigationCategories(categories).map',
    );
  });
  it('every public article date formatter pins UTC without changing private account dates', () => {
    for (const file of [
      'molecules/AuthorByline.astro',
      'organisms/PostCard.astro',
      'organisms/LearningCenterArchive.astro',
      'react/LearningCenter.tsx',
      'organisms/PillarInventory.astro',
    ]) {
      const source = readFileSync(`src/components/${file}`, 'utf8');
      const formatters = [
        ...source.matchAll(/(?:toLocaleDateString|DateTimeFormat)\('en-US',\s*\{([^}]+)\}/g),
      ];
      expect(formatters.length).toBeGreaterThan(0);
      for (const [, options] of formatters) expect(options).toContain("timeZone: 'UTC'");
    }
    const script =
      "process.stdout.write(new Date('2026-09-14').toLocaleDateString('en-US', {timeZone:'UTC',month:'short',day:'numeric',year:'numeric'}))";
    const outputs = ['UTC', 'America/Los_Angeles'].map((TZ) =>
      execFileSync(process.execPath, ['-e', script], {
        env: { ...process.env, TZ },
        encoding: 'utf8',
      }),
    );
    expect(outputs).toEqual(['Sep 14, 2026', 'Sep 14, 2026']);
  });
});
