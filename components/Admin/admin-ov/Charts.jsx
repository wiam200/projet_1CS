import React from "react";
function Charts() {
  return (
    <div className=" center flex-col lg:flex-row lg:justify-evenly w-full  pt-10 gap-6 ">
      <div className=" bg-[url('/images/chart1.png')] bg-cover bg-center bg-no-repeat w-full lg:w-[60%] h-[350px]"></div>
      <div className=" bg-[url('/images/chart3.png')] bg-contain bg-center bg-no-repeat w-full lg:w-[35%] h-[350px]"></div>
    </div>
  );
}

export default Charts;
