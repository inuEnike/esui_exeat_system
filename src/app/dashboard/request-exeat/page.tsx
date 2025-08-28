import Buttons from "@/components/buttons";
import Inputs from "@/components/inputs";
import React from "react";

const RequestExeat = () => {
  return (
    <div className="bg-white shadow-sm p-5 text-sm">
      <h3 className="text-lg">Request An Exeat</h3>
      <form action="" method="post" className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <Inputs
            type="text"
            placeholder="Matriculation Number"
            labelFor="matNo"
            labelText="Enter your Matriculation Number"
          />
          <Inputs
            type="text"
            placeholder="Destination"
            labelFor="destination"
            labelText="Destination"
          />
          <Inputs
            type="text"
            placeholder="Enter your reason for exeat"
            labelFor="reason"
            labelText="Reason For Exeat"
          />
          <Inputs
            type="date"
            placeholder="Date of Leave"
            labelFor="dateOfLeave"
            labelText="Date of Leave"
          />
          <Inputs
            type="date"
            placeholder="Date of Return"
            labelFor="dateOfReturn"
            labelText="Date of Return"
          />
          <Inputs
            type="text"
            placeholder="Enter your reason for exeat"
            labelFor="reason"
            labelText="Reason For Exeat"
          />
          <Inputs
            type="text"
            placeholder="Parent Contact"
            labelFor="parentContact"
            labelText="Parent Contact"
          />
          <Inputs
            type="text"
            placeholder="Level"
            labelFor="level"
            labelText="Level"
          />
          <Inputs
            type="text"
            placeholder="Department"
            labelFor="department"
            labelText="Department"
          />
        </div>
          <textarea
            rows={20}
            cols={20}
            name=""
            id=""
            required
            placeholder="Reason for Exeat"
            className="p-3  hadow-hingText shadow-sm focus:outline-0 text-md w-full mb-3"
          ></textarea>

        <Buttons text="Submit Request" />
      </form>
    </div>
  );
};

export default RequestExeat;
