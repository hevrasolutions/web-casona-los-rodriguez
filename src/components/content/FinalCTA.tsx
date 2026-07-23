import React from 'react';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import BookingCTA from '../ui/BookingCTA';
import FullViewportParallax from '../ui/FullViewportParallax';

interface FinalCTAProps {
  locale: Locale;
}

export default function FinalCTA({ locale }: FinalCTAProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Vive Costa Rica como una familia local.' : 'Experience Costa Rica like a local family.';
  const desc = isEs
    ? 'Reserve hoy su experiencia cultural y gastronómica en La Fortuna. Espacios limitados para garantizar una atención familiar y personalizada.'
    : 'Book your cultural and culinary experience in La Fortuna today. Limited spaces to ensure warm and personalized family attention.';

  const buttonLabel = isEs ? 'Reservar experiencia' : 'Book experience';

  return (
    <FullViewportParallax
      bgImageSrc="/images/gallery/farmhouse/casona-los-rodriguez-rural-farmhouse-costa-rica-001.webp"
      bgImageAlt={isEs ? 'Fachada rústica de Casona Los Rodríguez' : 'Rustic facade of Casona Los Rodríguez'}
      overlayOpacityClass="bg-primary/80"
    >
      <Container className="flex flex-col items-center select-none">
        <span className="font-subheading text-lg sm:text-xl text-gold font-medium uppercase tracking-wider mb-4 block">
          {isEs ? 'El Campo le Espera' : 'The Countryside Awaits'}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight text-white-warm mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-white-warm/80 font-body max-w-xl mb-10 leading-relaxed">
          {desc}
        </p>
        <BookingCTA
          variant="primary"
          size="lg"
          className="shadow-xl px-10 py-4 hover:scale-[1.03] transition-transform duration-200"
        >
          {buttonLabel}
        </BookingCTA>
      </Container>
    </FullViewportParallax>
  );
}
