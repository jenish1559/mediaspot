import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const slide = ["https://wallpapercave.com/wp/wp3214340.jpg",
  "https://wallpapercave.com/wp/wp13613249.jpg",
  "https://wallpapercave.com/wp/wp13744710.jpg",
  "https://wallpapercave.com/wp/wp13597697.jpg",
  "https://wallpapercave.com/wp/wp13703223.png"]


const HomePage = () => {


  return (
    <div className="flex flex-col">

      <div className="flex flex-col relative  h-[20%]  text-white  border-2 border-green-600  w-full gap-4 ">
        <div className='max-container  h-[250px] lg:h-[500px]  w-full border-2 border-red-500   ooverflow-hidden'>
          <Carouselslider slide={slide} />
        </div>
      </div>
      <div className="max-container border-2 border-blue-600 mt-2 bg-teal-950 flex flex-col lg:flex-row  w-full gap-2 ">
        <div className="border-2 border-blue-600 grow">
            <div className='w-full flex flex-col gap-1 text-white '>
              <h3 className="text-white text-lg px-2 my-2">Recommended</h3>
              <div className='flex flex-row flex-wrap gap-2 mb-5 px-1' > 
                <p className="px-2 text-sm w-full ">Movies</p>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                
              </div>
              <div className='flex flex-row flex-wrap gap-2 mb-5 px-1'> 
                <p className="px-2 text-sm w-full ">Shows</p>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                <Movies/>
                
              </div>
            </div>
        </div>
        <div className="border-2 border-blue-600 lg:w-[40%] ">
          <div className=" text-white w-full h-[100px] lg:h-[25%] border-2 border-red-500 mb-3 overflow-hidden">ads</div>
          <div className=" w-full lg:h-[74%] border-2 border-red-500 overflow-hidden">
            <h3 className="text-white text-lg px-2 my-2 mb-5" >Suggestion</h3>
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />
            <Suggetion />

          </div>
        </div>
      </div>
    </div>
  )
}

const Suggetion = () => {
  return (
    <div className="flex flex-row mt-2 relative justify-between w-full h-[10%] border-b-2 border-green-500 ">
      <div className="text-white px-1 flex flex-col  w-[80%]">
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

const Carouselslider = ({ slide }) => {

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slide.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slide.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }


  return (
    <div className="relative h-full bg-green-300 gap-2">

      <div className={`flex flex-row transition ease-in-out duration-300`}
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slide.map((item) => (
          <div key={item} className=' relative border-2 border-red-600 w-full h-full'>
          <Image key={item} src={item} alt='img' className=""  height={1440} width={1000} />
           <div className='absolute bottom-0  flex flex-col border-2 border-yellow-600 bg-gradient-to-t from-cyan-500 to-blue-500'>
            <h1>title</h1>
            <div className="flex flex-row">
            </div>
           </div>
          </div>
        ))}
      </div>

      <div className=" absolute bottom-2 flex h-[5%] w-full items-end  justify-center ">
       <div className="flex flex-row gap-3 py-1"> 
       {slide.map((s,i) => (
          <div key={"circle-"+i} onClick={() => {setCurrent(i)}} className={`rounded-full h-2.5 w-2.5 lg:h-4 lg:w-4 cursor-pointer ${i == current ? "bg-white" : "bg-gray-500/90"  }  `}></div>
        ))}
       </div>
      </div>

      <div className="absolute top-0 h-full w-full flex items-center justify-between ">
        <button onClick={previousSlide} className=" m-1 z-20 text-gray-400 hover:text-gray-100">
          <FaChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="m-1 z-20 text-gray-400 hover:text-gray-100">
          <FaChevronRight size={30} />
        </button>
      </div>

    </div>
  )
}

const Movies = () => {
  return(
  <div className='text-white flex flex-col w-[48%] relative lg:w-[13.5%] shadow-md bg-teal-900'>
    <div className='relative rounded-md  transition-all border-2  border-teal-700'>
        <Link href="#">
          <div className="absolute top-1 left-1 text-black font-semibold"><div className="flex items-center justify-center text-center  bg-gray-200 drop-shadow-lg rounded h-4 w-[28px] text-sm">HD</div> </div>
          <Image className="rounded-md" src="https://static.123series.nl/i/8/8e/7d411959a04a0e42f71bea50a282cd49@280.jpg" alt="movie-poster" height={100} width={200} />
        </Link>

        <Link href="#">
          <div className="regular-14 text-center mt-2 h-[2rem] max-h-[2.5rem] font-semibold text-white flex-wrap overflow-hidden"> The Hunger Games  </div>
        </Link>
        <div className='flex  px-2 justify-between regular-14 text-gray-500 font-medium'>
          <p>2012</p>
          <p>Movie</p>
        </div>
      </div>
  </div>
  )
}


export default HomePage