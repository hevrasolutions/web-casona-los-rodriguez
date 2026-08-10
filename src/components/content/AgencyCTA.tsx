import React from 'react';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

interface AgencyCTAProps {
  locale: Locale;
}

export default function AgencyCTA({ locale }: AgencyCTAProps) {
  const isEs = locale === 'es';

  const badge = isEs ? 'ORGANIZADORES DE VIAJES Y GRUPOS' : 'TRAVEL ORGANIZERS & GROUPS';
  const title = isEs
    ? '¿Planificas un viaje grupal o representas a una agencia?'
    : 'Planning a Group Trip or Representing an Agency?';
  
  const subtitle = isEs
    ? 'Diseñamos experiencias culturales costarricenses a la medida. Ofrecemos tarifas especiales y condiciones exclusivas para agencias de viajes, operadores receptivos (DMCs) y grupos privados.'
    : 'We design custom Costa Rican cultural experiences. We offer special rates and exclusive conditions for travel agencies, DMCs, and private groups.';

  const buttonLabel = isEs ? 'Solicitar cotización especial' : 'Request special quote';

  return (
    <section className="bg-white-warm py-16 border-y border-sand/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sand/5 via-transparent to-transparent pointer-events-none" />
      
      <Container className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <FadeIn direction="up">
          <span className="text-gold font-bold tracking-widest text-xs uppercase mb-3 block">
            {badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
            {title}
          </h2>
          <p className="font-body text-base text-primary/80 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <Button
            variant="primary"
            size="lg"
            href={isEs ? '/es/agencias' : '/en/agencies'}
            className="shadow-lg hover:scale-[1.03] transition-all duration-300 px-8 py-3.5"
          >
            {buttonLabel}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
