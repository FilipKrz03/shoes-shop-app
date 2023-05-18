import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart' , 
    initialState : {
        items : [] , 
        totalQuantity : 0 , 
        totalPrice : 0 , 
    } , 
    reducers : {
        addItem(state , action){
            state.totalPrice+= action.payload.price;
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
        addExistingItem(state , action){
            state.totalQuantity++;
            const item = state.items.find(item => item.id === action.payload);
            item.itemQuantity++;
            state.totalPrice+= item.price;
        } , 
        removeItem (state , action) {
            state.totalQuantity--;
            const item = state.items.find(item => item.id === action.payload);
            state.totalPrice-= item.price;
            if(item.itemQuantity === 1){
              const newItems =  state.items.filter(item => item.id !== action.payload);
              state.items = newItems;
            }
            else {
                item.itemQuantity--;
            }

        }  , 
        removeAllItems(state , action){
            const item = state.items.find(item => item.id === action.payload);
            state.totalPrice-= item.price * item.itemQuantity;
            state.totalQuantity -= item.itemQuantity;
            state.items = state.items.filter(item => item.id !== action.payload);
        }  , 
        loadCartData (state , action) {
            state.items = action.payload.items || [];
            state.totalQuantity = action.payload.totalQuantity || 0;
            state.totalPrice = action.payload.totalPrice || 0;
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;