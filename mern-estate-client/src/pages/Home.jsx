import React from 'react'

export default function Home() {
  return (
    <div className='container mx-auto py-6 flex flex-col justify-center items-center text-center gap-2'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <p>Welcome Ramadhan</p>
      <div className='mt-4 flex gap-2'>
        <a href="" className='underline'>Profile</a>
        <a href="" className='underline text-red-500'>Logout</a>
      </div>
    </div>
  )
}
