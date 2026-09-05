# ms3dm.tech services-first redesign plan (Sep 2026)

**Status:** Phase 1 implemented on this branch (content/CTA); Phase 0 plan retained  
**Branch:** `docs/services-first-redesign-plan`  
**Owner:** Ryan Franklin  
**Repo:** https://github.com/ryfranklin/ms3dm  
**Related vault notes:** `ms3dm-site-business-revamp-prompt`, `campaigns/2026-09-services-first-content-campaign`, `consulting/ai-data-strategy-offering`

This plan turns the live site into a commercial surface for productized
build-and-deliver engagements. It is grounded in the files that exist on `main`
as of 2026-09-05. Phase 1 is content and CTA work on the existing design system;
it is not a visual redesign.

---

## 1. Current-state diagnosis

### What already ships on `main`

Home (`src/views/Home/Home.js`) already reads in this order:

1. `Hero`
2. `Solutions` (five pillars)
3. `ProofSection` (capability tags, full-bleed)
4. `CaseStudies` (selected work)
5. `Engagements` (Crawl / Walk / Run)
6. `LatestWriting` (Substack strip)
7. `AboutSection`
8. `CallToAction`

Much of the Aug 2026 business-perspective revamp is already merged:

- Data Warehousing & BI is pillar `01` in `Solutions.js`.
- Selected work mixes proven delivery (enterprise DW, LOB + private assistant,
  lakehouse pipelines, Snowflake/Cortex) with Homebase and AI demos.
- `Engagements.js` already names Crawl / Walk / Run and links
  "Start with a readiness assessment" to `/contact-page`.
- `ProofSection.js` leads with Data & BI and Governance groups.
- Voice rules (no em dashes, no client/employer names) are largely respected on
  Home after the Plexus cleanup commit.

### What still blocks a services-first funnel

| Gap | Evidence on disk | Why it matters |
| --- | --- | --- |
| Hero CTA is soft | `Hero.js` primary: "Start a conversation" → `/contact-page` | Buyers do not see Assessment as the default product |
| Bottom CTA is soft | `CallToAction.js` same copy; secondary is mailto | Campaign and Assessment 1-pager need a hard next step |
| No Calendly | No calendly URL in Home, Contact, or layouts | Campaign funnel stops at a form instead of a booked discovery |
| Offers not priced on site | `Engagements.js` describes stages, not SKUs or ranges | Prospects cannot self-qualify; LinkedIn CTAs have nowhere to land |
| Fractional naming drift | Solutions pillar `05` is "Fractional CTO & Advisory"; offer doc is "Fractional Head of Data" | Messaging split between hire-me-adjacent CTO and productized Head of Data |
| Mode A invisible | Not named on Home | Highest-margin managed delivery has no site language |
| No `/services` route | `src/views/routes.js` has no services path; `src/views/Service/` is unused template chrome | Campaign and Assessment 1-pager want a durable services URL |
| Nav is thin | `src/layouts/navigation.js` Company = About + Contact only; Topbar also links Homebase + Compendium | No Services entry; commercial intent is buried under Company |

### Routes and nav (actual)

- Routes: `/`, `/homebase`, `/compendium`, `/contact-page`, `/about`, plus leftover
  template paths (`/web-basic`, portfolio, auth placeholders).
- Topbar / Sidebar: Homebase, Compendium, Company dropdown (About, Contact).
- Contact form exists and is wired (SES Lambda); that stays. Calendly is additive.

### Positioning gap in one line

The site currently proves capability. It does not yet sell fixed-scope products
with a clear default purchase (AI Readiness Assessment) and a booked discovery
path. That is the Phase 1 job.

---

## 2. Positioning thesis

**ms3dm.tech sells productized build-and-deliver services, not staffing.**

Companies do not need another "open to work" data leader. They need someone who
has already built the stack (governed lakehouse, ML platform, guardrailed agents,
Mode A managed ops) and will ship it as a fixed-scope engagement.

Implications for copy and IA:

- Lead with what buyers purchase (Assessment, Lakehouse, ML Platform, Fractional
  Head of Data, Mode A), not with a resume or a demo tour.
- Homebase, Mission Control, and Guardrailed Agent are receipts that prove the
  pattern. They are not the product catalog.
- Deflect recruiter / FTE Director-VP framing toward services. No "hire me"
  language on commercial surfaces.
