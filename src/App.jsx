import Home from "./Pages/Home"
import AllProducts from './Pages/AllProducts'
import Categories from "./Pages/Categories";
import Basket from "./Pages/Basket";
import Authorization from "./Pages/Authorization";
import Product from "./Pages/Product";
import Favorite from "./Pages/Favorite"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products",
        element: <AllProducts />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "basket",
        element: <Basket />
      },
      {
        path: "authorization",
        element: <Authorization />
      },
      {
        path: "favourite",
        element: <Favorite />
      }]
  },
])

function App() {



  return (
    <div>
      <RouterProvider router={router} >
        <Layout />
      </RouterProvider>
    </div>
  )
}

export default App;
