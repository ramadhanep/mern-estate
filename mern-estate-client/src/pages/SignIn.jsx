import React from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='container mx-auto py-6 flex flex-col justify-center items-center text-center gap-2'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <div className='w-full mt-10 grid grid-cols-6 gap-1 text-left'>
        <div className='col-span-2'></div>
        <div className='col-span-2'>
          <div>
            <label htmlFor="username" className='text-sm'>
              Username
            </label>
            <div className='mt-2'>
              <input
                type="text"
                name="username"
                id="username"
                className='w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-black'
              />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-sm'>
              Password
            </label>
            <div className='mt-2'>
              <input
                type="text"
                name="password"
                id="password"
                className='w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-black'
              />
            </div>
          </div>
          <div className='mt-4 flex flex-col justify-end text-center gap-2'>
            <button className='px-4 py-2 bg-black text-white rounded-md'>Sign In</button>
            <p>Dont have an account? <Link to="/sign-up" className='text-red-500'>Sign Up</Link></p>
          </div>
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}
