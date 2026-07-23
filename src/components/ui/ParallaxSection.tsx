'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
  bgImageSrc: string;
  bgImageAlt: string;
  overlayOpacityClass?: string;
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxSection({
  bgImageSrc,
  bgImageAlt,
  overlayOpacityClass = 'bg-primary/80',
  children,
  className = '',
  speed = 0.35,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only compute when section is anywhere near the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;

        // Offset range of ~200px vertical travel for a strong, noticeable parallax effect
        const offset = distanceFromCenter * speed;
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
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden text-center border-t border-wood/50 py-24 sm:py-32 bg-primary text-white-warm ${className}`}
    >
      {/* Background Image Container: scaled (150% height) to allow plenty of parallax motion room without clipping */}
      <div
        className="absolute inset-x-0 -top-[25%] h-[150%] pointer-events-none will-change-transform"
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
