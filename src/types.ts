export interface ProjectDemo {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  previewUrl: string;
  demoType: 'bakery' | 'dental' | 'consulting' | 'boutique' | 'gym';
  badge: string;
  metrics: { label: string; value: string }[];
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  billingPeriod: string;
  highlighted?: boolean;
  badge?: string;
  deliveryDays: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface CalculatorAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'core' | 'ai' | 'marketing' | 'ecommerce';
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  businessType: string;
  avatar: string;
  quote: string;
  rating: number;
  results: string;
}

export interface QuoteFormState {
  businessName: string;
  businessType: string;
  contactName: string;
  whatsapp: string;
  email: string;
  selectedPlan: string;
  addons: string[];
  hasDomain: boolean;
  hasLogo: boolean;
  notes: string;
}
