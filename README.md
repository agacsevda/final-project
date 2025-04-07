# Spor Gıdaları Web Uygulaması

Bu proje, spor gıdaları ve takviyelerini tanıtan ve satan bir web uygulamasıdır. React, Vite ve TailwindCSS kullanılarak geliştirilmiştir.

## Teknolojiler

- **React**: Kullanıcı arayüzü geliştirmek için kullanılan JavaScript kütüphanesi
- **Vite**: Hızlı geliştirme deneyimi sunan modern bir yapı aracı
- **TypeScript**: Tip güvenliği sağlayan JavaScript üst kümesi
- **TailwindCSS**: Hızlı UI geliştirme için kullanılan utility-first CSS framework
- **Shadcn/UI**: Yeniden kullanılabilir UI bileşenleri kütüphanesi
- **React Router**: Sayfa yönlendirmeleri için kullanılan kütüphane

## Proje Yapısı

```
src/
├── components/            # Tüm bileşenlerin bulunduğu ana klasör
│   ├── layout/            # Sayfa düzenini oluşturan bileşenler
│   │   ├── Navbar.tsx     # Üst navigasyon çubuğu
│   │   ├── Footer.tsx     # Alt bilgi bölümü
│   │   └── Layout.tsx     # Ana sayfa düzeni (header, content, footer)
│   │
│   ├── home/              # Ana sayfa için özel bileşenler
│   │   ├── Header.tsx     # Ana sayfa başlık/banner bölümü
│   │   └── ProductCard.tsx # Ürün kartları bileşeni
│   │
│   ├── shared/            # Birden fazla sayfada kullanılan bileşenler
│   │   └── Category.tsx   # Kategori navigasyon menüsü
│   │
│   └── ui/                # Temel UI bileşenleri (shadcn/ui)
│       ├── button.tsx     # Buton bileşeni
│       ├── card.tsx       # Kart bileşeni
│       └── ...            # Diğer UI bileşenleri
│
├── pages/                 # Sayfa bileşenleri
│   ├── Home.tsx           # Ana sayfa
│   ├── About.tsx          # Hakkımızda sayfası
│   └── Contact.tsx        # İletişim sayfası
│
├── types/                 # TypeScript tip tanımlamaları
│   └── index.ts           # Tip tanımlamaları (örn. ProductCardProps)
│
├── lib/                   # Yardımcı fonksiyonlar ve araçlar
│   └── utils.ts           # Genel yardımcı fonksiyonlar
│
├── assets/                # Statik dosyalar (resimler, fontlar vb.)
│   └── images/            # Resim dosyaları
│
└── App.tsx                # Ana uygulama bileşeni ve router yapısı
```

## Klasör ve Dosya Açıklamaları

### components/
Bu klasör, uygulamadaki tüm React bileşenlerini içerir. Bileşenler işlevlerine göre alt klasörlere ayrılmıştır.

#### components/layout/
Sayfa düzenini oluşturan bileşenleri içerir:
- **Navbar.tsx**: Üst navigasyon çubuğu. Logo, menü linkleri ve giriş/kayıt butonlarını içerir.
- **Footer.tsx**: Alt bilgi bölümü. İletişim bilgileri, hızlı linkler ve telif hakkı bilgilerini içerir.
- **Layout.tsx**: Ana sayfa düzeni. Navbar, içerik alanı ve Footer'ı bir araya getirir.

#### components/home/
Ana sayfaya özel bileşenleri içerir:
- **Header.tsx**: Ana sayfa başlık/banner bölümü. Büyük görsel ve ana mesajı içerir.
- **ProductCard.tsx**: Ürün kategorilerini gösteren kart bileşenleri.

#### components/shared/
Birden fazla sayfada kullanılan paylaşılan bileşenleri içerir:
- **Category.tsx**: Ürün kategorileri için açılır navigasyon menüsü. Proteinler, Vitaminler gibi kategorileri ve alt öğelerini içerir.

#### components/ui/
Temel UI bileşenlerini içerir (shadcn/ui kütüphanesinden):
- **button.tsx**: Farklı stil ve boyutlarda buton bileşenleri.
- **card.tsx**: Kart bileşeni (başlık, içerik, alt bilgi alanları içerir).
- Diğer UI bileşenleri (input, modal, dropdown vb.)

### pages/
Uygulamanın ana sayfalarını içerir:
- **Home.tsx**: Ana sayfa. Header ve ProductCard bileşenlerini kullanır.
- **About.tsx**: Hakkımızda sayfası. Şirket bilgilerini içerir.
- **Contact.tsx**: İletişim sayfası. İletişim formu ve bilgilerini içerir.

### types/
TypeScript tip tanımlamalarını içerir:
- **index.ts**: Bileşenlerde kullanılan arayüz (interface) tanımlamaları (örn. ProductCardProps).

### lib/
Yardımcı fonksiyonlar ve araçları içerir:
- **utils.ts**: Genel yardımcı fonksiyonlar (örn. className birleştirme).

