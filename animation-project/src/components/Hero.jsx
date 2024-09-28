import { useRef } from "react";
import img3 from "../assets/img1.jpg"
import img4 from "../assets/img4.jpg"

import gsap, { Power3 } from "gsap";
import { useEffect } from "react";

const Hero = () => {
    const tl = gsap.timeline();
    const hero = useRef();
    const imgs = useRef();
    const content = useRef();
    const text = useRef();

    useEffect(() => {
        const firstImg = imgs.current.firstElementChild;
        const secondImg = imgs.current.lastElementChild;

        const firstText = content.current.children[0].children[0];
        const secondText = firstText.nextSibling;
        const thirdText = secondText.nextSibling;

        gsap.to(hero.current, {
            duration: 0,
            css: { visibility: "visible" }
        })
        //This prevents the animation from remaining at the from position on re-renders
        tl.fromTo(
            secondImg,
            { y: 1280 }, // starting position
            {
                duration: 1.2,
                y: 0, // final position 
                ease: Power3.easeOut
            }
        ).fromTo(secondImg.firstElementChild, { scale: 1.6 },
            { duration: 1.5, scale: 1, ease: Power3.easeOut }, 0.2
        ).fromTo(
            firstImg,
            { y: 1280 },
            {
                duration: 1.2,
                y: 0,
                ease: Power3.easeInOut
            },
            0.2
        ).fromTo(firstImg.firstElementChild, { scale: 1.6 }, { duration: 1.6, scale: 1, ease: Power3.easeInOut }, 0.2)

        tl.fromTo([firstText.children, secondText.children, thirdText.children],
            { y: 40 },
            {
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: Power3.easeOut
            },
            0.2
        ).fromTo(text.current,
            {
                opacity: 0,
                y: 40
            },
            {
                duration: 1.2,
                opacity: 1,
                y: 0,
            },
            0.3
        )
    })


    return (
        <div ref={hero} className="hero h-screen invisible">
            <div className="container w-[1440px] min-w-screen relative left-[50%] translate-x-[-50%]">
                <div className="hero-inner flex justify-center items-center h-screen mx-[24px]">
                    <div className="hero-content w-[50%]">
                        <div ref={content} className="hero-content-inner w-[400px] mx-auto text-[#323232]">
                            <h1 className="font-semibold text-3xl mb-[24px]">
                                <div className="hero-contnt-line overflow-hidden m-0 h-[44px]">
                                    <div className="hero-contnt-line-inner">Relieving the burden</div>
                                </div>
                                <div className="hero-contnt-line overflow-hidden m-0 h-[44px]">
                                    <div className="hero-contnt-line-inner">of disease caused</div>
                                </div>
                                <div className="hero-contnt-line overflow-hidden m-0 h-[44px]">
                                    <div className="hero-contnt-line-inner">by behaviours.</div>
                                </div>
                            </h1>
                            <p ref={text} className="text-sm font-light pr-[48px] mb-[56px] leading-6">Better treats seerious cardiometabolic diseases to transform lives and reduce healthcare utilization through the use of digital therapeutics.</p>
                            <div className="btn-row before:relative before:content-['']  before:inline-block before:w-[50px] before:h-[1px] before:bg-[#dfdfdf] before:left-[-2px] before:top-[-5px]">
                                <button className="explore-btn focus:outline-none uppercase">
                                    Explore
                                    <span className="text-[#fff] rounded-full bg-[#007fff] ml-4 w-[20px] px-3 py-1.5">&gt;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images w-[50%] h-full relative">
                        <div ref={imgs} className="hero-images-inner">
                            <div className="hero-img first absolute overflow-hidden bottom-[20px] left-0 w-[45%] h-[70%]">
                                <img src={img3} className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" />
                            </div>
                            <div className="hero-img second absolute overflow-hidden top-0 right-0 w-[52%] h-[65%]">
                                <img src={img4} className="absolute top-0 right-0 bottom-0 left-0 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;