
'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


interface StorySection {
    id: string;
    title: string;

    content: string | React.ReactNode;
    imageUrl?: string;
}

const storySections: StorySection[] = [
    {
        id: '1',
        title: 'Improved Quality of Water ',

        content: (

            <div>

                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Water tests showed higher dissolved oxygen levels. </li>
                    <li>Invasive water hyacinth disappeared.</li>
                    <li>Native aquatic plants recovered. </li>
                    <li>Water surface became clear and free. </li>
                    <li>Algal blooms reduced considerably. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap1.png'
    },
    {
        id: '2',
        title: 'Walking pathways along the lake ',

        content: (
            <div>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Uncemented pathways allow visitors to connect closely with the landscape. </li>
                    <li>Repurposed rocks along the pathway serve as canvases showcasing the lake’s biodiversity.</li>
                    <li>Artworks, retaining the natural texture of the rocks, help people anticipate what they might encounter at the lake. </li>
                    <li>Wood from lantana and trimmed Pongamia trees form mounds for the butterfly garden. </li>
                    <li>Repurposed tyres, debris and lantana serve as seats.</li>

                </ul>




            </div>
        ),


        imageUrl: '/plusmap2.png'
    },
    {
        id: '3',
        title: 'Introduction of native species',



        content: (

            <div>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Native fish species are once again part of the lake, thanks to the local fisherfolk. </li>
                    <li>Native plant species, prioritised for all vegetation efforts, thrive under people’s care.</li>
                    <li>Orchids that were carefully planted on trees bloom seasonally.</li>
                   

                </ul>


            </div>
        ),


        imageUrl: '/plusmap3.png'
    },
    {
        id: '4',
        title: ' Pollinators Thrive',



        content: (

            <div>

                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Carefully curated butterfly host and nectar plants, along with bee-friendly species, welcome diverse wildlife visitors.</li>
                    <li>Bee hotels provide ample nesting spaces for solitary bees. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap4.png'
    },
    {
        id: '5',
        title: 'Biodiversity  Improves',


        content: (

            <div>
                  <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Bird species, like cormorants, Oriental darters, stilts, ducks and even pelicans, throng to the lake in healthy numbers.</li>
                    <li>The floating islands are occasionally used by the resident water birds for nesting.  </li>
                    <li>The crowning moment, however, has been the return of the Pied kingfisher, which had vanished during the lake’s polluted years. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap5.png'
    },
    {
        id: '6',
        title: 'Community Stewardship',


        content: (

            <div>
                  <ul className="list-disc px-4  mb-4 space-y-2">
                    <li>Sustained community-driven efforts transformed Venkateshpura Lake from a neglected waterbody into a vibrant socio-ecological space.</li>
                    <li>The lake attracts a lot of footfall and active daily use by residents. </li>
                    <li>The Lake Forum is well-informed about potential pollution sources and knows whom to alert during issues like algal blooms.</li>
                    <li>Members regularly document and share photos of birds, sunrises and sunsets, building pride and a sense of connection. </li>
                    <li>They participate in education programmes and attend stakeholder meetings, ensuring that citizen voices remain central to lake management.  </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap6.png'
    }
];

export default function Trandformation() {

    const left_img_ref = useRef<HTMLDivElement>(null);
    const end_ref = useRef<HTMLDivElement>(null);
    const [openId, setOpenId] = useState<string | null>('0');
    const element = left_img_ref.current;

    // useEffect(() => {

    //     const end_element = end_ref.current;
    //     if (!element) return;
    //     ScrollTrigger.create({
    //         trigger: element,
    //         pin: element,
    //         start: 'top 30%',
    //         endTrigger: end_element,
    //         end: 'top 90%',
    //         scrub: false,
    //         markers: true,
    //     });
    // }, []);








    const [imageLoaded, setImageLoaded] = useState('/plusmap0.png');

    const toggleSection = (id: string, isOpen: boolean) => {
        setOpenId(openId === id ? null : id);

        if (isOpen) {
            setImageLoaded('/plusmap0.png');
            return;
        }

        setImageLoaded(storySections[parseInt(id) - 1].imageUrl || '/plusmap0.png');
    };

    return (
        <div className='flex gap-10 mt-10'>
            <div ref={left_img_ref}>
                <img
                    src={imageLoaded}

                    className="object-conatin h-[700px] w-[780px] px-10"


                >

                </img>
            </div>

            <div>

                <div className="">

                    <div className="   px-4">
                        <div className="w-2xl mx-auto mt-10 ">


                            {/* Accordion */}
                            <div className="space-y-4  ">
                                <p className="text-slate-400 text-sm">
                                    Click on each section to expand and explore the story
                                </p>
                                {storySections.map((section, index) => {
                                    const isOpen = openId === section.id;

                                    return (
                                        <div
                                            key={section.id}
                                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full "
                                        >
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => toggleSection(section.id, isOpen)}
                                                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-[#087f9b] text-white flex items-center justify-center font-bold text-lg">
                                                        {index + 1}
                                                    </div>
                                                    <div className="text-left">
                                                        <h2 className="text-xl font-bold text-slate-800">
                                                            {section.title}
                                                        </h2>
                                                        <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                                                            <span className="flex items-center gap-1">


                                                            </span>
                                                            <span className="flex items-center gap-1">


                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </button>

                                            {/* Accordion Content */}
                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? ' opacity-100' : 'h-0  hidden opacity-0'
                                                    }`}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className="px-6 py-2 pb-6">                                                

                                                    <span className="text-slate-700 leading-relaxed">
                                                        {section.content}
                                                    </span>


                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Footer */}
                            <div className="text-center mt-2 pb-8">

                            </div>
                        </div>
                    </div>
                    {/* <div ref={end_ref} className="text-center border-2">end </div> */}
                </div>
            </div>


        </div>
    );
}
