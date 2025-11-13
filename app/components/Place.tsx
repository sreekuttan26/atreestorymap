'use client'
import React from 'react'
import Image from 'next/image';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger)

const Place = () => {

    const imgref = useRef(null)
    const box0ref = useRef(null)
    const box1ref = useRef(null)
    const box2ref = useRef(null)

    useEffect(() => {
        const boxes = [box0ref.current, box1ref.current, box2ref.current];

        boxes.forEach((box, i) => {
            gsap.from(box, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: box,
                    start: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
            });
        });





        const img = imgref.current;
        const box0 = box0ref.current;
        const box1 = box1ref.current;
        const box2 = box2ref.current;


        ScrollTrigger.create({
            trigger: img,
            start: "top top",
            endTrigger: box1,
            end: "top top",
            pin: img,
            pinSpacing: false,
            scrub: false,

        })

    }, [])

    return (
        <div className="w-full h-full flex flex-col relative ">
            <div ref={imgref} className="w-full h-full flex  absolute top-0 left-0 ">
                <img
                    src="/svg/Place_map.svg"
                    alt="place"
                
                    className="object-conatin w-[75%] h-[500px] "

                />
                {/* overlay */}
                {/* <div className="absolute w-full h-full top-0 left-0 bg-black opacity-0"></div> */}

            </div>




            {/* containers */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-40 pt-50 items-end px-20  ">
                <div ref={box0ref} className="bg-white p-4  w-[500px] flex flex-col rounded-xl opacity-90 gap-5">
                    <div className="w-full h-[200px] relative ">
                        <Image
                            alt="img1"
                            src="/place.png"
                            fill
                            className="object-cover" />
                    </div>


                    <p>Venkateshpura Lake is a relatively small lake, extending a little over 10 acres. It is managed by the Bruhat Bangalore Mahanagara Palike (BBMP), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is sometimes more familiar to the locals as Sampigehalli Lake, its old name</p>



                </div>

                <div ref={box2ref} className="bg-white p-4  w-[500px] flex flex-col rounded-xl opacity-90 gap-5">
                      <div className="w-full h-[200px] relative ">
                        <Image
                            alt="img1"
                            src="/place.png"
                            fill
                            className="object-cover" />
                    </div>

                    <p>The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment area that leads to Hebbala Nagara Valley, one of the five valleys of Bangalore. Being at the apex of a series of lakes, its outlet joins Rachenahalli Lake on the downstream.</p>



                </div>

                <div ref={box1ref} className="bg-white p-4  w-[500px] flex flex-col rounded-xl opacity-90 gap-5">
                      <div className="w-full h-[200px] relative ">
                        <Image
                            alt="img1"
                            src="/place.png"
                            fill
                            className="object-cover" />
                    </div>

                    <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. Most of the rock faces that covered the lake are gone. Only the rocky projection bearing the nineteenth-century Sampigehalli Auxiliary Tower Station stands to tell a story. Adjacent to the waterbody is the Jarabandemma Temple, built on a rock, which holds unique significance due to the distinct rituals observed there even today. The lake stands in the neighbourhood, amid towering buildings, as a testament to the struggle put up by many of the residents who live around it.</p>



                </div>


            </div>



        </div>
    )
}

export default Place
