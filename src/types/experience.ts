export type ExperienceCategory =
  | 'cultural'
  | 'gastronomia'
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
}
