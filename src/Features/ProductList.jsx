import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import style from './products.module.css'
import Product from './Product'
import { productData } from '../product'
function ProductList() {
  return (
    <div className={style.productBox}>
        <div className='container'>
        <h2 className={style.productHeading}>Best Of ARC</h2>
        <div className={style.Products}>
        {
            productData.map((product)=>{
                return  <Product key={product.id} {...product}/>
            })
        }
        </div>
        </div>
    </div>
  )
}

export default ProductList