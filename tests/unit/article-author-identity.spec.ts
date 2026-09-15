import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

describe('article author and guide identity', () => {
  it('keeps the organizational author distinct from the fictional article guide', () => {
    const source = readFileSync(
      path.join(ROOT, 'src/components/molecules/ArticleTeamBox.astro'),
      'utf8',
    );

    expect(source).toContain('>Article guide</p>');
    expect(source).toContain('>Ask {guide.name}</h2>');
    expect(source).toContain('{guide.name} is a fictional MRX AI Guide, not an article author');
    expect(source).toContain('{authorName}\n      maintains organizational responsibility');
    expect(source).not.toContain('>Article author</p>');
    expect(source).not.toContain('MRX Guide Author');
    expect(source).not.toContain('{authorName} is a fictional MRX AI Guide');
  });

  it('resolves the declared content guide before a legacy featured guide or fallback', () => {
    const publicRoute = readFileSync(path.join(ROOT, 'src/pages/blog/[...slug].astro'), 'utf8');
    const stagedRoute = readFileSync(
      path.join(ROOT, 'src/pages/staged/mrx1000/pilot-001/[slug].astro'),
      'utf8',
    );

    expect(publicRoute).toMatch(
      /getGuide\(legacyAuthorSlug\)[\s\S]+getGuide\(post\.data\.content_guide \?\? ''\)[\s\S]+getGuide\(post\.data\.featured_guide \?\? ''\)[\s\S]+getGuide\('travis'\)/,
    );
    expect(stagedRoute).toContain(
      "getGuide(post.data.content_guide ?? '') ?? getGuide(post.data.featured_guide ?? '')",
    );
  });
});
