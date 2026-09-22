# MRX OTTO missing-keywords review — 2026-09-22

Status: read-only proposal review. No OTTO fix was approved, generated, deployed, or deleted; no source article or live page changed. The final Article 321 deployment and completed/post-processed audit 138239 remain the release baseline.

## Evidence and units

- Search Atlas OTTO project `e4bab8bb-717e-480c-8dea-1de1b8596eb7`, `mineralrightsxchange.com`, read on 2026-09-22. Dashboard: 906 total, 16 approved/deployed, 890 pending. This is a dashboard count, not a count of generated recommendations.
- Deployment preview: 47 generated pending **fixes** (26 missing-keyword fixes, 20 Dynamic Indexing fixes, one site-wide Organization schema proposal) and 1,098 page/fix rows without recommendations. The 26 missing-keyword fixes are on 20 URLs. The generated text below was obtained from the per-URL recommendation-value read, not inferred from URL slugs. This review covers only those 26 fixes; the other 21 generated proposals retain their separate existing review state.
- Current source was checked at commit `c5445ffb` against the relevant page or article identity and answer scope. An absent exact phrase is not evidence that the subject is absent, and a vendor keyword suggestion is not authority to insert prose, change a title, or serve hidden crawler-only text.
- The raw completed audit is a separate layer: score 971, 446 successful pages, 40 redirects, 445 indexable, 41 non-indexable, and 2,307 heuristic observations. None of those numbers is an OTTO recommendation count.

## Per-URL disposition

| URL | Generated keyword fix(es) | Source-first disposition |
|---|---|---|
| `/contact/` | `mineralrightsxchangecom vs us mineral exchange` | Reject. Competitor/comparison wording is unrelated to the contact page's three contact paths and would imply an unsupported comparison. |
| `/team/` | `mrxplorer` | Reject. Unverified entity/product term unrelated to the team page; do not fabricate an affiliation. |
| `/sell-mineral-rights/` | `how to sell my mineral rights` | Do not deploy. The canonical sell page already answers the selling-process job; an exact-match phrase is not a missing answer. |
| `/faq/` | `mineral rights underwriter review`; `us mineral exchange reviews` | Do not deploy the first: the FAQ already explains the directional review, fees, and appraisal boundary. Reject the second: unrelated third-party review/brand intent. |
| `/blog/texas-rrc-field-rule-tables-special-standard-fallbacks-rescission-dates/` | `texas rrc field rules query` | Do not deploy. The article is a bounded field-rule-table/source-date explanation, not a general query guide. |
| `/blog/texas-rrc-wellbore-query-retrieval-provenance-worksheet/` | `tx rrc query` | Do not deploy. Too broad for a single Wellbore Query retrieval worksheet; retain exact instrument scope. |
| `/blog/upton-cad-open-records-policy-request-response-clarification-charge-states/` | `upton cad` | Do not deploy. Broad CAD navigation intent does not equal the article's open-records-policy and request-state task. |
| `/blog/compare-public-oil-and-gas-price-decks-without-mixing-assumptions/` | `price deck oil and gas` | Do not deploy. The existing title/description already identify public oil-and-gas price decks and the comparison task; no substantive gap is shown. |
| `/blog/culberson-cad-2025-2026-reappraisal-plan-adoption-source-record/` | `culberson cad` | Do not deploy. A broad CAD query would erase the dated reappraisal-plan source-record boundary. |
| `/blog/discover-which-types-of-texas-mineral-rights-qualify-for-a-free-underwriter-assessment/` | `free mineral rights review` | Do not deploy. The article already covers free directional-review eligibility and expressly avoids guaranteeing an outcome. |
| `/blog/essential-steps-to-assess-the-value-of-your-mineral-rights-accurately-and-confidently/` | `mineral rights valuation services`; `how do i determine the value of my mineral rights`; `mineral rights valuation` | Do not deploy all three. The article is an evidence-first owner checklist, not a certified appraisal or service-comparison page; the question and valuation topic are already its answer scope. |
| `/blog/get-a-free-mineral-rights-valuation-review-today/` | `free mineral rights appraisal` | Reject. MRX's directional review is explicitly not a certified appraisal; this phrase risks a misleading service claim. |
| `/blog/how-to-accurately-assess-your-texas-mineral-rights-value/` | `mineral property appraisal` | Do not deploy. The article reconciles records into a transparent range and should not be relabeled as a property appraisal. |
| `/blog/karnes-cad-2025-certified-mineral-roll-corrected-zip-identity-check/` | `karnes cad` | Do not deploy. A general CAD query is broader than this dated corrected-ZIP artifact-identity check. |
| `/blog/midland-cad-mineral-property-three-approaches-sufficient-data-condition/` | `midland cad property search` | Reject. The source page describes appraisal approaches and a sufficient-data condition, not a property-search procedure. |
| `/blog/texas-rrc-oil-and-gas-lease-name-index-retrieval-provenance-worksheet/` | `rrc completions query` | Reject. Completions Query and Lease Name Index are different RRC retrieval surfaces; the suggestion would misroute the reader. |
| `/blog/texas-rrc-organization-p-5-query-retrieval-provenance-worksheet/` | `rrc p 5 query`; `rrc online query`; `rrc field rules query` | Do not deploy the first two: the existing page already names the Organization (P-5) Query and its bounded retrieval task, while the second is too broad. Reject the third: field rules are a different RRC source. |
| `/blog/understanding-1031-tax-implications-for-mineral-rights-owners/` | `1031 exchange mineral rights` | Do not deploy. The current article already addresses federal mineral-rights Section 1031 issues with source and tax-advice boundaries; exact-match insertion is not a missing answer. |
| `/blog/unlocking-value-a-comprehensive-guide-to-assessing-your-mineral-rights-worth/` | `mineral property appraisal`; `mineral rights valuation` | Do not deploy. The guide's scope is an evidence-based assessment, not a certified appraisal; the valuation concept is already present without needing overlay text. |
| `/blog/what-is-a-held-by-production-lease-and-how-does-it-affect-your-mineral-rights/` | `held by production oil and gas` | Do not deploy. The exact held-by-production lease task is already the canonical title/answer scope; public production data cannot alone decide lease effect. |

