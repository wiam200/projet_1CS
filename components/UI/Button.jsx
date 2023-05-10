import React from "react";

function Button(props) {
  return (
    <button
      className=" w-full h-[50px] rounded-lg bg-[#023047] hover:bg-[#023060]  text-white/95 text-lg font-semibold"
      type="submit"
    >
      {" "}
      {props.value}{" "}
    </button>
  );
}

export default Button;
