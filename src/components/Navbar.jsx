import React from 'react'
import { useState } from 'react'

// icons
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' bg-white/60 sticky top-0 p-5 backdrop-blur-sm drop-shadow-lg z-50'>
            <div className='container mx-auto px-16 flex justify-between items-center'>
                <a href='/' className='text-2xl font-semibold text-red-900 '> Restaurant Sritrang</a>
                <div className='flex items-center space-x-5'>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-red-800 lg:hidden">
                        {isOpen ? (
                        <IoIosCloseCircleOutline className="w-6 h-6"/>
                        ) : (
                        <GiHamburgerMenu className="w-5 h-5"/>
                        )}
                    </button>
                    <ul className={`lg:flex space-x-5 font-semibold text-black ${isOpen ? 'block' : 'hidden'}`}>
                        <li><a href='/' className='ml-5 hover:text-red-700 '>Home</a></li>
                        <li><a href='/location' className='hover:text-red-700 '>Location</a></li>
                        <li><a href='/menu' className='hover:text-red-700 '>Menu</a></li>
                        <li><a href='/login' className='bg-red-700 p-1.5 px-2 rounded-md text-white hover:bg-red-500'>Sign In</a></li>
                        <li><a href='/register' className='bg-red-700 p-1.5 px-2 rounded-md text-white hover:bg-red-500'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
    </nav>
  )
}

export default Navbar