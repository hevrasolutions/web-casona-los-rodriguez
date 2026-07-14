import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { Experience } from '@/types/experience';
import Button from '../ui/Button';

interface BookingSidebarProps {
  experience: Experience;
  locale: Locale;
  dict: Dictionary;
}

export default function BookingSidebar({
  experience,
  locale,
  dict,
}: BookingSidebarProps) {
  const isEs = locale === 'es';
  const bookingHref = experience.whatsappBookingUrl?.[locale] ?? '#';
  // Duración, grupo, dificultad y tipo viven en la barra de datos rápidos de
  // la página; aquí solo se muestran los horarios.
  const schedule = isEs ? experience.schedule : experience.scheduleEN;

  return (
    <div className="bg-white-warm border border-sand/30 rounded-lg p-6 lg:p-8 shadow-md lg:sticky lg:top-24">
      {/* Title */}
      <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-4 pb-3 border-b border-sand/15 uppercase tracking-wide">
        {isEs ? 'Detalle de Reserva' : 'Booking Details'}
      </h3>

      {/* Pricing List */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-primary/70 font-semibold">
            {dict.common.adultsRange}
          </span>
          <span className="text-2xl font-bold text-terracotta">
            ${experience.pricing.adult}
          </span>
        </div>
        {experience.pricing.child !== undefined && (
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-primary/70 font-semibold">
              {dict.common.childrenRange}
            </span>
            <span className="text-lg font-bold text-primary">
              ${experience.pricing.child}
            </span>
          </div>
        )}
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-primary/70 font-semibold">
            {dict.common.infantsRange}
          </span>
          <span className="text-sm font-semibold text-jungle uppercase">
            {dict.common.free}
          </span>
        </div>
      </div>

      {/* Schedule */}
      {schedule && (
        <div className="flex justify-between gap-3 mb-8 text-sm border-t border-b border-sand/15 py-4 text-primary/80 font-body">
          <span className="text-primary font-semibold shrink-0">
            {isEs ? 'Horarios' : 'Schedule'}:
          </span>
          <span className="text-right">{schedule}</span>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3 mb-4">
        <Button
          variant="primary"
          size="lg"
          href={bookingHref}
          external
          className="w-full text-center"
        >
          {dict.common.bookingLabel}
        </Button>
        <Button
          variant="ghost"
          size="lg"
          href={bookingHref}
          external
          className="w-full text-center border border-jungle text-jungle bg-transparent hover:bg-jungle hover:border-jungle"
        >
          <svg
            className="w-4 h-4 fill-current mr-2 shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.69 1.97 14.221.944 11.6.944c-5.448 0-9.873 4.372-9.878 9.802-.002 1.748.465 3.454 1.353 4.96l-.98 3.58 3.673-.951zm12.864-6.55c-.328-.164-1.94-.958-2.24-1.07-.3-.109-.519-.164-.738.164-.22.327-.847 1.07-1.039 1.288-.19.22-.382.245-.71.082-.328-.164-1.386-.51-2.64-1.63-1.002-.894-1.678-2.001-1.875-2.328-.197-.328-.02-.505.143-.668.148-.147.329-.382.493-.573.164-.19.219-.328.328-.546.11-.218.055-.41-.027-.573-.082-.164-.738-1.782-1.01-2.438-.266-.64-.537-.552-.738-.562-.19-.01-.41-.01-.629-.01-.218 0-.574.082-.875.41-.3.327-1.15 1.12-1.15 2.73s1.176 3.16 1.336 3.37c.16.21 2.312 3.532 5.6 4.95 2.736 1.18 3.293.945 4.496.832 1.203-.112 2.24-.916 2.55-1.802.31-.887.31-1.649.218-1.802-.09-.153-.328-.245-.656-.41z" />
          </svg>
          +506 6390-1190
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
