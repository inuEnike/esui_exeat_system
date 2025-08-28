import React from "react";
import Buttons from "../buttons";

interface InputsProps {
  type: string;
  placeholder: string;
  labelFor: string;
  labelText: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Inputs = ({ type, placeholder, labelFor, labelText }: InputsProps) => {
  return (
    <div className="flex flex-col gap-2 my-5 w-full justify-center text-[#888ea8]">
      <label htmlFor={labelFor}>{labelText}:</label>
      <input
        type={type}
        className="p-3 shadow-hingText shadow-sm focus:outline-0 text-md w-[100%]"
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputs;
