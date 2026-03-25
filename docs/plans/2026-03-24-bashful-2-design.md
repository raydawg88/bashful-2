# Bashful 2.0 — Comprehensive Implementation Plan

## Executive Summary

Redesign BashfulBeauty.co from a single-page Carrd site into a multi-page Next.js application. The goal is to elevate the brand to match its 4.9-star reputation and 20+ year track record, while optimizing for the primary conversion action: booking an appointment.

**Project location:** `/Users/rayhernandez/Library/CloudStorage/Dropbox-Personal/Goldfish/personal/bashful-2`
**Deploy target:** Netlify
**Domain:** bashfulbeauty.co

---

## 1. Site Architecture

### Page Structure & Routing

```
/                           -> Home (hero, value props, featured services, reviews, CTA)
/services                   -> Services overview (all categories)
/services/waxing            -> Waxing detail page (female, male, junior, memberships)
/services/facials           -> Facials detail page (treatments + upgrades)
/services/lash-lift-tint    -> Lash lift & tint detail page
/services/brows             -> Brows detail page
/services/skin-lightening   -> Skin lightening detail page
/services/spray-tans        -> Spray tans detail page
/services/teeth-whitening   -> Teeth whitening detail page
/memberships                -> Membership plans (Brazilian $55/mo, Manzilian $80/mo)
/team                       -> Meet the team (Doe + ~10 estheticians)
/gallery                    -> Before/after gallery + treatment photos
/about                      -> Story, Doe's 20+ years, the cottage, Voyage Dallas feature
/faq                        -> FAQ (10 existing questions + pre/post wax care)
/contact                    -> Location, hours, phone, map, parking info
/book                       -> Booking page (Square Appointments redirect)
/products                   -> Retail products (Fur Professionals, Grande Cosmetics)
/blog                       -> Blog (Phase 3)
/privacy                    -> Privacy policy
```

### Navigation

**Primary Nav (sticky header):**
- Logo (left)
- Services (dropdown with sub-categories)
- Memberships
- Team
- Gallery
- About
- Contact
- **Book Now** (pink CTA button, always visible, right side)

**Mobile Nav:**
- Hamburger menu with slide-out drawer
- "Book Now" button pinned to bottom of viewport (persistent CTA)

**Footer:**
- Service quick links
- Contact info + hours
- Social icons (Instagram, Facebook, TikTok, X)
- Google Maps mini embed
- "Book Now" CTA
- Copyright + privacy link

---

## 2. Design System

### Color Palette

Blush pinks, rose gold, whites, warm neutrals, gold accents.

```css
/* Core brand */
--color-blush-50: #FFF5F7;
--color-blush-100: #FFE8ED;
--color-blush-200: #FFD1DB;
--color-blush-300: #FFB0C1;
--color-blush-400: #FF85A1;
--color-blush-500: #E8607A;       /* Primary action / CTAs */
--color-blush-600: #C94D64;

--color-rose-gold: #B76E79;       /* Accent / borders / icons */
--color-gold-light: #D4AF37;      /* Metallic accents (membership, premium) */
--color-gold-soft: #F0E6C8;       /* Gold tint backgrounds */

/* Neutrals */
--color-cream: #FFF9F5;           /* Page background */
--color-linen: #FAF5F0;           /* Card backgrounds */
--color-warm-gray-500: #8A7E74;
--color-warm-gray-900: #2D2520;   /* Primary text */

/* Semantic */
--color-surface: var(--color-cream);
--color-surface-card: #FFFFFF;
--color-text-primary: var(--color-warm-gray-900);
--color-text-secondary: var(--color-warm-gray-500);
--color-text-accent: var(--color-rose-gold);
```

### Typography

- **Headings:** Playfair Display (elegant editorial serif)
- **Body:** Lato (clean, warm sans-serif)

Scale:
- H1: `text-4xl md:text-5xl lg:text-6xl` (Playfair, font-light)
- H2: `text-3xl md:text-4xl` (Playfair, font-normal)
- H3: `text-xl md:text-2xl` (Playfair, font-medium)
- Body: `text-base` (Lato, 16px)
- Caption: `text-xs` (Lato, tracking-wide, uppercase)

