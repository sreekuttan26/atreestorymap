'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bodytext from './Bodytext'

gsap.registerPlugin(ScrollTrigger)

const History = () => {
  const image_section_ref = useRef(null)
  const video_ref = useRef<HTMLVideoElement>(null)
  const end_ref = useRef(null)

  useEffect(() => {
    const image_section = image_section_ref.current
    const end_section = end_ref.current
    const video = video_ref.current

    // pin behaviour
    const pinTrigger = ScrollTrigger.create({
      trigger: image_section,
      pin: image_section,
      start: 'top 20%',
      endTrigger: end_section,
      end: 'bottom 60%',
      scrub: false,
      markers: false,
    })

    // mute when out of view
    const visibilityTrigger = ScrollTrigger.create({
      trigger: image_section,
      start: 'top 20%',
      end: 'bottom top',
      onEnter: () => {
        if (video)  video.pause()
      },
      onLeave: () => {
        if (video) video.pause()
      },
      onEnterBack: () => {
        if (video)  video.pause()
      },
      onLeaveBack: () => {
        if (video)  video.pause()
      },
    })

    return () => {
      pinTrigger.kill()
      visibilityTrigger.kill()
    }
  }, [])

  return (
    <div className="relative w-full flex">
      {/* left image section */}
      <div
        ref={image_section_ref}
        className="w-1/2 h-[500px] shrink-0 flex flex-col px-1 sticky top-0"
      >
        <video
          ref={video_ref}
          src="https://atree-communication.s3.amazonaws.com/Storymap_media/history%20video.mp4"
          className="w-full rounded-xl object-contain"
          muted
          playsInline
          controls
          autoPlay
        />
      </div>

      {/* right scroll content */}
      <div className="w-1/2 flex flex-col gap-6 px-10">
        <h1 className="text-xl font-semibold colour-b">The Sampigehalli Auxiliary Tower Station</h1>

        <Bodytext text={
          <span>
            Built in 1803, the Sampigehalli Auxiliary Tower Station (SATS) overlooking Venkateshpura Lake witnessed the Great Trigonometrical Survey (GTS)…
          </span>
        } />

        <img
          src="/GTS.png"
          alt="image"
          className="w-full h-full object-contain object-top"
        />

        <div ref={end_ref} className="h-[1px]"></div>
      </div>
    </div>
  )
}

export default History
