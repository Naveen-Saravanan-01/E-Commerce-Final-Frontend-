import React, { useEffect } from 'react'
import './NewCollections.css'
import Item from './Item'
import new_collection from '../assets/new_collections.js'
import AOS from "aos"
import "aos/dist/aos.css"
import './NewCollections.css'


const NewCollections = () => {

  useEffect(()=>{
    AOS.init({duration:1000,
      once:false,
    })
  },[])

  return (
    <div className='new-container'>

      <h1 >NEW COLLECTIONS</h1>
      <hr />

      <div className='new-map-item' data-aos='fade-right'>

        {new_collection.map((item,i)=>
        (
         <Item  key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
        )}
      
      </div>

    </div>
  )
}

export default NewCollections