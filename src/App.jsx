import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import ShopCategory from './pages/ShopCategory'
import Footer from './components/Footer'
import boyBanner from './assets/banner_mens.png'
import girlBanner from './assets/banner_women.png'
import kidBanner from './assets/banner_kids.png'
import LoginSignup from './pages/LoginSignup'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'





const App = () => {
  return (
    <div className="app-container">

      <BrowserRouter>

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />}  />

            <Route path='/men' element={<ShopCategory  image={boyBanner} category="men"/>}/>

            <Route path='/women' element={<ShopCategory  image={girlBanner} category="women"/>} />

            <Route path='/kids' element={<ShopCategory  image={kidBanner} category="kid"/>} />

            <Route path='/register' element={<LoginSignup/>} />

            <Route path='/login' element={<LoginPage/>} />

            <Route path='/cart' element={<Cart/>} />

            

<Route path='/product/:product_id' element={<ProductPage />} />

            

          </Routes>
        </div>

        <Footer />


         
          

      </BrowserRouter>
    </div>
  )
}

export default App