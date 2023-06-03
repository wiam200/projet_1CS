import React from "react";

function Input(props) {
  return (
    <div className="relative border-2 border-[#999999]/70 rounded-[10px] h-[55px]">
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        required
        min="0"
        max="5,000,000"
        onChange={props.onChange}
        className="block p-6  w-full text-base text-gray-900 bg-white h-full rounded-[10px] border-1 border-gray-300 appearance-none text-[#023047]/90 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="default_outlined"
        className="absolute text-base text-gray-500  duration-300 transform -translate-y-4  top-0 z-10 origin-[0] bg-white px-5 peer-focus:px-5 peer-focus:text-[#023047]/90  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-4 left-3"
      >
        {props.label}
      </label>
    </div>
  );
}

export default Input;
