import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { Experience } from '@/types/experience';
import BookingCTA from '../ui/BookingCTA';
import Button from '../ui/Button';

interface BookingCardProps {
  experience: Experience;
  locale: Locale;
  dict: Dictionary;
}

export default function BookingCard({
  experience,
  locale,
  dict,
}: BookingCardProps) {
  const isEs = locale === 'es';

  // WhatsApp link configuration
  const title = isEs ? experience.title : experience.titleEN;
  const phoneNumber = '50688094163';
  const whatsappMessage = isEs
    ? `Hola, me gustaría solicitar más información sobre la experiencia "${title}".`
    : `Hello, I would like to request more information about the "${title}" experience.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white-warm border border-sand/30 rounded-lg p-6 lg:p-8 shadow-md sticky top-24">
      {/* Title */}
      <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-4 pb-3 border-b border-sand/15 uppercase tracking-wide">
        {isEs ? 'Detalle de Reserva' : 'Booking Details'}
      </h3>

      {/* Pricing List */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-primary/70 font-semibold">{dict.common.adults}</span>
          <span className="text-2xl font-bold text-terracotta">${experience.pricing.adult}</span>
        </div>
        {experience.pricing.child !== undefined && (
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-primary/70 font-semibold">{dict.common.children}</span>
            <span className="text-lg font-bold text-primary">${experience.pricing.child}</span>
          </div>
        )}
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-primary/70 font-semibold">{dict.common.infants}</span>
          <span className="text-sm font-semibold text-jungle uppercase">{dict.common.free}</span>
        </div>
      </div>

      {/* Quick Specs */}
      <div className="flex flex-col gap-3.5 mb-8 text-sm border-t border-b border-sand/15 py-4 text-primary/80 font-body">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong className="text-primary font-semibold">{dict.common.duration}:</strong>{' '}
            {isEs ? experience.duration : experience.durationEN}
          </span>
        </div>

        {experience.minPersons && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>
              <strong className="text-primary font-semibold">{dict.common.minPersons}:</strong>{' '}
              {experience.minPersons} {isEs ? 'personas' : 'people'}
            </span>
          </div>
        )}

        {(experience.schedule || experience.scheduleEN) && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              <strong className="text-primary font-semibold">{isEs ? 'Horario:' : 'Schedule:'}</strong>{' '}
              {isEs ? experience.schedule : experience.scheduleEN}
            </span>
          </div>
        )}
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 mb-4">
        <BookingCTA
          experienceSlug={experience.slug}
          variant="primary"
          size="lg"
          className="w-full text-center"
        >
          {isEs ? 'Reservar esta experiencia' : 'Book this experience'}
        </BookingCTA>
        <Button
          variant="ghost"
          size="lg"
          href={whatsappUrl}
          external
          className="w-full text-center border border-wood text-wood bg-transparent hover:bg-wood/5"
        >
          {dict.contact.whatsapp}
        </Button>
      </div>

      {/* B2B Quote Link */}
      <div className="text-center pt-2">
        <Link
          href={isEs ? '/es/agencias' : '/en/agencies'}
          className="text-xs text-primary/60 hover:text-terracotta underline font-semibold transition-colors"
        >
          {isEs ? '¿Eres agencia o grupo?' : 'Are you an agency or a group?'}
        </Link>
      </div>
    </div>
  );
}
