import React from "react";
import { GENERAL, MENU } from "../assets/constant";
import Logo from "./svgs/Logo";

const Sidebar = () => {
  return (
    <div className="bg-black flex flex-col justify-between items-start text-white w-[350px] p-8 h-auto">
      <div className="flex-col flex gap-10">
        <div className="flex flex-row items-center text-3xl gap-4">
          <Logo className="w-10 h-10" />
          <div className="font-bold hidden sm:block">
            <span className="text-[#FF5353] font-bold font-poppins text-4xl">
              Dream
            </span>
            <span className="font-medium text-4xl font-poppins">Music</span>
          </div>
        </div>
        <div className="p-2">
          <span className="font-poppins text-sm font-bold">Menu</span>
          {MENU.map((item) => (
            <div
              key={item.title}
              className="text-white hover:cursor-pointer items-center flex flex-row py-2 gap-4"
            >
              {item.icon}
              <span className="text-white font-poppins text-lg font-medium hidden sm:block">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <span className="font-poppins text-sm font-bold">General</span>
        {GENERAL.map((item) => (
          <div
            key={item.title}
            className="text-white hover:cursor-pointer items-center flex flex-row py-2 gap-5"
          >
            {item.icon}
            <span className="text-white font-poppins text-lg font-medium hidden sm:block">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
