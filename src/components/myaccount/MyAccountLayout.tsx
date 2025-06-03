import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function MyAccountLayout() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Hesap Bilgilerim");

  const menuItems = [
    { title: "Hesap Bilgilerim", path: "/myaccount/information" },
    { title: "Adreslerim", path: "/myaccount/addresses" },
    { title: "Siparişlerim", path: "/myaccount/orders" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Menü */}
        <div className="w-full md:w-64">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Hesabım</h2>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant={selectedPage === item.title ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setSelectedPage(item.title);
                    navigate(item.path);
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ İçerik */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
} 