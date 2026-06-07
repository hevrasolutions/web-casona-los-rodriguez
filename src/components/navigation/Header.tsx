'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import Container from '../ui/Container';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import BookingCTA from '../ui/BookingCTA';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const isEs = locale === 'es';
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/${isEs ? 'experiencias' : 'experiences'}`, label: dict.nav.experiences },
    { href: `/${locale}/${isEs ? 'restaurante' : 'restaurant'}`, label: dict.nav.restaurant },
    { href: `/${locale}/${isEs ? 'galeria' : 'gallery'}`, label: dict.nav.gallery },
    { href: `/${locale}/${isEs ? 'agencias' : 'agencies'}`, label: dict.nav.agencies },
    { href: `/${locale}/${isEs ? 'nosotros' : 'about'}`, label: dict.nav.about },
    { href: `/${locale}/${isEs ? 'contacto' : 'contact'}`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    const cleanPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const cleanHref = href.endsWith('/') && href.length > 1 ? href.slice(0, -1) : href;
    
    if (cleanHref === `/${locale}`) {
      return cleanPath === cleanHref;
    }
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream/80 backdrop-blur-md shadow-md py-[1px] border-b border-sand/20'
            : 'bg-cream/90 backdrop-blur-md py-4'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/images/logo/casona-los-rodriguez-logo-header-320x140.png"
              alt="Casona Los Rodríguez Logo"
              width={140}
              height={61}
              priority
              className="h-auto w-[120px] sm:w-[140px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-terracotta font-bold'
                    : 'text-primary/80 hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <BookingCTA variant="primary" size="md">
              {dict.nav.bookNow}
            </BookingCTA>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary focus:outline-none rounded-md hover:bg-sand/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-cream shadow-2xl border-l border-sand/20 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          top: scrolled ? '56px' : '86px',
          height: `calc(100vh - ${scrolled ? '56px' : '86px'})`
        }}
      >
        <nav className="flex flex-col gap-5 mt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold py-2 border-b border-sand/10 transition-colors ${
                isActive(link.href)
                  ? 'text-terracotta font-bold border-b-terracotta'
                  : 'text-primary hover:text-terracotta'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 mt-auto mb-16">
          <BookingCTA variant="primary" size="lg" className="w-full text-center">
            {dict.nav.bookNow}
          </BookingCTA>
        </div>
      </div>

      {/* Mobile Fixed bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-t border-sand/20 p-3 shadow-lg flex justify-center">
        <BookingCTA variant="primary" size="lg" className="w-full max-w-sm text-center shadow-lg">
          {dict.nav.bookNow}
        </BookingCTA>
      </div>
    </>
  );
}
