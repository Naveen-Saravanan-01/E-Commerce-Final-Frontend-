import React, { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import drop_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item'
import './css/ShopCategory.css'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  return (
    <div >
        <div className='catt'>

         <img src={props.image} alt="" style={{width:"100%"}}/>

        </div>

        <div className='cat-cont'>

          <div className="sort">
            <p><span>Showing 1-12</span> out of 36 products</p>

            <button>Sort by <img src={drop_icon} alt="" /></button>
          </div>

          <div className="cat-item">
            {all_product.map((item,i)=>{
              if(item.category===props.category){
                return <Item  key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }else{
                return null;
              }
            })}
          </div>

        </div>
    </div>
  )
}

export default ShopCategory