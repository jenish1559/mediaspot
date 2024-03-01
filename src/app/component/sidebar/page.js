"use client"
import { useState,useRef,useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "../userprofile/page";
import SideBarData from "../sidebardata/page";


const sidebarConteinerClass = "bg-glass h-[96%] w-[20rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass relative "
const SideBar = ({toggle,OnToggle}) => {

 

  //const onToggle = () =>{ setToggle = !toggle}
  return (
    <div className={`${toggle  ? "w-[5.8rem]":""} ${sidebarConteinerClass}`}>
        <UserProfile toggle={toggle}/>
        <SideBarData toggle={toggle}/>
      <div className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10
                        bg-glass rounded-full cursor-pointer" 
                        onClick={() =>  OnToggle()}>
        <BiChevronLeft  className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300 `}/>
        
      </div>
    </div>
  )
};


export default SideBar;
