import { Link } from "react-router-dom";
import classes from "./ProductItem.module.scss";

const ProductItem = (props) => {
  return (
    <Link to={props.id}>
      <div className={classes.item}>
        <img src={props.img} alt="shoes pic" />
        <p>{props.title}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
