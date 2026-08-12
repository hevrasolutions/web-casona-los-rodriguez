import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, getDictionary } from '@/lib/i18n';
import { Experience } from '@/types/experience';
import { experiences } from '@/data/experiences';
import { galleryMetadata } from '@/data/gallery-metadata';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../experiences/ExperienceCard';
import ExperienceGallery from '../experiences/ExperienceGallery';
import BookingSidebar from '../experiences/BookingSidebar';
import MobileBookingBar from '../experiences/MobileBookingBar';
import FadeIn from '../ui/FadeIn';

import JsonLdScript from '../seo/JsonLdScript';
import { getExperienceEventSchema, getFaqSchema } from '@/lib/jsonLd';

interface ExperienceDetailV2Props {
  experience: Experience;
  locale: Locale;
}

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4688669405245!2d-84.594854!3d10.463655599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0733a3772c52f%3A0xe6f1eb4b6b926530!2sCasona%20Los%20Rodr%C3%ADguez!5e0!3m2!1ses-419!2scr!4v1780812023707!5m2!1ses-419!2scr';

export default function ExperienceDetailV2({
  experience,
  locale,
}: ExperienceDetailV2Props) {
  const isEs = locale === 'es';
  const dict = getDictionary(locale);

  const eventSchema = getExperienceEventSchema(experience, locale);
  const faqSchema = getFaqSchema((isEs ? experience.faq : experience.faqEN) ?? []);

  const title = isEs ? experience.title : experience.titleEN;
  const h1 = (isEs ? experience.h1 : experience.h1EN) ?? title;
  const tagline = isEs ? experience.tagline : experience.taglineEN;
  const overview = (isEs ? experience.overview : experience.overviewEN) ?? [];
  const highlights =
    (isEs ? experience.highlights : experience.highlightsEN) ?? [];
  const itinerary = (isEs ? experience.itinerary : experience.itineraryEN) ?? [];
  const itineraryNote = isEs
    ? experience.itineraryNote
    : experience.itineraryNoteEN;
  const foodOptions = isEs ? experience.foodOptions : experience.foodOptionsEN;
  const brandIdentity = isEs
    ? experience.brandIdentity
    : experience.brandIdentityEN;
  const faq = (isEs ? experience.faq : experience.faqEN) ?? [];
  const includes = isEs ? experience.includes : experience.includesEN;
  const notIncludes =
    (isEs ? experience.notIncludes : experience.notIncludesEN) ?? [];
  const whatToBring = isEs ? experience.whatToBring : experience.whatToBringEN;

  const categoryLabels: Record<string, string> = {
    cultural: isEs ? 'Cultura' : 'Culture',
    gastronomia: isEs ? 'Gastronomía' : 'Gastronomy',
    daypass: isEs ? 'Pase del Día' : 'Day Pass',
    nocturna: isEs ? 'Nocturna' : 'Night Experience',
    express: 'Express',
  };

  const badgeLabels: Record<string, string> = {
    bestseller: isEs ? 'Más Vendido' : 'Bestseller',
    premium: 'Premium',
    recommended: isEs ? 'Recomendado' : 'Recommended',
    express: 'Express',
  };

  const foodChips = [
    { icon: '🍗', label: isEs ? 'Pollo' : 'Chicken' },
    { icon: '🐖', label: isEs ? 'Cerdo' : 'Pork' },
    { icon: '🐟', label: isEs ? 'Pescado' : 'Fish' },
    { icon: '🌱', label: isEs ? 'Vegano-Vegetariano' : 'Vegan-Vegetarian' },
  ];

  const quickFacts = [
    {
      label: dict.common.duration,
      value: isEs ? experience.duration : experience.durationEN,
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    experience.minPersons
      ? {
          label: isEs ? 'Grupo' : 'Group',
          value: `${isEs ? 'Mín' : 'Min'} ${experience.minPersons}`,
          iconPath:
            'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        }
      : null,
    experience.difficulty || experience.difficultyEN
      ? {
          label: isEs ? 'Dificultad' : 'Difficulty',
          value: isEs ? experience.difficulty : experience.difficultyEN,
          iconPath:
            'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        }
      : null,
    experience.tourType || experience.tourTypeEN
      ? {
          label: isEs ? 'Tipo' : 'Type',
          value: isEs ? experience.tourType : experience.tourTypeEN,
          iconPath:
            'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
        }
      : null,
  ].filter(
    (fact): fact is { label: string; value: string; iconPath: string } =>
      !!fact?.value
  );

  const galleryAlt = (src: string, idx: number) => {
    const filename = src.split('/').pop() ?? '';
    const meta = galleryMetadata[filename];
    if (meta) return isEs ? meta.altES : meta.altEN;
    return `${title} — ${isEs ? 'foto' : 'photo'} ${idx + 1}`;
  };

  const related = experiences
    .filter(
      (exp) =>
        exp.slug !== experience.slug && exp.category === experience.category
    )
    .slice(0, 2);

  if (related.length < 2) {
    const fill = experiences
      .filter(
        (exp) =>
          exp.slug !== experience.slug &&
          !related.some((r) => r.slug === exp.slug)
      )
      .slice(0, 2 - related.length);
    related.push(...fill);
  }

  const faqJsonLd =
    faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        }
      : null;

  const sectionHeading =
    'font-heading text-2xl sm:text-3xl font-bold text-primary mb-5 sm:mb-6';

  return (
    <>
      <JsonLdScript data={[eventSchema, faqSchema]} />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 1. Hero full-width */}
      <section className="relative bg-stone-950 overflow-hidden">
        <Image
          src={experience.heroImage}
          alt={galleryAlt(experience.heroImage, 0)}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-black/60 to-primary/80 pointer-events-none" />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-28 flex flex-col items-center justify-center text-center">
          <FadeIn direction="up" className="w-full flex flex-col items-center text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white-warm leading-tight max-w-4xl text-center mx-auto">
              {h1}
            </h1>
            <p className="mt-4 sm:mt-6 font-subheading italic text-base sm:text-lg md:text-xl text-gold max-w-2xl leading-relaxed text-center mx-auto">
              {tagline}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* 2. Breadcrumbs + Badges */}
      <div className="bg-cream border-b border-sand/15 py-3 text-xs select-none">
        <Container className="flex flex-wrap items-center gap-x-2 gap-y-2 text-primary/60 font-body">
          <Link
            href={`/${locale}`}
            className="hover:text-terracotta transition-colors"
          >
            {isEs ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <Link
            href={isEs ? `/${locale}/experiencias` : `/${locale}/experiences`}
            className="hover:text-terracotta transition-colors"
          >
            {isEs ? 'Experiencias' : 'Experiences'}
          </Link>
          <span>/</span>
          <span className="text-primary font-semibold truncate max-w-[150px] sm:max-w-none">
            {title}
          </span>
          <span className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
            <span className="bg-sand/20 text-wood text-xs font-bold px-2.5 py-1 rounded">
              {categoryLabels[experience.category]}
            </span>
            {experience.badge && (
              <span className="bg-terracotta text-white-warm text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                {badgeLabels[experience.badge]}
              </span>
            )}
          </span>
        </Container>
      </div>

      {/* 3. Main 2-column layout (single column on mobile) */}
      <section className="py-8 sm:py-12 lg:py-16 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 flex flex-col gap-10 sm:gap-12">
              {/* Quick facts bar (tarjetas rápidas una por una) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {quickFacts.map((fact, idx) => (
                  <FadeIn key={fact.label} direction="up" delay={idx * 60}>
                    <div className="flex flex-col items-center text-center gap-1.5 bg-white-warm border border-sand/25 rounded-lg px-4 py-4 h-full">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={fact.iconPath}
                        />
                      </svg>
                      <span className="text-[11px] uppercase tracking-wide font-bold text-gold">
                        {fact.label}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {fact.value}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* 4. Overview */}
              <FadeIn direction="up">
                <div>
                  <h2 className={sectionHeading}>
                    {isEs ? 'Descripción de la experiencia' : 'Overview'}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {overview.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-base text-primary/80 font-body leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* 5. Highlights (tarjetas de vivencias una por una) */}
              {highlights.length > 0 && (
                <div>
                  <h2 className={sectionHeading}>
                    {isEs ? 'Lo que vas a vivir' : "What You'll Experience"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, idx) => (
                      <FadeIn key={idx} direction="up" delay={idx * 100}>
                        <div className="flex items-start gap-3 bg-white-warm border border-sand/25 rounded-lg p-4 sm:p-5 h-full">
                          <span className="text-2xl leading-none shrink-0" aria-hidden="true">
                            {highlight.icon}
                          </span>
                          <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed">
                            {highlight.text}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Gallery: clickable strip with lightbox */}
              {experience.images.length > 0 && (
                <div>
                  <FadeIn direction="up">
                    <h2 className={sectionHeading}>
                      {isEs ? 'Galería de la experiencia' : 'Experience Gallery'}
                    </h2>
                  </FadeIn>
                  <ExperienceGallery
                    items={experience.images.map((img, idx) => ({
                      src: img,
                      alt: galleryAlt(img, idx),
                    }))}
                    locale={locale}
                  />
                </div>
              )}

              {/* 7. Brand identity strip */}
              {brandIdentity && (
                <FadeIn direction="none">
                  <div className="rounded-lg bg-primary px-6 py-10 sm:px-10 sm:py-12 text-center">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gold mb-4">
                      {brandIdentity.title}
                    </h2>
                    <p className="font-subheading italic text-white-warm/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                      {brandIdentity.text}
                    </p>
                  </div>
                </FadeIn>
              )}

              {/* 8. Itinerary (pasos del itinerario uno por uno) */}
              {itinerary.length > 0 && (
                <div>
                  <h2 className={sectionHeading}>
                    {isEs ? 'Itinerario' : 'Itinerary'}
                  </h2>
                  <div className="flex flex-col gap-6 relative border-l-2 border-sand/30 pl-6 ml-3 py-2">
                    {itinerary.map((step, idx) => (
                      <FadeIn key={idx} direction="up" delay={idx * 80}>
                        <div className="relative">
                          <span className="absolute -left-[31px] top-1 w-4 h-4 bg-terracotta rounded-full border-2 border-white-warm" />
                          <p className="font-heading text-base sm:text-lg font-bold text-primary leading-snug">
                            {step}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                  {itineraryNote && (
                    <p className="mt-4 text-xs sm:text-sm italic text-primary/60 font-body">
                      {itineraryNote}
                    </p>
                  )}
                </div>
              )}

              {/* 9. Food options (etiquetas / chips de comida una por una) */}
              {foodOptions && (
                <div>
                  <h2 className={sectionHeading}>
                    {isEs ? 'Opciones de alimentación' : 'Meal Options'}
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                    {foodChips.map((chip, idx) => (
                      <FadeIn key={chip.label} direction="up" delay={idx * 60}>
                        <span className="inline-flex items-center gap-2 bg-white-warm border border-sand/30 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-primary/85">
                          <span aria-hidden="true">{chip.icon}</span>
                          {chip.label}
                        </span>
                      </FadeIn>
                    ))}
                  </div>
                  <FadeIn direction="up">
                    <p className="text-sm sm:text-base text-primary/75 font-body leading-relaxed">
                      {foodOptions}
                    </p>
                  </FadeIn>
                </div>
              )}

              {/* 10. Includes / Not included + practical info */}
              <div className="flex flex-col gap-6">
                <div className="bg-white-warm border border-sand/25 rounded-lg p-6 sm:p-8">
                  {/* Sub-bloque 1: Incluye */}
                  <FadeIn direction="up">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4">
                        {isEs ? 'Incluye' : 'Includes'}
                      </h3>
                      <ul className="flex flex-col gap-2.5 sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6">
                        {includes.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-primary/80 font-body flex items-start gap-2"
                          >
                            <span className="text-jungle font-bold select-none mt-0.5">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>

                  {/* Sub-bloque 2: No incluye */}
                  {notIncludes.length > 0 && (
                    <FadeIn direction="up" delay={120}>
                      <div className="mt-6 pt-5 border-t border-sand/20">
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4">
                          {isEs ? 'No incluye' : 'Not included'}
                        </h3>
                        <ul className="flex flex-col gap-2.5 sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6">
                          {notIncludes.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-primary/80 font-body flex items-start gap-2"
                            >
                              <span className="text-terracotta font-bold select-none mt-0.5">
                                ✗
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  )}

                  {/* Sub-bloque 3: Qué llevar */}
                  {whatToBring && whatToBring.length > 0 && (
                    <FadeIn direction="up" delay={240}>
                      <div className="mt-6 pt-5 border-t border-sand/20">
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4">
                          {isEs ? 'Qué llevar' : 'What to bring'}
                        </h3>
                        <ul className="flex flex-col gap-2.5 sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6">
                          {whatToBring.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-primary/80 font-body flex items-start gap-2"
                            >
                              <span className="text-jungle font-bold select-none mt-0.5">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  )}
                </div>

                {/* Meeting point */}
                <FadeIn direction="up">
                  <div className="bg-white-warm border border-sand/25 rounded-lg p-6 sm:p-8">
                    {experience.meetingPointUrl && (
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4">
                          {isEs ? 'Punto de encuentro' : 'Meeting point'}
                        </h3>
                        <div className="rounded-lg overflow-hidden border border-sand/30 mb-3">
                          <iframe
                            src={MAPS_EMBED_URL}
                            title={
                              isEs
                                ? 'Mapa del punto de encuentro en Casona Los Rodríguez'
                                : 'Meeting point map at Casona Los Rodríguez'
                            }
                            className="w-full h-44 sm:h-56 border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <a
                          href={experience.meetingPointUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-colonial hover:text-terracotta underline transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {isEs ? 'Abrir en Google Maps' : 'Open in Google Maps'}
                        </a>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>

              {/* 11. FAQ (preguntas frecuentes una por una) */}
              {faq.length > 0 && (
                <div>
                  <h2 className={sectionHeading}>
                    {isEs
                      ? 'Preguntas frecuentes'
                      : 'Frequently Asked Questions'}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faq.map((item, idx) => (
                      <FadeIn key={idx} direction="up" delay={idx * 80}>
                        <details className="group bg-white-warm border border-sand/25 rounded-lg">
                          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-primary text-sm sm:text-base">
                            {item.q}
                            <svg
                              className="w-4 h-4 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>
                          <p className="px-5 pb-5 text-sm text-primary/80 font-body leading-relaxed">
                            {item.a}
                          </p>
                        </details>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking column: in-flow card on mobile, sticky sidebar on desktop */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28 self-start z-20">
              <FadeIn direction="up" delay={200}>
                <BookingSidebar
                  experience={experience}
                  locale={locale}
                  dict={dict}
                />
              </FadeIn>
            </aside>
          </div>
        </Container>
      </section>

      {/* 12. Related Experiences */}
      <section className="py-14 sm:py-20 bg-cream/40 border-t border-sand/15 overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={isEs ? 'Experiencias Relacionadas' : 'Related Experiences'}
              subtitle={
                isEs
                  ? 'Siga explorando nuestras tradiciones'
                  : 'Continue exploring our traditions'
              }
              className="mb-12"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {related.map((exp, idx) => (
              <FadeIn key={exp.slug} direction="up" delay={idx * 150}>
                <ExperienceCard
                  experience={exp}
                  locale={locale}
                  dict={dict}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Spacer so the fixed mobile bar never covers the last content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <MobileBookingBar experience={experience} locale={locale} dict={dict} />
    </>
  );
}
