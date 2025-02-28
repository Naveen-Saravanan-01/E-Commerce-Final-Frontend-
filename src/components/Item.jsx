import React from 'react'
import './Item.css'
import { Link, useNavigate } from 'react-router-dom'

const Item = (props) => {
  const navigate =useNavigate();

  
  

  return (
    <div className='item' onClick={()=>navigate(`/product/${props.id}`)}  >
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" onClick={window.scrollTo(0,0)}/></Link>
      <p>{props.name}</p>

      <div className="price">

        <h3>${props.new_price}</h3>
        <p>{props.old_price}</p>

      </div>

    </div>
  )
}

export default Item