import { ProductDetailsProps } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Container from './Container';

import Panigation from '../detailstars/Panigation';


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
    <div className="flex flex-col md:flex-row  p-4 rounded-2xl  gap-6 max-w-5xl mx-auto mt-10">
      {/* Product Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="sticky top-20 rounded-xl p-4 self-start">
          <img src="/tumurunlerimages/whey-protein.png" alt="5-HTP" className="w-60 h-60 object-contain" />
        </div>
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product?.title}</h1>
        <p className="text-sm text-gray-500">EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ</p>
        <div className="flex items-center gap-2 text-yellow-500">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-sm text-gray-600">10869 Yorum</span>
        </div>

        {/* Badges */}
        <div className="flex gap-2">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">VEJETARYEN</span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded">GLUTENSİZ</span>
        </div>

        {/* Aroma */}
        <div>
          <h3 className="font-semibold">AROMA:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Bisküvi", "Çikolata", "Muz", "Salted Caramel", "Choco Nut", "Hindistan Cevizi", "Raspberry Cheesecake", "Çilek"].map(flavor => (
              <button key={flavor} className="px-3 py-1 border rounded hover:bg-gray-100 text-sm">
                {flavor}
              </button>
            ))}
          </div>
        </div>

        {/* Boyut */}
        <div>
          <h3 className="font-semibold">BOYUT:</h3>
          <div className="flex gap-2 mt-2">
            {["400G\n16 servis", "1.6KG\n64 servis", "1.6KG x 2 ADET\n128 servis"].map((size, index) => (
              <button key={index} className="px-3 py-2 border rounded hover:bg-gray-100 text-xs text-center whitespace-pre">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-2xl font-bold">{product?.price}</p>
            <p className="text-sm text-gray-500">34.31 TL / Servis</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded bg-gray-200">-</button>
            <span>1</span>
            <button className="w-8 h-8 rounded bg-gray-200">+</button>
          </div>
        </div>

        {/* Add to cart */}
        <button className="mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">SEPETE EKLE</button>

        {/* Extra info */}
        <div className="flex gap-4 text-sm text-gray-600 mt-4">
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
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    

        </div>
        
         
        

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-2">Son Kullanma Tarihi: 07/2025</p>
      </div>
      
      
    </div>
  <Container title="SON GÖRÜNTÜLENEN ÜRÜNLER" />

  <Panigation/>
  </>
  );
  
}
