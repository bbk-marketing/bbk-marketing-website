# BBK Marketing Solutions — SEO Content Map

Living internal document. Not linked from the site, not indexable — editorial/SEO
reference only. First created 2026-09-13 after auditing 24 published articles;
no equivalent document existed before this (confirmed by repo search — see
audit notes at the bottom).

**Status: initial audit + first optimization pass both complete** (2026-09-13).
Sections 4 and 6 below describe the *pre-optimization* state for the
historical record; see the "Executed" note at the end of each for what
actually changed.

Rules that apply to everything in this file:
- **Never** change a published article's URL/slug to "fix" SEO. URLs here are
  historical fact, not something this map gets to override.
- Adding a new article = add a row here first (cluster, primary keyword,
  intent, planned internal links), then write it.
- Related Reading sections stay in the 3–5 range for anything published from
  now on. Existing articles that exceed that are flagged below for a future
  pruning pass — not changed automatically.

## 1. Topic Clusters

Eight clusters, derived from actual article content (not the generic list a
brief might suggest). A cluster with 2 articles is kept separate when the
topic is strategically distinct (bilingual, regulatory) rather than forced
into a bigger bucket.

| # | Cluster | Articles | Notes |
|---|---|---|---|
| A | **Clinical Research Marketing Fundamentals & Buyer's Guide** | 1, 4, 11, 17 | Definitional/foundational content + vendor evaluation. Article 17 is the pillar for the bare term "clinical research marketing." |
| B | **Recruitment Funnel, Referrals & Metrics** | 2, 3, 7, 14, 18, 19, 20 | Largest cluster — funnel mechanics, terminology (lead/referral), KPIs, funnel-building. |
| C | **Multi-Site Strategy & Site Performance** | 12, 21, 24, 25 | Centralized vs local, geography, Site-level scorecards, budget allocation. |
| D | **Advertising Channels & Recruitment Technology** | 9, 10, 13, 26, 27 | Meta Ads, video/AI presenter choice, pre-screening tech evolution, recruitment CRM, AI in recruitment (where it helps vs. where humans stay essential). |
| E | **Participant Communication, Experience & Automation** | 8, 15, 16 | Follow-up speed, pre-Site-call experience, human-vs-AI balance. |
| F | **Bilingual & Localization Strategy** | 6, 23 | Thin (2 articles) but strategically core to BBK's positioning — priority growth area, not a cluster to merge away. |
| G | **Regulatory / IRB & Recruitment Materials** | 5, 22 | Thin (2 articles) but compliance stakes justify keeping it distinct rather than diluting into general marketing content. |
| H | **Research Site Growth & Business Development** | 28, 29 | New (2 articles) — the Site-side B2B angle (Sponsor/CRO visibility, positioning, capacity, growth systems, digital presence) as distinct from participant recruitment. Articles 28 and 29 name a combined set of follow-ups and a "Research Site Marketing & Growth" pillar, so this is a planned growth cluster, not a one-off. Maps to the `Business Growth` blog category / `/research-site-marketing` CTA. |

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
| 25 | equal-advertising-budgets-multi-site-clinical-trial-recruitment | multi-site recruitment budget allocation | Informational/Decision-support | C |
| 26 | crm-for-clinical-trial-recruitment | clinical trial recruitment CRM | Informational/Commercial investigation | D |
| 27 | ai-in-clinical-trial-participant-recruitment | AI in clinical trial recruitment | Informational/Decision-support | D |
| 28 | how-to-grow-an-independent-clinical-research-site | grow a clinical research site | Informational/Commercial investigation/Decision-support | H |
| 29 | digital-presence-clinical-research-site | clinical research site digital presence | Informational/Commercial investigation/Decision-support | H |

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

- **#27 vs #16 vs #10** — all touch "AI/automation vs. humans" in recruitment.
  #16 owns the broad automation-vs-human-follow-up angle (Cluster E); #10 owns
  the video-presenter choice (human vs AI avatar); #27 owns "AI in clinical
  trial recruitment" as a topic — where AI assists (matching, prioritization,
  summarization, routing, analytics) vs. where humans must stay (eligibility,
  consent, sensitive conversations). Keep #27's framing on *AI specifically*
  and #16's on *automation/follow-up workflow*; #27 links to #16 and #26.

