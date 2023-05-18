import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./OrderItem.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItem = (props) => {

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addExistingItem(props.id));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  }

  const deleteHandler = () => {
    dispatch(cartActions.removeAllItems(props.id));
  }

  return (
    <div className={classes.item}>
      <img src={props.img} alt="shoes" />
      <div className={classes.quantity}>
        <p>Items : </p>
        <div className={classes["quantity-changer"]}>
          <RemoveIcon className={classes.remove}
           fontSize="large"
           onClick = {removeItemHandler}
           />
          <span className={classes.value}>{props.quantity}</span>
          <AddIcon
            className={classes.add}
            fontSize="large"
            onClick={addItemHandler}
          />
        </div>
      </div>
      <div className={classes.info}>
        <p>{props.title}</p>
        <span>${props.quantity * props.price}</span>
      </div>
      <DeleteIcon fontSize="large" className={classes.bin} onClick = {deleteHandler} />
    </div>
  );
};

export default OrderItem;
