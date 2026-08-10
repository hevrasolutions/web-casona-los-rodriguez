import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { Experience } from '@/types/experience';
import ExperienceCard from './ExperienceCard';
import FadeIn from '../ui/FadeIn';

interface ExperienceGridProps {
  experiences: Experience[];
  locale: Locale;
  dict: Dictionary;
}

export default function ExperienceGrid({
  experiences,
  locale,
  dict,
}: ExperienceGridProps) {
  const isEs = locale === 'es';

  if (experiences.length === 0) {
    return (
      <div className="py-20 text-center text-primary/60 border border-dashed border-sand/40 rounded-lg bg-cream/10">
        <svg className="w-12 h-12 mx-auto text-sand mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-base font-semibold font-heading">
          {isEs
            ? 'No se encontraron experiencias en esta categoría'
            : 'No experiences found in this category'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((exp, idx) => (
        <FadeIn key={exp.slug} direction="up" delay={idx * 150}>
          <ExperienceCard
            experience={exp}
            locale={locale}
            dict={dict}
          />
        </FadeIn>
      ))}
    </div>
  );
}
