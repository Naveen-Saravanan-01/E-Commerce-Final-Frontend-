import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import './css/OrderedProduct.css'
import status_imgg from '../assets/status_imgg.png'
import cross_icon from '../assets/cart_cross_icon.png'

const OrderedProduct = () => {
  const [order, setOrder] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null); 
  const navigate=useNavigate()

  const checkUser = () => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      console.error("Token not found in localStorage");
      alert("User not authenticated.");
      navigate('/')
      return null;
    }

    try {
      const decoded = jwtDecode(storedToken);
      // console.log("Decoded Token:", decoded);
      return decoded.user?.id; 
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Invalid token.");
      return null;
    }
  };

  const orderedProduct = async () => {
    try {
      let response = await axios.get("https://e-commerce-final-backend-production.up.railway.app/getOrder");
      // console.log("Response Data:", response.data.data);
      setOrder(response.data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = checkUser();
    if (user) {
      setUserId(user);
    }
    orderedProduct();
  }, []);

  useEffect(() => {
    if (userId && order.length > 0) {
      const userOrders = order.filter((o) => o.userid === userId);
      setFilteredOrders(userOrders);
    }
  }, [userId, order]);



  //canceling order
  const cancelOrder = async (orderId) => {
    try {
        const response = await axios.post('https://e-commerce-final-backend-production.up.railway.app/cancelOrder', { orderId });

        if (response.data.success) {
            alert("Order cancelled successfully!");

            setFilteredOrders(prevOrders =>
                prevOrders.map(order =>
                    order._id === orderId ? { ...order, orderStatus: "Cancelled" } : order
                )
            );
        } else {
            alert("Failed to cancel the order: " + response.data.message);
        }
    } catch (error) {
        console.error("Error cancelling order:", error);
        alert("Something went wrong. Please try again.");
    }
};

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="product-cont">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading.....</p>
        ) : filteredOrders.length === 0 ? (
          <div style={{ textAlign: "center" }}>No orders found</div>
        ) : (
          <div className="all-product-list">
            {filteredOrders.map((orderItem, index) => (
              <div key={index} className="plex">
                <h3>Order ID: {orderItem._id}</h3>
                <p>Order Date: {new Date(orderItem.orderDate).toLocaleString()}</p>

                <div className="title">

                  <p>Product ID</p>
                  <p>Product Name</p>
                  <p>Amount</p>
                  <p>Quantity</p>

                  
                </div>

                <hr />



                {orderItem.cartItems.map((product, i) => (
                  <div key={i} className="mapped-product">
                    <p className="pro-name">{product.productId}</p>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <p>{product.quantity}</p>

                  </div>

                  
                
                ))}

                              
                <div className="status">

                  {
                    orderItem.orderStatus==="Cancelled"? <>
                    <div className="cancel-div">
                      <p>{orderItem.orderStatus}</p>
                    </div>
                    </> : <>

                    <div className="status-item">
                  <img src={status_imgg} alt="" />
                  <p>{orderItem.orderStatus}</p>
                </div>


                {
                  orderItem.orderStatus !== "Delivered" && ( 
                    <div className="cancel-item" onClick={()=>cancelOrder(orderItem._id)}>
                      <img src={cross_icon} alt="" />
                      <h5>Cancel Order</h5>
                    </div>
                  )
            }


                
                    
                    
                    </>
                  }


                  



</div>

                <hr className="end-line" />

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderedProduct;
