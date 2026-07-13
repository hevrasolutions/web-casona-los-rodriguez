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

  // Filter the 3 experiences
  const featuredSlugs = [
    'tour-historico-cultural-la-fortuna',
    'clase-cocina-tia-yami',
    'day-pass-casona-finca',
  ];

  // Keep them in the specific order we want
  const featured = featuredSlugs
    .map((slug) => experiences.find((exp) => exp.slug === slug))
    .filter((exp): exp is typeof experiences[0] => !!exp);

  return (
    <section id="experiencias" className="py-20 sm:py-28 bg-cream/30 border-t border-b border-sand/10">
      <Container>
        <SectionTitle
          title={isEs ? 'Nuestras Experiencias' : 'Our Experiences'}
          subtitle={isEs ? 'Descubre las tradiciones del campo costarricense' : 'Discover the traditions of the Costa Rican countryside'}
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
      </Container>
    </section>
  );
}
