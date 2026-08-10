import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { experiences } from '@/data/experiences';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from './ExperienceCard';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

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
    'clase-cocina-tradicional-la-fortuna',
    'casona-farm-day-pass-la-fortuna',
  ];

  // Keep them in the specific order we want
  const featured = featuredSlugs
    .map((slug) => experiences.find((exp) => exp.slug === slug))
    .filter((exp): exp is typeof experiences[0] => !!exp);

  return (
    <section id="experiencias" className="py-20 sm:py-28 bg-cream/30 border-t border-b border-sand/10 overflow-hidden">
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            title={isEs ? 'Nuestras Experiencias' : 'Our Experiences'}
            subtitle={isEs ? 'Descubre las tradiciones del campo costarricense' : 'Discover the traditions of the Costa Rican countryside'}
            className="mb-14"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((exp, idx) => (
            <FadeIn key={exp.slug} direction="up" delay={idx * 150}>
              <ExperienceCard
                experience={exp}
                locale={locale}
                dict={dict}
                variant="home"
              />
            </FadeIn>
          ))}
        </div>

        {/* Section Bottom CTA to Explore All Experiences */}
        <FadeIn direction="up" delay={450}>
          <div className="mt-14 text-center">
            <Button
              href={isEs ? '/es/experiencias' : '/en/experiences'}
              variant="secondary"
              size="lg"
              className="px-8 shadow-md hover:scale-[1.02] transition-transform duration-200"
            >
              {isEs ? 'Ver Todas las Experiencias' : 'View All Experiences'}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
