import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,actionfromView)=>{
            state.push(actionfromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})

export const {addToWishlist,removeItem}=wishlistSlice.actions
export default wishlistSlice.reducer