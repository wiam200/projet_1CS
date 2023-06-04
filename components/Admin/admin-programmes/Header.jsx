import ActionButton from "@/components/UI/ActionButton";
import Title from "@/components/UI/Title";
import React from "react";
import { setModelAddIsVisible } from "@/store/reducers/uiReducer";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className=" center justify-between">
      <Title title={"All quantum leap programmes"} />
      <div
        className=" w-full md:w-fit"
        onClick={() => {
          dispatch(setModelAddIsVisible(true));
        }}
      >
        <ActionButton value={"add program"} />
      </div>
    </header>
  );
}

export default Header;
