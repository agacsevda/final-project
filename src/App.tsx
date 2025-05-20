import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Layout from "@/components/layout/Layout";
import OrderLayout from "@/components/layout/OrderLayout";
import AllProducts, { linksLoader } from "./components/layout/AllProducts";
import ProductDetail from "./components/layout/ProductDetail";
import FrequentlyAskedQuestions from "./components/layout/FrequentlyAskedQuestions";
import { loader } from "./components/home/ProductCard";
import CategoryPage from "./components/layout/CategoryPage";
import Cart from "@/pages/Cart";
import { CartProvider } from "@/context/CartContext";
import OrderPage from "./components/layout/OrderPage";
import SuccessPage from "@/pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loader,
      },
      {
        path: "hakkimizda",
        element: <About />,
      },
      {
        path: "iletisim",
        element: <Contact />,
      },
      {
        path: "tumurunler/AllProducts",
        element: <AllProducts />,
        loader: linksLoader,
      },
      {
        path: "ProductDetail/:productSlug",
        element: <ProductDetail />,
      },
      {
        path: "FrequentlyAskedQuestions",
        element: <FrequentlyAskedQuestions />,
      },
      {
        path: "/products/main_category/:mainCategory",
        element: <CategoryPage />,
        loader: linksLoader,
      },
      {
        path: "sepetim",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/order",
    element: <OrderLayout />,
    children: [
      {
        index: true,
        element: <OrderPage />,
      },
    ],
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
