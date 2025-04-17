import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faUser,
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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            <DrawerContent className="left-0 h-full w-[300px] rounded-none">
              <DrawerHeader>
                <DrawerTitle>Menü</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-4 p-4">
                <div className="relative">
                  <Input
                    width={"100%"}
                    type="text"
                    placeholder="Aramak İstediğiniz Ürün"
                    className="pl-10 pr-4 py-3 rounded-full bg-gray-100 placeholder:text-gray-500 text-sm w-full"
                  />
                  <Button type="submit" className="w-full">
                    Ara
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  {" "}
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
            <img src="/public/logo_siyah.jpg" alt="" />
          </Link>

          {/* Desktop Navigation */}
        </div>

        {/* Desktop Search and Auth */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative w-full max-w-sm">
            <Input type="email" placeholder="Aradığınız Ürünü Yazın" />
            <Button
              type="submit"
              className="absolute right-[-2px] top-1/2 h-8 w-8 -translate-y-1/2 px-8"
            >
              Ara
            </Button>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-md w-full px-8 py-3 text-gray-500 hover:text-[#919191]"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Hesap
                  <FontAwesomeIcon icon={faAngleDown} className="me-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Sheet>
              <SheetTrigger className="relative inline-block">
                <Button
                  variant="outline"
                  className="text-md px-4 py-0 text-gray-500"
                >
                  <div className="relative">
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                      0
                    </span>
                    <FontAwesomeIcon
                      size="sm"
                      icon={faBasketShopping}
                      className="mr-2 text-black"
                    />
                  </div>
                  Sepetim
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-between">
                <SheetHeader className="flex flex-col items-center justify-center">
                  <SheetTitle className="text-center text-2xl font-bold">
                    Sepetim
                  </SheetTitle>
                  <SheetDescription className="flex max-h-[500px] flex-col items-center justify-center overflow-y-auto">
                    Sepetinizdeki ürünleri görüntüleyebilirsiniz.
                    <div className="flex flex-col items-center justify-center">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quos.
                      </p>
                    </div>
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <Button className="w-full">Devam Et</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Cart Button */}

        <button className="md:hidden">
          <div className="relative">
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              0
            </span>
            <FontAwesomeIcon
              size="sm"
              icon={faBasketShopping}
              className="mr-2 text-black"
            />
          </div>
        </button>
      </div>
      <div className="relative  mt-4 md:hidden">
                  <Input
                    width={"100%"}
                    type="text"
                    placeholder="Aramak İstediğiniz Ürün"
                    className="pl-10 pr-4 py-3 rounded-full bg-gray-100 placeholder:text-gray-500 text-sm w-full"
                  />
                  
                </div>

      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
