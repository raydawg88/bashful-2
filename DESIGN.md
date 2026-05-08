# Bashful 2.0 — Design + Brand + Voice + Marketing

The single source of truth for how this site LOOKS, SPEAKS, and SHOWS UP in
market. Loaded by `/plan-design-review`, `/visual-verify`, `/design-critique`,
and any marketing skill.

> Universal rules in `ray-os/rules/design-standards.md` apply. This file ADDS
> Bashful-specific overrides and extends the slop-blocklist.

---

## The one memorable thing

Editorial small-town premium — a blush-and-cream watercolor world centered on
"the cute little cottage behind Bin 303" in Rockwall, TX. Not big-city luxury,
not template-spa. Doe Hernandez's 20+ year reputation rendered as a magazine
spread.

---

## Visual system

### Typography

- **Display:** Playfair Display — weights 400 / 500 / 600 / 700, self-hosted
  via `@fontsource/playfair-display`. Used for all `h1`-`h6`.
- **Body:** Lato — weights 300 / 400 / 700, self-hosted via `@fontsource/lato`.
  Base size 17px / line-height 1.7 for spa-warm readability (vs. typical 16px
  defaults).
- **Available but uncommitted:** `@fontsource/cormorant-garamond`,
  `@fontsource/antic-didone`, `@fontsource/pinyon-script` are installed in
  `package.json` and have appeared in the homepage mocks (`mock-3` rebuild
  with "distinct logo fonts"). Phase 1 milestone resolves which secondary
  display face survives, if any. Default assumption: stay with
  Playfair-only until proven otherwise.

Anti-pattern blocklist for THIS project (extends universal):

- Never Inter, Roboto, system-ui, or any default sans for body — Lato is the
  only body face.
- Never Cormorant Garamond as the primary display — that's the OLD Carrd
  site's typography and a key reason it "looks like every other spa from 2021."
- Never more than 2 typefaces actively shipping at the same time. Mock-3
  experimented with 3+; that experiment retires when Phase 1 ships.

### Color tokens

Defined in `src/styles/global.css` `@theme` block.

| Role | Token | Hex | Usage |
|---|---|---|---|
| Primary CTA | `blush-500` | `#E8607A` | `Book Now` buttons, links, focus ring |
| CTA hover | `blush-600` | `#C74B63` | Hover state |
| Soft fill | `blush-100` | `#FFE4E8` | Selection highlight, backgrounds |
| Accent | `rose-gold` | `#B76E79` | Borders, icons, secondary accents |
| Premium | `gold-light` | `#D4AF37` | Membership, star ratings, premium markers |
| Premium fill | `gold-soft` | `#F0E6C8` | Gold-tinted section backgrounds |
| Botanical | `sage` | `#A8B5A0` | Floral / botanical accents |
| Page bg | `cream` | `#FFF9F5` | `<html>` background (default) |
| Card bg | `linen` | `#FAF5F0` | Card / muted surface |
| Body text | `warm-gray-900` | `#2D2520` | Primary text |
| Secondary text | `warm-gray-700` | `#5C504A` | Secondary text |
| Muted | `warm-gray-500` | `#9A8E84` | Captions, timestamps |
| Borders | `warm-gray-200` | `#E8E0D8` | Hairline borders |

Anti-pattern blocklist:

- Never `#3B82F6` default-blue — there is no blue in this brand.
- Never purple / violet gradients on white — universal AI-slop tell.
- Never pure black — `warm-gray-900 #2D2520` only.
- Never pure white as page bg — `cream #FFF9F5` only. (`surface-raised
  #FFFFFF` is permitted on cards layered above cream.)
- Never timid one-shy-accent distribution — blush-500 should appear sharply on
  every page, not be hedged into a 5%-of-surface afterthought.

### Atmosphere primitives

What gives this site visual texture (≥2 required per design-standards):

- **Ambient orbs** — 7 full-page-traversing orbs in pink/cream/gold mix.
  Implemented via `src/components/AmbientBackground.astro`. Per commits
  `2e78071` and `572df3f`, sections are intentionally semi-transparent /
  background-stripped so orbs read as the page background.
- **Watercolor dividers** — `src/components/WatercolorDivider.astro` (subtle
  blush gradient, `max-w-xs`, 40% opacity) breaks sections without hard rules.
- **Floral accents** — `src/components/FloralAccent.astro` for botanical
  punctuation.
- **Organic blob shapes** — `@utility organic-blob` and
  `@utility image-frame-organic` in `global.css`. Imagery uses asymmetric
  border-radius (`60% 40% 50% 50% / 50% 55% 45% 50%`) at desktop; tames to
  `rounded-2xl` at `max-width: 640px` so mobile content isn't obscured.
- **Glass morphism** — `@utility glass` (backdrop blur 12px + saturate 1.5)
  for layered surfaces.

### Spacing system

CSS custom properties in `@theme`:

- `--section-padding-y: 4rem` (mobile), `--section-padding-y-lg: 6rem` (desktop)
- `--section-padding-x: 1.5rem` (mobile), `--section-padding-x-lg: 2rem` (desktop)

Body type: 17px / line-height 1.7. Minimum text size 13px floor enforced via
`small, .text-xs { font-size: max(0.8125rem, 13px); }`. Tap targets ≥ 44×44 on
all `button, [role="button"], a[href]`.

