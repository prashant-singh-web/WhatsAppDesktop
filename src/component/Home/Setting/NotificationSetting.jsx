import React, { useState } from "react";
import { VscMusic } from "react-icons/vsc";
import { CiPlay1 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function NotificationSetting() {
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [isMessages, setIsMessages] = useState(false);
  const [isCalls, setIsCalls] = useState(false);
  const [isReaction, setIsReaction] = useState(false);
  const [isTextPreview, setIsTextPreview] = useState(false);
  const [isMediaPreview, setIsMediaPreview] = useState(false);
  const [isMessagesTunes, setIsMessagesTunes] = useState(false);
  const musicList = ["Default", "Alert 1", "Alert 2", "Alert 3", "Alert 4", "Alert 5", "Alert 6", "Alert 7", "Alert 8", "Alert 9", "Alert 10"]
  return (
    <div className="w-full h-[34rem] flex flex-col overflow-y-scroll p-5 languageDropdown">
      <p className="text-xl font-semibold">Notifications</p>
      {/* iswhatsapp */}
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col ">
          <p className="text-sm ">When WhatsApp is closed</p>
          <p className="text-xs text-gray-500">
            Continue to show notifications when WhatsApp is not open
          </p>
        </div>
        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>{isWhatsapp ? "On" : "Off"}</p>
          <div
            onClick={() => setIsWhatsapp((isWhatsapp) => !isWhatsapp)}
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isWhatsapp
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isWhatsapp
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      <hr className="my-5" />
      {/* messages */}
      <div className="w-full  flex flex-row justify-between items-center mt-4">
        <p className="text-sm ">Messages</p>

        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>{isMessages ? "On" : "Off"}</p>
          <div
            onClick={() => setIsMessages((isMessages) => !isMessages)}
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isMessages
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isMessages
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      {/* reactions */}
      <div className="w-full my-6 flex flex-row justify-between items-center ">
        <p className="text-sm ">Reactions</p>

        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>{isReaction ? "On" : "Off"}</p>
          <div
            onClick={() => setIsReaction((isReaction) => !isReaction)}
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isReaction
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isReaction
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      {/* calls */}
      <div className="w-full  flex flex-row justify-between items-center ">
        <p className="text-sm ">Calls</p>

        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>{isCalls ? "On" : "Off"}</p>
          <div
            onClick={() => setIsCalls((isCalls) => !isCalls)}
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isCalls
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isCalls
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      <hr className="my-7" />
      {/* text preview */}
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col ">
          <p className="text-sm ">Text preview</p>
          <p className="text-xs text-gray-500">
            Show message preview text inside new message notifications
          </p>
        </div>
        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>
            {isTextPreview ? "On" : "Off"}
          </p>
          <div
            onClick={() => setIsTextPreview((isTextPreview) => !isTextPreview)}
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isTextPreview
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isTextPreview
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      {/* media preview */}
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col ">
          <p className="text-sm">Media preview</p>
          <p className="text-xs text-gray-500">
            Show media preview images inside new message notifications
          </p>
        </div>
        <div className="flex">
          <p className={`text-sm my-auto mr-2`}>
            {isMediaPreview ? "On" : "Off"}
          </p>
          <div
            onClick={() =>
              setIsMediaPreview((isMediaPreview) => !isMediaPreview)
            }
            className={`w-10 rounded-xl  h-5 border-[1.5px]  relative cursor-pointer duration-200 ease-in-out ${
              isMediaPreview
                ? "bg-green-700 border-green-700"
                : "bg-white border-gray-400"
            } before:absolute before:p-1.5 ${
              isMediaPreview
                ? "before:bg-white before:translate-x-[20px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[2.6px] before:hover:scale-110 before:left-[2px]`}
          ></div>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-xl ">Notification tones</p>
      <div className="flex flex-col mt-6 space-y-3">
        <p className="text-sm">Messages</p>
        <div className="flex flex-row space-x-4 ">
          <p className="w-8 h-7 rounded-md  border-[1.5px] border-b-gray-300 ">
            <CiPlay1 className="text-lg m-auto mt-1" />
          </p>
          <div onClick={()=>setIsMessagesTunes(isMessagesTunes => !isMessagesTunes)} className="flex cursor-pointer relative flex-row items-center border-[1.5px] px-2 rounded-md border-b-gray-300">
            <VscMusic />
            <p className="text-sm px-3 py-1">default</p>
            <IoIosArrowDown />
            <div
              className={`absolute w-full overflow-hidden ${isMessagesTunes ? "h-[22rem]":"h-0"} ease-in-out duration-200  rounded-md bg-white bottom-10 shadow-md left-0`}
            >
              <div className="border rounded-md w-full h-full flex flex-col">
                <div className="w-full p-1">
                <p className="text-sm pl-3 py-1 rounded-sm hover:bg-gray-100 cursor-pointer">
                  None
                </p> </div>
                <hr />
                <div className="w-full flex flex-col p-1">
                    {
                        musicList.map((music,i) =>{return(
                            <p key={i} className="text-sm pl-3 py-1 rounded-sm hover:bg-gray-100 cursor-pointer">
                            {music}
                          </p> 
                        )})
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSetting;
