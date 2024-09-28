import { useState, useRef, useEffect } from 'react'
import img from "./assets/img.jpg"
import { gsap, Power3, Power2 } from 'gsap/src/index'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import ImageReveal from './components/ImageReveal'
import ImageSlider from './components/ImageSlider'
import Hero from './components/Hero'

function App() {
  const [hover, setHover] = useState(false)


  return (
    <div className='flex w-screen h-screen'>
        <Hero />
    </div>
  )
}

export default App
