import { Home, Search } from 'lucide-react';
import React from 'react'

const Navbar2 = () => {
  return (
    <div className='px-8 py-2 shadow-md flex items-center  justify-between'>
        <div>
            <Home size={20} className='text-purple-700'/>
        </div>

        <div>
            <ul className='flex gap-6 items-center text-purple-700 font-semibold'>
                <li><a href="#" className='hover:border-b-2 '>HTML</a></li>
                <li><a href="#" className='hover:border-b-2'>CSS</a></li>
                <li><a href="#" className='hover:border-b-2'>JS</a></li>
                <li><a href="#" className='hover:border-b-2'>C</a></li>
                <li><a href="#" className='hover:border-b-2'>C++</a></li>
                <li><a href="#" className='hover:border-b-2'>JAVA</a></li>
                <li><a href="#" className='hover:border-b-2'>PYTHON</a></li>
                <li><a href="#" className='hover:border-b-2'>REACT JS</a></li>
            </ul>
        </div>

        <div>
            <Search size={20} className='text-purple-700 '/>
        </div>
    </div>
  )
}

export default Navbar2;