### Grid posture

Editorial — bleeds, asymmetry, organic blob image frames at desktop. Identical
predictable 16/24/32 spacing is the AI-slop tell we explicitly avoid. The
`SectionReveal` component (`src/components/SectionReveal.astro`) drives
scroll-driven entrance animations (`animate-fade-up`, `animate-fade-in`,
`animate-scale-in`) with view-timeline ranges and stagger utilities
(`stagger-1` … `stagger-4`).

Where the grid intentionally breaks:

- Hero photography asymmetric, organic-blob framed
- Service cards in editorial 2-up (not 3-up grid)
- Testimonials staggered, not aligned
- Mobile retreats to `rounded-2xl` and stacked; the editorial moves are a
  desktop-only flex.

---

## Brand voice

### Personality

- Warm, confident, conversational
- Cottage-charm small-town premium
- Quietly proud — 20+ years, 4.9 stars, doesn't shout
- Editorial cadence — not transactional
- Inclusive of men (the male waxing sub-group is real, not an afterthought)

### How we sound

- "Come see us at the cottage behind Bin 303."
- "Your skin remembers. We make sure it remembers something good."
- "Brazilian wax — $55/month membership. Saves you $120 a year vs. per visit.
  Cancel anytime."
- "Doe's been doing this for twenty years. The cottage is hers, the work is
  hers, and the reviews speak for both."

### How we DON'T sound

- "Premier destination for all your skin care needs." (filler — old Carrd copy)
- "Luxury experience" / "elevate your beauty routine" (generic spa template)
- "Leverage our expertise" (corporate)
- Big-city pretense — Bashful is a Rockwall studio, not a Beverly Hills clone

### Voice rules

- Never the word **"leverage."**
- Never **"premier destination."**
- Show membership math, don't just imply it ("$55/mo, saves $120/yr").
- Headlines: title case, balanced wrap (`text-wrap: balance` is the default).
- Body: warm pretty-wrap (`text-wrap: pretty`), 17px / 1.7 line-height.
- Second person — "you" / "your skin" — not first-person plural ("we").

---

## Marketing direction

### Target customer (concrete persona)

- **Lauren, 34, Heath TX.** Two kids, full-time job, books waxing every
  3-4 weeks. Compares spas on her phone during lunch. Wants to see real
  reviews, real before/afters, and book in three taps. Has been a Bashful
  client occasionally; the new site should make her a member.
- **Marcus, 41, Rockwall.** Wants a Manzilian, embarrassed to ask. Needs the
  site to make male waxing feel normal and the booking experience anonymous.
- **AI-search Lauren.** Same person, but asking ChatGPT "best waxing in
  Rockwall TX" instead of Googling. Site needs JSON-LD schema and
  conversational content blocks so the AI extracts Bashful as the answer.

### Conversion event

User clicks `Book Now`, lands on Square Appointments at
`https://squareup.com/appointments/book/9a6e447d-913f-46ae-becf-8c4f786ebeb8/F3XKQZW5S5M0V/services`,
completes appointment booking. Phase 3 wires GA4 to count the click; Square is
the source of truth for the completed booking.

### Where we show up

- **Organic Google search** — 7 indexable pages, JSON-LD schema, Astro static
  output, fast Core Web Vitals.
- **AI search engines** — `robots.txt` explicitly allows `GPTBot`,
  `ClaudeBot`, `PerplexityBot`, `Google-Extended`. Conversational page content
  designed for AI extraction.
- **Instagram (@bashfulbeautyco)** — 5.8K followers, strongest visual asset.
  Phase 3 wires the feed onto homepage.
- **TikTok (@bashfulbeautywaxing)** — secondary, links from footer.
- **Google Business Profile** — already strong (4.9 / 181), site reinforces
  it with consistent NAP (name, address, phone) + schema.

### Where we don't

- No paid Twitter / X ads
- No paid Facebook / Instagram ads at launch — organic + Google Business
  Profile first
- No Reddit or guerrilla marketing — wrong audience
- No newsletter at launch — Year 2 if at all

---

## References / inspiration

Pinterest inspiration board provided by Doe (screencap saved 2026-03-24).
Direction read: soft feminine palette, watercolor / botanical, editorial
layouts, photography-forward, pink + white + gold story.

Anti-references — explicitly NOT this:

- The current bashfulbeauty.co Carrd site — Cormorant Garamond + 2021 generic
  spa template. The whole reason this project exists.
- Generic dashboard / SaaS landing pages with rounded cards in a 3-column grid.
- Big-city luxury spa sites that pretend to be Beverly Hills.

---

## Slop check (extends universal `rules/design-standards.md`)

This site specifically fails design-review if:

- It looks like a tech startup landing page (rounded cards, Inter, blue
  accent).
- Cormorant Garamond reappears as a primary face — that's the old site's
  signature.
- Pricing tables for individual services creep onto pages — Square is source
  of truth, charter non-negotiable.
- The `Book Now` CTA isn't visible above the fold on every page (desktop +
  mobile).
- Any page lacks JSON-LD structured data.
- Any image lacks alt text.
- Any text drops below 13px (the `small, .text-xs` floor in `global.css`).
- Lighthouse mobile drops below 90 on Performance / Accessibility / SEO.
- The visual atmosphere drops below 2 primitives (orbs / watercolor / floral /
  organic blobs / glass) per page.
