"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

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
const Links = () => {
  const [open, setOpen] = useState(false);

  // Temp
  const session = true;
  const isAdmin = true;

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
        {session ? (
          <>
            {isAdmin && (
              <Link
                href="/admin"
                legacyBehavior
                passHref
                className="cursor-pointer"
              >
                <p className="inline-flex mx-1 h-9 w-max px-4 py-2 text-sm font-medium text-zinc-500 cursor-pointer">
                  Admin
                </p>
              </Link>
            )}
            <Link href="/logout" legacyBehavior passHref>
              <NavigationMenuLink className="inline-flex mx-1 h-9 w-max border-solid border-b-2 border-b-[#499eee] px-4 py-2 text-sm font-medium transition-colors dark:bg-[#1166b6] dark:hover:bg-[#499eee] hover:bg-[#1166b6] hover:rounded-md hover:border-0 dark:border-0 dark:rounded-md">
                Logout
              </NavigationMenuLink>
            </Link>
          </>
        ) : (
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        )}
      </NavigationMenuItem>
    </div>
  );
};

export default Links;
