import React from 'react'

const VideoTittle = ({title,description}) => {
  return (
    <div className='absolute w-screen px-12 text-white top-[100px]    h-[680px] bg-gradient-to-br from-black'><h1 className='text-6xl font-black pt-[12%]'>{title}</h1>
    <p className='w-1/4 py-6'>{description}</p>
    <div className='flex '><button className='w-32 p-3 px-4 mr-3 text-xl text-black bg-white rounded-md hover:opacity-80'>▶️ Play</button>
    <button className='p-3 px-4 text-xl text-white bg-gray-500 rounded-md w-42 opacity-95 hover:opacity-75 ' > ℹ️ More info</button></div></div>
  )
}

export default VideoTittle