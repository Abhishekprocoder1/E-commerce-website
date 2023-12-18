import React, { useContext } from 'react'
import "./Navbar.css"
import { useState } from 'react';
import logo from "../Assets/logo.png"
import cart_icone from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const {getTotalcartItem}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
        <img  src={logo} alt=""/>
        </Link>
      <Link to='/' style={{textDecoration:'none'}}>
      <p>SHOPPER</p>
      </Link>
    
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link  style={{textDecoration:'none'}}  to='/'>Shop</Link>{menu==="shop" ? <hr /> :<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens" ? <hr /> :<></>}</li>
        <li onClick={()=>{setMenu("womans")}}><Link style={{textDecoration:'none'}} to='/womens'>Woman</Link>{menu==="womans" ? <hr /> :<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids" ? <hr /> :<></>}</li>
      </ul>
      <div className='nav-login-cart'>
         <Link to="/login"><button >Login</button></Link> 
         <Link to="/cart"><img src={cart_icone}/></Link> 
          <div className="nav-cart-count">{getTotalcartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar
