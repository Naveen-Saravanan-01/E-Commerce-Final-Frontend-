import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import insta from '../assets/instagram_icon.png'
import pin from '../assets/pintester_icon.png'
import whats from '../assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="logo-footer">
            <img src={logo} alt="" />
            <h2>SHOPPERS</h2>
        </div>

        <div className="list">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

            <div className='logos'>
                <img src={insta} alt="" />
                <img src={pin} alt="" />
                <img src={whats} alt="" />
            </div>

            <hr />

            <p>Copyright &copy; - All Right Reserved</p>
        


    </div>
  )
}

export default Footer