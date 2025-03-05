import React from 'react'
import './Hero.css'
import bye from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect } from 'react'

const Hero = () => {

   useEffect(()=>{
      AOS.init({duration:800,
        once:false,
      })
      AOS.refresh();
    }, []);


  return (
    <div className='hero-container'>
        <div className='left-div'>
            <p data-aos="flip-up">NEW ARRIVALS ONLY</p>
            <h1 data-aos="fade-right" data-aos-delay="100">new <img src={bye} alt="" /></h1>
            <h1 data-aos="fade-left" data-aos-delay="100">collection</h1>
            <h1 data-aos="fade-right" data-aos-delay="100">for everyone</h1>

            <button>Latest Collection <img src={arrow} alt="" /></button>
        </div>

        <div className="right-div">
            <img src={hero} alt="" data-aos="zoom-in"/>
        </div>
    </div>
  )
}

export default Hero