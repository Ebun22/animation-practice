import React, { useEffect, useRef, useState } from 'react'
import img16 from '../assets/img1 (16).jpg'
import img10 from '../assets/img1 (10).jpg'
import img11 from '../assets/img1 (11).jpg'
import img12 from '../assets/img1 (12).jpg'
import img13 from '../assets/img1 (13).jpg'
import img14 from '../assets/img1 (14).jpg'
import img1 from '../assets/img1 (1).jpg'
import img2 from '../assets/img1 (2).jpg'
import img3 from '../assets/img1 (3).jpg'
import img4 from '../assets/img1 (4).jpg'
import img5 from '../assets/img1 (5).jpg'
import img6 from '../assets/img1 (6).jpg'
import img7 from '../assets/img1 (7).jpg'
import img8 from '../assets/img1 (8).jpg'
import img9 from '../assets/img1 (9).jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    const marquee = useRef(null);

    const mainContainer = useRef(null)

    const cursor = useRef(null)

    //Cursor animation
    const cursorAnimation = () => {
        let mouseX = 0;
        let mouseY = 0;
        gsap.to({}, {
            duration: 0.0034,
            repeat: -1,
            onRepeat: function () {
                gsap.set(cursor.current, {
                    css: {
                        left: mouseX,
                        top: mouseY,

                    }
                })
            }
        })

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX,
                mouseY = e.clientY
        })
    }

    const wordAnimation = (texts) => {
        texts.forEach((item, index) => {
            const chars = item.textContent.split('');
            item.innerHTML = ''; // Clear the original content

            // Wrap each character in a span
            chars.forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char;
                item.appendChild(span);
            });

            let reverse = false;
            if (index % 2 != 0) {
                reverse = true
            } else { reverse = false };
            const staggerOptions = {
                each: 0.25,
                from: reverse ? "start" : "end",
                ease: "linear",
            }
            console.log(reverse)

            gsap.fromTo(item.querySelectorAll('span'),
                {
                    fontWeight: 100
                },
                {
                    fontWeight: 900,
                    stagger: staggerOptions,
                    scrollTrigger: {
                        trigger: marquee.current,
                        start: "30% bottom",
                        end: "top top",
                        scrub: 1,
                        // markers: {
                        //     startColor: "red",
                        //     endColor: 'green'
                        // }
                    }
                }
            )
        })
    }



    const marqueeAnimation = (marqueeList) => {
        marqueeList.forEach((container, index) => {
            let start = '0%'
            let end = '15%'
            if (index % 2 != 0) {
                start = '0%'
                end = '-20%'
            } else {
                start = '0%'
                end = '15%'
            }
            gsap.fromTo(container,
                {
                    x: start
                }, {
                x: end,
                scrollTrigger: {
                    trigger: marquee.current,
                    start: "top 70%",
                    end: "150% top",
                    scrub: 1,
                    // markers: {
                    //     startColor: "purple",
                    //     endColor: 'blue'
                    // }
                },
                ease: "power3.inOut"
            }
            )
        })
    }


    useEffect(() => {

        const about = mainContainer.current?.children[2]
        const services = mainContainer.current?.children[4]

        const marqueeList = Array.from(marquee.current?.children);
        marqueeAnimation(marqueeList)


        const texts = marquee.current?.getElementsByTagName('h1');
        let arrayTexts = Array.from(texts)
        wordAnimation(arrayTexts)

        cursorAnimation()

        if (about) {
            const mouseAnimation = () => {
                [about?.firstElementChild, services?.firstElementChild].forEach(item => {
                    item.addEventListener("mousemove", () => {
                        console.log("hovered on about");
                        ["scale-[2]", "mix-blend-difference", "transition-all"].forEach((item) => {
                            cursor.current?.classList.add(item);
                        });
                    })
                    item.addEventListener("mouseleave", () => {
                        ["scale-[2]", "mix-blend-difference", "transition-all"].forEach((item) => {
                            cursor.current?.classList.remove(item);
                        })
                    })
                }
                )
            }
            mouseAnimation()
        }

    }, []);

    return (
        <div ref={mainContainer} className='w-full h-full cursor-none'>
            <div ref={cursor} className='pointer-events-none w-[40px] h-[40px] rounded-full bg-orange-400 fixed z-50'></div>
            <section className="hero bg-[url('./src/assets/img.jpg')] flex justify-center items-center">
                {/* <img src={img16} alt="first" /> */}
                <h1 className="uppercase text-[10vw] font-bold text-white leading-[-4px] bg-cover w-screen h-screen flex justify-center items-center">Accordion</h1>
            </section>

            <section className="info  w-screen h-[150vh] text-[#fff] bg-black">
                <div className="header-rows">
                    <div className="header-row w-full h-[300px] px-[8em] flex items-center justify-start"><h1 className="text text-[16vw] font-bold text-white">Motion</h1></div>
                    <div className="header-row w-full h-[250px] px-[8em] flex items-center justify-end"><h1 className="text text-[16vw] font-bold text-white ">Graphics</h1></div>
                </div>
            </section>

            <section className="header-info relative w-full h-screen flex flex-col justify-between text-[#fff] bg-black">
                <p className="text text-[6vw] font-thin p-[1em]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem at sapiente, aut esse
                    orem, ipsum dolor sit
                    {/*                 
                amet consectetur adipisicing elit. Hic exercitationem at sapiente, aut esse 
                repudiandae ad 
                odit! Eius temporibus labore nihil et, beatae non officiis voluptate error modi saepe provident? */}
                </p>
            </section>

            <div className="header-images w-full h-full flex gap-[1em]">
                <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img11} alt="" /></div>
                <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img13} alt="" /></div>
                <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img14} alt="" /></div>
                <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img6} alt="" /></div>
            </div>

            <section className="whitespace relative w-full h-[300vh] bg-black z-[-1]"></section>

            <section className="pinned top-[100vh] absolute w-full h-[250vh] z-10">
                <div
                    className="revealer absolute  translate-x-[-50%] translate-y-[-10%] lg:translate-y-[0%] left-[30%] lg:left-[38%] lg:mt-[325px] mt-[265px] w-[120px] h-[120px]"
                >
                    <div
                        style={{
                            clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)"
                        }}
                        className="revealer-1 absolute top-0 left-0 w-full h-full bg-white "></div>
                    <div
                        style={{
                            clipPath: "polygon(45% 0%, 55% 0%, 55% 100%, 45% 100%)"
                        }}
                        className="revealer-2 absolute top-0 left-0 w-full h-full bg-white rotate-[90deg]"></div>
                </div>
            </section>

            <section className="website-content relative w-full h-[150vh] z-[10] bg-[#fff]">
                <h1 className="text text-[8vw]  px-8 text-center font-thin ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem at sapiente, aut esse
                    orem, ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem at sapiente, aut esse
                    repudiandae ad
                    odit! Eius temporibus labore nihil et, beatae non officiis voluptate error modi saepe provident?
                </h1>
            </section>

            <section className="about p-[5vw] bg-[#87795f]">
                <p className='font-semibold text-[4vw] uppercase'>
                    In a dystopian 3D-rendered cityscape, towering skyscrapers loom
                    ominously over a barren, decaying landscape. The once-thriving
                    metropolis is now bathed in cold, neon light, casting eerie reflections
                    across rain-slicked streets. Drone patrols circle the skies, monitoring
                    the oppressed citizens below as they navigate through a maze of crumbling
                    infrastructure and holographic advertisements. The air is thick with the
                    hum of machinery, and the remnants of human society struggle for survival
                    in a world governed by an all-seeing, authoritarian regime.
                </p>
            </section>
            <section ref={marquee} className="marquee w-screen h-[100vh] lg:h-[150vh] bg-[#fff] flex flex-col justify-center items-center">
                <div className="marquee-container relative w-[125%] lg:h-[400px] h-[200px] flex mb-4 overflow-hidden">
                    <div className="marquee flex w-full h-full absolute top-[50%] left-[-15%] lg:gap-4 gap-2 translate-y-[-50%]">
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img10} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><h1 className="text text-[6vw] font-bold uppercase">Unique</h1></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img1} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img12} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img6} alt="" /></div>
                    </div>
                </div>
                <div className="marquee-container relative w-[125%] lg:h-[400px] h-[200px] flex mb-4 overflow-hidden">
                    <div className="marquee flex w-full h-full absolute top-[50%] left-0 lg:gap-4 gap-2 translate-y-[-50%]">
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img5} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img4} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img3} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><h1 className="text text-[6vw] font-bold uppercase">Release</h1></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img2} alt="" /></div>
                    </div>
                </div>
                <div className="marquee-container relative w-[125%] lg:h-[400px] h-[200px] flex mb-4 overflow-hidden">
                    <div className="marquee flex w-full h-full absolute top-[50%] left-[-15%] lg:gap-4 gap-2 translate-y-[-50%]">
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img10} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><h1 className="text text-[6vw] font-bold uppercase">2500</h1></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img9} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img8} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img7} alt="" /></div>
                    </div>
                </div>
                <div className="marquee-container relative w-[125%] lg:h-[400px] h-[200px] flex mb-4 overflow-hidden">
                    <div className="marquee flex w-full h-full absolute top-[50%] left-0 lg:gap-4 gap-2 translate-y-[-50%]">
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img11} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img13} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img14} alt="" /></div>
                        <div className="item flex flex-1 justify-center items-center"><h1 className="text text-[6vw] font-bold uppercase">Rearity</h1></div>
                        <div className="item flex flex-1 justify-center items-center"><img className="w-full h-full object-cover" src={img6} alt="" /></div>
                    </div>
                </div>
            </section>
            <section className="services p-[5vw] bg-[#87795f]">
                <p className='font-semibold text-[4vw] uppercase'>
                    Technology,
                    once a beacon of hope, has become a tool of control,
                    where freedom is a distant memory and resistance is met with swift, merciless retaliation.
                    In a cold, futuristic city, towering buildings cast shadows over
                    streets lined with flickering neon signs.
                    Drones buzz overhead, monitoring every move, while the citizens, faces hidden behind masks,
                    hurry through the damp, decaying alleys. The air is thick with fear, and the once-bright
                    promise of technology has turned into a tool of oppression, leaving freedom as a distant, forgotten dream.
                </p>
            </section>
            <section className="footer flex justify-center items-center text-[#87795f] bg-[#13120e]">
                <h1 className='text-[10vw] uppercase'>The End</h1>
            </section>
        </div>
    );
}

export default Home;