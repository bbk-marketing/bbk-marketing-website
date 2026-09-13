# BBK Marketing Solutions — SEO Content Map

Living internal document. Not linked from the site, not indexable — editorial/SEO
reference only. First created 2026-09-13 after auditing 24 published articles;
no equivalent document existed before this (confirmed by repo search — see
audit notes at the bottom).

Rules that apply to everything in this file:
- **Never** change a published article's URL/slug to "fix" SEO. URLs here are
  historical fact, not something this map gets to override.
- Adding a new article = add a row here first (cluster, primary keyword,
  intent, planned internal links), then write it.
- Related Reading sections stay in the 3–5 range for anything published from
  now on. Existing articles that exceed that are flagged below for a future
  pruning pass — not changed automatically.

## 1. Topic Clusters

Seven clusters, derived from actual article content (not the generic list a
brief might suggest). A cluster with 2 articles is kept separate when the
topic is strategically distinct (bilingual, regulatory) rather than forced
into a bigger bucket.

| # | Cluster | Articles | Notes |
|---|---|---|---|
| A | **Clinical Research Marketing Fundamentals & Buyer's Guide** | 1, 4, 11, 17 | Definitional/foundational content + vendor evaluation. Article 17 is the pillar for the bare term "clinical research marketing." |
| B | **Recruitment Funnel, Referrals & Metrics** | 2, 3, 7, 14, 18, 19, 20 | Largest cluster — funnel mechanics, terminology (lead/referral), KPIs, funnel-building. |
| C | **Multi-Site Strategy & Site Performance** | 12, 21, 24 | Centralized vs local, geography, Site-level scorecards. |
| D | **Advertising Channels & Recruitment Technology** | 9, 10, 13 | Meta Ads, video/AI presenter choice, pre-screening tech evolution. |
| E | **Participant Communication, Experience & Automation** | 8, 15, 16 | Follow-up speed, pre-Site-call experience, human-vs-AI balance. |
| F | **Bilingual & Localization Strategy** | 6, 23 | Thin (2 articles) but strategically core to BBK's positioning — priority growth area, not a cluster to merge away. |
| G | **Regulatory / IRB & Recruitment Materials** | 5, 22 | Thin (2 articles) but compliance stakes justify keeping it distinct rather than diluting into general marketing content. |

## 2. Keyword Map

Numbering matches original brief numbering (Article No.N), not publish order.

| # | Slug | Primary Keyword | Search Intent | Cluster |
|---|---|---|---|---|
| 1 | clinical-research-marketing-vs-healthcare-marketing | clinical research marketing (comparison angle) | Informational | A |
| 2 | clinical-trial-patient-recruitment-funnel | clinical trial patient recruitment | Informational | B |
| 3 | clinical-trial-recruitment-metrics-beyond-leads | clinical trial recruitment metrics | Informational | B |
| 4 | clinical-trial-digital-recruitment-strategy | clinical trial recruitment strategy | Informational | A |
| 5 | irb-review-clinical-trial-advertising | IRB review clinical trial advertising | Informational | G |
| 6 | spanish-clinical-trial-recruitment-localization | Spanish clinical trial recruitment | Informational | F |
| 7 | improve-clinical-trial-recruitment-without-more-ad-spend | improve clinical trial recruitment | Informational | B |
| 8 | slow-follow-up-clinical-trial-recruitment | clinical trial recruitment follow-up | Informational | E |
| 9 | meta-ads-clinical-trial-recruitment | Meta Ads for clinical trial recruitment | Informational/Commercial | D |
| 10 | clinical-trial-recruitment-videos-human-vs-ai | clinical trial recruitment videos | Informational/Commercial | D |
| 11 | clinical-trial-recruitment-marketing-partner | clinical trial recruitment marketing partner | Commercial investigation | A |
| 12 | multi-site-clinical-trial-recruitment-centralized-vs-local | multi-site clinical trial recruitment | Informational | C |
| 13 | clinical-trial-pre-screening-recruitment-evolution | clinical trial pre-screening | Informational | D |
| 14 | clinical-trial-recruitment-kpis | clinical trial recruitment KPIs | Informational | B |
| 15 | participant-experience-clinical-trial-recruitment | clinical trial participant experience | Informational | E |
| 16 | human-vs-automation-clinical-trial-recruitment | clinical trial recruitment automation | Informational | E |
| 17 | what-is-clinical-research-marketing | clinical research marketing (definitional/pillar) | Informational | A |
| 18 | lead-generation-vs-clinical-trial-participant-recruitment | lead generation vs participant recruitment | Informational | B |
| 19 | what-is-a-pre-screened-participant-referral | pre-screened participant referral | Informational/Navigational ("what is") | B |
| 20 | how-to-build-a-clinical-trial-recruitment-funnel | clinical trial recruitment funnel | Informational/Practical | B |
| 21 | geographic-targeting-clinical-trial-recruitment | clinical trial geographic targeting | Informational | C |
| 22 | preparing-recruitment-materials-for-irb-review | IRB recruitment materials | Informational/Practical | G |
| 23 | translation-vs-localization-clinical-trial-advertising | clinical trial advertising localization | Informational | F |
| 24 | how-to-measure-recruitment-performance-by-research-site | research site recruitment performance | Informational/Decision-support | C |