---

## 3. Features — What the Current Site is Missing

### Must-Have (Phase 1)

1. **Persistent "Book Now" CTA** — On every page, sticky on mobile
2. **Google Reviews display** — 4.9 stars / 181 reviews is the strongest conversion asset
3. **Team page with bios** — Spa services are personal, clients want to know who they're trusting
4. **Membership highlight section** — $55/mo and $80/mo plans deserve prominence, show savings
5. **Service detail pages with pricing** — Descriptions, pricing tables, duration, direct booking links
6. **Before/after gallery** — Visual proof of results
7. **Google Maps embed** — The cottage needs a visual + parking instructions
8. **Mobile-first responsive design** — 70-80% of spa traffic is mobile
9. **Local SEO** — Schema.org LocalBusiness markup, location-specific keywords

### Should-Have (Phase 2)

10. **Gift cards** — Link to Square Gift Cards purchase page
11. **Products page** — Fur Professionals & Grande Cosmetics
12. **Pre/post wax care as proper pages** — Scannable, dedicated
13. **Instagram feed integration** — 5.8K followers, strong visual content
14. **Structured data / rich snippets** — FAQ schema, LocalBusiness schema

### Nice-to-Have (Phase 3)

15. **Blog** — SEO play with waxing/skincare content
16. **Online gift card purchase flow**
17. **Loyalty/rewards integration**

---

## 4. Tech Stack

```
Framework:        Next.js 16.x (App Router, Turbopack)
Styling:          Tailwind CSS 4.x (CSS-first config)
Language:         TypeScript (strict mode)
Fonts:            next/font/google (Playfair Display + Lato)
Icons:            lucide-react
Images:           next/image (optimized, lazy-loaded)
Animations:       framer-motion (subtle reveals, parallax)
Maps:             Google Maps iframe embed
Deployment:       Netlify (@netlify/plugin-nextjs)
Booking:          Square Appointments (external link)
Analytics:        Google Analytics 4
SEO:              next/metadata API + JSON-LD schema
```

---

## 5. Content Strategy

### Keep (migrate)
- All 100+ service names and prices
- Membership pricing
- FAQ content (10 questions)
- Pre-wax and post-wax instructions
- Contact info, social links

