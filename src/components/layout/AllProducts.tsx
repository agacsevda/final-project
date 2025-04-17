import { AllProductCardProps } from "@/types";
import { Star } from "lucide-react";
import { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const allproductdata: AllProductCardProps[] = [
  {
    id: 1,
    title: "WHEY PROTEIN",
    href: "/src/assets/tumurunlerimages/whey-protein.png",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    price: 549,
    comment: "10869 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 2,
    title: "WHEY ISOLATE",
    href: "/src/assets/tumurunlerimages/whey-isolate.png",
    description: "% 90 PROTEİN EN SAF WHEY",
    price: 749,
    comment: "887 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 3,
    title: "FITNESS PAKETİ",
    href: "/src/assets/tumurunlerimages/tumurunler-3.jpg",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    price: 1126,
    comment: "7950 Yorum",
    rating: 5,
    discountedPrice: 799,
  },
  {
    id: 4,
    title: "PEA PROTEIN",
    href: "/src/assets/tumurunlerimages/pea-protein.png",
    description: "EN POPÜLER VEGAN PROTEİN KAYNAĞI",
    price: 349,
    comment: "1778 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 5,
    title: "MICELLAR CASEIN",
    href: "/src/assets/tumurunlerimages/micellar-casein.png",
    description: "YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI",
    price: 599,
    comment: "166 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 6,
    title: "EGG WHITE POWDER",
    href: "/src/assets/tumurunlerimages/egg-white-powder.png",
    description: "PROTEİNİ ALTIN STANDARDI",
    price: 899,
    comment: "339 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 7,
    title: "MILK PROTEIN",
    href: "/src/assets/tumurunlerimages/milk-protein.png",
    description: "%80 KAZEİN %20 WHEY PROTEİNİ",
    price: 699,
    comment: "209 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 8,
    title: "SOYA PROTEIN",
    href: "/src/assets/tumurunlerimages/soya-protein.png",
    description: "VEGAN PROTEİN KAYNAĞI",
    price: 449,
    comment: "214 Yorum",
    rating: 5,
    discountedPrice: null,
  },
  {
    id: 9,
    title: "PROTEIN BAR 2'Lİ PAKET",
    href: "/src/assets/tumurunlerimages/protein-bar-2li.png",
    description: "%30 PROTEİN, ŞEKER İLAVESİZ",
    price: 90,
    comment: "166 Yorum",
    rating: 5,
    discountedPrice: 59,
  },
  {
    id: 10,
    title: "MASS GAINER LANSMAN",
    href: "/src/assets/tumurunlerimages/mass-gainer.png",
    description: "YÜKSEK KALORİ | PRATİK ÖĞÜN",
    price: 999,
    comment: "339 Yorum",
    rating: 5,
    discountedPrice: 699,
  },
  {
    id: 11,
    title: "PROTEIN BAR",
    href: "/src/assets/tumurunlerimages/protein-bar.png",
    description: "%30 PROTEİN, ŞEKER İLAVESİZ",
    price: 349,
    comment: "508 Yorum",
    rating: 5,
    discountedPrice: 249,
  },
  {
    id: 12,
    title: "COLLAGEN COFFEE",
    href: "/src/assets/tumurunlerimages/collagen-coffee.png",
    description: "KOLA-JENLİ KAHVE",
    price: 349,
    comment: "377 Yorum",
    rating: 5,
    discountedPrice: null,
  },
];

function AllProducts() {
  const [categoryName, setCategoryName] = useState<string | null>(null);

  const navigate = useNavigate();

  const gotoDetails = (product: AllProductCardProps) => {
    navigate(`/ProductDetail`, { state: product });
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const title = params.get("name");
      console.log("URL changed, new title:", title);
      setCategoryName(title);
    };

    // İlk yüklemede çalıştır
    handleLocationChange();

    // URL değişikliklerini dinle
    window.addEventListener("popstate", handleLocationChange);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <div className="mx-auto my-10 max-w-screen-xl px-4 py-8">
      <h2 className="mb-8 whitespace-normal text-center text-2xl font-bold md:text-3xl">
        {categoryName || "Tüm Ürünler"}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {allproductdata.map((product) => {
          const discountPrice = product.discountedPrice
            ? Math.round(
                ((product.price - product.discountedPrice) / product.price) *
                  100,
              )
            : null;

          return (
            <div
              onClick={() => gotoDetails(product)}
              key={product.id}
              className="group relative flex flex-col overflow-hidden bg-white p-4 transition-transform hover:-translate-y-1"
            >
              <div className="relative mb-4 aspect-square overflow-hidden">
                <span className="absolute right-0 top-0 z-10 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  %{discountPrice} <br/>İNDİRİM
                </span>
                <img
                  src={product.href}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-1 text-center text-lg font-bold">
                  {product.title}
                </h3>
                <p className="mb-2 text-center text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="mb-2 flex items-center justify-center gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-2 text-center text-sm text-gray-600">
                  {product.comment}
                </p>
                <div className="mt-auto text-center">
                  <span className="text-center text-xl font-bold text-black">
                    {product.discountedPrice
                      ? product.discountedPrice
                      : product.price}{" "}
                    TL
                  </span>
                  {discountPrice && (
                    <span className="ml-2 text-sm text-green-600 line-through">
                      %{discountPrice} indirim
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
