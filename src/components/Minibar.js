import React from 'react'


function Minibar() {
  return (
    <div className='mt-8'>
      <div className='flex items-center justify-around bg-gray-600 p-4 mx-4'>
        <div>
         <img class="sm:hidden sm:ring-transparent sm:ring-0 p-1 md:w-14 md:h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/id/237/200/300" alt="Bordered avatar"/>
        </div>
        {/* slip Number */}
         <div>
         <button className='bg-blue-900 rounded-full lg:ml-2 lg:px-1 lg:py-2 lg:text-lg text-white sm:text-xs sm:mb-1 sm:ml-2 md:text-sm md:mb-3 md:ml-2'>Slip Number #123456</button>
         <button className='bg-blue-900 rounded-full lg:ml-2 lg:px-1 lg:py-2 lg:text-lg text-white sm:text-xs sm:mb-1 sm:ml-2 md:text-sm md:mb-3 md:ml-2'>Loading</button>
         <button className='bg-blue-900 rounded-full lg:ml-2 lg:px-1 lg:py-2 lg:text-lg text-white sm:text-xs sm:mb-1 sm:ml-2 md:text-sm md:mb-3 md:ml-2'>Loading</button>
         </div>

         {/* Progress */}
         <div className='w-24 h-2.5 bg-black rounded-full ml-8'>
           <div className='w-16 h-2.5 bg-white rounded-full'></div>
         </div>
         {/* progress percentage */}
         <div>
         <span className='text-lg text-white'>75%</span>
         </div>
         {/* icons  */}
        
         <div className='flex items-center justify-between'>
         <div className='bg-white rounded-md p-2 ml-2'>
         <i class="fa-solid fa-pencil"></i>
         </div>
         <div className='bg-white rounded-md p-2 ml-2'>
         <i class="fa-solid fa-pause"></i>
         </div>
          
         <div className='bg-white rounded-md p-2 ml-2'>
         <i class="fa-solid fa-play"></i>
         </div>
          
         <div className='bg-white rounded-md p-2 ml-2'>
         <i class="fa-solid fa-caret-down"></i>
         </div>
          
         <div className='bg-white rounded-md p-2 ml-2'>
         <i class="fa-solid fa-share"></i>
         </div>
         </div>

         {/* star rating */}
         
<div class="flex items-center space-x-1 ml-6">
<svg class="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-8 h-8 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
</div>        
      </div>
       
    </div>
  )
}

export default Minibar
