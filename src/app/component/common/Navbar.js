"use client"
import Image from 'next/image'
import Link from 'next/link'
import '../../globals.css'
import { NAV_LINKS } from '../../constants'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import SearchBox from '../searchbox/page';
import Button from './Button';



export const Navbar = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  let manuOpenclass = "hidden";
  if (isOpen) {
    manuOpenclass = ""
  }
  else {
    manuOpenclass = "hidden"
  }

  if (page === "landingPage") {
    return (
      <nav className={"bg-teal-950/[.6]  bg-opacity flex items-center justify-between  mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 backdrop-blur-sm py-5"}>
        <Link href={"/"} >
          <Image src="/logo.png" alt="logo" width={100} height={30} className='invert invisible md:visible lg:visible' />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex mr-5">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-[16px] font-[600] text-white flex items-center justify-center 
                                                                  cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-primary">
              {link.label}
            </Link>
          ))}
          {/* <ThemeToggle size="sm" /> */}
        </ul>

        {/* LogIn button it is here if needed in future Implementation */}
        {/* <div className="hidden lg:flex lg:items-center lg:justify-center ">
          <Button type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div> */}

        <div className={`${manuOpenclass} absolute right-5 top-14 drop-shadow-xl bg-gray-10 rounded-2xl border-2 border-red-500   w-[200px] flex flex-col lg:hidden z-20`}>
          <ul className="flex  flex-col gap-3 py-3">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="text-[16px] font-[400] text-dark flex items-center justify-center 
                cursor-pointer pb-1.5 mx-2 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <IoMdClose onClick={() => { setIsOpen(false) }} className={` ${isOpen ? "" : "hidden"} inline-block transition-all   text-primary cursor-pointer  lg:hidden`} />
        <GiHamburgerMenu onClick={() => { setIsOpen(true) }} className={`${isOpen ? "hidden" : ""} inline-block transition-all text-primary cursor-pointer  lg:hidden`} />
      </nav>
    )
  }
  else {
    return (
      <nav className={"bg-teal-950/[.6] justify-between lg:justify-start border-2 border-green-50 flex items-center gap-8  mx-auto max-w-[1440px] px-6 lg:px-10 3xl:px-0 relative z-30 backdrop-blur-sm py-4 pb-2"}>
        <Link href={"/"} className='h-[35px] w-[50px] lg:h-[50px] lg:w-[80px]'>
          <Image src="/logo.png" alt="logo" width={100} height={30} className='invert ' />
        </Link>

        <ul className="hidden h-full gap-8 lg:flex mr-5">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-[16px] font-[600] text-white flex items-center justify-center 
                                                                cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-primary">
              {link.label}
            </Link>
          ))}
          {/* <ThemeToggle size="sm" /> */}
        </ul>

        <div className=" absolute right-0 px-3  lg:visible">
            {/* <Button icon="/magnify-glass.svg" variant="bg-primary h-[40px] w-[40px] text-white" /> */}
            <SearchBox className=" hidden"/>
        </div>
        {/* LogIn button it is here if needed in future Implementation */}
        {/* <div className="hidden lg:flex lg:items-center lg:justify-center ">
        <Button type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}


        <div className={`${manuOpenclass} absolute right-5 top-14 drop-shadow-xl bg-gray-10 rounded-2xl border-2 border-red-500   w-[200px] flex flex-col lg:hidden z-20`}>
          <ul className="flex  flex-col gap-3 py-3">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="text-[16px] font-[400] text-dark flex items-center justify-center 
              cursor-pointer pb-1.5 mx-2 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <IoMdClose onClick={() => { setIsOpen(false) }} className={` ${isOpen ? "" : "hidden"} inline-block transition-all   text-primary cursor-pointer  lg:hidden`} />
        <GiHamburgerMenu onClick={() => { setIsOpen(true) }} className={`${isOpen ? "hidden" : ""} inline-block transition-all text-primary cursor-pointer  lg:hidden`} />
      </nav>
    )
  }
}
