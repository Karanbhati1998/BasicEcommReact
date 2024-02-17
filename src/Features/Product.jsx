import React from 'react'
import { addToCart } from './shopping/shoppingSlice'
import { useDispatch, useSelector } from 'react-redux'
import style from './ProductCard.module.css'
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit'
function Product({img,title,price,id}) {
 const cartData= useSelector((state)=>{
    return state.shoppingCart
  })
  const dispatch=useDispatch()
  const products={
    img:img,
    title:title,
    id:id,
    price:price,
    quantity:1
  }
function handleAddToCart(){
 for (const cart of cartData) {

    if(cart.id==id){
     toast.error( <p>item already in cart</p> ,{
      position: "bottom-right",
autoClose: 500,
hideProgressBar: true,
     })
     return
    }
  }
  dispatch(addToCart(products))
  toast.success(<p>Item added in cart</p>,{
   position: "top-right",
autoClose: 500,
hideProgressBar: true,
  })
}
  return (
    <div>
       <div className={style.Productcard}>
        <div className={style.imgbox}> 
        <img src={img} alt={title} className={style.img}/>
        </div>
        <p className={style.title}>{title}</p>
        <p className={style.price}>&#8377;{price}</p>
        <div>
        <button onClick={handleAddToCart} className={style.cartbtn}> Add To Cart</button>
        </div>
       
    </div>
    </div>
  )
}

export default Product