import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainNavigation from './pages/MainNavigation';
import ProductPage from './pages/ProductsPage';

const router = createBrowserRouter([
{path : '/' , element:<MainNavigation /> , 
children : [
  {index : true , element:<HomePage />} ,
  {path : 'products'  , element : <ProductPage />}
]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
