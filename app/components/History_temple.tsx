'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bodytext from './Bodytext'

gsap.registerPlugin(ScrollTrigger)

const History_temple = () => {
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
            end: 'bottom 90%',
            scrub: false,
            markers: false,
        })

        return () => trigger.kill()
    }, [])

    return (
        <div className="relative w-full flex ">
            

            {/* right scroll content */}
            <div className="w-1/2 flex flex-col gap-6 px-10">
                <h1 className="text-xl font-semibold color-b">Jarabandemma Temple</h1>
                <Bodytext text={
                  <span>
                    The <i>JaraBande Maramma Temple</i>, perched on a rocky outcrop by the lake, is a historic sacred site believed to date back to the Mysore kings’ era. As per local tradition, it was a resting place for soldiers on the move. During the month of Shravan, villagers gathered here to pray for rain, offering  <i>Ambali</i>, a millet-based dish. A spring from a natural cleft in the rock near the entrance is seen as a miraculous gift. Inside the temple, uncarved stones represent powerful protectors – <i>Jarubandemma, Akkayamma</i> and the <i>Saptamatheyaru</i> – central to the community.

                  </span>
                } />
                {/* <Bodytext text={
                  <span>
                    A natural cleft in the rock near the entrance, from where fresh water flows year-round, is seen as a miraculous gift. The Dasara festival features vital rituals, including animal sacrifices. Inside the temple, uncarved stones represent powerful protectors – <i>Jarubandemma, Akkayamma</i> and the <i>Saptamatheyaru</i> (Seven Divine Mothers) – reflecting the deep connection between the community, their faith and the land.

                  </span>
                } /> */}



                <div ref={end_ref} className="h-[1px] "></div>
            </div>

            {/* left image section */}
            <div
                ref={image_section_ref}
                className="w-1/2  shrink-0 flex flex-col px-1 sticky top-0"
            >
                <img
                    src="/temple.png"
                    alt="image"
                    className="w-full h-full object-contain object-top"
                />
            </div>
        </div>
    )
}

export default History_temple
