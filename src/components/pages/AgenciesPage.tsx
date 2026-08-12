'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import AgencyQuoteForm from '../forms/AgencyQuoteForm';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';

interface AgenciesPageProps {
  locale: Locale;
}

export default function AgenciesPage({ locale }: AgenciesPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  // Benefits list
  const benefits = [
    {
      title: isEs ? 'Tarifas Especiales B2B' : 'Special B2B Rates',
      desc: isEs
        ? 'Precios y condiciones exclusivas para agencias de viajes, tour operadores y DMCs.'
        : 'Exclusive prices and terms for travel agencies, tour operators, and DMCs.',
    },
    {
      title: isEs ? 'Atención Personalizada' : 'Personalized Assistance',
      desc: isEs
        ? 'Un equipo dedicado para gestionar la logística y requerimientos de sus grupos.'
        : 'A dedicated team to manage your groups\' logistics and specific requirements.',
    },
    {
      title: isEs ? 'Experiencias a la Medida' : 'Tailored Experiences',
      desc: isEs
        ? 'Adaptación de horarios, menús y actividades según las necesidades de su itinerario.'
        : 'Flexible schedules, menus, and activities adapted to your itinerary needs.',
    },
    {
      title: isEs ? 'Capacidad para Grupos' : 'Group Capacity',
      desc: isEs
        ? 'Instalaciones preparadas para recibir grupos desde pequeños hasta 100 personas.'
        : 'Facilities ready to host groups ranging from small gatherings up to 100 guests.',
    },
  ];

  const benefitIcons = [
    // B2B Rates
    <svg key="rates" className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Dedicated Team
    <svg key="team" className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Tailored Experiences
    <svg key="tailored" className="w-6 h-6 text-jungle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm12 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z" />
    </svg>,
    // Group Capacity
    <svg key="capacity" className="w-6 h-6 text-blue-colonial" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4" />
    </svg>
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-stone-950 text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <Image
          src="/images/hero/casona-los-rodriguez-exterior-001.webp"
          alt={isEs ? 'Fachada de La Casona Los Rodríguez' : 'Casona Los Rodríguez Facade'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-black/60 to-primary/80 pointer-events-none" />
        
        <Container className="relative z-10 py-6 flex flex-col items-center justify-center text-center">
          <FadeIn direction="up" className="w-full flex flex-col items-center text-center">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block text-center mx-auto">
              {dict.agenciesPage.subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight text-center mx-auto max-w-4xl">
              {dict.agenciesPage.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-3xl mx-auto leading-relaxed font-body text-center">
              {dict.agenciesPage.desc}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Partnership Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <FadeIn direction="up">
                <SectionTitle
                  title={dict.agenciesPage.benefitsTitle}
                  subtitle={isEs ? 'Alianzas Estratégicas' : 'Strategic Alliances'}
                  align="left"
                  className="mb-6"
                />
                <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed mb-6">
                  {isEs 
                    ? 'Diseñamos planes adaptados para mayoristas, agencias locales, turoperadores independientes y coordinadores de grupos corporativos. Contáctenos hoy para recibir nuestro dossier de tarifas netas actualizadas.'
                    : 'We design tailored packages for wholesalers, local agencies, independent operators, and corporate group organizers. Contact us today to receive our updated net rates manual.'}
                </p>
              </FadeIn>

              {/* Benefits Checklist */}
              <div className="space-y-6">
                {dict.agenciesPage.benefits.map((benefit, idx) => (
                  <FadeIn key={idx} direction="up" delay={idx * 100}>
                    <div className="flex gap-4 items-start">
                      <span className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                        {benefitIcons[idx]}
                      </span>
                      <div>
                        <h4 className="font-heading text-base sm:text-lg font-bold text-primary mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-primary/75 font-body leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Additional B2B Contact Sidebar */}
              <FadeIn direction="up" delay={300}>
                <div className="border border-sand/30 rounded-lg overflow-hidden bg-primary text-white-warm p-6 shadow-sm">
                  <h4 className="font-heading text-lg font-bold text-gold mb-2">
                    {isEs ? 'Atención Directa para Operadores' : 'Dedicated Operator Support'}
                  </h4>
                  <p className="text-xs text-white-warm/75 font-body leading-relaxed mb-4">
                    {isEs 
                      ? '¿Tiene solicitudes urgentes, inspección de sitio o bloqueos de series anuales? Comuníquese directamente por nuestro canal exclusivo para operadores.'
                      : 'Do you have urgent requests, site inspection queries, or annual series blocks? Contact us directly via our operator channel.'}
                  </p>
                  <div className="space-y-2 font-body text-xs font-semibold">
                    <p className="flex items-center gap-2">
                      <span className="text-gold">Email:</span>
                      <a href={`mailto:${dict.contact.agencyEmail}`} className="hover:text-gold transition-colors">{dict.contact.agencyEmail}</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gold">WhatsApp:</span>
                      <a href={`https://wa.me/${dict.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{dict.contact.whatsapp}</a>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Agency Quote Form */}
            <div className="lg:col-span-7 w-full">
              <FadeIn direction="up" delay={150}>
                <div className="mb-4 text-left">
                  <h4 className="font-heading text-lg font-bold text-primary mb-1">
                    {dict.agenciesPage.quoteTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-primary/75 font-body leading-relaxed">
                    {dict.agenciesPage.quoteDesc}
                  </p>
                </div>
                <AgencyQuoteForm locale={locale} />
              </FadeIn>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
