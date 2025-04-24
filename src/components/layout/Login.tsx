import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

 function AuthTabs() {
  return (
    <div className="w-full max-w-md mx-auto mt-10 border rounded-lg shadow-sm p-6">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Giriş Yap</TabsTrigger>
          <TabsTrigger value="register">Üye Ol</TabsTrigger>
        </TabsList>

        {/* Giriş Yap Formu */}
        <TabsContent value="login">
          <form className="space-y-4 mt-6">
            <div className="space-y-1">
              <Label htmlFor="email">*E-Posta</Label>
              <Input id="email" type="email" placeholder="E-posta giriniz" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">*Şifre</Label>
              <Input id="password" type="password" placeholder="Şifre giriniz" required />
            </div>

            <div className="text-right text-sm">
              <a href="#" className="text-gray-500 hover:underline">Şifremi Unuttum?</a>
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              GİRİŞ YAP
            </Button>
          </form>
        </TabsContent>

        {/* Üye Ol Formu */}
        <TabsContent value="register">
          <form className="space-y-4 mt-6">
            <div className="space-y-1">
              <Label htmlFor="name">*Ad Soyad</Label>
              <Input id="name" placeholder="Adınızı giriniz" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="register-email">*E-Posta</Label>
              <Input id="register-email" type="email" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="register-password">*Şifre</Label>
              <Input id="register-password" type="password" required />
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              ÜYE OL
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default  AuthTabs;
