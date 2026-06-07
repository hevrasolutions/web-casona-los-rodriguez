'use client';

import React from 'react';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';

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
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/hero/casona-los-rodriguez-exterior-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />
        
        <Container className="relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {dict.cancellationPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-white-warm/75 max-w-xl mx-auto leading-relaxed font-body">
            {dict.cancellationPage.subtitle}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream space-y-12">
        
        {/* Tier Cards Grid */}
        <Container>
          <h2 className="font-heading text-2xl font-bold text-primary text-center mb-10">
            {dict.cancellationPage.tiersTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.cancellationPage.tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-6 text-center shadow-sm bg-white-warm flex flex-col justify-between items-center ${tierThemes[idx].border}`}
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
            ))}
          </div>
        </Container>

        {/* Cancellation Process & Weather policy */}
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
            
            {/* Process */}
            <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
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

            {/* Weather Policy */}
            <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
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

          </div>
        </Container>
      </section>
    </>
  );
}
