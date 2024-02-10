import React from 'react'
import { GoPencil } from "react-icons/go";

function ProfileSetting() {
  return (
    <div className='w-full flex flex-col p-5'>
        <img src="/user.png" alt="" className='w-28 h-28 rounded-full'/>
        <div className="flex flex-row justify-between w-full mt-5">
            <p className='text-lg font-bold'>John Doe</p> <GoPencil className='text-sm'/>
        </div>
        <p className='text-sm mt-4'>About</p>
        <div className="flex flex-row justify-between w-full">
            <p className='text-base'>designed by Prashant singh</p> <GoPencil className='text-sm'/>
        </div>
        <p className='text-sm mt-4'>Phone Number</p>
        <div className="flex flex-row justify-between w-full text-sm">
            <p>+911234567890</p> <GoPencil className='text-sm'/>
        </div>
    </div>
  )
}

export default ProfileSetting