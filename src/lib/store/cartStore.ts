import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from "@/hooks/use-toast";

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  photo_src: string
  selectedAroma?: string
  selectedSize?: {
    total_services: number
  }
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            toast({
              title: "Ürün güncellendi",
              description: `${item.name} ürününün miktarı güncellendi.`,
            });
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          } else {
            toast({
              title: "Ürün sepete eklendi",
              description: `${item.name} sepete eklendi.`,
            });
            return { items: [...state.items, item] }
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === id);
          if (itemToRemove) {
             toast({
               title: "Ürün sepetten çıkarıldı",
               description: `${itemToRemove.name} sepetten çıkarıldı.`,
             });
          }
          return { items: state.items.filter((item) => item.id !== id) };
        }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const itemToUpdate = state.items.find((item) => item.id === id);
          if (itemToUpdate) {
             toast({
               title: "Miktar güncellendi",
               description: `${itemToUpdate.name} ürününün miktarı ${quantity} olarak güncellendi.`,
             });
          }
          return { items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ) };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
) 