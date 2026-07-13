import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { Experience } from '@/types/experience';
import Button from '../ui/Button';

interface MobileBookingBarProps {
  experience: Experience;
  locale: Locale;
  dict: Dictionary;
}

export default function MobileBookingBar({
  experience,
  locale,
  dict,
}: MobileBookingBarProps) {
  const bookingHref = experience.whatsappBookingUrl?.[locale] ?? '#';

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-white-warm/95 backdrop-blur-sm border-t border-sand/30 shadow-[0_-4px_14px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-4 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] uppercase tracking-wide font-semibold text-primary/60">
            {dict.common.priceFrom}
          </span>
          <span className="text-xl font-bold text-terracotta">
            ${experience.pricing.adult}{' '}
            <span className="text-xs text-primary/60 font-medium lowercase">
              /{dict.common.perPerson}
            </span>
          </span>
        </div>
        <Button
          variant="primary"
          size="md"
          href={bookingHref}
          external
          className="flex-1 max-w-[220px] text-center"
        >
          {dict.common.bookingLabel}
        </Button>
      </div>
    </div>
  );
}
