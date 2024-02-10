import React, { useEffect, useRef, useState } from "react";
import { CiCircleInfo, CiKeyboard, CiSettings, CiUser } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { BsBrush } from "react-icons/bs";
import { HiOutlineServer } from "react-icons/hi";
import { SlScreenDesktop } from "react-icons/sl";
import { PiChatsCircleLight, PiKeyLight } from "react-icons/pi";
import GeneralSetting from "./GeneralSetting";
import AccountSetting from "./AccountSetting";
import ChatSetting from "./ChatSetting";
import NotificationSetting from "./NotificationSetting";
import StroageSetting from "./StroageSetting";
import ShortcutSetting from "./ShortcutSetting";
import InfoSetting from "./InfoSetting";
import PersonalizationSetting from "./PersonalizationSetting";
import ProfileSetting from "./ProfileSetting";

function Homesetting() {
  const [transLateY, setTransLateY] = useState(0);
  const [components, setComponents] = useState(<GeneralSetting />);
  const [toggleSetting, setToggleSetting] = useState(false);
  const node = useRef(); // Create a ref

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setToggleSetting(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={node}>
      <div className="group w-full text-lg hover:bg-gray-200 hover:dark:bg-white/5  rounded-md flex flex-row  py-2">
        <div className=" bg-green-500   rounded-md h-6 w-1"></div>
        <CiSettings
          onClick={() => setToggleSetting((toggleSetting) => !toggleSetting)}
          className="  m-auto  text-black/80 dark:text-white text-center"
        />
        <div
          className={`absolute w-[34rem] overflow-hidden  -bottom-12 left-0 z-20 duration-200 ease-in-out   shadow-lg  ${
            toggleSetting ? "h-[34rem]" : "h-0"
          }`}
        >
          <div className=" w-full h-full border dark:border-gray-800/90 grid grid-cols-[35%_65%] overflow-hidden rounded-md relative">
            <div
              style={{
                transform: `translateY(${transLateY}px)`,
              }}
              className={`settingBounce absolute w-1 h-5 bg-green-600 rounded-md top-[12px] left-[5px] z-40 duration-300 ease-in-out `}
            ></div>
            <div className="w-full h-full bg-[#F3F3F3] rounded-md dark:bg-[#2B2B2B]/90 dark:backdrop-blur-md border-r-[1.5px] border-gray-200 dark:border-gray-800/70 p-1">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col">
                  <div
                    onClick={() => {
                      setTransLateY(0);
                      setComponents(<GeneralSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <SlScreenDesktop className="text-sm mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      General
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(37);
                      setComponents(<AccountSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <PiKeyLight className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Account
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(72);
                      setComponents(<ChatSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <PiChatsCircleLight className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Chats
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(109);
                      setComponents(<NotificationSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <GoBell className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Notifications
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(145);
                      setComponents(<PersonalizationSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <BsBrush className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Personalization
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(180);
                      setComponents(<StroageSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <HiOutlineServer className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      storage
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(216);
                      setComponents(<ShortcutSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <CiKeyboard className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Shortcuts
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setTransLateY(252);
                      setComponents(<InfoSetting />);
                    }}
                    className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                  >
                    <CiCircleInfo className="text-base mr-3" />
                    <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                      Help
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {setTransLateY(500);setComponents(<ProfileSetting/>)}}
                  className="w-full cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white py-2 flex flex-row items-center rounded-md px-4"
                >
                  <CiUser className="text-sm mr-3" />
                  <p className="text-sm text-center text-gray-800 dark:text-white font-medium">
                    Profile
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white dark:bg-[#2B2B2B]">{components}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesetting;
