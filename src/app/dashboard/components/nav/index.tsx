import React from "react";
import MainNav from "./MainNav";
import NavLogo from "./NavLogo";

const Nav = () => {
  return (
    <div className="fixed top-0 right-0 print:hidden">
      <NavLogo />
      <MainNav />
    </div>
  );
};

export default Nav;
