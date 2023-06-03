import Image from "next/image";
import React from "react";
import Notification from "./Notification";
import ProfileCircle from "./ProfileCircle";

function TopBar() {
  return (
    <div className=" h-[60px] w-full flex justify-between">
      <div className=" flex items-center gap-6">
        <div>
          <Image
            src="/images/esi.png"
            alt="esi sba logo"
            width={60}
            height={40}
          />
        </div>
        <h1 className=" font-semibold opacity-80">Dashboard</h1>
      </div>
      <div className="center gap-6">
        <Notification />
        <div className=" w-[1px] h-[75%] bg-gray-300/50"></div>
        <ProfileCircle />
      </div>
    </div>
  );
}

export default TopBar;
