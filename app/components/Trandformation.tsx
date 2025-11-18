

import React, { useState } from 'react';


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

                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong>Higher dissolved oxygen levels.</strong> </li>
                    <li><strong>Absence of invasive water hyacinth.</strong></li>
                    <li><strong>Noticeably reduced algal blooms.</strong> </li>

                </ul>

            </div>
        ),


        imageUrl: 'https://thumbs.dreamstime.com/b/lake-water-india-good-soul-253792778.jpg'
    },
    {
        id: '2',
        title: 'Walking pathways along the lake ',

        content: (
            <div>
                <div>
                    <span className='color-b'><b>Construction waste to biodiversity panels :</b> </span>

                    <p>Construction waste was repurposed along the pathway to serve as canvases to showcase the lake’s biodiversity. The artworks, created without base colours or primers, retain the natural texture of the rocks, blending seamlessly with the landscape. The rock paintings act as inviting entry points, helping people discover the lake’s biodiversity and anticipate what they might encounter.</p>
                </div>

                <div className='mt-5'>
                    <span className='color-b'><b>Invasives repurposed as seating :</b> </span>

                    <p>Wood from lantana and trimmed Pongamia trees formed mounds for butterfly garden, while tyres, debris and lantana were repurposed for seating. Climbers encouraged to weave over the lantana seats have since flourished, giving the seats a natural earthy look that blends with the landscape.</p>
                </div>




            </div>
        ),


        imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
    },
    {
        id: '3',
        title: 'Introduction of native species',



        content: (

            <div>
                <p className="">
                    Native fish species were reintroduced into the lake by the local fisherfolk. Native species were favoured for vegetation too. Butterfly host and nectar plants along with bee-friendly species were carefully curated, while bee hotels were installed to provide ample nesting spaces for solitary bees, enriching the lake’s ecological diversity. Residents joined hands with the researchers in planting these plant species.
                </p>
                <p className="mt-5">
                    Orchids that were carefully planted on trees have thrived and they now bloom seasonally.
                </p>


            </div>
        ),


        imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
    },
    {
        id: '4',
        title: ' Pollinators Thrive',



        content: (

            <div>

                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong>Bees occupy the the bee hotel</strong> </li>
                    <li><strong>Butterflies flit in the butterfly garden.</strong> </li>

                </ul>

            </div>
        ),


        imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
    },
    {
        id: '5',
        title: 'Biodiversity  Improves',


        content: (

            <div>
                <p className="">
                    Bird species, such as cormorants, Oriental darters, stilts, ducks and even pelicans, throng to the lake in healthy numbers, signalling a marked improvement in water quality. The floating islands are occasionally used by the resident water birds for nesting. The crowning moment, however, was the return of the Pied kingfisher, which had vanished during the lake’s polluted years.

                </p>


            </div>
        ),


        imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
    },
    {
        id: '6',
        title: 'Community Stewardship',


        content: (

            <div>
                <p className="">
                    Sustained efforts from all involved groups of people to restore Venkateshpura Lake paid off.  The lake transformed from a neglected waterbody into a vibrant socio-ecological space, shaped and informed by the community. The lake now sees a lot of footfallThe Lake Forum is now well-informed about potential pollution sources and knows whom to alert when issues such as algal blooms rise. Members actively document and share photographs of birds, sunrises and sunsets, fostering a sense of pride, attachment and shared responsibility for the lake. They also participate in education programmes and attend stakeholder meetings whenever they are organized, ensuring that citizen voices remain part of the lake’s management dialogue.

                </p>


            </div>
        ),


        imageUrl: '/plusmap.png'
    }
];

export default function Trandformation() {
    const [openId, setOpenId] = useState<string | null>('1');

    const[imageLoaded, setImageLoaded] = useState('/plusmap.png');

    const toggleSection = (id: string) => {
        setOpenId(openId === id ? null : id);

        setImageLoaded(storySections[parseInt(id)-1].imageUrl || '/plusmap.png');
    };

    return (
        <div className='flex gap-10 mt-10'>
            <img
                src={imageLoaded}

                className="object-conatin h-[700px] w-[780px] px-10"


            >

            </img>
            <div>

                <div className="">

                    <div className="   px-4">
                        <div className="max-w-4xl mx-auto mt-10 w-full">


                            {/* Accordion */}
                            <div className="space-y-4  ">
                                {storySections.map((section, index) => {
                                    const isOpen = openId === section.id;

                                    return (
                                        <div
                                            key={section.id}
                                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full "
                                        >
                                            {/* Accordion Header */}
                                            <button
                                                onClick={() => toggleSection(section.id)}
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
                                                <div className="p-6">
                                                    {/* {section.imageUrl && (
                                            <img
                                                src={section.imageUrl}
                                                alt={section.title}
                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                            />
                                        )} */}

                                                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">


                                                    </div>

                                                    <span className="text-slate-700 leading-relaxed">
                                                        {section.content}
                                                    </span>

                                                    {/* <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Explore on Map
                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Footer */}
                            <div className="text-center mt-12 pb-8">
                                <p className="text-slate-400 text-sm">
                                    Click on each section to expand and explore the story
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
