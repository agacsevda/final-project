import { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  photo_src: string;
  selectedAroma?: string;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: CartItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        toast({
          title: "Ürün güncellendi",
          description: `${item.name} ürününün miktarı güncellendi.`,
        });
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      toast({
        title: "Ürün sepete eklendi",
        description: `${item.name} sepete eklendi.`,
      });
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: string) => {
    const item = items.find(i => i.id === id);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    if (item) {
      toast({
        title: "Ürün sepetten çıkarıldı",
        description: `${item.name} sepetten çıkarıldı.`,
      });
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    const item = items.find(i => i.id === id);
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
    if (item) {
      toast({
        title: "Miktar güncellendi",
        description: `${item.name} ürününün miktarı ${quantity} olarak güncellendi.`,
      });
    }
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 