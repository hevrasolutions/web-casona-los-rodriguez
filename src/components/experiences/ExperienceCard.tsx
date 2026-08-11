import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { Experience } from '@/types/experience';
import Button from '../ui/Button';
import BookingCTA from '../ui/BookingCTA';

interface ExperienceCardProps {
  experience: Experience;
  locale: Locale;
  dict: Dictionary;
  variant?: 'home' | 'catalog';
}

export default function ExperienceCard({
  experience,
  locale,
  dict,
  variant = 'catalog',
}: ExperienceCardProps) {
  const isEs = locale === 'es';
  const title = isEs ? experience.title : experience.titleEN;
  const tagline = isEs ? experience.tagline : experience.taglineEN;
  const duration = isEs ? experience.duration : experience.durationEN;
  const detailHref = isEs
    ? `/es/experiencias/${experience.slug}`
    : `/en/experiences/${experience.slugEN}`;

  // Badge styles
  const badgeLabels = {
    bestseller: isEs ? 'Más Vendido' : 'Bestseller',
    premium: 'Premium',
    recommended: isEs ? 'Recomendado' : 'Recommended',
    express: 'Express',
  };

  const badgeStyles = {
    bestseller: 'bg-terracotta text-white-warm',
    premium: 'bg-primary text-gold border border-gold/40',
    recommended: 'bg-blue-colonial text-white-warm',
    express: 'bg-jungle text-white-warm',
  };

  // Category labels
  const categoryLabels = {
    cultural: isEs ? 'Cultura' : 'Culture',
    gastronomia: isEs ? 'Gastronomía' : 'Gastronomy',
    daypass: isEs ? 'Pase del Día' : 'Day Pass',
    nocturna: isEs ? 'Nocturna' : 'Night Experience',
    express: 'Express',
  };

  const categoryColors = {
    cultural: 'text-blue-colonial',
    gastronomia: 'text-terracotta',
    daypass: 'text-jungle',
    nocturna: 'text-wood',
    express: 'text-jungle',
  };

  const hasImage = experience.heroImage !== 'TODO_IMAGE';

  return (
    <article className="flex flex-col bg-white-warm rounded-lg overflow-hidden border border-sand/20 hover:shadow-xl transition-all duration-300 group h-full">
      {/* Image Container - Clickable Link */}
      <Link
        href={detailHref}
        aria-label={title}
        className="relative aspect-[4/3] w-full overflow-hidden bg-sand/10 block cursor-pointer"
      >
        {hasImage ? (
          <Image
            src={experience.heroImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-sand/15 text-primary/40 text-xs font-semibold uppercase">
            {isEs ? 'Imagen próximamente' : 'Image coming soon'}
          </div>
        )}
        
        {/* Category Label */}
        <span className="absolute top-4 left-4 z-10 bg-cream/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded shadow-sm">
          <span className={categoryColors[experience.category]}>
            {categoryLabels[experience.category]}
          </span>
        </span>

        {/* Badge (if applicable) */}
        {experience.badge && (
          <span
            className={`absolute top-4 right-4 z-10 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm ${
              badgeStyles[experience.badge]
            }`}
          >
            {badgeLabels[experience.badge]}
          </span>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Duration & Min Persons */}
          <div className="flex items-center gap-3 text-xs text-primary/60 font-semibold mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {duration}
            </span>
            {experience.minPersons && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {dict.common.minPersons}: {experience.minPersons}
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary group-hover:text-terracotta transition-colors mb-2 leading-tight">
            <Link href={detailHref} className="hover:text-terracotta transition-colors">
              {title}
            </Link>
          </h3>
          
          <p className="text-sm text-primary/75 font-body line-clamp-3 mb-4">
            {tagline}
          </p>

          {/* Highlights checklist for catalog view */}
          {variant === 'catalog' && (
            <ul className="mb-5 space-y-1.5 text-xs text-primary/80 border-t border-sand/15 pt-3">
              {(isEs ? experience.includes : experience.includesEN).slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-jungle font-bold">✓</span>
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pricing & CTAs */}
        <div className="mt-auto pt-4 border-t border-sand/15">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs text-primary/60 font-semibold uppercase">
              {isEs ? 'Precio desde' : 'Price from'}
            </span>
            <span className="text-2xl font-bold text-terracotta">
              ${experience.pricing.adult}{' '}
              <span className="text-xs text-primary/60 font-medium lowercase">
                /{dict.common.perPerson}
              </span>
            </span>
          </div>

          {variant === 'catalog' && (
            <div className="text-[11px] text-primary/70 mb-3 flex items-center justify-between bg-sand/10 px-2.5 py-1 rounded">
              <span>{isEs ? 'Niños (5–10):' : 'Children (5–10):'} <strong className="text-primary">{experience.pricing.child ? `$${experience.pricing.child}` : '-'}</strong></span>
              <span className="text-jungle font-medium">{isEs ? 'Infantes (0–4): Gratis' : 'Infants (0–4): Free'}</span>
            </div>
          )}

          {variant === 'home' ? (
            <Button
              variant="ghost"
              size="sm"
              href={detailHref}
              className="w-full text-center text-xs py-2.5 font-semibold"
            >
              {isEs ? 'Ver detalle e itinerario' : 'View details & itinerary'}
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Button variant="ghost" size="sm" href={detailHref} className="text-center w-full text-xs">
                {isEs ? 'Ver detalles' : 'View details'}
              </Button>
              <BookingCTA
                experienceSlug={experience.slug}
                locale={locale}
                href={experience.whatsappBookingUrl?.[locale]}
                variant="primary"
                size="sm"
                className="text-center w-full text-xs"
              >
                {dict.common.bookingLabel}
              </BookingCTA>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
