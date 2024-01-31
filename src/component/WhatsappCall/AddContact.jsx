import React, { useState } from "react";
import User from "../Lib/User";
import { FaUser } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { BsTelephonePlus } from "react-icons/bs";

function AddContact() {
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div
      className={`text-base relative border-[1.5px] rounded-sm ${
        toggleFilter ? "border-gray-200" : "border-white"
      } hover:bg-gray-100  cursor-pointer rounded-sm flex flex-row  p-2`}
    >
      <BsTelephonePlus
        className="  mx-auto text-black/80 text-center"
        onClick={() => setToggleFilter((toggleFilter) => !toggleFilter)}
      />
      <div
        className={`absolute w-[20rem] ${
          toggleFilter ? "h-[37rem]" : "h-0"
        } duration-200 ease-in-out  -top-16 rounded-md overflow-hidden shadow-md bg-white -left-[16rem] z-20`}
      >
        <div className="w-full text-sm text-gray-950 h-full  rounded-md border-gray-200 border-2 grid grid-rows-[16%_84%] bg-gray-50 ">
          <div className="w-full h-full  flex flex-col p-3 space-y-3">
            <p className="text-xl font-bold text-gray-700 flex flex-row items-center">
              <GoArrowLeft
                className="text-xl mr-3 hover:bg-gray-200 w-9 h-9 rounded-sm p-2"
                onClick={() => setToggleFilter(false)}
              />
              New Chats
            </p>
            <input
              type="text"
              placeholder="Search name or number"
              className="border-[1.5px] rounded-md border-b-gray-500 focus-within:border-b-green-600 w-full p-1 text-sm outline-none"
            />{" "}
          </div>
          <div className="relative w-full flex flex-col h-[31rem] overflow-y-scroll">
            <div className="w-full flex flex-col p-1 ">
              <p className="text-sm  text-gray-400 pl-2 sticky">All Contact</p>
              <div className="w-full flex py-2 hover:bg-gray-200 rounded-sm mt-2 flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <p className="text-base font-semibold text-gray-800">client</p>
              </div>
              <User />
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
