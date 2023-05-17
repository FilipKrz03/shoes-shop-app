import classes from './OrderItem.module.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const OrderItem = (props) => {

    return(
        <div className={classes.item}>
            <img src={props.img} alt='shoes' />
            <div className={classes.quantity}>
            <p>Items : </p>
            <div className={classes['quantity-changer']}>
            <RemoveIcon className={classes.remove} fontSize='large' />
            <span className={classes.value}>{props.quantity}</span>
            <AddIcon className={classes.add} fontSize='large' />
            </div>
            </div>
            <div className={classes.info}>
                <p>{props.title}</p>
                <span>${props.quantity * props.price}</span>
            </div>
        </div>
    )

}

export default OrderItem;