import { configureStore, createReducer } from "@reduxjs/toolkit";
import productSlice  from '../slices/productSlice'
import wishlistSlice from '../slices/wishlistSlice'
import cartSlice from '../slices/cartSlice'
const cartSrore=configureStore({
    reducer:{

        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})

export default cartSrore