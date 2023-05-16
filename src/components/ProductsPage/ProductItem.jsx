import classes from './ProductItem.module.scss';

const ProductItem = (props) => {
return(
    <div className={classes.item}>
        <h1>{props.title}</h1>
        <img src={props.img} alt='shoes pic' />
        <p>{props.price}</p>
    </div>
)
}

export default ProductItem;