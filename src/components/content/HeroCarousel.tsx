'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { Dictionary } from '@/dictionaries/es';
import { heroSlides } from '@/data/heroSlides';
import Button from '../ui/Button';
import BookingCTA from '../ui/BookingCTA';
import Container from '../ui/Container';

interface HeroCarouselProps {
  locale: Locale;
  dict: Dictionary;
}

export default function HeroCarousel({ locale, dict }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const isEs = locale === 'es';
  const AUTOPLAY_DELAY = 8000; // 8 seconds

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const matches = mediaQuery.matches;
    
    // Set state asynchronously to avoid synchronous cascading renders during mount
    const timer = setTimeout(() => {
      setReducedMotion(matches);
    }, 0);

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Manage Autoplay
  useEffect(() => {
    if (!isPlaying || reducedMotion) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      return;
    }

    autoplayTimerRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying, nextSlide, reducedMotion]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsPlaying(false);
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        setIsPlaying(false);
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const selectSlide = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const handleInteractiveClick = () => {
    setIsPlaying(false);
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPlaceholder = slide.image === 'TODO_IMAGE';
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {!isPlaceholder ? (
                <Image
                  src={slide.image}
                  alt={isEs ? slide.altES : slide.altEN}
                  fill
                  priority={index === 0 || index === 1} // Priority on first two slides
                  sizes="100vw"
                  className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                    isActive && !reducedMotion ? 'scale-105' : 'scale-100'
                  }`}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-wood flex items-center justify-center">
                  <div className="text-center p-8 max-w-md">
                    <span className="text-gold uppercase tracking-widest text-xs font-bold block mb-2">
                      {isEs ? 'Imagen próximamente' : 'Image coming soon'}
                    </span>
                    <span className="text-white-warm/40 text-xs font-semibold uppercase">
                      {isEs ? 'Granja y trapiche tradicional' : 'Traditional Farm & Trapiche'}
                    </span>
                  </div>
                </div>
              )}
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/45 z-20" />
            </div>
          );
        })}
      </div>

      {/* Main Content Overlay */}
      <Container className="relative z-25 text-center text-white-warm py-24 sm:py-32 flex flex-col items-center select-none">
        {/* Fixed H1 */}
        <h1
          id="hero-title"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-white-warm leading-[1.15]"
        >
          {isEs ? 'Donde la tierra cuenta su historia' : 'Where the land tells its story'}
        </h1>

        {/* Fixed Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl text-white-warm/80 font-normal leading-relaxed">
          {isEs
            ? 'Una casona rural de más de 120 años donde el visitante cocina, come, aprende, baila y revive las tradiciones del campo costarricense.'
            : 'A rural farmhouse of over 120 years where the visitor cooks, eats, learns, dances, and revives the traditions of the Costa Rican countryside.'}
        </p>

        {/* Slide Variable Content Box */}
        <div className="mt-8 p-6 bg-black/45 backdrop-blur-sm border border-gold/25 rounded-lg w-full max-w-xl text-center min-h-[160px] flex flex-col justify-center">
          {heroSlides.map((slide, index) => {
            if (index !== currentIndex) return null;
            return (
              <div key={slide.id} className="animate-fade-in">
                <span className="font-subheading text-base sm:text-lg text-gold font-semibold uppercase tracking-wider block mb-1">
                  {isEs ? slide.labelES : slide.labelEN}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white-warm tracking-wide mb-2">
                  {isEs ? slide.titleES : slide.titleEN}
                </h2>
                <p className="text-xs sm:text-sm text-white-warm/90 leading-relaxed font-body">
                  {isEs ? slide.descriptionES : slide.descriptionEN}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fixed CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/experiencias`}
            className="shadow-lg min-w-[200px]"
            onClick={handleInteractiveClick}
          >
            {dict.common.exploreExperiences}
          </Button>
          <BookingCTA
            variant="secondary"
            size="lg"
            className="shadow-md min-w-[200px]"
            onClick={handleInteractiveClick}
          >
            {dict.common.bookingLabel}
          </BookingCTA>
        </div>
      </Container>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          handleInteractiveClick();
          prevSlide();
        }}
        className="absolute left-4 z-30 cursor-pointer p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white-warm focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200 hidden md:block"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          handleInteractiveClick();
          nextSlide();
        }}
        className="absolute right-4 z-30 cursor-pointer p-2.5 rounded-full bg-black/35 hover:bg-black/60 text-white-warm focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200 hidden md:block"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Visual Position Indicators / Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => selectSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? 'bg-gold w-6 shadow-md'
                : 'bg-white-warm/40 hover:bg-white-warm/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
