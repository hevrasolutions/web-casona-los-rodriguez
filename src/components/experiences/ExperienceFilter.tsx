import React from 'react';
import { Locale } from '@/lib/i18n';

interface ExperienceFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  locale: Locale;
}

export default function ExperienceFilter({
  activeCategory,
  onCategoryChange,
  locale,
}: ExperienceFilterProps) {
  const isEs = locale === 'es';

  const categories = [
    { id: 'all', label: isEs ? 'Todas' : 'All' },
    { id: 'cultural', label: isEs ? 'Tours Culturales' : 'Cultural Tours' },
    { id: 'gastronomia', label: isEs ? 'Gastronomía & Cocina' : 'Culinary & Cooking' },
    { id: 'daypass', label: isEs ? 'Pases de Día' : 'Day Passes' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 select-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeCategory === cat.id
              ? 'bg-terracotta text-white-warm shadow-md border-b-2 border-primary/20 scale-[1.03]'
              : 'bg-white-warm text-primary border border-sand/30 hover:border-gold hover:bg-cream/40'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
