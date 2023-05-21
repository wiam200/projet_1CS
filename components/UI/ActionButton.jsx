import React from "react";

function ActionButton(props) {
  return (
    <button className=" py-[6px] px-8 w-full md:w-fit rounded-[10px] font-medium text-white/80 bg-[#023047] center shadow-sm hover:bg-[#083f5a]">
      {props.value}
    </button>
  );
}

export default ActionButton;
