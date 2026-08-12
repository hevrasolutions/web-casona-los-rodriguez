'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { GalleryItem } from '@/lib/gallery';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

interface GalleryPageProps {
  locale: Locale;
  initialItems: GalleryItem[];
}

export default function GalleryPage({ locale, initialItems }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isEs = locale === 'es';

  const title = isEs ? 'Galería Casona Los Rodríguez' : 'Casona Los Rodríguez Gallery';
  const subtitle = isEs ? 'Instalaciones y Experiencias en Fotos' : 'Facilities & Experiences in Photos';

  const categories = [
    { id: 'all', label: isEs ? 'Todas' : 'All' },
    { id: 'farmhouse', label: isEs ? 'La Casona e Instalaciones' : 'The Farmhouse & Facilities' },
    { id: 'restaurant-kitchen', label: isEs ? 'Restaurante y Cocina a la Leña' : 'Restaurant & Wood-Fired Kitchen' },
    { id: 'typical-food', label: isEs ? 'Comida Típica' : 'Traditional Food' },
    { id: 'farm-trapiche', label: isEs ? 'Granja, Huerta y Trapiche' : 'Farm, Garden & Trapiche' },
    { id: 'traditional-events', label: isEs ? 'Eventos y Cultura' : 'Events & Culture' },
    { id: 'customer-experiences', label: isEs ? 'Experiencias de Clientes' : 'Customer Experiences' },
  ];

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? initialItems
    : initialItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => (prevIndex! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => (prevIndex! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

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
      {/* Page Header */}
      <section className="bg-stone-950 text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <Image
          src="/images/gallery/farmhouse/casona-los-rodriguez-rustic-facilities-002.webp"
          alt={isEs ? 'Instalaciones rústicas de La Casona Los Rodríguez' : 'Rustic facilities at Casona Los Rodríguez'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-black/60 to-primary/80 pointer-events-none" />
        
        <Container className="relative z-10 py-6 flex flex-col items-center justify-center text-center">
          <FadeIn direction="up" className="w-full flex flex-col items-center text-center">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block text-center mx-auto">
              {subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight text-center mx-auto max-w-4xl">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body text-center">
              {isEs
                ? 'Un recorrido visual por nuestra finca de 120 años de antigüedad. Descubra los colores, texturas y momentos mágicos que le esperan.'
                : 'A visual journey through our 120-year-old estate. Discover the colors, textures, and magical moments awaiting you.'}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="py-16 sm:py-24 bg-cream">
        <Container>
          {/* Category Filter Pills */}
          <FadeIn direction="up">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 select-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    closeLightbox();
                  }}
                  className={`cursor-pointer px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-terracotta text-white-warm shadow-md border-b-2 border-primary/20 scale-[1.02]'
                      : 'bg-white-warm text-primary border border-sand/30 hover:border-gold hover:bg-cream/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* CSS Masonry Grid using Tailwind columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => {
              const isPlaceholder = item.src === 'TODO_IMAGE';
              
              return (
                <FadeIn key={item.id} direction="up" delay={(index % 6) * 80} className="break-inside-avoid">
                  <div
                    onClick={() => openLightbox(index)}
                    className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg border border-sand/20 bg-white-warm cursor-pointer transition-all duration-300 group select-none"
                  >
                    {!isPlaceholder ? (
                      <div className="relative w-full h-auto min-h-[200px]">
                        {/* Responsive image container */}
                        <Image
                          src={item.src}
                          alt={isEs ? item.altES : item.altEN}
                          width={600}
                          height={450}
                          priority={index < 6} // Eager load first 6 images, lazy load rest
                          loading={index >= 6 ? 'lazy' : undefined}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] w-full bg-sand/15 flex flex-col items-center justify-center p-6 text-center">
                        <svg className="w-8 h-8 text-sand/65 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-primary/60 font-semibold uppercase tracking-wider block">
                          {isEs ? 'Imagen Próximamente' : 'Image Coming Soon'}
                        </span>
                        <span className="text-[10px] text-gold uppercase tracking-wider block mt-1 font-semibold">
                          TODO_IMAGE
                        </span>
                      </div>
                    )}

                    {/* Dark overlay showing title on hover */}
                    {!isPlaceholder && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white-warm text-xs font-semibold font-body text-left">
                          {isEs ? item.altES : item.altEN}
                        </p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Accessible Interactive Lightbox with Touch Swipe */}
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
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-55 text-white-warm/80 hover:text-white-warm p-3 bg-white-warm/10 hover:bg-white-warm/20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 z-55 text-white-warm/80 hover:text-white-warm p-3 bg-white-warm/10 hover:bg-white-warm/20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold transition-colors duration-200"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Display image wrapper */}
          <div className="relative max-w-4xl w-full max-h-[75vh] flex items-center justify-center p-2">
            {/* Loading spinner indicator */}
            {isImageLoading && filteredItems[lightboxIndex].src !== 'TODO_IMAGE' && (
              <div className="absolute inset-0 flex items-center justify-center z-52 pointer-events-none">
                <div className="w-10 h-10 border-4 border-gold/30 border-t-gold rounded-full animate-spin" />
              </div>
            )}

            {filteredItems[lightboxIndex].src !== 'TODO_IMAGE' ? (
              <div className="relative w-full h-[60vh]">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={isEs ? filteredItems[lightboxIndex].altES : filteredItems[lightboxIndex].altEN}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  onLoad={() => setIsImageLoading(false)}
                  className={`object-contain transition-opacity duration-300 ease-in-out ${
                    isImageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
              </div>
            ) : (
              <div className="h-[40vh] w-full max-w-lg bg-white-warm/5 rounded-lg border border-white-warm/20 flex flex-col items-center justify-center p-6 text-center text-white-warm">
                <svg className="w-16 h-16 text-white-warm/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h4 className="font-heading text-lg font-bold mb-2">
                  {isEs ? 'Imagen Próximamente' : 'Image Coming Soon'}
                </h4>
                <p className="text-xs text-white-warm/60">
                  {isEs ? 'Esta fotografía se encuentra en proceso de edición.' : 'This photograph is in the process of editing.'}
                </p>
              </div>
            )}
          </div>

          {/* Synchronized Footer bar with caption */}
          <div className={`absolute bottom-4 left-0 right-0 z-55 text-center text-white-warm px-4 max-w-2xl mx-auto transition-opacity duration-300 ease-in-out ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          }`}>
            <span className="text-xs text-gold uppercase tracking-wider font-semibold">
              {categories.find((c) => c.id === filteredItems[lightboxIndex].category)?.label}
            </span>
            <p className="text-sm mt-1 leading-relaxed font-body">
              {isEs ? filteredItems[lightboxIndex].altES : filteredItems[lightboxIndex].altEN}
            </p>
            <span className="text-xs text-white-warm/50 block mt-2 font-mono">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
          </div>

          {/* Silent Preloader for Next & Prev Images */}
          <div className="hidden" aria-hidden="true">
            {filteredItems[(lightboxIndex + 1) % filteredItems.length]?.src !== 'TODO_IMAGE' && (
              <Image
                src={filteredItems[(lightboxIndex + 1) % filteredItems.length].src}
                alt=""
                width={10}
                height={10}
                priority
              />
            )}
            {filteredItems[(lightboxIndex - 1 + filteredItems.length) % filteredItems.length]?.src !== 'TODO_IMAGE' && (
              <Image
                src={filteredItems[(lightboxIndex - 1 + filteredItems.length) % filteredItems.length].src}
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
