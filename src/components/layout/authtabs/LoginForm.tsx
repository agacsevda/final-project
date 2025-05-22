import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada giriş işlemleri yapılacak
    console.log("Giriş yapılıyor:", { email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
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