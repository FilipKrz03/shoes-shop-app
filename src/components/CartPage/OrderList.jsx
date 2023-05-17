import OrderItem from './OrderItem';
import classes from './OrderList.module.scss';
import { useSelector } from 'react-redux';

const OrderList = () => {

    const items = useSelector(state => state.cart.items);

    const order = items.map(item => {
        return (
            <OrderItem
            id = {item.id}
            key = {item.id}
            quantity = {item.itemQuantity}
            title = {item.title}
            price = {item.price}
            img = {item.img}  
            />
        );
    });

    return(
        <div className={classes.orders}>
            {order}
        </div>
    );

}


export default OrderList;