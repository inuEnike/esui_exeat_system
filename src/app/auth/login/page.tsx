import Buttons from "@/components/buttons";
import Inputs from "@/components/inputs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto xl:h-[100vh] xl:w-[50%] w-full m-auto my-5">
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
          Welcome back, Please fill in your correct details
        </p>

        <Inputs
          type="text"
          placeholder="Enter your school email"
          labelFor="email"
          labelText="Email"
        />

        <Inputs
          type="password"
          placeholder="Enter your Password"
          labelFor="password"
          labelText="Password"
        />

        <p className="text-right! py-3 w-full text-sm">
          {"Don't have an account"}
          <Link href={"/auth/signup"}>
            <span className="text-[#4361ee]"> Login</span>
          </Link>
        </p>

        <Buttons text="Login" />
      </form>
    </section>
  );
};

export default Login;