### Rewrite
- Homepage hero copy (needs to be aspirational, not just functional)
- Service descriptions (each needs 2-3 sentences, duration, what to expect)
- About page (expand Doe's story, the cottage, Voyage Dallas feature)

### Add New
- Team bios and headshots
- Curated testimonials (10-15 best reviews)
- Before/after photos
- Gallery photography (studio interior, treatment rooms, cottage exterior)
- Product descriptions
- Membership value calculators

---

## 6. File Structure

```
bashful-2/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                       # Homepage
│   ├── about/page.tsx
│   ├── book/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── gallery/page.tsx
│   ├── memberships/page.tsx
│   ├── products/page.tsx
│   ├── privacy/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── waxing/page.tsx
│   │   ├── facials/page.tsx
│   │   ├── lash-lift-tint/page.tsx
│   │   ├── brows/page.tsx
│   │   ├── skin-lightening/page.tsx
│   │   ├── spray-tans/page.tsx
│   │   └── teeth-whitening/page.tsx
│   └── team/page.tsx
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── mobile-booking-bar.tsx
│   │   ├── page-hero.tsx
│   │   └── section.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   └── watercolor-divider.tsx
│   ├── services/
│   │   ├── service-card.tsx
│   │   ├── service-category-grid.tsx
│   │   └── pricing-table.tsx
│   ├── team/team-member-card.tsx
│   ├── reviews/
│   │   ├── testimonial-card.tsx
│   │   ├── review-stats.tsx
│   │   └── testimonial-carousel.tsx
│   ├── memberships/membership-card.tsx
│   ├── gallery/
│   │   ├── gallery-grid.tsx
│   │   └── lightbox.tsx
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── featured-services.tsx
│   │   ├── why-bashful.tsx
│   │   ├── testimonials-section.tsx
│   │   └── membership-cta.tsx
│   └── shared/
│       ├── booking-cta.tsx
│       ├── social-proof-badge.tsx
│       └── google-map.tsx
├── lib/
│   ├── constants.ts                   # Business info, hours, links
│   ├── services-data.ts              # All services, prices, categories
│   ├── team-data.ts
│   ├── testimonials-data.ts
│   ├── faq-data.ts
│   └── metadata.ts                   # SEO helpers
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── products/
│   │   ├── textures/                 # Watercolor backgrounds, floral SVGs
│   │   └── brand/                    # Logo variants, favicon
│   └── favicon.ico
├── postcss.config.mjs
├── next.config.ts
├── netlify.toml
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

---

## 7. Phased Delivery

### Phase 1 — Foundation + Core Pages (PRs 1-5)

**PR 1: Project scaffolding + design system** (~150 lines)
- create-next-app with TS, Tailwind, App Router
- Tailwind v4 theme in globals.css
- next.config.ts, netlify.toml, postcss.config.mjs
- Root layout with fonts
- lib/constants.ts with business info
- Deploy empty shell to Netlify

**PR 2: Layout — Header, Footer, shared primitives** (~200 lines)
- Sticky header with responsive nav + "Book Now" CTA
- Footer with links, contact, social icons
- MobileBookingBar (persistent bottom CTA on mobile)
- Button, Card, Section, PageHero, WatercolorDivider

**PR 3: Homepage** (~300 lines)
- Hero section with large image + headline + CTA
- Featured services grid
- Social proof (review stats, Voyage Dallas badge)
- Testimonials carousel
- Membership teaser
- Final booking CTA section

**PR 4: Services overview + all 7 detail pages** (~350 lines)
- lib/services-data.ts with all services structured as data
- Services overview with category cards
- 7 individual service pages with pricing tables
- Each page has "Book This Service" CTA

**PR 5: Contact + FAQ + Book pages** (~200 lines)
- Contact: address, hours, phone, parking, Google Maps
- FAQ: accordion with 10 questions + pre/post wax care
- Book: Square Appointments integration
- JSON-LD schemas

### Phase 2 — Brand Depth (PRs 6-9)

**PR 6: Team page** (~150 lines)
**PR 7: Memberships page** (~150 lines)
**PR 8: Gallery page** (~200 lines)
**PR 9: About + Products pages** (~200 lines)

### Phase 3 — Growth (PRs 10-12)

**PR 10: SEO optimization pass** (~150 lines)
**PR 11: Gift cards + Instagram feed** (~150 lines)
**PR 12: Blog foundation** (~200 lines)

---

## Key Decisions

1. **Static generation** — Marketing site, every page generated at build time
2. **Data as TypeScript, not a CMS** — Services, team, FAQ as typed constants in lib/
3. **Square as external link** — "Book Now" opens Square booking URL, not embedded iframe
4. **No shadcn/ui** — Brand-heavy visual site needs custom components, not dashboard primitives
5. **Framer Motion for subtle animations only** — Fade-in-on-scroll, gentle parallax, hover effects

---

## Business Info Reference

- **Phone:** (469) 434-0155
- **Address:** 502 N Goliad St, Rockwall, TX 75087
- **Location note:** "The cute little cottage behind Bin 303"
- **Owner:** Doe Hernandez (20+ years in beauty/anti-aging)
- **Booking URL:** https://squareup.com/appointments/book/9a6e447d-913f-46ae-becf-8c4f786ebeb8/F3XKQZW5S5M0V/services
- **Google Maps URL:** https://www.google.com/maps/dir//Bashful+Beauty+Waxing+Rockwall,+502+N+Goliad+St,+Rockwall,+TX+75087
- **Instagram:** https://www.instagram.com/bashfulbeautyco/
- **TikTok:** https://www.tiktok.com/@bashfulbeautywaxing
- **Facebook:** https://www.facebook.com/bashfulbeautyrockwall
- **Google Reviews:** 4.9 stars / 181 reviews
- **Facebook Reviews:** 5/5 (84 votes)
- **Yelp:** 4.6 stars (42 reviews)
- **Memberships:** Brazilian $55/mo, Manzilian $80/mo
- **Products:** Fur Professionals (waxing), Grande Cosmetics (lashes)
