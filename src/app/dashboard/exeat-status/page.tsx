import Buttons from "@/components/buttons";
import Inputs from "@/components/inputs";
import React from "react";

const ExeatStatus = () => {
  return (
    <div className="bg-white md:w-[35%] m-auto my-5 p-5 shadow-lg rounded-xl">
      <h2 className="text-xl uppercase font-bold">Check Exeat status</h2>
      <form action="">
        <Inputs
          type="text"
          placeholder="Enter your Exeat ID"
          labelFor="exeatId"
          labelText="Exeat ID"
        />
        <Buttons text="Proceed" />
        {/* <Buttons text="Check Status" /> */}
      </form>
    </div>
  );
};

export default ExeatStatus;
