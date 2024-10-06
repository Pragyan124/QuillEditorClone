import React from 'react'
import { GiQuill } from "react-icons/gi";   

function Footer() {
  return (
    <div className='-z-40 relative h-screen bg-[#1d1e30]  flex flex-col justify-center items-center '>
       <GiQuill className='absolute h-[100px] w-[100px] mb-[350px] text-white '/>

    <p className='mt-10 text-[50px] tracking-widest text-white '>Your powerful text editor.</p>
        <div className='flex flex-row mt-20'>

        <button className='px-20 py-6 mr-20 border-2 font-bold border-yellow-500 text-yellow-500 hover:text-black hover:bg-white hover:border-none'>DOCUMENTATION</button>
        <button className='px-20 py-6 font-bold text-white bg-yellow-500 hover:bg-white hover:text-black'>PLAYGROUND</button>
        </div>
       
    </div>
  )
}

export default Footer