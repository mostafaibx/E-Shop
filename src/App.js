import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ItemPage from "./Pages/ItemPage/ItemPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import ProductsPage from "./Pages/ProductsPage";
import SearchResult from "./Pages/SearchResultPage";
import CartPage from "./Components/Cart/CartPage";
import PrivateRoute from "./Pages/PrivateRout";
import PrivateRouteLogin from "./Pages/PrivateRoutLogin";
import FavPage from "./Pages/FavPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "",
          element: <PrivateRoute />,
          children: [
            { path: "/your-cart", element: <CartPage /> },
            { path: "/fav", element: <FavPage /> },
          ],
        },
        {
          path: "",
          element: <PrivateRouteLogin />,
          children: [
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <SignUp /> },
          ],
        },
        { path: "/products/category/:catId", element: <ProductsPage /> },
        { path: "/products/:productId", element: <ItemPage /> },
        { path: "/Search/:searchText", element: <SearchResult /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
