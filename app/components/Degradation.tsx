'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Degradation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
    const images = Array.from({ length: 11 }, (_, i) => `/${i + 1}Degradation.svg`);

  useEffect(() => {
    const imagesEl = gsap.utils.toArray<HTMLImageElement>('.layered-image');
    
    imagesEl.forEach((img, i) => {
      gsap.fromTo(
        img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${i * 9}% center`, // each image fades in gradually
            end: `${(i + 1) * 9}% center`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-100">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="layered-image absolute top-0 left-0 w-full h-full object-cover opacity-0"
            alt={`Layer ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Degradation



