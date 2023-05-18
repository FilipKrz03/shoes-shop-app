import classes from './Cart.module.scss';
import OrderList from './OrderList';


const Cart = () => {

    return(
    <div className={classes.cart}>
        <h1>Your orders : </h1>
        <OrderList />
    </div>
    )

}

export default Cart;