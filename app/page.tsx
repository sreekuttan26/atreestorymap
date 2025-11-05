'use client'
import Image from "next/image";
import Banner from "./components/Banner";
import { nav_items } from "./constants";
import Heading from "./components/Heading";
import Bodytext from "./components/Bodytext";
import Place from "./components/Place";
import { useEffect, useState, useRef } from "react";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StickyImageSection from "./components/StickyImageSection";
import SpotlightImage from "./components/Spotlightimage";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {


  const [activesection, setActiveSection] = useState("")

  const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    Stakeholders: useRef(null),
    goal: useRef(null),
    Community: useRef(null),
    community: useRef(null),
  };

  const gtsimgref = useRef(null)
  const gtstextref = useRef(null)


  useEffect(() => {
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(key),
        onEnterBack: () => setActiveSection(key),
      });
    });


    // for gts history content
    const gtsimg = gtsimgref.current
    const gtstext = gtstextref.current

    ScrollTrigger.create({
      trigger: gtsimg,
      start: "top top",
      endTrigger: gtstext,
      end: "top center",
      scrub: false,
      pin: gtsimg

    })

  }, []);

  useEffect(() => {
    console.log(activesection)

  }, [activesection])



  return (
    <main className="w-full h-full flex flex-col ">
      {/* Banner video */}
      <div className="w-full h-[80vh] relative overflow-hidden">
        <Banner />
      </div>



      {/* navigation menu */}
      <div className="w-full h-[100px] bg-gray-100 shadow-xl flex gap-5 justify-evenly items-center sticky top-0 cursor-pointer z-50">
        {nav_items.map((nav, index) => (
          <div key={index} className={`text-lg hover:underline hover:font-bold ${activesection === nav.name ? "" : ""}`}>
            {nav.name}
            <div className={`bg-[#087f9b] h-0.5 rounded-xl ${activesection === nav.name ? "flex" : "hidden"}`}></div>

          </div>

        ))}
      </div>


      {/* introduction */}
      <div ref={sectionRefs.Introduction} className='w-full h-auto px-[20vw]  mt-20'>
        <Heading text="Introduction" />
        <Bodytext text="This is a story of Venkateshpura Lake – a modest freshwater lake tucked away in the northern part of Bengaluru, a story of how the lake lost its vitality as human development took precedence. Over time, it turned into a stagnant, degraded water body, until one day, a few concerned citizens decided to bring it back to life, not just for the lake’s sake, but for their own. " />
      </div>



      {/* Place */}
      <div ref={sectionRefs.Place} className='w-full h-auto px-[20vw]  mt-20'>
        <Heading text="Place" />
        <Bodytext text="Where is Venkdeshpura lake?" />
      </div>
      <div ref={sectionRefs.Place} className="w-full h-[895px] mt-20">
        <Place />
      </div>



      {/* history */}
      <div ref={sectionRefs.History} className='w-full h-auto px-[20vw] mt-[1425px]'>
        <Heading text="History" />
        <Bodytext text="There is little by way of origin story for Venkateshpura Lake. But some little legends from history lend a narrative. Here is one such." />
        <div className='flex flex-col gap-10'>


          <div className="w-full h-full mt-10 flex gap-5">
            <div className="flex-1">
              <Bodytext text={
                <span>
                  <i>“Keregalam Kattu, Maragalam Nedu”</i> is a saying in Kannada, meaning – “Build lakes, plant trees” – attributed to the mother of Kempe Gowda, the governor under the Vijayanagara Empire famed for founding Bangalore city.
                </span>
              } />
              <Bodytext text={
                <span>
                  Legend has it that the mother offered this advice to her son when he set out to build his dream capital in the 1530s. Kempe Gowda is remembered today for creating nearly a hundred lakes and lining the city’s roads with trees, a vision that was to shape Bangalore’s identity.
                </span>
              } />
              <Bodytext text={
                <span>
                  Before it transformed into an ‘IT hub’ of India, Bangalore was popularly known as the ‘City of Lakes’. While many lakes have made way for development, some like the Venkateshpura Lake survive as renewed hope for a city heaving under construction projects.
                </span>
              } />
            </div>
            <div className="flex-1 relative">
              <div className="flex flex-col gap-2">
                <Image
                  unoptimized
                  src="/kg-1.png"
                  alt="img"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
              <p className="text-center">Image source</p>

            </div>


          </div>

          <StickyImageSection 
           customstyle="h-[1800px]"
          leftimg={true} 
          images={<img
            src="/GTS.png"
            alt="image"
            className="w-full h-full object-contain"
          />}
          content={
            <div>
              <h1 className="text-xl font-semibold color-b">The Sampigehalli Auxiliary Tower Station</h1>
              <Bodytext text={
                <span>
                  The Sampigehalli Auxiliary Tower Station (SATS) overlooking Venkateshpura Lake, built in 1803, witnessed the Great Trigonometrical Survey (GTS) of India. It was one of the most ambitious scientific projects in history, designed to survey the Indian subcontinent. The GTS commenced in 1802 and took nearly a hundred years to complete. It mapped the entire Indian subcontinent, even measuring the Himalayan peaks and revealing to the world that Mt Everest was the tallest mountain ever.
                </span>
              } />
              <Bodytext text={
                <span ref={gtstextref}>
                  Thousands of people worked on this project but the most remembered are William Lambton, George Everest and Andrew Waugh. It was Lambton, an English Infantry officer, with experience in surveying, who came up with the idea of developing an accurate map of India using a precise technique called triangulation, and his proposal soon set the GTS in motion. While his equipment was yet to arrive, Lambton decided to do a pilot survey in Bangalore, for which he needed to establish a trial baseline. He set out by establishing observation points across Bangalore, which aided in minimising observation and calculation errors. These points were the auxiliary stations and one was the SATS, which became one of the many principal stations for triangulation.
                </span>
              } />
              <Bodytext text={
                <span>
                  A twelve-foot pillar, which was recorded as standing in the centre of the platform, is now missing. Only the deep circular pit at its base remains.
                </span>
              } />
            </div>

          } />




          <StickyImageSection 
          customstyle="h-[150vh] -mt-100"
          leftimg={false} 
          images={<img
            src="/temple.png"
            alt="image"
            className="w-full h-full object-contain"
          />}
          content={
            <div>
              <h1 className="text-xl font-semibold color-b">Jarabandemma Temple</h1>
              <Bodytext text={
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos possimus dolores consequuntur veritatis voluptas quidem maxime voluptatem? Quae cumque, consequuntur sed natus nesciunt praesentium accusamus deleniti! Dicta, eos aliquid.
                </span>
              } />
              <Bodytext text={
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos possimus dolores consequuntur veritatis voluptas quidem maxime voluptatem? Quae cumque, consequuntur sed natus nesciunt praesentium accusamus deleniti! Dicta, eos aliquid.
                </span>
              } />
              <Bodytext text={
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos possimus dolores consequuntur veritatis voluptas quidem maxime voluptatem? Quae cumque, consequuntur sed natus nesciunt praesentium accusamus deleniti! Dicta, eos aliquid.
                </span>
              } />
            </div>

          } />



          
        </div>

      </div>

       {/* stakeholder */}
      <div ref={sectionRefs.Stakeholders} className='w-full h-auto px-[20vw]  -mt-20'>
        <Heading text="Stakeholders" />
        <Bodytext text="Where is Venkdeshpura lake?" />
      </div>
      <SpotlightImage/>









      <div className="w-full h-[1000px]"></div>


    </main>
  );
}
