import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import Container from '../ui/Container';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const isEs = locale === 'es';
  const quickLinks = [
    { href: `/${locale}/${isEs ? 'experiencias' : 'experiences'}`, label: dict.nav.experiences },
    { href: `/${locale}/${isEs ? 'restaurante' : 'restaurant'}`, label: dict.nav.restaurant },
    { href: `/${locale}/${isEs ? 'galeria' : 'gallery'}`, label: dict.nav.gallery },
    { href: `/${locale}/${isEs ? 'agencias' : 'agencies'}`, label: dict.nav.agencies },
    { href: `/${locale}/${isEs ? 'nosotros' : 'about'}`, label: dict.nav.about },
    { href: `/${locale}/${isEs ? 'contacto' : 'contact'}`, label: dict.nav.contact },
  ];

  const featuredExperiences = [
    {
      href: `/${locale}/${isEs ? 'experiencias/experiencia-cultural-completa' : 'experiences/complete-cultural-experience'}`,
      label: isEs ? 'Experiencia Cultural Completa' : 'Complete Cultural Experience'
    },
    {
      href: `/${locale}/${isEs ? 'experiencias/noche-campesina-premium' : 'experiences/premium-campesina-night'}`,
      label: isEs ? 'Noche Campesina Premium' : 'Premium Campesina Night'
    },
    {
      href: `/${locale}/${isEs ? 'experiencias/cocina-tradicional-familia-local' : 'experiences/traditional-cooking-local-family'}`,
      label: isEs ? 'Cocina Tradicional' : 'Traditional Cooking'
    },
  ];

  return (
    <footer className="bg-cream-dark text-primary pt-16 pb-24 lg:pb-8 border-t border-gold">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} className="inline-block self-start transition-transform hover:scale-[1.02]">
              <Image
                src="/images/logo/casona-los-rodriguez-logo-header-320x140-1.png"
                alt="Casona Los Rodríguez Logo Footer"
                width={160}
                height={70}
                className="h-auto w-[160px]"
              />
            </Link>
            <p className="text-sm text-primary/80 leading-relaxed font-body mt-2">
              {dict.footer.tagline}
            </p>
            {/* Social Networks Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/casonalosrodriguez?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-sand/30 flex items-center justify-center text-primary hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/casonalosrodriguez_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-sand/30 flex items-center justify-center text-primary hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://ul.waze.com/ul?place=ChIJL8VyNzpzoI8RMGWSa0vr8eY&ll=10.46365560%2C-84.59485400&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-sand/30 flex items-center justify-center text-primary hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Waze"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813-.298.025-.547.224-.547.522-.05.82.82 2.31 2.012 3.502.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528 2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21 1.64-.546 2.36-2.409 1.763-3.924a12.84 12.84 0 0 0 1.838-1.465 10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.899 10.899 0 0 0 13.218 0zm0 1.217c2.558 0 4.967.994 6.78 2.807a9.525 9.525 0 0 1 2.807 6.78A9.526 9.526 0 0 1 20 17.585a9.647 9.647 0 0 1-6.78 2.807h-2.46a3.008 3.008 0 0 0-2.93-2.41 3.03 3.03 0 0 0-2.534 1.367v.024a8.945 8.945 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.858 2.858 0 0 0 1.441-.846 2.959 2.959 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861 1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.192 1.192 0 0 0-1.191 1.192 1.192 1.192 0 0 0 1.192 1.193A1.192 1.192 0 0 0 12 8.395a1.192 1.192 0 0 0-1.192-1.192zm7.204 0a1.192 1.192 0 0 0-1.192 1.192 1.192 1.192 0 0 0 1.192 1.193 1.192 1.192 0 0 0 1.192-1.193 1.192 1.192 0 0 0-1.192-1.192zm-7.377 4.769a.596.596 0 0 0-.546.845 4.813 4.813 0 0 0 4.346 2.757 4.77 4.77 0 0 0 4.347-2.757.596.596 0 0 0-.547-.845h-.025a.561.561 0 0 0-.521.348 3.59 3.59 0 0 1-3.254 2.061 3.591 3.591 0 0 1-3.254-2.061.64.64 0 0 0-.546-.348z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-wide text-gold border-b border-gold/30 pb-2 mb-4">
              {dict.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Experiences */}
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-wide text-gold border-b border-gold/30 pb-2 mb-4">
              {dict.footer.mainExperiences}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {featuredExperiences.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-wide text-gold border-b border-gold/30 pb-2 mb-4">
              {dict.footer.contact}
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-primary/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{dict.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.244 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.435 1.451h.005c5.904 0 10.708-4.805 10.71-10.71.002-2.859-1.113-5.547-3.141-7.57C17.583 4.298 14.896 3.18 12.03 3.18c-5.902 0-10.707 4.807-10.71 10.714-.001 2.019.528 3.993 1.533 5.727L1.876 22.3l4.771-1.252zM17.5 14.326c-.29-.145-1.716-.848-1.982-.944-.265-.097-.459-.145-.651.145-.192.29-.747.945-.916 1.139-.168.193-.337.217-.627.072-1.085-.544-1.92-1.006-2.673-2.298-.198-.339-.395-.733-.072-1.055.288-.288.627-.728.94-.966.145-.108.193-.18.29-.363.095-.18.047-.339-.024-.483-.072-.145-.651-1.569-.892-2.148-.234-.564-.47-.488-.651-.498-.168-.009-.362-.01-.554-.01-.193 0-.507.073-.77.363-.266.29-1.013.99-1.013 2.417 0 1.426 1.038 2.804 1.182 2.998.145.193 2.042 3.12 4.948 4.376.69.299 1.23.477 1.65.612.704.224 1.345.192 1.851.117.565-.084 1.716-.701 1.958-1.378.24-.677.24-1.258.17-1.377-.072-.119-.265-.193-.554-.338z" />
                </svg>
                <a href={`https://wa.me/50688094163`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {dict.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${dict.contact.email}`} className="hover:text-gold transition-colors">
                  {dict.contact.email}
                </a>
              </li>
              <li className="pt-3 border-t border-sand/30 flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">{dict.contact.scheduleTitle}</span>
                  <span className="text-xs text-primary/70 mt-0.5">{dict.contact.schedule}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright band */}
        <div className="mt-16 pt-8 border-t border-sand/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary/60">
          <p>
            {dict.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href={`/${locale}/${isEs ? 'terminos-y-condiciones' : 'terms-and-conditions'}`} className="text-primary/70 hover:text-gold transition-colors">
              {dict.footer.terms}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/${isEs ? 'politica-de-cancelacion' : 'cancellation-policy'}`} className="text-primary/70 hover:text-gold transition-colors">
              {dict.footer.cancellation}
            </Link>
            <span>•</span>
            <span className="text-gold/80 font-medium">
              {dict.footer.credits}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
