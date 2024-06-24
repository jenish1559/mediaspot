import BaseContent from '@/app/component/common/BaseContent'
import Image from 'next/image';
import React from 'react'
import { FaFacebookF, FaTelegram, FaDatabase } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa6";
import { MdStarRate } from 'react-icons/md';


const page = () => {
  return (
    <div className="flex flex-col relative  h-[20%]  text-white  border-2 border-green-600  w-full gap-4">
      <div className="max-container relative flex flex-col items-end  h-[400px] lg:h-[500px]  w-full border-2 border-red-500  bg-gray-600  ooverflow-hidden">
        hello
        <div className=" absolute bottom-0 w-full p-3 pt-5 flex flex-col border-2 border-green-500 gap-4 bg-gradient-to-t from-teal-950 bg-slate-600/30 backdrop-opacity-40">

          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="text-center bg-teal-800 text-gray-300 text-sm p-1 rounded-[4px] shadow-md shadow-gray-700">Auto Play</div>
            <div className="text-center bg-teal-800 text-gray-300 text-sm p-1 rounded-[4px] shadow-md shadow-gray-700">Auto Next</div>
            <div className="text-center bg-teal-800 text-gray-300 text-sm p-1 rounded-[4px] shadow-md shadow-gray-700">Auto Skip</div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="w-24 h-8 cursor-pointer text-center bg-facebook text-gray-300 flex items-center justify-center text-sm p-1 rounded-[4px] shadow-md shadow-gray-800"><FaFacebookF /></div>
            <div className="w-24 h-8 cursor-pointer text-center bg-whatsapp text-gray-10 flex items-center justify-center text-md p-1 rounded-[4px] shadow-md shadow-gray-800"><FaWhatsapp /></div>
            <div className="w-24 h-8 cursor-pointer text-center bg-telegram text-gray-10 flex items-center justify-center text-md p-1 rounded-[4px] shadow-md shadow-gray-800"><FaTelegram /></div>
          </div> 
          <div className="flex flex-row gap-2 items-center justify-center text-sm font-sans text-gray-300"><h3>If current server doesn&apos;t work please try other servers below.</h3></div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="w-32 h-18 cursor-pointer flex flex-col text-center bg-teal-950 text-gray-300 items-center justify-center text-sm p-2 rounded-[4px] shadow-md shadow-gray-800">
              <div className="regular-20 font-semibold font-mono">Vidplay</div>
              <div className='flex flex-row gap-2 items-center justify-center font-semibold font-sans'> <FaDatabase className="text-md" /> Server</div>
            </div>
            <div className="w-32 h-18 cursor-pointer flex flex-col text-center bg-teal-950 text-gray-300 items-center justify-center text-sm p-2 rounded-[4px] shadow-md shadow-gray-800">
              <div className="regular-20 font-semibold font-mono">MyCloude</div>
              <div className='flex flex-row gap-2 items-center justify-center font-semibold font-sans'> <FaDatabase className="text-md" /> Server</div>
            </div>
            <div className="w-32 h-18 cursor-pointer flex flex-col text-center bg-teal-950 text-gray-300 items-center justify-center text-sm p-2 rounded-[4px] shadow-md shadow-gray-800">
              <div className="regular-20 font-semibold font-mono">Filemoon</div>
              <div className='flex flex-row gap-2 items-center justify-center font-semibold font-sans'> <FaDatabase className="text-md" /> Server</div>
            </div>  
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-600  bg-teal-950 flex flex-wrap-reverse lg:flex-nowrap  lg:flex-row gap-2 lg:p-5">
      <div className="border-2 border-blue-600 hidden lg:flex lg:w-[25%] ">
          <Image src="https://picsum.photos/seed/picsum/500/800" alt='img' height={100} width={100} />
        </div>
        <div className="border-2 border-blue-600 grow p-2 flex flex-col items-center justify-center">
          <div className="bg-teal-900 w-[60%] flex flex-row items-center justify-center  p-3  gap-3 rounded-sm">
            <div className="font-sans text-center"> 4.5 of 5</div>
            <div className="flex flex-row items-center justify-center gap-1 ">
              <MdStarRate className="text-yellow-400 text-lg"/>
              <MdStarRate className="text-yellow-400 text-lg"/>
              <MdStarRate className="text-yellow-400 text-lg"/>
              <MdStarRate className="text-yellow-400 text-lg"/>
              <MdStarRate className="text-yellow-400 text-lg"/>
              </div>
          </div>
          <div>

          </div>
        </div>


        <div className="border-2 border-blue-600 w-full p-2 lg:w-[30%]">
          <div className='w-full rounded-sm  bg-teal-900 p-1'>
          <div className=' text-center text-sm '>Files</div>
          <div className='bg-primary text-sm px-2'>File 1</div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default page