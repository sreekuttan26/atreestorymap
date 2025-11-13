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
// import SpotlightImage from "./components/Spotlightimage";

import BirdCursor from "./components/Birdcursor";
import SpotLight2 from "./components/Spotlight_2";
// import Degradation from "./components/Degradation";
// import LayerReveal from "./components/LayerReveal ";
// import LayeredScroll from "./components/LayeredScroll";
// import ScrollytellingSection from "./components/ScrollytellingSection";
import Scrollcontiner from "./components/Scrollcontiner";
import StoryMapAccordion from "./components/StoryMapAccordion";
import Place2 from "./components/Place2";
import History from "./components/History";
import Kempegowda from "./components/Kempegowda";
import History_gts from "./components/History_gts";


gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const [showbird, setshowbird] = useState(false)


  const [activesection, setActiveSection] = useState("")

  const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    Degradation: useRef(null),
    Stakeholders: useRef(null),
    Goal_Setting: useRef(null),
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
        onEnter: () => setActiveSection(key.replace('_', ' ')),
        onEnterBack: () => setActiveSection(key.replace('_', ' ')),
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
      <BirdCursor showbird={showbird} />
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
      <div ref={sectionRefs.Place}>
        <div className='w-full h-auto px-[20vw]  mt-20 bird-flying'>
          <Heading text="Place" />
          <Bodytext text="Where is Venkateshpura lake? " />
        </div>
        <div ref={sectionRefs.Place} className="w-full h-full mt-20 relative ">
          {/* h-[895px] */}
          <Place2 />
        </div>
      </div>




      {/* history */}
      <div ref={sectionRefs.History} className='w-full h-auto px-[20vw] mt-20 bird-landing'>
        {/* mt-[1425px] */}
        <Heading text="History" />
        <Bodytext text="There is little by way of origin story for Venkateshpura Lake. But some little legends from history lend a narrative. Here is one such." />

        <div className=' w-full h-full relative mt-10'>
          <Kempegowda />
        </div>


        <div className=' w-full h-full relative mt-20'>
          <History />

        </div>

        <div className=' w-full h-full relative mt-20'>
          <History_gts />

        </div>


      </div>






      {/*Degradation  */}
      <div ref={sectionRefs.Degradation} className=' mt-30' >
        <div className='w-full h-auto px-[20vw]    bird-landing'>
          <Heading text="Degradation of the lake" />
          <Bodytext text="Civilisations evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its stakeholders, it sustains livelihoods, shapes cultural practices and supports ecological balance." />


        </div>
        <div className="bird-landing-side">
          <Scrollcontiner />
        </div>
      </div>







      {/* stakeholder */}
      <div ref={sectionRefs.Stakeholders}>
        <div className='w-full h-auto px-[20vw]  mt-20 bird-landing'>
          <Heading text="Stakeholders" />
          <Bodytext text="Civilisations evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its stakeholders, it sustains livelihoods, shapes cultural practices and supports ecological balance." />
        </div>
        <div className="w-full h-auto mt-20 flex justify-start   relative ">
          <SpotLight2 />

        </div>

      </div>




      {/* goal setting */}
      <div ref={sectionRefs.Goal_Setting} className='w-full h-full mt-20 flex flex-col '>
        <div className='w-full h-auto flex flex-col px-[20vw] bird-landing'>
          <Heading text="Goal Setting" />
          <Bodytext text="Following are the goals." />
        </div>
        <div className='flex gap-5 mt-10'>
          <img
            src='/plusmap.png'

            className="object-conatin h-[800px] px-10"


          >

          </img>
          <div>

            <div className="">
              <StoryMapAccordion />
            </div>
          </div>

        </div>



      </div>







      {/* mascot */}
      <div className="w-full h-full px-[20vw] mt-20">
        <h1 className="text-xl font-semibold color-b">Choosing our mascot- The Pied kingfisher</h1>
        <div className='w-full flex gap-2 items-center mt-10'>
          <div className='h-[300px] w-[1800px] cursor-pointer bg-gray-100 rounded-2xl shadow-xl flex flex-col items-center justify-center object-center'  onClick={() => { setshowbird(!showbird) }}>
            <img

              src='/bird-sit.gif'
              alt="bird cursor"
              className={`object-contain h-[200px] object-top  ${showbird ? 'hidden' : 'flex'}`}

            ></img>
            <p className={` ${showbird ? 'hidden' : 'flex'} text-gray-400 -mt-10 cursor-pointer `} onClick={() => { setshowbird(!showbird) }}> Click to unlock me 🔒</p>
            <p className={` ${showbird ? 'flex' : 'hidden'} text-gray-400 -mt-10 cursor-pointer `} onClick={() => { setshowbird(!showbird) }}> Click to lock me 🔒</p>
          </div>
          <div className="px-4">
            <Bodytext text={
              <span>
                The Pied Kingfisher, a striking black-and-white bird  – seeks clear lakes and rivers , diving effortlessly in pursuit of fish and other aquatic prey. However, as pollution clouded the waters of Venkateshpura Lake and stagnant conditions prevailed, the Pied kingfisher, which was once seen here, disappeared. Hence it was decided to choose Pied kingfisher as the indicator species for lake health.
              </span>
            } />


          </div>
        </div>


      </div>





      {/* <div className="border-2" onClick={(e) => { setbirdstyle("") }}>Fly bird</div> */}














      <div className="w-full h-[10000px]"> </div>


    </main>
  );
}
