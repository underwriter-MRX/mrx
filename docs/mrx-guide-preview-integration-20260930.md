# Approved guide preview integration

Candidate: feature/mrx-guide-20260930. No deployment or database mutation performed.

The landing page now leads with the decision benefit, preserves the exact finished book title, displays the owner-approved infographic at left, and displays the original hardcover promotion detail above the real opt-in at right. Mobile leads with the book detail and form. It uses the native header, footer, and Travis launcher; the actual worksheet page is displayed. Homepage artwork uses the same approved composition. Original PNG bytes are retained; served WebP assets are lossless and decoded raw pixels compare exactly to both PNG originals. PDF bytes are unchanged.

The header phone icon opens an accurate setup-pending dialog and links to the existing booking page. It does not place a call. Replace only after the incoming GHL route is independently verified.

Consent v2 adds a separate `sms_ai_conversation` receipt with the complete disclosure and hash. Existing one-time SMS receipts are not converted into AI permission. Phone remains visible and optional unless a phone channel is chosen. AI-SMS permission includes the requested guide link, so that selection requests a single delivery attempt through the existing deduplicated sender. It does not authorize outbound AI calls. Marketing email and human-call permissions remain independent.

Apply the base guide migration first, then `20260930110000_guide_ai_sms_consent.sql`. Neither has been applied by this work. A GHL enrollment bridge that checks current consent, destination identity and DND is still required before AI replies can be described as active. No permissive enrollment tag was added. Existing guide sender must remain the only delivery owner to prevent duplicate workflow sends.

Validation: 25 scoped guide schema, API, delivery and surface tests pass. Astro check: 0 errors, 0 warnings, 30 hints. Built artifact passes rendered copy, SEO across 513 pages, authorship across 344 articles, and printed-image-text policy across 734 assets. Full `pnpm build` completed, including the final rendered grammar check. Scoped ESLint and Prettier checks passed. Browser verification and production release remain with the coordinator.
