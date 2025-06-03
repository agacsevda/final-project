import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../AllProducts";
import { useToast } from "@/hooks/use-toast";

const API_KEY = "136138";
const JWT_TOKEN = "fc73d0da-a2aa-483d-ae49-98485ccc9aa7";

interface RegisterPayload {
  email: string;
  password: string;
  password2: string;
  api_key: string;
  first_name: string;
  last_name: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Şifre kontrolü
    if (formData.password.length < 8) {
      toast({
        title: "Hata!",
        description: "Şifre en az 8 karakter olmalıdır.",
        variant: "destructive",
      });
      return;
    }

    if (/^\d+$/.test(formData.password)) {
      toast({
        title: "Hata!",
        description: "Şifre sadece rakamlardan oluşamaz.",
        variant: "destructive",
      });
      return;
    }

    if (!/[a-zA-Z]/.test(formData.password)) {
      toast({
        title: "Hata!",
        description: "Şifre en az bir harf içermelidir.",
        variant: "destructive",
      });
      return;
    }

    if (!/\d/.test(formData.password)) {
      toast({
        title: "Hata!",
        description: "Şifre en az bir rakam içermelidir.",
        variant: "destructive",
      });
      return;
    }
    
    const payload: RegisterPayload = {
      email: formData.email,
      password: formData.password,
      password2: formData.password,
      api_key: API_KEY,
      first_name: formData.firstName,
      last_name: formData.lastName
    };

    console.log("Gönderilen veri:", payload);

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const jsonResponse = await response.json();
      console.log("API Yanıtı:", jsonResponse);

      if (response.ok) {
        toast({
          title: "Başarılı!",
          description: "Kullanıcı başarıyla oluşturuldu",
          variant: "default",
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        // API'den gelen hata mesajlarını göster
        const errorMessages = Object.entries(jsonResponse.reason || {})
          .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
          .join('\n');

        toast({
          title: "Hata!",
          description: errorMessages || "Kullanıcı oluşturulamadı",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Kayıt hatası:", error);
      toast({
        title: "Hata!",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    }
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
          <div className="text-sm text-gray-500 mt-1">
            <p className="font-medium mb-1">Şifre gereksinimleri:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>En az 8 karakter uzunluğunda olmalı</li>
              <li>En az bir harf içermeli</li>
              <li>En az bir rakam içermeli</li>
              <li>Sadece rakamlardan oluşamaz</li>
            </ul>
          </div>
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
