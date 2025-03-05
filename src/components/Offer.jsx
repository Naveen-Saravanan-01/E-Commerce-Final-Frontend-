import React from 'react'
import './Offer.css'
import offer_img from '../assets/exclusive_image.png'
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect } from 'react'

const Offer = () => {

   useEffect(()=>{
        AOS.init({duration:800,
          once:false,
        })
        AOS.refresh();
      }, []);


  return (
    <div className='offer' data-aos="fade-down"  data-aos-easing="ease-in-out">
        <div className="offer-left">

            <h1 className='ex'>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check  Now</button>

        </div>

        <div className="offer-right">

            <img src={offer_img} alt="" data-aos="zoom-in" data-aos-duration="1000"/>

        </div>



    </div>
  )
}

export default Offer