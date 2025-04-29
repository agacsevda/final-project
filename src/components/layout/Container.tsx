import { ContainerCardProps } from "@/types";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { BASE_URL, PHOTO_URL } from "./AllProducts";

type ContainerProps = {
  title?: string;
};



interface PriceInfo {
  profit: number;
  total_price: number;
  discounted_price: number;
  price_per_servings: number;
  discount_percentage: number;
}

interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
}



interface ApiResponse {
  data: {
    results: Product[];
  };
}

function Container({ title = "ÇOK SATANLAR" }: ContainerProps) {
  const [containers, setContainers] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/best-sellers`);
        console.log(response);
        const data = await response.json() as any;
        console.log("data",data);
        setContainers(data.data );
      } catch (error) {
        console.error("Veri yüklenirken hata oluştu:", error);
      }
    };
    
    fetchContainers();
  }, []);

  

  return (
    <>
      <h2 className="text-center font-inter font-semibold text-[21.56px] leading-[20px]">{title}</h2>
      <div className="max-w-screen-xl mx-auto my-10 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {containers.map((container) => (
          <div key={container.slug} className="w-full p-4 text-center min-h-[320px] flex flex-col justify-between">
            <img
              src={`${PHOTO_URL}${container.photo_src}`}
              alt={container.name}
              className="h-48 w-full rounded-lg object-cover"
            />
            <h5 className="mt-4 text-sm font-semibold line-clamp-2">{container.name}</h5>
            <p className="text-xs text-gray-500 line-clamp-2">{container.short_explanation}</p>
            <div className="my-2 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-xl font-semibold text-black">{container.price_info.discounted_price  ? container.price_info.discounted_price : container.price_info.total_price  } TL</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container;
