/**
 * Validate post-release-10 identities without rewriting the 1,000-row
 * historical canonical ledger. A candidate remains invisible to release
 * admission until its state is explicitly advanced after review.
 */
export function validateAppendOnlyIdentityAddendum(
  baseLedger,
  addendum,
  observedJsonSha256,
  observedCsvSha256,
) {
  const findings = [];
  const admittedRows = [];
  if (addendum?.artifact_type !== 'mrx1000_append_only_identity_addendum') {
    findings.push('Identity addendum artifact type is missing or invalid.');
  }
  if (addendum?.schema_version !== 1 || !Array.isArray(addendum?.entries)) {
    findings.push('Identity addendum schema version or entries are invalid.');
    return { findings, admittedRows };
  }
  if (addendum.historical_ledger_path !== 'config/mrx-1000-canonical-content-ledger.json') {
    findings.push('Identity addendum references a different historical ledger path.');
  }
  if (addendum.historical_ledger_sha256 !== observedJsonSha256) {
    findings.push('Identity addendum historical JSON SHA-256 mismatch.');
  }
  if (addendum.historical_ledger_csv_sha256 !== observedCsvSha256) {
    findings.push('Identity addendum historical CSV SHA-256 mismatch.');
  }

  const baseRows = baseLedger?.articles ?? [];
  const baseIds = new Set(baseRows.map((row) => row.program_row_id));
  const baseSlugs = new Set(baseRows.map((row) => row.canonical_slug));
  const baseUrls = new Set(baseRows.map((row) => row.canonical_url));
  const baseById = new Map(baseRows.map((row) => [row.program_row_id, row]));
  const ids = new Set();
  const slugs = new Set();
  const urls = new Set();
  const ranks = new Set();
  const redefinitions = new Set();
  const maxHistoricalSequence = Math.max(
    Number(baseLedger?.identity_registry?.max_sequence_ever ?? 0),
    ...baseRows.map((row) => Number(String(row.program_row_id ?? '').split('-')[1]) || 0),
  );
  let previousSequence = maxHistoricalSequence;

  for (const [index, entry] of addendum.entries.entries()) {
    const label = `Identity addendum entry ${index + 1}`;
    const id = entry?.program_row_id;
    const sequence = /^MRX1000-\d{4,}$/.test(id ?? '')
      ? Number(id.slice('MRX1000-'.length))
      : NaN;
    if (!Number.isInteger(sequence) || sequence <= previousSequence) {
      findings.push(`${label} must allocate a new, ascending program row ID after historical sequence ${maxHistoricalSequence}.`);
    }
    if (Number.isInteger(sequence)) previousSequence = sequence;
    if (baseIds.has(id) || ids.has(id)) findings.push(`${label} duplicates a program row ID.`);
    ids.add(id);
    if (!entry?.canonical_slug || baseSlugs.has(entry.canonical_slug) || slugs.has(entry.canonical_slug)) {
      findings.push(`${label} has a missing or duplicate canonical slug.`);
    }
    slugs.add(entry?.canonical_slug);
    if (!entry?.canonical_url || baseUrls.has(entry.canonical_url) || urls.has(entry.canonical_url)) {
      findings.push(`${label} has a missing or duplicate canonical URL.`);
    }
    urls.add(entry?.canonical_url);
    if (
      entry?.canonical_url !==
      `https://mineralrightsxchange.com/blog/${entry?.canonical_slug}/`
    ) {
      findings.push(`${label} canonical URL does not match its slug on the apex blog route.`);
    }
    if (!entry?.canonical_title || !entry?.pillar || !entry?.cluster || !entry?.source_system) {
      findings.push(`${label} is missing title, pillar, cluster, or source identity.`);
    }
    if (!Number.isInteger(entry?.selection_rank) || ranks.has(entry.selection_rank)) {
      findings.push(`${label} has a missing or duplicate selection rank.`);
    }
    ranks.add(entry?.selection_rank);
    if (!['candidate_review_only', 'admitted_quality_gated'].includes(entry?.identity_state)) {
      findings.push(`${label} has an unsupported identity state.`);
    }
    if (entry?.redefines_historical_program_row_id != null) {
      const historical = baseById.get(entry.redefines_historical_program_row_id);
      if (!historical || historical.canonical_slug !== entry.redefines_historical_slug) {
        findings.push(`${label} historical redefinition identity does not match the immutable ledger.`);
      } else if (
        historical.publication_status === 'published' ||
        historical.preservation_classification === 'live_public_published_route' ||
        historical.publication_gate_nonpublic === false
      ) {
        findings.push(`${label} cannot redefine a published historical row.`);
      }
      if (redefinitions.has(entry.redefines_historical_program_row_id)) {
        findings.push(`${label} reuses a historical redefinition target.`);
      }
      redefinitions.add(entry.redefines_historical_program_row_id);
    }
    if (
      !/^docs\/governance\/[a-z0-9-]+\.md$/.test(entry?.selection_decision_path ?? '') ||
      !/^[a-f0-9]{64}$/.test(entry?.selection_decision_sha256 ?? '')
    ) {
      findings.push(`${label} lacks a hash-bound selection decision.`);
    }
    if (entry?.identity_state === 'admitted_quality_gated') {
      admittedRows.push({
        program_row_id: id,
        canonical_title: entry.canonical_title,
        canonical_slug: entry.canonical_slug,
        canonical_url: entry.canonical_url,
        pillar: entry.pillar,
        cluster: entry.cluster,
        source_system: entry.source_system,
        publication_status: 'draft',
        draft: true,
        frontmatter_noindex: true,
        publication_gate_nonpublic: true,
      });
    }
  }
  return { findings, admittedRows };
}
