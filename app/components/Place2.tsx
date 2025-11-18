'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);



const Place2 = () => {
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

    const images = ['biodiveristy', 'migrant', 'pastorials', 'fisher', 'residents', 'researcher', 'gov'];

    const [brightness, setbrightness]=useState('brightness-100')


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
                return { x: "35%", y: "80%" };
            default:
                return { x: "5%", y: "100%" }; 
        }
    };
    const pos = getMaskPosition(currentspot);


    useEffect(() => {
        console.log(currentspot)

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
        // gsap.to(img, {
        //     '--maskX': '15%',
        //     '--maskY': `30%`,
        //     duration: 0.1,
        //     scrollTrigger: {
        //         trigger: boxes[0],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,


        //         markers: false
        //     },
        // });

        // //migrant
        // gsap.to(img, {
        //     '--maskX': '8%',
        //     '--maskY': `50%`,
        //     scrollTrigger: {
        //         trigger: boxes[1],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,

        //         markers: false
        //     },
        // });

        // //pastorials
        // gsap.to(img, {
        //     '--maskX': '18%',
        //     '--maskY': `70%`,
        //     scrollTrigger: {
        //         trigger: boxes[2],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,

        //         markers: false
        //     },
        // });

        // //fisher
        // gsap.to(img, {
        //     '--maskX': '30%',
        //     '--maskY': `40%`,
        //     scrollTrigger: {
        //         trigger: boxes[3],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,

        //         markers: false
        //     },
        // });

        // //residence
        // gsap.to(img, {
        //     '--maskX': '44%',
        //     '--maskY': `30%`,
        //     scrollTrigger: {
        //         trigger: boxes[4],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,

        //         markers: false
        //     },
        // });

        // //researchers
        // gsap.to(img, {
        //     '--maskX': '42%',
        //     '--maskY': `60%`,
        //     scrollTrigger: {
        //         trigger: boxes[5],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,

        //         markers: false
        //     },
        // });

        // //governemnt
        // gsap.to(img, {
        //     '--maskX': '34%',
        //     '--maskY': `90%`,
        //     scrollTrigger: {
        //         trigger: boxes[6],
        //         start: 'top 60%',
        //         end: 'center 60%',
        //         scrub: true,
        //         markers: false
        //     },
        // });





    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-start  justify-start ">
             
            


            {/* Dimmed base image */}
            <div ref={imgRef} className="absolute top-0 left-0 w-full h-[700px] flex items-center justify-start z-0 ">
                <img
                    src="/svg/Place_map.svg"
                    alt="dimmed"
                    className={`object-contain w-[65%] h-full   pl-20 `}
                />
            </div>


            {/* Masked spotlight image */}





            {/* <div ref={imgRef}
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
                    className={`object-contain w-[60%] h-full brightness-100 pl-20 ${pos.y==='100'?'hidden':''} `}
                />





            </div> */}

















            {/* overlay */}
            {/* <div  className="  top-100 left-0 w-full h-full z-80 opacity-30 pointer-events-none absolute border-2 ">
                 <h1>{currentspot}</h1>
            </div> */}




            {/* Content boxes */}
            <div className="relative z-20 flex flex-col gap-20 pt-40 items-end px-20 w-full ">
                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-0 border-gray-200 shadow-2xl ">
                    <div ref={box0Ref}>
                        <Image
                            alt="img1"
                            src="/lake_sky.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <h1 className="text-lg font-semibold mt-3"></h1>
                        <p>Venkateshpura Lake is a relatively small lake, extending a little over 10 acres. It is managed by the Bruhat Bangalore Mahanagara Palike (BBMP), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is sometimes more familiar to the locals as Sampigehalli Lake, its old name</p>
                </div>

                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-0 border-gray-200 shadow-2xl ">
                    <div ref={box1Ref}>
                        <Image
                            alt="img1"
                            src="/place_1.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3"></h1>
                    <p>The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment area that leads to Hebbala Nagara Valley, one of the five valleys of Bangalore. Being at the apex of a series of lakes, its outlet joins Rachenahalli Lake on the downstream.</p>
                </div>

                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-0 border-gray-200 shadow-2xl">
                    <div ref={box2Ref}>
                        <Image
                            alt="img1"
                            src="/place__3.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3"></h1>
                         <p>There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. Most of the rock faces that covered the lake are gone. Only the rocky projection bearing the nineteenth-century Sampigehalli Auxiliary Tower Station stands to tell a story. Adjacent to the waterbody is the Jarabandemma Temple, built on a rock, which holds unique significance due to the distinct rituals observed there even today. The lake stands in the neighbourhood, amid towering buildings, as a testament to the struggle put up by many of the residents who live around it.</p>
                </div>
{/* 
                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box3Ref}>
                        <Image
                            alt="img1"
                            src="/place.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Fisher folk</h1>
                    <p>Venkateshpura Lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fishes, such as Rohu and Catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fisherman’s fragile livelihood.
</p>
                </div> */}

                {/* <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box4Ref}>
                        <Image
                            alt="img1"
                            src="/place.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Residents</h1>
                    <p>For residents, the small lake with its green grass, trees and rocky outcrops was an oasis amid the bustling city. – for the residents living around the lake, this was an idyllic setting within Bengaluru city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. The final straw was when illegal burning consumed a tree to clear for development.</p>
                </div>

                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box5Ref}>
                        <Image
                            alt="img1"
                            src="/place.png"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3">Researchers</h1>
                    <p>The researchers became stakeholders when residents sought their help to save Venkateshpura Lake. Stepping in as allies, they brought scientific expertise to revive the dying lake. They were here to catalyse the community’s vision for the lake.</p>

                </div>

                <div className="bg-white p-4 w-[500px] rounded-xl opacity-90 border-2 border-gray-200 ">
                    <div ref={box6Ref}>
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


                </div> */}
                {/* end box */}
                <div ref={boxendRef} className=" p-4 w-[500px] rounded-xl opacity-90 "></div>
            </div>

        </div>

    );
};

export default Place2;
