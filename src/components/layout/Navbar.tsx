import { Link, useNavigate } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import MobileMenu from "./navbar/MobileMenu";
import SearchBar from "./navbar/SearchBar";
import UserMenu from "./navbar/UserMenu";
import CartSheet from "./navbar/CartSheet";
import { useState } from "react";

const navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <Link to="/" className="text-xl font-bold">
            <img src="/logo_siyah.jpg" alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <SearchBar onSearchChange={handleSearchChange} />
        </div>
        <div className="flex items-center gap-4">
          <UserMenu />
          <CartSheet />
        </div>
      </div>
      <div className="md:hidden">
        <SearchBar isMobile onSearchChange={handleSearchChange} />
      </div>
      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </div>
  );
};

export default navbar;
