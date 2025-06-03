import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../AllProducts";
import { useToast } from "@/hooks/use-toast";

const API_KEY = "136138";
const JWT_TOKEN = "fc73d0da-a2aa-483d-ae49-98485ccc9aa7";

interface LoginPayload {
  username: string;
  password: string;
  api_key: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload: LoginPayload = {
      username: email,
      password: password,
      api_key: API_KEY
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        toast({
          title: "Hata!",
          description: "Kullanıcı adı veya şifre hatalı",
          variant: "destructive",
        });
        return;
      }

      const jsonResponse = await response.json();
      
      // Token'ları localStorage'a kaydet
      localStorage.setItem("access_token", jsonResponse.access_token);
      localStorage.setItem("refresh_token", jsonResponse.refresh_token);

      toast({
        title: "Başarılı!",
        description: "Giriş başarıyla yapıldı",
        variant: "default",
      });

      // Hesap sayfasına yönlendir
      navigate("/myaccount/information");
    } catch (error) {
      console.error("Giriş hatası:", error);
      toast({
        title: "Hata!",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md min-h-screen max-h-[500px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Üye Girişi</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="space-y-2">
          <Label htmlFor="email">E-Posta</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresinizi girin"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Şifre</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
            className="w-full"
          />
        </div>
        <div className="text-right text-sm">
          <a href="#" className="text-gray-500 hover:underline">Şifremi unuttum?</a>
        </div>
        <Button type="submit" className="w-full">Giriş Yap</Button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Hesabınız yok mu?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/register")}
              className="text-blue-600 hover:underline"
            >
              Üye Ol
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}