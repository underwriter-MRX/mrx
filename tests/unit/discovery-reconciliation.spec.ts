import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Discovery and Search Atlas source reconciliation', () => {
  it('renders only the current Learning Center page and loads full-corpus search on demand', () => {
    const archive = readFileSync('src/components/organisms/LearningCenterArchive.astro', 'utf8');
    const endpoint = readFileSync('src/pages/learning-center/search-index.json.ts', 'utf8');

    expect(archive).toContain('posts.map((post, index)');
    expect(archive).not.toContain('allPosts.map');
    expect(archive).not.toContain('hidden={!currentPageSlugs.has(post.slug)}');
    expect(archive).toContain("fetch('/learning-center/search-index.json'");
    expect(archive).toContain('results.replaceChildren(...matches.map(createSearchCard))');
    expect(endpoint).toContain('getLearningCenterData()');
    expect(endpoint).toContain("'X-Robots-Tag': 'noindex, nofollow'");
  });

  it('adds visible, crawlable discovery paths for owner situations, state guides, and AI guides', () => {
    const learningCenter = readFileSync(
      'src/components/organisms/LearningCenterPage.astro',
      'utf8',
    );
    const statePage = readFileSync('src/pages/mineral-rights/[state].astro', 'utf8');
    const stateLinks = readFileSync('src/components/organisms/StateGuideLinks.astro', 'utf8');
    const guidePage = readFileSync('src/pages/team/[slug].astro', 'utf8');

    expect(learningCenter).toContain('currentPage === 1 && <OwnerSituationLinks />');
    expect(statePage).toContain('<StateGuideLinks currentState={state.slug} />');
    expect(stateLinks).toContain('otherStates.map');
    expect(stateLinks).toContain('href={`/mineral-rights/${state.slug}/`}');
    expect(guidePage).toContain('.filter((candidate) => candidate.slug !== guide.slug)');
    expect(guidePage).toContain('href={`/team/${candidate.slug}/`}');
  });
});
