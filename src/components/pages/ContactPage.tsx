'use client';

import React, { useState } from 'react';
import { Locale, getDictionary } from '@/lib/i18n';
import Container from '../ui/Container';
import ContactForm from '../forms/ContactForm';
import SectionTitle from '../ui/SectionTitle';

interface ContactPageProps {
  locale: Locale;
}

export default function ContactPage({ locale }: ContactPageProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Coordinates description
  const coordinatesString = '10.4636556, -84.5948540';

  return (
    <>
      {/* Hero Header */}
      <section className="bg-primary text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gallery/farmhouse-facilities/casona-los-rodriguez-rustic-facilities-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />
        
        <Container className="relative z-10 py-6">
          <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
            {isEs ? 'Póngase en contacto' : 'Get in touch'}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            {dict.nav.contact}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body">
            {isEs
              ? '¿Tiene preguntas sobre nuestras experiencias o desea organizar un evento especial? Escríbanos y le responderemos con gusto.'
              : 'Have questions about our experiences or want to host a special event? Write to us and we will gladly reply.'}
          </p>
        </Container>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <SectionTitle
                  title={isEs ? 'Nuestros Canales' : 'Our Channels'}
                  subtitle={isEs ? 'Información de Contacto' : 'Contact Details'}
                  align="left"
                  className="mb-6"
                />
                <p className="text-sm sm:text-base text-primary/85 font-body leading-relaxed mb-6">
                  {isEs 
                    ? 'Estamos ubicados en La Fortuna de San Carlos, listos para brindarle una experiencia inolvidable. Utilice cualquiera de nuestros medios o complete el formulario.'
                    : 'We are located in La Fortuna, San Carlos, ready to offer you an unforgettable experience. Use any of our media or fill out the form.'}
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Address */}
                <div className="bg-white-warm border border-sand/20 p-5 rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-1">
                      {isEs ? 'Dirección' : 'Address'}
                    </h4>
                    <p className="text-xs text-primary/75 font-body leading-relaxed">
                      {dict.contact.address}
                    </p>
                  </div>
                </div>

                {/* Card 2: Phone & WhatsApp */}
                <div className="bg-white-warm border border-sand/20 p-5 rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-jungle/10 flex items-center justify-center text-jungle mb-3 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-1">
                      {isEs ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}
                    </h4>
                    <a 
                      href={`tel:${dict.contact.phone}`} 
                      className="text-xs text-primary/75 hover:text-terracotta font-body block mb-0.5 font-semibold transition-colors"
                    >
                      {dict.contact.phone}
                    </a>
                    <a 
                      href={`https://wa.me/${dict.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-jungle hover:underline font-body font-bold transition-all"
                    >
                      {isEs ? 'Escribir por WhatsApp' : 'Chat on WhatsApp'}
                    </a>
                  </div>
                </div>

                {/* Card 3: Email */}
                <div className="bg-white-warm border border-sand/20 p-5 rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-blue-colonial/10 flex items-center justify-center text-blue-colonial mb-3 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-1">
                      {isEs ? 'Correo Electrónico' : 'Email Address'}
                    </h4>
                    <a 
                      href={`mailto:${dict.contact.email}`} 
                      className="text-xs text-primary/75 hover:text-terracotta font-body block font-semibold truncate transition-colors"
                    >
                      {dict.contact.email}
                    </a>
                  </div>
                </div>

                {/* Card 4: Hours */}
                <div className="bg-white-warm border border-sand/20 p-5 rounded-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="w-8 h-8 rounded-full bg-wood/10 flex items-center justify-center text-wood mb-3 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h4 className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-1">
                      {dict.contact.scheduleTitle}
                    </h4>
                    <p className="text-xs text-primary/75 font-body leading-relaxed">
                      {dict.contact.schedule === 'TODO_OPENING_HOURS'
                        ? (isEs ? 'Todos los días: 8:00 AM - 5:00 PM' : 'Every day: 8:00 AM - 5:00 PM')
                        : dict.contact.schedule}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 w-full">
              <ContactForm locale={locale} />
            </div>

          </div>
        </Container>
      </section>

      {/* Full Width Google Maps Section */}
      <section className="w-full h-[400px] sm:h-[450px] relative border-b border-sand/20 bg-cream">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4688669405245!2d-84.594854!3d10.463655599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0733a3772c52f%3A0xe6f1eb4b6b926530!2sCasona%20Los%20Rodr%C3%ADguez!5e0!3m2!1ses-419!2scr!4v1780812023707!5m2!1ses-419!2scr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={isEs ? "Mapa de ubicación de Casona Los Rodríguez" : "Location map of Casona Los Rodríguez"}
        ></iframe>
      </section>

      {/* Accordion FAQs Section */}
      <section className="py-16 sm:py-24 bg-cream/40 border-t border-sand/15">
        <Container className="max-w-4xl">
          <SectionTitle
            title={isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            subtitle={isEs ? 'Resolviendo dudas comunes' : 'Answering common questions'}
            className="mb-14"
          />

          <div className="space-y-4">
            {dict.faqsList.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white-warm border border-sand/20 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold/30 hover:bg-cream/10 transition-colors"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-primary pr-4">
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-sand/10 flex items-center justify-center text-primary/80 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-gold/15 text-gold' : ''}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Body Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] border-t border-sand/10' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-sm sm:text-base text-primary/80 font-body leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
