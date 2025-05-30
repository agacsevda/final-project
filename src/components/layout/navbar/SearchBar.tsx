import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { BASE_URL, PHOTO_URL } from "../AllProducts";

interface SearchBarProps {
  isMobile?: boolean;
  onSearchChange: (value: string) => void;
}

interface PriceInfo {
  profit: number | null;
  total_price: number | null;
  discounted_price: number | null;
  price_per_servings: number | null;
  discount_percentage: number | null;
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

const SearchBar = ({ isMobile = false, onSearchChange }: SearchBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const debouncedSearch = useDebounce(searchValue, 300);

  useEffect(() => {
    if (location.pathname === "/") {
      setSearchValue("");
    }
  }, [location.pathname]);

  useEffect(() => {
    handleSearchResults();
  }, [debouncedSearch]);

  const handleSearchResults = async () => {
    if (searchValue.length > 1) {
      try {
        const response = await fetch(
          `${BASE_URL}/products/?limit=1000&search=${debouncedSearch}`
        );
        const data = await response.json();
        setSearchResults(data.data.results);
        console.log("results", data.data.results);
        console.log("data", data);
        setShowResults(true);
      } catch (error) {
        console.log("Ürün bulunamadı: ", error);
        setSearchResults([]);
        setShowResults(true);
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/tumurunler/AllProducts?search=${encodeURIComponent(searchValue)}`);
      setShowResults(false);
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/urun/${productId}`);
    setShowResults(false);
  };

  const renderSearchResults = () => {
    if (!showResults) return null;

    if (searchResults.length === 0) {
      return (
        <div className="absolute left-0 mt-10 min-w-[350px] max-w-[500px] rounded-lg bg-white shadow-lg p-8 z-50 flex items-center justify-center">
          <span className="text-center text-lg text-gray-700">{`'${searchValue}' adında bir ürün bulunamadı`}</span>
        </div>
      );
    }

    return (
      <div className="absolute left-0 mt-10 min-w-[350px] max-w-[500px] rounded-lg bg-white shadow-lg p-4 z-50">
        <ul className="max-h-96 overflow-auto space-y-3">
          {searchResults.map((product) => (
            <li 
              key={product.id}
              className="flex items-center gap-4 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => {
                setShowResults(false);
                navigate(`/ProductDetail/${product.slug}`);
              }}  
            >
              <div className="flex-shrink-0">
                <img
                  src={PHOTO_URL + product.photo_src}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md border bg-gray-100"
                  onError={e => (e.currentTarget.src = '/no-image.png')}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center flex-wrap">
                  <span className="font-semibold text-base text-gray-900 truncate block max-w-[160px]">{product.name}</span>
                  <span className="font-bold text-base text-black whitespace-nowrap">{product.price_info.discounted_price ? product.price_info.discounted_price : product.price_info.total_price} TL</span>
                </div>
                <div className="text-gray-500 text-xs mt-1 truncate block max-w-[200px]">{product.short_explanation}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  if (isMobile) {
    return (
      <div className="relative mt-4 md:hidden">
        <form onSubmit={handleSubmit}>
          <Input
            width={"100%"}
            type="text"
            placeholder="Aradığınız ürünü yazınız"
            className="mb-2 w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
            onChange={handleChange}
            value={searchValue}
          />
        </form>
        {renderSearchResults()}
      </div>
    );
  }

  return (
    <div className="relative flex w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder="Lütfen bir ürün arayınız"
          className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
          onChange={handleChange}
          value={searchValue}
        />
        <button
          type="submit"
          className="rounded-r-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
        >
          Ara
        </button>
      </form>
      {renderSearchResults()}
    </div>
  );
};

export default SearchBar;

function onSearchChange(value: string) {
  throw new Error("Function not implemented.");
}
