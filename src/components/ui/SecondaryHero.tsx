'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import FadeIn from './FadeIn';
import { getHeroBlur } from '@/lib/heroPlaceholders';

export interface SecondaryHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  blurDataURL?: string;
  contentClassName?: string;
}

export default function SecondaryHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  children,
  className = 'py-20 sm:py-24',
  imageClassName = 'object-cover object-center',
  overlayClassName = 'bg-gradient-to-b from-stone-950/75 via-black/45 to-primary/80',
  blurDataURL,
  contentClassName = 'py-6 flex flex-col items-center justify-center text-center',
}: SecondaryHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholder = blurDataURL || getHeroBlur(imageSrc);

  return (
    <section
      className={`relative bg-[#1c140e] text-white-warm overflow-hidden text-center border-b border-wood/50 ${className}`}
    >
      {/* Background Image with Instant Blur Placeholder */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={placeholder}
        onLoad={() => setIsLoaded(true)}
        className={`${imageClassName} transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-[1.02]'
        }`}
      />

      {/* Calibrated Overlay: guarantees high contrast for text while preserving photo warmth and vibrancy */}
      <div
        className={`absolute inset-0 ${overlayClassName} pointer-events-none transition-opacity duration-700`}
      />

      {/* Hero Content */}
      <Container className={`relative z-10 ${contentClassName}`}>
        <FadeIn direction="up" className="w-full flex flex-col items-center text-center">
          {subtitle && (
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block text-center mx-auto">
              {subtitle}
            </span>
          )}

          {typeof title === 'string' ? (
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight text-center mx-auto max-w-4xl">
              {title}
            </h1>
          ) : (
            title
          )}

          {description && (
            typeof description === 'string' ? (
              <p className="text-sm sm:text-base md:text-lg text-white-warm/90 max-w-3xl mx-auto leading-relaxed font-body text-center">
                {description}
              </p>
            ) : (
              description
            )
          )}

          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
