import { Code, SunMoon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    const codeIcon='</>'
  return (
    <div className='bg-white border-b-1 border-gray-200 flex justify-between items-center py-6 px-3'>


        <div className='text-purple-700 text-2xl font-bold '>
            {codeIcon} <span className='text-xl px-1'>CodeWithHarry</span>
        </div>

        <div >
     
            
            <ul className='flex items-center gap-4 text-lg'>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>Home</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>Courses</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>tutorials</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>blog</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>notes </a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>contact</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>my gear</a></li>
                <li><a href="#" className='hover:border-b-2 hover:border-purple-700'>Work with Us</a></li>
            </ul>
        </div>


        <div className='flex gap-2'>

            <button><SunMoon size={32} className='text-purple-700 font-bold'/></button>
            <button className='bg-purple-700 px-3 rounded-xl py-2 text-white'>Login</button>

            <button className='bg-purple-700 px-3 rounded-xl py-2 text-white'>Signup</button>

        </div>


       
        
    </div>
  )
}

export default Navbar