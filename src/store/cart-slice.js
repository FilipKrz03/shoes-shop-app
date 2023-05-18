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
        addExistingItem(state , action){
            state.totalQuantity++;
            const item = state.items.find(item => item.id === action.payload);
            item.itemQuantity++;
        } , 
        removeItem (state , action) {
            state.totalQuantity--;
            const item = state.items.find(item => item.id === action.payload);
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
            state.totalQuantity -= item.itemQuantity;
            state.items = state.items.filter(item => item.id !== action.payload);
        }  
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;