### assets/
Statik dosyaları içerir:
- **images/**: Resim dosyaları (logo, ürün görselleri vb.)

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
```bash
git clone <repo-url>
cd final
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda http://localhost:5173 adresine gidin.

## Yapı ve Geliştirme

Projeyi üretime hazırlamak için:
```bash
npm run build
```

Oluşturulan dosyalar `dist` klasöründe yer alacaktır.

## GitHub ve Versiyon Kontrolü

Projenizi GitHub'a yüklemek ve versiyon kontrolü yapmak için aşağıdaki adımları izleyebilirsiniz:

1. GitHub'da yeni bir repository oluşturun.

2. Projenizi yerel git repository'sine dönüştürün:
```bash
git init
```

3. Tüm dosyaları staging area'ya ekleyin:
```bash
git add .
```

4. İlk commit'inizi oluşturun:
```bash
git commit -m "İlk commit: Proje yapısı ve temel bileşenler eklendi"
```

5. GitHub repository'nizi uzak sunucu olarak ekleyin:
```bash
git remote add origin https://github.com/kullaniciadi/repo-adi.git
```

6. Değişikliklerinizi GitHub'a gönderin:
```bash
git push -u origin main
```

## Geliştirme İş Akışı

Projeyi geliştirirken aşağıdaki iş akışını takip edebilirsiniz:

1. Yeni bir özellik eklemek için bir branch oluşturun:
```bash
git checkout -b yeni-ozellik
```

2. Değişikliklerinizi yapın ve commit edin:
```bash
git add .
git commit -m "Yeni özellik: Açıklama"
```

3. Değişikliklerinizi main branch'e birleştirin:
```bash
git checkout main
git merge yeni-ozellik
```

4. Değişiklikleri GitHub'a gönderin:
```bash
git push
```

## İdeal React Proje Yapısı

Modern bir React uygulaması için ideal dosya yapısı aşağıdaki gibi olabilir:

```
src/
├── components/            # Tüm bileşenlerin bulunduğu ana klasör
│   ├── layout/            # Sayfa düzenini oluşturan bileşenler
│   ├── common/            # Ortak kullanılan bileşenler
│   ├── features/          # Özellik bazlı bileşenler
│   │   ├── auth/          # Kimlik doğrulama ile ilgili bileşenler
│   │   ├── products/      # Ürünlerle ilgili bileşenler
│   │   └── checkout/      # Ödeme işlemleriyle ilgili bileşenler
│   └── ui/                # Temel UI bileşenleri
│
├── hooks/                 # Özel React hook'ları
│   ├── useAuth.ts         # Kimlik doğrulama hook'u
│   ├── useFetch.ts        # Veri çekme hook'u
│   ├── useForm.ts         # Form işlemleri hook'u
│   └── useLocalStorage.ts # Yerel depolama hook'u
│
├── context/               # React context'leri
│   ├── AuthContext.tsx    # Kimlik doğrulama context'i
│   ├── CartContext.tsx    # Sepet context'i
│   └── ThemeContext.tsx   # Tema context'i
│
├── services/              # API ve harici servis entegrasyonları
│   ├── api.ts             # API istemcisi ve yapılandırması
│   ├── auth.service.ts    # Kimlik doğrulama servisi
│   ├── products.service.ts # Ürün servisi
│   └── storage.service.ts # Depolama servisi
│
├── utils/                 # Yardımcı fonksiyonlar ve araçlar
│   ├── formatters.ts      # Veri biçimlendirme fonksiyonları
│   ├── validators.ts      # Doğrulama fonksiyonları
│   └── helpers.ts         # Genel yardımcı fonksiyonlar
│
├── types/                 # TypeScript tip tanımlamaları
│   ├── auth.types.ts      # Kimlik doğrulama tipleri
│   ├── product.types.ts   # Ürün tipleri
│   └── common.types.ts    # Ortak tipler
│
├── data/                  # Statik veriler ve sabitler
│   ├── constants.ts       # Sabit değerler
│   ├── mockData.ts        # Test verileri
│   └── menuItems.ts       # Menü öğeleri
│
├── assets/                # Statik dosyalar
│   ├── images/            # Resim dosyaları
│   ├── icons/             # İkon dosyaları
│   ├── fonts/             # Font dosyaları
│   └── styles/            # Global stil dosyaları
│
├── pages/                 # Sayfa bileşenleri
│   ├── Home/              # Ana sayfa
│   │   ├── index.tsx      # Ana bileşen
│   │   ├── HomeHero.tsx   # Alt bileşen
│   │   └── styles.module.css # Sayfa stilleri
│   ├── Products/          # Ürünler sayfası
│   └── Profile/           # Profil sayfası
│
├── routes/                # Rota yapılandırması
│   ├── index.tsx          # Ana router bileşeni
│   ├── PrivateRoute.tsx   # Özel rotalar
│   └── routes.ts          # Rota tanımlamaları
│
├── store/                 # State yönetimi (Redux, Zustand vb.)
│   ├── slices/            # Redux slices
│   ├── actions/           # Redux actions
│   └── index.ts           # Store yapılandırması
│
├── config/                # Uygulama yapılandırması
│   ├── api.config.ts      # API yapılandırması
│   ├── theme.config.ts    # Tema yapılandırması
│   └── app.config.ts      # Genel uygulama yapılandırması
│
├── locales/               # Çoklu dil desteği
│   ├── tr/                # Türkçe çeviriler
│   └── en/                # İngilizce çeviriler
│
└── App.tsx                # Ana uygulama bileşeni
```

### Klasörlerin Amaçları ve İçerikleri

#### hooks/
React hook'larını içerir. Hook'lar, bileşenler arasında paylaşılabilir mantık parçalarıdır.
- **useAuth.ts**: Kullanıcı kimlik doğrulama işlemlerini yönetir.
- **useFetch.ts**: API isteklerini yönetmek için kullanılır.
- **useForm.ts**: Form işlemlerini kolaylaştırır.
- **useLocalStorage.ts**: Yerel depolama işlemlerini yönetir.

#### context/
React context'lerini içerir. Context'ler, prop drilling olmadan bileşenler arasında veri paylaşımı sağlar.
- **AuthContext.tsx**: Kimlik doğrulama durumunu global olarak yönetir.
- **CartContext.tsx**: Alışveriş sepeti verilerini global olarak yönetir.
- **ThemeContext.tsx**: Uygulama temasını global olarak yönetir.

#### services/
API ve harici servis entegrasyonlarını içerir. Her servis, belirli bir işlevsellik için API çağrılarını gruplar.
- **api.ts**: Temel API yapılandırması ve istemcisi.
- **auth.service.ts**: Giriş, kayıt, çıkış gibi kimlik doğrulama işlemleri.
- **products.service.ts**: Ürün listeleme, detay görüntüleme gibi ürün işlemleri.

#### utils/
Yardımcı fonksiyonları içerir. Bu fonksiyonlar, uygulamanın birden çok yerinde kullanılabilir.
- **formatters.ts**: Tarih, para birimi gibi verileri biçimlendirme fonksiyonları.
- **validators.ts**: Form alanları için doğrulama fonksiyonları.
- **helpers.ts**: Genel yardımcı fonksiyonlar.

#### data/
Statik verileri ve sabitleri içerir.
- **constants.ts**: Uygulama genelinde kullanılan sabit değerler.
- **mockData.ts**: Geliştirme aşamasında kullanılan test verileri.
- **menuItems.ts**: Navigasyon menüsü öğeleri.

#### store/
State yönetimi için kullanılan dosyaları içerir (Redux, Zustand, Jotai vb.).
- **slices/**: Redux toolkit slice'ları.
- **actions/**: Redux action'ları.
- **index.ts**: Store yapılandırması.

#### routes/
Rota yapılandırmasını içerir.
- **index.tsx**: Ana router bileşeni.
- **PrivateRoute.tsx**: Yetkilendirme gerektiren rotalar için özel bileşen.
- **routes.ts**: Rota tanımlamaları ve yapılandırması.

#### config/
Uygulama yapılandırmalarını içerir.
- **api.config.ts**: API endpoint'leri ve yapılandırması.
- **theme.config.ts**: Tema renkleri, fontlar ve diğer stil yapılandırmaları.
- **app.config.ts**: Genel uygulama yapılandırması.

### Dosya Yapısı İlkeleri

1. **Özellik Bazlı Organizasyon**: İlgili bileşenler, hook'lar ve servisler bir arada tutulmalıdır.
2. **Tek Sorumluluk İlkesi**: Her dosya tek bir şeyden sorumlu olmalıdır.
3. **Ölçeklenebilirlik**: Yapı, uygulama büyüdükçe kolayca genişletilebilir olmalıdır.
4. **Tutarlılık**: Benzer dosyalar için tutarlı adlandırma ve yapı kullanılmalıdır.
5. **Modülerlik**: Bileşenler ve modüller, bağımsız ve yeniden kullanılabilir olmalıdır.

### Dosya Adlandırma Kuralları

1. **Bileşenler**: PascalCase kullanılır (örn. `ProductCard.tsx`).
2. **Hook'lar**: camelCase ve "use" öneki kullanılır (örn. `useAuth.ts`).
3. **Servisler**: camelCase ve ".service" soneki kullanılır (örn. `auth.service.ts`).
4. **Tipler**: camelCase ve ".types" soneki kullanılır (örn. `product.types.ts`).
5. **Sabitler**: UPPER_SNAKE_CASE kullanılır (örn. `API_ENDPOINTS`).

Bu yapı, küçük ve orta ölçekli projelerden büyük ölçekli kurumsal uygulamalara kadar ölçeklenebilir ve sürdürülebilir bir temel sağlar.