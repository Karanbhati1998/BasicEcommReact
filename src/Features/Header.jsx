import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import { IoCart } from "react-icons/io5";
import Modal from '../UI/Modal';
import Cart from './Cart';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
function Header() {
  const cartData=useSelector((state)=>{
    return state.shoppingCart
  })
 const  quantity= cartData.reduce((acc,current)=>{
   return acc+current.quantity
  },0)
  const[modal,setModel]=useState(false)
  useEffect(()=>{
    if(modal){
      document.documentElement.style.overflowY='hidden'
    }else{
      document.documentElement.style.overflowY='auto'

    }
  },[modal])
  function removeModal(){
    setModel(false)
  }
  return (
    <div className={style.header}>
        <div className={`container ${style.headerbox}`}>
            <h3>ARC Logo</h3>
            <div  className={style.headerCart} onClick={()=>{
              setModel(true)
            }}>
                    <div className={style.cart}>
                    <IoCart className={style.carticon} />
                    <p className={style.cartNumber}>{quantity?quantity:0}</p>
                    </div>
                    <p className='bold'>Cart</p>
            </div>
          
        </div>
        {modal &&
          <Modal removeModal={removeModal}>
            <Cart />
          </Modal>
        }
    </div>
  )
}

export default Header