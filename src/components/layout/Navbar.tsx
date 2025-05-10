import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faUser,
  faTrash,
  faSquareCaretRight
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

import { useCartStore } from "@/lib/store/cartStore";
import { PHOTO_URL } from "@/components/layout/AllProducts";

const Navbar = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                    className="w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
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
            <img src="/logo_siyah.jpg" alt="" />
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
              <DropdownMenuContent className="w-44 text-center">
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center">Üye Girişi</DropdownMenuItem>
                <DropdownMenuItem>Üye Ol</DropdownMenuItem>
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
                      {totalCount}
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
              <SheetContent className="p-0 w-[400px] max-w-full flex flex-col h-full">
                {/* Başlık */}
                <div className="text-center font-bold text-lg py-3 border-b bg-white sticky top-0 z-10">SEPETİM</div>
                {/* Ürünler */}
                <div className="flex-1 min-h-[200px] bg-[#fafafa] overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="text-center text-gray-500 mt-20">Sepetinizde ürün bulunmamaktadır.</div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center px-2 py-4 bg-white">
                          <img
                            src={PHOTO_URL + item.photo_src}
                            alt={item.name}
                            className="h-14 w-14 object-contain rounded mr-3 border"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm">{item.name}</div>
                            {item.selectedAroma && (
                              <div className="text-xs text-gray-500">{item.selectedAroma}</div>
                            )}
                            {item.selectedSize && (
                              <div className="text-xs text-gray-500">{item.selectedSize.total_services}gr</div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                              title="Kaldır"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="border rounded w-7 h-7 flex items-center justify-center text-lg"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="border rounded w-7 h-7 flex items-center justify-center text-lg"
                            >
                              +
                            </button>
                          </div>
                          <div className="ml-4 font-bold whitespace-nowrap text-lg">{item.price * item.quantity} TL</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Alt bar */}
                {items.length > 0 && (
                  <div className="absolute left-0 right-0 bottom-0 w-full bg-white border-t z-20 shadow-md p-0">
                    <div className="flex items-center justify-end px-4 pt-2 pb-0">
                      <div className="text-[11px] font-normal text-black tracking-tight text-right w-full">TOPLAM {total.toFixed(2)} TL</div>
                    </div>
                    <div className="px-4 pb-2 pt-1">
                      <button className="w-full bg-black text-white rounded py-2 text-xs font-bold flex items-center justify-center gap-1">
                        DEVAM ET <FontAwesomeIcon icon={faSquareCaretRight} className="text-white" style={{fontSize: '13px'}} />
                      </button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Cart Button */}
        <button className="md:hidden">
          <div className="relative">
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              {totalCount}
            </span>
            <FontAwesomeIcon
              size="sm"
              icon={faBasketShopping}
              className="mr-2 text-black"
            />
          </div>
        </button>
      </div>
      <div className="relative mt-4 md:hidden">
        <Input
          width={"100%"}
          type="text"
          placeholder="Aramak İstediğiniz Ürün"
          className="w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
        />
      </div>

      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
