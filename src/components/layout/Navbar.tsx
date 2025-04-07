import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-10">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:underline">
              Ana Sayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="text-sm font-medium hover:underline"
            >
              Hakkımızda
            </Link>
            <Link
              to="/iletisim"
              className="text-sm font-medium hover:underline"
            >
              İletişim
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-full max-w-sm items-center ">
            <Input type="email" placeholder="Armak İstediğiniz Ürün" />
            <Button type="submit">Ara</Button>
          </div>
          <Button variant="outline" size="sm">
            Giriş Yap
          </Button>
          <Button size="sm">Kaydol</Button>
        </div>
      </div>
      <div>
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
