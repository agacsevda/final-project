import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";
import { Menu, ShoppingCart } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-10">
        {/* Mobile Menu Button with Drawer */}
        <div className="md:hidden">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <button>
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[300px] left-0 rounded-none">
              <DrawerHeader>
                <DrawerTitle>Menü</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-4 p-4">
                <Link to="/" className="text-lg font-medium">
                  Ana Sayfa
                </Link>
                <Link to="/hakkimizda" className="text-lg font-medium">
                  Hakkımızda
                </Link>
                <Link to="/iletisim" className="text-lg font-medium">
                  İletişim
                </Link>
                <div className="flex flex-col space-y-2">
                  <Input type="email" placeholder="Aramak İstediğiniz Ürün" />
                  <Button type="submit" className="w-full">Ara</Button>
                </div>
                <Button variant="outline" className="w-full">
                  Giriş Yap
                </Button>
                <Button className="w-full">Kaydol</Button>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Kapat</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:underline">
              Ana Sayfa
            </Link>
            <Link to="/hakkimizda" className="text-sm font-medium hover:underline">
              Hakkımızda
            </Link>
            <Link to="/iletisim" className="text-sm font-medium hover:underline">
              İletişim
            </Link>
          </div>
        </div>

        {/* Desktop Search and Auth */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex w-full max-w-sm items-center">
            <Input type="email" placeholder="Aramak İstediğiniz Ürün" />
            <Button type="submit">Ara</Button>
          </div>
          <Button variant="outline" size="sm">
            Giriş Yap
          </Button>
          <Button size="sm">Kaydol</Button>
        </div>

        {/* Mobile Cart Button */}
        <button className="md:hidden">
          <ShoppingCart size={24} />
        </button>
      </div>

      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
