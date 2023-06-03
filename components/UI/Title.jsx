import React from "react";

function Title(props) {
  return (
    <h2 className=" text-[23px] text-[#023047]/80 font-semibold">
      {" "}
      {props.title}{" "}
    </h2>
  );
}

export default Title;
