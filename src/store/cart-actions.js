import {cartActions} from './cart-slice';

export const saveCartData = (data) => {
    return () => {
        localStorage.setItem('cartData' , JSON.stringify(data));
    }
}


export const getCartData = () => {
    return(dispatch) => {
        const cartData = JSON.parse(localStorage.getItem('cartData'));
        const cartObj = {
            items : cartData.items , 
            totalQuantity : cartData.totalQuantity , 
            totalPrice : cartData.totalPrice , 
        }
        dispatch(cartActions.loadCartData(cartObj));
    }
}