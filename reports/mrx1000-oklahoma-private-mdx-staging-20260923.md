# Oklahoma two-route article: private MDX staging

This is preparation evidence, not a publication or an additional verified MRX1000 article. The final-recrawl-verified count remains **321**.

## Identity and preservation

- Candidate: `MRX1000-1116`, proposed selection rank 322, title **Oklahoma Mineral Escrow and Unclaimed Property: Two Search Routes**.
- Staged file: `docs/evidence/mrx1000-wave250/oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes.mdx`; SHA-256 `cb90fe0fa0bdd836954f12e82a1eadf99056ec7af93ef21cf32ce50dbb3311c2` at this check.
- The 11,823-byte staged article body, starting at `> **Search leads`, is byte-identical to the body of the previously reviewed private draft `reports/mrx1000-oklahoma-two-route-article-draft-20260923.md`. That prior PASS was for the draft's exact bytes, **not** the staged frontmatter or a production release.
- The staged file is outside `src/content/posts`, and its frontmatter remains `draft: true`, `publication_status: draft`, `noindex: true`, `reviewed_by: mrx_compliance-pending-wave250-final-bytes`. The publication timestamp and review metadata are provisional.
- The historical release-10 canonical JSON/CSV retain SHA-256 `97c080482e25676b730ebee62597fcdf6a555b28d68fc150b9a24caf1e823dd6` and `0ac3e3ea4f1316e3154c0faa120090d031105c401065c28f790fe4771f82bcef`. The new identity is still `candidate_review_only` in the append-only addendum.

## Local checks completed

- Parsed the frontmatter as YAML. Canonical title is 65 characters; the 53-character search title and 152-character description meet the project's bounded search-result metadata lengths. Excerpt is 145 characters, answer summary 334 characters, five FAQs and seven official source entries are present. Both image alt strings are below 125 characters.
- Confirmed the canonical hero/social asset and distinct in-body asset exist as WebP at 1200 × 630 and 1200 × 675, with exact manifest hashes `b4c9feefe19acd44ab1f6ddd8107b3e7ae1d2ed4ab52a663eaa074ea5a51edd8` and `4864ee314c86e95aeea6061ce342fc6db084c65b5378f5eadb9c1c681218cddc`. Earlier local OCR and visual review remain separate from live rendered-page verification.
- Reopened the official [OCC Mineral Owners Escrow Account](https://www.oklahoma.gov/occ/divisions/oil-gas/mineral-owners-escrow-account.html), [Treasurer Unclaimed Property](https://oklahoma.gov/treasurer/unclaimed-property.html), [HB 1371 bill history](https://www.oklegislature.gov/BillInfo.aspx?Bill=HB1371), and [enrolled text](https://www.oklegislature.gov/cf_pdf/2025-26%20ENR/hB/HB1371%20ENR.PDF) on September 23. The OCC page separately links its owner search and an optional $20 CD; the Treasurer provides its own search/claim link; the enrolled text states November 1, 2026 as its effective date. These are source checks, not a claim about a particular owner's records or entitlement.
- Added a fail-fast guard to the legacy Wave 82 admission helper so `MRX_WAVE_NUMBER=250` cannot invoke its historical-ledger rewrite. A regression test verifies rejection and unchanged historical JSON/CSV hashes. The complete unit suite passed 93 files / 794 tests after this change.

## Still open

- Chesty/mrx_ceo read-only review of the complete staged MDX bytes: job `97b7e028-7f9d-43c9-bf8a-6f26c6cef74a`, pending at this note. Codex must independently evaluate any verdict.
- Prettier check of this private MDX currently fails **only on table-column spacing**. Formatting will change the staged hash; rebind and re-review final bytes before admission. Do not treat the prior prose-only PASS as final-MDX approval.
- Finalize real publication/review timestamps and non-pending reviewer receipt; confirm originality, Oklahoma-specific current-law phrasing, citations, internal links, and exact-title/phrase image rendering.
- Build a safe append-only admission that updates the admitted identity and release evidence without rewriting the historical JSON/CSV. The old Wave 82 helper is not that path.
- Only after full release gates: test/build, deployment and live verification on every active production alias, bounded IndexNow notification for the new canonical, and completed/postprocessed Search Atlas recrawl plus OTTO dashboard read. Do not increment 321 until those are proven.
