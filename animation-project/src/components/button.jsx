import gsap from "gsap";
import { useEffect } from "react";

const Button = () => {
    
    const circleYellow = useRef(null)
    const circleRed = useRef(null)
    const circleBlue = useRef(null)
  
    const increaseCircle = (element) => {
      console.log(element)
      gsap.to(
        element,
        {
          duration: 0.8,
          ease: Power3.easeOut,
          width: 200,
          height: 200,
        }
      )
    }
    const decreaseCircle = (element) => {
      gsap.to(
        element,
        {
          duration: 0.8,
          ease: Power3.easeInOut,
          width: 25,
          height: 25,
        }
      )
    }
  
    useEffect(() => {
        gsap.to(
          [circleYellow.current, circleRed.current, circleBlue.current],
          {
            duration: 0.8,
            x: 60,
            opacity: 1,
            stagger: (index) => [0.2, 0.4, 0.6][index] || 0,
            ease: Power3.easeIn,
          }
        )
    
      }, [])
      
    return (
        <>
            <div className='bg-white pr-20 flex flex-col justify-center items-center'>
                <div
                    onMouseEnter={() => increaseCircle(circleYellow.current)}
                    onMouseLeave={() => decreaseCircle(circleYellow.current)}
                    ref={circleYellow}
                    className='bg-yellow-500 opacity-0 w-[25px] h-[25px] mb-5 rounded-full'
                ></div>
                <div
                    onMouseEnter={() => increaseCircle(circleRed.current)}
                    onMouseLeave={() => decreaseCircle(circleRed.current)}
                    ref={circleRed} className='bg-rose-600 opacity-0 w-[25px] h-[25px] mb-5 rounded-full'></div>
                <div
                    onMouseEnter={() => increaseCircle(circleBlue.current)}
                    onMouseLeave={() => decreaseCircle(circleBlue.current)}
                    ref={circleBlue} className='bg-blue-500 opacity-0 w-[25px] h-[25px] mb-5 rounded-full'></div>
            </div>
        </>
    );
}

export default Button;