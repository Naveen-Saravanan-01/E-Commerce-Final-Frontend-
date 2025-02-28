import React, { useState, useContext, useRef } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import { ShopContext } from './ShopContext'; 
import dropDown from '../assets/nav_dropdown.png'

const Navbar = () => {
    const [state, setState] = useState("home");
    const navigate = useNavigate();
    const { cartItem } = useContext(ShopContext); 

    const totalCartCount = Object.values(cartItem).reduce((sum, quantity) => sum + quantity, 0);

    // const [menu,setMenu]=useState(false)

    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('menu-visble')

        e.target.classList.toggle('open')
    }



    return (
        <div>
            <nav className='navbar'>
                <div className='logoo'>

                <img src={logo} alt="" className='logo'/>
                <h3>NAVEEN</h3>

                </div>
                

                <img src={dropDown} alt="" className='nav-drop'  onClick={ dropdown_toggle}/>
                <ul className='nav-menuu' ref={menuRef}>
                    <li onClick={() => setState("home")}><Link to='/' style={{ textDecoration: "none", color: "black" }}>Home</Link> {state === "home" ? <hr /> : <></>}</li>
                    <li onClick={() => setState("men")}><Link to='/men' style={{ textDecoration: "none", color: "black" }}>Men</Link> {state === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => setState("women")}><Link to='/women' style={{ textDecoration: "none", color: "black" }}>Women</Link>{state === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => setState("kids")}><Link to={'/kids'} style={{ textDecoration: "none", color: "black" }}>Kids</Link>{state === "kids" ? <hr /> : <></>}</li>
                </ul>

                <div className='login-cart'>
                    <button><Link to='/register' style={{ textDecoration: "none", color: "inherit" }}>Login</Link></button>
                    
                    {/* Cart with dynamic count */}
                    <div className='cart' onClick={() => navigate('/cart')}>
                        <img src={cart} alt="cart" />
                       <span>{totalCartCount}</span> {/* Show count only if > 0 */}
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;




// import React, { useState } from 'react'
// import './Navbar.css'
// import { useContext } from 'react'
// import logo from '../assets/logo.png'
// import cart from '../assets/cart_icon.png'
// import { Link,useNavigate } from 'react-router-dom'


// const Navbar = () => {
//     const [state,setState] = useState("home")

//     const navigate = useNavigate();



   



//   return (
//     <div>
//         <nav className='navbar'>
//             <img src={logo} alt="" />

//             <ul>
//                 <li onClick={()=>setState("home")}><Link to='/'  style={{ textDecoration: "none", color: "black" }}>Home</Link> {state==="home"? <hr/> : <></>}</li>

//                 <li onClick={()=>setState("men")}> <Link to='/men'  style={{ textDecoration: "none", color: "black" }}>Men</Link> {state==="men"? <hr/> : <></>}</li>

//                 <li onClick={()=>setState("women")}><Link to='/women'  style={{ textDecoration: "none", color: "black" }}>Women</Link>{state==="women"? <hr/> : <></>}</li>

//                 <li onClick={()=>setState("kids")}> <Link to={'/kids'}  style={{ textDecoration: "none", color: "black" }}>Kids</Link>{state==="kids"? <hr/> : <></>}</li>
//             </ul>

//             <div className='login-cart'>
//                 <button><Link to='/register' style={{textDecoration:"none",color:"inherit"}}>Login</Link></button>
//                 <div className='cart' onClick={()=>navigate('/cart')}>
//                 <img src={cart} alt="" />
//                 <span>0</span>

//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar