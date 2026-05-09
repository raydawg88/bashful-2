# Bashful 2.0 — Product Roadmap

What this product becomes over time. Phases, milestones, vision shape.
NOT a sprint plan. Engineering work lives in `BACKLOG.md`.

---

## Where we are right now

Concept-stage marketing site for Bashful Beauty Spa (Rockwall, TX). The
foundation is built and deployed to a staging URL: 7 pages live, design system
in `src/styles/global.css` (Playfair + Lato, blush/rose-gold/cream), full data
layer in `src/data/*.ts` cataloging 100+ services across 7 categories. Two
homepage concept variants (`mock-2`, `mock-3`) exist alongside the canonical
`index.astro` while design direction settles. The current `feat/initial-site`
branch is the only branch — no PRs merged yet, production domain
(bashfulbeauty.co) still points at the old Carrd site.

---

## Phase 1 — Foundation + design lock (now)

### What this phase is for

Replace the Carrd single-pager with a multi-page Astro site that looks like
Bashful's reputation. Lock the visual direction by picking among the homepage
mocks (`index`, `mock-2`, `mock-3`), wire real photography in, surface the
4.9-star / 181-review social proof, and put a persistent `Book Now` CTA on
every page. End-state: a site Doe is proud to show, ready to swap DNS to.

### What the product does by end of this phase

- 7 production pages plus `/book` redirect to Square Appointments
- One homepage design — chosen from the three mocks, others retired
- Real Google reviews displayed (replace placeholder testimonials marked
  `verified: false`)
- Real business hours filled in (currently `hours: [] as BusinessHours[]`)
- `LocalBusiness` JSON-LD with real hours; `FAQPage` schema on `/faq`
- Persistent `MobileBookingBar` and desktop header `Book Now` on every page
- Membership pricing visible and front-and-center (Brazilian $55/mo, Manzilian
  $80/mo) with savings math
- Google Maps embed on `/contact` showing "the cottage behind Bin 303"
- Favicon, OG image, branded share preview

### Milestone — how we know this phase is done

DNS is swapped: bashfulbeauty.co serves the new site from Cloudflare Pages, the
old Carrd site is archived, and Doe has signed off on the visual direction.

---

## Phase 2 — Brand depth + AI search (next)

### What this phase unlocks

The site moves from "as good as Carrd was" to "actively pulling new clients."
This is where reviews compound, AI search engines start citing the site, and
the team page makes the spa feel personal — spa services are intimate, clients
want to see who's touching their face.

### What the product will do by end of this phase

- Team page section on `/about` with bios + headshots for Doe and the
  ~10-person team (currently 8 placeholder slots in `src/data/team.ts` are
  commented out with TODO)
- Real testimonials data (replace 4 placeholder reviews currently marked
  `verified: false`)
- Photography refreshed — professional shoot or curated Shutterstock + AI
  imagery, replacing the 11 carryover Carrd images
- AI search optimization: `GPTBot` / `ClaudeBot` / `PerplexityBot` /
  `Google-Extended` already allowed in `robots.txt`, plus conversational
  "what is a Brazilian wax / what's a hydrafacial" content blocks designed for
  AI extraction
- Voyage Dallas Magazine feature surfaced on `/about`
- Gift cards link (Square Gift Cards external URL)
- Pre-wax / post-wax care as scannable sections on `/waxing` (data already in
  `src/data/faq.ts` — `preWaxCare` 7 items, `postWaxCare` 8 items)

### Milestone

Bashful Beauty appears on page 1 of Google for "waxing Rockwall TX" and is
cited by at least one AI search engine (ChatGPT / Perplexity / Google AI
Overviews) when asked "where to get waxed in Rockwall."

### Triggered by

- Phase 1 milestone hit (DNS swapped, Doe approves)
- 2-4 weeks of indexing data accumulated
- Doe books or completes a professional photoshoot

---

## Phase 3 — Growth surfaces (later)

### Vision

The site becomes a marketing engine, not just a brochure. Blog content seeds
long-tail SEO, Instagram feed integration brings the studio's strongest visual
asset on-site, and instrumentation lets us see what's converting.

### What the product will do

- Blog (data scaffolding already in `src/data/blog-posts.ts`, route already
  exists at `/skincare-stories/[slug].astro`) — first 3-5 posts on
  evergreen waxing / skincare topics
- Instagram feed integration on homepage (5.8K followers @bashfulbeautyco —
  strongest underused asset)
- GA4 + conversion tracking on `Book Now` click-throughs to Square
- Cancellation policy page already scaffolded (`/cancellation-policy`) —
  finalize content with Doe
- Products page or section: Fur Professionals (waxing) and Grande Cosmetics
  (lashes)

### Milestone

A measurable funnel: visitors → `Book Now` clicks → Square completed bookings,
with attribution back to which page / channel sourced them.

---

## Year 2 — vision shape (loose)

Direction-setting, not commitment.

- Email capture + automated post-visit review request (drive Google review
  count from 181 toward 300+)
- Loyalty / rewards integration if Square ships an API for it
- A second-location playbook if Doe opens one (would trigger charter review —
  single-`LocalBusiness` schema would need to fork)

---

## Out of scope — forever, not just deferred

- **A full per-service price list on the site.** Square is the source of
  truth. Maintaining a duplicate is shipped debt.
- **A standalone gallery page.** Photography is woven into context.
- **Embedded Square iframe booking.** External link only, opens in new tab.
- **A CMS.** Data lives in `src/data/*.ts` as typed TypeScript constants.
- **React.** Astro components only. Islands when truly needed.

---

## Decisions log (architecture / scope)

- **2026-03-24** — Astro 6 + Tailwind v4 over Next.js 16. Static marketing site
  doesn't need a React framework; zero JS by default → better CWV → better
  ranking.
- **2026-03-24** — 7 pages, not 17. Leaner per-page SEO authority. Smaller
  services grouped under `/beauty-services` (lashes, brows, skin lightening,
  spray tans, teeth whitening).
- **2026-03-24** — No pricing on site except memberships. Square = source of
  truth.
- **2026-03-24** — Netlify staging + Cloudflare Pages production. Per
  `rules/deployment-policy.md`: Netlify for concept, CF for prime time.
- **2026-03-24** — Self-hosted Fontsource over Google Fonts CDN. No external
  font dependency.
- **2026-03-24** — Square Appointments stays external (link, not embed).
- **2026-03 (later)** — Three homepage mocks built (`index`, `mock-2`,
  `mock-3`) for design exploration. Phase 1 milestone retires two of them.

---

## How this differs from BACKLOG.md

| ROADMAP (this file) | BACKLOG.md |
|---|---|
| Product becomes X | We ship Y next |
| Phases / milestones | Ranked items |
| Customer-facing language | Engineering-facing language |
| Updates when phase shifts | Updates every session |
