import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BaseContent = () => {
  return (
    <div className="max-container px-3 py-3 mb-5   border-2 border-red-500 
                    mx-auto max-w-[1440px] flex flex-col lg:flex-row  gap-2 ">
      <div className="border-2  border-blue-500 lg:w-[80%]">
        <div className=" p-3  border-2 bold-20 border-blue-500  text-white font">Movies</div>
        <div className="flex relative flex-wrap  gap-2 px-2 border-2 border-red-500">
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </div>
        <div className="flex items-center justify-center   p-3  border-2 bold-20 border-blue-500  text-white font">Pagination</div>
      </div>
      <div className="border-2  border-blue-500 lg:w-[20%] ">
        <div className="lg:w-full lg:h-[25%] border-2 border-red-500 mb-3 overflow-hidden">ads</div>
        <div className="lg:w-full lg:h-[70%] border-2 border-red-500 overflow-hidden">
          <h3 className="text-white text-lg px-2 my-2 mb-5" >Suggestion</h3>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>
          <Suggetion/>

        </div>
      </div>
    </div>
  )
}

const Poster = () => {
  return (
    <div className='flex flex-col w-[48%] relative lg:w-[13.5%] '>
      <div className='relative  rounded-md  transition-all  bg-teal-900 border-2 border-teal-700'>
        <Link href="#">
          <div className="absolute top-1 left-1 text-black font-semibold"><div className="flex items-center justify-center text-center  bg-gray-200 drop-shadow-lg rounded h-4 w-[28px] text-sm">HD</div> </div>
          <Image className="rounded-md" src="https://static.123series.nl/i/8/8e/7d411959a04a0e42f71bea50a282cd49@280.jpg" alt="movie-poster" height={100} width={200} />
        </Link>

        <Link href="#">
          <div className="regular-14 text-center mt-2 h-[2.5rem] max-h-[2.5rem] font-semibold text-white flex-wrap overflow-hidden"> The Hunger Games  </div>
        </Link>
        <div className='flex  px-2 justify-between regular-14 text-gray-500 font-medium'>
          <p>2012</p>
          <p>Movie</p>
        </div>
      </div>
    </div>
  )
}

const Suggetion = () => {
  return(
 <div className="flex flex-row mt-2 relative justify-between w-full h-[10%] border-b-2 border-green-500"> 
  <div className="text-white px-1 flex flex-col  w-[80%] ">
    <h3 className="text-[12px]">Movie / pg-16</h3>
    <p className='text-[14px] pb-1 whitespace-nowrap overflow-hidden'>The Hunger Games</p>
    <p className="text-[10px] mt-1">&#9734;9 - 2024 - 200 min</p>
  </div>
  <div className="px-2 w-[20%]">
    <Image src="https://static.123series.nl/i/8/8e/7d411959a04a0e42f71bea50a282cd49@280.jpg" alt="movie-poster" height={60} width={42} />
  </div>
 </div>
  )
}

export default BaseContent 