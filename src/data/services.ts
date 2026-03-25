// ---------------------------------------------------------------------------
// Bashful Beauty — Service catalog
// Organized by category. No prices — those live in Square.
// ---------------------------------------------------------------------------

export interface ServiceItem {
  name: string;
}

export interface ServiceSubGroup {
  label: string;
  items: ServiceItem[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  subGroups?: ServiceSubGroup[];
  items?: ServiceItem[];
}

export interface Membership {
  name: string;
  price: string;
  priceNote: string;
}

// ---------------------------------------------------------------------------
// Helper — build items array from string list
// ---------------------------------------------------------------------------
const items = (names: string[]): ServiceItem[] =>
  names.map((name) => ({ name }));

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const serviceCategories: ServiceCategory[] = [
  // 1. Waxing
  {
    id: "waxing",
    name: "Waxing",
    subtitle: "Smooth skin, zero irritation",
    description:
      "Our signature hard-wax technique removes hair at the root while being gentle on even the most sensitive skin. Whether it's your first Brazilian or your hundredth brow shape, you'll leave silky-smooth and bump-free every time.",
    subGroups: [
      {
        label: "Female",
        items: items([
          "Abdomen",
          "Basic Bikini",
          "Brazilian",
          "Brazilian/Buttocks",
          "Brow Shaping",
          "Buttocks (includes inner backside)",
          "Buttocks add on to Membership",
          "Chest",
          "Chin",
          "Ears",
          "Extended Bikini",
          "Extended Bikini/Inner Backside Combo",
          "Facial Cheek Wax",
          "Feet & Toes",
          "Forehead",
          "Full Arms",
          "Full Back",
          "Full Body Wax",
          "Full Face (brows not included)",
          "Full Legs",
          "Half Arms",
          "Half Back",
          "Hands & Fingers",
          "Inner Backside",
          "Inner Thigh",
          "Lip",
          "Lower Half Legs",
          "Neck",
          "Nose (Inside)",
          "Nose (top)",
          "Sideburns",
          "Underarm",
          "Unibrow",
          "Upper Half Legs",
        ]),
      },
      {
        label: "Male",
        items: items([
          "Underarms",
          "Abs",
          "Brow",
          "Buttocks (includes inner backside)",
          "Cheek",
          "Chest",
          "Chest/Ab Combo",
          "Ears",
          "Fingers",
          "Full Arms",
          "Full Back",
          "Full Body Wax",
          "Full Legs",
          "Grooming Package",
          "Grooming Package Deluxe",
          "Half Arms",
          "Half Back",
          "Head Wax",
          "Inner Backside",
          "Lower Half Legs",
          "Nose (Inside)",
          "Unibrow",
          "Upper Half Legs",
          "Man-Zilian (Brazilian for Males)",
          "Man-Zilian/Buttocks",
        ]),
      },
      {
        label: "Junior",
        items: items([
          "1/2 Leg (13 yrs and under)",
          "Brow Shaping (13 yrs and under)",
          "Full Leg (13 yrs and under)",
          "Lip (13 yrs and under)",
          "Underarm",
          "Unibrow",
        ]),
      },
    ],
  },

  // 2. Facials
  {
    id: "facials",
    name: "Facials",
    subtitle: "Customized treatments for every skin type",
    description:
      "Every facial starts with a thorough skin analysis so we can tailor the treatment to exactly what your skin needs right now. From deep-cleansing peels to hydrating oxygen infusions, you'll walk out with a visible, lasting glow.",
    subGroups: [
      {
        label: "Treatments",
        items: items([
          "Anti Aging Peptide Facial",
          "Custom Back Facial",
          "Custom CBD Facial",
          "Custom Chemical Peel",
          "Custom Chest/Ab Facial",
          "Custom Couple's Facial",
          "Custom Enzyme Peel Facial",
          "Custom Express Facial",
          "Custom Facial",
          "Custom Hydra-facial",
          "Custom Microdermabrasion Facial",
          "Custom Oxygen RX Facial",
          "Dermablading Enzyme Peel & Hydrating Mask Treatment",
          "Micro Needling",
          "Pregnancy Facial",
          "Series Follow Up Facial",
          "Super Berry Brightening Facial",
          "SWiCH Treatment",
          "Teen Facial (19 and under ONLY)",
        ]),
      },
      {
        label: "Upgrades",
        items: items([
          "Decollete (chest area)",
          "Dermablading",
          "Detoxifying Facial Massage",
          "Extraction",
          "Facial Mask",
          "Foot Massage",
          "Foot Scrub",
          "Foot Scrub/Massage Combo",
          "Hand and Arm Massage",
          "Hand and Arm Scrub",
          "Hand and Arm Scrub/Massage Combo",
          "Hydra Facial",
          "Hydrojelly Brazilian Mask",
          "Hydrojelly Facial Mask",
          "LED Light Therapy",
          "Lip Treatment",
          "Neck and Shoulder Massage",
          "Peel",
          "SWiCH Decollete",
        ]),
      },
    ],
  },

  // 3. Lashes
  {
    id: "lashes",
    name: "Lashes",
    subtitle: "Lift, tint, and define",
    description:
      "Wake up with effortlessly gorgeous lashes. Our keratin lifts and professional tints give you that wide-eyed, mascara-free look that lasts for weeks — no extensions required.",
    items: items([
      "Keratin Lash Treatment",
      "Lash Extension Removal",
      "Lash Lift",
      "Lash Lift/Tint Combo",
      "Lash Tint",
      "Patch Test (24 hours prior)",
    ]),
  },

  // 4. Brows
  {
    id: "brows",
    name: "Brows",
    subtitle: "Sculpted, polished, on point",
    description:
      "Great brows frame everything. Whether you want a clean shape-up, a bold lamination, or a natural tint, we sculpt brows that complement your face and hold their shape between visits.",
    items: items([
      "Brow Trim",
      "Brow Tint",
      "Brow Shape and Tint Combo",
      "Brow Lamination (includes tinting, shaping, trimming)",
      "Female Unibrow",
      "Female Brow Shaping",
      "Male Brow Shaping",
      "Male Unibrow",
      "Jr. Brow Shape and Tint Combo (13yrs or younger)",
      "Jr. Brow Shaping (13yrs or younger)",
      "Patch Test (24 hours prior)",
    ]),
  },

  // 5. Skin Lightening
  {
    id: "skin-lightening",
    name: "Skin Lightening",
    subtitle: "Even tone, renewed confidence",
    description:
      "Target dark spots, hyperpigmentation, and uneven skin tone with professional-grade lightening treatments. We recommend a package for the best, most consistent results.",
    items: items(["Single Treatment", "Package (recommended)"]),
  },

  // 6. Spray Tans
  {
    id: "spray-tans",
    name: "Spray Tans",
    subtitle: "Sun-kissed without the sun damage",
    description:
      "Get a natural, streak-free glow in minutes. Our custom-blended solutions match your skin tone perfectly so you look like you just came back from vacation — not from a booth.",
    items: items(["Rapid Solution Spray Tan", "Spray Tan"]),
  },

  // 7. Teeth Whitening
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    subtitle: "A brighter smile in one visit",
    description:
      "Professional LED teeth whitening delivers noticeably whiter teeth in a single session. It's the perfect add-on before a big event or just because you deserve to smile bigger.",
    items: items(["Teeth Whitening"]),
  },
];

// ---------------------------------------------------------------------------
// Memberships
// ---------------------------------------------------------------------------

export const memberships: Membership[] = [
  {
    name: "Brazilian Membership",
    price: "$55",
    priceNote: "per month",
  },
  {
    name: "Manzilian Membership",
    price: "$80",
    priceNote: "per month",
  },
];
