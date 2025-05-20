import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <button>
            <Menu size={24} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="left-0 h-full w-[300px] rounded-none bg-transparent z-50">
          <DrawerHeader>
            <DrawerTitle>Menü</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col space-y-4 p-4">
            <div className="relative">
              <Input
                width={"100%"}
                type="text"
                placeholder="Aramak istediğiniz ürünü yazınız"
                className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
              />
              <Button
                type="submit"
                className="rounded-r-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
              >
                Ara
              </Button>
            </div>
            <Button variant="outline" className="w-full">
              Giriş Yap
            </Button>
            <Button className="w-full">Kaydol</Button>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Kapat</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu; 