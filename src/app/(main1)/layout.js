import React from 'react'
import "../globals.css"
import { Navbar } from '../component/common/Navbar'
import Footer from '../component/common/Footer'

const layout = ({ children }) => {
    return (
        <div className="bg-teal-950">
            <Navbar />
            <main>
                {/* <BaseContent/> */}
                {children}
                <div className="border bg-gray-20 mb-2" />

            </main>
            <Footer />
        </div>
    )
}

export default layout