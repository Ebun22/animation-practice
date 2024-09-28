import React, { useEffect, useRef, useState } from 'react'
import img from '../assets/img.jpg'
import { gsap, Power3, Power2 } from 'gsap/src/index'

const Home = () => {
    const nav = useRef<HTMLUListElement | null>(null);
    const text = useRef<HTMLDivElement | null>(null);
    const boxes = useRef<HTMLDivElement | null>(null);
    const counterText = useRef<HTMLHeadingElement | null>(null);
    const [counter, setCounter] = useState<number>(0);

    const CounterIncrement = () => {
        if (counter === 100) {
            return;
        } else {
            setCounter((prev) => {
                const newValue = prev + Math.floor(Math.random() * 10) + 1;

                // Ensure the value doesn't exceed 100
                if (newValue >= 100) {
                    return 100;
                } else {
                    return newValue;
                }
            });

            setTimeout(CounterIncrement, (1000 / 3))
        }
    };

    useEffect(() => {
        CounterIncrement();

    }, [])

    useEffect(() => {
        if (counter !== 100) return; // Only run animations if counter reaches 100

        const tl = gsap.timeline();
        const divs = Array.from(boxes.current?.children || []);
        console.log(divs);
        // Animate counterText opacity to 0
        tl.to(counterText.current, {
            opacity: 0,
        });

        // Animate divs to reduce height to 0
        tl.to(divs, {
            delay: 0.4,
            height: 0,
            stagger:{
                each: 0.2,   // This staggers each element one by one
                amount: 1    // Total time for all divs to finish animating
            }, // Apply a stagger to individual elements
            duration: 1,  // Ensure each animation has a duration to animate smoothly
            ease: "power3.inOut", // Add easing for smoother animation
            onComplete: () => {
                console.log("Animation complete"); // Log when animation completes
            }
        });

        // Animate navigation and text
        const firstNav = nav.current?.children[0];
        const secondNav = firstNav?.nextElementSibling;
        const lastNav = secondNav?.nextElementSibling;

        const firstText = text.current?.children[0];
        const secondText = text.current?.children[1];
        const thirdText = text.current?.children[2];
        const fourthText = text.current?.children[3];
        const lastText = text.current?.children[4];

        // Navigation animation
        tl.fromTo(
            [firstNav?.firstElementChild, secondNav?.firstElementChild, lastNav?.firstElementChild],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: Power3.easeInOut }
        ).fromTo(// Text animations
            [firstText, secondText, thirdText, fourthText, lastText],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: Power3.easeInOut }
        );
    }, [counter]); 

    return (
        <div className='w-screen'>

            <h1 ref={counterText} className='flex justify-end absolute text-white bottom-[-15%] z-20 right-8 text-[20vw] font-bold bebas-neue'>{counter}</h1>

            <div ref={boxes} className='flex w-screen absolute bg-transparent'>
                {Array.from({ length: 20 }, (_, index) => (
                    <div key={index} className='w-[10vw] h-[105vh] bg-[#1a1a1a]'></div>
                ))}
            </div>

            <div className='w-full flex flex-col justify-center items-center bg-[#cacaca] text-[#1a1a1a]'>
                <div className="flex justify-between relative top-[20px] w-[95%]">
                    <p className="text-3xl font-bold">LOGO</p>
                    <ul ref={nav} className="flex justify-center w-3/12 justify-between font-bold items-center">
                        <li className='h-[70%] overflow-hidden'>
                            <div className=''>About</div>
                        </li>
                        <li className='h-[70%] overflow-hidden'>
                            <div>Contact</div>
                        </li>
                        <li className='h-[70%] overflow-hidden'>
                            <div>Playground</div>
                        </li>

                    </ul>
                </div>
                <div ref={text} className='flex justify-center items-center text-[28vw] font-bold leading-[0.72] md:my-24 my-12 overflow-hidden'>
                    <div>F</div>
                    <div>L</div>
                    <div>A</div>
                    <div>W</div>
                    <div className=' bebas-neue'>.</div>
                </div>
                <div className='w-[95%] rounded-3xl border-4 border-[#1a1a1a]'>
                    <img src={img} className='w-full h-full rounded-2xl' alt="" />
                </div>
            </div>

        </div>
    );
}

export default Home;