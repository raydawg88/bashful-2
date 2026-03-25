// ---------------------------------------------------------------------------
// Bashful Beauty — FAQ, pre-wax care, and post-wax care
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareInstruction {
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Frequently Asked Questions
// ---------------------------------------------------------------------------

export const faqs: FaqItem[] = [
  {
    question: "Does waxing hurt?",
    answer:
      "There's a quick pinch, but most clients say it's way less painful than they expected — especially with our hard wax, which is gentler on sensitive skin. The more consistently you wax, the finer and softer the hair grows back, so it gets easier every time.",
  },
  {
    question: "How long does my hair need to be before a wax?",
    answer:
      "About a quarter-inch, or roughly two to three weeks of growth after shaving. If the hair is too short, the wax can't grip it properly. If you're unsure, it's almost always better to wait an extra day or two.",
  },
  {
    question: "How long do waxing results last?",
    answer:
      "Most clients stay smooth for three to six weeks depending on the area and their hair growth cycle. Regular waxing slows regrowth over time, so results tend to last longer the more you keep up with it.",
  },
  {
    question: "Is there anything I should do before my appointment?",
    answer:
      "Gently exfoliate the area a day or two beforehand and make sure the hair is at least a quarter-inch long. Avoid sun exposure, tanning beds, and retinol products on the area for 24 hours before your appointment. Check our full pre-wax care guide below for all the details.",
  },
  {
    question: "What should I do after my wax?",
    answer:
      "Keep the area clean and avoid heat, sweat, and tight clothing for 24 hours. No hot tubs, saunas, or direct sun on freshly waxed skin. We'll walk you through everything at the end of your appointment — you can also check our post-wax care guide below.",
  },
  {
    question: "Can I get waxed if I'm pregnant?",
    answer:
      "Absolutely. Many of our clients wax throughout pregnancy. Your skin can be a bit more sensitive during this time, so we take extra care. We also offer a pregnancy-safe facial if you want to treat yourself.",
  },
  {
    question: "Do you offer services for men?",
    answer:
      "Yes! We have a full menu of male waxing services including chest, back, brows, and our popular Man-Zilian. We also offer a men's grooming package if you want the full treatment.",
  },
  {
    question: "What's the difference between a Brazilian and a bikini wax?",
    answer:
      "A basic bikini wax cleans up the sides and top along your bikini line. A Brazilian removes everything from front to back, with the option to leave a small strip or triangle. An extended bikini falls somewhere in between — more than a basic but not quite a full Brazilian.",
  },
  {
    question: "Do you offer memberships?",
    answer:
      "We do! Our Brazilian Membership is $55 per month and the Manzilian Membership is $80 per month. Members get their wax at a locked-in rate plus perks. Ask us about current member benefits when you book.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online anytime through our Square booking page — just tap the 'Book Now' button on any page. You can also call or text us at (469) 434-0155. We'll confirm your appointment right away.",
  },
];

// ---------------------------------------------------------------------------
// Pre-Wax Care Instructions
// ---------------------------------------------------------------------------

export const preWaxCare: CareInstruction[] = [
  {
    title: "Let it grow",
    description:
      "Hair should be at least a quarter-inch long — about two to three weeks of growth after shaving. Longer is fine; we'll trim it down if needed.",
  },
  {
    title: "Exfoliate gently",
    description:
      "Use a gentle scrub or exfoliating mitt on the area one to two days before your appointment. This removes dead skin cells and helps the wax grab the hair more effectively.",
  },
  {
    title: "Skip the lotion",
    description:
      "Don't apply lotions, oils, or creams to the area the day of your appointment. They create a barrier that can prevent the wax from adhering properly.",
  },
  {
    title: "Avoid sun and tanning",
    description:
      "No sunbathing, tanning beds, or self-tanner on the area for at least 24 hours before your wax. Sunburned or freshly tanned skin is too sensitive to wax safely.",
  },
  {
    title: "Pause retinol and acids",
    description:
      "Stop using retinol, glycolic acid, salicylic acid, and similar active ingredients on the wax area for at least 48 hours beforehand. These thin the skin and increase sensitivity.",
  },
  {
    title: "Take a pain reliever if you'd like",
    description:
      "An over-the-counter pain reliever like ibuprofen taken 30 minutes before your appointment can help with any discomfort, especially if it's your first time.",
  },
  {
    title: "Wear comfortable clothing",
    description:
      "Loose, breathable clothing is best — especially for bikini and Brazilian waxes. Skip the skinny jeans for this one.",
  },
];

// ---------------------------------------------------------------------------
// Post-Wax Care Instructions
// ---------------------------------------------------------------------------

export const postWaxCare: CareInstruction[] = [
  {
    title: "Keep it cool",
    description:
      "Avoid hot baths, showers, saunas, steam rooms, and hot tubs for at least 24 hours. Heat can irritate freshly waxed skin and open pores.",
  },
  {
    title: "Skip the gym",
    description:
      "Avoid heavy exercise and sweating for 24 hours after your wax. Sweat and friction on freshly waxed skin can cause breakouts and irritation.",
  },
  {
    title: "No touching",
    description:
      "Try not to touch the waxed area with your hands. Your skin is more vulnerable to bacteria right after waxing.",
  },
  {
    title: "Wear loose clothing",
    description:
      "Tight clothing can cause friction and irritation. Stick with loose, breathable fabrics for the first day or two.",
  },
  {
    title: "Avoid sun exposure",
    description:
      "Freshly waxed skin is extra sensitive to UV rays. Stay out of direct sun for at least 24 to 48 hours. If you must be outside, apply SPF 30 or higher.",
  },
  {
    title: "Exfoliate after 48 hours",
    description:
      "Starting two days after your wax, gently exfoliate the area two to three times a week. This prevents ingrown hairs and keeps skin smooth between appointments.",
  },
  {
    title: "Moisturize daily",
    description:
      "Keep the area hydrated with a gentle, fragrance-free moisturizer. Well-moisturized skin makes your next wax easier and more comfortable.",
  },
  {
    title: "Don't shave between appointments",
    description:
      "Shaving between waxes disrupts the hair growth cycle and makes your next wax less effective. Let it grow and we'll take care of it at your next visit.",
  },
];
