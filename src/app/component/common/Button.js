import Image from 'next/image'
import React from 'react'
import '../../globals.css'

const Button = ({type,title,icon,variant, full}) => {
  return (
    <button type={type} className={`flex items-center justify-center shadow-xl hover:scale-105 transition-all gap-3 p-3 border-l-2  text-light rounded-lg  ${variant} ${full && 'w-full'}`}>
     {icon && <Image src={icon} alt={title}  width={24} height={24} />} 
     { title && <label className="bold-16 whitespace-nowrap">{title}</label>  }
    </button> 
  )
}

export default Button