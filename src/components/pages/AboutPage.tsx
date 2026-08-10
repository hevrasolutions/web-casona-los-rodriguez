'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../ui/FadeIn';

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
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gallery/farmhouse/casona-los-rodriguez-historic-farmhouse-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />
        
        <Container className="relative z-10 py-6">
          <FadeIn direction="up">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
              {dict.aboutPage.subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
              {dict.aboutPage.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body">
              {dict.aboutPage.desc}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Casona Origin & Plaque 1 Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Plaque Text & History */}
            <div className="lg:col-span-6 text-left space-y-6">
              <FadeIn direction="left">
                <SectionTitle
                  title={dict.aboutPage.casonaHistoryTitle}
                  subtitle={dict.aboutPage.casonaHistorySubtitle}
                  align="left"
                  className="mb-4"
                />
                
                {/* Commemorative Plaque Quote Card */}
                <div className="bg-white-warm border-l-4 border-gold p-6 rounded-r-lg shadow-sm border-sand/20">
                  <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider block mb-2">
                    {isEs ? 'Placa Conmemorativa Oficial' : 'Official Commemorative Plaque'}
                  </span>
                  <blockquote className="text-base sm:text-lg font-subheading italic text-primary leading-relaxed">
                    "{dict.aboutPage.casonaHistoryText}"
                  </blockquote>
                </div>
              </FadeIn>
            </div>

            {/* Right: Historic Facade Image */}
            <div className="lg:col-span-6 w-full">
              <FadeIn direction="right" delay={150}>
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
                  <Image
                    src="/images/gallery/farmhouse/casona-los-rodriguez-historic-farmhouse-001.webp"
                    alt={isEs ? 'Fachada de la casona histórica de 120 años' : '120-year-old historic farmhouse facade'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* President Rafael Yglesias Castro Section */}
      <section className="py-20 sm:py-28 bg-cream/50 border-t border-b border-sand/15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: President Photo / Historic Image */}
            <div className="lg:col-span-5 w-full">
              <FadeIn direction="left">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-primary/10">
                  <Image
                    src="/images/placeholders/rafael-yglesias-castro.png"
                    alt={isEs ? 'Ex-Presidente Rafael Yglesias Castro y legado de la casona' : 'Former President Rafael Yglesias Castro and farmhouse legacy'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-gold font-heading text-xs font-bold uppercase tracking-wider">
                      {isEs ? 'Benemérito de la Patria' : 'National Hero of Costa Rica'}
                    </span>
                    <h3 className="text-white-warm font-heading text-xl font-bold">
                      {dict.aboutPage.presidentTitle}
                    </h3>
                    <p className="text-white-warm/80 text-xs font-body">
                      1894 – 1902
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Detailed Historical Text */}
            <div className="lg:col-span-7 text-left space-y-5">
              <FadeIn direction="right" delay={150}>
                <SectionTitle
                  title={dict.aboutPage.presidentTitle}
                  subtitle={dict.aboutPage.presidentSubtitle}
                  align="left"
                  className="mb-2"
                />
                <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed mb-4">
                  {dict.aboutPage.presidentText1}
                </p>
                <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed mb-4">
                  {dict.aboutPage.presidentText2}
                </p>
                <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed">
                  {dict.aboutPage.presidentText3}
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Colones Banknote Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <FadeIn direction="up">
            <div className="bg-white-warm border border-gold/30 rounded-xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Recreated 5 Colones Bill Image */}
                <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-sand/30 shadow-md bg-cream/30">
                  <Image
                    src="/images/gallery/farmhouse/costa-rica-5-colones-bill-v2.png"
                    alt={isEs ? 'Billete de 5 Colones Serie D con Rafael Yglesias Castro y Alegoría al café' : '5 Colones bill D series with Rafael Yglesias Castro and Allegory of Coffee'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2"
                  />
                </div>

                {/* Right: Placa text for 5 Colones Bill */}
                <div className="lg:col-span-6 text-left space-y-4">
                  <span className="inline-block px-3 py-1 bg-gold/15 text-primary text-xs font-heading font-bold rounded-full uppercase tracking-wider">
                    {dict.aboutPage.billSubtitle}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                    {dict.aboutPage.billTitle}
                  </h3>
                  <blockquote className="text-sm sm:text-base text-primary/85 font-body leading-relaxed border-l-2 border-gold pl-4 italic">
                    "{dict.aboutPage.billText}"
                  </blockquote>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 120-Year Historical Timeline Section */}
      <section className="py-20 sm:py-28 bg-cream/60 border-t border-b border-sand/20 relative overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={dict.aboutPage.timelineTitle}
              subtitle={dict.aboutPage.timelineSubtitle}
              className="mb-16 sm:mb-20"
            />
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical line on desktop, left vertical line on mobile */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-gold/30 via-gold to-gold/30 -translate-x-1/2" />

            <div className="space-y-12 sm:space-y-16">
              {dict.aboutPage.timelineEvents.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <FadeIn key={idx} direction={isEven ? "right" : "left"} delay={idx * 80}>
                    <div
                      className={`relative flex flex-col md:flex-row items-start md:items-center ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Event Marker Node */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cream border-2 border-gold flex items-center justify-center shadow-md z-10">
                        <span className="w-3.5 h-3.5 rounded-full bg-terracotta inline-block" />
                      </div>

                      {/* Content Card */}
                      <div className="ml-14 md:ml-0 md:w-1/2 md:px-8 text-left">
                        <div className="bg-white-warm border border-sand/25 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <span className="inline-block px-3 py-1 bg-gold/15 text-primary text-xs font-heading font-bold rounded-full mb-2">
                            {evt.year}
                          </span>
                          <h4 className="font-heading text-xl font-bold text-primary mb-2">
                            {evt.title}
                          </h4>
                          <p className="text-sm font-body text-primary/80 leading-relaxed">
                            {evt.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Cultural Pillars Grid */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={dict.aboutPage.missionTitle}
              subtitle={dict.aboutPage.missionSubtitle}
              className="mb-16"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.aboutPage.missionList.map((val, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 150}>
                <div className="bg-white-warm border border-sand/20 rounded-lg p-8 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300 h-full">
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
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Family Rodríguez Arias Section (Centered Full Width) */}
      <section className="py-20 sm:py-28 bg-cream border-t border-sand/15 text-center">
        <Container className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="space-y-6">
              <SectionTitle
                title={dict.aboutPage.familyTitle}
                subtitle={dict.aboutPage.familySubtitle}
                align="center"
                className="mb-4"
              />
              <p className="text-base sm:text-xl text-primary/85 font-body leading-relaxed max-w-3xl mx-auto">
                {dict.aboutPage.familyText}
              </p>
              <div className="pt-6 border-t border-sand/25 flex justify-center gap-6 text-xs sm:text-sm font-heading font-bold text-gold uppercase tracking-wider">
                <span>{isEs ? 'Tradición' : 'Tradition'}</span>
                <span>•</span>
                <span>{isEs ? 'Identidad' : 'Identity'}</span>
                <span>•</span>
                <span>{isEs ? 'Comunidad' : 'Community'}</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

