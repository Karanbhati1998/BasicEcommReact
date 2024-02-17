import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../product";
const initialState=[]
const shoppingSlice=createSlice({
    name:"shoppingSlice",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.push(action.payload)
        },
        RemoveToCart:(state,action)=>{
            return state.filter(prevState=>{
                return prevState.id!==action.payload
            })
        },
        increaseQuantity:(state,action)=>{
           state.forEach((prevState)=>{
            if(prevState.id==action.payload){
                prevState.quantity+=1
            }
           })
        },
        decreaseQuantity:(state,action)=>{
             state.map(prevState=>{
                return {...prevState ,quantity:prevState.id==action.payload?prevState.quantity-=1:prevState.quantity }
            })
        },
    }
})
export const {addToCart,RemoveToCart,increaseQuantity,decreaseQuantity} = shoppingSlice.actions
export default shoppingSlice.reducer