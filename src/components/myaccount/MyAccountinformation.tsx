// components/AccountForm.tsx

"use client"

import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { useState, useEffect } from "react"

type AccountFormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export default function MyAccountInformation() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<AccountFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "+90",
      email: "",
    },
  })

  // Loader fonksiyonu
  const loadUserData = async () => {
    try {
      setIsLoading(true)
      // API'den kullanıcı bilgilerini çekme işlemi burada yapılacak
      const response = await fetch('/api/user/profile')
      const data = await response.json()
      
      form.reset({
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
      })
    } catch (error) {
      console.error('Kullanıcı bilgileri yüklenirken hata oluştu:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Sayfa yüklendiğinde bilgileri çek
  useEffect(() => {
    loadUserData()
  }, []) // Boş dependency array ile sadece component mount olduğunda çalışacak

  async function onSubmit(data: AccountFormValues) {
    try {
      setIsLoading(true)
      // API'ye güncelleme isteği gönderme
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Bilgiler başarıyla güncellendi!")
      } else {
        throw new Error('Güncelleme başarısız oldu')
      }
    } catch (error) {
      console.error('Güncelleme sırasında hata oluştu:', error)
      alert("Güncelleme sırasında bir hata oluştu!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-lg font-semibold">Hesap Bilgilerim</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad *</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soyad *</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon Numarası</FormLabel>
                <FormControl>
                  <Input prefix="+90" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-posta *</FormLabel>
                <FormControl>
                  <Input disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <a href="#" className="text-sm underline text-black">
              Şifre yenile
            </a>
          </div>

          <Button 
            type="submit" 
            className="ml-auto block bg-black text-white hover:bg-gray-800"
            disabled={isLoading}
          >
            {isLoading ? 'GÜNCELLENİYOR...' : 'GÜNCELLE'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
