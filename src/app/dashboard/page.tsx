import Buttons from "@/components/buttons";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className=" bg-white md:w-[60%] m-auto shadow-md py-3 px-5  ">
        <h2 className="text-2xl font-medium capitalize">
          Welcome to Edo state university Iyamho{" "}
        </h2>
        <p className="py-3 text-lg  pb-5">Exeat Management System</p>
        <div className="text-left">
          <p className="font-light leading-10">
            Dear <span className="font-semibold"> INU George Enike </span>,
            welcome to our prestigious University Exeat Management System! To
            request for an exeat form, please follow these steps:
          </p>
          <ol className="text-[#888ea8] text-sgm w-[80%] m-auto list-decimal leading-8 my-5">
            <li> Click on "request an exeat" to start</li>
            <li> Click on "request an exeat" to start</li>
            <li> Click on "request an exeat" to start</li>
            <li> Click on "request an exeat" to start</li>
          </ol>
        </div>
        <Link href={"/dashboard/request-exeat"}>
          <Buttons text="Get Started" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
