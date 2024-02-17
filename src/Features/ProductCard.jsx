import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './shopping/shoppingSlice';
import { toast } from 'react-toastify';
import style from './ProductCard.module.css'
function ProductCard({id,img,title,price}) {
  const dispatch=useDispatch()
 const products={
    img:{img},
    title:{title},
    id:{id},
    price:{price}
  }
function handleAddToCart(){
  dispatch(addToCart())
}
  return (
    <div className={style.Productcard}>
        <div className={style.imgbox}> 
        <img src={img} alt={title} className={style.img}/>
        </div>
        <p className={style.title}>{title}</p>
        <p className={style.price}>&#8377;{price}</p>
        <button onClick={()=>{
            dispatch(addToCart())
          }}> data</button>
        <div>

        <button className={style.cartbtn} onClick={handleAddToCart}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard