import { Card } from "@/components/ui/card";

import { ProductCardProps } from "@/types";
import { Button } from "@/components/ui/button";

const cardData: ProductCardProps[] = [
  {
    id: 1,
    title: "PROTEİN",
    href: "/src/assets/images/cardprotein-2.png",
    description: "Protein",
    bgcolor: "#7ea0a2",
  },
  {
    id: 2,
    title: "SPOR GIDALARI",
    href: "/src/assets/images/cardsporgidalari.jpg",
    description: "Spor Gıdaları",
    bgcolor: "#d9d8d3",
  },
  {
    id: 3,
    title: "GIDA",
    href: "/src/assets/images/cardgida.jpg",
    description: "Gıda",
    bgcolor: "#71b4d1",
  },
  {
    id: 4,
    title: "SAĞLIK",
    href: "/src/assets/images/cardsaglik.jpg",
    description: "Sağlık",
    bgcolor: "#d0ceca",
  },
  {
    id: 5,
    title: "VİTAMİN",
    href: "/src/assets/images/cardvitaminler.jpg",
    description: "Vitamin",
    bgcolor: "#fde8d7",
  },
  {
    id: 6,
    title: "TÜM ÜRÜNLER",
    href: "/src/assets/images/cardtümürünler.png",
    description: "Tüm Ürünler",
    bgcolor: "#a8d5ea",
  },
];

function ProductCard() {
  return (
    <div className="max-w-screen-xl mx-auto my-10 grid grid-cols-2 lg:grid-cols-3 gap-6  px-4 xl:px-0">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className={`bg-${card.bgcolor} group relative h-[158px] overflow-hidden`}
        >
          <div
            style={{ backgroundColor: card.bgcolor }}
            className="relative h-full w-full"
          >
            <img
              src={card.href}
              alt={card.title}
              className="w-294 h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-6">
              <div></div>
              <div className="text-right">
              <h3 className="rounded p-3 text-xl font-bold text-black break-words w-[150px]"> 
                  {card.title}
                </h3>
                <Button
                  variant="default"
                  className="mt-2 bg-black py-1 text-sm text-white hover:bg-gray-800"
                  onClick={() => window.location.href = `/tumurunler/AllProducts?name=${encodeURIComponent(card.title)}`}
                >
                  İNCELE
                </Button >
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;
