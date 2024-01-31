import React, { useState } from "react";
import { CiMobile1 } from "react-icons/ci";

function AccountSetting() {
    const [toggle, settoggle] = useState(false);
  return (
    <div className="languageDropdown w-full h-[34rem] overflow-y-scroll flex flex-col p-5">
      <p className="text-xl font-semibold">Account</p>
      <p className="text-lg mt-5">Privacy</p>
      <p className="text-sm  font-sans">Managed on your phone</p>
      <div className="flex flex-col text-sm my-3 space-y-1">
        <p>Last seen and Online</p>
        <p>My Contact,Everyone</p>
      </div>
      <div className="flex flex-col text-sm space-y-1">
        <p>Profile photo</p>
        <p>Everyone</p>
      </div>
      <div className="flex flex-col text-sm my-3 space-y-1">
        <p>About</p>
        <p>Everyone</p>
      </div>
      <div className="flex flex-col text-sm space-y-1">
        <p>Add to group</p>
        <p>Everyone</p>
      </div>
      <div className="flex flex-col text-sm my-3 space-y-1">
        <p>Read receipts</p>
        <p>On</p>
        <p className="text-xs text-gray-700">
          Read receipt are always sent for group chats
        </p>
      </div>
      <hr className="my-5" />
      <p className="text-xl ">Blocked contacts</p>
      <p className="text-sm  font-sans my-2">Managed on your phone</p>
      <p className="text-sm flex flex-row items-center">
        <CiMobile1 className="mr-1 text-lg" /> 2 blocked contacts
      </p>
      <hr className="my-5" />
      <p className="text-xl ">Security</p>
      <p className="text-sm mt-1">
        Messages and calls in end-to-end encrepted chats stay between you and
        the people you choose. Not even WhatsApp can read or listen to them{" "}
        <span className="text-green-600 underline cursor-pointer hover:no-underline">
          Learn More
        </span>
      </p>
      <p className="text-sm my-2">
        Show security notifications on this computer
      </p>
      <div className="flex items-center flex-row space-x-3">
          
          <div
            onClick={() => settoggle((toggle) => !toggle)}
            className={`w-10 rounded-xl  h-5 border relative cursor-pointer duration-200 ease-in-out ${
              toggle ? "bg-green-700" : "bg-white"
            } before:absolute before:p-1.5 ${
              toggle
                ? "before:bg-white before:translate-x-[22px]"
                : "before:bg-gray-500 before:translate-x-0"
            } before:ease-in-out before:duration-200 before:rounded-full before:top-[4px] before:left-[2px]`}
          ></div>
          <p
            className={`text-sm ${toggle ? "text-gray-800" : "text-gray-400"} my-auto`}
          >
            On
          </p>
        </div>
        <p className="text-xs text-gray-700 my-5">Get notified when your security code changes for a contacts phone. If you have multiple devices, this setting must be enabled on each device where you want to get notifications <span className="text-green-600 underline cursor-pointer hover:no-underline">
          Learn More
        </span>.</p>
    </div>
  );
}

export default AccountSetting;
