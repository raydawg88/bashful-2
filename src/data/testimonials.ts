// ---------------------------------------------------------------------------
// Bashful Beauty — Client testimonials
// Reviews marked verified: true have real quotes from the Google Business Profile.
// Reviews marked verified: false are placeholders — replace with real reviews.
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: number;
  quote: string;
  /** Real first name + last initial */
  name: string;
  /** Platform the review came from */
  source: 'Google Review' | 'Yelp Review' | 'Facebook Review';
  /** All displayed reviews are 5-star */
  rating: 5;
  /** Optional: which service they're referencing */
  service?: string;
  /** Initials for avatar circle fallback (e.g., "SM" for Sarah M.) */
  initials: string;
  /** true = quote pulled from actual Google profile, false = placeholder */
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  // ── Real Google reviews ──────────────────────────────────────────────
  {
    id: 1,
    quote:
      'Her prices are reasonable and her attention to detail is unmatched!',
    name: 'Sarah M.',
    source: 'Google Review',
    rating: 5,
    initials: 'SM',
    verified: true,
  },
  {
    id: 2,
    quote:
      'Lovely homey place, great work, a fantastic attitude from Doe.',
    name: 'Taylor R.',
    source: 'Google Review',
    rating: 5,
    service: 'Waxing',
    initials: 'TR',
    verified: true,
  },
  {
    id: 3,
    quote: 'Very efficient service without skimping on quality.',
    name: 'Jessica L.',
    source: 'Google Review',
    rating: 5,
    initials: 'JL',
    verified: true,
  },

  // ── Placeholder reviews — TODO: Replace with real Google/Yelp reviews ──
  {
    id: 4,
    quote:
      `I was SO nervous for my first Brazilian but Doe talked me through everything and made me feel completely at ease. It was way less painful than I expected and I've been going back every month since.`,
    name: 'Ashley K.',
    source: 'Google Review',
    rating: 5,
    service: 'Brazilian Wax',
    initials: 'AK',
    verified: false, // TODO: Replace with a real review
  },
  {
    id: 5,
    quote:
      `I've been getting facials here for about six months now and my skin has never looked this good. Doe actually listens to your concerns and adjusts the treatment every visit. My dark spots are almost completely gone.`,
    name: 'Megan D.',
    source: 'Google Review',
    rating: 5,
    service: 'Custom Facial',
    initials: 'MD',
    verified: false, // TODO: Replace with a real review
  },
  {
    id: 6,
    quote:
      `This place is nothing like a typical spa. It's a cozy little cottage behind a restaurant and you feel like you're visiting a friend's house. So private, so relaxing — I look forward to every appointment.`,
    name: 'Rachel B.',
    source: 'Google Review',
    rating: 5,
    service: 'The Cottage',
    initials: 'RB',
    verified: false, // TODO: Replace with a real review
  },
  {
    id: 7,
    quote:
      `Brought my 14-year-old daughter for her first brow wax and Doe was so sweet with her. Explained everything she was doing, made her laugh, and the brows turned out perfect. We'll definitely be back.`,
    name: 'Kristin W.',
    source: 'Google Review',
    rating: 5,
    service: 'Brow Wax',
    initials: 'KW',
    verified: false, // TODO: Replace with a real review
  },
];
