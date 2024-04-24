import React from 'react'

const VideoTittle = ({title,description}) => {
  return (
    <div className='absolute w-screen md:px-12 text-white top-[100px] px-6    h-[680px] bg-gradient-to-br from-black pt-7 md:pt-0'><h1 className='text-2xl md:text-6xl font-black pt-[12%]'>{title}</h1>
    <p className='hidden py-6 text-sm md:inline-block md:w-1/4 md:text-base'>{description}</p>
    <div className='flex object-center mt-4 '><button className='h-10 px-1 mr-3 text-base text-black bg-white rounded-md md:p-3 md:w-28 md:px-4 md:text-xl w-28 hover:opacity-80 md:h-14'>▶️ Play</button>
    <button className='text-white bg-gray-500 rounded-md w-28 md:p-3 md:px-4 md:text-xl opacity-95 hover:opacity-75 md:w-44 md:h-14 ' > ℹ️ More info</button></div></div>
  )
}

export default VideoTittle