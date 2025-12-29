import { createBrowserRouter } from "react-router";
import Layout from "./routes/Layout";
import Home from "./routes/home/Home";
import Products from "./routes/shop/products/Products";
import ProductDetails from "./routes/shop/productDetails/ProductDetails";
import Categories from "./routes/shop/categories/Categories";
import CategoryProducts from "./routes/shop/categoryProducts/CategoryProducts";
import Cart from "./routes/shop/cart/Cart";
import Checkout from "./routes/shop/checkout/Checkout";
import Account from "./routes/account/Account";
import Login from "./routes/account/Login";
import Signup from "./routes/account/Signup";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "categories", element: <Categories /> },
      { path: "categories/:slug", element: <CategoryProducts /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      {
        path: "account",
        children: [
          { index: true, element: <Account /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
