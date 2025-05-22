import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada kayıt işlemleri yapılacak
    console.log("Kayıt yapılıyor:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Üye Ol</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Ad</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Adınız"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Soyad</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Soyadınız"
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Posta</Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresiniz"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Şifre</Label>
          <Input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Şifre belirleyin"
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">Üye Ol</Button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Zaten üye misiniz?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="text-blue-600 hover:underline"
            >
              Giriş Yap
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
