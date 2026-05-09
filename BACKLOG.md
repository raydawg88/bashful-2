# Bashful 2.0 — Engineering Backlog

What we ship next, ranked, with done-when criteria. Auto-mode picks from
this. Office-hours updates this every session.

> Product vision lives in `ROADMAP.md`.

---

## Auto-mode

```yaml
autoMode: off  # Concept-stage marketing site for a real business — every
               # change is visible to the studio's customers. Keep manual
               # until Phase 1 ships and DNS is swapped, then re-evaluate.
               # Toggle via /auto-mode skill.
```

---

## Currently building (max 3)

What's actively in flight RIGHT NOW.

- [ ] **Pick a homepage and retire the other two mocks** — three concept
      homepages exist (`src/pages/index.astro`, `mock-2.astro`, `mock-3.astro`).
      Phase 1 can't ship while three live concept routes are deployed.
  - **PR / branch:** `feat/initial-site` (current working branch)
  - **Done when:** one homepage at `/`; the other two files are deleted; no
    references remain in nav or sitemap.

- [ ] **Fill in real business hours** — `src/data/business.ts` has
      `hours: [] as BusinessHours[]` with a `// TODO: Fill in actual business
      hours from Doe`. Blocks `/contact` and `LocalBusiness` JSON-LD schema.
  - **Done when:** `hours` array populated for all 7 days; `/contact` renders
    them; JSON-LD schema includes `openingHours`.

- [ ] **Replace placeholder testimonials with real Google reviews** —
      `src/data/testimonials.ts` has 4 entries marked `verified: false` with a
      TODO. The 4.9-star / 181-review Google profile is the strongest
      conversion asset on the site.
  - **Done when:** all entries `verified: true` with real reviewer attribution;
    placeholder TODO removed.

---

## Ranked

Most-leverage first. Auto-mode picks from the top.

### 1. Visual-verify the chosen homepage and ship Phase 1

- **Why:** Phase 1 milestone is "DNS swapped." Can't swap until the homepage
  reads like Bashful's reputation. Run `/visual-verify` (screenshots across
  viewports + Lighthouse + a11y) before approving.
- **Estimate:** M
- **Depends on:** "Pick a homepage" above
- **Done when:** Lighthouse mobile ≥ 90 across Performance / Accessibility /
  SEO / Best Practices on every page; screenshots reviewed; Doe approves.

### 2. Wire JSON-LD schema on every page

- **Why:** AI search optimization is a charter non-negotiable. `robots.txt`
  already allows GPTBot / ClaudeBot / PerplexityBot / Google-Extended; the
  schema is what they consume.
