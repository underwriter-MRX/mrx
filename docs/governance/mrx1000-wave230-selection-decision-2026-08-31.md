# MRX1000 Wave 230 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W230-SELECT-2026-08-31`
- Selection rank: `302`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: MRX1000-0850
- Planning source handle: factory-queue:MRX-AEO-06046
- Rejected planning title: Texas Mineral Rights Value: Valuation Factors Without Obligation
- Rejected planning slug: texas-mineral-rights-value-valuation-factors-without-obligation
- Rejected planning keyword: Texas mineral rights value
- Planning-title collision: 0.7143

The row remains in MRX1000, but the broad valuation-factor identity is rejected because it duplicates the admitted valuation corpus.

## Approved redefinition

- Title: Texas RRC Field Rule Tables: Special Rules, Standard Fallbacks, and Rescission Dates
- Slug: texas-rrc-field-rule-tables-special-standard-fallbacks-rescission-dates
- Primary keyword: Texas RRC field rule tables
- Search intent: informational
- Cluster: texas-county-basin-local-intent

Article 302 owns one source-scoped job: explain how the reviewed historical Oracle export separates field-specific rule rows from standard fallback rows, preserve the distinct rule/source codes and date fields, and provide a reproducible current-verification stop path. It does not determine the rule that currently governs a real well or permit.

## Controlled primary-source packet

Official RRC objects retrieved or retained on 2026-08-31:

| Source object                            | Bytes     | SHA-256                                                          | Bounded role                                                  |
| ---------------------------------------- | --------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| Oil and Gas Field Information manual     | 74,568    | b140a481947d7e3a868c74c66f5b9a3dcba1dea97e693a1751d3ed79e9d8db75 | Historical Oracle schema, fallback sequence, codes, and dates |
| Data Sets Available for Download         | 114,876   | ba615bbe5eeb8e7a5382bfb07a3d9ceeb661725de8233f6a2b532094bfeea700 | Current monthly Field Rules product identity                  |
| Field Data                               | 41,902    | c4fdbaacb24bb51c1ba353d245e057bd7b590becbd9d2e57576eab233e59bf20 | Current field-level routes                                    |
| Online Research Queries                  | 51,438    | 92d30a3d92168a370c32b001b45ca5df1f66e3d0bef64f3bed958798936e911f | Nightly Field Rules Query and source limitation               |
| Oil and Gas Well Records                 | 55,913    | ee3a299c745263943aff0ab640e940ce097a0cd38f180933e5d4f05487001a50 | Hearing-file and final/special-order route                    |
| Drilling Permits W-1 Online Filing Guide | 3,318,354 | b649b5b4d614e1a3dbe100dc67e6c4ec37303acbc3eb6e497a52a3b6008188a9 | Current workflow distinctions and history-link context        |
| Current Rules                            | 51,366    | 525dd3b4d4769d1bdbe7886b4addfd4eba14630bfd3bd409516829426c2b2a66 | Official TAC route and snapshot warning                       |

The packet totals 3,708,417 bytes. The historical manual is not represented as current legal authority.

## Cannibalization boundary

The approved title, slug, and keyword were absent before implementation. Maximum token-Jaccard similarity is 0.2105, tied to Article 299 and Article 301.

Article 299 retains identifier/source-label non-equivalence. Article 300 retains district conversion. Article 301 retains G/O/B classification, type-row cardinality, and associated-field pointers. The Field Search and Drilling-Permit Query worksheets retain query execution and results. Article 302 owns only historical field-rule table structure, fallback labels, distinct date handling, and current-verification stop states.

## Chesty and mrx_ceo read-only decisions

At verified commit b36edf262669b508653bb02d3f81c5b7f03a618e, both profiles received the exact planning row, proposed identity, source facts and paths, corpus boundaries, current doctrine, and release hold in supplied-text-only sessions. Tool access was limited to `clarify`; neither profile called a tool or changed repository, Git, task, image, deployment, purchase, or external state. Both used the included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

Chesty session: `20260831_061807_9c151b`

    CHESTY_ARTICLE302: APPROVE_REDEFINED
    CHESTY_DECISION: The redefined identity is distinct, source-supported, informational, and appropriately limited to historical Oracle field-rule table relationships with explicit current-applicability safeguards.
    CANONICAL_TITLE: Texas RRC Field Rule Tables: Special Rules, Standard Fallbacks, and Rescission Dates
    JOB_BOUNDARY: Explain the historical Oracle export relationships, source labels, dates, reproducible evidence row, and stop states without duplicating Articles 299–301 or retrieval worksheets and without determining current legal applicability, property rights, compliance, permits, value, offers, or transaction outcomes.

mrx_ceo session: `20260831_061845_54ad45`

    MRX_CEO_ARTICLE302: APPROVE_REDEFINED
    MRX_CEO_DECISION: APPROVE_REDEFINED
    CANONICAL_TITLE: Texas RRC Field Rule Tables: Special Rules, Standard Fallbacks, and Rescission Dates
    JOB_BOUNDARY: Explain the historical 2005 Oracle export relationships, field-specific versus standard fallback rows, preserved labels, evidence fields, source vintage, and stop states without determining current applicability or inferring property, ownership, compliance, permitting, spacing, drilling, valuation, offer, or transaction outcomes; approve local drafting and automated gates only.

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the historical table decision path, then separate `og_field_rule`, `og_std_field_rule`, and `og_field_info`. Preserve raw codes, row roles, depth and spacing fields, effective and rescission dates, source vintage, current-query status, and order status. Add information gain through a reproducible evidence row, explicit non-equivalence rules, current-versus-historical separation, and deterministic stop states. Use claim-adjacent official citations and stable claim IDs. Keep visible and schema entities aligned. Link semantically to the Texas hub, Articles 299–301, relevant retrieval worksheets, and the next step. Do not promise ranking, indexing, retrieval, or LLM citations.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, and schema. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

Five legal/editorial receipts remain missing. Article 302 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl.
