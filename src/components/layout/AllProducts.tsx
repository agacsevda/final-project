import { AllProductCardProps } from '@/types';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export const allproductdata: AllProductCardProps[] = [
  {
    id: 1,
    title: "WHEY PROTEIN",
    href: "/src/assets/tumurunlerimages/whey-protein.png",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    price: 549,
    comment: " 4 Yorum",
    rating: 5
  },
  {
    id: 2,
    title: "FITNESS PAKETİ",
    href: "/src/assets/tumurunlerimages/b-complex.png",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    price: 799,
    comment: " 0 Yorum",
    rating: 5
  },
  {
    id: 3,
    title: "GÜNLÜK VİTAMİN PAKETİ",
    href: "/src/assets/tumurunlerimages/betaine.png",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    price: 549,
    comment: " 1 Yorum",
    rating: 5
  },
  {
    id: 4,
    title: "PRE-WORKOUT SUPREME",
    href: "/src/assets/tumurunlerimages/bcaa.png",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    price: 399,
    comment: " 5 Yorum",
    rating: 5
  },
];

function AllProducts() {
  const [categoryName, setCategoryName] = useState<string | null>(null);

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
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 py-8">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl whitespace-normal">
        {categoryName || "Tüm Ürünler"}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {allproductdata.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden bg-white p-4 transition-transform hover:-translate-y-1"
          >
            <div className="relative mb-4 aspect-square overflow-hidden">
              <img
                src={product.href}
                alt={product.title}
                className="h-full w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="mb-1 text-lg font-bold text-center">{product.title}</h3>
              <p className="mb-2 text-sm text-gray-600 text-center">{product.description}</p>
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
              <p className="mb-2 text-sm text-gray-600 text-center">{product.comment}</p>
              <div className="mt-auto text-center">
                <span className="text-xl font-bold text-black text-center">
                  {product.price} TL
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;