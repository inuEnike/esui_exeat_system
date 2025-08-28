import Image from "next/image";
import React from "react";

const NavLogo = () => {
  return (
    <div className="bg-[#0e1726] w-screen text-white p-2 ">
      <div className="px-5 flex items-center gap-3">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-md sm:text-xl md:text-2xl">
          EDO STATE UNIVERSITY IYAMHO
        </h2>
        <div />
      </div>
    </div>
  );
};

export default NavLogo;
