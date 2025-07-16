import React from 'react'
import './Footer.css'
import new_logo from '../assets/brand5.png'
import logo from '../assets/logo.png'
import insta from '../assets/instagram_icon.png'
import pin from '../assets/pintester_icon.png'
import whats from '../assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="logo-footer">
            <img src={new_logo} alt="" />
            {/* <img src={logo} alt="" />
            <h2>SHOPPERS</h2> */}
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
                <a href="https://www.instagram.com/_ck_charlee_/" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram Profile" />
                </a>

                <a href="https://in.pinterest.com/saravanannaveen2" target="_blank" rel="noopener noreferrer">
                <img src={pin} alt="Pinterest" />
                </a>                
                <a href="https://wa.me/8110927335" target="_blank" rel="noopener noreferrer">
                <img src={whats} alt="Chat on WhatsApp" />
                </a>
            </div>

            <hr />

            <p>Copyright &copy; - All Right Reserved</p>
        


    </div>
  )
}

export default Footer