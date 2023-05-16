import ProductsList from "../components/ProductsPage/ProductsList";

const ProductPage = () => {
return(
    <ProductsList />
)
}

export default ProductPage;


export const loader = async() => {
    const response = await fetch('https://shoes-app-a1845-default-rtdb.europe-west1.firebasedatabase.app/products.json');
    if(!response.ok){

    }
    else {
        const data = await response.json();
        return data;
    }
   
}