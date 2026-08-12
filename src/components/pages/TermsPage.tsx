'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';

interface TermsPageProps {
  locale: Locale;
}

export default function TermsPage({ locale }: TermsPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

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
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {dict.termsPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-white-warm/75 max-w-xl mx-auto leading-relaxed font-body">
            {dict.termsPage.subtitle}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sidebar Jump Links */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-24 border border-sand/20 rounded-lg p-5 bg-white-warm text-left shadow-sm">
              <h4 className="font-heading text-xs font-bold text-primary/85 uppercase tracking-wider mb-4 border-b border-sand/15 pb-2">
                {isEs ? 'Índice de Secciones' : 'Section Index'}
              </h4>
              <nav className="flex flex-col gap-3 font-body text-xs sm:text-sm font-semibold">
                {dict.termsPage.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-primary/70 hover:text-terracotta transition-colors duration-200"
                  >
                    {section.title.split('. ')[1] || section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Terms Content Column */}
            <div className="lg:col-span-9 w-full bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-10 text-left shadow-sm space-y-8">
              {dict.termsPage.sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary border-b border-sand/15 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-3 font-body text-sm sm:text-base text-primary/80 leading-relaxed">
                    {section.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}

              <div className="pt-8 border-t border-sand/15 text-xs text-primary/50 font-body">
                {isEs
                  ? 'Última actualización: Junio de 2026. Sujeto a cambios sin previo aviso.'
                  : 'Last updated: June 2026. Subject to change without prior notice.'}
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
