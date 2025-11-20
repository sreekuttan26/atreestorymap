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
    <div className="relative w-full flex ">
      {/* right scroll content */}
      <div className="w-1/2 flex flex-col gap-6 px-0 ">
        <div className="flex-1">
          <Bodytext text={
            <span>
              <i>“Keregalam Kattu, Maragalam Nedu”</i> “Build lakes, plant trees” – is a Kannada saying attributed to the mother of Kempe Gowda, the governor under the Vijayanagara Empire famed for founding Bangalore city. Kempe Gowda is remembered today for creating nearly a hundred lakes and lining the city’s roads with trees, shaping the city’s identity as the ‘City of Lakes’. Over the years, many lakes have been lost but a few like Venkateshpura Lake now stand as renewed hope amid rapid urbanisation.
            </span>
          } />
        </div>

        <div ref={end_ref} className="h-[1px]"></div>
      </div>

      {/* left image section */}
      <div className="w-1/2 h-[500px] flex flex-col p-1 ">
        <img
          src="/kg-1.png"
          alt="image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

  )
}

export default Kempegowda
