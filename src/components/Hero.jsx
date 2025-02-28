import React from 'react'
import './Hero.css'
import bye from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='left-div'>
            <p>NEW ARRIVALS ONLY</p>
            <h1>new <img src={bye} alt="" /></h1>
            <h1>collection</h1>
            <h1>for everyone</h1>

            <button>Latest Collection <img src={arrow} alt="" /></button>
        </div>

        <div className="right-div">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero