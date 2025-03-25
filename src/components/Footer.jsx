import React from 'react'
import { Github, Instagram, Twitter, User } from 'lucide-react'
import { Facebook, } from 'lucide-react' 

const Footer = () => {
  return (
    <div className='flex justify-between px-14 py-4 '>
        <div className='flex items-center gap-2 '>
            <div className='rounded-[50%] p-2 bg-gray-400'>
                <User size={30}/>
            </div>

            <div>
                <h3 className='font-semibold text-lg'>CodeWithHarry</h3>
                <p className='text-sm text-gray-600'> Managed by CWH Solutions</p>
            </div>
        </div>


        <div>
            <ul className='flex items-center min-h-[50px] gap-3'>
                <li><a href="#" className='text-gray-500 hover:text-black'>Privacy</a></li>
                <li><a href="#" className='text-gray-500 hover:text-black'>Terms</a></li>
                <li><a href="#" className='text-gray-500 hover:text-black'>Shop</a></li>
                <li><a href="#" className='text-gray-500 hover:text-black'>Contact</a></li>
                <li><a href="#" className='text-gray-500 hover:text-black'>Refund</a></li>
            </ul>
        </div>


        <div className='flex items-center text-gray-500 gap-3 '>
            <Facebook className='hover:text-black'/>
            <Instagram className='hover:text-black'/>
            <Twitter className='hover:text-black'/>
            <Github className='hover:text-black'/>
        </div>
    </div>
  )
}

export default Footer