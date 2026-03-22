export interface NavLink {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface FooterSocialLink extends FooterLink {
  iconPath: string;
  viewBox: string;
}
