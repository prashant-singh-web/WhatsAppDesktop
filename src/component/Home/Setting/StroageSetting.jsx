import React from "react";

function StroageSetting() {
  return (
    <div className="w-full flex flex-col p-5">
      <p className="text-xl font-semibold">Storage</p>
      <p className="text-lg mt-7">Automatic downloads</p>
      <p className="text-sm mt-2">
        Choose which media will be automatically downloaded from the messages
        you receive
      </p>
      <div className="flex flex-row items-center my-3">
        <input
          type="checkbox"
          name=""
          id=""
          className="p-3 border-[1.5px] border-gray-500 checked:border-green-600 hover:bg-gray-200 checked:hover:bg-green-600 rounded-md duration-300 ease-in-out che appearance-none checked:bg-green-600 relative before:absolute before:bg-white before:w-[2px] checked:before:h-[6px] before:rotate-[-40deg] before:z-40 before:left-[5.4px] before:bottom-[6px] after:absolute after:bg-white after:w-[2px] after:h-0 checked:after:h-3 after:rotate-45 after:duration-200 after:ease-in-out after:z-40 after:left-[11.2px] after:bottom-1"
        />
        <p className="text-sm pl-3">Photos</p>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="p-3 border-[1.5px] hover:bg-gray-200 checked:hover:bg-green-600 border-gray-500 checked:border-green-600 rounded-md duration-300 ease-in-out che appearance-none checked:bg-green-600 relative before:absolute before:bg-white before:w-[2px] checked:before:h-[6px] before:rotate-[-40deg] before:z-40 before:left-[5.4px] before:bottom-[6px] after:absolute after:bg-white after:w-[2px] after:h-0 checked:after:h-3 after:rotate-45 after:duration-200 after:ease-in-out after:z-40 after:left-[11.2px] after:bottom-1"
        />
        <p className="text-sm pl-3">Audios</p>
      </div>
      <div className="flex flex-row items-center my-3">
        <input
          type="checkbox"
          name=""
          id=""
          className="p-3 border-[1.5px] hover:bg-gray-200 checked:hover:bg-green-600 border-gray-500 checked:border-green-600 rounded-md duration-300 ease-in-out che appearance-none checked:bg-green-600 relative before:absolute before:bg-white before:w-[2px] checked:before:h-[6px] before:rotate-[-40deg] before:z-40 before:left-[5.4px] before:bottom-[6px] after:absolute after:bg-white after:w-[2px] after:h-0 checked:after:h-3 after:rotate-45 after:duration-200 after:ease-in-out after:z-40 after:left-[11.2px] after:bottom-1"
        />
        <p className="text-sm pl-3">Videos</p>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="p-3 border-[1.5px] hover:bg-gray-200 checked:hover:bg-green-600 border-gray-500 checked:border-green-600 rounded-md duration-300 ease-in-out che appearance-none checked:bg-green-600 relative before:absolute before:bg-white before:w-[2px] checked:before:h-[6px] before:rotate-[-40deg] before:z-40 before:left-[5.4px] before:bottom-[6px] after:absolute after:bg-white after:w-[2px] after:h-0 checked:after:h-3 after:rotate-45 after:duration-200 after:ease-in-out after:z-40 after:left-[11.2px] after:bottom-1"
        />
        <p className="text-sm pl-3">Documents</p>
      </div>
    </div>
  );
}

export default StroageSetting;
