import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Yıldız bileşeni
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="text-yellow-500 flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

// Yapılandırılmış yorum verisi
export const comments = [
  {
    name: "Ahmet Y.",
    rating: 5,
    title: "Mükemmel",
    content: "Harika bir ürün, kesinlikle tavsiye ederim.",
    date: "01-11-2024",
  },
  {
    name: "Elif K.",
    rating: 4,
    title: "İyi",
    content: "Genel olarak memnunum ama teslimat süresi uzundu.",
    date: "02-11-2024",
  },
  {
    name: "Mehmet D.",
    rating: 3,
    title: "Orta",
    content: "Beklentilerimi tam karşılamadı, biraz daha özen gerekirdi.",
    date: "03-11-2024",
  },
  {
    name: "Zeynep Ç.",
    rating: 5,
    title: "Süper",
    content: "Bu kadar kaliteli olacağını tahmin etmemiştim, teşekkürler!",
    date: "04-11-2024",
  },
  {
    name: "Emre A.",
    rating: 2,
    title: "Hayal kırıklığı",
    content: "Görseldeki gibi değildi, iade ettim.",
    date: "05-11-2024",
  },
  {
    name: "Derya S.",
    rating: 4,
    title: "Başarılı",
    content: "Güzel paketleme ve hızlı kargo, teşekkürler.",
    date: "06-11-2024",
  },
  {
    name: "Can B.",
    rating: 5,
    title: "Harika",
    content: "Ürün anlatıldığı gibi. Hızlı kargo, kaliteli ürün.",
    date: "07-11-2024",
  },
  {
    name: "Burcu E.",
    rating: 1,
    title: "Beğenmedim",
    content: "Ürün hasarlı geldi. Maalesef kullanamadım.",
    date: "08-11-2024",
  },
  {
    name: "Tolga N.",
    rating: 4,
    title: "Beklediğim gibi",
    content: "İş görür, fiyata göre normal kalite.",
    date: "09-11-2024",
  },
  {
    name: "Aslı H.",
    rating: 3,
    title: "Kararsızım",
    content: "Ne çok iyi ne çok kötü. İdare eder diyebilirim.",
    date: "10-11-2024",
  },
  {
    name: "Kerem U.",
    rating: 5,
    title: "Kaliteli",
    content: "Piyasadaki en iyilerden biri olabilir. Bayıldım.",
    date: "11-11-2024",
  },
  {
    name: "Sevgi L.",
    rating: 2,
    title: "Memnun kalmadım",
    content: "Açıklamadaki özelliklerin çoğu yoktu.",
    date: "12-11-2024",
  },
  {
    name: "Ece Z.",
    rating: 4,
    title: "Gayet iyi",
    content: "Tek sorun teslimat gecikmesiydi ama ürün çok güzel.",
    date: "13-11-2024",
  },
  {
    name: "Ali F.",
    rating: 5,
    title: "Efsane",
    content: "Bu fiyata bu kalite... Şaşırdım doğrusu.",
    date: "14-11-2024",
  },
  {
    name: "İrem K.",
    rating: 3,
    title: "Ortalama",
    content: "Ne yazık ki beklentimi tam karşılamadı.",
    date: "15-11-2024",
  },
  {
    name: "Umut A.",
    rating: 5,
    title: "Harika",
    content: "Harika bir ürün.",
    date: "15-11-2024",
  },
];
export function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10 ">
    <div className="space-y-6">
      {/* Yorum Kartları */}
      <ul className="space-y-4">
        {currentComments.map((comment, index) => (
          <li key={index} className="bg-gray-100 rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <StarRating rating={comment.rating} />
                <span className="font-bold">{comment.name}</span>
              </div>
              <div className="text-sm font-bold">{comment.date}</div>
            </div>
            <div>
              <div className="font-semibold">{comment.title}</div>
              <div>{comment.content}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* Sayfalama */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 3 && currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
    </div>
  );
}

export default PaginationDemo;