- Mid-market ICP: roughly $50M to $1B revenue, 5 to 50 person data/engineering
  orgs, AWS-preferred, need architecture plus delivery (not staff-aug only).

---

## 3. Offers (what every CTA points at)

| Offer | Duration | Price range | Funnel role |
| --- | --- | --- | --- |
| AI Readiness Assessment | 2 to 4 weeks | $15k to $25k fixed | **Default entry.** Inventory, quality/governance gaps, feature readiness, executive roadmap |
| Lakehouse Architecture Design | 4 to 8 weeks | $30k to $60k fixed | Walk: medallion, Iceberg/Glue (or Snowflake where data lives), IaC, governance |
| ML Platform Architecture | 4 to 8 weeks | $30k to $60k fixed | Walk/Run: feature store, SageMaker, MLOps, agent design |
| Fractional Head of Data | Ongoing | $10k to $20k/mo or $200 to $275/hr | Embedded leadership when not ready for full-time VP |
| Mode A managed delivery | Multi-month | Retainer + AWS pass-through (or all-in monthly) | Highest margin: operate the platform in a per-client AWS Org account |

**Publish guidance for Phase 1:** show Assessment range on Home Engagements and
any `/services` surface. For Lakehouse / ML / Fractional / Mode A, either show
ranges or "scoped after Assessment" so the site does not invent precision it
does not have. Prefer showing the ranges already used in campaign and offering
docs; they are intentional, not placeholders.

---

## 4. Crawl → Walk → Run engagement ladder

Site language (already close in `Engagements.js`):

1. **Crawl:** AI & Data Readiness Assessment (default next step).
2. **Walk:** Platform, warehouse, and BI modernization (Lakehouse Architecture
   and related foundation work).
3. **Run:** ML and guardrailed agents (ML Platform Architecture and agentic
   delivery).

**Mode A / B / C** is *how* work lands (managed in practice account / delivery in
client account / DIY handoff), not a fourth ladder rung on the homepage. Name
Mode A under Walk/Run follow-ons and on a future `/services` page so managed
buyers can find it without confusing the ladder.

Fractional Head of Data sits beside the ladder: leadership without a full-time
hire, often feeding Assessment or architecture work.

---

## 5. IA / nav / CTAs

### Information architecture (Phase 1 target)

```
/                    Home (commercial spine: proof + ladder + Assessment CTA)
/services            Optional Phase 2: expanded offers + Mode A (or keep ladder on Home only)
/homebase            Receipt / platform deep dive (unchanged role)
/compendium          Writing index
/about               Practice / principles
/contact-page        Form + Calendly embed or prominent link
```

### Nav changes (Phase 1)

In `src/layouts/navigation.js` (and any Topbar/Sidebar copy that hardcodes
links):

- Add **Services** (href `/services` if Phase 2 ships in the same PR wave; else
  href `/#engagements` or a Home anchor until the route exists).
- Keep About and Contact under Company, or promote Contact as a top-level CTA.
- Do not bury Assessment behind Company-only.

Recommended Topbar primary actions:

1. Primary button: **Start with a readiness assessment** → Calendly *or*
   `/contact-page#assessment` (pick one canonical URL and reuse everywhere).
2. Secondary: **Book a 30-min discovery** → Calendly event titled
   `ms3dm.tech Discovery: AI & Data Readiness`.

### CTA rules

- Hero primary: Assessment (not "Start a conversation").
- Hero secondary: Selected work or Book discovery (Calendly).
- Engagements: keep Assessment CTA; add price band for Assessment.
- CallToAction: Assessment primary; Calendly secondary; mailto tertiary or in
  footer only.
- Contact page: form stays; add Calendly as equal-weight path.
- One Calendly URL in a single config/constant if possible so it does not drift.

---

## 6. Homepage section plan

Keep section order. Adjust copy and CTAs so the page sells the ladder.

