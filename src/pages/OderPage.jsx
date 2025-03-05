import React, { useContext, useState } from 'react';
import { ShopContext } from '../components/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';
import './css/OrderPage.css';
import axios from 'axios';

const CartItems = () => {
    const { all_product, cartItem, removeCart, getTotalAmount } = useContext(ShopContext);
    const navigate = useNavigate();

    // State to store user input
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        area: '',
        pinCode: '',
        landmark: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // Function to send data to backend
    const handleOrderSubmit = async () => {

        window.scrollTo(0,0)

        const orderDetails = {
            user: userData,
            cartItems: all_product
                .filter(product => cartItem[product.id] > 0)
                .map(product => ({
                    productId: product.id,
                    name: product.name,
                    price: product.new_price,
                    quantity: cartItem[product.id],
                    total: (product.new_price * cartItem[product.id]).toFixed(2)
                })),
            totalAmount: getTotalAmount(),
        };
    
        try {
            const response = await axios.post("https://e-commerce-final-backend.onrender.com/order", orderDetails);
            console.log('Order response:', response.data);
    
            if (response.data.success) {
                alert('Order placed successfully!');
                navigate('/order-summary', { state: { orderDetails: response.data } });
            } else {
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong! Try again.');
        }
    };
    

    return (
        <div className='cartItems order-div'>
            <h1>ORDER DETAILS</h1>
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
                            <div className='cart-item'>
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

            <div className="below-div">
                <h3>Billing Details</h3>
                <div className="form-div">
                    <form className='form'>
                        {Object.keys(userData).map((key) => (
                            <div className="form-item" key={key}>
                                <p>{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                <input type="text" name={key} value={userData[key]} onChange={handleChange} />
                            </div>
                        ))}
                    </form>
                    <button className="checkout-btn" onClick={handleOrderSubmit} >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;



























// import React, { useContext, useState } from 'react';
// // import '../components/CartItems.css';
// import { ShopContext } from '../components/ShopContext';
// import remove_icon from '../assets/cart_cross_icon.png';
// import { useNavigate } from 'react-router-dom';
// import './css/OrderPage.css'

// const CartItems = () => {
//     const { all_product, cartItem, removeCart ,getTotal, getTotalAmount} = useContext(ShopContext);

//     console.log("Cart Items:", cartItem);

//     const navigate =useNavigate();

//     const [userData, setUserData]=useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         city: '',
//         area: '',
//         pinCode: '',
//         landmark: ''
//     })

//     const handleChange=(e)=>{
//         setUserData({...userData,})
//     }

//     return (
//         <div className='cartItems order-div'>
//           <h1>ORDER DETAILS</h1>

//             <div className='cart-header'>
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr />

//             {all_product.map((e) => {
//                 if (cartItem[e.id] > 0) {
//                     return (
//                         <div key={e.id}>
//                         <div  className='cart-item'>
//                             <img src={e.image} alt={e.name} className='cart-img' />
//                             <p className='p-name'>{e.name}</p>
//                             <p>${e.new_price}</p>
//                             <button className="cart-qty">{cartItem[e.id]}</button>
//                             <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>

//                             <img 
//                            className='remove-icon'
//                                 src={remove_icon} 
//                                 alt="Remove" 
                                 
//                                 onClick={() => removeCart(e.id)} 
//                             />
                            
//                         </div>
//                         <hr />

//                         </div>
                       
//                     );
//                 }
//                 return null; 
//             })}

//             {/* <div className='container'>
//                 <div className="cart-down">
//                 <h2>Cart Totals</h2>

//                     <div className="cart-down-items">
                    
//                         <p>Subtotal</p>
//                         <p>${getTotalAmount()}</p>

//                     </div>
//                     <hr />

//                     <div className="cart-down-items">
//                         <p>Shipping Fee</p>
//                         <p>Free</p>

//                     </div>

//                     <hr />

//                     <div className="cart-down-items">
//                         <h3>Total</h3>
//                         <h2>${getTotalAmount()}</h2>

                    
//                     </div>

//                     <button onClick={() => navigate('/order', { state: { cartData: cartItem, totalAmount: getTotalAmount() } })}>
//     Proceed to checkout
// </button>

                    
//                 </div>
           

              

                
//             <div className="promo">

//                 <p>If you have promo code, Enter it here</p>

//                 <div className="in">

//                 <input type="text" placeholder='Promo code'/>

//                 <button>Submit</button>

//                 </div>

                

//             </div>

//         </div> */}



//         <div className="below-div">
//           <h3>Billing Details</h3>
//           <div className="form-div">
//             <form action="" className='form'>
//                 <div className="form-item">

//                     <p>First Name</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Last Name</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Email</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Phone Number</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>City</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Area</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Pin Code</p>
//                     <input type="text" />

//                 </div>

//                 <div className="form-item">

//                     <p>Landmark</p>
//                     <input type="text" />

//                 </div>
              
//             </form>
//           </div>
//         </div>

//         </div>


//     );
// };

// export default CartItems;


















// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // const Order = () => {
// //     const location = useLocation();
// //     const { cartData, totalAmount } = location.state || {}; // Retrieve cart data

// //     // Filter out products with quantity 0
// //     const filteredCart = Object.entries(cartData || {}).filter(([id, qty]) => qty > 0);

// //     return (
// //         <div style={{marginTop:"50px"}}>
// //             <h2>Order Summary</h2>

// //             {filteredCart.length > 0 ? (
// //                 <div>
// //                     <h3>Items in Cart:</h3>
// //                     <ul>
// //                         {filteredCart.map(([id, qty]) => (
// //                             <li key={id}>
// //                                 Product ID: {id}, Quantity: {qty}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                     <h3>Total Amount: ${totalAmount}</h3>
// //                 </div>
// //             ) : (
// //                 <p>No items in cart.</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default Order;
