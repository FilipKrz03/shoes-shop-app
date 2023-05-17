import classes from './ProductItem.module.scss';

const ProductItem = (props) => {
return(
    <div className={classes.item}>
         <img src={props.img} alt='shoes pic' />
        <p>{props.title}</p>
        <p className={classes.price}>${props.price}</p>
    </div>
)
}

export default ProductItem;