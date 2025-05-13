import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "@/components/shared/Category";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faUser,
  faTrash,
  faSquareCaretRight,
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
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
                    placeholder="Aramak istediğiniz ürünü yazınız"
                    className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
                  />
                  <Button
                    type="submit"
                    className="rounded-r-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
                  >
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
                <DropdownMenuItem className="text-center">
                  Üye Girişi
                </DropdownMenuItem>
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
              <SheetContent className="flex h-full w-[400px] max-w-full flex-col p-0">
                {/* Başlık */}
                <div className="sticky top-0 z-10 border-b bg-white py-3 text-center text-lg font-bold">
                  SEPETİM
                </div>
                {/* Ürünler */}
                <div className="min-h-[200px] flex-1 overflow-y-auto bg-[#fafafa]">
                  {items.length === 0 ? (
                    <div className="mt-20 text-center text-gray-500">
                      Sepetinizde ürün bulunmamaktadır.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center bg-white px-2 py-4"
                        >
                          <img
                            src={PHOTO_URL + item.photo_src}
                            alt={item.name}
                            className="mr-3 h-14 w-14 rounded border object-contain"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold">
                              {item.name}
                            </div>
                            {item.selectedAroma && (
                              <div className="text-xs text-gray-500">
                                {item.selectedAroma}
                              </div>
                            )}
                            {item.selectedSize && (
                              <div className="text-xs text-gray-500">
                                {item.selectedSize.total_services}gr
                              </div>
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
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1),
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded border text-lg"
                            >
                              -
                            </button>
                            <span className="w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded border text-lg"
                            >
                              +
                            </button>
                          </div>
                          <div className="ml-4 whitespace-nowrap text-lg font-bold">
                            {(item.price * item.quantity).toLocaleString(
                              "tr-TR",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}{" "}
                            TL
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Alt bar */}
                {items.length > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 z-20 w-full border-t bg-white p-0 shadow-md">
                    <div className="flex items-center justify-end px-4 pb-0 pt-2">
                      <div className="w-full text-right text-[11px] font-normal tracking-tight text-black">
                        TOPLAM {total.toFixed(2)} TL
                      </div>
                    </div>
                    <div className="px-4 pb-2 pt-1">
                      <button className="flex w-full items-center justify-center gap-1 rounded bg-black py-2 text-xs font-bold text-white">
                        DEVAM ET{" "}
                        <FontAwesomeIcon
                          icon={faSquareCaretRight}
                          className="text-white"
                          style={{ fontSize: "13px" }}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Cart Button */}
       {/* Mobile Cart Button with Sheet */}
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
          placeholder="Aradığınız ürünü yazınız"
          className="mb-2 w-full rounded-full bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500"
        />
      </div>

      <div className="hidden md:block">
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
