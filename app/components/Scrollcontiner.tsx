'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollImageSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const lastref=useRef(null)


  const [currentImage, setCurrentImage] = useState(0);

  // Replace with your own images
   const images = Array.from({ length: 6 }, (_, i) => `/${i + 1}Degradation.svg`);

  const texts = [
    'With burgeoning developmental activities, the lake had lost its natural connection with other lakes. ',
    'Added to this was untreated sewage and solid waste, from plastic to construction debris, flowing into the lake.',
    'The water turned stagnant and green with algal bloom, killing fishes and other aquatic life.',
    'Besides the unchecked spread of water hyacinth and algae in the lake, the vegetation around the lake too had been taken over by invasives like Lantana and Parthenium, crippling the lake’s ecological balance.',
    'Mining around the lake destroyed the natural rock formation by the lake – almost destroying the historical GTS structure – leaving behind a quarry that made way for debris and other waste.'
  ];

  useEffect(() => {
    const last=lastref.current;
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.text-box');
      const imageEl = imageRef.current;

      if (!sections.length || !imageEl) return;

      // Pin image container during scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        endTrigger:last,
        end:'top bottom',
        // end: `+=${sections.length * 100}%`,
        pin: imageEl,
        pinSpacing: false,
      });

      // Change image when each section hits the top
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'top top',
          onEnter: () => setCurrentImage(i),
          onEnterBack: () => setCurrentImage(i),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full   overflow-hidden">
      {/* Sticky image section */}
      <div className="sticky top-0  w-full h-[99vh] flex items-center justify-center ">
        <img
          ref={imageRef}
          src={images[currentImage]}
          alt="Scrolling scene"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Text boxes that scroll over the image */}
      <div className="relative z-10 flex flex-col space-y-[100vh] px-10 py-20 max-w-3xl mx-auto">
        {texts.map((text, i) => (
          <div
            key={i}
            className="text-box text-xl  leading-8  bg-[#a6af64] opacity-95 text-white backdrop-blur-sm rounded-2xl p-10 shadow-lg"
          >
            {text}
          </div>
        ))}
          <div ref={lastref}
            
            className=""
          >
            {""}
          </div>
      </div>
    </div>
  );
};

export default ScrollImageSequence;
