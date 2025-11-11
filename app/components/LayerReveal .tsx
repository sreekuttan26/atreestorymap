'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LayerReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 12 }, (_, i) => `/${i + 1}Degradation.svg`);

  useEffect(() => {
    const imagesEl = gsap.utils.toArray<HTMLImageElement>('.layered-image');
    
    // Set initial state - first image visible
    gsap.set(imagesEl[0], { opacity: 1 });
    gsap.set(imagesEl.slice(1), { opacity: 0 });

    imagesEl.forEach((img, i) => {
      if (i === 0) return; // Skip first image
      if (i > 10) return; // Skip first image
   

      const progress = i / (imagesEl.length - 1);
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${(progress - 0.1) * 100}% top`,
        end: `${(progress- 1 ) * 100}% top`,
        scrub: 1.5,
        onUpdate: (self) => {
          // Current layer fades in and scales up
          gsap.to(img, {
            opacity: self.progress,
            // scale: 0.95 + (self.progress * 0.05),
            duration: 0.1,
            overwrite: 'auto',
          });
          
          // Previous layer fades out and scales down
        //   if (i > 0) {
        //     gsap.to(imagesEl[i - 1], {
        //       opacity: 1 - self.progress,
        //       scale: 1 - (self.progress * 0.05),
        //       duration: 0.1,
        //       overwrite: 'auto',
        //     });
        //   }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[700vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white flex items-center justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Degradation Layer ${index + 1}`}
            className="layered-image absolute w-full h-full object-cover"
            style={{ willChange: 'opacity' }}
          />
        ))}
      </div>
    </section>
  );
};

export default LayerReveal;