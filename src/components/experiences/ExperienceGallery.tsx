'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';

export interface ExperienceGalleryItem {
  src: string;
  alt: string;
}

interface ExperienceGalleryProps {
  items: ExperienceGalleryItem[];
  locale: Locale;
}

export default function ExperienceGallery({
  items,
  locale,
}: ExperienceGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isEs = locale === 'es';

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => (prevIndex! + 1) % items.length);
  }, [lightboxIndex, items.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (prevIndex) => (prevIndex! - 1 + items.length) % items.length
    );
  }, [lightboxIndex, items.length]);

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  // Reset image loading state whenever lightboxIndex changes to synchronize image & caption
  useEffect(() => {
    if (lightboxIndex !== null) {
      setIsImageLoading(true);
    }
  }, [lightboxIndex]);

  // Minimum swipe distance in px required to trigger navigation
  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;

    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0) {
        // Swiped left -> next image
        nextImage();
      } else {
        // Swiped right -> prev image
        prevImage();
      }
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      {/* Gallery: CSS masonry columns, all photos visible (2 cols on mobile) */}
      <div className="columns-2 gap-3 space-y-3 sm:columns-3 lg:columns-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            aria-label={item.alt}
            className="relative block w-full break-inside-avoid rounded-lg overflow-hidden border border-sand/20 shadow-sm bg-sand/10 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={450}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Accessible Interactive Lightbox with Touch Swipe & Synchronized Loading */}
      {lightboxIndex !== null && (
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 select-none touch-pan-y"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-55 text-white-warm/80 hover:text-white-warm p-2 bg-white-warm/10 hover:bg-white-warm/20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200"
            aria-label={isEs ? 'Cerrar galería' : 'Close Lightbox'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-55 text-white-warm/80 hover:text-white-warm p-3 bg-white-warm/10 hover:bg-white-warm/20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200"
            aria-label={isEs ? 'Imagen anterior' : 'Previous image'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-55 text-white-warm/80 hover:text-white-warm p-3 bg-white-warm/10 hover:bg-white-warm/20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200"
            aria-label={isEs ? 'Imagen siguiente' : 'Next image'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Display image wrapper */}
          <div className="relative max-w-4xl w-full max-h-[75vh] flex items-center justify-center p-2">
            {/* Loading spinner indicator */}
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-52 pointer-events-none">
                <div className="w-10 h-10 border-4 border-gold/30 border-t-gold rounded-full animate-spin" />
              </div>
            )}

            <div className="relative w-full h-[60vh]">
              <Image
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                onLoad={() => setIsImageLoading(false)}
                className={`object-contain transition-opacity duration-300 ease-in-out ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
            </div>
          </div>

          {/* Synchronized Footer bar with caption */}
          <div className={`absolute bottom-4 left-0 right-0 z-55 text-center text-white-warm px-4 max-w-2xl mx-auto transition-opacity duration-300 ease-in-out ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}>
            <p className="text-sm leading-relaxed font-body">
              {items[lightboxIndex].alt}
            </p>
            <span className="text-xs text-white-warm/50 block mt-2 font-mono">
              {lightboxIndex + 1} / {items.length}
            </span>
          </div>

          {/* Silent Preloader for Next & Prev Images */}
          <div className="hidden" aria-hidden="true">
            {items[(lightboxIndex + 1) % items.length]?.src && (
              <Image
                src={items[(lightboxIndex + 1) % items.length].src}
                alt=""
                width={10}
                height={10}
                priority
              />
            )}
            {items[(lightboxIndex - 1 + items.length) % items.length]?.src && (
              <Image
                src={items[(lightboxIndex - 1 + items.length) % items.length].src}
                alt=""
                width={10}
                height={10}
                priority
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
