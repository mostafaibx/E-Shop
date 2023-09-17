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
        { path: "/products/category/:catId", element: <ProductsPage /> },
        { path: "/products/:productId", element: <ItemPage /> },
        { path: "/Search/:searchText", element: <SearchResult /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/your-cart", element: <CartPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
