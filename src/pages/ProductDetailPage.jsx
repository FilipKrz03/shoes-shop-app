import { useLoaderData, json } from "react-router-dom";
import ProductDetail from "../components/ProductDetailPage/ProductDetail";
import './animations.scss'

const ProductDetailPage = () => {
  const details = useLoaderData();

  return (
    <div className="appear">
  <ProductDetail details={details} />
  </div>
  )
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.productId.slice(1);
  const response = await fetch(
    "https://shoes-app-a1845-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  );

  if (!response.ok) {
    return json({ message: "Could not find this product" }, { status: 500 });
  }
   else {
    const data = await response.json();
    return data[id];
  }
};
