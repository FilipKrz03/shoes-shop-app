import { useLoaderData } from "react-router-dom";
import classes from './ProductsList.module.scss';
import ProductItem from "./ProductItem";

const ProductsList = () => {
    
    const productsData = useLoaderData();


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
        <div className={classes.list}>
        {products}
        </div>
    );
}

export default ProductsList;