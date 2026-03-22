import type {
  FaqItem,
  FooterLink,
  FooterSocialLink,
  HeroStat,
  NavLink,
  PricingPlan,
  Testimonial,
} from "@/lib/types";

export const siteContent = {
  symbols: {
    arrow: "→",
    previous: "◀",
    next: "▶",
    currency: "$",
    copyright: "©",
  },
  brand: {
    name: "JULIEFIT",
    trainerName: "Steve Smith",
    footerRights: "All rights reserved.",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy",
  },
  navbar: {
    contactLabel: "CONTACT",
    contactHref: "#contact",
    navAriaLabel: "Primary navigation",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",
  },
  hero: {
    sectionId: "home",
    headline: "TRAIN HARD. STAY SHARP. LIVE STRONG.",
    subtext:
      "Personalized fitness coaching from Steve Smith to help you build strength, endurance, and consistency.",
    ctaLabel: "JOIN NOW",
    ctaHref: "#pricing",
    imageSrc: "/images/trainer-placeholder.svg",
    imageAlt: "Steve Smith training portrait placeholder",
  },
  about: {
    sectionId: "about",
    imageSrc: "/images/about-placeholder.svg",
    imageAlt: "Steve Smith coaching a client placeholder",
    headingLines: ["COACHING", "BUILT FOR", "YOUR GOALS"],
    body: "JULIEFIT combines practical programming with accountability. Every plan is designed around your schedule, experience level, and measurable outcomes.",
  },
  pricing: {
    sectionId: "pricing",
    title: "CHOOSE YOUR PROGRAM",
    featuredLabel: "MOST POPULAR",
    ctaLabel: "GET STARTED",
  },
  testimonials: {
    sectionId: "testimonials",
    title: "CLIENT RESULTS",
    previousLabel: "Previous testimonial",
    nextLabel: "Next testimonial",
    quoteMark: '"',
  },
  faq: {
    sectionId: "faq",
    title: "FAQ",
    contactLabel: "CONTACT STEVE",
    contactHref: "#contact",
    expandLabel: "Expand FAQ item",
    collapseLabel: "Collapse FAQ item",
  },
  ctaBanner: {
    sectionId: "contact",
    headline: "READY TO START YOUR STRONGEST CHAPTER?",
    ctaLabel: "LET'S BEGIN",
    ctaHref: "#home",
  },
  footer: {
    linksTitle: "Links",
    contactTitle: "Contact",
    socialsTitle: "Socials",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    emailValue: "coach@stevefit.com",
    phoneValue: "+1 (555) 214-7780",
    locationValue: "Austin, Texas",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 79,
    description: "Great for beginners who need clear weekly structure.",
    features: [
      "Custom 4-week training plan",
      "Form and movement guidance",
      "Weekly progress check-in",
    ],
  },
  {
    name: "Performance",
    price: 129,
    description: "Built for consistent trainees ready to accelerate results.",
    features: [
      "Custom 8-week performance block",
      "Nutrition habit framework",
      "Twice-weekly accountability support",
      "Priority coaching response",
    ],
    featured: true,
  },
  {
    name: "Elite Coaching",
    price: 199,
    description: "High-touch coaching with complete performance oversight.",
    features: [
      "Custom monthly training cycles",
      "Full nutrition strategy support",
      "Video form reviews",
      "Dedicated weekly call",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Steve rebuilt my confidence in the gym. I dropped 18 pounds and gained visible strength in less than four months.",
    name: "Maya L.",
    avatar: "M",
  },
  {
    quote:
      "The structure is simple and effective. I finally stayed consistent and hit my first pull-up goal.",
    name: "Daniel R.",
    avatar: "D",
  },
  {
    quote:
      "I travel for work and still made progress because Steve adapted my program every week around my schedule.",
    name: "Avery K.",
    avatar: "A",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How often should I train each week?",
    answer:
      "Most clients start with three to four sessions weekly. Steve adjusts volume based on your schedule, recovery, and goals.",
  },
  {
    question: "Do I need gym access to join?",
    answer:
      "No. Programs can be built for commercial gyms, home gyms, or minimal-equipment setups with clear exercise substitutions.",
  },
  {
    question: "Is nutrition included in the plans?",
    answer:
      "Yes. Every plan includes practical nutrition guidance so your training and food habits work together for steady progress.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients notice measurable improvements in energy, strength, and body composition within the first four to eight weeks.",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats: HeroStat[] = [
  { value: "250+", label: "Clients Coached" },
  { value: "97%", label: "Retention Rate" },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "Instagram",
    href: "#",
    viewBox: "0 0 24 24",
    iconPath:
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
  {
    label: "YouTube",
    href: "#",
    viewBox: "0 0 24 24",
    iconPath:
      "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9.1 2 12 2 12s0 2.9.4 4.8a2.8 2.8 0 0 0 2 2c1.9.5 7.6.5 7.6.5s5.7 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.5V8.5L16 12l-6 3.5z",
  },
  {
    label: "LinkedIn",
    href: "#",
    viewBox: "0 0 24 24",
    iconPath:
      "M4.9 3.5a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zM3 9.5h3.8V21H3V9.5zm6.3 0h3.7v1.6h.1c.5-1 1.8-2 3.8-2 4.1 0 4.9 2.7 4.9 6.2V21H18v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9.3V9.5z",
  },
];
