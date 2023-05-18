import { useSelector } from 'react-redux';
import classes from './Cart.module.scss';
import OrderList from './OrderList';


const Cart = () => {

    const totalPrice = useSelector(state => state.cart.totalPrice);

    return(
    <div className={classes.cart}>
        {totalPrice !== 0 && <h1>Your orders : </h1>}
        {totalPrice === 0 && <h1>Empty bakset </h1>}
        <OrderList />
        {totalPrice !== 0 && <p className={classes.price}>Total price : ${totalPrice}</p>}
    </div>
    )

}

export default Cart;