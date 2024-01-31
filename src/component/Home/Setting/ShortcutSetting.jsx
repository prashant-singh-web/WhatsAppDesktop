import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function ShortcutSetting() {
  const shortCuts = [
    {
      shortcut: "New chat",
      combination: ["Ctrl", "N"],
    },
    {
      shortcut: "Close chat",
      combination: ["Ctrl", "W"],
    },
    {
      shortcut: "Close chat",
      combination: ["Ctrl", "F4"],
    },
    {
      shortcut: "Close Application",
      combination: ["Alt", "F4"],
    },
    {
      shortcut: "Search",
      combination: ["Ctrl", "F"],
    },
    {
      shortcut: "Profile",
      combination: ["Ctrl", "P"],
    },
    {
      shortcut: "Next chat",
      combination: ["Ctrl", "Tab"],
    },
    {
      shortcut: "Open chat",
      combination: ["Ctrl", "1..9"],
    },
    {
      shortcut: "Edit last message",
      combination: ["Ctrl", "Up"],
    },
    {
      shortcut: "Decrease text size",
      combination: ["Ctrl", "-"],
    },
    {
      shortcut: "Increase text size",
      combination: ["Ctrl", "+"],
    },
    {
      shortcut: "Reset text size",
      combination: ["Ctrl", "0"],
    },
    {
      shortcut: "New group",
      combination: ["Ctrl", "Shift", "N"],
    },
    {
      shortcut: "Search in chat",
      combination: ["Ctrl", "Shift", "F"],
    },
    {
      shortcut: "Mute chat",
      combination: ["Ctrl", "Shift", "M"],
    },
    {
      shortcut: "Toggle read",
      combination: ["Ctrl", "Shift", "U"],
    },
    {
      shortcut: "Emoji panel",
      combination: ["Ctrl", "Shift", "E"],
    },
    {
      shortcut: "GIF panel",
      combination: ["Ctrl", "Shift", "G"],
    },
    {
      shortcut: "Previous chat",
      combination: ["Ctrl", "Shift", "["],
    },
    {
      shortcut: "Previous chat",
      combination: ["Ctrl", "Shift", "Tab"],
    },
    {
      shortcut: "Next chat",
      combination: ["Ctrl", "Shift", "]"],
    },
  ];
  return (
    <div className="w-full h-[34rem] overflow-y-scroll languageDropdown flex flex-col p-5">
      <p className="text-xl font-semibold">Storage</p>
      <p className="text-xl mt-5">Keyboard shortcuts</p>
      {shortCuts.map((short, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-between items-center my-1"
          >
            <p className="text-base">{short.shortcut}</p>
            <div className="flex flex-row items-center space-x-2">
              {short.combination.map((combination, index) => {
                return (
                  <p
                    key={index}
                    className="border-[1.5px] px-2 py-0.5 text-base rounded-md border-gray-300"
                  >
                    {combination}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
      <p className="text-xl mt-7">Quick emojis</p>
      <p className="text-sm">
        When typing a message, use the colon symbol to quickly search for and
        access Emojis in-line
      </p>
      <div className="flex flex-row justify-between items-center my-1">
        <p className="text-base">cat</p>
        <div className="flex flex-row items-center space-x-2">
          <p className="border-[1.5px] px-3 py-0.5 text-base rounded-md border-gray-300">
            :
          </p>
          <FaArrowRightLong className="text-gray-500" />
          <p className="border-[1.5px] px-2 py-0.5 text-base rounded-md border-gray-300">
            :cat
          </p>
          <p>=</p>
          <p className="border-[1.5px] px-2 py-0.5 text-base rounded-md border-gray-300">
            😺
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center my-1">
        <p className="text-base">Hat</p>
        <div className="flex flex-row items-center space-x-2">
          <p className="border-[1.5px] px-3 py-0.5 text-base rounded-md border-gray-300">
            :
          </p>
          <FaArrowRightLong className="text-gray-500" />
          <p className="border-[1.5px] px-2 py-0.5 text-base rounded-md border-gray-300">
            :hat
          </p>
          <p>=</p>
          <p className="border-[1.5px] px-2 py-0.5 text-base rounded-md border-gray-300">
          🎩
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShortcutSetting;
