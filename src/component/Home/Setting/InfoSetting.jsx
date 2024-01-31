import React from 'react'

function InfoSetting() {
  return (
    <div className='w-full flex flex-col p-5'>
        <p className="text-xl font-semibold">Help</p>
        <p className='text-lg mt-4'>WhatsApp for Windows</p>
        <p className='text-sm'>Version 2.2401.3.0</p>
        <hr className='my-5' />
        <p className='text-lg'>Contact us</p>
        <p className='text-sm my-2'>we'd like to know your thoughts about this app.</p>
        <p className='text-sm text-green-600 underline hover:no-underline cursor-pointer'>Contact us</p>
        <hr className='my-5' />
        <p className='text-sm text-green-600 underline hover:no-underline cursor-pointer'>Help center</p>
        <p className='text-sm text-green-600 underline hover:no-underline cursor-pointer my-3'>Licences</p>
        <p className='text-sm text-green-600 underline hover:no-underline cursor-pointer'>Terms and Privacy policy</p>
        <hr className='my-5' />
        <p className='text-sm'>2023 © WhatsApp Inc.</p>
        
    </div>
  )
}

export default InfoSetting