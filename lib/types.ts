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

export interface BmiCategoryCopy {
  label: string;
  rangeLabel: string;
}

export interface BmiPageContent {
  metadata: {
    title: string;
    description: string;
  };
  pageTitle: string;
  pageSubtitle: string;
  intro: string;
  heightLabel: string;
  weightLabel: string;
  optionalHint: string;
  calculateLabel: string;
  clearLabel: string;
  resultTitle: string;
  resultEmpty: string;
  bmiAbbrev: string;
  yourCategoryLabel: string;
  categories: {
    underweight: BmiCategoryCopy;
    normal: BmiCategoryCopy;
    overweight: BmiCategoryCopy;
    obese: BmiCategoryCopy;
  };
  disclaimer: string;
  backHomeLabel: string;
  gaugeCaption: string;
  validation: {
    heightRange: string;
    weightRange: string;
    enterBoth: string;
  };
}

export type ProteinLevelId =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "athlete";

export interface ProteinLevelCopy {
  label: string;
  description: string;
}

export interface ProteinPageContent {
  metadata: {
    title: string;
    description: string;
  };
  pageTitle: string;
  pageSubtitle: string;
  intro: string;
  weightLabel: string;
  activityLabel: string;
  activityHint: string;
  optionalHint: string;
  calculateLabel: string;
  clearLabel: string;
  resultTitle: string;
  resultEmpty: string;
  dailyTargetLabel: string;
  perKgCaption: string;
  perMealTitle: string;
  perMealMealsNote: string;
  disclaimer: string;
  backHomeLabel: string;
  levels: Record<ProteinLevelId, ProteinLevelCopy>;
  validation: {
    weightRange: string;
  };
}

export type MacroPresetId =
  | "balanced"
  | "highProtein"
  | "performance"
  | "lowerCarb"
  | "custom";

export interface MacroPresetCopy {
  label: string;
  description: string;
}

export interface MacroPageContent {
  metadata: {
    title: string;
    description: string;
  };
  pageTitle: string;
  pageSubtitle: string;
  intro: string;
  caloriesLabel: string;
  caloriesHint: string;
  splitLabel: string;
  splitHint: string;
  optionalHint: string;
  calculateLabel: string;
  clearLabel: string;
  customSplitLabel: string;
  proteinPercentLabel: string;
  carbsPercentLabel: string;
  fatPercentLabel: string;
  percentSumError: string;
  percentHint: string;
  resultTitle: string;
  resultEmpty: string;
  totalCaloriesLabel: string;
  energyNote: string;
  roundedMacrosEnergy: string;
  proteinG: string;
  carbsG: string;
  fatG: string;
  macroBreakdownLabel: string;
  splitShortLabels: {
    protein: string;
    carbs: string;
    fat: string;
  };
  disclaimer: string;
  backHomeLabel: string;
  presets: {
    balanced: MacroPresetCopy;
    highProtein: MacroPresetCopy;
    performance: MacroPresetCopy;
    lowerCarb: MacroPresetCopy;
    custom: MacroPresetCopy;
  };
  validation: {
    caloriesRange: string;
    percentInvalid: string;
  };
}

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyPageContent {
  metadata: {
    title: string;
    description: string;
  };
  pageTitle: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
  backHomeLabel: string;
}
