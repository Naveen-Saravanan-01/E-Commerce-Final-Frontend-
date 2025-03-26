import { useEffect, useState } from 'react'
import React from 'react'
// import data from '../assets/data.js'
import Item from './Item'
import './Popular.css'
import AOS from 'aos'
import "aos/dist/aos.css"
import axios from 'axios'


const Popular = () => {

  const[data,setData]=useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-final-backend-production.up.railway.app/popularCollection");
        console.log("Fetched products:", response.data);
        setData(response.data);
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
    <div className='popular-container'>

      <h1>Related Products</h1>
      <hr />

      <div className='map-item' data-aos='fade-left'>

        {data.map((item,i)=>
        (
         <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
        )}
      
      </div>

    </div>
  )
}

export default Popular
















// import React from 'react'
// import related_data from '../assets/data'
// import Item from './Item'
// import './RelatedProducts.css'
// import Popular from './Popular'

// const RelatedProducts = () => {
//   return (
//     <div className='rel-container'>
//         <h1>RELATED PRODUCTS</h1>
//         <hr />

//         <div className="rel-map-item">


//             {related_data.map((item,i)=>{
//                 return <Item  key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             })}
//         </div>

//     </div>
//   )
// }

// export default RelatedProducts