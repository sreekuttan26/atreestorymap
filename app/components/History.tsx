'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bodytext from './Bodytext'

gsap.registerPlugin(ScrollTrigger)

const History = () => {
    const image_section_ref = useRef(null)
    const end_ref = useRef(null)

    useEffect(() => {
        const image_section = image_section_ref.current
        const end_section = end_ref.current

        const trigger = ScrollTrigger.create({
            trigger: image_section,
            pin: image_section,
            start: 'top 20%',
            endTrigger: end_section,
            end: 'bottom 60%',
            scrub: false,
            markers: false,
        })

        return () => trigger.kill()
    }, [])

    return (
        <div className="relative w-full flex">
            {/* left image section */}
            <div
                ref={image_section_ref}
                className="w-1/2 h-[500px] shrink-0 flex flex-col px-1 sticky top-0"
            >
                <img
                    src="/GTS.png"
                    alt="image"
                    className="w-full h-full object-contain object-top"
                />
            </div>

            {/* right scroll content */}
            <div className="w-1/2 flex flex-col gap-6 px-10">
                <h1 className="text-xl font-semibold color-b">The Sampigehalli Auxiliary Tower Station</h1>
                               <Bodytext text={
                                 <span>
                                   The Sampigehalli Auxiliary Tower Station (SATS) overlooking Venkateshpura Lake, built in 1803, witnessed the Great Trigonometrical Survey (GTS) of India. It was one of the most ambitious scientific projects in history, designed to survey the Indian subcontinent. The GTS commenced in 1802 and took nearly a hundred years to complete. It mapped the entire Indian subcontinent, even measuring the Himalayan peaks and revealing to the world that Mt Everest was the tallest mountain ever.
                                 </span>
                               } />
                               <Bodytext text={
                                 <span >
                                   Thousands of people worked on this project but the most remembered are William Lambton, George Everest and Andrew Waugh. It was Lambton, an English Infantry officer, with experience in surveying, who came up with the idea of developing an accurate map of India using a precise technique called triangulation, and his proposal soon set the GTS in motion. While his equipment was yet to arrive, Lambton decided to do a pilot survey in Bangalore, for which he needed to establish a trial baseline. He set out by establishing observation points across Bangalore, which aided in minimising observation and calculation errors. These points were the auxiliary stations and one was the SATS, which became one of the many principal stations for triangulation.
                                 </span>
                               } />
                               <Bodytext text={
                                 <span>
                                   A twelve-foot pillar, which was recorded as standing in the centre of the platform, is now missing. Only the deep circular pit at its base remains.
                                 </span>
                               } />



                <div ref={end_ref} className="h-[1px]"></div>
            </div>
        </div>
    )
}

export default History
