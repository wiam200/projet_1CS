import React from "react";
import { Oval } from "react-loader-spinner";

function Spinner() {
  return (
    <div className=" w-full h-screen  flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#142d93"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#142d53"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Spinner;
