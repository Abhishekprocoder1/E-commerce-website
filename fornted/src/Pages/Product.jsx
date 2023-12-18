import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum';
import ProductDisplay from '../Component/Product_display/ProductDisplay';
import DiscriptionBox from '../Component/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Component/RelatedProducts/RelatedProduct';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const product=all_product.find((e)=>e.id===Number(ProductId))
  return (
    <div>
      <Breadcrum product={product} />
      < ProductDisplay  product={product}/>
      <DiscriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
