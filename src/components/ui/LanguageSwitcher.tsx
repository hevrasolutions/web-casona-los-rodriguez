'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { experiences } from '@/data/experiences';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export default function LanguageSwitcher({
  currentLocale,
  className = '',
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const pathSegments = pathname.split('/');
    // pathSegments[0] is empty, pathSegments[1] is the locale
    pathSegments[1] = newLocale;

    // Resolve localized path segments when switching
    if (pathSegments.length >= 3) {
      const parentSegment = pathSegments[2];

      if (newLocale === 'en') {
        // ES -> EN segment mappings
        if (parentSegment === 'nosotros') pathSegments[2] = 'about';
        else if (parentSegment === 'agencias') pathSegments[2] = 'agencies';
        else if (parentSegment === 'contacto') pathSegments[2] = 'contact';
        else if (parentSegment === 'experiencias') {
          pathSegments[2] = 'experiences';
          // Translate slug to English if on a detail page
          if (pathSegments.length >= 4) {
            const spanishSlug = pathSegments[3];
            const exp = experiences.find((e) => e.slug === spanishSlug);
            if (exp) {
              pathSegments[3] = exp.slugEN;
            }
          }
        }
        else if (parentSegment === 'galeria') pathSegments[2] = 'gallery';
        else if (parentSegment === 'restaurante') pathSegments[2] = 'restaurant';
        else if (parentSegment === 'terminos-y-condiciones') pathSegments[2] = 'terms-and-conditions';
        else if (parentSegment === 'politica-de-cancelacion') pathSegments[2] = 'cancellation-policy';
      } else {
        // EN -> ES segment mappings
        if (parentSegment === 'about') pathSegments[2] = 'nosotros';
        else if (parentSegment === 'agencies') pathSegments[2] = 'agencias';
        else if (parentSegment === 'contact') pathSegments[2] = 'contacto';
        else if (parentSegment === 'experiences') {
          pathSegments[2] = 'experiencias';
          // Translate slug to Spanish if on a detail page
          if (pathSegments.length >= 4) {
            const englishSlug = pathSegments[3];
            const exp = experiences.find((e) => e.slugEN === englishSlug);
            if (exp) {
              pathSegments[3] = exp.slug;
            }
          }
        }
        else if (parentSegment === 'gallery') pathSegments[2] = 'galeria';
        else if (parentSegment === 'restaurant') pathSegments[2] = 'restaurante';
        else if (parentSegment === 'terms-and-conditions') pathSegments[2] = 'terminos-y-condiciones';
        else if (parentSegment === 'cancellation-policy') pathSegments[2] = 'politica-de-cancelacion';
      }
    }

    const newPath = pathSegments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className={`flex items-center gap-1 text-sm font-semibold ${className}`}>
      {locales.map((locale, idx) => (
        <React.Fragment key={locale}>
          {idx > 0 && <span className="text-primary/30">|</span>}
          <button
            onClick={() => handleLanguageChange(locale)}
            className={`cursor-pointer uppercase transition-all duration-200 py-1 px-2 rounded-md text-xs sm:text-sm ${
              currentLocale === locale
                ? 'text-terracotta bg-cream shadow-sm font-bold border border-sand/30'
                : 'text-primary/70 hover:text-primary hover:bg-cream/50'
            }`}
          >
            {locale}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
