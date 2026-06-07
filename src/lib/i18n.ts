import { es } from '@/dictionaries/es';
import { en } from '@/dictionaries/en';
import { Dictionary } from '@/dictionaries/es';

export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
