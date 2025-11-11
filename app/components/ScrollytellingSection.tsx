'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollSection {
  id: string;
  title: string;
  content: string;
  visualState: {
    background: string;
    scale: number;
    opacity: number;
  };
}

const sections: ScrollSection[] = [
  {
    id: 'intro',
    title: 'The Beginning',
    content: 'This is where our story starts. As you scroll, the visualization on the right will transform, creating an immersive narrative experience.',
    visualState: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      scale: 1,
      opacity: 1,
    },
  },
  {
    id: 'development',
    title: 'The Development',
    content: 'As the narrative unfolds, notice how the visual elements respond to your scrolling. This creates a connection between the story and the imagery.',
    visualState: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      scale: 1.2,
      opacity: 0.9,
    },
  },
  {
    id: 'climax',
    title: 'The Turning Point',
    content: 'Here we reach the pivotal moment. The visualization emphasizes this critical juncture in our narrative journey.',
    visualState: {
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      scale: 1.5,
      opacity: 0.8,
    },
  },
  {
    id: 'conclusion',
    title: 'The Resolution',
    content: 'As we conclude, the visual returns to a calmer state, reflecting the resolution of our story. This technique keeps readers engaged throughout.',
    visualState: {
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      scale: 1,
      opacity: 1,
    },
  },
];

export default function ScrollytellingSection() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(index);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: '-20% 0px -20% 0px',
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const currentVisualState = sections[activeSection].visualState;

  return (
    <div className="relative w-full bg-gray-50">
      {/* Container */}
      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Text Content - Scrollable */}
        <div className="w-full lg:w-1/2 relative z-10 border-2">
          <div className="py-20 px-6 md:px-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="min-h-screen flex items-center"
              >
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                  <div className="mt-8 text-sm text-gray-500">
                    Section {index + 1} of {sections.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Visualization */}
        <div className="w-full  relative">
          <div className="sticky top-0 h-screen flex items-center justify-center p-8">
            <div
              className="w-full max-w-md aspect-square rounded-3xl shadow-2xl transition-all duration-1000 ease-out flex items-center justify-center"
              style={{
                background: currentVisualState.background,
                // transform: `scale(${currentVisualState.scale})`,
                opacity: currentVisualState.opacity,
              }}
            >
              <div className="text-white text-center p-8">
                <div className="text-6xl font-bold mb-4">
                  {activeSection + 1}
                </div>
                <div className="text-xl opacity-90">
                  {sections[activeSection].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gray-200 z-50">
        <div
          className="bg-blue-600 w-full transition-all duration-300"
          style={{
            height: `${((activeSection + 1) / sections.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}