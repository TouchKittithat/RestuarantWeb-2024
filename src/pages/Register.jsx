import React, { useState , useEffect } from 'react'

function Register() {

  useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  const [usernameReg, setUsernameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [confirmPasswordReg, setConfirmPasswordReg] = useState(''); 

  return (
    <div id='login' className="justify-center">
        <div className='container mx-auto'>
          <div className=' bg-gradient-to-r from-red-800 to-red-600 drop-shadow-lg mt-16 mb-24 rounded-3xl p-24 max-w-xl mx-auto'>
            <div id='form'  className="text-center">
              <form action="#" className=''>
                <p className='text-3xl font-semibold mb-9 text-white' >SIGN UP</p>
                <input type="text" placeholder='Username' id='username' name='username' className='px-3 py-2 rounded-lg my-2'/>
                {/* <p className='text-lg font-semibold my-2' >Password</p> */}
                <input type="email" placeholder='Email Address' id='email' name='email' className='px-3 py-2 rounded-lg my-2'/>
                <input type="password" placeholder='Password' id='password' name='password' className='px-3 py-2 rounded-lg my-2'/>
                <input type="password" placeholder='Confirm Password' id='confirmPassword' name='confirmPassword' className='px-3 py-2 rounded-lg my-2'/>
                <br />
                <button className='mt-10 bg-orange-500 p-2 px-10 rounded-lg text-white hover:bg-red-500' type="submit" >Create my account</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register