import React, { useState } from 'react'
import Cartitem from './Cartitem'
import style  from './cart.module.css'
import { useSelector } from 'react-redux'
function Cart() {
  const [price,setPrice]=useState(0)
 const cartItem= useSelector((state)=>{
        return state.shoppingCart
  })
  const totalPrice= cartItem.reduce((acc,prevdata)=>{
  return acc+prevdata.price * prevdata.quantity
  },0)
if(cartItem.length==0){
  return <h1 className={style.emptyCart}>No item in cart bro</h1>
}
  return (
    <div className={style.cart}>
        <h1>Cart</h1>
        {
          cartItem.map((cartdata)=>{
          return <Cartitem key={cartdata.id}  {...cartdata} />
          })
        }
        <h1>Total:&#8377;{totalPrice}</h1>
    </div>
  )
}
// 
export default Cart