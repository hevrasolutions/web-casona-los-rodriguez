'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';

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
