import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const UserMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="text-md w-full px-8 py-3 text-gray-500 hover:text-[#919191]"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Hesap
            <FontAwesomeIcon icon={faAngleDown} className="me-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 text-center">
          <DropdownMenuLabel></DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-center">
            Üye Girişi
          </DropdownMenuItem>
          <DropdownMenuItem>Üye Ol</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu; 