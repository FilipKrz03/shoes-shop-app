import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart' , 
    initialState : {
        items : [] , 
        totalQuantity : 0 , 
    } , 
    reducers : {
        addItem(){

        }   , 
        removeItem () {

        }   
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;