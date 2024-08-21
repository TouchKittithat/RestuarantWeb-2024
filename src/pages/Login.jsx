import React from 'react'

function Login() {
  return (
    <div id='login' className="justify-center">
        <div className='container mx-auto'>
          <div className=' bg-gradient-to-r from-red-800 to-red-600 drop-shadow-lg mt-16 mb-24 rounded-3xl p-24 max-w-xl mx-auto'>
            <div id='form'  className="text-center">
              <form action="#" className=''>
                <p className='text-3xl font-semibold mb-9 text-white' >SIGN IN</p>
                <input type="text" placeholder='Username' className='px-3 py-2 rounded-lg my-2'/>
                {/* <p className='text-lg font-semibold my-2' >Password</p> */}
                <input type="password" placeholder='Password' className='px-3 py-2 rounded-lg my-2'/>
                <br />
                <button className='mt-10 bg-orange-500 p-2 px-20 rounded-lg text-white hover:bg-red-500' type="submit" >Sign In</button>
              </form>
            </div>

            <div className='text-center mt-5 text-sm'>
              <p className='text-white'> Not yet registered?
                <a href='/register' className='ml-3 underline decoration-solid hover:text-black'>Create account</a>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login