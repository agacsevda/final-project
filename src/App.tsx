import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Layout from "@/components/layout/Layout";
import AllProducts, { linksLoader } from "./components/layout/AllProducts";
import ProductDetail from "./components/layout/ProductDetail";
import FrequentlyAskedQuestions from "./components/layout/FrequentlyAskedQuestions";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/tumurunler/AllProducts" element={<AllProducts/>} loader={linksLoader} />
          <Route path="/ProductDetail" element={<ProductDetail/>} />
          <Route path="/FrequentlyAskedQuestions" element={<FrequentlyAskedQuestions/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
