'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface AboutPageProps {
  locale: Locale;
}

export default function AboutPage({ locale }: AboutPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  // Mission icons mapping
  const missionIcons = [
    // Culture
    <svg key="culture" className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.232.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.232.477-4.5 1.253" />
    </svg>,
    // Community Support
    <svg key="community" className="w-6 h-6 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Organic/Green
    <svg key="organic" className="w-6 h-6 text-jungle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-primary text-white-warm py-24 relative overflow-hidden text-center border-b border-wood/50">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gallery/farmhouse-facilities/casona-los-rodriguez-historic-farmhouse-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />
        
        <Container className="relative z-10 py-6">
          <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
            {dict.aboutPage.subtitle}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            {isEs ? 'Sobre Nosotros' : 'About Us'}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body">
            {dict.aboutPage.desc}
          </p>
        </Container>
      </section>

      {/* History & Heritage Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <SectionTitle
                title={dict.aboutPage.historyTitle}
                subtitle={dict.aboutPage.historySubtitle}
                align="left"
                className="mb-4"
              />
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed">
                {dict.aboutPage.historyText1}
              </p>
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed">
                {dict.aboutPage.historyText2}
              </p>
            </div>

            {/* Right: Historic Facade Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
              <Image
                src="/images/gallery/farmhouse-facilities/casona-los-rodriguez-historic-farmhouse-001.webp"
                alt={isEs ? 'Fachada de la casona histórica de 120 años' : '120-year-old historic farmhouse facade'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values Grid Section */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15">
        <Container>
          <SectionTitle
            title={dict.aboutPage.missionTitle}
            subtitle={dict.aboutPage.missionSubtitle}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.aboutPage.missionList.map((val, idx) => (
              <div
                key={idx}
                className="bg-white-warm border border-sand/20 rounded-lg p-8 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300"
              >
                <span className="w-12 h-12 rounded-lg bg-sand/10 flex items-center justify-center mb-6">
                  {missionIcons[idx]}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-primary/75 font-body leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Family Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Family Experience Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
              <Image
                src="/images/gallery/family-experiences/casona-los-rodriguez-family-cultural-experience-001.webp"
                alt={isEs ? 'La familia Rodríguez compartiendo en la casona' : 'The Rodriguez family sharing at the casona'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <SectionTitle
                title={dict.aboutPage.familyTitle}
                subtitle={dict.aboutPage.familySubtitle}
                align="left"
                className="mb-4"
              />
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed">
                {dict.aboutPage.familyText}
              </p>
              <div className="pt-4 border-t border-sand/20 flex gap-4 text-xs font-heading font-bold text-gold uppercase tracking-wider">
                <span>{isEs ? 'Tradición' : 'Tradition'}</span>
                <span>•</span>
                <span>{isEs ? 'Identidad' : 'Identity'}</span>
                <span>•</span>
                <span>{isEs ? 'Comunidad' : 'Community'}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
