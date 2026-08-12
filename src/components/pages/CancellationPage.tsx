'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

interface CancellationPageProps {
  locale: Locale;
}

export default function CancellationPage({ locale }: CancellationPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  // Card themes
  const tierThemes = [
    { border: 'border-jungle/30', bg: 'bg-jungle/5', text: 'text-jungle' },
    { border: 'border-gold/30', bg: 'bg-gold/5', text: 'text-gold' },
    { border: 'border-terracotta/30', bg: 'bg-terracotta/5', text: 'text-terracotta' }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white-warm py-16 relative overflow-hidden text-center border-b border-wood/50">
        <Image
          src="/images/hero/casona-los-rodriguez-exterior-001.webp"
          alt={isEs ? 'Fachada de La Casona Los Rodríguez' : 'Casona Los Rodríguez Facade'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/65 to-black/60 pointer-events-none" />
        
        <Container className="relative z-10">
          <FadeIn direction="up">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {dict.cancellationPage.title}
            </h1>
            <p className="text-xs sm:text-sm text-white-warm/75 max-w-xl mx-auto leading-relaxed font-body">
              {dict.cancellationPage.subtitle}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream space-y-12">
        
        {/* Tier Cards Grid */}
        <Container>
          <FadeIn direction="up">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
              {dict.cancellationPage.tiersTitle}
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.cancellationPage.tiers.map((tier, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 100}>
                <div
                  className={`border rounded-lg p-6 text-center shadow-sm bg-white-warm flex flex-col justify-between items-center h-full ${tierThemes[idx].border}`}
                >
                  <div className="w-full">
                    <span className={`inline-block text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${tierThemes[idx].text}`}>
                      {tier.percent}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-3">
                      {tier.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary/75 font-body leading-relaxed text-left sm:text-center">
                      {tier.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>

        {/* Cancellation Process & Weather policy */}
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
            
            {/* Process */}
            <FadeIn direction="up" delay={100}>
              <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm space-y-4 h-full">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-primary border-b border-sand/15 pb-2">
                  {dict.cancellationPage.processTitle}
                </h3>
                <ul className="space-y-4">
                  {dict.cancellationPage.processSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 font-heading">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-primary/80 font-body leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Weather Policy */}
            <FadeIn direction="up" delay={200}>
              <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm space-y-4 h-full">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-primary border-b border-sand/15 pb-2">
                  {dict.cancellationPage.weatherTitle}
                </h3>
                <p className="text-xs sm:text-sm text-primary/80 font-body leading-relaxed">
                  {dict.cancellationPage.weatherDesc}
                </p>
                <div className="bg-gold/5 border border-gold/15 p-4 rounded text-xs text-primary/75 font-body leading-relaxed">
                  <strong>{isEs ? 'Consejo:' : 'Recommendation:'}</strong>{' '}
                  {isEs 
                    ? 'Recomendamos traer impermeable y calzado de tracción para el breve tramo de senderos en la huerta orgánica.'
                    : 'We recommend bringing a raincoat and traction shoes for the short section of trails in the organic garden.'}
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </section>
    </>
  );
}
