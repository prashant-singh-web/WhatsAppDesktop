import React from 'react'

function Chatuser({profile,name,lastmsg}) {
  return (
    <div className="w-full grid grid-cols-[20%_80%] cursor-pointer hover:bg-gray-100 rounded-md ">
    <div className="w-full p-2">
        <img src={profile} alt="logo" className="w-full border bg-red-200 my-auto rounded-full  " />
    </div>
    <div className="w-full flex flex-col my-auto p-2 px-0 pr-2">
        <div className="w-full flex flex-row justify-between ">
            <p className="text-sm font-medium my-auto">{name}</p>
            <p className="text-xs text-gray-700">12:38</p>
        </div>
        <p className="text-xs line-clamp-1">{lastmsg}.</p>
    </div>
  </div>
  )
}

export default Chatuser