import Header from "@/components/home/Header";
import ProductCard from "@/components/home/ProductCard";
import Container from "@/components/layout/Container";
import Slider from "@/components/layout/Slider";

const Home = () => {
  return (
    <section>
      <Header />
      <ProductCard />
      <Container />
      <div className="w-full my-10">
        <img width={"100%"} src="/src/assets/images/containeranabanner.png" />
      </div>
      <Slider />
    </section>
  );
};

export default Home;
