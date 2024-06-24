import Button from '@/app/component/common/Button'
import React from 'react'
import { Montserrat } from 'next/font/google'

const montSerrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

const movie = () => {
    return (
        <div className={`w-full   bg-white border border-gray-200 rounded-lg shadow sm:p-2 md:p-2 dark:bg-gray-800 dark:border-gray-700 ${montSerrat.className} `}>
            <form className="space-y-6" action="#">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Movie</h3>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4">
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="movie title" required />
                    </div>
                    <div className="col-span-4">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" name="description" id="description" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    
                   
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

            </form>
        </div>

    )
}

export default movie;
