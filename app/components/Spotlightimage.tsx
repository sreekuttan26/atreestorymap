'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function SpotlightImage() {
    const spotlightRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const spotlight = spotlightRef.current;
        if (!spotlight) return;

        // Animate the spotlight in a loop
        gsap.to(spotlight, {
            x: 400,
            y: 200,
            duration: 1,
            repeat: 0,
            yoyo: false,
            ease: 'power2.inOut',
        });
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/place.png"
                alt="Background"
                fill
                className="object-cover brightness-60"
                priority
            />

            {/* Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute w-[150px] h-[150px] rounded-full pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 73%)',
                    mixBlendMode: 'overlay',
                }}
            ></div>
        </div>
    );
}
