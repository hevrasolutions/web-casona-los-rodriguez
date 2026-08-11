import React from 'react';
import Button, { ButtonVariant, ButtonSize } from './Button';
import { getBookingUrl } from '@/lib/booking';
import { Locale } from '@/lib/i18n';

interface BookingCTAProps {
  experienceSlug?: string;
  locale?: Locale;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function BookingCTA({
  experienceSlug,
  locale = 'es',
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
}: BookingCTAProps) {
  const targetUrl = href || getBookingUrl(experienceSlug, locale);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      href={targetUrl}
      external={targetUrl !== '#'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
