import React from 'react'
import style from './cartItme.module.css'
import { RxCross2 } from "react-icons/rx";
import { IoIosAdd,IoMdRemove  } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart,RemoveToCart,decreaseQuantity,increaseQuantity } from './shopping/shoppingSlice';
function Cartitem({id,img,title,price,quantity}) {
  const dispatch=useDispatch()
  const shppingData=useSelector((state)=>{
    return state.shoppingCart
  })
  return (
    <div className={style.Cartitem}>
      <div className={style.left}>
        <img src={img} alt={title}  className={style.img}/>
        <h3 className={style.title}>{title}</h3>
      </div>
      <div className={style.right}>
        <div className={style.btngrp}>
          <button className={style.btn} onClick={()=>
           dispatch(increaseQuantity(id))
          }>
          <IoIosAdd  className={style.icon}/>
          </button>
          <p className={style.quantity}>{quantity}</p>
         
          <button className={style.btn} onClick={()=>{
           shppingData.forEach(data => {
            if(data.id==id){
            if(data.quantity<=1){
              dispatch(RemoveToCart(id))
            }else{
              dispatch(decreaseQuantity(id))
            }}
           });
          }}>
            <IoMdRemove  className={style.icon}/>
          </button>
        </div>
          <p className={style.price}>&#8377;{price * quantity}</p>
          <button className={style.btn} onClick={()=>{
            dispatch(RemoveToCart(id))
          }}>
            <RxCross2 className={style.icon}/>
          </button>
      </div>
    </div>
  )
}

export default Cartitem