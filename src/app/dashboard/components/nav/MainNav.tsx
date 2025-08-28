import { useNavigation } from "@/context";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa6";

const MainNav = () => {
  const { handleToggle } = useNavigation();
  let message = 1;

  return (
    <div className="bg-white shadow-xs px-7 py-3 relative">
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center gap-5">
          <button onClick={handleToggle} className="cursor-pointer">
            <GiHamburgerMenu size={20} />
          </button>
          <p className="text-sm flex items-center gap-1">
            <span className="lg:block hidden">Dashboard / </span>Exeat
            Management System
          </p>
        </div>
        {message > 0 ? (
          <div className=" ">
            <div className="absolute right-8 top-1 bg-[#4361ee] text-white rounded-full px-2">
              <p className="text-sm">1</p>
            </div>
            <div className="">
              <FaBell size={30} />
            </div>
          </div>
        ) : (
          <div className=" ">
            <div className="">
              <FaBell size={30} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
