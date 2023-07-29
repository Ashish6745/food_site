import React from 'react'

function Section1() {
  return (
    <div className=''>
       <div className='flex items-center justify-around  px-2 py-6'>
        <div className='bg-blue-700 p-2 rounded-full'>
        <h1 className='text-white font-bold text-md animate-bounce'>IN/OUT GATE PASS</h1>
        </div>
         <div className='lg:w-80 sm:w-52  border-2 border-b-blue-500 rounded-md'>
         <input className='lg:w-full outline-none rounded-full indent-2 font-serif p-2 sm:w-24 sm:p-3' placeholder='Search'/>
         </div>
         <div>
         <button className='bg-green-400 text-white font-bold p-3 rounded-lg'>New Gate pass</button>
         </div>
       </div>
         
    </div>
  )
}

export default Section1