| Section | File | Phase 1 intent |
| --- | --- | --- |
| Hero | `src/views/Home/components/Hero/Hero.js` | Overline already spans practice; tighten headline/subhead toward productized delivery; primary CTA = Assessment; secondary = work or Calendly |
| Solutions | `.../Solutions/Solutions.js` | Keep five pillars with Data Warehousing & BI first. Align pillar 05 naming toward Fractional Head of Data (or dual-label carefully). Avoid hire-me tone |
| ProofSection | `.../ProofSection/ProofSection.js` | Keep; minor tag hygiene only if needed |
| CaseStudies | `.../CaseStudies/CaseStudies.js` | Keep proven DW/BI + pipelines + LOB + Homebase + selected demos. No new client names. Optional: reorder so foundation cards sit above pure demos if scan path still feels AI-demo-first |
| Engagements | `.../Engagements/Engagements.js` | Expand stage cards with offer names and Assessment price band; mention Mode A as managed follow-on in intro or footnote; CTA stays Assessment |
| LatestWriting | `.../LatestWriting/` | Unchanged; campaign essays land here via Substack fetch |
| AboutSection | `.../AboutSection/AboutSection.js` | Keep governance / guardrails / IaC principles; ensure "consultancy" reads as delivery practice, not staffing |
| CallToAction | `.../CallToAction/CallToAction.js` | Assessment + Calendly |

**Voice for homepage:** foundation first (warehousing, BI, governed pipelines),
then platforms, then AI. Selected work already supports that; CTAs must match.

---

## 7. Voice rules (non-negotiable)

- **No em dashes** anywhere in published copy. Use commas, colons, semicolons,
  parentheses, or full stops.
