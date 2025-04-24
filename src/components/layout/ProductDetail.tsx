import { ProductDetailsProps } from "@/types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";

import Panigation from "../detailstars/Panigation";

export default function ProductDetail() {
  const [product, setProduct] = useState<ProductDetailsProps>();
  const location = useLocation();

  useEffect(() => {
    const product = location.state;
    setProduct(product);
  }, []);

  console.log(product);
  console.log(product?.title);
  return (
    <>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 rounded-2xl p-4 md:flex-row">
        {/* Product Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="sticky top-20 self-start rounded-xl p-4">
            <img
              src="/tumurunlerimages/whey-protein.png"
              alt="5-HTP"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-sm text-gray-500">
            EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600">10869 Yorum</span>
          </div>

          {/* Badges */}
          <div className="flex gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-xs">
              VEJETARYEN
            </span>
            <span className="rounded bg-gray-200 px-2 py-1 text-xs">
              GLUTENSİZ
            </span>
          </div>

          {/* Aroma */}
          <div>
            <h3 className="font-semibold">AROMA:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "Bisküvi",
                "Çikolata",
                "Muz",
                "Salted Caramel",
                "Choco Nut",
                "Hindistan Cevizi",
                "Raspberry Cheesecake",
                "Çilek",
              ].map((flavor) => (
                <button
                  key={flavor}
                  className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Boyut */}
          <div>
            <h3 className="font-semibold">BOYUT:</h3>
            <div className="mt-2 flex gap-2">
              {[
                "400G\n16 servis",
                "1.6KG\n64 servis",
                "1.6KG x 2 ADET\n128 servis",
              ].map((size, index) => (
                <button
                  key={index}
                  className="whitespace-pre rounded border px-3 py-2 text-center text-xs hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price + Cart */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{product?.price}</p>
              <p className="text-sm text-gray-500">34.31 TL / Servis</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded bg-gray-200">-</button>
              <span>1</span>
              <button className="h-8 w-8 rounded bg-gray-200">+</button>
            </div>
          </div>

          {/* Add to cart */}
          <button className="mt-4 rounded-xl bg-black py-3 text-white transition hover:bg-gray-800">
            SEPETE EKLE
          </button>

          {/* Extra info */}
          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <span>🚚 Aynı Gün Ücretsiz Kargo</span>
            <span>👥 750.000+ Mutlu Müşteri</span>
            <span>✅ Memnuniyet Garantisi</span>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Footer */}
          <p className="mt-2 bg-slate-50 text-xs text-gray-400">
            Son Kullanma Tarihi: 07/2025
          </p>
        </div>
      </div>
      <Container title="SON GÖRÜNTÜLENEN ÜRÜNLER" />

      <Panigation />
    </>
  );
}
