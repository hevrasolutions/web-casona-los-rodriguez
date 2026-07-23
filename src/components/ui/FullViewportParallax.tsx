import React from 'react';
import Image from 'next/image';

interface FullViewportParallaxProps {
  bgImageSrc: string;
  bgImageAlt: string;
  overlayOpacityClass?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FullViewportParallax({
  bgImageSrc,
  bgImageAlt,
  overlayOpacityClass = 'bg-primary/80',
  children,
  className = '',
}: FullViewportParallaxProps) {
  return (
    <section className={`relative overflow-hidden text-center border-t border-wood/50 bg-primary text-white-warm [clip-path:inset(0)] ${className}`}>
      {/* 100% Fixed Viewport Background - Pinned 100% still behind the section window (0 JS, 0 Lag, 0 Brinco) */}
      <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none">
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* Color Overlay */}
        <div className={`absolute inset-0 ${overlayOpacityClass}`} />
      </div>

      {/* Foreground Content (Transparent Window passing over fixed background) */}
      <div className="relative z-10 py-24 sm:py-32">
        {children}
      </div>
    </section>
  );
}
