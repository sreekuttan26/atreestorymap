'use client';
import React, { useRef, useEffect, useState } from 'react';
import Bodytext from './Bodytext';
import VideoPlayer from './VideoPlayer';

interface Step {
    id: number;
    title: string;
    content: React.ReactNode;
}

const Restoration = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps: Step[] = [
        {
            id: 1,
            title: 'Assessing water quality and biodiversity',
            content: (
                <span>
                    <h1 className="color-b text-lg font-bold mt-10">Assessing water quality</h1>
                    <div className="flex items-center justify-center my-6">
                         <iframe
                        className="w-[500px] h-[350px] rounded-xl"
                        src="https://www.youtube.com/embed/QGAwMq_VobI?mute=1&controls=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                   
                    <Bodytext
                        text={
                            <p>
                                The first step was assessing water quality using two simple yet effective methods: Secchi Depth and Dissolved Oxygen. Water samples were collected from seven lake points, and sediment samples from two sites. Indicators such as water clarity, dissolved oxygen and shoreline vegetation helped to formulate further steps in restoration.
                            </p>
                        }
                    />

                    <h1 className="color-b text-lg font-bold mt-20">Biodiversity</h1>

                    <div className="flex items-center justify-center my-6">
                         <video
                        src="https://resourcespace.atree.org/pages/download.php?ref=150&size=pre&ext=mp4&page=1&alternative=-1&watermarked=&k=63ce0f2d98&noattach=true&v=1763372426"
                        className="w-[450px] h-[450px]  rounded-xl object-contain"

                        muted
                        playsInline
                        controls
                    // optional custom thumbnail
                    />
                    </div>






                   
                    <Bodytext
                        text={
                            <p>
                                To understand the ecological state of the area, baseline surveys were essential. Systematic assessments of butterflies, fishes, reptiles, birds, amphibians, bees and vegetation yielded valuable data and helped chart a roadmap for conserving the lake.
                            </p>
                        }
                    />

                    <Bodytext
                        text={
                            <span>
                                <b>Biophobia to Biophilia:</b>   Systematic walks helped residents to familiarise themselves with the lake’s biodiversity. Herp walks, insect walks, bat walks – timed to when these species are most active – introduced participants to often-overlooked wildlife, helping them shed long-held fears and aversions (biphobia) and develop a genuine appreciation (biophilia) for these lesser charismatic species.

                            </span>
                        }
                    />
                </span>
            )
        },
        {
            id: 2,
            title: 'Identifying key issues to be tackled',
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
            )
        },
        {
            id: 3,
            title: 'Interventions',
            content: (
                <span>
                    <h1 className="color-b text-lg font-bold mt-10">Installing NBS</h1>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Bodytext
                        text={
                            <span>
                                Aerators were installed as they work by circulating water and increasing dissolved oxygen, thus helping prevent nutrient build-up and algal blooms and creating a healthy habitat for fish and other organisms.

                            </span>
                        }
                    />
                    <Bodytext
                        text={
                            <span>
                                Six floating islands were installed, with native vegetation like Cyperus, Typha and Centella Asiatica to help filter contaminants while also creating nesting spaces for birds and insects.

                            </span>
                        }
                    />
                    <Bodytext
                        text={
                            <span>
                                Shoreline rehabilitation included removing water hyacinth and weeds along the shore, planting native species to facilitate soil stability and support biodiversity. The trails were designed to mimic the dry Deccan gardens with grasses that Bangalore historically had.

                            </span>
                        }
                    />

                </span>
            )
        },
        {
            id: 4,
            title: 'Lake clean-up',
            content: (
                <span>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Bodytext text={<p>The community pitched in to remove plastic, discarded clothes and other accumulated waste.</p>} />
                    <Bodytext text={<p>Removing invasives from land and water: Lantana and Parthenium were extracted from the area surrounding the lake. Water hyacinth was removed from the lake.</p>} />

                </span>
            )
        },
        {
            id: 5,
            title: 'Rewilding with a mix of natives',
            content: (
                <span>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Bodytext text={<p>Rewilding with a mix of native  and pollinator friendly species
                        Butterfly trail: Two butterfly mounds were created with host plants for caterpillars and nectar plants for adult butterflies. A pocket guide to the butterflies of Venkateshpura Lake was also developed to help visitors identify and appreciate the butterflies
                    </p>} />

                    <h1 className="color-b text-lg font-bold mt-20">Bee hotel</h1>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video"
                        allowFullScreen
                    />
                    <Bodytext text={<p>A “bee hotel” made of dead wood, bamboo, twigs and other natural materials was designed to attract solitary bees – vital pollinators that nest in cavities, live independently and are non-aggressive, providing them safe breeding spaces.</p>} />
                    <Bodytext text={<p>Around 200 aromatic plants were introduced to support wildlife and offer visitors a sensory-rich experience.</p>} />

                    <h1 className="color-b text-lg font-bold mt-20">Pathway</h1>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video"
                        allowFullScreen
                    />
                    <Bodytext text={<p>Uncemented walking trails were used in place of conventional paved paths, encouraging slower, mindful walking while allowing vegetation that supports biodiversity to flourish along the route.</p>} />


                    
                    {/* <h1 className="color-b text-lg font-bold mt-20">Creatures on canvas</h1>

                    <div className="flex gap-4 items-center justify-center  ">


                        <video
                            src="https://www.atree.org/wp-content/uploads/2025/11/creatures-on-canvas.mp4"
                            className="w-full h-[850px] rounded-xl object-contain"

                            muted
                            playsInline
                            controls
                       
                        />

                        <Bodytext text={<p className='items-center justify-center '>Construction waste was repurposed as canvases to showcase the lake’s biodiversity.</p>} />
                    </div> */}


                </span>
            )
        },
        {
            id: 6,
            title: 'Formation of lake trust',
            content: (
                <span>
                    <Bodytext text={
                        <p>Residents living around Venkateshpura Lake worked hard to restore the lake, prompting action from the civic body. When rejuvenation efforts slowed, they shifted focus to protecting the GTS Tower from encroachments, organising rallies and collective actions. To strengthen their work, they formed a trust, Chokkanahalli Sampigehalli Abhivriddhi Forum (CSAF), a move that brought significant media attention.</p>
                        } />
                    <h1 className="color-b text-lg font-bold mt-20">A place-based education manual</h1>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video player"
                        allowFullScreen
                    />
                    <Bodytext text={<p>Besides a pocket guide on the butterfly species of Venkateshpura Lake, a place-based manual, focusing on the flora and fauna of the lake, was developed for engagement with schools. Several school walks were held at the lake even while the restoration work was on. Schoolchildren were introduced to the concept of a wetland and its importance through games and other activities.</p>} />
                </span>
            )
        },
        {
            id: 7,
            title: 'Participatory water quality monitoring manual for residents',
            content: (
                <span>
                    <Bodytext text={<p>Films showing simple ways of measuring water quality, such as Secchi depth and Dissolved Oxygen tests, were made freely available. By participating in all restoration activities, including water quality monitoring, residents became equipped and confident to take ownership of these responsibilities.</p>} />


                    <h1 className="color-b text-lg font-bold mt-20">Towards a self sustaining socio-ecological restoration model</h1>
                    <iframe
                        className="w-full h-[450px] rounded-xl"
                        src="https://www.youtube.com/embed/csqNOGBXi1o?mute=1&controls=1"
                        title="YouTube video player"
                        allowFullScreen
                    />
                    <Bodytext text={<p>At Venkateshpura Lake, a self-sustaining socio-ecological restoration model began taking shape as residents steadily built their capacity to steward the ecosystem. Through their lake trust, they took ownership of the emerging challenges, thus laying the foundation for a long-term, community-driven model of lake restoration.</p>} />




                </span>
            )
        }
    ];

    // Track active step using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        stepRefs.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Smoothly track ray height based on scroll
    useEffect(() => {
        const handleScroll = () => {
            const containerTop = containerRef.current?.getBoundingClientRect().top ?? 0;
            const containerHeight = containerRef.current?.offsetHeight ?? 1;

            const lastStep = stepRefs.current[stepRefs.current.length - 1];
            if (!lastStep) return;

            const lastStepBottom = lastStep.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            const totalScrollable = lastStepBottom - containerTop - windowHeight;
            const scrolled = window.scrollY - (containerRef.current?.offsetTop ?? 0);

            const ratio = Math.min(1, Math.max(0, scrolled / totalScrollable));
            setProgress(ratio);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initialise
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex gap-12 px-20 py-20"
        >
            {/* Light Ray Track */}
            <div className="relative">
                <div className="w-[4px] bg-gray-300 rounded-full h-full opacity-30"></div>
                <div
                    className="absolute top-0 left-0 w-[4px] bg-[#09afd4] rounded-full transition-all duration-200"
                    style={{ height: `${progress * 100}%` }}
                ></div>
            </div>

            {/* Timeline Items */}
            <div className="flex-1 flex flex-col gap-40">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        data-index={index}
                        ref={el => { stepRefs.current[index] = el; }}
                        className="p-8 rounded-xl bg-white shadow-md border-2 border-[#087f9b] relative"
                    >
                        <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
                        <div className="text-gray-700 leading-relaxed">{step.content}</div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#087f9b] w-12 h-12 flex items-center justify-center text-lg font-bold text-white rounded-full">
                            {step.id}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restoration;
