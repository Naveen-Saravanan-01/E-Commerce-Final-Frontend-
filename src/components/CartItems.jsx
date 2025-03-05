import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from './ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const { all_product, cartItem, removeCart ,getTotal, getTotalAmount} = useContext(ShopContext);

    console.log("Cart Items:", cartItem);

    const navigate =useNavigate();

    return (
        <div className='cartItems'>
            <div className='cart-header'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                        <div  className='cart-item'>
                            <img src={e.image} alt={e.name} className='cart-img' />
                            <p className='p-name'>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cart-qty">{cartItem[e.id]}</button>
                            <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>

                            <img 
                           className='remove-icon'
                                src={remove_icon} 
                                alt="Remove" 
                                 
                                onClick={() => removeCart(e.id)} 
                            />
                            
                        </div>
                        <hr />

                        </div>
                       
                    );
                }
                return null; 
            })}

            <div className='container'>
                <div className="cart-down">
                <h2>Cart Totals</h2>

                    <div className="cart-down-items">
                    
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>

                    </div>
                    <hr />

                    <div className="cart-down-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>

                    </div>

                    <hr />

                    <div className="cart-down-items">
                        <h3>Total</h3>
                        <h2>${getTotalAmount()}</h2>

                    
                    </div>

                    <button onClick={() => {localStorage.getItem('token') ? navigate('/order', { state: { cartData: cartItem, totalAmount: getTotalAmount() } }) : alert("Please Login to Order")}}>
    Proceed to checkout
</button>

                    
                </div>
           

              

                
            <div className="promo">

                <p>If you have promo code, Enter it here</p>

                <div className="in">

                <input type="text" placeholder='Promo code'/>

                <button>Submit</button>

                </div>

                

            </div>

        </div>

        </div>


    );
};

export default CartItems;
