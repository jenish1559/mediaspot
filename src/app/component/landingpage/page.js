"use client"
import SiteLogo from "../sitelogo/page";
import SearchBox from "../searchbox/page";
import NavMenu from "../navmenu/page";
import ThemeToggle from "../themetoggle/page";

const sidebarConteinerClass = "self-start bg-light h-[10%] w-[100%] rounded-3xl p-3 border transition-all duration-500 border-solid border-glass sticky "

const LandingPage = () =>{
    const currentYear = new Date().getFullYear()
    return(
    <div className="flex flex-col  w-full mx-5">

    <div className={` flex w-full h-20  justify-center relative text-white  border nav` }>
        <div className="flex justify-self-center">
        <NavMenu className="flex justify-center items-center border space-x-28 text-lg font-semibold font" />
        </div>
     
     <div className="flex absolute right-0 top-5  items-center ">
        <ThemeToggle/>
     </div>

    </div>

    <div className="flex w-full my-10 h-1/2 justify-start relative items-center border flex-col">
        <SiteLogo className={"my-5"}/>
        <SearchBox page={"landing-page"}/>

        <div className={"flex w-96 h-40 border mt-6 dark:text-white"}>
         <span><strong>Trending : </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type
             and scrambled it to make a type specimen book. 
        </span> 
        </div>
       
    </div>  

        <div class=" flex my-10 h-20 w-full border  bottom-0  bg-gray-700">
        <span className="self-end p-2 text-lightdark"><strong> &copy; </strong>MediaSpot - {currentYear}
        </span> 
        </div>
    </div>
    )
};

export default LandingPage;