import React from 'react'
import './css/OrderSummary.css'
import order from '../assets/order.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const OrderSummary = () => {

    useEffect(()=>{
          AOS.init({duration:1200,
            once:false,
          })
          AOS.refresh();
        }, []);
    


  return (
    <div className='main-div'>
        <img src={order} alt="" data-aos="zoom-in"/>
        <h3 data-aos="fade-up">ORDER PLACED SUCCESSFULLY</h3>
        <p data-aos="fade-up">Go Back to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default OrderSummary