'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale, getDictionary } from '@/lib/i18n';
import { experiences } from '@/data/experiences';
import Container from '../ui/Container';
import BookingCard from '../experiences/BookingCard';
import ExperienceCard from '../experiences/ExperienceCard';
import SectionTitle from '../ui/SectionTitle';

interface ExperienceDetailPageProps {
  locale: Locale;
  slug: string;
}

export default function ExperienceDetailPage({
  locale,
  slug,
}: ExperienceDetailPageProps) {
  const isEs = locale === 'es';
  const dict = getDictionary(locale);

  // Resolve active experience
  const experience = experiences.find((exp) =>
    isEs ? exp.slug === slug : exp.slugEN === slug
  );

  if (!experience) {
    notFound();
  }

  const title = isEs ? experience.title : experience.titleEN;
  const description = isEs ? experience.description : experience.descriptionEN;
  const tagline = isEs ? experience.tagline : experience.taglineEN;

  // Resolve related experiences (up to 2 related)
  const related = experiences
    .filter((exp) => exp.slug !== experience.slug && exp.category === experience.category)
    .slice(0, 2);

  // If there are not enough in the same category, grab from others
  if (related.length < 2) {
    const fill = experiences
      .filter((exp) => exp.slug !== experience.slug && !related.some((r) => r.slug === exp.slug))
      .slice(0, 2 - related.length);
    related.push(...fill);
  }

  // Generic Dynamic Itinerary timeline nodes based on includes
  const itinerary = isEs
    ? [
        { time: '0:00 h', title: 'Bienvenida a la Casona', desc: 'Recibimiento por parte de la familia Rodríguez, reseña histórica del lugar y bebida natural refrescante.' },
        { time: '0:45 h', title: 'Recorrido e Interacción', desc: 'Visita guiada por el huerto de plantas medicinales, huerta orgánica e interacción con animales de granja.' },
        { time: '1:45 h', title: 'Molienda en el Trapiche', desc: 'Demostración del trapiche tradicional, degustación de caña de azúcar, melaza y dulce artesanal.' },
        { time: '2:30 h', title: 'Taller Gastronómico', desc: 'Lección práctica para elaborar tortillas palmeadas y preparación del almuerzo o cena campesina.' },
        { time: '3:30 h', title: 'Bailes y Presentación', desc: 'Almuerzo o cena típico familiar cocinado a la leña, seguido de una alegre presentación de bailes folclóricos.' },
      ]
    : [
        { time: '0:00 h', title: 'Welcome to the Farmhouse', desc: 'Reception by the Rodríguez family, historical review of the premises, and refreshing natural welcome drink.' },
        { time: '0:45 h', title: 'Farm Guided Tour', desc: 'Guided walk through our organic crop areas, medicinal herb gardens, and farm animals interaction.' },
        { time: '1:45 h', title: 'Sugarcane Milling', desc: 'Oxen sugarcane mill demonstration, tasting sugarcane stalk, fresh syrup, and traditional block sugar.' },
        { time: '2:30 h', title: 'Culinary Workshop', desc: 'Hands-on lesson to make corn tortillas and setup of the traditional wood-fired farmhouse lunch/dinner.' },
        { time: '3:30 h', title: 'Folk Show & Feast', desc: 'Family style typical meal, followed by a lively traditional Costa Rican music and folk dance show.' },
      ];

  const categoryLabels = {
    cultural: isEs ? 'Cultura' : 'Culture',
    gastronomia: isEs ? 'Gastronomía' : 'Gastronomy',
    nocturna: isEs ? 'Nocturna' : 'Night Experience',
    express: 'Express',
  };

  const hasImage = experience.heroImage !== 'TODO_IMAGE';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-cream border-b border-sand/15 py-3 text-xs select-none">
        <Container className="flex items-center gap-2 text-primary/60 font-body">
          <Link href={`/${locale}`} className="hover:text-terracotta transition-colors">
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
        </Container>
      </div>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            
            {/* Left/Main Content Column (2/3) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Detail Header Hero */}
              <div>
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-sand/20 text-wood text-xs font-bold px-2.5 py-1 rounded">
                    {categoryLabels[experience.category]}
                  </span>
                  {experience.badge && (
                    <span className="bg-terracotta text-white-warm text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {experience.badge}
                    </span>
                  )}
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
                  {title}
                </h1>
                
                <p className="font-subheading text-lg sm:text-xl text-gold italic font-medium leading-relaxed">
                  {tagline}
                </p>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md border border-sand/35 bg-sand/10">
                {hasImage ? (
                  <Image
                    src={experience.heroImage}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-sand/20 text-primary/40 text-sm font-semibold uppercase">
                    {isEs ? 'Imagen próximamente' : 'Image coming soon'}
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                  {isEs ? 'Descripción de la experiencia' : 'Experience Description'}
                </h2>
                <p className="text-base text-primary/80 font-body leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>

              {/* Inclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white-warm border border-sand/25 p-6 rounded-lg shadow-sm">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-jungle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {isEs ? 'Qué incluye' : 'What is included'}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {(isEs ? experience.includes : experience.includesEN).map((inc, index) => (
                      <li key={index} className="text-sm text-primary/80 font-body flex items-start gap-2">
                        <span className="text-jungle select-none mt-0.5">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {((isEs && experience.notIncludes) || (!isEs && experience.notIncludesEN)) && (
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {isEs ? 'No incluye' : 'Not included'}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {(isEs ? experience.notIncludes : experience.notIncludesEN)?.map((ninc, index) => (
                        <li key={index} className="text-sm text-primary/80 font-body flex items-start gap-2">
                          <span className="text-terracotta select-none mt-0.5">•</span>
                          <span>{ninc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Suggestions Itinerary */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  {isEs ? 'Itinerario Sugerido' : 'Suggested Itinerary'}
                </h2>
                
                <div className="flex flex-col gap-6 relative border-l-2 border-sand/30 pl-6 ml-3 py-2">
                  {itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Bullet node */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-terracotta rounded-full border-2 border-white-warm" />
                      
                      <span className="text-xs font-bold text-terracotta uppercase tracking-wider block mb-0.5">
                        {step.time}
                      </span>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary/70 leading-relaxed font-body">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos Gallery */}
              {experience.images.length > 0 && experience.images[0] !== 'TODO_IMAGE' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                    {isEs ? 'Galería de la experiencia' : 'Experience Gallery'}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {experience.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-sand/20 shadow-sm bg-sand/10">
                        <Image
                          src={img}
                          alt={`${title} - Photo ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Info Advice */}
              <div className="bg-cream/40 border border-sand/35 p-6 rounded-lg">
                <h3 className="font-heading text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {isEs ? 'Información Importante' : 'Important Information'}
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-primary/85 font-body">
                  <li>
                    <strong>{isEs ? 'Qué llevar:' : 'What to bring:'}</strong>{' '}
                    {isEs
                      ? 'Ropa cómoda, calzado cerrado para caminatas, repelente contra mosquitos, protector solar y cámara fotográfica.'
                      : 'Comfortable clothing, closed-toed shoes for walking, mosquito repellent, sunscreen, and a camera.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Restricciones dietéticas:' : 'Dietary restrictions:'}</strong>{' '}
                    {isEs
                      ? 'Por favor, infórmenos sobre cualquier alergia o dieta especial (vegetariano, vegano, sin gluten) al momento de realizar la reserva.'
                      : 'Please inform us about any allergies or special diet requirements (vegetarian, vegan, gluten-free) at the time of booking.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Puntualidad:' : 'Punctuality:'}</strong>{' '}
                    {isEs
                      ? 'Recomendamos llegar 15 minutos antes de la hora acordada para el inicio del tour.'
                      : 'We recommend arriving 15 minutes before the scheduled tour start time.'}
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Sidebar Column (1/3) */}
            <div className="lg:col-span-1">
              <BookingCard
                experience={experience}
                locale={locale}
                dict={dict}
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Related Experiences Section */}
      <section className="py-16 sm:py-24 bg-cream/40 border-t border-sand/15">
        <Container>
          <SectionTitle
            title={isEs ? 'Experiencias Relacionadas' : 'Related Experiences'}
            subtitle={isEs ? 'Siga explorando nuestras tradiciones' : 'Continue exploring our traditions'}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {related.map((exp) => (
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
    </>
  );
}
