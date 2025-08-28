import React from "react";

interface ButtonProp {
  text: string;
}

const Buttons = ({ text }: ButtonProp) => {
  return (
    <button className="bg-[#4361ee] text-white w-full text-center py-3 px-3 my-2 rounded-sm cursor-pointer">
      {text}
    </button>
  );
};

export default Buttons;
