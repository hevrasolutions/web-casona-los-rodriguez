'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
  fullWidth?: boolean;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 750,
  className = '',
  fullWidth = false,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Respect reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 18px, 0)';
      case 'down':
        return 'translate3d(0, -18px, 0)';
      case 'left':
        return 'translate3d(-24px, 0, 0)';
      case 'right':
        return 'translate3d(24px, 0, 0)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
