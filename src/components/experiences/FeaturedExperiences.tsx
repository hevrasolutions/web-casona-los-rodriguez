import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { experiences } from '@/data/experiences';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from './ExperienceCard';
import Button from '../ui/Button';

interface FeaturedExperiencesProps {
  locale: Locale;
  dict: Dictionary;
}

export default function FeaturedExperiences({
  locale,
  dict,
}: FeaturedExperiencesProps) {
  const isEs = locale === 'es';

  // Filter the 3 featured experiences
  const featuredSlugs = [
    'experiencia-cultural-completa',
    'noche-campesina-premium',
    'cocina-tradicional-familia-local',
  ];

  // Keep them in the specific order we want
  const featured = featuredSlugs
    .map((slug) => experiences.find((exp) => exp.slug === slug))
    .filter((exp): exp is typeof experiences[0] => !!exp);

  return (
    <section className="py-20 sm:py-28 bg-cream/30 border-t border-b border-sand/10">
      <Container>
        <SectionTitle
          title={isEs ? 'Experiencias Destacadas' : 'Featured Experiences'}
          subtitle={isEs ? 'Nuestras mejores actividades' : 'Our top rated activities'}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((exp) => (
            <ExperienceCard
              key={exp.slug}
              experience={exp}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            variant="ghost"
            size="lg"
            href={`/${locale}/experiencias`}
            className="min-w-[220px]"
          >
            {isEs ? 'Ver todas las experiencias' : 'View all experiences'}
          </Button>
        </div>
      </Container>
    </section>
  );
}
