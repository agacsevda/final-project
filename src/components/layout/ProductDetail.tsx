import type { ProductDetail, ProductDetailResponse } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore } from "@/lib/store/cartStore";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";

import Panigation from "../detailstars/Panigation";
import { useProductVariants, type ProductVariant } from "@/hook/DetailHook";
import { BASE_URL, PHOTO_URL } from "./AllProducts";

export default function ProductDetail() {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { productSlug } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  
  // Varsayılan bir ProductVariant oluşturuyoruz, böylece hook içinde null kontrolü yapmaya gerek kalmaz
  const emptyVariant: ProductVariant = {
    id: "",
    size: { pieces: 0, total_services: 0, gram: 0 },
    aroma: "",
    price: {
      profit: null,
      total_price: 0,
      discounted_price: null,
      price_per_servings: 0,
      discount_percentage: null
    },
    photo_src: "",
    is_available: false
  };
  
  // En az bir geçerli variant olduğundan emin oluyoruz
  const safeVariants = (product?.variants as unknown as ProductVariant[] || [emptyVariant]);
  
  const {
    selectedVariant,
    productAromas,
    productSizes,
    selectAroma,
    selectSize,
    isSelectedAroma,
    isSelectedSize,
    isSizeAvailable,
  } = useProductVariants(safeVariants);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/products/${productSlug}`);
        const data = await response.json() as ProductDetailResponse;
        
        if (data.status === "success") {
          setProduct(data.data);
        } else {
          setError("Ürün bilgileri alınamadı");
        }
      } catch (err) {
        setError("Ürün detayları yüklenirken bir hata oluştu");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (productSlug) {
      fetchProductDetail();
    }
  }, [productSlug]);

  const handleAddToCart = () => {
    if (selectedVariant && product) {
      addItem({
        id: selectedVariant.id,
        name: product.name,
        price: selectedVariant.price.discounted_price || selectedVariant.price.total_price,
        quantity: quantity,
        photo_src: selectedVariant.photo_src,
        selectedAroma: selectedVariant.aroma,
        selectedSize: `${selectedVariant.size.gram}G`
      });
    }
  };

  // Eğer ürün yükleniyorsa yükleniyor mesajı göster
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Yükleniyor...</div>;
  }

  // Eğer hata varsa hata mesajı göster
  if (error || !product) {
    return <div className="flex items-center justify-center h-screen">{error || "Ürün bulunamadı"}</div>;
  }
 

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 rounded-2xl p-4 md:flex-row">
        {/* Product Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="sticky top-20 self-start rounded-xl p-4">
            <img
              src={selectedVariant && selectedVariant.photo_src ? PHOTO_URL + selectedVariant.photo_src : "/tumurunlerimages/whey-protein.png"}
              alt={product.name}
              className="h-full w-full object-contain"
            />
            
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500">
            {product.short_explanation}
          </p>
          <div className="flex items-center gap-2 text-yellow-500">
            <span>
              {[...Array(Math.round(product.average_star || 0))].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </span>
            <span className="text-sm text-gray-600">{product.comment_count} Yorum</span>
          </div>

          {/* Badges */}
          <div className="flex gap-2">
            {product.tags.map((tag, index) => (
              <span key={index} className="rounded bg-gray-200 px-2 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Aroma - Sadece ürün ve aromalar varsa göster */}
          {productAromas.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-500">AROMA:</h3>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                {productAromas.map((flavor) => {
                  // Aroma renk bandı
                  const flavorBands: Record<string, string> = {
                    "bisküvi": "bg-yellow-300",
                    "çikolata": "bg-[#6B3F1D]",
                    "muz": "bg-yellow-200",
                    "salted caramel": "bg-orange-200",
                    "choco nut": "bg-amber-700",
                    "hindistan cevizi": "bg-amber-200",
                    "raspberry cheesecake": "bg-pink-200",
                    "çilek": "bg-red-200",
                    "karpuz":"bg-red-400"
                  };
                  const normalized = flavor.trim().toLowerCase();
                  const bandColor = flavorBands[normalized] || "bg-gray-300";
                  const selected = isSelectedAroma(flavor);
                  return (
                    <div key={flavor} className="relative flex items-center">
                      <button
                        onClick={() => selectAroma(flavor)}
                        className={`relative flex items-center w-[160px] h-[48px]  bg-white px-3 py-1 text-base font-medium transition-all duration-150
                          ${selected ? "border-2 border-blue-900" : "border border-gray-300"}
                          `}
                      >
                        <span className="mx-auto z-10">{flavor}</span>
                        <div className={`absolute right-0 top-0 h-full w-5 ${bandColor} z-0`}></div>
                        {selected && (
                          <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 border-4 border-white shadow-lg z-[20] pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 8.5L7 11.5L12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Boyut - Sadece sizes varsa göster */}
          {productSizes.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-500 mt-4">BOYUT:</h3>
              <div className="mt-2 flex gap-4">
                {productSizes.map((size, index) => {
                  const selected = isSelectedSize(size);
                  return (
                    <div key={index} className="relative flex items-center">
                      <button
                        onClick={() => selectSize(size)}
                        className={`relative w-[140px] h-[60px]  bg-white px-2 py-1 flex flex-col items-center justify-center transition-all duration-150
                          ${selected ? "border-2 border-blue-900" : "border border-gray-300"}
                          `}
                      >
                        <span className="text-base font-bold">150G</span>
                        <span className="text-xs mt-1">{size.total_services} servis</span>
                        {selected && (
                          <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 border-4 border-white shadow-lg z-20">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 8.5L7 11.5L12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price + Cart */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              {selectedVariant && (
                <>
                  <p className="text-2xl font-bold">
                    {selectedVariant.price.discounted_price || selectedVariant.price.total_price} TL
                  </p>
                  {selectedVariant.price.price_per_servings && (
                    <p className="text-sm text-gray-500">
                      {selectedVariant.price.price_per_servings.toFixed(2)} TL / Servis
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="h-8 w-8 rounded bg-gray-200"
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="h-8 w-8 rounded bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button 
            onClick={handleAddToCart}
            className="mt-4 rounded-xl bg-black py-3 text-white transition hover:bg-gray-800"
          >
            SEPETE EKLE
          </button>

          {/* Extra info */}
          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <span>🚚 Aynı Gün Ücretsiz Kargo</span>
            <span>👥 750.000+ Mutlu Müşteri</span>
            <span>✅ Memnuniyet Garantisi</span>
          </div>
          
          {/* Ürün Açıklamaları */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Kullanım</AccordionTrigger>
                <AccordionContent>
                  {product.explanation.usage}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Özellikler</AccordionTrigger>
                <AccordionContent>
                  {product.explanation.features}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Açıklama</AccordionTrigger>
                <AccordionContent>
                  {product.explanation.description}
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
