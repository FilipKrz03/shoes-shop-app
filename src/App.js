import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainNavigation from "./pages/MainNavigation";
import ProductPage, { loader as productsLoader } from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage , {loader as productDetailLoader} from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductPage />, loader: productsLoader },
      {path:'products/:productId' , element : <ProductDetailPage /> , loader:productDetailLoader} ,
      {path:'cart' , element : <CartPage/>} 
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
