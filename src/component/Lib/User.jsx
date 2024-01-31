import React from 'react'
import { FaUser } from 'react-icons/fa'

function User() {
  return (
    <div className="w-full flex py-2 hover:bg-gray-200 rounded-sm flex-row items-center px-3 space-x-4">
                <div className="rounded-full bg-white border border-gray-300 w-10 h-10 grid place-items-center ">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <p className="text-base font-semibold text-gray-800">
                  client
                </p>
              </div>
  )
}

export default User