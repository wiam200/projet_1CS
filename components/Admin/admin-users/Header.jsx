import SearchInput from "@/components/UI/SearchInput";
import Title from "@/components/UI/Title";
import React from "react";

function Header() {
  const searchHandler = () => {
    //sendind search request
  };
  return (
    <div className="center flex-col md:flex-row gap-6 w-full h-full justify-between">
      <Title title={"All quantum leap users"} />
      <div className="w-[300px] h-[40px]" onClick={searchHandler}>
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;

// <BsFillPlusCircleFill className=" w-7 h-7" />
