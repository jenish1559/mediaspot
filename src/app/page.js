"use client"
import { useState } from 'react'
import './globals.css'
import LandingPage from './component/common/LandingPage';

export default function Home() {
  
  const [toggle,setToggle] = useState(false);

  function onToggle(){
    setToggle(!toggle)
  }

  return (
/* <div className="w-full h-screen light dark:bg-dark object-cover relative overflow-hidden">
 <LandingPage/>
</div> */

  //   <div className="w-full h-screen bg-back object-cover flex items-center">
  //     <SideBar toggle={toggle} OnToggle={onToggle} />
  //     {/* <NavBar toggle={toggle} OnToggle={onToggle} />  */}
  //     <MainLayout>
  //     <NavBar toggle={toggle} OnToggle={onToggle} /> 
  //     <div className='mt-4 p-4'>
  //      {/* <Slider/> */}
  //     </div>
  //     </MainLayout>
  //  </div>

  // <div className="bg-teal-950">
  //   <LandingPage/>
    
  // </div>
  <div className="bg-teal-950">
    <LandingPage/>
    {/* <AppStart /> */}
  </div>
  )
}
