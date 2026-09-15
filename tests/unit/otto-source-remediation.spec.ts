import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('OTTO source-first remediation', () => {
  const read = (path: string) => readFileSync(join(process.cwd(), path), 'utf8');

  it('uses descriptive shared article headings without changing article identity fields', () => {
    const layout = read('src/layouts/ArticleLayout.astro');

    expect(layout).toContain('>Direct answer for mineral owners</h2>');
    expect(layout).toContain('>Key takeaways for mineral owners</h2>');
    expect(layout).toContain('>Sources reviewed for this article</h2>');
    expect(layout).not.toContain('>Direct answer</h2>');
    expect(layout).not.toContain('>Key takeaways</h2>');
    expect(layout).not.toContain('>Sources</h2>');
  });

  it('gives public guide and category archives descriptive H1 and H2 labels', () => {
    const guidePage = read('src/pages/team/[slug].astro');
    const categoryArchive = read('src/components/organisms/CategoryArchivePage.astro');

    expect(guidePage).toContain('Meet {guide.name}, {guide.shortRole}');
    expect(guidePage).toContain('How {guide.name} guides the conversation');
    expect(categoryArchive).toContain('{category.data.label} mineral rights articles');
  });
});
