import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 export const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";

export const PHOTO_URL = "https://fe1111.projects.academy.onlyjs.com";

interface PriceInfo {
  profit: number;
  total_price: number;
  discounted_price: number;
  price_per_servings: number;
  discount_percentage: number;
}

interface Product {
  id: string;
  name: string;
  short_explanation: string;
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
}

interface ApiResponse {
  status: string;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
  }
}

export const linksLoader = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=20&offset=0`);
  const data = await response.json() as ApiResponse;
  console.log(data);
  return data;
}

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${BASE_URL}/products?limit=20&offset=0`);
      const data = await response.json() as ApiResponse;
      setAllProducts(data.data.results);
      setProducts(data.data.results);
    };
    fetchProducts();

    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const title = params.get("name");
      const search = params.get("search");
      console.log("URL changed, new title:", title);
      setCategoryName(title);
      if (search) {
        setSearchTerm(search);
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
    }
  }, [searchTerm, allProducts]);

  return (
    <div className="mx-auto my-10 max-w-screen-xl px-4 py-8">
      <h2 className="mb-8 whitespace-normal text-center text-2xl font-bold md:text-3xl">
        {categoryName || "Tüm Ürünler"}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const discountPrice = product.price_info.discount_percentage;

          return (
            <div 
              onClick={() => navigate(`/ProductDetail/${product.slug}`)}  
              key={product.id}
              className="group relative flex flex-col overflow-hidden bg-white p-4 transition-transform hover:-translate-y-1"
            >
              <div className="relative mb-4 aspect-square overflow-hidden">
                {discountPrice && (
                  <span className="absolute right-0 top-0 z-10 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    %{discountPrice} <br/>İNDİRİM
                  </span>
                )}
                <img
                  src={PHOTO_URL+product.photo_src}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-1 text-center text-lg font-bold">
                  {product.name}
                </h3>
                <p className="mb-2 text-center text-sm text-gray-600">
                  {product.short_explanation}
                </p>
                <div className="mb-2 flex items-center justify-center gap-1">
                  {[...Array(Math.round(product.average_star))].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-2 text-center text-sm text-gray-600">
                  {product.comment_count} Yorum
                </p>
                <div className="mt-auto text-center">
                  <span className="text-center text-xl font-bold text-black">
                    {product.price_info.discounted_price
                      ? product.price_info.discounted_price
                      : product.price_info.total_price}{" "}
                    TL
                  </span>
                  {discountPrice && (
                    <span className="ml-2 text-sm text-green-600 line-through">
                      {product.price_info.total_price} TL
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
