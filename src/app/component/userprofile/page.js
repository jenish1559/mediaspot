"use client"
import Image from 'next/image';


const UserProfile = ({toggle}) => {
  return (
    <div className={`flex gap-5 items=center ${toggle ? "bg-none transition-all duration-300 delay-200" : "bg-white rounded-xl p-2"}`}>
      <div className="min-w-[3.5rem] h-[3.5rem]">
       <Image src="/user.png" alt="" className="w-full h-full rounded-full object-cover"  width={100} height={100}/>
      </div>
      <div className={toggle ? "opacity-0 delay-200" : ""}>
        <h3 className="text-xl">Johne Doe</h3>
        <span className="text-[0.75rem] opacity-60">xyz@mail.com</span>
      </div>
    </div>
  )
};


export default UserProfile;