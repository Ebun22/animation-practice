import { useState, useRef, useEffect } from 'react'
import { gsap, Power3, Power2 } from 'gsap/src/index'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import Home from './components/Home'


function App() {
  const [hover, setHover] = useState(false)


  return (
    <div className=''>
        <Home />
    </div>
  )
}

export default App
