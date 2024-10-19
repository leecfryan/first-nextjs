import React from "react";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  
} from "@/components/ui/navigation-menu";
import { link } from "fs";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      <NavigationMenuItem>
        {links.map((link) => (
          <Link href={link.path} key={link.title} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {link.title}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuItem>
    </div>
  );
};

export default Links;
