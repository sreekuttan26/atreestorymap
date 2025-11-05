'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SpotlightImage() {
    const spotlightRef = useRef<HTMLDivElement | null>(null);

    const img_ref=useRef(null)

    useEffect(() => {
        const spotlight = spotlightRef.current;
        const image=img_ref.current;
        if (!spotlight) return;

        // Animate the spotlight 
        ScrollTrigger.create({
            trigger:image,
            pin:image,
            pinSpacing:false,
            start:"top top",
            
            scrub:false,
            markers:true
        })
        
       
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden ">
            {/* Background Image */}
            <img ref={img_ref}
                src="/place.png"
                alt="Background"
                className="object-contain w-full h-full sticky top-0 brightness-65 z-0"
            />

            {/* Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute w-[250px] h-[250px] rounded-full pointer-events-none z-100"
                style={{
                    top: '200px',  
                    left: '100px',
                    
                    background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 70%)',
                    mixBlendMode: 'screen',
                }}
            ></div>
        </div>
    );
}
