import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import User from "../Lib/User";

function Chatcontact() {
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div
      className={`text-base relative border-[1.5px] rounded-sm ${
        toggleFilter
          ? "border-gray-200 dark:border-transparent"
          : "border-white dark:border-transparent"
      } hover:bg-gray-100 dark:hover:bg-white/5  cursor-pointer rounded-sm flex flex-row  p-2`}
    >
      <FiEdit
        className="  mx-auto text-black/80 dark:text-white text-center"
        onClick={() => setToggleFilter((toggleFilter) => !toggleFilter)}
      />
      <div
        className={`absolute w-[20rem] ${
          toggleFilter ? "h-[37rem]" : "h-0"
        } duration-200 ease-in-out  -top-16 rounded-md overflow-hidden shadow-md dark:shadow bg-white dark:bg-black/40 left-0 z-20`}
      >
        <div className="w-full text-sm text-gray-950 h-full  rounded-md border-gray-200 dark:border-black/10 border-2 grid grid-rows-[16%_84%] bg-gray-50 dark:bg-[#2B2B2B] dark:backdrop-blur-xl ">
          <div className="w-full h-full  flex flex-col p-3 space-y-3">
            <p
              onClick={() => setToggleFilter(false)}
              className="text-xl font-bold text-gray-700 dark:text-white"
            >
              New Chats
            </p>
            <input
              type="text"
              placeholder="Search name or number"
              className="border-[1.5px] rounded-md dark:bg-black/20 border-b-gray-500 focus-within:border-b-green-600 w-full p-1 text-sm outline-none"
            />{" "}
          </div>
          <div className="relative w-full flex flex-col h-[31rem] overflow-y-scroll scrollDropdown  ">
            <div className="w-full flex flex-col space-y-3">
              <div className="w-full flex flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <p className="text-base font-semibold text-gray-800 dark:text-white">
                  New Group
                </p>
              </div>
              <div className="w-full flex flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white  border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">
                    user(you)
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    massage yourself
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col p-1 mt-2 ">
              <p className="text-sm  text-gray-400 dark:text-white pl-2 sticky">
                Frequently Contacted
              </p>
              <div className="w-full flex py-2 hover:bg-gray-200 dark:hover:bg-white/5 rounded-sm mt-2 flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <p className="text-base font-semibold text-gray-800 dark:text-white">client</p>
              </div>
              <User />
              <User />
            </div>
            <div className="w-full flex flex-col p-1 ">
              <p className="text-sm  text-gray-400 dark:text-white pl-2 sticky">All Contact</p>
              <div className="w-full flex py-2 hover:bg-gray-200 dark:hover:bg-white/5 rounded-sm mt-2 flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <p className="text-base font-semibold text-gray-800 dark:text-white">client</p>
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

export default Chatcontact;
