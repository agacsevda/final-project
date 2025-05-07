import { Card } from "@/components/ui/card";
import { ProductCardProps } from "@/types";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "../layout/AllProducts";
import { useLoaderData } from "react-router-dom";

const cardData: ProductCardProps[] = [
  {
    id: 1,
    title: "PROTEİN",
    href: "images/cardprotein-2.png",
    description: "Protein",
    bgcolor: "#7ea0a2",
  },
  {
    id: 2,
    title: "SPOR GIDALARI",
    href: "images/cardsporgidalari.jpg",
    description: "Spor Gıdaları",
    bgcolor: "#d9d8d3",
  },
  {
    id: 3,
    title: "GIDA",
    href: "images/cardgida.jpg",
    description: "Gıda",
    bgcolor: "#71b4d1",
  },
  {
    id: 4,
    title: "SAĞLIK",
    href: "images/cardsaglik.jpg",
    description: "Sağlık",
    bgcolor: "#d0ceca",
  },
  {
    id: 5,
    title: "VİTAMİN",
    href: "images/cardvitaminler.jpg",
    description: "Vitamin",
    bgcolor: "#fde8d7",
  },
  {
    id: 6,
    title: "TÜM ÜRÜNLER",
    href: "images/cardtümürünler.png",
    description: "Tüm Ürünler",
    bgcolor: "#a8d5ea",
  },
];

interface SubChild {
  name: string;
  slug: string;
  order: number;
}

interface Child {
  id: string;
  name: string;
  slug: string;
  order: number;
  sub_children: SubChild[];
}

interface TopSeller {
  name: string;
  slug: string;
  description: string;
  picture_src: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  order: number;
  children: Child[];
  top_sellers: TopSeller[];
  bgcolor?: string;
  href?: string;
}

interface LoaderCardResponse {
  status: string;
  data: {
    data: Category[];
    status: string;
  };
}

export async function loader() {
  const response = await fetch(BASE_URL + "/categories");
  const data = await response.json();
  return data;
}

function ProductCard() {
  const loaderData = useLoaderData() as LoaderCardResponse;

  const categories = loaderData.data.data.map((category, index) => ({
    ...category,
    bgcolor: cardData[index]?.bgcolor || "#fff",
    href: cardData[index]?.href || "",
    title: category.name,
  }));

  return (
    <div className="mx-auto my-10 grid max-w-screen-xl grid-cols-2 gap-6 px-4 lg:grid-cols-3 xl:px-0">
      {categories.map((card) => (
        <Card
          key={card.id}
          className={`bg-[${card.bgcolor}] group relative h-[158px] overflow-hidden`}
        >
          <div
            style={{ backgroundColor: card.bgcolor }}
            className="relative h-full w-full"
          >
            <img src={card.href} alt={card.name} className="md:w-248 h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-end p-4">
              <div>
                <div className="text-right">
                  <h3 className="w-[150px] break-words rounded p-3 text-sm font-bold text-black md:text-xl">
                    {card.name}
                  </h3>
                  <Button
                    variant="default"
                    className="mt-2 bg-black py-1 text-sm text-white hover:bg-gray-800 sm:text-sm md:text-xl"
                    onClick={() =>
                      (window.location.href = `/products/main_category/${card.id}?title=${encodeURIComponent(card.title)}`)
                    }
                  >
                    İNCELE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
      {/* Tüm ürünler kartı */}
      <Card
        key={cardData[5].id}
        className={`bg-[${cardData[5].bgcolor}] group relative h-[158px] overflow-hidden`}
      >
        <div
          style={{ backgroundColor: cardData[5].bgcolor }}
          className="relative h-full w-full"
        >
          <img src={cardData[5].href} alt={cardData[5].title} className="md:w-248 h-full object-cover" />
          <div className="absolute inset-0 flex items-end justify-end p-4">
            <div>
              <div className="text-right">
                <h3 className="w-[150px] break-words rounded p-3 text-sm font-bold text-black md:text-xl">
                  {cardData[5].title}
                </h3>
                <Button
                  variant="default"
                  className="mt-2 bg-black py-1 text-sm text-white hover:bg-gray-800 sm:text-sm md:text-xl"
                  onClick={() =>
                    (window.location.href = `/tumurunler/AllProducts?name=${encodeURIComponent(cardData[5].title)}`)
                  }
                >
                  İNCELE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;