import React from "react";
import { RiSearch2Fill } from "react-icons/ri";

function SearchInput() {
  // const actions = {
  //     searchUser: searchUserHandler,
  //     searchRequest:searchRequestHandler,
  // }
  return (
    <div className="relative w-full h-full  rounded-lg overflow-hidden group">
      <input
        type="search"
        id="searchInput"
        placeholder="Search..."
        //   actions={actions}
        className=" w-full bg-gray-100 h-full absolute top-0 left-0 rounded-lg px-4 pr-12 "
      />
      <RiSearch2Fill className="absolute text-gray-400 w-6  h-6 top-2 right-4" />
    </div>
  );
}

export default SearchInput;
