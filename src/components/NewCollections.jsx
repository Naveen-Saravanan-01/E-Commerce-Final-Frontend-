import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from './Item'
// import new_collection from '../assets/new_collections.js'
import AOS from "aos"
import "aos/dist/aos.css"
import './NewCollections.css'
import axios from 'axios'


const NewCollections = () => {

  const [new_collection,setNew_collection]=useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-final-backend.onrender.com/newCollection");
        console.log("Fetched products:", response.data);
        setNew_collection(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);




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