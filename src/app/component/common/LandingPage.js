import React from 'react'
import { Navbar } from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar page="landingPage"/>
    <main className="overflow-hidden"> 
     <Hero/>
     {/* <Camp/> */}
     {/* <Guide/> */}
     {/* <Feature/> */}
     {/* <GetApp/> */}
     <Footer page="landingPage"/>
    </main>
    </div>
  )
}

export default LandingPage