const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 py-12 ">
      <h1 className="text-3xl font-bold mb-6">
        Sağlıklı ve Fit Yaşamayı Zevkli ve Kolay Hale Getirmek İçin Varız
      </h1>

      <p className="mb-4">
        2016 yılından beri sporcu gıdaları, takviye edici gıdalar ve fonksiyonel gıdaları üreten bir firma olarak;
        müşterilerimize en kaliteli, lezzetli, tüketilmesi kolay ürünleri sunuyoruz.
      </p>

      <p className="mb-4">
        Müşteri memnuniyeti ve sağlığı her zaman önceliğimiz olmuştur. Ürünlerimizde, yüksek kalite standartlarına bağlı
        olarak, sporcuların ve sağlıklı yaşam tutkunlarının ihtiyaçlarına yönelik besleyici çözümler sunuyoruz...
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1.000.000+ den Fazla Mutlu Müşteri</h2>
      <p className="mb-8">
        Sanatçılardan profesyonel sporculara, doktorlardan öğrencilere hayatın her alanında sağlıklı yaşam ve beslenmeyi
        hedefleyen 1.000.000’dan fazla kişiye ulaştık.
      </p>

      <h3 className="text-xl font-medium mb-4">Sertifikalarımız</h3>
      <div className="flex flex-wrap gap-4 mb-12">
        <img src="/images/iso1.png" alt="ISO Sertifikası" className="h-20" />
        <img src="/images/helal.png" alt="Helal Sertifikası" className="h-20" />
        <img src="/images/iso22000.png" alt="ISO 22000 Sertifikası" className="h-20" />
        <img src="/images/gmp.png" alt="GMP Sertifikası" className="h-20" />
        <img src="/images/certified.png" alt="Certified Sertifikası" className="h-20" />
        <img src="/images/ghp.png" alt="GHP Sertifikası" className="h-20" />
      </div>

      {/* ⭐ Yorumlar Bölümü */}
      <div className="border-t pt-8">
        <div className="flex items-center gap-2 mb-4">
          {/* Yıldızlar */}
          <div className="flex text-yellow-400 text-xl">
            {'★'.repeat(5)}
          </div>
          {/* Yorum sayısı */}
          <a href="#" className="text-blue-600 underline text-sm">196900 Yorum</a>
        </div>

        {/* Ürün İncelemeleri Butonu */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full mb-6">
          ÜRÜN İNCELEMELERİ
        </button>

        {/* Henüz yorum yok */}
        <p className="text-center text-lg text-gray-700">Henüz yorum bulunmamaktadır.</p>
      </div>
    </div>
  );
};

export default About;
