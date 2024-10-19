import React from "react";
import Links from "./links/Links";
import { ModeToggle } from "./darkmode/DarkMode";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-2">
      <NavigationMenu className="flex flex-row justify-between min-w-full">
        <div className="hover:scale-110 transition">
          <Link href="/">Ryan's Website</Link>
        </div>
        <div className="flex">
          <NavigationMenuList>
            <Links />
          </NavigationMenuList>
          <ModeToggle />
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
