import React from 'react'
import related_data from '../assets/data'
import Item from './Item'
import './RelatedProducts.css'

const RelatedProducts = () => {
  return (
    <div className='rel-container'>
        <h1>RELATED PRODUCTS</h1>
        <hr />

        <div className="rel-map-item">

            {related_data.map((item,i)=>{
                return <Item  key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default RelatedProducts