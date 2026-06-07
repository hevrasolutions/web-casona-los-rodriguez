export function getBookingUrl(experienceSlug?: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BOOKING_URL || 'TODO_BOOKING_URL';

  if (baseUrl === 'TODO_BOOKING_URL') {
    return '#'; // No abrir nada mientras no hay URL real
  }

  const params = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'booking_cta',
    utm_campaign: experienceSlug || 'general_booking',
  });

  return `${baseUrl}?${params.toString()}`;
}
