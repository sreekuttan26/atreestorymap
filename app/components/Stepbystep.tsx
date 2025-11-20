'use client'
import React from 'react'

import { useState, useRef, useEffect } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bodytext from './Bodytext';
gsap.registerPlugin(ScrollTrigger)


const Stepbystep = () => {

    const leftRef_container = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
    const last_item_ref = useRef(null)
    const birdRef = useRef<HTMLImageElement | null>(null)




    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const ref6 = useRef<HTMLDivElement>(null);
    const ref7 = useRef<HTMLDivElement>(null);

    const steps = [
        {
            id: 1,
            title: "Assessing water quality and biodiversity",
            width: "w-3/4",
            content: (
                <span>

                    <span><b>Secchi Depth:</b> A 20-cm disc attached to a marked rope was lowered into the water to measure its clarity or transparency.                 </span>

                    <div className='mt-10'>
                        <span>
                            <b>Dissolved Oxygen:</b> A handheld probe with a meter and a sensor was used to measure the amount of dissolved oxygen available for aquatic life – plants, fish and other organisms.
                        </span>
                        <video
                            src="https://atree-communication.s3.amazonaws.com/Storymap_media/How%20healthy%20is%20your%20lake.mp4"
                            className="w-full h-[350px] rounded-xl mt-10 object-contain"

                            muted
                            playsInline
                            controls

                        />

                    </div>

                    <div className='mt-10'>
                        <span>
                            <b>Shoreline Vegetation:</b>Shoreline vegetation was carefully planned and planted to filter run-off, absorb excess nutrients and provide shelter for small fish and zooplankton.

                        </span>
                        <video
                            src="https://atree-communication.s3.amazonaws.com/Storymap_media/biodiversity.mp4"
                            className="w-full h-[350px] rounded-xl mt-10 object-contain"

                            muted
                            playsInline
                            controls

                        />

                    </div>



                </span>
            ),

            creature: "/famingo.png",

        },
        {
            id: 2,
            title: "Identifying key issues to be tackled",
            width: "w-4/5",
            content: (
               <span>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Declined water quality with untreated sewage inflow.</strong></li>
                        <li><strong>Overgrowth of invasives, such as Lantana and Parthenium.</strong></li>
                        <li><strong>Loss of ecosystem services, like groundwater recharge and biodiversity.</strong></li>
                        <li><strong>Haven for illegal activities.</strong></li>
                        <li><strong>Inconducive for human use and recreation.</strong></li>
                        <li><strong>Need to involve local community.</strong></li>
                    </ul>




                </span>
            ),

            creature: "/kingfisher.png",

        },
        {
            id: 3,
            title: "Lake clean-up",
            width: "w-6/7",
            content: (
              <span>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>The community pitched in to remove plastic, discarded clothes and other accumulated waste</strong></li>
                        <li><strong>The community pitched in to remove plastic, discarded clothes and other accumulated waste.</strong></li>
               
                    </ul>

                </span>
            ),

            creature: "/rockagama.png",

        },
        {
            id: 4,
            title: "Installing Nature-based Solutions",
            width: "w-8/9",
            content: (
                <span> 
                        <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>An aerator was installed to increase the dissolved oxygen by circulating the water.</strong></li>
                        <li><strong>Six floating islands were installed with native vegetation like Cyperus, Typha and Centella Asiatica to help filter contaminants and prevent nutrient build-up.</strong></li>
                        <li><strong>Shoreline rehabilitation included removing water hyacinth and weeds along the shore, planting native species to facilitate soil stability and support biodiversity.</strong></li>
               
                    </ul>
                     

                </span>
            ),

            creature: "🦅",

        },
        {
            id: 5,
            title: "Rewilding with a mix of natives",
            width: "w-10/11",
            content: (
                <span> 
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Two butterfly mounds were created with host plants for caterpillars and nectar plants for adult butterflies.</strong></li>
                        <li><strong>A pocket guide to the butterflies of Venkateshpura Lake was also developed to help visitors identify and appreciate the butterflies.</strong></li>
                        <li><strong>A “bee hotel”, made of natural materials like dead wood, bamboo and twigs, was installed to attract solitary bees – non-aggressive and vital pollinators.</strong></li>
                        <li><strong>Around 200 aromatic plants were introduced to support wildlife and offer visitors a sensory-rich experience.</strong></li>
                        <li><strong>Uncemented walking trails were used in place of conventional paved paths to encourage slower, mindful walking. </strong></li>
                        <li><strong>Trails were designed to mimic the dry Deccan gardens with grasses that Bangalore historically had. </strong></li>
               
                    </ul>
                     

                </span>
            ),

            creature: "🦅",

        },
        {
            id: 6,
            title: "Formation of lake trust",
            width: "w-14/15",
            content: (
                <span>
                       <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Pressure from residents prompted action from the civic body to restore the lake.</strong></li>
                        <li><strong>When restoration efforts slowed, residents shifted focus to the protection of GTS Tower through rallies and collective actions.</strong></li>
                        <li><strong>They formed a trust – Chokkanahalli Sampigehalli Abhivriddhi Forum (CSAF) –  a move that brought significant media attention.</strong></li>
                       
               
                    </ul>

                    

                </span>
            ),

            creature: "🦅",

        },
        {
            id: 7,
            title: "Participatory water quality monitoring",
            width: "w-full",
            content: (
                <span>
                    <h1 className="font-bold color-b p-2 ">Empower community</h1>
                       <ul className="list-disc list-inside mb-4 space-y-2">
                        <li><strong>Films showing simple water quality steps, such as Secchi depth and Dissolved Oxygen tests, were made freely available. </strong></li>
                        <li><strong>Residents participated in all restoration activities, including water quality monitoring.</strong></li>
                        <li><strong>They became equipped and confident to take ownership of the lake’s responsibilities.</strong></li>
                       
               
                    </ul>

                </span>
            ),

            creature: "🦅",

        },

    ]

    useEffect(() => {
        const leftref = leftRef_container.current;
        const lastitem = last_item_ref.current;
        if (!leftref) return;

        ScrollTrigger.create({
            trigger: leftref,
            start: 'top 20%',
            pin: leftref,
            endTrigger: lastitem,
            end: 'bottom 90%',
            scrub: true,
            markers: false,
        })


    }, []);

    const showanimation = (i: number) => {
        setActiveStep(i)

    }



    useEffect(() => {
        const rightScroller = document.querySelector(".right-container");

        contentRefs.current.forEach((section, i) => {
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                scroller: rightScroller,
                start: "top center",
                end: "bottom center",
                onEnter: () => showanimation(i + 1),
                onEnterBack: () => showanimation(i + 1),
                markers: false,
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);


    // useEffect(() => {
    //     const bird = birdRef.current
    //     const leftStep = leftRefs.current[activeStep] // or wherever you want it to fly from

    //     if (!bird || !leftStep) return

    //     const rect = leftStep.getBoundingClientRect()

    //     gsap.to(bird, {
    //         x: rect.left + rect.width / 3 - window.innerWidth / 4,
    //         y: rect.top - window.innerHeight / 1.15,
    //         opacity: 1,
    //         duration: 1.2,
    //         ease: "power2.out",
    //     })
    // }, [activeStep])


    const getMaskPosition = (step: number) => {
    switch (step) {
         case 0:
            return { x: 0, y: 0 };
        case 1:
            return { x: 0, y: 0 };   // Modify these for perfect placement
        case 2:
            return { x: 0, y: 80 };
        case 3:
            return { x: 0, y: 160 };
        case 4:
            return { x: 0, y: 250 };
        case 5:
            return { x: 0, y: 330 };
        case 6:
            return { x: 20, y: 410 };
        case 7:
            return { x: 50, y: 480 };
        default:
            return { x: 0, y: 0 };
    }
};

    useEffect(() => {
    const bird = birdRef.current;
   
    if (!bird ) return;

    const { x, y } = getMaskPosition(activeStep);




    gsap.to(bird, {
        x: x,
        y: y,
        duration: 1.2,
        ease: "power3.out",
        opacity: 1
    });
}, [activeStep]);





    return (
        <div className="w-full h-full flex">

            {/* left section */}
            <div ref={leftRef_container} className="w-1/3 h-screen flex flex-col gap-3 p-10 relative">
                {steps.map((step, i) => (
                    <div
                        ref={el => { leftRefs.current[i] = el; }}
                        key={i}
                        className={`${step.width} p-4 text-md uppercase font-medium ${activeStep === step.id ? 'bg-[#087f9b]' : 'bg-gray-300'} text-white  justify-between rounded-lg border-b-2 border-gray-100  relative flex items-center gap-2`}
                    >
                        {step.title}

                        {/* <img ref={birdRef} src='/bird-fly.gif' alt="arrow" className={`${activeStep === step.id ? 'inline-block opacity-0' : 'opacity-0'} h-18    absolute bottom-0 -right-5`}  /> */}
                       

                        <div className="absolute top-[25%] -left-13 z-10  w-10 h-10 bg-[#087f9b] rounded-full shadow-md flex items-center justify-center text-lg font-bold text-grey-600">
                            {step.id}
                        </div>
                    </div>
                ))}

                 <img
                            ref={birdRef}
                            src="/bird-fly.gif"
                            alt="bird"
                            className="absolute w-20 h-20 z-50 pointer-events-none opacity-0"
                            style={{
                                right:50,
                                top: 50,
                                transform: "translate(0,0)",
                            }}
                        />

            </div>



            {/* right section */}
            <div className="w-2/3 h-full p-10 overflow-y-auto scroll-smooth">
                {steps.map((step, i) => (
                    <div ref={el => { contentRefs.current[i] = el; }} key={i} className="min-h-screen flex items-center right-scroll">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="flex items-center gap-4 mb-6">

                                <h2 className="text-4xl font-bold text-gray-800">
                                    {step.title}
                                </h2>
                            </div>
                            <span className="text-xl text-gray-600 leading-relaxed">
                                {step.content}
                            </span>
                            <div className="mt-8 flex items-center gap-3 text-gray-400">

                                <span className="text-sm">Step {step.id} of {steps.length}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={last_item_ref} className=''></div>

            </div>

        </div>
    )
}

export default Stepbystep
