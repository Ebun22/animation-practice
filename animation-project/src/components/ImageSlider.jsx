import gsap, { Power2, Power3 } from "gsap";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

import react, { useEffect, useRef, useState } from "react";


const ImageSlider = () => {
    const sliderContent = [
        {
            name: "Charles Vin guo",
            title: "Lead Guitarist, Cochealla",
            image: img3,
            quote: "I Play the Guitar cuz music is my life, I wish I could stop but I cant. My fingers just keep going, stum strum , dingg dong. I just know I'll  be famous one day"
        },
        {
            name: "Victor Rostova",
            title: "Head smily departemnt",
            image: img2,
            quote: "I rebranded i smile alot now and i feel different and better. like a new man. my beards are proof that i am different. fingers just keep going, stum strum , dingg dong. I just knkow i'll  be famous one day"
        },
        {
            name: "Kim son jang",
            title: "Model, Vogue",
            image: img1,
            quote: "I Play the Guitar cuz music is my life, i wish i could stop but I cant. My fingers just keep going, stum strum , dingg dong. I just knkow i'll  be famous one day"
        },
    ]

    const imageList = useRef(null);
    const testimonialList = useRef(null);

    useEffect(() => {
        console.log(testimonialList.current.children[0]);

        gsap.to(testimonialList.current.children[0], { opacity: 1 })
    }, []);

    const [active, setActive] = useState(0)
    const tl = gsap.timeline();

    const nextSlide = () => {
    tl.to(imageList.current.children[active], {
            x: -380 * active,
            duration: 0,
            ease: Power3.easeOut,
        })
        .to(imageList.current.children[active + 1], {
            x: -380 * (active + 1),
            delay: 0.8,
            duration: 1,
            ease: Power2.easeInOut,
          })  // Align the scaling and sliding animations
          .from(imageList.current.children[active + 1], {
            scale: 1.8, // Scaling effect happens while sliding in
            ease: Power2.easeInOut,
            duration: 1,
          })
          .to(imageList.current.children[active + 2], {
            x: -380 * (active + 1),
            delay: 0.2,
            duration: 0.4,
            ease: Power2.easeInOut,
          }).to(testimonialList.current.children[active],{
            opacity: 0,
            duration: -1,
            delay: -1,
            ease: Power3.easeInOut
        }).to(testimonialList.current.children[active + 1],{
            opacity: 1,
            delay: -1,
            duration: 0.7,
            ease: Power3.easeInOut
        })
        setActive(prev => (prev + 1) > 2 ? 0 : (prev + 1))
    }
    const prevSlide = () => {
    tl.to(imageList.current.children[active], {
            x: +380 * active,
            delay: 0.2,
            // duration: 1,
            ease: Power3.easeOut,
        })
        .to(imageList.current.children[active - 1], {
            x: +380 * (active - 1),
            delay: 0.8,
            duration: 1,
            ease: Power3.easeOut,
        }).to(testimonialList.current.children[active],{
            opacity: 1,
            ease: Power3.easeInOut
        }).to(testimonialList.current.children[active - 1],{
            opacity: 0,
            delay: 0.2,
            duration: 0.7,
            ease: Power3.easeInOut
        })
        setActive(prev => (prev - 1) < 0 ? 2 : (prev - 1))
    }

    return (
        <>
            <div className="test-section h-full flex justify-center overflow-hidden items-center">
                <div className="test-cont w-full h-[600px] relative overflow-hidden">
                    <div
                        onClick={prevSlide}
                        className="left-arrow left-0 bottom-0  flex justify-center items-center text-2xl font-bold h-full absolute w-[100px] cursor-pointer">
                        <span>&lt;</span>
                    </div>

                    <div className="inner w-[1200px] h-[600px] flex gap-2 justify-center items-center">
                        <div className="t-img w-[400px] h-[600px] flex justify-center items-center">
                            <ul ref={imageList} className="flex h-[480px] w-[380px] overflow-hidden shadow-[0px 20px 36px rgba(0, 0, 0, 1)] rounded-xl">
                                {sliderContent.map((item, index) => (
                                    <li key={index} className={`${(active == index) ? "active" : " "} h-[480px] w-[380px] max-w-[540px]`}>
                                        <img src={item.image} alt={`img`} className=" h-[480px] w-[380px] max-w-[540px]" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="t-content w-[450px] h-[600px] flex items-center">
                            <ul ref={testimonialList} className="absolute overflow-hidden  w-[500px] h-[400px] ">
                                {sliderContent.map((item, index) => (
                                    <li key={index} className={`${(active == index) ? "active" : " "} opacity-0 w-[500px] h-[400px] flex items-center absolute`}>
                                        <div className="content-inner  w-[500px]">
                                            <p className="quote text-xl font-bold mb-[16px]">{item.quote}</p>
                                            <p className="name text-sm font-slim text-[#251f1e] font-semibold">{item.name}</p>
                                            <p className="title text-xs font-slim">{item.title}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        onClick={nextSlide}
                        className="right-arrow  right-0 top-0 flex justify-center items-center text-2xl font-bold h-full absolute w-[100px] cursor-pointer">
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageSlider;
