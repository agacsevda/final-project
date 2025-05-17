import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Layout from "@/components/layout/Layout";
import AllProducts, { linksLoader } from "./components/layout/AllProducts";
import ProductDetail from "./components/layout/ProductDetail";
import FrequentlyAskedQuestions from "./components/layout/FrequentlyAskedQuestions";
import { loader } from "./components/home/ProductCard";
import CategoryPage from "./components/layout/CategoryPage";
import Cart from "@/pages/Cart";
import { CartProvider } from "@/context/CartContext";

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
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
