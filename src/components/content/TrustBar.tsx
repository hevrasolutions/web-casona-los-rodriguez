import React from 'react';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';

interface TrustBarProps {
  locale: Locale;
}

export default function TrustBar({ locale }: TrustBarProps) {
  const isEs = locale === 'es';

  const sectionTitle = isEs 
    ? '¿Qué hace que esta experiencia sea única?' 
    : 'What makes this experience unique?';

  const items = [
    {
      title: isEs ? 'Historia Viva' : 'Living History',
      desc: isEs 
        ? 'Adéntrese en un tesoro arquitectónico preservado desde 1904, donde cada rincón cuenta una historia del patrimonio costarricense.' 
        : 'Step into a preserved 1904 architectural treasure where every corner tells a story of Costa Rican heritage.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Sabores Auténticos' : 'Authentic Flavors',
      desc: isEs 
        ? 'Saboree el alma de la finca con recetas tradicionales transmitidas por generaciones y cocinadas 100% a la leña.' 
        : 'Taste the soul of the farm with traditional recipes passed down through generations, cooked over wood fire.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Inmersión Rural' : 'Rural Immersion',
      desc: isEs 
        ? 'Reconéctese con la tierra a través de actividades prácticas que celebran el ritmo tranquilo de la vida de campo.' 
        : 'Reconnect with the earth through hands-on activities that celebrate the slow pace of rural life.',
      icon: (
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19v2M9 21h6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C8 3 7 7 7 10c0 2.5 1.5 4.5 4 4.9V19h2v-4.1c2.5-.4 4-2.4 4-4.9 0-3-1-7-5-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-cream/40 border-y border-sand/20 py-16 sm:py-24 text-center">
      <Container>
        {/* Section Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
          {sectionTitle}
        </h2>

        {/* Divider with central leaf icon */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-16">
          <div className="h-[1px] bg-gold/30 flex-1"></div>
          <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.2 2-3 3.5-5 4.5 2 1 3.8 2.5 5 4.5 1.2-2 3-3.5 5-4.5-2-1-3.8-2.5-5-4.5z M12 12v9" />
          </svg>
          <div className="h-[1px] bg-gold/30 flex-1"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center group text-center"
            >
              {/* Circular Icon Container */}
              <div className="w-16 h-16 rounded-full border border-gold bg-white-warm flex items-center justify-center text-gold mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-primary/80 font-body leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
