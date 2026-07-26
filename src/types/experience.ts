export type ExperienceCategory =
  | 'cultural'
  | 'gastronomia'
  | 'daypass'
  | 'nocturna'
  | 'express';

export type ExperienceBadge =
  | 'bestseller'
  | 'premium'
  | 'recommended'
  | 'express';

export interface ExperiencePricing {
  adult: number;
  child?: number;
  infant: number;
  groupDiscount?: {
    minPersons: number;
    price: number;
  };
}

export interface ExperienceHighlight {
  icon: string;
  text: string;
}

export interface ExperienceFaqItem {
  q: string;
  a: string;
}

export interface ExperienceBrandIdentity {
  title: string;
  text: string;
}

export interface Experience {
  slug: string;
  slugEN: string;
  title: string;
  titleEN: string;
  category: ExperienceCategory;
  badge?: ExperienceBadge;
  tagline: string;
  taglineEN: string;
  duration: string;
  durationEN: string;
  minPersons?: number;
  schedule?: string;
  scheduleEN?: string;
  pricing: ExperiencePricing;
  includes: string[];
  includesEN: string[];
  notIncludes?: string[];
  notIncludesEN?: string[];
  images: string[];
  heroImage: string;
  description: string;
  descriptionEN: string;
  bookingUrl?: string;
  seoTitle: string;
  seoTitleEN: string;
  seoDescription: string;
  seoDescriptionEN: string;
  keywords: string[];
  keywordsEN: string[];

  // Contenido extendido de la página de detalle.
  // La presencia de `overview` activa la plantilla nueva (rollout por fases).
  h1?: string;
  h1EN?: string;
  overview?: string[];
  overviewEN?: string[];
  highlights?: ExperienceHighlight[];
  highlightsEN?: ExperienceHighlight[];
  itinerary?: string[];
  itineraryEN?: string[];
  itineraryNote?: string;
  itineraryNoteEN?: string;
  foodOptions?: string;
  foodOptionsEN?: string;
  brandIdentity?: ExperienceBrandIdentity;
  brandIdentityEN?: ExperienceBrandIdentity;
  faq?: ExperienceFaqItem[];
  faqEN?: ExperienceFaqItem[];
  maxPersons?: number;
  difficulty?: string;
  difficultyEN?: string;
  tourType?: string;
  tourTypeEN?: string;
  whatToBring?: string[];
  whatToBringEN?: string[];
  meetingPointUrl?: string;
  whatsappBookingUrl?: {
    es: string;
    en: string;
  };
  seoHighlights?: string[];
}
