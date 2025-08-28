import { Navlinks } from "@/constants/Navlinks";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useNavigation } from "@/context";

const SideNav = () => {
  const path = usePathname();
  return (
    <div className="h-full py-5 ">
      <div className="flex items-center gap-3 flex-col  px-2">
        <Image
          src={"/georgePassport.jpg"}
          alt="logo"
          width={100}
          height={100}
          className="w-[90px] h-[90px] rounded-full object-cover"
        />
        <div className="my-5 w-full ">
          {Navlinks.map((link) => (
            <ul key={link.name} className="py-4 ">
              <Link
                href={link.link}
                className={`flex gap-3 items-center px-7 py-5  ${
                  path === link.link
                    ? "bg-white shadow-xs shadow-b-md rounded-sm transition-all duration-500 ease-in-out x "
                    : ""
                }`}
              >
                {link.icon}
                <p className="text-xs font-medium">
                  {link.number} {link.name}
                </p>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
