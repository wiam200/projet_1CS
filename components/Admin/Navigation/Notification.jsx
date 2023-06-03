import React, { Fragment, useState } from "react";
import { RiNotification3Fill } from "react-icons/ri";
import { IoArrowUndoSharp } from "react-icons/io5";

const DUMMYNOT = [
  {
    id: "n1",
    userName: "ayoub bg",
    body: "hey there, im facing some login issues ,i cannot get the email verification ",
  },
  {
    id: "n2",
    userName: "ayoub bg",
    body: "hey there, im facing some login issues ,i cannot get the email verification ",
  },
  {
    id: "n2",
    userName: "ayoub bg",
    body: "hey there, im facing some login issues ,i cannot get the email verification ",
  },
];
function Notification() {
  const [notificationState, setNotificationState] = useState(false);
  const [consultedNotification, setConsultedNotification] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={(state) => {
          setNotificationState(!notificationState);
          setConsultedNotification(true);
        }}
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
      >
        <RiNotification3Fill className=" w-[22px] h-[22px] text-[var(--primary-color)] opacity-40" />
        {!consultedNotification && (
          <div className="relative flex">
            <div className="relative  w-4 h-4 center text-xs  bg-red-500 text-white/90 rounded-full -top-2 right-3 ">
              {" "}
              3
            </div>
          </div>
        )}
      </button>

      {notificationState && (
        <div className=" absolute top-8 z-20 overflow-scroll -right-10 lg:right-0 bg-gray-50 border border-gray-100 w-[350px] lg:w-[500px] h-[340px]  rounded-lg shadow-lg  ">
          <ul>
            {DUMMYNOT.map((not) => {
              return (
                <li
                  key={not.id}
                  className=" space-y-2 border-b-[1px] border-gray-200 py-6  hover:bg-gray-100 px-8 w-full"
                >
                  <div>
                    <h5 className=" text-base font-semibold text-[#023047]/80 flex gap-2 items-center">
                      <IoArrowUndoSharp className=" rotate-180 h-5 w-5" />
                      {not.userName}
                    </h5>
                    <h6 className=" text-xs text-gray-500 ml-6">
                      w.mehal@esi-sba.dz
                    </h6>
                  </div>
                  <p className=" text-sm text-gray-500 ml-6">{not.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
