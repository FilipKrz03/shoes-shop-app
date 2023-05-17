import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart' , 
    initialState : {
        items : [] , 
        totalQuantity : 0 , 
    } , 
    reducers : {
        addItem(state , action){
            state.totalQuantity++;
            const areShoesInArray = state.items.find(item => item.id === action.payload.id);
            if(areShoesInArray){
            areShoesInArray.itemQuantity++;
            }
            else {
                const shoeObj = {
                    ...action.payload , 
                    itemQuantity : 1 , 
                }
                state.items.push(shoeObj);
            }
        }   , 
        removeItem () {

        }   
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;