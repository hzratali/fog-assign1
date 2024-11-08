import React from "react";
import { SearchIcon } from "./svgs/Search";

const SearchBar = () => {
  return (
    <div className="flex justify-between w-full items-center border-none px-4 mr-5 font-poppins font-normal text-lg py-2 border bg-[#2C0000] rounded-full">
      <input
        type="text"
        value="Michael Jackson"
        placeholder="Michael Jackson"
        className="bg-transparent text-white border-none outline-none"
      />
      <SearchIcon className="w-5 h-5 mr-1" />
    </div>
  );
};

export default SearchBar;
