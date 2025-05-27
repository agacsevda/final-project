"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { Link } from "react-router-dom";

// Kategori verileri
const categories = [
  {
    title: "Proteinler",
    items: [
      { name: "Whey Protein", description: "Hızlı emilen protein tozu" },
      { name: "Kazein Protein", description: "Yavaş salınımlı protein" },
      { name: "Bitkisel Protein", description: "Vegan protein alternatifleri" },
      { href: "/#" },
    ],
  },
  {
    title: "Vitaminler",
    items: [
      { name: "Multivitamin", description: "Günlük vitamin ihtiyacı" },
      { name: "Vitamin D", description: "Kemik sağlığı için" },
      { name: "B Kompleks", description: "Enerji metabolizması için" },
      { href: "/#" },
    ],
  },
  {
    title: "Gıda",
    items: [
      { name: "Gluten Free Bar", description: "Glutensiz protein barlar" },
      { name: "Glutensiz Karışımlar", description: "Spor sonrası takviyeler" },
      { name: "Glutensiz İçecekler", description: "Performans içecekleri" },
      { href: "/#" },
    ],
  },
  {
    title: "Spor Ürünleri",
    items: [
      { name: "Yeni Gelenler", description: "En yeni ürünlerimiz" },
      { name: "Çok Satanlar", description: "En popüler ürünlerimiz" },
      { name: "İndirimli Ürünler", description: "Kampanyalı ürünler" },
      { href: "/#" },
    ],
  },
 
];

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="bg-black text-center">
      <div className="container mx-auto flex justify-center">
        <NavigationMenu>
          <NavigationMenuList
            className={cn(
              "items-center justify-center py-2 text-lg text-white md:flex md:space-x-12",
              isOpen ? "flex flex-col space-y-2" : "hidden md:flex",
            )}
          >
            {categories.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger className="bg-black text-white uppercase">
                  <Link
                    to={`/tumurunler/AllProducts?name=${encodeURIComponent(category.title)}`}
                    onClick={() =>
                      (window.location.href = `/tumurunler/AllProducts?name=${encodeURIComponent(category.title)}`)
                    }
                  >
                    {category.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {category.items.map((item, index) => (
                      <ListItem key={index} title={item.name}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black text-white uppercase">
                <Link to="/tumurunler/AllProducts">TÜM ÜRÜNLER</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <div className="border-b bg-white px-4 py-2 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-start justify-between gap-y-2 text-sm text-black md:flex-row md:items-center">
          {/* Aynı Gün Kargo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🚚</span>
            <span>
              <strong>AYNI GÜN KARGO</strong> - 16.00'dan sonra önceki
              siparişlerde
            </span>
          </div>

          {/* Ücretsiz Kargo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">😊</span>
            <span>
              <strong>ÜCRETSİZ KARGO</strong> - 100 TL üzeri siparişlerde
            </span>
          </div>

          {/* Güvenli Alışveriş */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <span>
              <strong>GÜVENLİ ALIŞVERİŞ</strong> - 1.000.000+ mutlu alışveriş
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
