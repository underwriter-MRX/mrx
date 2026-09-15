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

function sameValue(actual, expected) {
  return Object.is(actual, expected);
}

function recordMismatch(record, exception) {
  return RECORD_FIELDS.filter((field) => !sameValue(record[field], exception[field])).map(
    (field) => ({ field, expected: exception[field], actual: record[field] }),
  );
}

export function reconcileSearchAtlasOtto(observation, contract) {
  const failures = [];
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

  const pendingRecords = Array.isArray(observation?.pending_records)
    ? observation.pending_records
    : [];
  const dashboardPending = observation?.dashboard?.pending;
  const schemaPending = observation?.dashboard?.schema_pending;

  if (!Number.isInteger(dashboardPending) || dashboardPending < 0) {
    failures.push({ code: 'dashboard_pending_invalid', actual: dashboardPending });
  }
  if (!Number.isInteger(schemaPending) || schemaPending < 0) {
    failures.push({ code: 'dashboard_schema_pending_invalid', actual: schemaPending });
  }
  if (dashboardPending !== pendingRecords.length) {
    failures.push({
      code: 'pending_inventory_count_mismatch',
      dashboard_pending: dashboardPending,
      pending_record_count: pendingRecords.length,
    });
  }
  if (schemaPending !== pendingRecords.filter((record) => record.type === 'Organization').length) {
    failures.push({
      code: 'schema_pending_inventory_count_mismatch',
      dashboard_schema_pending: schemaPending,
      organization_pending_record_count: pendingRecords.filter(
        (record) => record.type === 'Organization',
      ).length,
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
    vendor_locked_undeployed: vendorLocked.length,
    vendor_locked_records: vendorLocked,
    failures,
  };
}
