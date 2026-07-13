'use client';

import React, { useState } from 'react';
import { Locale, getDictionary } from '@/lib/i18n';
import { experiences } from '@/data/experiences';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ExperienceFilter from '../experiences/ExperienceFilter';
import ExperienceGrid from '../experiences/ExperienceGrid';
import BookingCTA from '../ui/BookingCTA';

interface ExperiencesPageProps {
  locale: Locale;
}

export default function ExperiencesPage({ locale }: ExperiencesPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  const title = isEs ? 'Nuestras Experiencias' : 'Our Experiences';
  const subtitle = isEs ? 'Actividades Culturales y Gastronómicas' : 'Cultural & Culinary Activities';
  
  const description = isEs
    ? 'Descubra el auténtico campo costarricense a través de nuestros tours interactivos. Cocine a la leña, explore la finca, extraiga jugo de caña en el trapiche de bueyes y baile al ritmo del folclor local.'
    : 'Discover the authentic Costa Rican countryside through our interactive tours. Cook over wood fire, explore the farm, press sugarcane at the oxen-driven mill, and dance to local folk rhythms.';

  // Filter logic
  const filtered = activeCategory === 'all'
    ? experiences
    : experiences.filter((exp) => exp.category === activeCategory);

  // FAQ contents
  const faqs = [
    {
      q: isEs ? '¿Cómo reservo una experiencia?' : 'How do I book an experience?',
      a: isEs
        ? 'Para reservar, haga clic en el botón "Reservar ahora" de cualquier experiencia. Será redirigido a nuestro motor de reservas externo oficial para seleccionar fecha, hora y realizar el pago de forma segura.'
        : 'To book, click the "Book Now" button on any experience. You will be redirected to our official external booking engine to select your date, time, and complete the payment securely.',
    },
    {
      q: isEs ? '¿Las actividades incluyen alimentación?' : 'Are meals included in the activities?',
      a: isEs
        ? 'Sí, la mayoría de nuestras experiencias completas incluyen un almuerzo o cena campesina preparado 100% en fogón de leña con ingredientes frescos de nuestra huerta.'
        : 'Yes, most of our full experiences include a farmhouse lunch or dinner prepared 100% on a wood-fired stove using fresh ingredients from our organic garden.',
    },
    {
      q: isEs ? '¿Es adecuado para niños e infantes?' : 'Is it suitable for children and infants?',
      a: isEs
        ? '¡Totalmente! Casona Los Rodríguez es una experiencia familiar. Los niños tienen tarifas con descuento y los infantes (menores de 3 años) entran gratis en todas las actividades.'
        : 'Absolutely! Casona Los Rodríguez is a family-friendly experience. Children have discounted rates, and infants (under 3 years old) join for free on all activities.',
    },
  ];

  return (
    <>
      {/* Page Header Hero */}
      <section className="bg-primary text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gallery/traditional-events/casona-los-rodriguez-costa-rican-cultural-event-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />
        
        <Container className="relative z-10 py-6">
          <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
            {subtitle}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body">
            {description}
          </p>
        </Container>
      </section>

      {/* Catalog Grid Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container>
          {/* Filters */}
          <ExperienceFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            locale={locale}
          />

          {/* Grid */}
          <ExperienceGrid
            experiences={filtered}
            locale={locale}
            dict={dict}
          />
        </Container>
      </section>

      {/* Quick Comparison Section */}
      <section className="py-16 sm:py-24 bg-cream/40 border-t border-b border-sand/15">
        <Container>
          <SectionTitle
            title={isEs ? 'Comparativa Rápida' : 'Quick Comparison'}
            subtitle={isEs ? 'Encuentre su experiencia ideal' : 'Find your ideal experience'}
            className="mb-12"
          />

          <div className="overflow-x-auto rounded-lg border border-sand/30 shadow-sm">
            <table className="w-full text-left border-collapse bg-white-warm text-sm font-body">
              <thead>
                <tr className="bg-primary text-white-warm font-heading text-base border-b border-wood">
                  <th className="p-4 font-semibold">{isEs ? 'Experiencia' : 'Experience'}</th>
                  <th className="p-4 font-semibold">{isEs ? 'Duración' : 'Duration'}</th>
                  <th className="p-4 font-semibold">{isEs ? 'Precio Adulto' : 'Adult Price'}</th>
                  <th className="p-4 font-semibold">{isEs ? 'Precio Niño' : 'Child Price'}</th>
                  <th className="p-4 font-semibold">{isEs ? 'Destacado' : 'Highlights'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/20">
                {experiences.map((exp) => (
                  <tr key={exp.slug} className="hover:bg-cream/20 transition-colors">
                    <td className="p-4 font-bold text-primary font-heading">
                      {isEs ? exp.title : exp.titleEN}
                    </td>
                    <td className="p-4 text-primary/80">
                      {isEs ? exp.duration : exp.durationEN}
                    </td>
                    <td className="p-4 text-terracotta font-semibold">
                      ${exp.pricing.adult}
                    </td>
                    <td className="p-4 text-primary/80">
                      {exp.pricing.child ? `$${exp.pricing.child}` : '-'}
                    </td>
                    <td className="p-4 text-xs text-primary/70 max-w-xs truncate md:max-w-md md:whitespace-normal">
                      {isEs ? exp.includes.slice(0, 3).join(', ') : exp.includesEN.slice(0, 3).join(', ')}...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container className="max-w-3xl">
          <SectionTitle
            title={isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            subtitle={isEs ? 'Resolviendo sus dudas' : 'Answering your questions'}
            className="mb-14"
          />

          <div className="flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white-warm border border-sand/20 p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-2 flex gap-2">
                  <span className="text-gold">Q:</span> {faq.q}
                </h3>
                <p className="text-sm text-primary/80 font-body leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-wood text-white-warm text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-wood/30 opacity-60 pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 tracking-wide">
            {isEs ? '¿Listo para vivir la cultura tica?' : 'Ready to experience Tico culture?'}
          </h2>
          <p className="text-sm sm:text-base text-white-warm/85 max-w-xl mb-8 font-body">
            {isEs
              ? 'Reserve en línea de forma segura y asegure su espacio en nuestra casona tradicional hoy mismo.'
              : 'Book online securely and secure your spot at our traditional farmhouse today.'}
          </p>
          <BookingCTA variant="secondary" size="lg" className="min-w-[220px]">
            {dict.common.bookingLabel}
          </BookingCTA>
        </Container>
      </section>
    </>
  );
}
