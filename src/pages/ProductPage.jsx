import React from 'react'
import './css/ProductPage.css'
import { useContext } from 'react'
import { ShopContext } from '../components/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums'
import ProductDisplay from '../components/ProductDisplay'
import RelatedProducts from '../components/RelatedProducts'

const ProductPage = () => {
  const {all_product} = useContext(ShopContext)

  const {product_id} = useParams();

 



  if(!all_product || all_product.length === 0) {
    return <div>Loading products...</div>;
  }


  const product =all_product.find((e) => e.id == Number(product_id));

  if (!product) {
    return <div style={{marginTop:"100px"}}>Product not found!</div>;
  }

return (
  <div className='product-div'>
    <Breadcrums product={product}/>

    <ProductDisplay product={product} />

    <RelatedProducts />
  </div>
  )
}

export default ProductPage