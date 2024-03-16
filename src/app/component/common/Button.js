import Image from 'next/image'
import React from 'react'
import '../../globals.css'

const Button = ({type,title,icon,variant, full}) => {
  return (
    <button type={type} className={`flex items-center justify-center gap-3 rounded-full border  ${variant} ${full && 'w-full'}`}>
     {icon && <Image src={icon} alt={title}  width={24} height={24} />} 
     <label className="bold-16 whitespace-nowrap">{title}</label>  
    </button>
  )
}

export default Button