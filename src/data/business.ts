// ---------------------------------------------------------------------------
// Bashful Beauty — Business info constants
// Single source of truth for name, contact, location, social, and reviews.
// ---------------------------------------------------------------------------

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface ReviewSource {
  rating: number;
  count: number;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  address: Address;
  locationNote: string;
  bookingUrl: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  social: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  serviceArea: readonly string[];
  reviews: {
    google: ReviewSource;
    facebook: ReviewSource;
    yelp: ReviewSource;
  };
  hours: BusinessHours[];
}

export const business = {
  name: "Bashful Beauty",
  tagline: "Rockwall's Most Trusted Beauty Studio",

  phone: "(469) 434-0155",
  phoneHref: "tel:+14694340155",

  address: {
    street: "502 N Goliad St",
    city: "Rockwall",
    state: "TX",
    zip: "75087",
  },

  locationNote: "The cute little cottage behind Bin 303",

  bookingUrl:
    "https://squareup.com/appointments/book/9a6e447d-913f-46ae-becf-8c4f786ebeb8/F3XKQZW5S5M0V/services",

  googleMapsUrl:
    "https://www.google.com/maps/dir//Bashful+Beauty+Waxing+Rockwall,+502+N+Goliad+St,+Rockwall,+TX+75087",

  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.9!2d-96.4597!3d32.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c01c8172d44ab%3A0xff262ee425b839b6!2sBashful%20Beauty!5e0!3m2!1sen!2sus!4v1",

  social: {
    instagram: "https://www.instagram.com/bashfulbeautyco/",
    tiktok: "https://www.tiktok.com/@bashfulbeautywaxing",
    facebook: "https://www.facebook.com/bashfulbeautyrockwall",
  },

  serviceArea: [
    "Rockwall",
    "Heath",
    "Rowlett",
    "Royse City",
    "Garland",
    "Fate",
    "Forney",
  ] as const,

  reviews: {
    google: { rating: 4.9, count: 181 },
    facebook: { rating: 5.0, count: 84 },
    yelp: { rating: 4.6, count: 42 },
  },

  // TODO: Fill in actual business hours from Doe
  hours: [] as BusinessHours[],
} as const satisfies BusinessInfo;
