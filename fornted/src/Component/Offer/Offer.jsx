import React from 'react'
import './Offer.css';
import exculsive_img from '../Assets/exclusive_image.png';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
       <h1>Exclusive</h1>
       <h1>Offers For You</h1>
       <p>ONLY ON BEST SELLERS PRODUCT</p>
      <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exculsive_img} alt='' />
      </div>
    </div>
  )
}

export default Offer
