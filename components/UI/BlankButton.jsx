import React from "react";

function BlankButton(props) {
  return (
    <button className="py-[6px] px-6 rounded-[10px] font-medium bg-white/80 border-2 border-gray-300 hover:border-gray-400 hover:text-gray-500 text-gray-400 center shadow-sm ">
      {props.value}
    </button>
  );
}

export default BlankButton;
