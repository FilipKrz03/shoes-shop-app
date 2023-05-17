import { json, useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsPage/ProductsList";

const ProductPage = () => {
  const productsData = useLoaderData();
  return <ProductsList productsData={productsData} />;
};

export default ProductPage;

export const loader = async () => {
  const response = await fetch(
    "https://shoes-app-a1845-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );

  if (!response.ok) {
    return json({ message: "Could not load products" }, { status: 500 });
  } else {
    return response;
  }
};
