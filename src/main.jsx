import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./auth/Login/Login.jsx";
import Register from "./auth/Register/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import BottleDetails from "./productRoutes/Bottles/BottleDetails.jsx";
import ShoeDetails from "./productRoutes/Shoes/ShoeDetails.jsx";
import BagDetails from "./productRoutes/Bags/BagDetails.jsx";
import BootDetails from "./productRoutes/Boots/BootDetails.jsx"
import ThemeProvider from "./context/ThemeProvider.jsx";
import ReviewForm from "./components/ReviewForm/ReviewForm.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
// import CartProvider from "./context/CartProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reviewForm",
        element: <ReviewForm></ReviewForm>,
      },
      {
        path: "/bottleDetails/:id",
        element: <BottleDetails />,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:5000/products");
          const data = await res.json();
          const bottle = data.find((item) => item.id === parseInt(params.id));
          return bottle;
        },
      },
      {
        path: "/shoeDetails/:id",
        element: <ShoeDetails></ShoeDetails>,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:5000/products");
          const data = await res.json();
          const shoe = data.find((item) => item.id === parseInt(params.id));
          return shoe;
        },
      },
      {
        path: "/bagDetails/:id",
        element: <BagDetails></BagDetails>,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:5000/products");
          const data = await res.json();
          const bag = data.find((item) => item.id === parseInt(params.id));
          return bag;
        },
      },
      {
        path: "/bootDetails/:id",
        element: <BootDetails></BootDetails>,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:5000/products");
          const data = await res.json();
          const boot = data.find((item) => item.id === parseInt(params.id));
          return boot;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
