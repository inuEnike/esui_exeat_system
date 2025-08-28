import { IoHomeSharp } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

export const Navlinks = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <IoHomeSharp size={20} color="#7ca9cf" />,
  },
  {
    name: "Request Exeat",
    link: "/dashboard/request-exeat",
    icon: <IoCallSharp size={20} color="#7ca9cf" />,
    number: "1 -",
  },
  {
    name: "All Exeat",
    link: "/dashboard/exeats",
    icon: <MdAssignment size={20} color="#7ca9cf" />,
    number: " 2  -",
  },
  {
    name: "Check Exeat Status",
    link: "/dashboard/exeat-status",
    icon: <IoCheckmarkCircleSharp size={20} color="#7ca9cf" />,
    number: "3 -",
  },

  {
    name: "Exeat Slip",
    link: "/dashboard/exeat-slip",
    icon: <MdAssignment size={20} color="#7ca9cf" />,
    number: "4 -",
  },
];
