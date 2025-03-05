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
        const response = await axios.get("https://e-commerce-final-backend.onrender.com/allProducts");
        console.log("Fetched products:", response.data);
        setAll_product(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);








  const [cartItem, setCartItems] = useState(() => {

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

  const contextValue = { all_product, cartItem, addToCart, removeCart, getTotalAmount };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;










// // import axios from "axios";
// // import React, { useState, useEffect, createContext } from "react";
// // // import all_product from "../assets/all_product.js";

// // export const ShopContext = createContext(null);

// // // Initialize cart with product IDs
// // const getDefaultCart = () => {
// //     let cart = {};
// //     all_product.forEach(product => {
// //         cart[product.id] = 0;
// //     });
// //     return cart;
// // };

// // const ShopContextProvider = (props) => {

// //     const [all_product,setAll_product]=useState([])

// //     useEffect(() => {
// //         const fetchProducts = async () => {
// //           try {
// //             const response = await axios.get("http://localhost:5000/allProducts");
// //             console.log(response.data); // Logs the actual products
// //             setAll_product(response.data); // Update state with fetched products
// //           } catch (error) {
// //             console.error("Error fetching products:", error);
// //           }
// //         };
    
// //         fetchProducts();
// //       }, []);


// //     const [cartItem, setCartItems] = useState(() => {
// //         // Try to get the saved cart from localStorage
// //         const savedCart = localStorage.getItem("cart");
// //         return savedCart ? JSON.parse(savedCart) : getDefaultCart();
// //     });

// //     // Sync cart state with localStorage whenever cartItem changes
// //     useEffect(() => {
// //         localStorage.setItem("cart", JSON.stringify(cartItem));
// //     }, [cartItem]);

// //     // Add to cart function
// //     const addToCart = (itemId) => {
// //         setCartItems((prev) => {
// //             const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
// //             return newCart;
// //         });
// //         console.log(cartItem)
        
// //     };

// //     // Remove from cart function
// //     const removeCart = (itemId) => {
// //         setCartItems((prev) => {
// //             const newCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
// //             return newCart;
// //         });
        
// //     };

// //     const getTotalAmount =()=>{
// //         let totalAmount = 0;
// //         for(const item in all_product){

// //             if(cartItem[item]>0){
// //             let itemInfo = all_product.find((product)=>product.id === Number(item))

// //             totalAmount+=itemInfo.new_price * cartItem[item]

// //         }
// //     }
// //     return totalAmount.toFixed(2); 

// // }

// //     const contextValue = { all_product, cartItem, addToCart, removeCart, getTotalAmount };

// //     return (
// //         <ShopContext.Provider value={contextValue}>
// //             {props.children}
// //         </ShopContext.Provider>
// //     );
// // };

// // export default ShopContextProvider;


// // // import React, { useState, createContext } from "react";
// // // import all_product from '../assets/all_product.js';

// // // export const ShopContext = createContext(null);

// // // // Initialize cart with product IDs as keys
// // // const getDefaultCart = () => {
// // //     let cart = {};
// // //     all_product.forEach(product => {
// // //         cart[product.id] = 0; // Use product ID instead of index
// // //     });
// // //     return cart;
// // // };

// // // const ShopContextProvider = (props) => {
// // //     const [cartItem, setCartItems] = useState(getDefaultCart());

// // //     const addToCart = (itemId) => {
// // //         setCartItems((prev) => {
// // //             const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
// // //             return newCart;
// // //         });
// // //     };
// // //     console.log(cartItem)

// // //     const removeCart = (itemId) => {
// // //         setCartItems((prev) => {
// // //             const newCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
// // //             return newCart;
// // //         });
// // //     };

// // //     const contextValue = { all_product, cartItem, addToCart, removeCart };

// // //     return (
// // //         <ShopContext.Provider value={contextValue}>
// // //             {props.children}
// // //         </ShopContext.Provider>
// // //     );
// // // };

// // // export default ShopContextProvider;




// // // import React, { useState } from "react";
// // // import { createContext } from "react";
// // // import all_product from '../assets/all_product.js'

// // // export const ShopContext = createContext(null);

// // // const getDefaultCart =()=>{
// // //     let cart ={}

// // //     for(let index=0;index < all_product.length;index++){
// // //         cart[index]=0
// // //     }

// // //     return cart
// // // }

// // // const ShopContextProvider =(props)=>{

    

// // //     const [cartItem,setCartItems]=useState(getDefaultCart());

   


// // //     const addToCart =  (itemId)=>
// // //     {console.log("Before:", cartItem);

// // //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))

// // //     console.log(cartItem)
// // //     }

// // //     const removeCart =  (itemId)=>
// // //         {
    
// // //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
// // //         }


// // //         const contextValue = {all_product,cartItem, addToCart,removeCart}

  


// // //     return(
// // //         <ShopContext.Provider value={contextValue}>
// // //             {props.children}
// // //         </ShopContext.Provider>
// // //     )
// // // }

// // // export default ShopContextProvider;