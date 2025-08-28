import Buttons from "@/components/buttons";
import Inputs from "@/components/inputs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto xl:h-[100vh] xl:w-[50%] w-full m-auto my-10    ">
      {" "}
      <div className="">
        <div className="flex items-center gap-3 flex-col text-center px-2">
          <Image src={"/logo.png"} alt="logo" width={80} height={80} />
          <h2 className="text-2xl md:text-3xl font-bold">
            Welcome to Edo State University Iyamho <br />
            <span className="text-sm text-center py-5 font-light italic">
              A centre of excellence in quality teaching, innovations and
              community development.
            </span>
          </h2>
        </div>
      </div>
      <form
        className="bg-white lg:w-[80%] w-[90%] my-10 flex flex-col justify-center items-center md:p-10 p-5 rounded-md "
        method={"post"}
      >
        <p className="text-md md:text-xl md:w-[40%] leading-10 text-center py-5">
          Its a great plesaure to have you on board
        </p>

        <Inputs
          type="text"
          placeholder="Enter your school email"
          labelFor="email"
          labelText="Email"
        />
        <Inputs
          type="text"
          placeholder="Enter your Full Name"
          labelFor="fullNme"
          labelText="Full Name"
        />
        <Inputs
          type="password"
          placeholder="Enter your Password"
          labelFor="password"
          labelText="Password"
        />
        <Inputs
          type="password"
          placeholder="Repeat Password"
          labelFor="repeatPassword"
          labelText="Repeat Password"
        />
        <p className="text-right! py-3 w-full text-sm">
          Already having an account
          <Link href={"/auth/login"}>
            <span className="text-[#4361ee]"> login</span>
          </Link>
        </p>
        <Buttons text="Register" />
      </form>
    </section>
  );
};

export default Signup;
