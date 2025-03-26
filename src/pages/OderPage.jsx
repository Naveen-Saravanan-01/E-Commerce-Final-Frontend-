import React, { useContext, useState } from 'react';
import { ShopContext } from '../components/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';
import './css/OrderPage.css';
import axios from 'axios';
import {jwtDecode} from "jwt-decode";

const CartItems = () => {
    const { all_product, cartItem, removeCart, getTotalAmount ,clearCart} = useContext(ShopContext);
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
        window.scrollTo(0, 0);
    
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token not found in localStorage');
            alert('User not authenticated.');
            return;
        }
    
        let decoded;
        let userEmail;
        let email;
        let name;
        try {
            decoded = jwtDecode(token);
            console.log("decode:",decoded);
            userEmail=await axios.post('https://e-commerce-final-backend-production.up.railway.app/findEmail',{userId:decoded.user.id});
            email=userEmail.data.message;
            name=userEmail.data.name;
            console.log(email)



        } catch (error) {
            console.error('Error decoding token:', error);
            alert('Invalid token.');
            return;
        }
    
        if (!decoded.user) {
            console.error('userId not found in decoded token', decoded);
            alert('Invalid user data.');
            return;
        }
    
        const orderDetails = {
            userId: decoded.user.id || decoded.user,
            name:name,
            email:email,
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

        console.log(orderDetails)
    
        try {
            const response = await axios.post("https://e-commerce-final-backend-production.up.railway.app/order", orderDetails);
            
            console.log('Full Response:', response);
            
            if (response.status === 200 && response.data.success) {
                alert('Order placed successfully!');
                
                clearCart(); // ✅ Properly clear the cart
                
                navigate('/order-summary', { state: { orderDetails: response.data } });
            } else {
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong! Try again.');
        }
    };
    
    












    // const handleOrderSubmit = async () => {

    //     window.scrollTo(0,0)

    //     const token = localStorage.getItem('token')

    //     const decoded=jwtDecode(token);


    //     const orderDetails = {

    //         userId:decoded.userId,
    //         user: userData,
    //         cartItems: all_product
    //             .filter(product => cartItem[product.id] > 0)
    //             .map(product => ({
    //                 productId: product.id,
    //                 name: product.name,
    //                 price: product.new_price,
    //                 quantity: cartItem[product.id],
    //                 total: (product.new_price * cartItem[product.id]).toFixed(2)
    //             })),
    //         totalAmount: getTotalAmount(),
    //     };
    
    //     try {
    //         const response = await axios.post("https://e-commerce-final-backend.onrender.com/order", orderDetails);
    //         console.log('Order response:', response.data);
    
    //         if (response.data.success) {
    //             alert('Order placed successfully!');
    //             navigate('/order-summary', { state: { orderDetails: response.data } });
    //         } else {
    //             alert('Failed to place order.');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Something went wrong! Try again.');
    //     }
    // };
    

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


























