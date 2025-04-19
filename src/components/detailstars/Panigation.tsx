import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// 1. Dummy yorum verisi
export const comments = [
  "Ürün gerçekten harikaydı, beklediğimden daha iyi çıktı!",
  "Kargolama hızlıydı ama ürün beklentimi tam karşılamadı.",
  "Kalitesi mükemmel, kesinlikle tavsiye ederim.",
  "Ürün çok güzeldi fakat açıklamalarda yazanlarla birebir aynı değildi.",
  "İstediğimi tam olarak bulamadım ama yine de fena değil.",
  "Paketleme özenliydi, teşekkürler.",
  "Kullanmaya başladım ve gayet memnunum.",
  "Renk biraz farklı geldi ama genel olarak beğendim.",
  "Ürün açıklamalardaki gibi değil maalesef.",
  "Fiyatına göre oldukça iyi bir performans sunuyor.",
  "İlk izlenimim olumlu, uzun vadede göreceğiz.",
  "Koku yapıyor ama işlevi gayet güzel.",
  "Satıcı çok ilgiliydi, memnun kaldım.",
  "Görseldekiyle aynı geldi, teşekkür ederim.",
  "Ürünü beğendim ancak teslimat biraz gecikti.",
  "Kalitesiz bekliyordum ama gayet sağlam çıktı.",
  "Büyüklüğü ideal, tam aradığım gibi.",
  "Kullanım talimatı yoktu, biraz zorlandım.",
  "Ürün geldiğinde bazı parçalar eksikti.",
  "Çok güzel ama fiyatı biraz yüksek gibi."
]

export function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1)
  const commentsPerPage = 5

  // 2. Sayfalama hesaplamaları
  const totalPages = Math.ceil(comments.length / commentsPerPage)
  const startIndex = (currentPage - 1) * commentsPerPage
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage)

  // 3. Sayfa değiştirme
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="space-y-4">
      {/* Yorumları Göster */}
      <ul className="space-y-2">
        {currentComments.map((comment, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            {comment}
          </li>
        ))}
      </ul>

      {/* Sayfalama */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePageChange(currentPage + 1)} />
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
            <PaginationNext  onClick={() => handlePageChange(currentPage)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationDemo;
