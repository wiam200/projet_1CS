import ActionButton from "@/components/UI/ActionButton";
import Title from "@/components/UI/Title";
import React, { Fragment } from "react";
import { setModelAddProgramIsVisible } from "@/store/reducers/uiReducer";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <header className=" center flex-col items-start space-y-6 md:flex-row md:justify-between">
        <Title title={"All quantum leap programmes"} />
        <div
          className=" w-full md:w-fit"
          onClick={() => {
            dispatch(setModelAddProgramIsVisible(true));
          }}
        >
          <ActionButton value={"add program"} />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
