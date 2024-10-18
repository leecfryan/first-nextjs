import React from "react";
import Links from "./links/Links";
import { ModeToggle } from "./darkmode/DarkMode";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div>Logo</div>
      <div className="flex">
        <Links />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
