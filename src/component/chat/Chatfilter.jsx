import React, { useState } from 'react'
import { IoFilterOutline } from "react-icons/io5";

function Chatfilter() {
    const [toggleFilter, setToggleFilter] = useState(false)
  return (
    <div className={`text-base relative border-[1.5px] rounded-sm ${toggleFilter ? "border-gray-200":"border-white"} hover:bg-gray-100  cursor-pointer rounded-sm flex flex-row  p-2`} onClick={()=>setToggleFilter(toggleFilter => !toggleFilter)}>
    <IoFilterOutline className="  mx-auto text-black/80 text-center" />
    <div className={`absolute w-44 ${toggleFilter ? "h-[13rem]" : "h-0"} duration-200 ease-in-out  top-9 rounded-md overflow-hidden shadow-md bg-white left-0 z-20`}>
      <div className="w-full text-sm text-gray-950 h-full  rounded-md border-gray-200 border-2 flex flex-col p-1">
        <p className="text-sm font-semibold text-gray-400 p-1.5 py-2">
          Filter Chat By
        </p>
        <p className="hover:bg-gray-200 p-1.5 rounded-sm">
          Unread
        </p>
        <p className="hover:bg-gray-200 p-1.5 rounded-sm">
          Contacts
        </p>
        <p className="hover:bg-gray-200 p-1.5 rounded-sm">
          Non-contacts
        </p>
        <p className="hover:bg-gray-200 p-1.5 rounded-sm">
          Groups
        </p>
        <p className="hover:bg-gray-200 p-1.5 rounded-sm">
          Drafts
        </p>
      </div>
    </div>
  </div>
  )
}

export default Chatfilter