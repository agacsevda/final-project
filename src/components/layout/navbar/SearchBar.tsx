import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SearchBarProps {
  isMobile?: boolean;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ isMobile = false, onSearchChange }: SearchBarProps) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/tumurunler/AllProducts?search=${encodeURIComponent(searchValue)}`);
    }
  };

  if (isMobile) {
    return (
      <form onSubmit={handleSubmit} className="relative mt-4 md:hidden">
        <Input
          width={"100%"}
          type="text"
          placeholder="Aradığınız ürünü yazınız"
          className="mb-2 w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
          onChange={handleChange}
          value={searchValue}
        />
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-sm">
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
  );
};

export default SearchBar; 

function onSearchChange(value: string) {
  throw new Error("Function not implemented.");
}
