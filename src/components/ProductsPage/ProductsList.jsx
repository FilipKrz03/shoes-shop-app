import classes from './ProductsList.module.scss';
import ProductItem from "./ProductItem";

const ProductsList = ({productsData}) => {
     
    const products = productsData.map(product => {
        return (
            <ProductItem
            id = {product.id}
            key = {product.id}
            img = {product.img}
            price = {product.price}
            title = {product.title}
            />
        );
    });

    return(
        <>
        <div className={classes.description}>
        <p> <span>Sneakers </span>
Every sneaker you want is always available and verified by our store.
 Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike, Yeezy and more!</p>
        </div>
        <div className={classes.list}>
        {products}
        </div>
        </>
    );
}

export default ProductsList;