import React, { useEffect } from 'react'
import './ProductDisplay.css'
import star from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from './ShopContext'


const ProductDisplay = (props) => {

   
    const {product}=props;

    const {addToCart}= useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className="product-display-left">

            <div className="img-div">

            <div className="product-dis-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>

            <div className="product-dis-img">
                <img src={product.image} alt="" className='product-dis-img' />
            </div>

            </div>

        </div>

        <div className="product-display-right">
            <h1>{product.name}</h1>

            <div className="star-list">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_dull} alt="" />
                <p>(123)</p>

            </div>

            <div className="right-price">
                <div className="new-price">
                    <h1>${product.new_price}</h1>
                </div>
                <div className="old-price">
                    {product.old_price}
                </div>
            </div>
            
            <div className="right-des">
                <p>Lorem ipsum dolor sit amet consectetur ciatis harum. Quaerat doloremque totam iusto officia nemo quae laudantium nostrum expedita cupiditate. Soluta</p>

            </div>

            <div className="right-size">
                <h3>Select Size</h3>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>

            <div className="cart-button">
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            </div>

            <p className='cat'><span>Category :</span> Women , T-shirt , Crop-Top</p>
            <p className='cat'><span>Tags :</span> Modern , Latest , </p>
        </div>
        
    </div>
  )
}

export default ProductDisplay;