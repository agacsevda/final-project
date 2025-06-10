import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { BASE_URL } from "../AllProducts";

interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
}

export function ProfileForm() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/my-account`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Profil bilgileri alınamadı");
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      toast({
        title: "Hata!",
        description: "Profil bilgileri yüklenirken bir hata oluştu",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center text-red-500">
        Profil bilgileri yüklenemedi
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-500">Ad</Label>
            <p className="mt-1 text-lg">{profile.first_name}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-500">Soyad</Label>
            <p className="mt-1 text-lg">{profile.last_name}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-500">E-posta</Label>
            <p className="mt-1 text-lg">{profile.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-500">Telefon</Label>
            <p className="mt-1 text-lg">{profile.phone || "Belirtilmemiş"}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-500">Adres</Label>
            <p className="mt-1 text-lg">{profile.address || "Belirtilmemiş"}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-500">Üyelik Tarihi</Label>
            <p className="mt-1 text-lg">
              {new Date(profile.created_at).toLocaleDateString("tr-TR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 