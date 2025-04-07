import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-[#000000] py-8 text-white">
      <div className="max-w-screen-xl mx-auto my-10">
        <div className="grid grid-cols-1 gap-8 pt-5 md:grid-cols-2">
          <h5>
            "LABORATUVAR TESTLİ ÜRÜNLER"
            <br />
            AYNI GÜN & ÜCRETSİZ KARGO <br />
            MEMNUNİYET GARANTİSİ
          </h5>
          <p>
            200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
            seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
            bizimle iletişime geçtiğinde çözüme kavuşturacağız.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-28 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold"></h3>
            <div>
              <h4 className="mb-2 font-bold">
                OJS
                <br />
                NUTRITION
              </h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link
                    to="/iletisim"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    İletişim
                  </Link>
                </li>
                <Link
                  to="/hakkimizda"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Hakkımızda
                </Link>
                <li>Sıkça Sorulan Sorular</li>
                <li>KVKK</li>
                <li>Çalışma İlkelerimiz</li>
                <li>Satış Sözleşmesi</li>
                <li>Garanti ve İade Koşulları</li>
                <li>Gerçek Müşteri Yorumları</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Kategoriler</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Whey Protein</li>
              <li>Cream of Rice</li>
              <li>Creatine</li>
              <li>BCAA+</li>
              <li>Pre-Workout</li>
              <li>Fitness Paketi</li>
              <li>Collagen</li>
              <li>Günlük Vitamin Paketi</li>
              <li>ZMA</li>
            </ul>
          </div>

          <div>
          <h4 className="mb-2 font-bold">Popüler Ürünler</h4>
          <ul className="space-y-1 text-gray-300">
          <li>Protein</li>
          <li>Spor Gıdaları</li>
          <li>Sağlık</li>
          <li>Gıda</li>
          <li>Vitamin</li>
          <li>Aksesuar</li>
          <li>Tüm Ürünler</li>
          <li>Paketler</li>
          <li>Lansmana Özel Fırsatlar</li>
        </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