All 26 generated missing-keyword fixes remain unapproved and undeployed. This is a content-identity judgment, not a claim that the vendor's detection is technically broken or that all OTTO pending rows are resolved. If a future first-party query or owner case reveals a genuinely missing answer, evaluate a reviewed source edit with distinct intent and normal article/release gates; do not switch on keyword injection merely to lower pending.

## Supporting-job screening, not article approval

The four existing Search Atlas maps `266118`, `261159`, `261162`, and `261160` were read again on September 22. Their Questions clusters were screened, plus the Owner Record Organization, Assessing Royalty Payments, Understanding Title Ownership, and Understanding Oil Prices topical clusters. Generated fairness, valuation, fees, buyer trust, selling, leasing, statement, oil-price, and public-record titles largely recast live article jobs. The sampled oil-price and royalty-payment-dispute angles have incumbent articles including `how-oil-price-fluctuations-affect-texas-mineral-rights-values.mdx`, `steps-to-take-if-your-royalty-checks-are-inconsistent-a-mineral-owners-guide.mdx`, and `why-did-my-royalty-check-go-down.mdx`. Map title generation and exact phrase matching provide no distinct answer-scope or primary-source basis for a new URL. No candidate is admitted from this screening pass, and Article 321 remains the current final-recrawl-verified count of 321.

The relevant business measure remains relevant ready cases, completed human reviews, and agreed next steps. Those outcomes were not returned by these Search Atlas reads; they are unavailable here, not zero. No customer-outcome lift is inferred from the score or proposal review.
