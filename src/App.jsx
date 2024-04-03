import Home from "./Pages/Home"
import AllProducts from './Pages/AllProducts'
import Categories from "./Pages/Categories";
import Basket from "./Pages/Basket";
import Authorization from "./Pages/Authorization";
import Product from "./Pages/Product";
import Favorite from "./Pages/Favorite"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Registration from "./Pages/Registration";
import Profile from "./Pages/Profile";

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
        path: "favourite",
        element: <Favorite />
      }]
  },
  {
    path: "authorization",
    element: <Authorization />
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "profile",
    element: <Profile />
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
