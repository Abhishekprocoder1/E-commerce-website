import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import Item from '../Component/Item/item';
import dropdown_icone from '../Component/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} />
      <div className="Shop-category-index">
          <p>
              <span>Showing 1-12</span>out of 36 products
          </p>
          <div className="Shopcategory-sort">
            Sort by <img src={dropdown_icone}  />
          </div>
      </div>
        <div className="shopCategory-product">
             {
                 all_product.map((item,i)=>{
              
                if(props.category==item.category)
                {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
                else
                {
                return null;
                }
             }

             )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
