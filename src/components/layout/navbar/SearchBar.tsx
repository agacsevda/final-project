import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  isMobile?: boolean;
}

const SearchBar = ({ isMobile = false }: SearchBarProps) => {
  if (isMobile) {
    return (
      <div className="relative mt-4 md:hidden">
        <Input
          width={"100%"}
          type="text"
          placeholder="Aradığınız ürünü yazınız"
          className="mb-2 w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="Lütfen bir ürün arayınız"
        className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchBar; 