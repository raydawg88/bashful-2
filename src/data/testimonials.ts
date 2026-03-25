// ---------------------------------------------------------------------------
// Bashful Beauty — Curated testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  source: string;
  /** Set to true for reviews pulled directly from Google/Yelp/Facebook */
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Her prices are reasonable and her attention to detail is unmatched!",
    source: "Google Review",
    verified: true,
  },
  {
    quote:
      "Lovely homey place, great work, a fantastic attitude from Doe.",
    source: "Google Review",
    verified: true,
  },
  {
    quote: "Very efficient service without skimping on quality.",
    source: "Google Review",
    verified: true,
  },

  // TODO: Replace the reviews below with real reviews from Google/Yelp/Facebook
  {
    quote:
      "I've been coming here for Brazilians for over a year and I'll never go anywhere else. Doe makes you feel so comfortable and it's always quick.",
    source: "Google Review",
    verified: false,
  },
  {
    quote:
      "The custom facial was incredible — my skin was glowing for days afterward. The little cottage is so charming and relaxing too.",
    source: "Google Review",
    verified: false,
  },
  {
    quote:
      "Best brow lamination I've ever had. The whole team is so welcoming and professional. Highly recommend to anyone in the Rockwall area!",
    source: "Google Review",
    verified: false,
  },
  {
    quote:
      "I was nervous about my first wax but Doe put me at ease immediately. The studio feels like walking into a friend's house. Five stars all the way.",
    source: "Google Review",
    verified: false,
  },
];
