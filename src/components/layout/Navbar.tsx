import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import MobileMenu from "./navbar/MobileMenu";
import SearchBar from "./navbar/SearchBar";
import UserMenu from "./navbar/UserMenu";
import CartSheet from "./navbar/CartSheet";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-6">
          <MobileMenu />
          <Link to="/" className="text-xl font-bold">
            <img src="/logo_siyah.jpg" alt="" />
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <SearchBar />
          <UserMenu />
          <CartSheet />
        </div>

        <CartSheet isMobile />
      </div>

      <SearchBar isMobile />

      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
