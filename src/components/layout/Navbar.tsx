import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
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

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const Navbar = () => {
  const [position, setPosition] = React.useState("bottom");
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
            <DrawerContent className="left-0 h-full w-[300px] rounded-none">
              <DrawerHeader>
                <DrawerTitle>Menü</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex flex-col space-y-2">
                  <Input type="email" placeholder="Aramak İstediğiniz Ürün" />
                  <Button type="submit" className="w-full">
                    Ara
                  </Button>
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
            <img src="/src/assets/images/logo_siyah.jpg" alt="" />
          </Link>

          {/* Desktop Navigation */}
        </div>

        {/* Desktop Search and Auth */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex w-full max-w-sm items-center">
            <Input type="email" placeholder="Aradığınız Ürünü Yazın" />
            <Button type="submit">Ara</Button>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="px-6 py-3 text-lg text-[#919191] hover:text-[#919191]"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  Hesap
                  <FontAwesomeIcon icon={faAngleDown} className="me-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="none">
                    <Button variant="outline" size="sm" className="mr-5">
                      Giriş Yap
                    </Button>
                    <Button size="sm">Kaydol</Button>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="px-6 py-3 text-lg text-[#919191] hover:text-[#919191]"
                >
                  <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />
                  Sepetim
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="none">
                    <Button size="sm">Devam Et</Button>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
