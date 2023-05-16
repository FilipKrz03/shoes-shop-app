import { useLoaderData } from "react-router-dom";
import classes from './ProductsList.module.scss';

const ProductsList = () => {
    
    const data = useLoaderData();
    console.log(data);

    return(
        <h2>Products List</h2>
    )
}

export default ProductsList;