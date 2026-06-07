import React from 'react';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

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
  const phoneNumber = '50688094163';
  const defaultMessage = isEs
    ? 'Hola, me gustaría saber cómo llegar a Casona Los Rodríguez desde mi ubicación actual.'
    : 'Hello, I would like to know how to get to Casona Los Rodríguez from my current location.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
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
                size="md"
                href={wazeUrl}
                external
                className="shadow-sm w-full sm:w-auto text-center"
              >
                {directionLabel}
              </Button>
              <Button
                variant="ghost"
                size="md"
                href={whatsappUrl}
                external
                className="w-full sm:w-auto text-center"
              >
                {whatsappLabel}
              </Button>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 w-full h-[350px] sm:h-[400px] bg-white-warm rounded-lg overflow-hidden border border-sand/20 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4688669405245!2d-84.594854!3d10.463655599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0733a3772c52f%3A0xe6f1eb4b6b926530!2sCasona%20Los%20Rodr%C3%ADguez!5e0!3m2!1ses-419!2scr!4v1780812023707!5m2!1ses-419!2scr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
