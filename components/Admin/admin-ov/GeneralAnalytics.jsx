import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function GeneralAnalytics({ data }) {
  return (
    <Fragment>
      <div className=" bg-[var(--primary-color)] w-full  rounded-[10px] h-full py-6 lg:py-0 md:h-[120px] overflow-hidden">
        <ul className=" grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 text-white/80 h-full center">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="center flex-col border-b-[1px] md:border-b-0 md:border-r-[1px] border-white/30 h-full md:h-[75%]"
              >
                <h2 className=" text-[28px] font-semibold">{item.amount} da</h2>
                <h5 className=" text-[18px] font-medium text-[#8ECAE6]/80">
                  {item.title}
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default GeneralAnalytics;
