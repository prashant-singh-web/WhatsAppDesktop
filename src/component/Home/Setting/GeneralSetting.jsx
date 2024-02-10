import React, { useState } from "react";
import CountryDropdown from "./lib/CountryDropdown";

function GeneralSetting() {
  const [toggle, settoggle] = useState(false);
  const [emoji1, setEmoji1] = useState(false);
  return (
    <div className="w-full h-full flex flex-col p-5 dark:text-gray-300">
      <p className="text-xl font-semibold">General</p>
      <p className="text-lg mt-5">Login</p>
      <div className="w-full flex flex-row justify-between items-center mt-4 ">
        <p className="text-sm text-gray-800 dark:text-white">start Whatsapp at login</p>
        <div className="flex items-center flex-row space-x-3">
          <p
            className={`text-sm ${toggle ? "text-gray-800 dark:text-white" : "text-gray-400"}`}
          >
            {toggle ? "on" : "off"}
          </p>
          <div
            onClick={() => settoggle((toggle) => !toggle)}
            className={`w-10 rounded-xl  h-5 border ${toggle ? "dark:border-transparent":"dark:border-gray-200/70"} relative cursor-pointer duration-200 ease-in-out ${
              toggle ? "bg-green-700" : "bg-white dark:bg-transparent"
            } before:absolute before:p-1.5 ${
              toggle
                ? "before:bg-white dark:before:bg-black before:translate-x-5"
                : "before:bg-gray-500 dark:before:bg-gray-300 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[3px] before:left-[2.5px]`}
          ></div>
        </div>
      </div>
      <p className="text-lg mt-7 mb-2">Language</p>
      <CountryDropdown />
      <p className="text-lg mt-4">Typing</p>
      <p className="text-xs text-gray-600 dark:text-white mt-2">
        Change typing settings for{" "}
        <span className="font-semibold">Autocorrect</span> and{" "}
        <span className="font-semibold">misspelled highlight</span> from{" "}
        <span className="text-green-600 underline hover:no-underline cursor-pointer">
          window settings
        </span>
      </p>
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-medium">Replace text with emoji</p>
          <p className="text-xs">
            Emoji will replace specific text as <br /> you type
          </p>
          <p className="text-xs text-green-600 underline hover:no-underline cursor-pointer">See list of text</p>
        </div>
        <div className="flex">
          <p
            className={`text-sm my-auto mr-1`}
          >
            😁
          </p>
          <div
            onClick={() => setEmoji1(emoji1 => !emoji1)}
            className={`w-10 rounded-xl  h-5 border ${emoji1 ? "dark:border-transparent":"dark:border-gray-200/70"} relative cursor-pointer duration-200 ease-in-out ${
              emoji1 ? "bg-green-700" : "bg-white dark:bg-transparent"
            } before:absolute before:p-1.5 ${
              emoji1
              ? "before:bg-white dark:before:bg-black before:translate-x-5"
              : "before:bg-gray-500 dark:before:bg-gray-300 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[3px] before:left-[2.5px]`}
          ></div>
        </div>
      </div>
      <hr className="my-4"/>
      <button className="px-4 mb-2 w-fit h-fit py-1 border-[1.5px] border-gray-200 dark:border-gray-500/50 rounded-md text-black text-sm bg-gray-100 dark:bg-white/5 dark:text-white">
        Log out
      </button>
      <p className="text-xs">Chat history on this computer will be cleard when you log out</p>
    </div>
  );
}

export default GeneralSetting;
