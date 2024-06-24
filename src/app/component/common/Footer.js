"use client"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = ({ page }) => {
  if (page === "landingPage") {
    <footer className="flexCenter sticky bottom-2 md:relative mb-2 ms-2 z-30">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        {/* <div className="border bg-gray-20" /> */}
        <p className="regular-14 w-full  sm:text-center sm:regular-10 text-gray-30 "> 2024 &copy;One Spot | All rights reserved</p>
      </div>
    </footer>
  }
  else {

    return (
      <footer className="flexCenter py-12 z-30 bg-teal-900">
        <div className="padding-container max-container flex w-full flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-[10%] md:flex-row">
            <Link href="/" className="mb-10">
             <Image src="/logo.png" alt="logo" width={74} height={29}  className="invert"/>
            </Link>
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((column) => (
                <FooterColumn title={column.title} key={column.title}>
                  <ul className="regular-14 flex flex-col gap-4  text-gray-30">
                    {column.links.map((link) => ( 
                      <Link href="/" key={link} >
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((item) => (
                    <Link href="/" key={item.label} className="flex gap-4 md:flex-col lg:flex-row">
                      <p className="whitespace-nowrap">{item.label} : </p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">{item.value}</p>

                    </Link>
                  ))}
                </FooterColumn>
              </div>
              <div className="flex flex-col gap-5">
                <FooterColumn title={SOCIALS.title}>
                  <ul className="regular-14 flex gap-4 text-gray-30">
                    {SOCIALS.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>
          <p className="text-center -mb-5 text-gray-30 text-sm">This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
          <div className="border  bg-gray-20" />
          <p className="regular-14 w-full  pb-5 sm:text-center sm:regular-10 text-gray-30 "> 2024 &copy;One Spot | All rights reserved</p>
        </div>
      </footer>
    )
  }
}


const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-gray-200">{title}</h4>
      {children}
    </div>
  )
}


export default Footer