import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ItemPage from "./Components/ItemPage/ItemPage";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import { loader as productsLoader } from "./Components/Grid/Grid";
import { loader as categoriesLoader } from "./Components/Grid/Categories";

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
        { path: "/product/:productId", element: <ItemPage /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
