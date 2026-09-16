const REQUIRED_AUDIT_STATE = Object.freeze({
  status: 'completed',
  crawl_state: 'completed',
  postprocessing_status: 'completed',
  is_terminal: true,
});

const RECORD_FIELDS = Object.freeze([
  'record_id',
  'type',
  'status',
  'is_sitewide',
  'is_deployed',
  'is_valid',
  'page_id',
  'page_url',
]);

const CATEGORY_FIELDS = Object.freeze(['type', 'status', 'is_deployed', 'reason']);

function sameValue(actual, expected) {
  return Object.is(actual, expected);
}

function recordMismatch(record, exception) {
  return RECORD_FIELDS.filter((field) => !sameValue(record[field], exception[field])).map(
    (field) => ({ field, expected: exception[field], actual: record[field] }),
  );
}

function categoryMismatch(record, exception) {
  return CATEGORY_FIELDS.filter((field) => !sameValue(record[field], exception[field])).map(
    (field) => ({ field, expected: exception[field], actual: record[field] }),
  );
}

function breakdownRow(observation, issueType) {
  return (observation?.preview?.breakdown ?? []).find((row) => row.issue_type === issueType);
}

export function reconcileSearchAtlasOtto(observation, contract, options = {}) {
  const failures = [];
  if (options.maxObservationAgeMs !== undefined) {
    const observedAt = Date.parse(observation?.observed_at_utc ?? '');
    const now = options.now ?? Date.now();
    const ageMs = now - observedAt;
    if (
      !Number.isFinite(observedAt) ||
      !Number.isFinite(now) ||
      !Number.isFinite(options.maxObservationAgeMs) ||
      options.maxObservationAgeMs < 0 ||
      ageMs > options.maxObservationAgeMs ||
      ageMs < -5 * 60 * 1000
    ) {
      failures.push({
        code: 'observation_not_current',
        observed_at_utc: observation?.observed_at_utc ?? null,
        age_ms: Number.isFinite(ageMs) ? ageMs : null,
        max_age_ms: options.maxObservationAgeMs,
      });
    }
  }
  const project = observation?.project ?? {};
  const expectedProject = contract?.project ?? {};

  for (const field of ['id', 'uuid', 'audit_id']) {
    if (!sameValue(project[field], expectedProject[field])) {
      failures.push({
        code: `project_${field}_mismatch`,
        expected: expectedProject[field],
        actual: project[field],
      });
    }
  }

  for (const [field, expected] of Object.entries(REQUIRED_AUDIT_STATE)) {
    if (!sameValue(observation?.audit?.[field], expected)) {
      failures.push({
        code: `audit_${field}_mismatch`,
        expected,
        actual: observation?.audit?.[field],
      });
    }
  }

  if (
    observation?.preview?.prerequisites_met !== true ||
    observation?.preview?.is_engaged !== true ||
    observation?.preview?.is_frozen !== false ||
    observation?.preview?.pixel_status !== 'cloudflare_worker'
  ) {
    failures.push({
      code: 'preview_prerequisites_mismatch',
      prerequisites_met: observation?.preview?.prerequisites_met,
      is_engaged: observation?.preview?.is_engaged,
      is_frozen: observation?.preview?.is_frozen,
      pixel_status: observation?.preview?.pixel_status,
    });
  }

  const pendingRecords = Array.isArray(observation?.pending_records)
    ? observation.pending_records
    : [];
  const dashboardPending = observation?.dashboard?.pending;
  const dashboardTotal = observation?.dashboard?.total;
  const dashboardApproved = observation?.dashboard?.approved_deployed;
  const schemaPending = observation?.dashboard?.schema_pending;

  if (!Number.isInteger(dashboardPending) || dashboardPending < 0) {
    failures.push({ code: 'dashboard_pending_invalid', actual: dashboardPending });
  }
  if (!Number.isInteger(schemaPending) || schemaPending < 0) {
    failures.push({ code: 'dashboard_schema_pending_invalid', actual: schemaPending });
  }
  if (!Number.isInteger(dashboardTotal) || dashboardTotal < 0) {
    failures.push({ code: 'dashboard_total_invalid', actual: dashboardTotal });
  }
  if (!Number.isInteger(dashboardApproved) || dashboardApproved < 0) {
    failures.push({ code: 'dashboard_approved_invalid', actual: dashboardApproved });
  }
  if (dashboardPending !== dashboardTotal - dashboardApproved) {
    failures.push({
      code: 'dashboard_arithmetic_mismatch',
      dashboard_total: dashboardTotal,
      dashboard_approved: dashboardApproved,
      dashboard_pending: dashboardPending,
    });
  }

  const organizationPending = pendingRecords.filter(
    (record) => record.type === 'Organization',
  ).length;
  const domainSchema = breakdownRow(observation, 'domain_level_schema');
  const pageSchema = breakdownRow(observation, 'page_level_schema');
  const schemaInventory =
    (domainSchema?.pending_with_recommendation ?? 0) +
    (domainSchema?.pending_without_recommendation ?? 0) +
    (pageSchema?.pending_with_recommendation ?? 0) +
    (pageSchema?.pending_without_recommendation ?? 0);
  if (
    schemaPending !== schemaInventory ||
    domainSchema?.pending_with_recommendation !== organizationPending
  ) {
    failures.push({
      code: 'schema_pending_inventory_count_mismatch',
      dashboard_schema_pending: schemaPending,
      preview_schema_pending: schemaInventory,
      organization_pending_record_count: organizationPending,
      domain_schema_pending_with_recommendation: domainSchema?.pending_with_recommendation,
    });
  }

  const configuredExceptions = Array.isArray(contract?.exceptions) ? contract.exceptions : [];
  const vendorLocked = [];
  const actionable = [];

  for (const record of pendingRecords) {
    const exception = configuredExceptions.find(
      (candidate) => candidate.record_id === record.record_id,
    );
    if (!exception) {
      actionable.push({ record, reason: 'no_configured_exception' });
      continue;
    }

    const mismatches = recordMismatch(record, exception);
    if (mismatches.length > 0) {
      actionable.push({ record, reason: 'configured_exception_changed', mismatches });
      continue;
    }

    vendorLocked.push({
      record_id: record.record_id,
      classification: exception.classification,
      evidence: exception.evidence,
    });
  }

  if (actionable.length > 0) {
    failures.push({ code: 'actionable_pending_records', records: actionable });
  }

  const categoryRecords = Array.isArray(observation?.pending_category_records)
    ? observation.pending_category_records
    : [];
  const configuredCategories = Array.isArray(contract?.category_exceptions)
    ? contract.category_exceptions
    : [];
  const categoryLocked = [];
  const categoryActionable = [];
  const seenCategoryTypes = new Set();

  for (const record of categoryRecords) {
    const exception = configuredCategories.find((candidate) => candidate.type === record.type);
    const urls = Array.isArray(record.urls) ? record.urls : [];
    const duplicateUrls = new Set(urls).size !== urls.length;
    if (seenCategoryTypes.has(record.type) || duplicateUrls || !exception) {
      categoryActionable.push({
        record,
        reason: !exception ? 'no_configured_exception' : 'duplicate_category_or_url',
      });
      continue;
    }
    seenCategoryTypes.add(record.type);
    const mismatches = categoryMismatch(record, exception);
    const configuredUrls = new Set(exception.urls ?? []);
    const unexpectedUrls = urls.filter((url) => !configuredUrls.has(url));
    if (mismatches.length > 0 || unexpectedUrls.length > 0) {
      categoryActionable.push({
        record,
        reason: 'configured_exception_changed',
        mismatches,
        unexpected_urls: unexpectedUrls,
      });
      continue;
    }
    categoryLocked.push({
      type: record.type,
      count: urls.length,
      urls,
      classification: exception.classification,
      evidence: exception.evidence,
    });
  }

  const previewPendingWithRecommendation = observation?.preview?.total_pending_with_recommendation;
  const previewBreakdown = Array.isArray(observation?.preview?.breakdown)
    ? observation.preview.breakdown
    : [];
  const breakdownTypes = previewBreakdown.map((row) => row.issue_type);
  if (new Set(breakdownTypes).size !== breakdownTypes.length) {
    failures.push({ code: 'preview_breakdown_duplicate_types', types: breakdownTypes });
  }
  const breakdownPendingWithRecommendation = previewBreakdown.reduce(
    (total, row) =>
      total +
      (Number.isInteger(row.pending_with_recommendation) ? row.pending_with_recommendation : 0),
    0,
  );
  const categoryPendingCount = categoryRecords.reduce(
    (total, record) => total + (Array.isArray(record.urls) ? record.urls.length : 0),
    0,
  );
  if (
    !Number.isInteger(previewPendingWithRecommendation) ||
    previewPendingWithRecommendation !== pendingRecords.length + categoryPendingCount ||
    previewPendingWithRecommendation !== breakdownPendingWithRecommendation
  ) {
    failures.push({
      code: 'preview_generated_inventory_count_mismatch',
      preview_pending_with_recommendation: previewPendingWithRecommendation,
      record_inventory_count: pendingRecords.length,
      category_inventory_count: categoryPendingCount,
      preview_breakdown_count: breakdownPendingWithRecommendation,
    });
  }

  const previewPendingWithoutRecommendation =
    observation?.preview?.total_pending_without_recommendation;
  const breakdownPendingWithoutRecommendation = previewBreakdown.reduce(
    (total, row) =>
      total +
      (Number.isInteger(row.pending_without_recommendation)
        ? row.pending_without_recommendation
        : 0),
    0,
  );
  if (
    !Number.isInteger(previewPendingWithoutRecommendation) ||
    previewPendingWithoutRecommendation < 0 ||
    previewPendingWithoutRecommendation !== breakdownPendingWithoutRecommendation
  ) {
    failures.push({
      code: 'preview_without_recommendation_invalid',
      actual: previewPendingWithoutRecommendation,
      preview_breakdown_count: breakdownPendingWithoutRecommendation,
    });
  }

  for (const record of categoryRecords) {
    const preview = breakdownRow(observation, record.type);
    if (
      preview?.pending_with_recommendation !== record.urls?.length ||
      preview?.pending_without_recommendation !== 0
    ) {
      failures.push({
        code: 'category_preview_count_mismatch',
        type: record.type,
        inventory_count: record.urls?.length,
        preview,
      });
    }
  }

  if (categoryActionable.length > 0) {
    failures.push({ code: 'actionable_pending_categories', records: categoryActionable });
  }

  return {
    pass: failures.length === 0,
    project: {
      id: project.id,
      uuid: project.uuid,
      audit_id: project.audit_id,
    },
    observed_at_utc: observation?.observed_at_utc ?? null,
    dashboard: observation?.dashboard ?? null,
    actionable_pending: actionable.length,
    actionable_pending_categories: categoryActionable.length,
    vendor_locked_undeployed: vendorLocked.length,
    vendor_locked_records: vendorLocked,
    reviewed_undeployed_categories: categoryLocked.length,
    reviewed_undeployed_category_records: categoryLocked,
    failures,
  };
}
