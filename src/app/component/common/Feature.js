import { FEATURES } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
    return (
        <section className="border-2 border-red-500 flex flexCenter 
    overflow-hiddenbh-feature-bg bg-center bg-no-repeat py-24">

            <div className="padding-container max-container relative flex w-full justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image src="/phone.png"
                        alt="phone"
                        width={440}
                        height={1000}
                        className="feature-phone" />
                </div>
                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <Image src="/camp.svg"
                            alt="camp"
                            width={50}
                            height={50}
                            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
                        <h2 className="bold-40 lg:bold-64">Our Features</h2>
                    </div>
                    <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
                        {FEATURES.map((item) => (
                            <FeatureItem key={item.title}
                                title={item.title}
                                icon={item.icon}
                                varient={item.varient}
                                description={item.description} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}


const FeatureItem = ({ title, icon, varient, description }) => {
    return (
        <li className='w-full flex flex-1 flex-col items-start'>
            <div className="rounded-full p-4 lg:p-7 bg-green-50">
                <Image src={icon}
                    alt="map"
                    height={28}
                    width={28} />
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                {title}
            </h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-0 lg:mt-[30px] lg:bg-none">
                {description}
            </p>

        </li>
    )
}


export default Feature