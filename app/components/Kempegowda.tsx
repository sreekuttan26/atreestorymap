'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bodytext from './Bodytext'

gsap.registerPlugin(ScrollTrigger)

const Kempegowda = () => {
    const image_section_ref = useRef(null)
    const end_ref = useRef(null)


    return (
        <div className="relative w-full flex">
            

            {/* right scroll content */}
            <div className="w-1/2 flex flex-col gap-6 px-0">
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



                <div ref={end_ref} className="h-[1px]"></div>
            </div>



            {/* left image section */}
            <div
              
                className="w-1/2 h-[600px] shrink-0 flex flex-col px-1  top-0"
            >
                <img
                    src="/kg-1.png"
                    alt="image"
                    className="w-full h-full object-contain "
                />
            </div>


        </div>
    )
}

export default Kempegowda
