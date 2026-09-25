#!/usr/bin/env bash
# Build a lean, self-contained Vercel source bundle for MRX production deploys.
#
# The release build needs a narrow set of signed MRX1000 evidence inputs, but
# uploading every local artifact exceeds Vercel's file-entry cap. This helper
# copies application source plus only those fail-closed gate inputs to an empty
# staging directory. Deploy the printed directory with:
#   pnpm dlx vercel@latest "$STAGE_DIR" --prod --yes --scope team-mrx \
#     --project mrx-web --archive=tgz
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
stage_dir=${1:-}

if [[ -z "$stage_dir" ]]; then
  stage_dir=$(mktemp -d "${TMPDIR:-/tmp}/mrx-vercel-stage.XXXXXX")
else
  if [[ -e "$stage_dir" && -n "$(find "$stage_dir" -mindepth 1 -maxdepth 1 -print -quit)" ]]; then
    echo "Refusing to populate a non-empty staging directory: $stage_dir" >&2
    exit 1
  fi
  mkdir -p "$stage_dir"
  stage_dir=$(cd "$stage_dir" && pwd)
fi

copy_parent() {
  mkdir -p "$stage_dir/$(dirname "$1")"
  cp "$repo_root/$1" "$stage_dir/$1"
  if [[ -f "$repo_root/$1.sha256" ]]; then
    cp "$repo_root/$1.sha256" "$stage_dir/$1.sha256"
  fi
}

rsync -a \
  --exclude='.git/' \
  --exclude='.vercel/' \
  --exclude='.worktrees/' \
  --exclude='.worktrees' \
  --exclude='node_modules/' \
  --exclude='.astro/' \
  --exclude='dist/' \
  --exclude='artifacts/' \
  --exclude='reports/' \
  --exclude='docs/' \
  --exclude='coverage/' \
  --exclude='playwright-report/' \
  --exclude='test-results/' \
  --exclude='tests/' \
  --exclude='tmp/' \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='public/assets/icons/react/' \
  --exclude='public/assets/icons/*/svg/' \
  --exclude='scripts/admit-mrx1000-*' \
  "$repo_root/" "$stage_dir/"

# The production build reads this signed owner directive while generating the
# MRX1000 creative-brief evidence. Other documentation is not a build input.
copy_parent \
  docs/governance/mrx1000-owner-continuous-publication-directive-2026-08-04.md
copy_parent \
  docs/governance/mrx1000-wave250-selection-decision-2026-09-23.md
copy_parent \
  docs/governance/mrx1000-wave251-selection-decision-2026-09-23.md
copy_parent \
  docs/governance/mrx1000-wave252-selection-decision-2026-09-23.md
copy_parent \
  docs/governance/mrx1000-wave253-selection-decision-2026-09-23.md
copy_parent \
  docs/governance/mrx1000-wave254-selection-decision-2026-09-24.md
copy_parent \
  docs/governance/mrx1000-wave255-selection-decision-2026-09-24.md
copy_parent \
  docs/governance/mrx1000-wave256-selection-decision-2026-09-24.md
copy_parent \
  docs/governance/mrx1000-wave257-selection-decision-2026-09-24.md
copy_parent \
  docs/governance/mrx1000-wave258-selection-decision-2026-09-24.md
copy_parent \
  docs/governance/mrx1000-wave259-selection-decision-2026-09-25.md
copy_parent \
  docs/governance/mrx1000-wave260-selection-decision-2026-09-25.md
copy_parent \
  artifacts/mrx1000-wave250-creative-qa/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave251-creative-qa/north-dakota-inherited-royalty-questions-records-and-ombudsman/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave252-creative-qa/north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave253-creative-qa/how-to-check-federal-mineral-reservations-in-wyoming/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave254-creative-qa/how-to-compare-a-west-virginia-oil-and-gas-tax-account-with-a-mineral-buyer-letter/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave255-creative-qa/how-to-check-a-texas-mineral-ownership-report-before-comparing-a-buyer-offer/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave256-creative-qa/does-a-texas-rrc-drilling-permit-prove-your-lease-covers-a-well/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave257-creative-qa/can-louisiana-omr-records-prove-my-private-mineral-lease/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave258-creative-qa/can-pennsylvania-dep-production-data-verify-my-royalty-check/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave259-creative-qa/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/creative-manifest.json
copy_parent \
  artifacts/mrx1000-wave260-creative-qa/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review/creative-manifest.json

mkdir -p "$stage_dir/artifacts/mrx1000-append-only/reviews"
rsync -a \
  "$repo_root/artifacts/mrx1000-append-only/reviews/" \
  "$stage_dir/artifacts/mrx1000-append-only/reviews/"

mkdir -p "$stage_dir/artifacts/mrx1000-release-10"
rsync -a \
  "$repo_root/artifacts/mrx1000-release-10/decisions/" \
  "$stage_dir/artifacts/mrx1000-release-10/decisions/"
rsync -a \
  "$repo_root/artifacts/mrx1000-release-10/reviews/final/" \
  "$stage_dir/artifacts/mrx1000-release-10/reviews/final/"
rsync -a \
  "$repo_root/artifacts/mrx1000-release-10/creative-remediation-15d/" \
  "$stage_dir/artifacts/mrx1000-release-10/creative-remediation-15d/"

for release_input in \
  artifacts/mrx1000-release-10/release/bound-pre-edit-batch.json \
  artifacts/mrx1000-release-10/release/retained-production-baseline.json; do
  copy_parent "$release_input"
done

while IFS= read -r release_input; do
  [[ -n "$release_input" ]] && copy_parent "$release_input"
done < <(
  node -e '
    const batch = require(process.argv[1]);
    const inputs = [batch.decision_authority?.batch_source_admitted_shortlist_path];
    for (const binding of Object.values(batch.release_evidence_bindings ?? {})) inputs.push(binding?.path);
    for (const input of [...new Set(inputs.filter(Boolean))].sort()) console.log(input);
  ' "$repo_root/config/mrx1000-release-10-batch.json"
)

# Vercel's current CLI Deployment source-file limit is 15,000. Keep a 1,000
# file safety margin; the former 4,900 cap became obsolete as the reviewed
# MRX1000 evidence and public two-image corpus grew.
# https://vercel.com/docs/limits#files
file_count=$(find "$stage_dir" -type f | wc -l | tr -d ' ')
if (( file_count >= 14000 )); then
  echo "Refusing Vercel staging bundle with $file_count files (safety limit: 13,999; provider limit: 15,000)." >&2
  exit 1
fi

printf 'STAGE_DIR=%s\nFILE_COUNT=%s\n' "$stage_dir" "$file_count"
