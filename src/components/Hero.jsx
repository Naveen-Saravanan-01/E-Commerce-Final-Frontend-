import React, { useEffect, useRef } from 'react';
import './Hero.css';
import bye from '../assets/hand_icon.png';
import arrow from '../assets/arrow.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

const heroImages = [slide1, slide2, slide3];



const Hero = () => {
  const swiperRef = useRef(null); // ✅ Moved inside component

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();

    // Manually trigger swiper slide after mount
    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.slideNext) {
        swiperRef.current.slideNext();
      }
    }, 1000);
  }, []);



function scrollPage() {
  const element = document.getElementById("popular-products");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}



  return (
    <div className='hero-container'>
      <div className='left-div'>
        <p data-aos="flip-up">SALE! UP TO 50% OFF!</p>
        <h1 data-aos="fade-right" data-aos-delay="100">Get Ready </h1>
        <h1 data-aos="fade-left" data-aos-delay="100">To Find Your Styles</h1>
        {/* <h1 data-aos="fade-right" data-aos-delay="100">for everyone</h1> */}
        <button onClick={scrollPage}>
        SHOP NOW <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div className="right-div">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          slidesPerView={1}
          observer={true}
          observeParents={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Capture swiper instance
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`slide-${index}`} className="hero-slide-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
