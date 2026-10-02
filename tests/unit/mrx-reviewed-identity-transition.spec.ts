import { it } from 'vitest';
import { strict as assert } from 'node:assert';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { reviewedHistoricalTitle } from '../../scripts/_mrx-reviewed-identity-transition.mjs';

it('binds deliberate identity changes to source, history, assets and visual review; rejects tampering', () => {
const root = mkdtempSync(join(tmpdir(), 'mrx-identity-fixture-'));
const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const source = Buffer.from(`---
title: 'Educational Review'
primary_keyword: 'educational review'
hero_image:
  src: '/assets/articles/hero/educational-review.webp'
  social_src: '/assets/articles/hero/educational-review.webp'
inline_image:
  src: '/assets/articles/inline/educational-review.webp'
---
MRX is for educational purposes only and is not a buyer.
`);
const entry = {slug: 'fixture', program_row_id: 'fixture-1', repo_path: 'fixture.mdx',
  canonical_url: 'https://example.test/fixture/', title: 'Educational Review',
  historical_title: 'Old Title', article_sha256: 'a'.repeat(64)};
const row = {slug: entry.slug, program_row_id: entry.program_row_id, repo_path: entry.repo_path,
  canonical_url: entry.canonical_url, disposition: 'PASS', previous_title: 'Old Title',
  current_title: entry.title, keyword: 'educational review', current_source_sha256: hash(source),
  historical_reviewed_source_sha256: entry.article_sha256,
  visual_review: {hero_exact_title: true, inline_exact_phrase: true, distinct_compositions: true,
    legible_at_social_and_mobile_sizes: true},
  claim_review: {owner_correction_only: true, professional_boundaries_preserved: true},
  hero: {path: '/assets/articles/hero/educational-review.webp', sha256: hash('hero fixture')},
  inline: {path: '/assets/articles/inline/educational-review.webp', sha256: hash('inline fixture')}};
const review = {artifact_type: 'mrx_reviewed_article_identity_transition', version: 1,
  reviewer_id: 'test-fixture', reviewed_at: '2026-10-02T00:00:00Z', disposition: 'PASS', entries: [row]};
const reviewPath = join(root, 'config/maintenance-reviews/2026-10-02-education-only-identities.json');
function save(value = review) { writeFileSync(reviewPath, JSON.stringify(value)); }
try {
  mkdirSync(join(root, 'config/maintenance-reviews'), {recursive: true});
  mkdirSync(join(root, 'public/assets/articles/hero'), {recursive: true});
  mkdirSync(join(root, 'public/assets/articles/inline'), {recursive: true});
  writeFileSync(join(root, 'public', row.hero.path), 'hero fixture');
  writeFileSync(join(root, 'public', row.inline.path), 'inline fixture');
  assert.equal(reviewedHistoricalTitle({title: 'Unchanged'}, source, root), 'Unchanged');
  assert.throws(() => reviewedHistoricalTitle(entry, source, root));
  save();
  assert.equal(reviewedHistoricalTitle(entry, source, root), 'Old Title');
  assert.throws(() => reviewedHistoricalTitle(entry, Buffer.concat([source, Buffer.from('drift')]), root));
  assert.throws(() => reviewedHistoricalTitle({...entry, title: 'Other Title'}, source, root));
  assert.throws(() => reviewedHistoricalTitle({...entry, historical_title: 'Other History'}, source, root));
  save({...review, entries: [row, row]});
  assert.throws(() => reviewedHistoricalTitle(entry, source, root));
  save({...review, entries: [{...row, visual_review: {...row.visual_review, hero_exact_title: false}}]});
  assert.throws(() => reviewedHistoricalTitle(entry, source, root));
  save();
  writeFileSync(join(root, 'public', row.hero.path), 'changed hero fixture');
  assert.throws(() => reviewedHistoricalTitle(entry, source, root));
  console.log('PASS: current identity requires exact reviewed source, history, images and visual evidence; tampering rejected.');
} finally { rmSync(root, {recursive: true, force: true}); }

});
