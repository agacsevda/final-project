import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold">Bize Ulaşın</h1>
        <p className="mb-8 text-center text-gray-600">
          Bize aşağıdaki iletişim ulaşabilirsiniz.
        </p>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="text" placeholder="İsim *" className="bg-gray-50" />
            <Input type="text" placeholder="Soyad" className="bg-gray-50" />
          </div>
          <Input type="email" placeholder="E-Posta" className="bg-gray-50" />
          <Textarea
            placeholder="Mesaj"
            className="min-h-[150px] bg-gray-50"
          />
          <div className="text-center">
            <Button className="min-w-[200px] bg-black text-white hover:bg-black/90">
              GÖNDER
            </Button>
          </div>
        </form>

        <div className="mt-8 space-y-4 text-center text-sm text-gray-600">
          <p>
            *Aynı gün kargo hafta içi 16:00, Cumartesi ise 11:00'e kadar verilen siparişler için geçerlidir.
          </p>
          <p>
            Siparişler kargoya verilince e-posta ve sms ile bilgilendirme yapılır.
          </p>
          <p>
            Telefon ile{" "}
            <span className="font-semibold">0850 303 29 89</span> numarasını
            arayarak da ücretsiz sesli mesaj bırakabilirsiniz. Sesli mesajlarınıza
            hafta içi saat{" "}
            <span className="font-semibold">09:00-17:00</span> arasında dönüş
            sağlanmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
