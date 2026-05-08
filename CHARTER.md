# Bashful 2.0 — Charter

The why. What this project exists to do, what it won't compromise on.

---

## Why this exists

Bashful Beauty is a 20+ year, 4.9-star (181 Google reviews) waxing and skincare
studio in Rockwall, TX, owned by Doe Hernandez. The current site
(bashfulbeauty.co) is a single-page Carrd template that hides the brand: no
reviews surfaced, no team, no per-service pages, no SEO traction, dated
typography. Bashful 2.0 replaces it with a static, photography-forward,
multi-page site that looks as good as the studio's reputation reads — and that
sends qualified bookings into Square Appointments.

---

## North star

The website drives Square Appointments bookings — every page exists to make
"book now" feel like the obvious next step, and Google / AI search engines must
find Bashful Beauty when locals ask for waxing, facials, brows, or lashes in
Rockwall.

---

## What we won't compromise

- **Square is the source of truth for service pricing.** Per-service prices
  never live on the site (memberships are the only exception). Doe edits Square,
  the world sees it; we don't double-maintain.
- **Mobile-first.** 70-80% of spa traffic is mobile. The persistent
  `MobileBookingBar` is non-negotiable.
- **No AI-slop visuals.** No Inter / Roboto / system-ui defaults, no purple
  gradients, no generic rounded-card grids. Playfair Display + Lato, blush /
  rose gold / cream, watercolor atmosphere.
- **Static-first, zero JS by default.** Astro islands only where interactivity
  is genuinely needed. Core Web Vitals = ranking signal.
- **AI search engines are first-class.** `GPTBot`, `ClaudeBot`, `PerplexityBot`,
  `Google-Extended` are explicitly allowed in `robots.txt`; every page ships
  JSON-LD `LocalBusiness` / `FAQPage` / `Service` schema.

---

## Voice (project-specific)

How this project sounds in copy, headlines, alt text, and meta descriptions.

- Warm, confident, conversational. "Come see us at the cottage" beats
  "Visit our location."
- Editorial cadence in headings; benefit-led body copy.
- Small-town premium — proud of Rockwall, not pretending to be Beverly Hills.
- Never "leverage", "premier destination", "luxury experience" — Carrd-template
  filler that the new site is explicitly killing.
- Membership math gets shown, not implied. "$55/mo Brazilian — saves you $120/yr
  vs. per-visit."

---

## Out of scope (forever — different from BACKLOG "not now")

- **A full price list on the site** — Square Appointments is the source of
  truth for every line item. Maintaining a duplicate is shipped maintenance
  debt.
- **A standalone gallery page** — "A dedicated gallery page is a bounce
  factory." Photography is woven into context (homepage, service pages, about).
- **Embedded Square iframe booking** — `Book Now` opens the Square booking URL
  in a new tab. No iframe, no API integration.
- **A CMS.** Services, team, FAQ, testimonials live as typed TypeScript
  constants in `src/data/*.ts`. Doe edits via PR or asks Ray.
- **React.** Components are `.astro` files. Islands only when truly needed.
- **A blog at launch.** Captured in BACKLOG / Phase 3 if SEO data warrants it,
  not before.

---

## Customers / audience

- **Primary:** Women 25-55 in Rockwall / Heath / Rowlett / Royse City / Garland
  / Fate / Forney searching for "Brazilian wax near me", "facials Rockwall",
  "lash lift Rockwall TX". Mobile-first, comparison-shopping, want to see real
  faces and real reviews before booking.
- **Secondary:** Men booking Manzilians, brows, or back waxing — currently
  underserved by spa marketing, explicitly addressed in the waxing page's male
  sub-group.
- **Tertiary:** AI-search users ("what's the best waxing studio in Rockwall?")
  — served via JSON-LD schema and conversational page copy.

---

## Decision-locks (architecture / scope)

Decisions that prevent re-litigation. `/plan` reads this to know what NOT to
revisit.

- **2026-03-24** — Astro 6 + Tailwind v4 (CSS-first config, no
  `tailwind.config.ts`) — chosen over Next.js 16 because this is a static
  marketing site, not an app. Zero JS by default → faster Core Web Vitals.
  Alternatives considered: Next.js 16 (rejected — too heavy), Carrd v2
  (rejected — same trap as v1).
- **2026-03-24** — 7 pages, not 17 — leaner per-page SEO authority. Pages:
  `/`, `/waxing`, `/facials`, `/beauty-services`, `/about`, `/contact`, `/faq`,
  plus `/book` redirect. Alternatives: 17-page tree from the original plan
  (rejected — too thin per page).
- **2026-03-24** — No pricing on site except memberships. Square = source of
  truth. Memberships ($55/mo Brazilian, $80/mo Manzilian) get prominence.
- **2026-03-24** — Netlify (staging) + Cloudflare Pages (production at
  bashfulbeauty.co) — staging-first per `rules/deployment-policy.md`.
- **2026-03-24** — Self-hosted Fontsource (Playfair Display 400/500/600/700 +
  Lato 300/400/700) — no Google Fonts CDN dependency.
- **2026-03-24** — Square Appointments stays as external link
  (`https://squareup.com/appointments/book/9a6e447d-913f-46ae-becf-8c4f786ebeb8/F3XKQZW5S5M0V/services`).

---

## Charter drift triggers

- If the site ever takes payments directly (Square embed → integrated checkout)
  → charter review.
- If a CMS gets introduced (data leaves `src/data/*.ts`) → charter review.
- If Bashful opens a second location → charter review (single-LocalBusiness
  schema assumption breaks).
- If we move off Astro → charter review (Astro decision is foundational, not
  cosmetic).
