import React from 'react'
import heroImg from '../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='flex justify-around min-h-[400px] px-10'>
      <div className='leftDiv py-20 px-15 tracking-wide'>
        <h1 className='text-3xl font-semibold'>Welcome to 
          <span className='text-purple-700 font-semibold'> CodeWithHarry </span> <br />
          Learn <span className='text-purple-700 font-semibold'>Coding !</span>
        </h1>

        <br />

        <p className='w-[90%] break-words text-gray-500'>
        Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
        </p>

        <div className='flex gap-4 mt-3'>
          <button className='bg-gray-900 hover:bg-gray-800 py-3 text-[13px] text-white px-2 rounded-md cursor-pointer'>Free Courses</button>
          <button className='bg-gray-200 hover:bg-gray-400 py-3 text-[13px] text-black px-2 rounded-md font-semibold cursor-pointer'>Explore Blog</button>
        </div>
      </div>
      <div className='rightDiv w-[200%]'>
        <img src={heroImg} alt="heroimg" className='w-full' />
      </div>
    </div>
  )
}

export default Hero