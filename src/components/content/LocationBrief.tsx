import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

interface LocationBriefProps {
  locale: Locale;
  dict: Dictionary;
}

export default function LocationBrief({ locale, dict }: LocationBriefProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Nuestra Ubicación' : 'Our Location';
  const subtitle = isEs ? 'Cómo Encontrarnos' : 'How to Find Us';
  const addressText = isEs
    ? 'Estamos ubicados en Sona Fluca, una tranquila localidad rural a solo minutos del centro de La Fortuna, San Carlos. Nuestra ubicación le permite desconectarse de la ciudad y conectar directamente con el campo costarricense.'
    : 'We are located in Sona Fluca, a quiet rural town just minutes away from downtown La Fortuna, San Carlos. Our location allows you to disconnect from the city noise and connect directly with the Costa Rican countryside.';

  const directionLabel = isEs ? 'Cómo llegar' : 'How to get there';
  const whatsappLabel = isEs ? 'Consultar por WhatsApp' : 'Inquire on WhatsApp';

  // Waze URL for navigation
  const wazeUrl = 'https://ul.waze.com/ul?place=ChIJL8VyNzpzoI8RMGWSa0vr8eY&ll=10.46365560%2C-84.59485400&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';
  
  // WhatsApp link configuration
  const phoneNumber = '50660817929';
  const defaultMessage = isEs
    ? 'Hola, me gustaría saber cómo llegar a Casona Los Rodríguez desde mi ubicación actual.'
    : 'Hello, I would like to know how to get to Casona Los Rodríguez from my current location.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="py-20 sm:py-28 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
            <FadeIn direction="left">
              <SectionTitle
                title={title}
                subtitle={subtitle}
                align="left"
                className="mb-6"
              />
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed mb-4">
                {addressText}
              </p>
              <div className="flex items-start gap-2 text-sm text-primary/95 font-semibold mb-8">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{dict.contact.address}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  variant="primary"
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {directionLabel}
                </Button>
                <Button
                  variant="secondary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 justify-center"
                >
                  <svg className="w-4 h-4 mr-2 text-jungle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.187 4.289-1.126z" />
                  </svg>
                  {whatsappLabel}
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 w-full">
            <FadeIn direction="right">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
                <iframe
                  title={isEs ? 'Mapa de ubicación Casona Los Rodríguez' : 'Casona Los Rodríguez location map'}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6395357904724!2d-84.59742892398466!3d10.463660989666759!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0733a3772c52f%3A0xe6f1eb6b6b6a6530!2sCasona%20Los%20Rodr%C3%ADguez!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