- **#28 vs #17 vs #11** — all sit near "clinical research marketing for
  Sites." #17 is the definitional pillar; #11 is the vendor-evaluation guide
  (what a Site should look for in a recruitment marketing partner); #28 owns
  "grow a clinical research site" — how an independent Site builds its Study
  pipeline, positioning, capacity and growth systems. Keep #28's framing on
  *Site growth as an operating system* and avoid re-explaining the
  definition (#17) or vendor selection (#11); #28 links to both.

- **#29 vs #28** — #28 is the Site-growth overview and touches digital
  presence in a few sections; #29 is the dedicated deep dive on the Site
  website/online presence (participant vs. Sponsor/CRO paths, forms,
  trust signals, SEO, analytics). Keep #28 on *growth as a system* and #29
  on *the website and online presence*; they link to each other. Watch the
  planned "Website Strategy for Research Centers" article — it would overlap
  heavily with #29 and needs a clearly different angle (or should be folded
  into #29) before it is written.

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

**Executed (2026-09-13):** all seven curated down to 5 links each (topically
closest, not just "first 5"). #11's inbound went from 2 to 4 (added from
Articles #1 and #4, alongside the 2 it already had from #12 and #17).
Recomputed the full graph after the edit: minimum inbound across all 24
articles is now 4, no article exceeds 8 outbound. Only content edited was
the `## Related Reading` link lists — no body copy, titles, or URLs touched.

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
  schema in `Layout.astro`. **Executed (2026-09-13): added `FAQPage`
  schema**, extracted directly from each post's raw markdown body
  (`src/utils/faq.ts`) so it can never diverge from the visible FAQ
  section — zero content changes needed, all 24 posts already had exactly
  5 Q&A pairs in a parseable format. **Executed: added `BreadcrumbList`
  schema** (Home > Blog > Article) — structured data only, no new visible
  breadcrumb UI (that's a separate, larger design decision if wanted later).
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

Article #19 (`what-is-a-pre-screened-participant-referral`) carried
`publishDate: 2026-09-22` — a leftover from the original 15-day-cadence
scheme, set *before* the user corrected the cadence to consecutive daily
dates starting at Article #20 (2026-09-08). Result: #19 sorted *after*
#20–#24 on `/blog` and in the sitemap `lastmod`, even though several of
those later articles' Related Reading treats #19 as an already-existing
prior article.

**Executed (2026-09-13, with explicit sign-off):** corrected to
`2026-09-07` — same day as Article #18, immediately before #20, restoring
correct reading order. This is a metadata correction of a scheduling
mistake, not the "changing dates to fake freshness" the brief warns
against; only this one date field changed.

## 7. Service-Page Mapping (as the site actually is today)

There are **no dedicated service URLs** — `src/data/services.ts` defines 4
service cards, but their CTAs point to homepage anchors, and two of them
(`Clinical Research Marketing` and `Recruitment Creative & Content`) both
point to the same `#contact` anchor rather than distinct sections. Only
`#business-growth` and `#patient-recruitment` are real distinct anchors.
Every blog post's bottom CTA (`BlogPostLayout.astro`) used to be identical
across all 24 articles: "Request a Consultation" → `/#contact`, regardless
of cluster.

**Executed (2026-09-13):** the CTA now varies by the post's existing
`category` frontmatter field (not the finer 7-cluster taxonomy, since that
isn't a real data field yet and category already maps cleanly onto the 2
real dedicated anchors): `Patient Recruitment` → `/#patient-recruitment`,
`Business Growth` → `/#business-growth`, everything else keeps the original
`/#contact` CTA. No new frontmatter added; no anchor invented that didn't
already exist on the homepage.

## 8. Content Gaps (for future article planning)

**High priority** (fills a thin cluster or closes a commercial gap):
- More bilingual/localization content (Cluster F has only 2 articles despite
  being core to BBK's positioning) — e.g. "Recruiting Hispanic Participants,"
  "Building a Bilingual Recruitment Team."
- "Cost Per Referral vs Cost Per Lead" as its own focused piece — referenced
  as a future article in three separate existing articles' briefs (13, 14, 24)
  and never delivered; there's clear internal-link demand already.

**Medium priority** (extends an existing cluster):
- "How to Reduce Screen Failures in Recruitment Campaigns" (extends Cluster B)
- Follow-ups to Articles 28/29 (Cluster H), named in their briefs as future
  related pieces: "Business Development for Clinical Research Sites,"
  "Marketing a Research Site to Sponsors and CROs," "Website Strategy for
  Research Centers" (overlaps #29 — see Cannibalization Watch),
  "Branding for Clinical Research Organizations," "Building a Scalable
  Marketing Operation for a Research Site," "How Research Sites Can
  Differentiate Themselves." ("Building a Strong Digital Presence for a
  Research Site" was delivered as Article 29.) Cluster H has 2 articles, so
  these are the natural next additions.
- Follow-ups to Article 27 (Cluster D/E), named in its brief as future
  related pieces: "Automated Follow-Up for Incomplete Pre-Screening,"
  "AI-Assisted Trial Matching," "Recruitment Automation for Research Sites,"
  "Technology and the Participant Journey."
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
