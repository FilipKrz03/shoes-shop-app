import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainNavigation from './pages/MainNavigation';

const router = createBrowserRouter([
{path : '/' , element:<MainNavigation /> , children : [
  {index : true , element:<HomePage />} ,
]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
