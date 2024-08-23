import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



function Footer() {
  return (
    <div className='bg-red-700'>
        <div className='container mx-auto pt-10 '>
            <ul className='flex justify-center text-white space-x-7 text-3xl'>
                <li><a href="/"><FaFacebook /></a></li>
                <li><a href="/"><FaInstagram /></a></li>
                <li><a href="/"><FaYoutube/></a></li>
                <li><a href="/"><FaGoogle/></a></li>
            </ul>  
        </div>
        <div className='container mx-auto  py-6'>
            <ul className='flex justify-center space-x-12 font-medium text-white'>
                <li><a href='/' className=''>Home</a></li>
                <li><a href='#' className=''>About</a></li>
                <li><a href='/location' className=''>Location</a></li>
                <li><a href='/menu' className=''>Menu</a></li>
                <li><a href='#' className=''>Our Team</a></li>
            </ul>                
        </div>
        <div className='text-center bg-red-800 p-3'>
            <span className='text-white'>Copyright @2024; Designed by Kittithat</span>
        </div>
    </div>
  )
}

export default Footer