import { RouterProvider, createHashRouter } from "react-router-dom";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import MainNavigation from "./pages/MainNavigation";
import ProductPage, { loader as productsLoader } from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage , {loader as productDetailLoader} from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import { saveCartData , getCartData } from "./store/cart-actions";


const router = createHashRouter([
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

let isInitial = true;

function App() {
 
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
 


  useEffect(()=>{
    dispatch(getCartData());
  }, [dispatch]);


  useEffect(()=>{
    if(isInitial){
    isInitial = false;
      return;
    }
    if(!isInitial){
    dispatch(saveCartData(cartData))
    }
  }, [cartData , dispatch ,]);


  return <RouterProvider router={router} />;
}

export default App;
