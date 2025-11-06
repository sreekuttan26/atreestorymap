'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SpotLight = () => {
    const imgRef = useRef<HTMLDivElement>(null);
    const imgRef2 = useRef<HTMLDivElement>(null);
    const img_overlay = useRef<HTMLDivElement>(null);
    const box0Ref = useRef<HTMLDivElement>(null);
    const box1Ref = useRef<HTMLDivElement>(null);
    const box2Ref = useRef<HTMLDivElement>(null);
    const box3Ref = useRef<HTMLDivElement>(null);
    const box4Ref = useRef<HTMLDivElement>(null);
    const box5Ref = useRef<HTMLDivElement>(null);
    const box6Ref = useRef<HTMLDivElement>(null);
    const boxendRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const boxes = [box0Ref.current, box1Ref.current, box2Ref.current,box3Ref.current,box4Ref.current,box5Ref.current,box6Ref.current];
        const img = imgRef.current;
        const img2 = imgRef2.current;
        const overlay=img_overlay.current;
        const boxend=boxendRef.current;

        if (!img) return;

        // Fade-in effect for boxes
        boxes.forEach((box) => {
            if (!box) return;
            gsap.from(box, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: box,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // Pin the spotlight section
        ScrollTrigger.create({
            trigger: img,
            start: 'top 10%',
            endTrigger: boxend,
            end: 'bottom 80%',
            pin: true,
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: img2,
            start: 'top 10%',
            endTrigger: boxend,
            end: 'bottom 80%',
            pin: true,
            pinSpacing: false,
        });

         ScrollTrigger.create({
            trigger: overlay,
            start: 'top 10%',
            endTrigger: boxend,
            end: 'bottom 80%',
            pin: true,
            pinSpacing: false,
        });

        // Animate mask position on scroll
        // const tl = gsap.timeline({
           
        //     scrollTrigger: {
        //         trigger: boxes[0],
        //         start: 'top center',
        //         endTrigger: boxend,
        //         end: 'top center',
        //         scrub: true,
        //         markers:true
                
        //     },
        // });

        // // Set mask positions for each box
        // tl.to(img, { '--maskX': '106%', '--maskY': '55%', duration: 1 })
        // .to(img, { '--maskX': '10%', '--maskY': '54%', duration: 1 }) 
        // .to(img, { '--maskX': '18%', '--maskY': '54%', duration: 1 }) 
        // .to(img, { '--maskX': '19%', '--maskY': '54%', duration: 1 }) 
        // .to(img, { '--maskX': '14%', '--maskY': '54%', duration: 1 }) 
        // .to(img, { '--maskX': '12%', '--maskY': '54%', duration: 1 }) 

        
//   Biodiversity
  gsap.to(img, {
    '--maskX': '13%',
    '--maskY': `35%`,
    scrollTrigger: {
      trigger: boxes[0],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //migrant
  gsap.to(img, {
    '--maskX': '5%',
    '--maskY': `45%`,
    scrollTrigger: {
      trigger: boxes[1],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //pastorials
  gsap.to(img, {
    '--maskX': '15%',
    '--maskY': `65%`,
    scrollTrigger: {
      trigger: boxes[2],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //fisher
  gsap.to(img, {
    '--maskX': '27%',
    '--maskY': `40%`,
    scrollTrigger: {
      trigger: boxes[3],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //residence
  gsap.to(img, {
    '--maskX': '43%',
    '--maskY': `30%`,
    scrollTrigger: {
      trigger: boxes[4],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //researchers
  gsap.to(img, {
    '--maskX': '40%',
    '--maskY': `55%`,
    scrollTrigger: {
      trigger: boxes[5],
     start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

  //governemnt
  gsap.to(img, {
    '--maskX': '32%',
    '--maskY': `73%`,
    scrollTrigger: {
      trigger: boxes[6],
      start: 'top 40%',
      end: 'top 40%',
      scrub: true,
    
      markers:false
    },
  });

            
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-start  justify-start ">
            
            {/* Dimmed base image */}
            <div ref={imgRef2} className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-0">
                <img
                    src="/svg/stakeholders.svg"
                    alt="dimmed"
                    className="object-contain w-[60%] h-full brightness-70 opacity-50 "
                />
            </div>
            

            {/* Masked spotlight image */}
            <div
                ref={imgRef}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-10 "
                style={{
                    ['--maskX' as string]: '-15%',
                    ['--maskY' as string]: '10%',
                    WebkitMaskImage: 'url(/spotl.png)',
                    maskImage: 'url(/spotl.png)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'var(--maskX) var(--maskY)',
                    maskPosition: 'var(--maskX) var(--maskY)',
                    WebkitMaskSize: '280px 280px',
                    maskSize: '280px 280px',
                    transition: 'mask-position 0.2s ease',
                }}
            >
                <img
                    src="/svg/stakeholders.svg"
                    alt="spotlight"
                    className="object-contain w-[60%] h-full brightness-100"
                />
                 
    

               
            </div>
            {/* overlay */}
            <div  ref={img_overlay} className=" top-0 left-0 w-full h-full bg-black -z-80 opacity-30 pointer-events-none absolute "></div>
            

            

            {/* Content boxes */}
            <div className="relative z-20 flex flex-col gap-20 pt-40 items-end px-20 w-full ">
                <div ref={box0Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img1"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Biodiversity</h1>
                    <p>Venkateshpura Lake is a relatively small lake extending a little over 10 acres...</p>
                </div>

                <div ref={box1Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img2"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Migrant Workers</h1>
                    <p>The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment...</p>
                </div>

                <div ref={box2Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img2"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Pastorialists</h1>
                    <p>The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment...</p>
                </div>

                <div ref={box3Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img3"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">fisher community</h1>
                    <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it...</p>
                </div>

                <div ref={box4Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img3"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Residents</h1>
                    <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it...</p>
                </div>

                <div ref={box5Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img3"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Researchers</h1>
                    <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it...</p>
                </div>

                <div ref={box6Ref} className="bg-white p-4 w-[500px] rounded-xl opacity-90">
                    <Image
                        alt="img3"
                        src="/place.png"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg"
                    />
                    <h1 className="text-lg font-semibold mt-3">Goverenment</h1>
                    <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it...</p>
                </div>
                {/* end box */}
                <div ref={boxendRef} className=" p-4 w-[500px] rounded-xl opacity-90"></div>
            </div>
            
        </div>

    );
};

export default SpotLight;
