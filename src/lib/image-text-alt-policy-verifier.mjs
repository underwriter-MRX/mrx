const UNREVIEWED_MARKERS = /not[_ -]?(?:performed|reviewed|required)|unreviewed|pending|todo|tbd/i;
const COMPLETED_REVIEW = /^(\d{4}-\d{2}-\d{2}):\s*(.+)$/s;

function isValidCalendarDate(value) {
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function hasCompletedVisualReview(evidence) {
  const review = evidence?.visual_review;
  if (typeof review !== 'string') return false;
  const normalized = review.trim();
  const match = normalized.match(COMPLETED_REVIEW);
  if (!match) return false;
  const [, reviewDate, reviewDetail] = match;
  return (
    isValidCalendarDate(reviewDate) &&
    /[\p{L}\p{N}]/u.test(reviewDetail) &&
    !UNREVIEWED_MARKERS.test(normalized)
  );
}

export function validateAltOccurrence({ assets, path, alt, actualSha256, actualBytes }) {
  const failures = [];
  const evidence = assets?.[path];
  if (!evidence) return ['path is absent from image text alt policy'];

  if (actualSha256 !== evidence.sha256) failures.push('policy SHA binding mismatch');
  if (actualBytes !== evidence.bytes) failures.push('policy byte binding mismatch');

  if (evidence.classification === 'printed_text') {
    if (typeof evidence.exact_text !== 'string' || evidence.exact_text.trim() === '') {
      failures.push('printed-text evidence requires nonempty exact_text');
    }

    if (evidence.concise_alt !== undefined) {
      const validConciseAlt =
        typeof evidence.concise_alt === 'string' &&
        evidence.concise_alt.trim() !== '' &&
        evidence.concise_alt === evidence.concise_alt.trim();
      if (!validConciseAlt) failures.push('concise_alt must be a nonempty trimmed string');
      if (!hasCompletedVisualReview(evidence)) {
        failures.push('concise_alt requires completed visual review evidence');
      }
      if (alt !== evidence.concise_alt) {
        failures.push('alt does not equal the reviewed concise override');
      }
    } else if (alt !== evidence.exact_text) {
      failures.push('alt does not equal exact printed text');
    }
  } else if (evidence.classification === 'no_text') {
    if (evidence.exact_text !== null) failures.push('no-text evidence exact_text must be null');
    if (
      !Array.isArray(evidence.allowed_existing_alt_values) ||
      !evidence.allowed_existing_alt_values.includes(alt)
    ) {
      failures.push('no-text alt is not an approved existing value');
    }
  } else {
    failures.push('asset has unresolved classification');
  }

  return failures;
}
