import {configureStore} from '@reduxjs/toolkit'
import shoppingSlice from './Features/shopping/shoppingSlice'
const store=configureStore({
    reducer:{
        shoppingCart:shoppingSlice
    }
})
export default store