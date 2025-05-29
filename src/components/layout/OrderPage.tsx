import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCartStore } from "@/lib/store/cartStore";
import { PHOTO_URL, BASE_URL } from "./AllProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";

const AddressForm = ({ onSave, onClose }: { onSave: (address: any) => void; onClose: () => void }) => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    surname: "",
    address: "",
    city: "",
    district: "",
    phone: "",
  });
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);

  useEffect(() => {
    setLoadingCities(true);
    fetch(`${BASE_URL}/world/region?limit=100&offset=0&country-name=turkey`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data.data.results.map((item: any) => item.name));
      })
      .finally(() => setLoadingCities(false));
  }, []);

  useEffect(() => {
    if (form.city) {
      setLoadingDistricts(true);
      fetch(`${BASE_URL}/world/subregion?limit=30&offset=0&region-name=${encodeURIComponent(form.city)}`)
        .then((res) => res.json())
        .then((data) => {
          setDistricts(data.data.results.map((item: any) => item.name));
        })
        .finally(() => setLoadingDistricts(false));
    } else {
      setDistricts([]);
    }
  }, [form.city]);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-4 p-6">
      <Input
        placeholder="Adres Başlığı *"
        value={form.title}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          placeholder="Ad *"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Soyad *"
          value={form.surname}
          onChange={(e) => handleChange("surname", e.target.value)}
        />
      </div>
      <Textarea
        placeholder="Adres *"
        value={form.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select onValueChange={(value) => handleChange("city", value)} value={form.city}>
          <SelectTrigger>
            <SelectValue placeholder={loadingCities ? "Yükleniyor..." : "İl *"} />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleChange("district", value)} value={form.district} disabled={!form.city}>
          <SelectTrigger>
            <SelectValue placeholder={loadingDistricts ? "Yükleniyor..." : "İlçe *"} />
          </SelectTrigger>
          <SelectContent>
            {districts.map((district) => (
              <SelectItem key={district} value={district}>{district}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="mb-1 block text-sm text-muted-foreground">
          Telefon Numarası
        </label>
        <div className="flex items-center gap-2">
          <span className="rounded border px-2 py-2">🇹🇷 +90</span>
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
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const SHEET_SIDES = ["top", "right", "bottom", "left"];
  const [open, setOpen] = useState(false);
  const [savedAddress, setSavedAddress] = useState<any>(null);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    localStorage.removeItem("cart-storage");
    localStorage.removeItem("shipping-address");
    navigate("/success");
  };

  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    "adres",
  );

  return (
    <div className="min-h-screen w-full bg-white px-4 md:px-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 pt-10 md:grid-cols-2">
        {/* Sol Kolon */}
        <div className="md:col-span-1">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              OJS NUTRITION
            </Link>
            <a href="#" className="text-sm font-semibold text-blue-700">
              Üye Ol
            </a>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={accordionValue}
            onValueChange={setAccordionValue}
          >
            <AccordionItem value="adres" className="border-b">
              <AccordionTrigger className="flex items-center gap-2 text-lg font-semibold">
                <span className="text text-base text-xl font-normal">①</span>
                <span className="flex-1 text-left">Adres</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  <Sheet open={open} onOpenChange={setOpen}>
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
                      <AddressForm
                        onSave={(address) => {
                          setSavedAddress(address);
                        }}
                        onClose={() => setOpen(false)}
                      />
                      <SheetFooter>
                        <SheetClose asChild></SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
                <div className="text-gray-500">
                  {savedAddress ? (
                    <div className="border rounded-lg p-4 mt-4">
                      <div className="font-bold text-lg flex items-center gap-2">
                        <span className="rounded-full border w-5 h-5 flex items-center justify-center">○</span>
                        {savedAddress.title}
                      </div>
                      <div>{savedAddress.address}, {savedAddress.city}/{savedAddress.district}</div>
                      <div className="text-xs text-gray-400 mt-1">Alıcı: {savedAddress.name} {savedAddress.surname}</div>
                    </div>
                  ) : (
                    "Adres bilgisi burada olacak."
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kargo" className="border-b">
              <AccordionTrigger className="flex items-center gap-2 text-lg font-semibold">
                <span className="text text-base text-xl font-normal">②</span>
                <span className="flex-1 text-left">Kargo</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-500">
                  {" "}
                  <button
                    type="button"
                    className="w-full rounded bg-black py-2 font-semibold text-white"
                    onClick={() => {
                      setAccordionValue("odeme");
                      const element = document.getElementById("payment-form");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Ödeme İle Devam Et
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="odeme">
              <AccordionTrigger className="flex items-center gap-2 text-lg font-semibold">
                <span className="text text-base text-xl font-normal">③</span>
                <span className="flex-1 text-left">Ödeme</span>
              </AccordionTrigger>
              <AccordionContent>
                <form
                  id="payment-form"
                  onSubmit={handlePaymentSubmit}
                  className="max-w-sm space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Kart Numarası
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded border px-3 py-2"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Son Kullanma
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded border px-3 py-2"
                        placeholder="AA/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded border px-3 py-2"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded bg-black py-2 font-semibold text-white"
                  >
                    Ödemeyi Tamamla
                  </button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Sağ Kolon */}
        <div className="flex flex-col justify-start md:col-span-1">
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={PHOTO_URL + item.photo_src}
                  alt={item.name}
                  className="h-20 w-20 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-base font-bold uppercase md:text-lg">
                    {item.name}
                  </div>
                  {item.selectedAroma && (
                    <div className="text-sm text-gray-600">
                      {item.selectedAroma}
                    </div>
                  )}
                  {item.selectedSize && (
                    <div className="text-sm text-gray-600">
                      {item.selectedSize.total_services}gr
                    </div>
                  )}
                </div>
                <div className="whitespace-nowrap text-base font-bold md:text-lg">
                  {item.price.toFixed(2)} TL
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-end border-t pt-4">
            <div className="mb-2 flex w-full justify-between">
              <span className="text-gray-600">Ara Toplam</span>
              <span>{total.toFixed(2)} TL</span>
            </div>
            <div className="flex w-full justify-between text-lg font-bold">
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
