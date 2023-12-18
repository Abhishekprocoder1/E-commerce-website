import React from 'react'
import './Footer.css';
import footer_logo_img from '../Assets/logo_big.png'
import instagram_icon from  '../Assets/instagram_icon.png';
import pintester_icon from  '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footer_logo_img } />
        <Link to='/' style={{textDecoration:'none'}}>

        <p>SHOPPER</p>

        </Link>
        
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
         <div className="footer-icon-container">
          <img src={instagram_icon} />
         </div>

         <div className="footer-icon-container">
          <img src={pintester_icon} />
         </div>

         <div className="footer-icon-container">
          <img src={whatsapp_icon} />
         </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> Copyright @ 2023 -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