- **No client names, employer names, project/product names, or industry-identifying
  detail** on the site. Capability-level language only ("an enterprise data
  warehouse," "a regulated-industry operator").
- **No invented metrics**, logos, or fake case studies. Real numbers only when
  genericized and true.
- **No hire-me / open-to-work / staff-aug framing** on commercial pages.
- Match existing voice: direct, technically precise, specifics over adjectives.
- Reuse the design system: hairline cards, mono capability tags, full-bleed
  bands, `var(--*)` tokens. No new visual patterns in Phase 1.

Internal grounding (vault / consulting notes) may name real systems for authors.
Those names must never appear in site output.
---

## 8. Phased plan

### Phase 0: This docs PR (done)

- Add `docs/redesign-plan-2026-09.md`.
- Point README at the plan.
- Mirror into the vault campaigns folder for second-brain access.
- Originally docs-only; Phase 1 site changes now land on the same branch.

### Phase 1: Content on the existing design system (implemented on this branch)

Goal: Assessment is the obvious default next step; Calendly is live; offers are
named; voice stays clean.

**Done in this PR:**

- Hero, Engagements, CallToAction, Contact copy/CTA updates.
- Fractional Head of Data naming on Solutions, AboutSection, and About page.
- Nav: Services → `/#engagements`; Topbar/Sidebar Assessment + discovery CTAs.
- Single Calendly constant in `src/config/calendly.js` (placeholder URL until
  the live discovery event is published).
- Assessment price band ($15k to $25k) on Engagements; Walk/Run offer names;
  Mode A managed follow-on footnote.
- Footer Assessment / Calendly / mailto consistency.

Still optional / deferred: CaseStudies reorder; live Calendly URL swap;
production build verification in CI.

Out of scope for Phase 1: see section 10.

### Phase 2: Optional /services page

- Rebuild Service view onto the current design system, or add a new Services view.
- Add route in routes.js and export from views/index.js.
- Expand Crawl/Walk/Run into full offer sections with deliverables and ranges.
- Document Mode A vs delivery vs handoff.
- Nav Services points to /services.
- Skip if Home Engagements plus Assessment CTA already convert.

### Phase 3: Polish

- Assessment 1-pager PDF hosted and linked from site plus LinkedIn.
- Contact confirmation email / Calendly intake questions aligned to ICP.
- Remove or hide unused template routes once confirmed unused.
- Visual polish only if content converts; still within existing tokens.
- Analytics events on Assessment CTA and Calendly clicks if analytics exists.

---

## 9. Success metrics

Aligned with the Sep 2026 services-first campaign (30-day window as the first
measurement band):

**Leading (site + content)**

- Assessment CTA click-through from Home (Hero + Engagements + footer CTA).
- Calendly bookings attributed to ms3dm.tech referrer.
- Engagements / Services section scroll reach (if analytics available).

**Middle (pipeline)**

- At least 8 discovery conversations booked in the campaign window.
- At least 3 serious ICP fits (mid-market, data/AI budget, not recruiter).
- Assessment 1-pager sent or downloaded at least 10 times.

**Lagging (revenue motion)**

- At least 2 written Assessment proposals (15k to 25k USD).
- At least 1 interest in Lakehouse/ML (30k to 60k USD) or Mode A / Fractional.
- Recruiter InMail is noise to deflect, not a success metric.

**Site-quality gates for Phase 1 merge**

- Production build passes.
- No em dashes introduced in touched copy.
- No client/employer/project names.
- Primary commercial CTAs resolve (Contact and/or Calendly).

---

## 10. Out of scope for Phase 1

- Visual redesign, new design tokens, or new card patterns.
- Dependency upgrades or CRA ejection.
- Rewriting Homebase or Compendium content.
- Building a CMS or Strapi content model for offers.
- Publishing employer/client case studies with names or logos.
- Staff-aug packaging.
- Full Mode A pricing essay on the site (link to Substack when ready).
- Forcing /services if Home ladder plus CTA is enough for campaign start.
- CloudAgent-based implementation of this repo (local checkout plus gh only).

---

## 11. File touch list for Phase 1

Grounded in paths that exist on main today:

| Path | Change |
| --- | --- |
| src/views/Home/components/Hero/Hero.js | Assessment-first primary CTA; optional Calendly secondary; copy pass |
| src/views/Home/components/Engagements/Engagements.js | Offer names, Assessment price band, Mode A mention, keep ladder |
| src/views/Home/components/CallToAction/CallToAction.js | Assessment + Calendly; reduce soft conversation framing |
| src/views/Home/components/Solutions/Solutions.js | Align fractional naming; no structural redesign |
| src/views/Home/components/CaseStudies/CaseStudies.js | Optional reorder for foundation-first; no new named clients |
| src/views/Home/components/AboutSection/AboutSection.js | Light copy if fractional/Mode A language needs consistency |
| src/views/Home/Home.js | Only if section order or Engagements anchor id is added |
| src/views/ContactPage/ContactPage.js (+ components) | Calendly + Assessment framing beside existing form |
| src/layouts/navigation.js | Services entry (route or #engagements anchor) |
| src/layouts/Main/components/Topbar/Topbar.js | Optional primary Assessment/Calendly control |
| src/layouts/Main/components/Sidebar/.../SidebarNav.js | Mirror nav changes for mobile |
| src/layouts/Main/components/Footer/Footer.js | Assessment / Calendly / mailto consistency |
| src/config/ (or new constant module) | Single Calendly URL constant |
| src/views/routes.js | Only if Phase 1 includes a Services route early |
| src/views/index.js | Only if a new Services view is exported |
| README.md | Already points at this plan after Phase 0 |

Likely untouched in Phase 1: ProofSection.js, LatestWriting/, Homebase view, theme tokens, blocks/, template Service/ view until Phase 2, strapi-backend, deploy workflow.

---

## 12. Implementation checklist (for the Phase 1 PR author)

1. Branch from latest main (not from this docs branch unless preferred).
2. Add Calendly URL constant; verify event title matches campaign.
3. Update Hero, Engagements, CallToAction, Contact, nav/sidebar/footer.
4. Align Fractional Head of Data naming on Solutions.
5. Grep touched files for em dashes and forbidden names.
6. Run production build.
7. Manual pass: mobile nav, CTA targets, Contact form still submits.
8. Open PR titled for content/CTA (not this docs PR).
9. After merge: update campaign checklist boxes in the vault campaign note.

---

## 13. Open decisions (Ryan)

1. Calendly vs Contact form as primary: recommend Calendly primary for discovery, form as alternate; confirm live URL before Phase 1 merge.
2. Publish price ranges on site: Assessment yes; others yes vs scoped after Assessment.
3. Phase 2 /services: ship with Phase 1, immediately after, or wait for campaign metrics.
4. Fractional label: Fractional Head of Data vs keep Fractional CTO and Advisory vs show both with Head of Data as the commercial SKU.

---

## Document history

- 2026-09-05: Phase 0 created from local main inspection and vault campaign / offering / revamp notes.
- 2026-09-05: Phase 1 content/CTA implementation landed on `docs/services-first-redesign-plan` (Assessment CTAs, Calendly placeholder constant, Engagements pricing/offers, Fractional Head of Data naming, Services nav).

