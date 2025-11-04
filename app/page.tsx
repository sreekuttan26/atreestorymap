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

gsap.registerPlugin(ScrollTrigger)

export default function Home() {


  const [activesection, setActiveSection] = useState("")

  const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    goal: useRef(null),
    Community: useRef(null),
    community: useRef(null),
  };


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

        <div className="w-full h-full mt-10 flex gap-5">
          <div className="flex-1">
            <Bodytext text={
              <span>
                <i>“Keregalam Kattu, Maragalam Nedu”</i> is a saying in Kannada, meaning – “Build lakes, plant trees” – attributed to the mother of Kempe Gowda, the governor under the Vijayanagara Empire famed for founding Bangalore city.
              </span>
            } />
          </div>
          <div className="flex-1 relative">
            <Image
            unoptimized
            src="/place.png"
            alt="img"
            width={1000}
            height={1000}
            className="object-cover"

            
            />
          </div>

        </div>
      </div>









      <div className="w-full h-[1000px]"></div>


    </main>
  );
}