Secondary keywords / semantic terms live in each article's frontmatter
`tags:` array — that list already functions as the secondary-keyword set and
does not need duplicating here.

## 3. Cannibalization Watch

No pair needs merging. Two pairs share close territory and are handled via
differentiated angle + heavy reciprocal linking (the correct fix per the
brief — never auto-merge):

- **#1 vs #17** — both could rank for the bare term "clinical research
  marketing." #17 is explicitly the definitional pillar (title starts "What
  Is..."); #1 owns the comparison angle ("...Different From Traditional
  Healthcare Marketing"). Low risk as long as #17's H1/title keep the
  definitional framing and #1's keep the comparison framing.
- **#3 vs #14** — both about recruitment metrics. #3 is a narrower
  argument ("stop measuring by leads alone"); #14 is the comprehensive
  12-KPI framework and should be treated as the de facto metrics pillar for
  future internal linking. Already cross-linked both directions.

Two pairs look like duplicates at a glance but are a deliberate
pillar+deep-dive relationship, not cannibalization: **#6 → #23** (Spanish
localization → translation-vs-localization workflow deep dive) and
**#12/#21/#24** (multi-site strategy → geography → Site-level measurement).

## 4. Internal Linking Graph — Current State

Computed by scanning every article's `## Related Reading` section
(2026-09-13). No orphans — every article has ≥2 inbound links.

**Inbound link counts (lowest first — candidates for more inbound links):**

