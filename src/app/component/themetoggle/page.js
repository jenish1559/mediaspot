
'use client'
import { useEffect, useState } from "react";
import {FaMoon } from "react-icons/fa";
import {BsSunFill } from "react-icons/bs";

const ThemeToggle = ({size}) => {
    const [darkMode, setDarkMode] = useState(null);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === "dark") setDarkMode(true)
    },[])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme","dark")

        }
        else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme","light")
        }
    },[darkMode])

    let height = "h-8";
    let width = "w-16";
    let switchHeight = "h-6";
    let switchWidth = "w-6";

    if(size == "sm"){
      width = "w-12";
      height = "h-6";
      switchHeight = "h-4";
      switchWidth = "w-4";
    }

  return (
    <div className={`relative  ${width} ${height}  flex items-center bg-secondary border-solid border-2 border-primary dark:bg-gray-900 dark:border-celeste light cursour-pointer rounded-full p-1`}
     onClick={() => setDarkMode(!darkMode)} >
      <FaMoon className="text-icondark" size={18} /> 
      <div className={`absolute bg-white rounded-full  ${switchHeight} ${switchWidth}  shadow-md transform transition-transform duration-300`}
           style={ darkMode ? {left : "2px"} : {right : "2px"}}>
      </div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default ThemeToggle;
