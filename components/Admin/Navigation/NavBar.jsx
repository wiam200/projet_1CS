import Link from "next/link";
import React from "react";
import {
  HiSquares2X2,
  HiSquare3Stack3D,
  HiInboxStack,
  HiMegaphone,
} from "react-icons/hi2";
import { AiFillPieChart } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
function NavBar() {
  return (
    <nav className=" w-full md:w-[6%] h-[80px] md:h-[97vh] rounded-[10px] shadow-md bg-[var(--primary-color)] text-white/90 mt-[10px] lg:fixed ">
      <ul className=" w-full h-full lg:pt-16 px-1 flex md:flex-col items-center justify-evenly lg:justify-start  gap-6 md:gap-8">
        <li className=" px-6 lg:border-l-2 lg:border-[#37b8f8]  center ">
          <Link href="/dashboard">
            <HiSquares2X2 className=" w-[25px] h-[25px] text-[#37b8f8]" />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/programmes">
            <HiSquare3Stack3D className=" w-[25px] h-[25px] " />
          </Link>
        </li>
        <li>
          <Link href="/requests" className="relative">
            <HiInboxStack className=" w-[25px] h-[25px]" />
            <div className="absolute  w-4 h-4 center text-xs  bg-red-500 text-white/90 rounded-full top-2 -right-8 ">
              <span>3</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/budget">
            <AiFillPieChart className="w-[25px] h-[25px]" />
          </Link>
        </li>
        <li>
          <Link href="/users" className="relative">
            <FaUsersCog className=" w-[25px] h-[25px]" />
            <div className="absolute  w-4 h-4 center text-xs  bg-red-500 text-white/90 rounded-full top-3 -right-9 ">
              <span>7</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/announcements">
            <HiMegaphone className=" w-[25px] h-[25px]" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
