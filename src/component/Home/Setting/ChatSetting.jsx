import React from 'react'
import { FaLaptopFile } from 'react-icons/fa6'

function ChatSetting() {
  return (
    <div className='w-full h-full flex flex-col p-5'>
         <p className="text-xl font-semibold">Chats</p>
      <p className="text-lg mt-5">Chats history</p>
      <p className="text-sm flex flex-row items-center my-2">
        <FaLaptopFile  className="mr-2 text-gray-700 text-xl" /> Synced with your phone
      </p>
      <button type="button" className='text-sm w-fit border-[1.5px] rounded-md px-5 py-1 border-b-gray-400 mt-5'>Achive all chats</button>
      <p className='text-sm my-2'>You will still receive new messages from archived chats</p>
      <button type="button" className='text-sm my-1 text-red-600 w-fit border-[1.5px] rounded-md px-5 py-1 border-b-gray-400'>Clear all messages</button>
      <p className='text-sm my-2'>Delete all messages from chats and groups</p>
      <button type="button" className='text-sm my-1 mt-2 text-red-600 w-fit border-[1.5px] rounded-md px-5 py-1 border-b-gray-400'>Delete all chats</button>
      <p className='text-sm my-2'>Delete all messages and clear the chats from your history</p>
                              


    </div>
  )
}

export default ChatSetting