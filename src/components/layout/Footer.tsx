import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import path from "path";

const ojsNutLinks = [
  { name: "İletişim", path: "/iletisim" },
  { name: "Hakkımızda", path: "/hakkimizda" },
  { name: "Sıkça Sorulan Sorular " , path: "/FrequentlyAskedQuestions"},
  { name: "KVKK" },
  { name: "Çalışma İlkelerimiz" },
  { name: "Satış Sözleşmesi" },
  { name: "Garanti ve İade Koşulları" },
  { name: "Gerçek Müşteri Yorumları" },
  { name: "Blog" },
];

const categories = [
  { name: "Whey Protein", path: "#" },
  { name: "Cream of Rice", path: "#" },
  { name: "Creatine", path: "#" },
  { name: "BCAA+", path: "#" },
  { name: "Pre-Workout", path: "#" },
  { name: "Fitness Paketi", path: "#" },
  { name: "Collagen", path: "#" },
  { name: "Günlük Vitamin Paketi", path: "#" },
  { name: "ZMA", path: "#" },
];

const popularProducts = [
  { name: "Protein", path: "#" },
  { name: "Spor Gıdaları", path: "#" },
  { name: "Sağlık", path: "#" },
  { name: "Gıda", path: "#" },
  { name: "Vitamin", path: "#" },
  { name: "Aksesuar", path: "#" },
  { name: "Tüm Ürünler", path: "#" },
  { name: "Paketler", path: "#" },
  { name: "Lansmana Özel Fırsatlar", path: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pt-5 md:grid-cols-2">
          <h5 className="text-lg">
            "LABORATUVAR TESTLİ ÜRÜNLER"
            <br />
            AYNI GÜN & ÜCRETSİZ KARGO <br />
            MEMNUNİYET GARANTİSİ
          </h5>
          <p className="text-gray-300">
            200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
            seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
            bizimle iletişime geçtiğinde çözüme kavuşturacağız.
          </p>
        </div>

        <div className="hidden grid-cols-1 gap-8 pt-28 md:grid md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold"></h3>
            <div>
              <h4 className="mb-2 font-bold">
                OJS
                <br />
                NUTRITION
              </h4>
              <ul className="space-y-2 text-gray-300">
                {ojsNutLinks.map((ojs) => (
                  <li key={ojs.name}>
                    <Link to={ojs.path || "#"} className="hover:text-white">
                      {ojs.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Kategoriler</h4>
            <ul className="space-y-2 text-gray-300">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path} className="hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Popüler Ürünler</h4>
            <ul className="space-y-2 leading-relaxed text-gray-300">
              {popularProducts.map((product) => (
                <li key={product.name}>
                  <Link to={product.path} className="hover:text-white">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*mobil screen footer  */}
        <div className="mx-auto flex max-w-screen-xl md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="Ojs Nut...">
              <AccordionTrigger className="font-bold text-uppercase"> OJS NUTRITION</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-gray-300">
                  {ojsNutLinks.map((ojs) => (
                    <li key={ojs.name}>
                      <Link to={ojs.path || "#"} className="hover:text-white">
                        {ojs.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Kategoriler">
              <AccordionTrigger className="font-bold text-uppercase">KATEGORİLER</AccordionTrigger>
              <AccordionContent>
              <ul className="space-y-2 text-gray-300">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path} className="hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Popüler ürünler">
              <AccordionTrigger className="font-bold text-uppercase">POPÜLER ÜRÜNLER</AccordionTrigger>
              <AccordionContent>
              <ul className="space-y-2 leading-relaxed text-gray-300">
              {popularProducts.map((product) => (
                <li key={product.name}>
                  <Link to={product.path} className="hover:text-white">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-8 border-t border-gray-200 py-2 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
