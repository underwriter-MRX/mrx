import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const REVIEW_PATH = 'config/maintenance-reviews/2026-10-02-education-only-identities.json';
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

// Historical review files retain their original titles and reviewed hashes.
// A deliberately re-reviewed identity may use a new title only when this
// separate record binds the exact current source and both current image bytes.
export function reviewedHistoricalTitle(entry, source, repoRoot) {
  if (!entry.historical_title) return entry.title;
  const review = JSON.parse(readFileSync(join(repoRoot, REVIEW_PATH), 'utf8'));
  const rows = review.entries?.filter((row) => row.slug === entry.slug) ?? [];
  if (review.artifact_type !== 'mrx_reviewed_article_identity_transition' ||
      review.version !== 1 || !review.reviewer_id ||
      !/^\d{4}-\d{2}-\d{2}T/.test(review.reviewed_at ?? '') ||
      review.disposition !== 'PASS' || rows.length !== 1) {
    throw new Error(`${entry.slug}: invalid reviewed identity transition`);
  }
  const row = rows[0];
  const currentSource = Buffer.isBuffer(source) ? source : Buffer.from(source);
  const text = currentSource.toString('utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const scalar = (block, name) => {
    const value = block.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
    return value.replace(/^(['"])(.*)\1$/, '$2').replace(/''/g, "'");
  };
  const nested = (parent, name) => scalar(
    (fm.match(new RegExp(`^${parent}:\\s*\\n((?:[ \\t]+.*\\n?)*)`, 'm'))?.[1] ?? '')
      .split('\n').map((line) => line.replace(/^  /, '')).join('\n'), name);
  if (row.disposition !== 'PASS' || row.program_row_id !== entry.program_row_id ||
      row.repo_path !== entry.repo_path || row.canonical_url !== entry.canonical_url ||
      row.previous_title !== entry.historical_title || row.current_title !== entry.title ||
      row.current_title !== scalar(fm, 'title') || row.keyword !== scalar(fm, 'primary_keyword') ||
      row.current_source_sha256 !== hash(currentSource) ||
      row.historical_reviewed_source_sha256 !== entry.article_sha256 ||
      row.visual_review?.hero_exact_title !== true ||
      row.visual_review?.inline_exact_phrase !== true ||
      row.visual_review?.distinct_compositions !== true ||
      row.visual_review?.legible_at_social_and_mobile_sizes !== true ||
      row.claim_review?.owner_correction_only !== true ||
      row.claim_review?.professional_boundaries_preserved !== true) {
    throw new Error(`${entry.slug}: reviewed identity source binding mismatch`);
  }
  for (const kind of ['hero', 'inline']) {
    const asset = row[kind];
    const sourcePath = nested(`${kind}_image`, 'src');
    if (!asset?.path?.startsWith('/assets/articles/') || asset.path.includes('..') ||
        asset.path !== sourcePath || hash(readFileSync(join(repoRoot, 'public', asset.path.slice(1)))) !== asset.sha256) {
      throw new Error(`${entry.slug}: reviewed identity ${kind} binding mismatch`);
    }
  }
  if (nested('hero_image', 'social_src') !== row.hero.path || row.hero.path === row.inline.path ||
      row.hero.sha256 === row.inline.sha256) {
    throw new Error(`${entry.slug}: reviewed identity image parity mismatch`);
  }
  return row.previous_title;
}
