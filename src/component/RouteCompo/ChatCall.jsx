import React, { useState } from 'react'
import { LiaSearchSolid } from 'react-icons/lia'
import Chatcontact from '../chat/Chatcontact'
import AddContact from '../WhatsappCall/AddContact';

function ChatCall() {
    const [isfocused, setIsfocused] = useState(false);
  return (
    <div className="w-full h-full grid grid-cols-[40%_60%]">
    <div className="w-full h-full border-r-2 border-gray-200 flex flex-col">
      <div className="w-full h-28 p-5  flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-semibold">Call</p>
          <div className="flex flex-row space-x-2">
            <AddContact/>
            
          </div>
        </div>
        <div
          className={`flex border-[1.5px] overflow-hidden rounded-md bg-white ${
            isfocused ? "border-b-green-700" : "border-b-gray-400"
          } border-gray-200`}
        >
          <LiaSearchSolid className="m-auto mx-2  text-gray-400" />
          <input
            type="text"
            onFocus={() => setIsfocused(true)}
            onBlur={() => setIsfocused(false)}
            placeholder="Search or Start a new chat..."
            className="w-full text-sm py-1 outline-none "
          />
        </div>
      </div>
      <div className="chatname w-full h-[28rem] overflow-y-scroll p-2  ">
       
       
      </div>
    </div>
    <div className="w-full h-full"></div>
  </div>
  )
}

export default ChatCall