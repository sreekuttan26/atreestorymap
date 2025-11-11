'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const IMAGES =Array.from({ length: 11 }, (_, i) => `/${i + 1}Degradation.svg`);
export default function LayeredScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollStart = -height + windowHeight;
      const scrollEnd = windowHeight;
      const scrollRange = scrollEnd - scrollStart;
      const currentScroll = top - scrollStart;
      
      const progress = Math.max(0, Math.min(1, 1 - currentScroll / scrollRange));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Spacer to allow scrolling */}
      <div className="h-screen" />
      
      <div 
        ref={containerRef}
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {IMAGES.map((src, index) => {
            const layerProgress = Math.max(0, Math.min(1, 
              (scrollProgress - (index / IMAGES.length)) * IMAGES.length
            ));
            
            const scale = 1 - (layerProgress * 0.08);
            const opacity = 1 - (layerProgress * 0.7);
            const zIndex = IMAGES.length - index;

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
                }}
              >
                <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                  <Image
                    src={src}
                    alt={`Layer ${index + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom spacer */}
      <div className="h-screen" />
    </div>
  );
}