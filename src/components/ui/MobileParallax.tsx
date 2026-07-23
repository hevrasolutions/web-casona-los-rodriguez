'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface MobileParallaxProps {
  bgImageSrc: string;
  bgImageAlt: string;
  overlayOpacityClass?: string;
  children: React.ReactNode;
  className?: string;
}

export default function MobileParallax({
  bgImageSrc,
  bgImageAlt,
  overlayOpacityClass = 'bg-primary/80',
  children,
  className = '',
}: MobileParallaxProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate when section is near or inside the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // scrollRatio ranges from 0 (section entering at bottom) to 1 (section leaving at top)
        const scrollRatio = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedRatio = Math.max(0, Math.min(1, scrollRatio));
        
        // Unidirectional upward translation: starts at 0px when entering bottom of screen,
        // slides upwards to -180px as section scrolls up.
        // Guarantee: translateY is ALWAYS <= 0, so the top of the image NEVER drops below section top (0 brown gaps!).
        const offset = -clampedRatio * 180;
        setTranslateY(offset);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden text-center border-t border-wood/50 py-24 sm:py-32 bg-primary text-white-warm ${className}`}
    >
      {/* Background Image Wrapper: top-0 with 160% height guarantees image covers container at all times */}
      <div
        className="absolute inset-x-0 top-0 h-[160%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Color Overlay */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${overlayOpacityClass}`} />

      {/* Foreground Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
}
