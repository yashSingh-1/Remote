import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <DropdownMenu>
        <div className="p-2">
        <DropdownMenuTrigger>
          <Image src="/drop.svg" alt="Drop Down Menu" width={25} height={25} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Work for yourself</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sign In</DropdownMenuItem>
          <DropdownMenuItem>Sign Up</DropdownMenuItem>
        </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default Carousel;
