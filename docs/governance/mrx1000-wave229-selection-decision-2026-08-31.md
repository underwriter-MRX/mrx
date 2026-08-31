# MRX1000 Wave 229 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W229-SELECT-2026-08-31`
- Selection rank: `301`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: MRX1000-0849
- Planning source handle: factory-queue:MRX-AEO-06044
- Rejected planning title: Texas Mineral Rights Value: Timeline In 2026
- Rejected planning slug: texas-mineral-rights-value-timeline-in-2026
- Rejected planning keyword: Texas mineral rights value
- Planning-title collision: 0.6000

The row remains in the MRX1000 program, but the broad statewide valuation-timeline identity is not publishable. It materially overlaps the admitted valuation corpus and county timeline identities.

## Approved redefinition

- Title: Texas RRC Field Classification Codes: G, O, B, and Associated Field Numbers
- Slug: texas-rrc-field-classification-codes-associated-field-numbers
- Primary keyword: Texas RRC field classification codes
- Search intent: informational
- Cluster: texas-county-basin-local-intent

Article 301 owns one source-scoped parsing and audit job: distinguish the field-level G, O, and B classification values, preserve the one-row or two-row field-type-specific structure, and resolve an associated-field pointer only within the exact table and field context that defines it. The evidence row preserves exact table name, exact field label, raw code, field_id, field number, row role, source object, version or access date, pointer status, and exception.

The current Oracle-table manual spells the column associated_field_id in the table definition and associate_field_id in the narrative dictionary. Article 301 records both labels in context instead of silently normalizing the source. It also distinguishes a current catalog endpoint from the manual's 2008 document metadata and uses the 2019 tape layout only as legacy corroboration.

## Current-source and evidence check

Controlled official RRC retrievals on 2026-08-31:

| Source object                                 | Bytes     | SHA-256                                                          | Bounded role                                                                                  |
| --------------------------------------------- | --------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Oil and Gas Field Information data dictionary | 74,568    | b140a481947d7e3a868c74c66f5b9a3dcba1dea97e693a1751d3ed79e9d8db75 | og_field and og_field_info schema, G/O/B semantics, cardinality, and associated-field pointer |
| Legacy Field Information tape layout          | 1,397,759 | 0c0a14e30b932032749206c00b02e06c28086bee2047694f2a8d475addaa7008 | Legacy corroboration only                                                                     |
| Data Sets Available for Download              | 114,876   | ba615bbe5eeb8e7a5382bfb07a3d9ceeb661725de8233f6a2b532094bfeea700 | Current monthly field-product identity and separation                                         |
| Field Data                                    | 41,902    | c4fdbaacb24bb51c1ba353d245e057bd7b590becbd9d2e57576eab233e59bf20 | Current field-level entry points                                                              |
| RRC Online Research Queries                   | 51,438    | 92d30a3d92168a370c32b001b45ca5df1f66e3d0bef64f3bed958798936e911f | Current query-system separation and cadence                                                   |
| About Oil and Gas Data Queries                | 46,685    | 93b8dabdfa94ed0ed7aed05b32aa6aa66a1f7884e3232a30d963fba577761581 | Identifier and system-slice boundaries                                                        |

The controlled source set totals 1,727,228 bytes.

## Cannibalization boundary

The approved title, slug, and keyword were absent before implementation. The nearest admitted-title token similarity is 0.2941 to Article 299, Texas RRC District, County, and Field Codes: A Source-Label Crosswalk.

Article 299 owns identifier non-equivalence and name-only-join warnings. Article 300 owns source-specific district-value conversion. The Texas RRC Field Search Retrieval Provenance Worksheet owns query execution and results. Article 301 owns only field-class semantics, og_field and og_field_info row cardinality, and exact-source associated-field pointer integrity.

Article 301 does not infer a field boundary, county, district, well, lease, tract, API, title, ownership, production, reserves, value, offer, buyer, or transaction outcome. Neither a class code nor a pointer is property evidence.

## Chesty and mrx_ceo read-only decisions

At verified commit a9283f953f9adf75745c1910bedfaeaa6b422de1, Chesty profile chestyorchestrator and the named mrx_ceo profile received the planning row, collision evidence, proposed identity, official-source observations and exact paths, corpus boundaries, and current AI Atom Brain, Search Atlas, Summit, and release controls in separate supplied-text-only sessions. Tool access was limited to the non-writing clarify toolset; neither session called a tool or changed any repository, Git, task, image, deployment, purchase, or external system. Both used the existing subscription-included openai-codex route at $0.00 incremental cost. Codex remains sole writer and release owner.

Chesty session: 20260831_055135_e43879

    CHESTY_ARTICLE301: APPROVE_REDEFINED
    CHESTY_DECISION: Approve the redefined Article 301 for local drafting and validation only, with push, deployment, live verification, and Search Atlas recrawl blocked until all five legal receipts exist.
    CANONICAL_TITLE: Texas RRC Field Classification Codes: G, O, B, and Associated Field Numbers
    JOB_BOUNDARY: Explain G, O, and B field classifications, og_field and og_field_info row cardinality, and exact-source associated-field pointer handling without inferring any geographic, asset, ownership, production, reserve, valuation, transaction, or outcome relationship.

mrx_ceo session: 20260831_055236_a1494d

    MRX_CEO_ARTICLE301: APPROVE_REDEFINED
    MRX_CEO_DECISION: Preserve program row MRX1000-0849 / factory-queue:MRX-AEO-06044 and replace the duplicative planning identity with the supplied canonical identity for local drafting and fail-closed gates only.
    CANONICAL_TITLE: Texas RRC Field Classification Codes: G, O, B, and Associated Field Numbers
    JOB_BOUNDARY: Limit Article 301 to G/O/B semantics, distinctions between og_field and og_field_info row cardinality, and associated-field pointer integrity, with local drafting and verification only until all five legal receipts exist.

The initial mrx_ceo verdict placed the approval token on the MRX_CEO_ARTICLE301 line and a sentence after the machine-gated MRX_CEO_DECISION label. A separate supplied-text-only correction session restated the same approval in the deterministic token format without changing any identity, boundary, source role, or release judgment.

mrx_ceo correction session: 20260831_060316_50c050

    MRX_CEO_ARTICLE301_CORRECTION: APPROVE_REDEFINED
    MRX_CEO_DECISION: APPROVE_REDEFINED
    MRX_CEO_CORRECTION: The exact machine-readable decision token restates the existing approval; all Article 301 identity and boundary fields remain unchanged.

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the direct answer. Explain the exact G/O/B codes, the difference between og_field and og_field_info, the one-row/two-row cardinality rule, and source-scoped pointer resolution. Add information gain through an evidence-row template, explicit unresolved and version-drift states, and a deterministic reconciliation workflow. Attach every material claim to a primary RRC source and stable claim ID. Keep the direct answer, metadata, FAQ entities, and Article/FAQ schema aligned. Link semantically to the Texas hub, Article 299, the field-search worksheet, and the next step. Do not promise ranking, indexing, retrieval, or LLM citations.

Finalize the canonical title before image production. Render that exact title into a unique hero and use the same asset for the visible hero, Open Graph, Twitter, Article schema, and share identity. Use a materially distinct in-body composition containing the exact primary keyword. Fail closed on factual, citation, originality, editorial, compliance, image, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live verification, or reconciliation failure.

## Release boundary

Article 301 may enter automated local editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, and receipt gates. Five production legal receipts remain missing, so the article may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl.
