'use client';
import React, { useRef, useEffect, useState } from 'react';
import Bodytext from './Bodytext';

interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
}

const Restoration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Assessing water quality and biodiversity',
      content: (
        <span>
          <h1 className="color-b text-lg font-bold mt-10">Assessing water quality</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Bodytext
            text={
              <p>
                The first step was assessing water quality using two simple yet effective methods: Secchi Depth and Dissolved Oxygen. Water samples were collected from seven lake points, and sediment samples from two sites. Indicators such as water clarity, dissolved oxygen and shoreline vegetation helped to formulate further steps in restoration.
              </p>
            }
          />

          <h1 className="color-b text-lg font-bold mt-20">Biodiversity</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Bodytext
            text={
              <p>
                To understand the ecological state of the area, baseline surveys were essential. Systematic assessments of butterflies, fishes, reptiles, birds, amphibians, bees and vegetation yielded valuable data and helped chart a roadmap for conserving the lake.
              </p>
            }
          />
        </span>
      )
    },
    {
      id: 2,
      title: 'Identifying key issues to be tackled',
      content: (
        <span>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Declined water quality with untreated sewage inflow.</strong></li>
            <li><strong>Overgrowth of invasives, such as Lantana and Parthenium.</strong></li>
            <li><strong>Loss of ecosystem services, like groundwater recharge and biodiversity.</strong></li>
            <li><strong>Haven for illegal activities.</strong></li>
            <li><strong>Inconducive for human use and recreation.</strong></li>
            <li><strong>Need to involve local community.</strong></li>
          </ul>
        </span>
      )
    },
    {
      id: 3,
      title: 'Interventions',
      content: (
        <span>
          <h1 className="color-b text-lg font-bold mt-10">Installing NBS</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ul className="list-disc list-inside mb-4 space-y-2 mt-10">
            <li><strong>Mediations combined grey (engineered) and green (nature-based) solutions.</strong></li>
            <li><strong>Shoreline rehabilitation introduced drip irrigation with inputs from geologist and landscape artist.</strong></li>
          </ul>
        </span>
      )
    },
    {
      id: 4,
      title: 'Lake clean-up',
      content: (
        <span>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Bodytext text={<p>The community pitched in to remove plastic, discarded clothes and other accumulated waste.</p>} />
          <Bodytext text={<p>Removing invasives from land and water: Lantana and Parthenium were extracted from the area surrounding the lake. Water hyacinth was removed from the lake.</p>} />
          <Bodytext text={<p>Weed to waste: Wood from lantana and trimmed Pongamia trees formed mounds for butterfly garden, while tyres, debris and lantana were repurposed for seating.</p>} />
        </span>
      )
    },
    {
      id: 5,
      title: 'Rewilding with a mix of natives',
      content: (
        <span>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Bodytext text={<p>Rewilding with native and pollinator-friendly species. Butterfly trail: Two butterfly mounds were created with host plants for caterpillars and nectar plants for adult butterflies.</p>} />

          <h1 className="color-b text-lg font-bold mt-20">Aromatic garden</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video"
            allowFullScreen
          />
          <Bodytext text={<p>A “bee hotel” made of dead wood, bamboo, twigs and other natural materials was designed to attract solitary bees.</p>} />

          <h1 className="color-b text-lg font-bold mt-20">Pathway</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video"
            allowFullScreen
          />
          <Bodytext text={<p>Uncemented walking trails encouraged slower, mindful walking and allowed vegetation to flourish along the route.</p>} />

          <h1 className="color-b text-lg font-bold mt-20">Creatures on canvas</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video"
            allowFullScreen
          />
          <Bodytext text={<p>Construction waste was repurposed as canvases to showcase the lake’s biodiversity.</p>} />
        </span>
      )
    },
    {
      id: 6,
      title: 'Formation of lake trust',
      content: (
        <span>
          <Bodytext text={<p>Capacity building for stakeholders to manage emerging challenges like invasives.</p>} />
          <h1 className="color-b text-lg font-bold mt-20">Water quality</h1>
          <iframe
            className="w-full h-[450px] rounded-xl"
            src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
            title="YouTube video player"
            allowFullScreen
          />
          <Bodytext text={<p>A place-based education manual was developed for engagement with schools.</p>} />
        </span>
      )
    },
    {
      id: 7,
      title: 'Participatory water quality monitoring manual for residents',
      content: (
        <span>
          <Bodytext text={<p>Towards a self-sustaining socio-ecological restoration model.</p>} />
        </span>
      )
    }
  ];

  // Track active step using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smoothly track ray height based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current?.getBoundingClientRect().top ?? 0;
      const containerHeight = containerRef.current?.offsetHeight ?? 1;

      const lastStep = stepRefs.current[stepRefs.current.length - 1];
      if (!lastStep) return;

      const lastStepBottom = lastStep.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      const totalScrollable = lastStepBottom - containerTop - windowHeight;
      const scrolled = window.scrollY - (containerRef.current?.offsetTop ?? 0);

      const ratio = Math.min(1, Math.max(0, scrolled / totalScrollable));
      setProgress(ratio);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialise
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex gap-12 px-10 py-20"
    >
      {/* Light Ray Track */}
      <div className="relative">
        <div className="w-[4px] bg-gray-300 rounded-full h-full opacity-30"></div>
        <div
          className="absolute top-0 left-0 w-[4px] bg-[#09afd4] rounded-full transition-all duration-200"
          style={{ height: `${progress * 100}%` }}
        ></div>
      </div>

      {/* Timeline Items */}
      <div className="flex-1 flex flex-col gap-40">
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-index={index}
            ref={el => { stepRefs.current[index] = el; }}
            className="p-8 rounded-xl bg-white shadow-md border-2 border-[#087f9b] relative"
          >
            <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
            <div className="text-gray-700 leading-relaxed">{step.content}</div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#087f9b] w-12 h-12 flex items-center justify-center text-lg font-bold text-white rounded-full">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restoration;
