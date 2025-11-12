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

import BirdCursor from "./components/Birdcursor";
import SpotLight2 from "./components/Spotlight_2";
import Degradation from "./components/Degradation";
import LayerReveal from "./components/LayerReveal ";
import LayeredScroll from "./components/LayeredScroll";
import ScrollytellingSection from "./components/ScrollytellingSection";
import Scrollcontiner from "./components/Scrollcontiner";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {


  const [activesection, setActiveSection] = useState("")

  const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    Degradation: useRef(null),
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
    <main className="w-full h-full flex flex-col relative">
      <BirdCursor />
      {/* Banner video */}
      <div className="w-full h-[80vh] relative overflow-hidden">
        <Banner />
      </div>



      {/* navigation menu */}
      <div className="w-full h-[100px] bg-gray-100 shadow-xl flex gap-5 justify-evenly items-center sticky top-0 cursor-pointer z-50 bird-landing">
        {nav_items.map((nav, index) => (
          <div key={index} className={`text-lg hover:underline hover:font-bold ${activesection === nav.name ? "" : ""}`}>
            {nav.name}
            <div className={`bg-[#087f9b] h-0.5 rounded-xl ${activesection === nav.name ? "flex" : "hidden"}`}></div>

          </div>

        ))}
      </div>


      {/* introduction */}
      <div ref={sectionRefs.Introduction} className='w-full h-auto px-[20vw]  mt-20 bird-landing'>
        <Heading text="Introduction" />
        <Bodytext text="This is a story of Venkateshpura Lake – a modest freshwater lake tucked away in the northern part of Bengaluru, a story of how the lake lost its vitality as human development took precedence. Over time, it turned into a stagnant, degraded water body, until one day, a few concerned citizens decided to bring it back to life, not just for the lake’s sake, but for their own. " />
      </div>



      {/* Place */}
      <div ref={sectionRefs.Place} className='w-full h-auto px-[20vw]  mt-20 bird-flying'>
        <Heading text="Place" />
        <Bodytext text="Where is Venkateshpura lake? " />
      </div>
      <div ref={sectionRefs.Place} className="w-full h-[895px] mt-20">
        <Place />
      </div>



      {/* history */}
      <div ref={sectionRefs.History} className='w-full h-auto px-[20vw] mt-[1425px] bird-landing'>
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
            customstyle="h-[1800px] "
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
                    The <i>JaraBande Maramma Temple</i>, perched atop a rock by the waterbody, is a sacred space steeped in history and local tradition. Its origins are unclear, but it is thought to have been built during the Mysore kings’ reign, and was a resting place for soldiers on the move. Over time, it evolved into a sacred worship site, especially during the month of Shravan, when villagers gathered to pray for rain, offering <i>Ambali</i>, a millet-based dish.

                  </span>
                } />
                <Bodytext text={
                  <span>
                    A natural cleft in the rock near the entrance, from where fresh water flows year-round, is seen as a miraculous gift. The Dasara festival features vital rituals, including animal sacrifices. Inside the temple, uncarved stones represent powerful protectors – <i>Jarubandemma, Akkayamma</i> and the <i>Saptamatheyaru</i> (Seven Divine Mothers) – reflecting the deep connection between the community, their faith and the land.

                  </span>
                } />
                {/* <Bodytext text={
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos possimus dolores consequuntur veritatis voluptas quidem maxime voluptatem? Quae cumque, consequuntur sed natus nesciunt praesentium accusamus deleniti! Dicta, eos aliquid.
                </span>
              } /> */}
              </div>

            } />




        </div>

      </div>






      {/*Degradation  */}
      <div ref={sectionRefs.Degradation}>
        <div className='w-full h-auto px-[20vw]   bird-landing'>
          <Heading text="Degradation of the lake" />
          <Bodytext text="Civilisations evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its stakeholders, it sustains livelihoods, shapes cultural practices and supports ecological balance." />


        </div>
        <div className="bird-landing-side">
          <Scrollcontiner />
        </div>
      </div>


















      {/* degradation */}
      {/* <div ref={sectionRefs.Degradation} className='w-full h-auto px-[20vw]  -mt-20 bird-landing'>
        <Heading text="degradation" />
        
      </div> */}
      {/* <div>
        <LayerReveal />

      </div> */}








      {/* stakeholder */}
      <div ref={sectionRefs.Stakeholders} className='w-full h-auto px-[20vw]  mt-20 bird-landing'>
        <Heading text="Stakeholders" />
        <Bodytext text="Civilisations evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its stakeholders, it sustains livelihoods, shapes cultural practices and supports ecological balance." />
      </div>
      <div className="w-full h-[895px] mt-20 flex justify-start   relative ">
        <SpotLight2 />

      </div>


      










      <div className="w-full h-[10000px]"> </div>


    </main>
  );
}
