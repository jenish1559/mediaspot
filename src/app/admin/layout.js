"use client"
import React, { useState } from 'react'
import MainLayout from '../main/layout'
import SideBar from '../component/sidebar/page';
import NavBar from '../component/navbar/page';

const Admin = ({children}) => {

  const [toggle,setToggle] = useState(false);

  function onToggle(){
    setToggle(!toggle)
  }

  return (
    <div className="w-full h-screen bg-back object-cover flex p-1 border-2 border-red-500 overflow-hidden">
      <SideBar toggle={toggle} OnToggle={onToggle} />
      <div className='ps-1 w-full'>
      <NavBar toggle={toggle} OnToggle={onToggle} /> 
      <MainLayout>
      {children}
      </MainLayout>
      </div>
      
     </div>
    
  )


}

export default Admin

