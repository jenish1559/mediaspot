import Image from 'next/image'
import Link from 'next/link'
import { Nav_Links } from '../../constants'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from '../themetoggle/page';


export const Navbar = () => {
  return (
    <nav className={"border-2 border-red-500 flex items-center justify-between  mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5"}>
        <Link href={"/"} > 
        <Image src="/sitelogo.png" alt="logo" width={74} height={29}/>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
            {Nav_Links.map((link) => (
               <Link href={link.href} key={link.key} className="text-[16px] font-[400] text-dark flex items-center justify-center 
                                                                cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
               </Link>
            ))}
            <ThemeToggle size ="sm" />
        </ul>

        <div className="hidden lg:flex lg:items-center lg:justify-center ">
            <Button type="button" 
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
             />
        </div>

        <GiHamburgerMenu  className='inline-block cursor-pointer lg:hidden'/>
        
    </nav>
  )
}
