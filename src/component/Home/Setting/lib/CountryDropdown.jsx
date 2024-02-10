import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function CountryDropdown() {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState("System Language");
  const languages = [
    "Spanish, Español",
    "Estonian, Eesti",
    "Persian, فارسی",
    "Finnish, Suomi",
    "Filipino",
    "French, Français",
    "Gujarati, ગુજરાતી",
    "Hebrew, עברית",
    "Hindi, हिन्दी",
    "Croatian, Hrvatski",
    "Hungarian, Magyar",
    "Indonesian, Indonesia",
    "Italian, Italiano",
    "Chinese, 中文",
    "Korean, 한국어",
    "Japanese, 日本語",
    "Dutch, Nederlands",
    "Norwegian, Norsk",
    "Polish, Polski",
    "Portuguese, Português",
    "Romanian, Română",
    "Russian, Русский",
    "Slovak, Slovenčina",
    "Slovenian, Slovenščina",
    "Swedish, Svenska",
    "Thai, ไทย",
    "Turkish, Türkçe",
    "Ukrainian, Українська",
    "Vietnamese, Tiếng Việt",
    "Welsh, Cymraeg",
  ];

  return (
    <div
      onClick={() => setToggle((toggle) => !toggle)}
      className="w-fit cursor-pointer relative flex flex-row items-center px-3 border-[1.5px] border-b-gray-500 text-sm text-gray-500 space-x-2 py-1 rounded-sm"
    >
      <TbWorld className="text-xl dark:text-white" />
      <p className="w-28  text-sm line-clamp-1  bg-white dark:bg-transparent  outline-none text-black dark:text-white">
        {language}
      </p>
      <IoIosArrowDown className="dark:text-white"/>
      <div
        className={`absolute bg-white dark:bg-[#2B2B2B]/70 shadow dark:backdrop-blur-md w-[13rem] ${
          toggle ? "h-[20rem]" : "h-0 overflow-hidden"
        } rounded-md  z-50`}
      >
        <div className="border dark:border-black/20 w-full h-[20rem] overflow-y-scroll rounded-md flex-col p-1 scrollDropdown">
          <div
            onClick={() => setLanguage("System Language")}
            className={`w-full rounded-md relative before:absolute before:w-1 before:h-4 before:rounded-md before:top-2 before:left-0 before:${
              language === "System Language" ? "bg-green-600" : "bg-transparent"
            } text-center py-1.5 cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-white/5`}
          >
            System Default
          </div>
          <hr className="h-[1.5px] my-2 bg-gray-300" />
          {languages.map((languages, i) => {
            return (
              <div
                key={i}
                onClick={() => setLanguage(languages)}
                className={`w-full rounded-md relative before:absolute before:w-1 before:h-4 before:rounded-md before:top-2 before:left-0 before:${
                  language === languages ? "bg-green-600" : "bg-transparent"
                } text-left pl-3 py-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 dark:text-white`}
              >
                {languages}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountryDropdown;
