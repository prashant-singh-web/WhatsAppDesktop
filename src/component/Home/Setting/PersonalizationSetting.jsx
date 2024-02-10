import React, { useEffect, useState } from "react";
import { VscSymbolColor } from "react-icons/vsc";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

function PersonalizationSetting() {
  const [mode, setMode] = useState("System default");
  const [toggle, setToggle] = useState(false);
  const [textToggle, setTextToggle] = useState(false);
  const [fontSize, setFontSize] = useState("80%");
  const FontArrey = ["80%", "90%", "100%", "110%", "125%", "135%", "150%"];
  useEffect(() => {
    if (mode === "Light") {
      document.documentElement.classList.remove("dark");
    } else if (mode === "Dark") {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);
  console.log(localStorage.getItem("theme"));
  return (
    <div className="w-full flex flex-col p-5 ">
      <p className="text-xl font-semibold">Personalization</p>
      <p className="text-lg mt-6">Theme</p>
      <p className="text-sm">App theme color</p>
      <div
        className="flex my-2 cursor-pointer w-[65%] flex-row  items-center px-3 border-[1.5px]  py-1 rounded-md border-b-gray-300 relative"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <VscSymbolColor />
        <p className="text-sm pr-7 pl-3 w-full">{mode}</p>
        <GoChevronDown />
        <div
          className={`absolute cursor-default w-full ${
            toggle ? "h-fit" : "h-0"
          } top-0 rounded-md left-0 overflow-hidden bg-white/30 backdrop-blur-md`}
        >
          <div className="border-[1.5px] rounded-md w-full h-full flex flex-col p-1">
            <div
              onClick={() => setMode("System default")}
              className={`flex relative before:absolute before:left-0 before:w-1 before:h-4 before:rounded-md ${
                mode === "System default"
                  ? "before:bg-green-600 bg-black/5"
                  : ""
              } flex-row cursor-pointer items-center w-full py-1.5 hover:bg-black/5 rounded-md px-3`}
            >
              <VscSymbolColor className="" />
              <p className="text-sm pr-7 pl-3">System default</p>
            </div>
            <hr className="my-2" />
            <div
              onClick={() => setMode("Light")}
              className={`flex relative before:absolute before:left-0 before:w-1 before:h-4 before:rounded-md ${
                mode === "Light" ? "before:bg-green-600 bg-black/5" : ""
              } flex-row mb-2 cursor-pointer items-center w-full py-1.5 hover:bg-black/5 rounded-md px-3`}
            >
              <MdOutlineLightMode className="" />
              <p className="text-sm pr-7 pl-3">Light</p>
            </div>
            <div
              onClick={() => setMode("Dark")}
              className={`flex relative before:absolute before:left-0 before:w-1 before:h-4 before:rounded-md ${
                mode === "Dark" ? "before:bg-green-600 bg-black/5" : ""
              } flex-row cursor-pointer items-center w-full py-1.5 hover:bg-black/5 rounded-md px-3`}
            >
              <CiDark className="" />
              <p className="text-sm pr-7 pl-3">Dark</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg my-1">Chat wallpaper</p>
      <div className="w-full grid grid-cols-5 gap-2">
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gray-200 "></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-orange-100 "></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-cyan-200 to-blue-100 "></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-green-100 to-blue-200 "></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-red-100 via-cyan-200 to-pink-200"></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-sky-200 via-green-100 to-white"></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-yellow-100 via-white to-yellow-100"></div>
        <div className="w-full rounded-md h-12 border-2 hover:border-gray-400 border-white bg-gradient-to-r from-red-100 via-red-100 to-white"></div>
      </div>
      <div className="flex flex-row items-center my-3">
        <input
          type="checkbox"
          name=""
          id=""
          className="p-2 border-[1.5px] hover:bg-gray-200 checked:hover:bg-green-600 border-gray-500 checked:border-green-600 rounded-md duration-300 ease-in-out che appearance-none checked:bg-green-600 relative before:absolute before:bg-white before:w-[2px] checked:before:h-[6px] before:rotate-[-40deg] before:z-40 before:left-[3.1px] before:bottom-[3px] after:absolute after:bg-white after:w-[2px] after:h-0 checked:after:h-[10px] after:rotate-45 after:duration-200 after:ease-in-out after:z-40 after:left-[8.8px] after:bottom-1"
        />
        <p className="text-sm pl-3 my-2">WhatsApp doodle</p>
      </div>
      <button className="w-fit mb-2 border-[1.5px] text-sm px-10 py-1 rounded-md border-b-gray-300">
        Reset
      </button>
      <p className="my-2 text-base">Text size</p>
      <div
        className="flex cursor-pointer w-[65%] flex-row  items-center px-3 border-[1.5px]  py-1 rounded-md border-b-gray-300 relative"
        onClick={() => setTextToggle((textToggle) => !textToggle)}
      >
        <p className="text-sm pr-7  w-full">{fontSize}</p>
        <GoChevronDown />
        <div
          className={`absolute cursor-default w-full ${
            textToggle ? "h-fit" : "h-0"
          } bottom-10 shadow-sm rounded-md left-0 overflow-hidden bg-white/30 backdrop-blur-md`}
        >
          <div className="border-[1.5px] rounded-md w-full h-full flex flex-col p-1">
            {FontArrey.map((fontsize, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setFontSize(fontsize)}
                  className={`flex relative before:absolute before:left-0 before:w-1 before:h-4 before:rounded-md ${
                    fontSize === fontsize
                      ? "before:bg-green-600 bg-black/5"
                      : ""
                  } flex-row mb-2 cursor-pointer items-center w-full py-1.5 hover:bg-black/5 hover:backdrop-blur-md rounded-md px-3`}
                >
                  <button className="text-sm pr-7 ">{fontsize}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-sm mt-2">Use Ctrl +/- to increase or decrease your text-size</p>
    </div>
  );
}

export default PersonalizationSetting;
