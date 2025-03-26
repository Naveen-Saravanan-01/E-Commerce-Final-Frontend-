import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {


  
  
     useEffect(()=>{
          AOS.init({duration:800,
            once:false,
          })
          AOS.refresh();
        }, []);
  



  const [all_product, setAll_product] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-final-backend-production.up.railway.app/allProducts");
        console.log("Fetched products:", response.data);
        setAll_product(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);








  const [cartItem, setCartItems] = useState(() => {

    
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
      cart[product.id] = 0;
  });
  return cart;
};

           const savedCart = localStorage.getItem("cart");
         return savedCart ? JSON.parse(savedCart) : getDefaultCart();
        });
    
    useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cartItem));
     }, [cartItem]);
    
        const addToCart = (itemId) => {
            setCartItems((prev) => {
                const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
                return newCart;
            });
            console.log(cartItem)
            
        };

        const clearCart = () => {
          setCartItems({});  // Clear cart state
          localStorage.setItem("cart", JSON.stringify({}));  // Clear local storage
      };
      


  
  



   // Remove from cart function
  const removeCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
      return newCart;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount.toFixed(2);
  };

  const contextValue = { all_product, cartItem, addToCart, removeCart, getTotalAmount ,clearCart};

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;











