import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { stateGuides } from '../../src/data/states';

const postsDir = join(import.meta.dirname, '..', '..', 'src', 'content', 'posts');

const expectedResources = {
  oklahoma: 'How Do I Find an Oklahoma Pooling Order After Getting a Notice?',
  'north-dakota': 'North Dakota Inherited Royalty Questions: Records and Ombudsman',
  colorado: 'Does “Surface Mineral Owner Same” on a Colorado Well Card Prove Title?',
  wyoming: 'How to Check Federal Mineral Reservations in Wyoming',
  pennsylvania: 'Can Pennsylvania DEP Production Data Verify My Royalty Check?',
  'west-virginia':
    'How to Compare a West Virginia Oil and Gas Tax Account With a Mineral Buyer Letter',
  ohio: 'Where Can I Find Ohio Mineral Deeds and Leases Before a Title Review?',
  louisiana: 'Can Louisiana OMR Records Prove My Private Mineral Lease?',
} as const;

describe('state featured resources', () => {
  it('uses exact titles and only published, indexable article destinations', () => {
    for (const [stateSlug, expectedTitle] of Object.entries(expectedResources)) {
      const state = stateGuides.find((candidate) => candidate.slug === stateSlug);
      expect(state?.featuredResources).toHaveLength(1);
      const resource = state?.featuredResources?.[0];
      expect(resource?.label).toBe(expectedTitle);
      const articleSlug = resource?.href.match(/^\/blog\/(.+)\/$/)?.[1];
      expect(articleSlug).toBeTruthy();
      const source = readFileSync(join(postsDir, `${articleSlug}.mdx`), 'utf8');
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      expect(frontmatter.match(/^title:\s*['"](.+)['"]\s*$/m)?.[1]).toBe(expectedTitle);
      expect(frontmatter).toMatch(/^publication_status:\s*published\s*$/m);
      expect(frontmatter).not.toMatch(/^draft:\s*true\s*$/m);
      expect(frontmatter).not.toMatch(/^noindex:\s*true\s*$/m);
    }
  });

  it('does not fabricate a New Mexico article resource', () => {
    expect(
      stateGuides.find((state) => state.slug === 'new-mexico')?.featuredResources,
    ).toBeUndefined();
  });
});
