import React from 'react';
import Button, { ButtonVariant, ButtonSize } from './Button';
import { getBookingUrl } from '@/lib/booking';

interface BookingCTAProps {
  experienceSlug?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function BookingCTA({
  experienceSlug,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
}: BookingCTAProps) {
  const url = getBookingUrl(experienceSlug);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      href={url}
      external={url !== '#'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
