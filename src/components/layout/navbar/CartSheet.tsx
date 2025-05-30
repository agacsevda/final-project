import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faTrash,
  faSquareCaretRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCartStore } from "@/lib/store/cartStore";
import { PHOTO_URL } from "@/components/layout/AllProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartSheetProps {
  isMobile?: boolean;
}

const CartSheet = ({ isMobile = false }: CartSheetProps) => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const totalproducts = items.length;

  const goToOrder = () => {
    setOpen(false);
    navigate("/order");
  };

  const CartContent = () => (
    <>
      <div className="sticky top-0 z-10 border-b bg-white py-3 text-center text-lg font-bold">
        SEPETİM
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </button>
      </div>
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
                className="flex flex-col bg-white px-2 py-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={PHOTO_URL + item.photo_src}
                    alt={item.name}
                    className="mr-3 h-14 w-14 rounded border object-contain"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold truncate max-w-[120px]">
                        {item.name}
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded border text-lg"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border text-lg"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 ml-2"
                          title="Kaldır"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-1 text-xs text-gray-500">
                      {item.selectedAroma && <span>{item.selectedAroma}</span>}
                      {item.selectedSize && <span>{item.selectedSize.total_services}G</span>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="whitespace-nowrap text-lg font-bold">
                    {(item.price * item.quantity).toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} TL
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {items.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full border-t bg-white p-0 shadow-md">
          <div className="flex items-center justify-end px-4 pb-0 pt-2">
            <div className="w-full text-right text-[11px] font-normal tracking-tight text-black">
              TOPLAM {total.toFixed(2)} TL
            </div>
          </div>
          <div className="px-4 pb-2 pt-1">
            <button
              onClick={goToOrder}
              className="flex w-full items-center justify-center gap-1 rounded bg-black py-2 text-xs font-bold text-white"
            >
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
    </>
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden" onClick={() => setOpen(true)}>
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
        </SheetTrigger>
        <SheetContent className="flex h-full w-[400px] max-w-full flex-col p-0">
          <CartContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden md:block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="relative inline-block">
          <Button
            variant="outline"
            className="text-md px-4 py-0 text-gray-500"
            onClick={() => setOpen(true)}
          >
            <div className="relative">
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {totalproducts}
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
        <SheetContent side="right" className="z-50 flex h-full w-[400px] flex-col p-0 bg-white">
          <CartContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet; 