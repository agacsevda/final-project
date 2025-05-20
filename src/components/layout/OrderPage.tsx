import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/lib/store/cartStore';
import { PHOTO_URL } from './AllProducts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Input } from '../ui/input';

const AddressForm = () => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    surname: "",
    address: "",
    city: "",
    district: "",
    phone: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Buraya API isteği vs. ekleyebilirsiniz
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-4">
      <Input placeholder="Adres Başlığı *" value={form.title} onChange={(e) => handleChange("title", e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="Ad *" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
        <Input placeholder="Soyad *" value={form.surname} onChange={(e) => handleChange("surname", e.target.value)} />
      </div>
      <Textarea
        placeholder="Adres *"
        value={form.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select onValueChange={(value) => handleChange("city", value)}>
          <SelectTrigger>
            <SelectValue placeholder="İl *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="istanbul">İstanbul</SelectItem>
            <SelectItem value="ankara">Ankara</SelectItem>
            <SelectItem value="izmir">İzmir</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleChange("district", value)}>
          <SelectTrigger>
            <SelectValue placeholder="İlçe *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="besiktas">Beşiktaş</SelectItem>
            <SelectItem value="cankaya">Çankaya</SelectItem>
            <SelectItem value="konak">Konak</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm text-muted-foreground mb-1">Telefon Numarası</label>
        <div className="flex items-center gap-2">
          <span className="border rounded px-2 py-2">🇹🇷 +90</span>
          <Input
            placeholder="Telefon"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Kaydet</Button>
      </div>
    </form>
  );
};

const OrderPage = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const SHEET_SIDES = ['top', 'right', 'bottom', 'left'];
  const [open, setOpen] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada normalde ödeme işlemi yapılacak
    // Başarılı ödeme sonrası:
    clearCart(); // Sepeti temizle
    localStorage.removeItem('cart-storage'); // Local storage'dan sepeti temizle
    // Adres bilgilerini temizle
    localStorage.removeItem('shipping-address');
    // Başarılı ödeme sonrası yönlendirme
    navigate('/success');
  };

  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {/* Sol Kolon */}
        <div className="md:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <div className="font-extrabold text-2xl tracking-tight">OJS NUTRITION</div>
            <a href="#" className="text-blue-700 text-sm font-semibold">Üye Ol</a>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="adres" className="border-b">
              <AccordionTrigger className="text-lg font-semibold gap-2 flex items-center">
                <span className="text-base font-normal text text-xl">①</span>
                <span className='text-left flex-1'>Adres</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Yeni Adres Ekle</Button>
                    </SheetTrigger>
                    <SheetContent side="top">
                      <SheetHeader>
                        <SheetTitle>Yeni Adres Ekle</SheetTitle>
                        <SheetDescription>
                          Lütfen adres bilgilerinizi giriniz.
                        </SheetDescription>
                      </SheetHeader>
                      <AddressForm />
                      <SheetFooter>
                        <SheetClose asChild>
                        
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
                {/* Adres Formu veya Bilgisi */}
                <div className="text-gray-500">Adres bilgisi burada olacak.</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kargo" className="border-b">
              <AccordionTrigger className="text-lg font-semibold gap-2 flex items-center">
                <span className="text-base font-normal text text-xl">②</span>
                <span className='text-left flex-1'>Kargo</span>
              </AccordionTrigger>
              <AccordionContent>
                {/* Kargo Seçenekleri */}
                <div className="text-gray-500">Kargo seçenekleri burada olacak.</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="odeme">
              <AccordionTrigger className="text-lg font-semibold gap-2 flex items-center">
                <span className="text-base font-normal text text-xl">③</span>
                <span className='text-left flex-1'>Ödeme</span>
              </AccordionTrigger>
              <AccordionContent>
                {/* Basit Ödeme Formu */}
                <form onSubmit={handlePaymentSubmit} className="space-y-4 max-w-sm">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Kart Numarası</label>
                    <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Son Kullanma</label>
                      <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="AA/YY" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="123" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold">Ödemeyi Tamamla</button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Sağ Kolon */}
        <div className="md:col-span-1 flex flex-col justify-start">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={PHOTO_URL + item.photo_src}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-base md:text-lg uppercase">{item.name}</div>
                  {item.selectedAroma && (
                    <div className="text-sm text-gray-600">{item.selectedAroma}</div>
                  )}
                  {item.selectedSize && (
                    <div className="text-sm text-gray-600">{item.selectedSize.total_services}gr</div>
                  )}
                </div>
                <div className="font-bold text-base md:text-lg whitespace-nowrap">{item.price.toFixed(2)} TL</div>
              </div>
            ))}
          </div>
          {/* Toplam */}
          <div className="mt-8 border-t pt-4 flex flex-col items-end">
            <div className="flex justify-between w-full mb-2">
              <span className="text-gray-600">Ara Toplam</span>
              <span>{total.toFixed(2)} TL</span>
            </div>
            <div className="flex justify-between w-full font-bold text-lg">
              <span>Toplam</span>
              <span>{total.toFixed(2)} TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
