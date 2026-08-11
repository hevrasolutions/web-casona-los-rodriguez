'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import Button from '../ui/Button';
import BookingCTA from '../ui/BookingCTA';
import Container from '../ui/Container';

interface HeroBasicProps {
  locale: Locale;
  dict: Dictionary;
}

export default function HeroBasic({ locale, dict }: HeroBasicProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isEs = locale === 'es';
  const h1Text = isEs 
    ? 'Donde la tierra cuenta su historia' 
    : 'Where the land tells its story';
  const subtitleText = isEs
    ? 'Una casona rural de más de 120 años donde el visitante cocina, come, aprende, baila y revive las tradiciones del campo costarricense.'
    : 'A 120+ year old rural farmhouse where visitors cook, eat, learn, dance, and revive Costa Rican countryside traditions.';

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[80vh] flex items-center justify-center bg-[#1c140e] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#1c140e]">
        <Image
          src="/images/hero/casona-los-rodriguez-exterior-001.webp"
          alt={isEs ? 'Fachada exterior de la Casona Los Rodríguez' : 'Exterior facade of Casona Los Rodríguez'}
          fill
          priority
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover object-center scale-105 transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-20 text-center text-white-warm py-24 sm:py-32 flex flex-col items-center">
        <span className="font-subheading text-lg sm:text-xl md:text-2xl text-gold mb-4 block font-medium animate-fade-in">
          {isEs ? 'Bienvenidos a La Fortuna' : 'Welcome to La Fortuna'}
        </span>
        <h1
          id="hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-white-warm leading-[1.15]"
        >
          {h1Text}
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white-warm/85 font-normal leading-relaxed">
          {subtitleText}
        </p>
        
        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/experiencias`}
            className="shadow-lg min-w-[200px]"
          >
            {dict.common.exploreExperiences}
          </Button>
          <BookingCTA
            variant="secondary"
            size="lg"
            className="shadow-md min-w-[200px]"
          >
            {dict.common.bookingLabel}
          </BookingCTA>
        </div>
      </Container>
    </section>
  );
}
