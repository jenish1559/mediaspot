"use client"
import SiteLogo from "../sitelogo/page";
import SearchBox from "../searchbox/page";
import NavMenu from "../navmenu/page";

const sidebarConteinerClass = "self-start bg-glass h-[10%] w-[100%] rounded-3xl p-3 border transition-all duration-500 border-solid border-glass sticky "
const NavBar = () => {
  return (
    <>
    <div className={` ${sidebarConteinerClass} flex items-center justify-between` }>
    <SiteLogo />
    <SearchBox/>
    <NavMenu/>
    </div>
    </>
  )
};


export default NavBar;