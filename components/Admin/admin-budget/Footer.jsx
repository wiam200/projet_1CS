import ActionButton from "@/components/UI/ActionButton";
import React, { Fragment, useEffect, useState } from "react";
import AddAmount from "./pop-ups/AddAmount";
import { useDispatch, useSelector } from "react-redux";
import {
  setModelAddIsVisible,
  setModelTransferIsVisible,
} from "@/store/reducers/uiReducer";
import Transfer from "./pop-ups/Transfer";

function Footer(props) {
  const dispatch = useDispatch();
  const addIsVisible = useSelector((state) => state.ui.modelAddIsVisible);
  const transferIsVisible = useSelector(
    (state) => state.ui.modelTransferIsVisible
  );

  return (
    <Fragment>
      <div className="center flex-col gap-6 md:flex-row md:justify-between">
        <div className="center flex-col w-full md:flex-row justify-start gap-3 lg:gap-6">
          <div
            className=" w-full md:w-fit"
            onClick={() => {
              dispatch(setModelAddIsVisible(true));
            }}
          >
            <ActionButton value={"+add"} />
          </div>
          <div className=" w-full md:w-fit">
            <ActionButton value={"Modify"} />
          </div>
          <div
            onClick={() => dispatch(setModelTransferIsVisible(true))}
            className=" w-full md:w-fit"
          >
            <ActionButton value={"Transfer"} />
          </div>
        </div>

        <div className=" hover:cursor-pointer  bg-[#023047] min-w-[360px] hover:bg-[#083f5a]  min-h-[140px] center flex-col rounded-[10px] shadow-md space-y-1">
          <h2 className=" text-[28px] text-white/80 font-semibold">
            {props.blackBox.amount} Da{" "}
          </h2>
          <h5 className=" text-[18px] font-medium text-[#8ECAE6]/80">
            {props.blackBox.title}
          </h5>
        </div>
      </div>
      {addIsVisible && <AddAmount />}
      {transferIsVisible && <Transfer />}
    </Fragment>
  );
}

export default Footer;