| Slug | Inbound |
|---|---|
| clinical-trial-recruitment-marketing-partner (#11) | 2 |
| clinical-trial-recruitment-videos-human-vs-ai (#10) | 4 |
| irb-review-clinical-trial-advertising (#5) | 4 |
| how-to-measure-recruitment-performance-by-research-site (#24) | 5 |
| multi-site-clinical-trial-recruitment-centralized-vs-local (#12) | 5 |
| translation-vs-localization-clinical-trial-advertising (#23) | 5 |
| ...remaining 18 articles | 6–13 |

**Outbound Related Reading counts that exceed the 3–5 guideline** (all from
incremental reciprocal-linking as new articles published — never pruned):

| Slug | Outbound count |
|---|---|
| clinical-trial-recruitment-kpis (#14) | 12 |
| clinical-trial-pre-screening-recruitment-evolution (#13) | 12 |
| what-is-clinical-research-marketing (#17) | 10 |
| multi-site-clinical-trial-recruitment-centralized-vs-local (#12) | 10 |
| spanish-clinical-trial-recruitment-localization (#6) | 9 |
| improve-clinical-trial-recruitment-without-more-ad-spend (#7) | 9 |
| clinical-trial-patient-recruitment-funnel (#2) | 9 |

**Recommended action (not yet executed — needs sign-off):** trim these seven
down to the 3–5 most topically relevant links (keep the newest + most
cluster-relevant, drop the rest), and recover #11's under-linking by adding
it to the Related Reading of 2–3 cluster-A-adjacent articles.

## 5. Site-Wide Technical/Structural Facts

Documented once here instead of repeated per article — true for all 24
posts identically:

- **Canonical**: self-referencing, auto-generated per page in `Layout.astro`
  (`new URL(Astro.url.pathname, Astro.site)`). No duplicate-canonical risk.
- **Sitemap**: `src/pages/sitemap.xml.ts` dynamically includes every
  non-draft, already-published post. No manual maintenance needed, nothing
  missing.
- **Structured data**: every post emits `BlogPosting` JSON-LD
  (`BlogPostLayout.astro`) — headline, description, dates, author (Org),
  publisher+logo, `articleSection` = category. Site-wide `Organization`
  schema in `Layout.astro`. **Gap: no `FAQPage` schema**, despite every
  single article having a "Frequently Asked Questions" H2 with Q/A pairs —
  this is free rich-snippet potential currently left on the table. **Gap:
  no `BreadcrumbList` schema** (site has a "← Back to Blog" link, not an
  actual breadcrumb trail or its markup).
- **OG/Twitter cards**: correct and per-article (real hero image + dimensions),
  not falling back to a generic site image.
- **Author**: always `Organization`, no fabricated personal bylines — correct
  per the "no crear autores ficticios" rule.
- **Category → cluster**: 4 frontmatter categories in
  `src/content.config.ts` (Clinical Research Marketing, Patient Recruitment,
  Business Growth, Industry Insights) map loosely but not 1:1 onto the 7
  clusters above — category is a display/filter label, cluster is the SEO
  grouping. Keep both; they serve different purposes.

## 6. Anomaly Found: Publish-Date Ordering

Article #19 (`what-is-a-pre-screened-participant-referral`) carries
`publishDate: 2026-09-22` — a leftover from the original 15-day-cadence
scheme, set *before* the user corrected the cadence to consecutive daily
dates starting at Article #20 (2026-09-08). Result: #19 currently sorts
*after* #20–#24 on `/blog` and in the sitemap `lastmod`, even though several
of those later articles' Related Reading treats #19 as an already-existing
prior article. Flagging for a decision, not changing it — this touches a
date, not a URL, but still shouldn't move without confirmation.

## 7. Service-Page Mapping (as the site actually is today)

There are **no dedicated service URLs** — `src/data/services.ts` defines 4
service cards, but their CTAs point to homepage anchors, and two of them
(`Clinical Research Marketing` and `Recruitment Creative & Content`) both
point to the same `#contact` anchor rather than distinct sections. Only
`#business-growth` and `#patient-recruitment` are real distinct anchors.
Every blog post's bottom CTA (`BlogPostLayout.astro`) is currently identical
across all 24 articles: "Request a Consultation" → `/#contact`, regardless
of cluster. A cluster-aware CTA (or at least a contextual in-body link to the
most relevant anchor) is a real, low-risk improvement — listed as an
On-Page recommendation, not yet built.

## 8. Content Gaps (for future article planning)

**High priority** (fills a thin cluster or closes a commercial gap):
- More bilingual/localization content (Cluster F has only 2 articles despite
  being core to BBK's positioning) — e.g. "Recruiting Hispanic Participants,"
  "Building a Bilingual Recruitment Team."
- A dedicated CRM/technology-stack article for Cluster D (recruitment CRM
  comparison, automation platform selection) — mentioned as a "future
  related article" in Articles 13/16/20's own briefs but never written.
- "Cost Per Referral vs Cost Per Lead" as its own focused piece — referenced
  as a future article in three separate existing articles' briefs (13, 14, 24)
  and never delivered; there's clear internal-link demand already.

**Medium priority** (extends an existing cluster):
- "How to Reduce Screen Failures in Recruitment Campaigns" (extends Cluster B)
- "Why Equal Advertising Budgets per Site May Be Inefficient" (extends
  Cluster C, already referenced from Articles 12/21/24)
- A Regulatory-cluster article specifically on pre-screening scripts and
  data handling (Cluster G is thin at 2 articles)

**Low priority** (complementary):
- "What Happens After Someone Responds to a Clinical Trial Ad?" (participant-side
  narrative, Cluster E)
- Additional therapeutic-area-specific recruitment pieces

## Audit method note

Confirmed via repo search (`find` across the whole project, excluding
`node_modules`/`.git`/`dist`) that no prior SEO map, keyword map, content
cluster doc, or internal-linking map existed before this file. This document
is therefore new infrastructure, not a replacement for anything.
