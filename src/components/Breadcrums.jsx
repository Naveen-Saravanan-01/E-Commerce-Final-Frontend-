import React from 'react'
import './Breadcrums.css'
import arrow_b from '../assets/breadcrum_arrow.png'


const Breadcrums = (props) => {

    const {product }= props;
  return (
    <div className='breadcrums'>

        HOME<img src={arrow_b} alt="" />
        SHOP<img src={arrow_b} alt="" />{product.category} <img src={arrow_b} alt="" />
        {product.name}

    </div>
  )
}

export default Breadcrums