- **Estimate:** S
- **Depends on:** real hours filled in (#1 above for `LocalBusiness`)
- **Done when:** every page emits JSON-LD; `/faq` has `FAQPage`; service pages
  have `Service`; `/contact` and `BaseLayout` emit `LocalBusiness`;
  schema.org validator passes.

### 3. Membership savings math + visual prominence

- **Why:** charter says memberships get front-and-center treatment with
  savings math shown. Currently mentioned but not foregrounded with concrete
  "$55/mo vs $65 per visit = save $120/yr" copy.
- **Estimate:** S
- **Done when:** homepage and `/waxing` both display Brazilian + Manzilian
  pricing with calculated annual savings; CTA links straight to Square.

### 4. Google Maps embed on /contact

- **Why:** "The cottage behind Bin 303" needs a visual + parking instructions.
  `business.googleMapsEmbed` URL is already in `src/data/business.ts`.
- **Estimate:** S
- **Done when:** `/contact` renders the map iframe; parking note from
  `business.locationNote` is visible; mobile-friendly height.

### 5. OG image + branded share preview

- **Why:** When bashfulbeauty.co gets shared on Instagram/Messenger/iMessage,
  the preview is currently the default Astro placeholder.
- **Estimate:** S
- **Done when:** custom OG image exists; `BaseLayout` emits `og:image`,
  `twitter:card=summary_large_image`; preview validated via opengraph.xyz.

### 6. Real photography pass

- **Why:** Site currently uses 11 carryover images from the old Carrd site.
  Doe has Shutterstock + AI imagery available; this is Phase 2 brand depth.
- **Estimate:** L
- **Depends on:** Doe selecting / shooting the new image set
- **Done when:** every page has photography that wasn't on the old Carrd site;
  alt text written for SEO + a11y.

### 7. Re-enable `prefers-reduced-motion`

- **Why:** `src/styles/global.css` line 204-213 has the `@media
  (prefers-reduced-motion: reduce)` block commented out with a TODO ("re-enable
  after confirming orb animations work"). Accessibility regression.
- **Estimate:** S
- **Done when:** the block is uncommented; orb animations confirmed to respect
  it; manual test with macOS "Reduce motion" toggle.

### 8. Cloudflare Pages production setup

- **Why:** Charter and `rules/deployment-policy.md` lock production to
  Cloudflare Pages. Currently only `netlify.toml` exists for staging.
- **Estimate:** S
- **Depends on:** Phase 1 ready to ship
- **Done when:** Astro Cloudflare adapter installed; project deployed to
  Cloudflare Pages under personal account
  (`f2ef265e3ed726d152ec6ff27eab93a1`); custom domain bashfulbeauty.co
  configured; DNS not yet swapped (separate go-live step).

### 9. Team bios + headshots on /about

- **Why:** Phase 2 — spa services are personal. `src/data/team.ts` has Doe
  filled in but 8 commented-out slots awaiting real names + bios.
- **Estimate:** M
- **Depends on:** Doe collecting bios + headshots from each esthetician
- **Done when:** team grid renders all members; each card has name, role,
  short bio, headshot.

### 10. Open the first PR (currently zero PRs in repo history)

- **Why:** All work to date is on `feat/initial-site` direct-pushed. Per
  RayOS git protocol, PRs are required.
- **Estimate:** S
- **Done when:** `feat/initial-site` is opened as a PR against `main`,
  reviewed, and merged; `main` becomes the default branch.

---

## Done (rolling, last 30 days)

| Shipped | Title | Roadmap phase | Notes |
|---|---|---|---|
| 2026-03-24 | Project plan written | Phase 1 prep | `docs/plans/2026-03-24-bashful-2-design.md` (Next.js plan superseded by Astro revised plan) |
| 2026-03-24 | GitHub repo created | Phase 1 prep | `raydawg88/bashful-2`, public |
| 2026-03-24 | Astro scaffold + Tailwind v4 + Fontsource | Phase 1 | Initial commit |
| 2026-03-24 | Design system (`global.css`) | Phase 1 | 297 lines: blush palette, Playfair + Lato, atmosphere primitives |
| 2026-03-24 | Data layer | Phase 1 | 5 typed files in `src/data/` covering business, services, FAQ, testimonials, team |
| 2026-03-24 | Layout + shared components | Phase 1 | `BaseLayout`, `Header`, `Footer`, `MobileBookingBar`, `BookingCTA`, `ServiceCard`, `TestimonialCard`, `WatercolorDivider` |
| 2026-03-24 | All 7 production pages + book + cancellation | Phase 1 | `index`, `waxing`, `facials`, `beauty-services`, `about`, `contact`, `faq`, `book`, `cancellation-policy` |
| 2026-03-24 | Editorial pass (PR2) | Phase 1 | Texture, mobile-first, motion |
| 2026-03-24 | Pass 3 — orbs, type hierarchy, mobile fixes, blog, reviews | Phase 1 | Per commit `8d0889a` |
| 2026-03-24 | Mock 2 — editorial homepage concept | Phase 1 design exploration | `src/pages/mock-2.astro` (1740 lines) |
| 2026-03-24 | Mock 3 — distinct logo fonts rebuild | Phase 1 design exploration | `src/pages/mock-3.astro` (818 lines) |

---

## Parking lot

Ideas captured but not yet ranked.

- **Custom 404 page** — Ray's note from planning: "404 not necessary right
  now." Promote when go-live nears.
- **`/services` → `/waxing` redirect** — old Carrd anchor URLs may be
  indexed. Handle "when we get ready for launch."
- **"Starting at" pricing on category pages** — Ray rejected this in planning
  ("pricing changes all the time"). Re-litigate only if conversion data shows
  it hurts.
- **Email capture / newsletter** — Year 2 idea, not before.
- **Loyalty program** — depends on Square exposing an API.

---

## How this differs from ROADMAP.md

See ROADMAP.md for the full distinction. Quick test:

- "Wire JSON-LD schema" → BACKLOG (tactic)
- "AI search engines cite Bashful" → ROADMAP (Phase 2 milestone)
- "Pick a homepage and retire mocks" → BACKLOG (immediate engineering)
- "We never put per-service pricing on the site" → ROADMAP out-of-scope (forever)
