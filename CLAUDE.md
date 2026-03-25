# Bashful 2.0 — Bashful Beauty Spa Website

## Project Overview
Redesign of bashfulbeauty.co — a spa website for Bashful Beauty in Rockwall, TX.
Owner: Doe Hernandez. 4.9 stars / 181 Google reviews. 20+ years in business.

## Tech Stack
- **Framework:** Astro 6 (static site generation, zero JS by default)
- **Styling:** Tailwind CSS 4 (CSS-first config in src/styles/global.css)
- **Language:** TypeScript (strict)
- **Fonts:** Fontsource (Playfair Display + Lato), self-hosted
- **Icons:** @lucide/astro
- **Staging:** Netlify (auto-deploy from GitHub)
- **Production:** Cloudflare Pages (when ready for go-live)
- **Booking:** Square Appointments (external link only)

## Key Conventions
- No React. Components are .astro files.
- No tailwind.config.ts — all theme config is in src/styles/global.css via @theme {}
- Data lives in src/data/*.ts as typed TypeScript constants (no CMS)
- No pricing on the site except membership pricing — Square is source of truth
- Photography woven into pages, no standalone gallery page
- Every page must have a "Book Now" CTA and structured JSON-LD schema

## Color Palette
- Primary CTA: blush-500 (#E8607A)
- Accent: rose-gold (#B76E79)
- Background: cream (#FFF9F5)
- Text: warm-gray-900 (#2D2520)
- Premium: gold-light (#D4AF37)

## Page Structure (7 pages + booking redirect)
/ → Home
/waxing → Waxing services
/facials → Facials services
/beauty-services → Lashes, Brows, Skin Lightening, Spray Tans, Teeth Whitening
/about → Doe's story + team
/contact → Location, hours, map
/faq → FAQ + care instructions
/book → Redirect to Square Appointments

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
