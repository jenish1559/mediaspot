import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../../constants'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from '../themetoggle/page';
import '../../globals.css'
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let manuOpenclass = "hidden";
  if (isOpen) {
    manuOpenclass = ""
  }
  else {
    manuOpenclass = "hidden"
  }


  return (
    <nav className={"bg-transparent flex items-center justify-between  mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5"}>
      <Link href={"/"} >
        <Image src="/logo.png" alt="logo" width={100} height={30} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="text-[16px] font-[400] text-dark flex items-center justify-center 
                                                                cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        {/* <ThemeToggle size="sm" /> */}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center ">
        <Button type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className={`${manuOpenclass} absolute right-5 top-14 drop-shadow-xl bg-gray-10 rounded-2xl border-2 border-red-500   w-[200px] flex flex-col lg:hidden z-20`}>
        <ul className="flex  flex-col gap-2 py-3">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-[16px] font-[400] text-dark flex items-center justify-center 
              cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      
       <IoMdClose  onClick={() => { setIsOpen(false) }} className={` ${ isOpen ? "" : "hidden"} inline-block transition-all  cursor-pointer  lg:hidden`} />
       <GiHamburgerMenu onClick={() => { setIsOpen(true) }} className={`${ isOpen ? "hidden" : ""} inline-block transition-all  cursor-pointer  lg:hidden`} /> 
    </nav>
  )
}
