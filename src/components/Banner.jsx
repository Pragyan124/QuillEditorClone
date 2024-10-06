import React from 'react'
import { FaGithub } from "react-icons/fa";

function Banner() {
  return (
    <div className='-z-50'>

        <button className='mt-10 ml-[550px] px-10 py-1 text-sm rounded-md bg-yellow-500'><span className='font-bold'>Quill 2.0 is released! .</span> Read the announcement  </button>
        <p className='mt-10 text-[50px] tracking-widest text-center font-bold'>Your powerful text editor.</p>



            <div className='mt-20 ml-[480px] flex flex-row '>
                <p className='text-sm mt-1 mr-10'>USED IN</p>
                <div><img src="/1.svg" className='h-10 w-20'/></div>
                <div><img src="/2.svg" className='h-10 w-20'/></div>
                <div><img src="/3.svg" className='h-10 w-20'/></div>
                <div><img src="/4.svg" className='h-10 w-20'/></div>
                <div><img src="/5.svg" className='h-10 w-20'/></div>
            </div>

            <div  className='mt-20'>
                <img src ="/notepad.png" />
            </div>


            <button className='mt-[200px] ml-[580px] px-20 py-6 mr-20  font-bold bg-yellow-500 text-black hover:text-white hover:bg-black '>DOCUMENTATION</button>

            <p className='mt-20 text-[50px] tracking-widest text-center '>An API Driven Rich Text Editor.</p>


        <div className=' flex  flex-row justify-center text-center mt-[100px] p-4 '>
            <div className=' p-4 '>
            <img src="/people.svg"
        width={550}
        height={550} />

        <h1 className='mt-10 ml-20 text-[30px] tracking-wider font-bold'>BUILT FOR DEVELOPERS</h1>
        <p className='mt-10 ml-20 text-lg'>Granular access to the editor's content, changes<br /> and events through a simple API. Works <br />consistently and deterministically with JSON as<br />  both input and output.</p>
            </div>

            <div class="ml-20  mr-20 w-px bg-gray-300"></div>

        <div className='p-4'  >
            <img src="/computer.svg"
        width={550}
        height={550} />
         <h1 className='mt-10 ml-20 text-[30px] tracking-wider font-bold'>CROSS PLATFORM</h1>
         <p className='mt-10 ml-20 text-lg'>Supports all modern browsers on desktops, tablets <br />
            and phones. Experience the same consistent<br /> behavior and produced HTML across platforms.</p>
        </div>

        
        

        </div>

       <div class=" ml-20 mr-20 border-[1px] border-gray-300"></div>


       
       <div className='-mt-4 ml-[600px] mr-[600px] flex flex-row border-2 border-black '>
       <div className='flex flex-row bg-black justify-center items-center px-[50px] py-2'><FaGithub className='invert'/><p className='text-white'>STAR</p></div>
       <div className='flex flex-row bg-white  justify-center items-center px-[59px] py-2'>43,313</div>
       </div>

        <div className='relative'>
        <div className='p-4 mb-40'>


       <img src="/pen.svg"
        width={550}
        height={550} className='absolute fixed right-20' />

        <h1 className='mt-10 ml-20 text-[30px] tracking-wider font-bold'>FITS LIKE A GLOVE</h1>
        <p className='mt-10 ml-20 text-lg'>Used in small projects and giant Fortune 500s alike. <br />Start simple with the Quill core then easily customize <br /> or add your own extensions later if your product<br /> needs grow.</p>
        <h1 className='mt-10 font-bold ml-20'>LEARN MORE</h1>
            </div>
        </div>
       
        
       
    </div>
  )
}

export default Banner