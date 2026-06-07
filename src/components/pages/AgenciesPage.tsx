'use client';

import React from 'react';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import AgencyQuoteForm from '../forms/AgencyQuoteForm';
import SectionTitle from '../ui/SectionTitle';

interface AgenciesPageProps {
  locale: Locale;
}

export default function AgenciesPage({ locale }: AgenciesPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  // SVG benefit icons mapping
  const benefitIcons = [
    // Percent/Commission
    <svg key="percent" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Users/Guide
    <svg key="users" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    // Food/Kitchen
    <svg key="food" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.232.477-4.5 1.253" />
    </svg>,
    // Clock/Calendar
    <svg key="clock" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-primary text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/hero/casona-los-rodriguez-exterior-001.webp')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/85 pointer-events-none" />
        
        <Container className="relative z-10 py-6">
          <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
            {dict.agenciesPage.subtitle}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            {dict.agenciesPage.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-3xl mx-auto leading-relaxed font-body">
            {dict.agenciesPage.desc}
          </p>
        </Container>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Partnership Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
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
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-6">
                {dict.agenciesPage.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
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
                ))}
              </div>

              {/* Additional B2B Contact Sidebar */}
              <div className="border border-sand/30 rounded-lg overflow-hidden bg-primary text-white-warm p-6 shadow-sm">
                <h4 className="font-heading text-lg font-bold text-gold mb-2">
                  {isEs ? 'Atención Exclusiva B2B' : 'B2B Dedicated Support'}
                </h4>
                <p className="text-xs text-white-warm/75 font-body leading-relaxed mb-4">
                  {isEs 
                    ? '¿Tiene solicitudes urgentes, inspección de sitio o bloqueos de series anuales? Comuníquese directamente por nuestro canal exclusivo para operadores.'
                    : 'Do you have urgent requests, site inspection queries, or annual series blocks? Contact us directly via our operator channel.'}
                </p>
                <div className="space-y-2 font-body text-xs font-semibold">
                  <p className="flex items-center gap-2">
                    <span className="text-gold">Email:</span>
                    <a href={`mailto:${dict.contact.email}`} className="hover:text-gold transition-colors">{dict.contact.email}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gold">WhatsApp:</span>
                    <a href={`https://wa.me/${dict.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{dict.contact.whatsapp}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Agency Quote Form */}
            <div className="lg:col-span-7 w-full">
              <div className="mb-4 text-left">
                <h4 className="font-heading text-lg font-bold text-primary mb-1">
                  {dict.agenciesPage.quoteTitle}
                </h4>
                <p className="text-xs sm:text-sm text-primary/75 font-body leading-relaxed">
                  {dict.agenciesPage.quoteDesc}
                </p>
              </div>
              <AgencyQuoteForm locale={locale} />
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
