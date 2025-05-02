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

type AccountFormValues = {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    defaultValues: {
      firstName: "sevda",
      lastName: "ağaç",
      phone: "+90",
      email: "sevdakarapolatt@gmail.com",
    },
  })

  function onSubmit(data: AccountFormValues) {
    console.log("Form submitted:", data)
    alert("Bilgiler güncellendi!")
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
                    <Input {...field} />
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
                    <Input {...field} />
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
                  <Input prefix="+90" {...field} />
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

          <Button type="submit" className="ml-auto block bg-black text-white hover:bg-gray-800">
            GÜNCELLE
          </Button>
        </form>
      </Form>
    </div>
  )
}
