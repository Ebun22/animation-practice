import { useState, useRef, useEffect } from 'react'
import img from "./assets/img.jpg"
import { gsap, Power3, Power2 } from 'gsap/src/index'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import Home from './components/home'

function App() {
  const [hover, setHover] = useState(false)


  return (
    <div className='flex w-screen h-screen'>
        <Home />
    </div>
  )
}

export default App
