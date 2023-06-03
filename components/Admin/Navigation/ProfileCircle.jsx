import { logOut } from "@/store/reducers/userReducer";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfileCircle() {
  const userName = useSelector((state) => state.user.userName);
  const [profileState, setProfileState] = useState(false);
  const dispactch = useDispatch();

  const logOutHandler = () => {
    dispactch(logOut());
    Cookies.remove("token");
  };

  return (
    <div className="relative">
      <div className=" flex items-center gap-6">
        <h6 className=" font-medium opacity-70">{userName}</h6>
        <div className="center">
          <button
            className=" w-[40px] h-[40px] rounded-full overflow-hidden outline-double"
            onClick={(state) => setProfileState(!profileState)}
          >
            <Image
              src="/images/no-profile-picture.jpg"
              alt="profile picture"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      {profileState && (
        <div className=" absolute top-14 overflow-scroll right-0 bg-gray-50 border border-gray-100 w-[200px]  py-4 text-[16px]  rounded-lg shadow-lg center ">
          <ul className=" w-full h-full ">
            <li className=" hover:bg-gray-100 w-full py-2 px-6 ">
              <Link href="/dashboard/profile"> Your Profile</Link>
            </li>
            <li className=" hover:bg-gray-100 w-full py-2 px-6 ">
              <Link href="/dashboard"> Settings</Link>
            </li>
            <li className=" hover:bg-gray-100 w-full py-2 px-6 ">
              <Link href="/" onClick={logOutHandler}>
                {" "}
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileCircle;
