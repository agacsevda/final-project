import { ContainerCardProps } from "@/types";
import { Star } from "lucide-react";

const containerdData: ContainerCardProps[] = [
  {
    id: 1,
    title: "WHEY PROTEIN",
    href: "images/container-1.jpg",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    price:549 ,
    comment:" 4 Yorum"

  },
  {
    id: 2,
    title: "FITNESS PAKETİ",
    href: "images/container-2.jpg",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
     price:799  ,
    comment:" 0 Yorum"
  },
  {
    id: 3,
    title: "GÜNLÜK VİTAMİN PAKETİ",
    href: "images/container-3.jpg",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
     price:549 ,
    comment:" 1 Yorum"
  },
  {
    id: 4,
    title: "PRE-WORKOUT SUPREME",
    href: "images/container-4.jpg",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
     price:399 ,
    comment:" 5 Yorum"
  },
  {
    id: 5,
    title: "CREAM OF RICE",
    href: "images/container-5.jpg",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
     price:239 ,
    comment:" 6 Yorum"
  },
  {
    id: 6,
    title: "CREATINE",
    href:"images/container-6.jpg",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
     price:239 ,
    comment:" 2 Yorum"
  },
];
type ContainerProps = {
  title?: string;
};


function Container({ title = "ÇOK SATANLAR" }: ContainerProps) 
 {
  return (
    <>
     {/* v4.0 da container yapısı bu şekilde kullanılıyormuş */}
     <h2 className="text-center font-inter font-semibold text-[21.56px] leading-[20px]">{title}</h2>
      <div className="max-w-screen-xl mx-auto my-10 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {containerdData.map((container) => (
          <div key={container.id} className="w-full p-4 text-center min-h-[320px] flex flex-col justify-between">
            <img
              src={container.href}
              alt="Creatine"
              className="h-48 w-full rounded-lg object-cover"
            />
            <h5 className="mt-4 text-sm font-semibold line-clamp-2">{container.title}</h5>
            <p className="text-xs text-gray-500 line-clamp-2">{container.description}</p>
            <div className="my-2 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className= "text-yellow-400 "
                fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-600 min-h-[20px]">{container.comment}</p>
            <p className="mt-2 text-xl font-semibold text-black">{container.price} TL</p>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default Container;
