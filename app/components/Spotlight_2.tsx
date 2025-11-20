'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);



const SpotLight2 = () => {
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

    const [currentspot, setcurrentspot] = useState("none")

    const biodiveristy = useRef<HTMLDivElement>(null);
    const migrant = useRef<HTMLDivElement>(null);
    const pastorials = useRef<HTMLDivElement>(null);
    const fisher = useRef<HTMLDivElement>(null);
    const residents = useRef<HTMLDivElement>(null);
    const researcher = useRef<HTMLDivElement>(null);
    const gov = useRef<HTMLDivElement>(null);

    const images = ['biodiveristy','fisher', 'residents', 'researcher', 'gov', 'pastorials', 'migrant'];

    const [brightness, setbrightness] = useState('brightness-100')


    const getMaskPosition = (spot: string) => {
        switch (spot) {
            case "biodiveristy":
                return { x: "15%", y: "30%" };
            case "migrant":
                return { x: "8%", y: "50%" };
            case "pastorials":
                return { x: "18%", y: "75%" };
            case "fisher":
                return { x: "30%", y: "40%" };
            case "residents":
                return { x: "43%", y: "32%" };
            case "researcher":
                return { x: "42%", y: "55%" };
            case "gov":
                return { x: "34%", y: "95%" };
            default:
                
                return { x: "-15%", y: "100%" };
        }
    };
    const pos = getMaskPosition(currentspot);


    useEffect(() => {
        console.log(currentspot)
        if(pos.y==='100'){
           setcurrentspot("none")
        }

    }, [currentspot])


    useEffect(() => {
        const boxes = [box0Ref.current, box1Ref.current, box2Ref.current, box3Ref.current, box4Ref.current, box5Ref.current, box6Ref.current];
        const img = imgRef.current;
        const img2 = imgRef2.current;
        const overlay = img_overlay.current;
        const boxend = boxendRef.current;



        if (!img) return;

        // Fade-in effect for boxes
        boxes.forEach((box, index) => {
            if (!box) return;
            gsap.from(box, {
                // opacity: 0,
                // y: 50,
                // duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: box,
                    start: 'top 25%',
                    toggleActions: 'play none none reverse',
                    onEnter: () => setcurrentspot(images[index]),
                    onEnterBack: () => setcurrentspot(images[index]),
                    onLeave: () => setcurrentspot(images[index + 1]),
                    onLeaveBack: () => setcurrentspot(images[index - 1]),
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
             onLeave: () => setcurrentspot("none"),
            onLeaveBack: () => setcurrentspot("none"),
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






    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-start  justify-start ">




            {/* Dimmed base image */}
            <div ref={imgRef2} className="absolute top-0 left-0 w-full h-[700px] flex items-center justify-start z-0 ">
                <img
                    src="stakeholders.png"
                    alt="dimmed"
                    className={`object-contain w-[60%] h-full ${brightness} ${currentspot==='none'?'':'opacity-40'}   pl-20`}
                />
            </div>


            {/* Masked spotlight image */}





            <div ref={imgRef}
                className={`absolute top-0 left-0 w-full h-[700px]  items-center justify-start z-10 ${currentspot === images[0] ? "flex" : "flex"}`}

                style={{
                    ['--maskX' as string]: pos.x,
                    ['--maskY' as string]: pos.y,
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
                    src="stakeholders.png"
                    alt="spotlight"
                    className={`object-contain w-[60%] h-full brightness-100 pl-20 ${pos.y === '100' ? 'hidden' : ''} `}
                />





            </div>

















            {/* overlay */}
            {/* <div  className="  top-100 left-0 w-full h-full z-80 opacity-30 pointer-events-none absolute border-2 ">
                 <h1>{currentspot}</h1>
            </div> */}




            {/* Content boxes */}
            <div className="relative z-20 flex flex-col gap-20 pt-40 items-end px-20 w-full ">
                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200  ">
                    <div ref={box0Ref}>
                        <Image
                            alt="img1"
                            src="/biodiversity_1.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <h1 className="text-lg font-semibold mt-3">Biodiversity</h1>
                    <p className="">Venkateshpura Lake – stagnant and overrun by invasives and waste, still supported life. Grey-headed swamphens, Eurasian coots and Black-winged stilts went about their business as usual, while a few cormorants lingered. Introduced fish survived though native ones had vanished. Rock agamas basked, geckos slipped through crevices, butterflies flitted and keelbacks rippled the water. The lake’s flora was dominated by invasives.</p>
                </div>



                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box1Ref}>
                        <Image
                            alt="img1"
                            src="/fisher_1.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Fisher folk</h1>
                    <p>Venkateshpura Lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fishes, such as Rohu and Catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fisherman’s fragile livelihood.
                    </p>
                </div>



                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box2Ref}>
                        <Image
                            alt="img1"
                            src="/residents.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Residents</h1>
                    <p>For residents, the small lake with its green grass, trees and rocky outcrops was an oasis amid the bustling city. – for the residents living around the lake, this was an idyllic setting within Bengaluru city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. The final straw was when illegal burning consumed a tree to clear for development.</p>
                </div>



                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box3Ref}>
                        <Image
                            alt="img1"
                            src="/researcher.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Researchers</h1>
                    <p>The researchers became stakeholders when residents sought their help to save Venkateshpura Lake. Stepping in as allies, they brought scientific expertise to revive the dying lake. They were here to catalyse the community’s vision for the lake.</p>

                </div>




                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box4Ref}>
                        <Image
                            alt="img1"
                            src="/place.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Government</h1>

                    <div className='w-full flex flex-col gap-5'>
                        <p>Venkateshpura Lake came under the management of Greater Bengaluru Authority in 2016. It faced several challenges like encroachments, quarrying, illegal dumping and algal bloom. Local conservation efforts to restore it, however, generated enough data and momentum that prompted government action. Krishna Byre Gowda, the local MLA and now the State Revenue Minister, publicly aligned himself with the restoration initiative. This move was crucial in galvanising all-rounded support for the lake’s revival.</p>


                    </div>

                </div>



                 <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box5Ref}>
                        <Image
                            alt="img1"
                            src="/pastorial_1.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Pastoralists</h1>
                    <span>The grassland flanking Venkateshpura Lake had been the grazing grounds, known locally as <i>gomala</i>, had long served as a grazing ground for livestock. It was among the last remaining patches in the neighbourhood with easy access to grass and water. Pastoralists who brought their livestock here not only sustained their livelihoods but supplied milk to the surrounding city.</span>
                </div>






                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200  ">
                    <div ref={box6Ref}>
                        <Image
                            alt="img1"
                            src="/migrant.jpg"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Migrants</h1>
                    <p>Venkateshpura Lake, open and unfenced, served everyone, including migrants in that part of Bengaluru city, who otherwise had to scout around for water to wash their clothes and vessels. Little children were always up for a quick dip, especially with plenty of rocks serving as diving boards.</p>
                </div>




               













                {/* end box */}
                <div ref={boxendRef} className=" p-4 w-[500px] rounded-xl opacity-90 "></div>
            </div>

        </div>

    );
};

export default SpotLight2;
