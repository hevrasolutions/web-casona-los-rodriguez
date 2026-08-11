import { experiences } from '@/data/experiences';

export function getBookingUrl(experienceSlug?: string, locale: string = 'es'): string {
  const baseUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  // 1. If external booking engine URL is set, use it with UTM parameters
  if (baseUrl && baseUrl !== 'TODO_BOOKING_URL') {
    const params = new URLSearchParams({
      utm_source: 'website',
      utm_medium: 'booking_cta',
      utm_campaign: experienceSlug || 'general_booking',
    });
    return `${baseUrl}?${params.toString()}`;
  }

  // 2. Default to WhatsApp booking link with prefilled activity message
  const isEs = locale === 'es';
  if (experienceSlug) {
    const exp = experiences.find(
      (e) => e.slug === experienceSlug || e.slugEN === experienceSlug
    );
    if (exp?.whatsappBookingUrl) {
      return isEs ? exp.whatsappBookingUrl.es : exp.whatsappBookingUrl.en;
    }
  }

  // General fallback WhatsApp booking message
  const text = isEs
    ? 'Hola, quisiera solicitar información y reservar en Casona Los Rodríguez.'
    : 'Hello, I would like to request information and book at Casona Los Rodríguez.';

  return `https://wa.me/50660817929?text=${encodeURIComponent(text)}`;
}
