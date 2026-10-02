import { reviewedHistoricalTitle } from './_mrx-reviewed-identity-transition.mjs';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { analyzeControlledPublicationTransition } from './_mrx1000-controlled-publication-transition.mjs';
import {
  analyzeCurrentSourceTransition,
  transitionIsPublished,
} from './_mrx1000-reviewed-seo-maintenance-transition.mjs';

/**
 * Read the signed exact-admission batch and prove which rows currently carry
 * the byte-exact draft/noindex -> published/indexable transition. The signed
 * canonical ledger remains immutable; consumers use this projection only for
 * the current workspace/build publication state.
 */
export function loadRuntimePublicationProjection(repoRoot) {
  const batchPath = path.join(repoRoot, 'config', 'mrx1000-release-10-batch.json');
  if (!existsSync(batchPath)) throw new Error(`Release batch missing: ${batchPath}`);
  const batch = JSON.parse(readFileSync(batchPath, 'utf8'));
  const entries = (batch.articles ?? []).filter((entry) =>
    entry.historical_title || ['admitted_exact', 'admitted_quality_gated'].includes(entry.admission_status),
  );
  const bySlug = new Map();
  for (const entry of entries) {
    const sourcePath = path.join(repoRoot, entry.repo_path);
    if (!existsSync(sourcePath)) {
      throw new Error(`Exact-admission source missing: ${entry.repo_path}`);
    }
    const transition = analyzeCurrentSourceTransition({
      source: readFileSync(sourcePath),
      entry,
      repoPath: entry.repo_path,
      repoRoot,
      analyzeHistoricalTransition: analyzeControlledPublicationTransition,
    });
    if (!transition.authorized) {
      throw new Error(
        `Exact-admission publication projection failed for ${entry.slug}: ${transition.reason}`,
      );
    }
    reviewedHistoricalTitle(entry, readFileSync(sourcePath), repoRoot);
    bySlug.set(entry.slug, {
      entry,
      transition,
      published: transitionIsPublished(transition),
    });
  }
  return { bySlug, exact_admission_count: entries.filter((entry) => ['admitted_exact', 'admitted_quality_gated'].includes(entry.admission_status)).length };
}

export function projectLedgerArticlesForRuntime(articles, repoRoot) {
  const projection = loadRuntimePublicationProjection(repoRoot);
  const projected = articles.map((article) => {
    const runtime = projection.bySlug.get(article.canonical_slug);
    const currentIdentity = runtime?.entry.historical_title ? {
      canonical_title: runtime.entry.title,
      historical_canonical_title: runtime.entry.historical_title,
      primary_keyword: JSON.parse(readFileSync(path.join(repoRoot, 'config/maintenance-reviews/2026-10-02-education-only-identities.json'), 'utf8')).entries.find((row) => row.slug === runtime.entry.slug).keyword,
    } : {};
    if (!runtime?.published) return { ...article, ...currentIdentity };
    return {
      ...article,
      ...currentIdentity,
      publication_status: 'published',
      draft: false,
      frontmatter_noindex: false,
      publication_gate_nonpublic: false,
      noindex_required: false,
      preservation_classification: 'live_public_published_route',
      normalized_status: 'public_route_configured_exact_admission_pending_production_verification',
      publication_state: 'published_workspace_article_pending_production_verification',
      action: 'deploy_exact_admission_and_verify_production',
      action_reason:
        'The signed exact-admission row carries only the byte-proven publication transition; production verification remains a separate release gate.',
      compliance_status: 'exact_admission_reviews_passed_pending_production_verification',
    };
  });
  return { articles: projected, projection };
}
