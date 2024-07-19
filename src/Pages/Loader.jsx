import React from 'react'
import { metronome } from 'ldrs'

function Loader() {
    metronome.register()
  return (
    <div className='w-full h-full fixed bg-gray-300 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-150 flex-col'>
    <l-metronome
        size="40"
        speed="1.6" 
        color="black" 
    ></l-metronome>
    <h1 className='font-bold text-2xl mt-2'>Loading....</h1>
    </div>
  )
}

export default Loader