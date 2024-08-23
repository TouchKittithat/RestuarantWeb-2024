import React from 'react'
import { useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Location() {

  useEffect(()=> {
    document.title = "Location";
  },[]);

  return (
    <div className=''>
      <div className='container mx-auto grid grid-cols-1 gap-x-14 gap-y-6 px-20 pt-20 pb-10 lg:grid-cols-3'>
          <div className='bg-red-700 text-white p-7 rounded-lg hover:cursor-pointer'>
              <h3 className='text-2xl font-bold mb-2'>Address</h3>
              <p className='font-medium inline-flex'><span className='mr-2'><FaLocationDot /></span> <span>119 ซอย 1 บ้านทุ่งรี ต.คอหงส์ อ.หาดใหญ่ สงขลา</span></p>
          </div>
          <div className='bg-red-700 text-white p-7 rounded-lg hover:cursor-pointer' >
              <h3 className='text-2xl font-bold mb-2'>Phone</h3> 
              <p className='font-medium inline-flex'> <span className='mr-2'><FaPhone /></span> <span>+012 345 67890</span></p>
          </div>
          <div className='bg-red-700 text-white p-7 rounded-lg hover:cursor-pointer'>
              <h3 className='text-2xl font-bold mb-2'>Email</h3>
              <p className='font-medium inline-flex'> <span className='mr-2 mt-1' ><MdEmail /></span> <span>mail@domain.com</span></p>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='text-white max-w-4xl mx-auto rounded-lg mb-20'>
          <iframe
            className='rounded-lg'
            title="Google Maps Location"
            width="100%"
            height="600"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15686.042208030355!2d100.4986353!3d6.9985739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d291bdf876593:0x9e234f9e188d7421!2sAu+Gratin+pasta+room!5e0!3m2!1sth!2sth!4v1690818903218!5m2!1sth!2sth"
            allowFullScreen>
          </iframe>
          </div>
        </div>
    </div>
  )
}

export default Location