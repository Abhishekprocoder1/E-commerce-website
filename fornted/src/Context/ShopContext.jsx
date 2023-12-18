import React, { createContext, useState } from "react";
import all_product from "../Component/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaltCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaltCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  };

  const removeaddToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount=()=>{
    let totalAmont=0;
    for( const item in cartItem)
    {
      if(cartItem[item]>0)
      {
            let iteminfo=all_product.find((product)=>product.id==Number(item))
            totalAmont+=iteminfo.new_price*cartItem[item]
      }
      
    }
    return totalAmont;
  }

  const getTotalcartItem=()=>{
    let totalitem=0;
    for(const item in cartItem)
    {
      if(cartItem[item]>0)
      {
        totalitem+=cartItem[item];
      }
    }
    return totalitem;

  }

  const contextValue = {getTotalcartItem,getTotalCartAmount,all_product, cartItem, addToCart, removeaddToCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
