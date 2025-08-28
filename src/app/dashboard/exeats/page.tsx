import Buttons from "@/components/buttons";
import React from "react";
import { dummyData } from "@/constants/dummydata";
import Link from "next/link";

const Exeats = () => {
  return (
    <div className="flex flex-wrap gap-5 md:p-5 py-5 ">
      {dummyData.map((data, index) => (
        <div
          className="bg-white shadow-sm p-3 text-sm md:w-[48%] lg:w-[31%] w-full m-auto"
          key={index}
        >
          <h2 className="py-5">
            Matriculation Number: <span>{data.matricNo}</span>
          </h2>
          <h2 className="py-5">
            Destination: <span>{data.destination}</span>
          </h2>

          <h2 className="py-5">
            Department: <span>{data.department}</span>
          </h2>
          <h2 className="py-5">
            Level: <span>{data.level}</span>
          </h2>
          <Link href={`/dashboard/exeats/${index}`}>
            <Buttons text="More Info" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Exeats;
