import { useState, useRef, useEffect } from 'react'
import img from "../assets/img.jpg"
import { gsap, Power3, Power2 } from 'gsap/src/index'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

function ImageReveal() {

    //Image Reveal Animation
    const container = useRef(null);
    const image = useRef(null);
    const imgReveal = CSSRulePlugin.getRule(".img-container::after") //how to target Pseudo elements in gsap
    const tl = gsap.timeline();

    useEffect(() => {
        tl.to(container.current, { opacity: 1 })
            .to(imgReveal, { duration: 1.2, width: "0%", ease: Power2.easeInOut })
            .from(image.current, { duration: 1.2, scale: 1.5, delay: -1 })
    }, [])

    return (
        <div className='flex w-screen h-screen'>
            <div ref={container} className='flex opacity-0 w-2/5 h-screen pl-6 justify-center items-center '>
                <div className='img-container w-full h-[383px] flex justify-center items-center relative overflow-hidden after:bg-white after:flex after:justify-center after:items-center'>
                    <img ref={image} src={img} className='absolute w-full h-full' />
                </div>
            </div>

        </div>
    )
}

export default ImageReveal;
