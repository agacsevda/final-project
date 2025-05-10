import { useCartStore } from "@/lib/store/cartStore";
import { PHOTO_URL } from "@/components/layout/AllProducts";

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative min-h-[400px] bg-[#fafafa] flex flex-col h-full">
      {/* Başlık */}
      <div className="text-center font-bold text-lg py-3 border-b bg-white sticky top-0 z-10">SEPETİM</div>
      {/* Ürünler */}
      <div className="flex-1 overflow-y-auto pb-32">
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
                    <div className="text-xs text-gray-500">{item.selectedSize.total_services}g</div>
                  )}
                </div>
                <div className="flex items-center gap-2">
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
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-gray-400 hover:text-red-500"
                    title="Kaldır"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/></svg>
                  </button>
                </div>
                <div className="ml-4 font-bold whitespace-nowrap">{item.price * item.quantity} TL</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Alt bar */}
      {items.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full bg-white border-t z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-xs font-semibold">TOPLAM {total} TL</div>
            <button className="bg-black text-white rounded w-56 py-3 font-bold flex items-center justify-center gap-2">
              DEVAM ET <span className="text-lg">▶</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 