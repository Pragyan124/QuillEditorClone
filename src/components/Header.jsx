import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Header() {
    return (
        <div className='bg-white sticky z-50 top-0 flex flex-row border-2 border-gray-200 '>
            <div className='flex flex-row'>
                <div>
                    <img src="/logo.png" className='ml-20 px-2 py-2 mr-0' />
                </div>
                <div className='flex flex-row px-2 mt-5 mb-5 mr-10 rounded-lg bg-yellow-500 hover:bg-white hover:border-2 hover:rounded-lg hover:border-yellow-500  text-sm'>
                    <button>v2.0.2 </button>
                    <IoIosArrowDown className='mb-3 mt-4 m-0'/>
                </div>

                <div className='font-semibold text-gray-600 mt-7 ml-20 mr-10'>Documentation</div> {/* increased mr */}
                <div className='font-semibold text-gray-600 ml-20 mt-7 '>Playground</div>
            </div>


            <div className='flex flex-row fixed right-20'>
            <FaGithub className='fixed mt-7 h-8 w-8 right-[300px] cursor-pointer hover:text-gray-500 ' />
            <div className='fixed flex justify-center items-center right-[120px] mt-5 flex bg-gray-100 hover:border-2 hover:border-yellow-500 py-2 pr-2  rounded-lg '>
                <IoIosSearch className='text-gray-500 h-7 w-6 ml-1 mr-1' />
                <p className='text-gray-500 mr-5'>Search</p>
                <button className='font-semibold text-gray-500  mr-0'>CTRL K</button>
            </div>

            </div>
           

        </div>
    )
}

export default Header;
