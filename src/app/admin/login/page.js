import React from 'react'
import { Montserrat } from 'next/font/google'
import Button from '../../component/common/Button'


const montSerrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
  })

const Login = () => {
    return(
        <div className="h-screen w-screen bg-gradient-to-br from-teal-900 to-cyan-900 flex items-center justify-center ">
            <div className="border-2 border-teal-500 bg-teal-700/40 rounded-sm shadow-lg w-1/3">
              {/* <div className="bg-gray-90/60 p-3 col-span-4">
                 hello
              </div> */}
              
              <div className={`bg-gray-800/60 p-3 h-[300px] ${montSerrat.className} flex flex-col gap-3 `}>
              <h1 className={`${montSerrat.className} text-2xl font-semibold text-center text-primary pb-4`}>Sign In</h1>

               <div className="px-4  mb-2">
              <input type="text" name="username"  autocomplete="username" className="block p-2 rounded-md border-2  border-teal-500 bg-amber-50 text w-full focus:bg-teal-800 focus:border-2 focus:border-amber-400 active:border-2 active:border-amber-400 focus:ring-0" placeholder="username"/> 
              </div>
              <div className="px-4  mb-2">
              <input type="password"   autocomplete="username" className="block p-2 rounded-md border-2  border-teal-500 bg-amber-50 text w-full focus:bg-teal-800 focus:border-2 focus:border-amber-400 active:border-2 active:border-amber-400 focus:ring-0" placeholder="password"/> 
              </div>
              <div className="px-4  mb-2">
                <Button title="Login" variant={"bg-primary"} full  />
              </div>
              </div>
            </div>
        </div>
      )
}

export default Login