import Title from "@/components/UI/Title";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function Header() {
  return (
    <div className=" flex justify-between items-center">
      <Title title={"Budget analytics"} />
      <div className=" py-2 px-4 border border-[#E6E6E6] center rounded-[10px]">
        <div className=" text-sm text-gray-400 center gap-1">
          <span>Last 3 months</span> <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Header;
